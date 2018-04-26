"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_popper_1 = require("react-popper");
var abstractPureComponent_1 = require("../../common/abstractPureComponent");
var Classes = tslib_1.__importStar(require("../../common/classes"));
var Errors = tslib_1.__importStar(require("../../common/errors"));
var Utils = tslib_1.__importStar(require("../../common/utils"));
var overlay_1 = require("../overlay/overlay");
var tooltip_1 = require("../tooltip/tooltip");
var arrow_1 = require("./arrow");
var popoverMigrationUtils_1 = require("./popoverMigrationUtils");
var popperUtils_1 = require("./popperUtils");
var PopoverInteractionKind;
(function (PopoverInteractionKind) {
    PopoverInteractionKind["CLICK"] = "click";
    PopoverInteractionKind["CLICK_TARGET_ONLY"] = "click-target";
    PopoverInteractionKind["HOVER"] = "hover";
    PopoverInteractionKind["HOVER_TARGET_ONLY"] = "hover-target";
})(PopoverInteractionKind = exports.PopoverInteractionKind || (exports.PopoverInteractionKind = {}));
var Popover = /** @class */ (function (_super) {
    tslib_1.__extends(Popover, _super);
    function Popover(props, context) {
        var _this = _super.call(this, props, context) || this;
        // a flag that is set to true while we are waiting for the underlying Portal to complete rendering
        _this.isContentMounting = false;
        // a flag that lets us detect mouse movement between the target and popover,
        // now that mouseleave is triggered when you cross the gap between the two.
        _this.isMouseInTargetOrPopover = false;
        // a flag that indicates whether the target previously lost focus to another
        // element on the same page.
        _this.lostFocusOnSamePage = true;
        _this.refHandlers = {
            popover: function (ref) {
                _this.popoverElement = ref;
                Utils.safeInvoke(_this.props.popoverRef, ref);
            },
            target: function (ref) { return (_this.targetElement = ref); },
        };
        _this.handleContentMount = function () {
            if (_this.isContentMounting) {
                Utils.safeInvoke(_this.props.popoverDidOpen);
                _this.isContentMounting = false;
            }
        };
        _this.handleTargetFocus = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                if (e.relatedTarget == null && !_this.lostFocusOnSamePage) {
                    // ignore this focus event -- the target was already focused but the page itself
                    // lost focus (e.g. due to switching tabs).
                    return;
                }
                _this.handleMouseEnter(e);
            }
        };
        _this.handleTargetBlur = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                // if the next element to receive focus is within the popover, we'll want to leave the
                // popover open.
                if (!_this.isElementInPopover(e.relatedTarget)) {
                    _this.handleMouseLeave(e);
                }
            }
            _this.lostFocusOnSamePage = e.relatedTarget != null;
        };
        _this.handleMouseEnter = function (e) {
            _this.isMouseInTargetOrPopover = true;
            // if we're entering the popover, and the mode is set to be HOVER_TARGET_ONLY, we want to manually
            // trigger the mouse leave event, as hovering over the popover shouldn't count.
            if (!_this.props.usePortal &&
                _this.isElementInPopover(e.target) &&
                _this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY &&
                !_this.props.openOnTargetFocus) {
                _this.handleMouseLeave(e);
            }
            else if (!_this.props.disabled) {
                // only begin opening popover when it is enabled
                _this.setOpenState(true, e, _this.props.hoverOpenDelay);
            }
        };
        _this.handleMouseLeave = function (e) {
            _this.isMouseInTargetOrPopover = false;
            // wait until the event queue is flushed, because we want to leave the
            // popover open if the mouse entered the popover immediately after
            // leaving the target (or vice versa).
            _this.setTimeout(function () {
                if (_this.isMouseInTargetOrPopover) {
                    return;
                }
                // user-configurable closing delay is helpful when moving mouse from target to popover
                _this.setOpenState(false, e, _this.props.hoverCloseDelay);
            });
        };
        _this.handlePopoverClick = function (e) {
            var eventTarget = e.target;
            var shouldDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS) != null;
            var overrideDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS_OVERRIDE) != null;
            if (shouldDismiss && !overrideDismiss) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleOverlayClose = function (e) {
            var eventTarget = e.target;
            // if click was in target, target event listener will handle things, so don't close
            if (!Utils.elementIsOrContains(_this.targetElement, eventTarget) || e.nativeEvent instanceof KeyboardEvent) {
                _this.setOpenState(false, e);
            }
        };
        _this.handleTargetClick = function (e) {
            // ensure click did not originate from within inline popover before closing
            if (!_this.props.disabled && !_this.isElementInPopover(e.target)) {
                if (_this.props.isOpen == null) {
                    _this.setState(function (prevState) { return ({ isOpen: !prevState.isOpen }); });
                }
                else {
                    _this.setOpenState(!_this.props.isOpen, e);
                }
            }
        };
        /** Popper modifier that updates React state (for style properties) based on latest data. */
        _this.updatePopoverState = function (data) {
            // pretty sure it's safe to always set these (and let sCU determine) because they're both strings
            _this.setState({
                arrowRotation: arrow_1.getArrowAngle(data.placement),
                transformOrigin: popperUtils_1.getTransformOrigin(data),
            });
            return data;
        };
        _this.state = {
            hasDarkParent: false,
            isOpen: _this.getIsOpen(props),
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, hasBackdrop = _a.hasBackdrop, targetClassName = _a.targetClassName, targetElementTag = _a.targetElementTag;
        var isOpen = this.state.isOpen;
        var isHoverInteractionKind = this.isHoverInteractionKind();
        var targetProps;
        if (isHoverInteractionKind) {
            targetProps = {
                onBlur: this.handleTargetBlur,
                onFocus: this.handleTargetFocus,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
            // any one of the CLICK* values
        }
        else {
            targetProps = {
                onClick: this.handleTargetClick,
            };
        }
        targetProps.className = classnames_1.default(Classes.POPOVER_TARGET, (_b = {},
            _b[Classes.POPOVER_OPEN] = isOpen,
            _b), targetClassName);
        var children = this.understandChildren();
        var targetTabIndex = this.props.openOnTargetFocus && isHoverInteractionKind ? 0 : undefined;
        var target = React.cloneElement(children.target, {
            className: classnames_1.default(children.target.props.className, (_c = {},
                _c[Classes.ACTIVE] = isOpen && !isHoverInteractionKind,
                _c)),
            // force disable single Tooltip child when popover is open (BLUEPRINT-552)
            disabled: isOpen && Utils.isElementOfType(children.target, tooltip_1.Tooltip) ? true : children.target.props.disabled,
            tabIndex: targetTabIndex,
        });
        var isContentEmpty = children.content == null;
        // need to do this check in render(), because `isOpen` is derived from
        // state, and state can't necessarily be accessed in validateProps.
        if (isContentEmpty && !disabled && isOpen !== false && !Utils.isNodeEnv("production")) {
            console.warn(Errors.POPOVER_WARN_EMPTY_CONTENT);
        }
        return (React.createElement(react_popper_1.Manager, { tag: this.props.rootElementTag, className: classnames_1.default(Classes.POPOVER_WRAPPER, className) },
            React.createElement(react_popper_1.Target, tslib_1.__assign({}, targetProps, { component: targetElementTag, innerRef: this.refHandlers.target }), target),
            React.createElement(overlay_1.Overlay, { autoFocus: this.props.autoFocus, backdropClassName: Classes.POPOVER_BACKDROP, backdropProps: this.props.backdropProps, canEscapeKeyClose: this.props.canEscapeKeyClose, canOutsideClickClose: this.props.interactionKind === PopoverInteractionKind.CLICK, className: this.props.portalClassName, didClose: this.props.popoverDidClose, didOpen: this.handleContentMount, enforceFocus: this.props.enforceFocus, hasBackdrop: hasBackdrop, usePortal: this.props.usePortal, isOpen: isOpen && !isContentEmpty, onClose: this.handleOverlayClose, transitionDuration: this.props.transitionDuration, transitionName: Classes.POPOVER }, this.renderPopper(children.content))));
        var _b, _c;
    };
    Popover.prototype.componentDidMount = function () {
        this.updateDarkParent();
    };
    Popover.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        var nextIsOpen = this.getIsOpen(nextProps);
        if (nextProps.isOpen != null && nextIsOpen !== this.state.isOpen) {
            this.setOpenState(nextIsOpen);
            // tricky: setOpenState calls setState only if this.props.isOpen is
            // not controlled, so we need to invoke setState manually here.
            this.setState({ isOpen: nextIsOpen });
        }
        else if (this.state.isOpen && nextProps.isOpen == null && nextProps.disabled) {
            // special case: close an uncontrolled popover when disabled is set to true
            this.setOpenState(false);
        }
    };
    Popover.prototype.componentWillUpdate = function (_, nextState) {
        if (!this.state.isOpen && nextState.isOpen) {
            this.isContentMounting = true;
            Utils.safeInvoke(this.props.popoverWillOpen);
        }
        else if (this.state.isOpen && !nextState.isOpen) {
            Utils.safeInvoke(this.props.popoverWillClose);
        }
    };
    Popover.prototype.componentDidUpdate = function () {
        this.updateDarkParent();
    };
    Popover.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
    };
    Popover.prototype.validateProps = function (props) {
        if (props.isOpen == null && props.onInteraction != null) {
            console.warn(Errors.POPOVER_WARN_UNCONTROLLED_ONINTERACTION);
        }
        if (props.hasBackdrop && !props.usePortal) {
            console.warn(Errors.POPOVER_WARN_HAS_BACKDROP_INLINE);
        }
        if (props.hasBackdrop && props.interactionKind !== PopoverInteractionKind.CLICK) {
            throw new Error(Errors.POPOVER_HAS_BACKDROP_INTERACTION);
        }
        var childrenCount = React.Children.count(props.children);
        var hasContentProp = props.content !== undefined;
        var hasTargetProp = props.target !== undefined;
        if (childrenCount === 0 && !hasTargetProp) {
            throw new Error(Errors.POPOVER_REQUIRES_TARGET);
        }
        if (childrenCount > 2) {
            console.warn(Errors.POPOVER_WARN_TOO_MANY_CHILDREN);
        }
        if (childrenCount > 0 && hasTargetProp) {
            console.warn(Errors.POPOVER_WARN_DOUBLE_TARGET);
        }
        if (childrenCount === 2 && hasContentProp) {
            console.warn(Errors.POPOVER_WARN_DOUBLE_CONTENT);
        }
    };
    Popover.prototype.updateDarkParent = function () {
        if (this.props.usePortal && this.state.isOpen) {
            var hasDarkParent = this.targetElement != null && this.targetElement.closest("." + Classes.DARK) != null;
            this.setState({ hasDarkParent: hasDarkParent });
        }
    };
    Popover.prototype.renderPopper = function (content) {
        var _a = this.props, usePortal = _a.usePortal, interactionKind = _a.interactionKind, modifiers = _a.modifiers;
        var popoverHandlers = {
            // always check popover clicks for dismiss class
            onClick: this.handlePopoverClick,
        };
        if (interactionKind === PopoverInteractionKind.HOVER ||
            (!usePortal && interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY)) {
            popoverHandlers.onMouseEnter = this.handleMouseEnter;
            popoverHandlers.onMouseLeave = this.handleMouseLeave;
        }
        var popoverClasses = classnames_1.default(Classes.POPOVER, (_b = {},
            _b[Classes.DARK] = this.props.inheritDarkTheme && this.state.hasDarkParent,
            _b[Classes.MINIMAL] = this.props.minimal,
            _b), this.props.popoverClassName);
        var isArrowEnabled = !this.props.minimal &&
            // omitting `arrow` from `modifiers` uses Popper default, which does show an arrow.
            (modifiers.arrow == null || modifiers.arrow.enabled);
        var allModifiers = tslib_1.__assign({}, modifiers, { arrowOffset: {
                enabled: isArrowEnabled,
                fn: popperUtils_1.arrowOffsetModifier,
                order: 510,
            }, updatePopoverState: {
                enabled: true,
                fn: this.updatePopoverState,
                order: 900,
            } });
        var placement = popoverMigrationUtils_1.positionToPlacement(this.props.position);
        return (React.createElement(react_popper_1.Popper, { className: Classes.TRANSITION_CONTAINER, placement: placement, modifiers: allModifiers },
            React.createElement("div", tslib_1.__assign({ className: popoverClasses, ref: this.refHandlers.popover, style: { transformOrigin: this.state.transformOrigin } }, popoverHandlers),
                isArrowEnabled ? React.createElement(arrow_1.PopoverArrow, { angle: this.state.arrowRotation }) : undefined,
                React.createElement("div", { className: Classes.POPOVER_CONTENT }, content))));
        var _b;
    };
    // content and target can be specified as props or as children. this method
    // normalizes the two approaches, preferring child over prop.
    Popover.prototype.understandChildren = function () {
        var _a = this.props, children = _a.children, contentProp = _a.content, targetProp = _a.target;
        // #validateProps asserts that 1 <= children.length <= 2 so content is optional
        var _b = React.Children.toArray(children), targetChild = _b[0], contentChild = _b[1];
        return {
            content: ensureElement(contentChild == null ? contentProp : contentChild),
            target: ensureElement(targetChild == null ? targetProp : targetChild),
        };
    };
    Popover.prototype.getIsOpen = function (props) {
        // disabled popovers should never be allowed to open.
        if (props == null || props.disabled) {
            return false;
        }
        else if (props.isOpen != null) {
            return props.isOpen;
        }
        else {
            return props.defaultIsOpen;
        }
    };
    // a wrapper around setState({isOpen}) that will call props.onInteraction instead when in controlled mode.
    // starts a timeout to delay changing the state if a non-zero duration is provided.
    Popover.prototype.setOpenState = function (isOpen, e, timeout) {
        var _this = this;
        // cancel any existing timeout because we have new state
        Utils.safeInvoke(this.cancelOpenTimeout);
        if (timeout > 0) {
            this.cancelOpenTimeout = this.setTimeout(function () { return _this.setOpenState(isOpen, e); }, timeout);
        }
        else {
            if (this.props.isOpen == null) {
                this.setState({ isOpen: isOpen });
            }
            else {
                Utils.safeInvoke(this.props.onInteraction, isOpen);
            }
            if (!isOpen) {
                Utils.safeInvoke(this.props.onClose, e);
            }
        }
    };
    Popover.prototype.isElementInPopover = function (element) {
        return this.popoverElement != null && this.popoverElement.contains(element);
    };
    Popover.prototype.isHoverInteractionKind = function () {
        return (this.props.interactionKind === PopoverInteractionKind.HOVER ||
            this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY);
    };
    Popover.displayName = "Blueprint2.Popover";
    Popover.defaultProps = {
        defaultIsOpen: false,
        disabled: false,
        hasBackdrop: false,
        hoverCloseDelay: 300,
        hoverOpenDelay: 150,
        inheritDarkTheme: true,
        interactionKind: PopoverInteractionKind.CLICK,
        minimal: false,
        modifiers: {},
        openOnTargetFocus: true,
        position: "auto",
        rootElementTag: "span",
        targetElementTag: "div",
        transitionDuration: 300,
        usePortal: true,
    };
    return Popover;
}(abstractPureComponent_1.AbstractPureComponent));
exports.Popover = Popover;
/**
 * Converts a react child to an element: non-empty strings or numbers are wrapped in `<span>`;
 * empty strings are discarded.
 */
function ensureElement(child) {
    // wrap text in a <span> so children are always elements
    if (typeof child === "string") {
        // cull whitespace strings
        return child.trim().length > 0 ? React.createElement("span", null, child) : undefined;
    }
    else if (typeof child === "number") {
        return React.createElement("span", null, child);
    }
    else {
        return child;
    }
}

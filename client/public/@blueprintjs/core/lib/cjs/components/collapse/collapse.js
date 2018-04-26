"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var abstractPureComponent_1 = require("../../common/abstractPureComponent");
var Classes = tslib_1.__importStar(require("../../common/classes"));
var AnimationStates;
(function (AnimationStates) {
    AnimationStates["CLOSED"] = "closed";
    AnimationStates["OPENING"] = "opening";
    AnimationStates["OPEN"] = "open";
    AnimationStates["CLOSING_START"] = "closing-start";
    AnimationStates["CLOSING_END"] = "closing-end";
})(AnimationStates = exports.AnimationStates || (exports.AnimationStates = {}));
/*
 * A collapse can be in one of 5 states:
 * CLOSED
 * When in this state, the contents of the collapse is not rendered, the collapse height is 0,
 * and the body Y is at -height (so that the bottom of the body is at Y=0).
 *
 * OPEN
 * When in this state, the collapse height is set to auto, and the body Y is set to 0 (so the element can be seen
 * as normal).
 *
 * CLOSING_START
 * When in this state, height has been changed from auto to the measured height of the body to prepare for the
 * closing animation in CLOSING_END.
 *
 * CLOSING_END
 * When in this state, the height is set to 0 and the body Y is at -height. Both of these properties are transformed,
 * and then after the animation is complete, the state changes to CLOSED.
 *
 * OPENING
 * When in this state, the body is re-rendered, height is set to the measured body height and the body Y is set to 0.
 * This is all animated, and on complete, the state changes to OPEN.
 *
 * When changing the isOpen prop, the following happens to the states:
 * isOpen = true : CLOSED -> OPENING -> OPEN
 * isOpen = false: OPEN -> CLOSING_START -> CLOSING_END -> CLOSED
 * These are all animated.
 */
var Collapse = /** @class */ (function (_super) {
    tslib_1.__extends(Collapse, _super);
    function Collapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animationState: AnimationStates.OPEN,
            height: "0px",
        };
        // The most recent non-0 height (once a height has been measured - is 0 until then)
        _this.height = 0;
        _this.contentsRefHandler = function (el) {
            _this.contents = el;
            if (el != null) {
                _this.height = _this.contents.clientHeight;
                _this.setState({
                    animationState: _this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
                    height: _this.height + "px",
                });
            }
        };
        return _this;
    }
    Collapse.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.contents != null && this.contents.clientHeight !== 0) {
            this.height = this.contents.clientHeight;
        }
        if (this.props.isOpen !== nextProps.isOpen) {
            this.clearTimeouts();
            if (this.state.animationState !== AnimationStates.CLOSED && !nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.CLOSING_START,
                    height: this.height + "px",
                });
            }
            else if (this.state.animationState !== AnimationStates.OPEN && nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.OPENING,
                    height: this.height + "px",
                });
                this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
            }
        }
    };
    Collapse.prototype.render = function () {
        var isContentVisible = this.state.animationState !== AnimationStates.CLOSED;
        var shouldRenderChildren = isContentVisible || this.props.keepChildrenMounted;
        var displayWithTransform = isContentVisible && this.state.animationState !== AnimationStates.CLOSING_END;
        var isAutoHeight = this.state.height === "auto";
        var containerStyle = {
            height: isContentVisible ? this.state.height : undefined,
            overflowY: (isAutoHeight ? "visible" : undefined),
            transition: isAutoHeight ? "none" : undefined,
        };
        var contentsStyle = {
            transform: displayWithTransform ? "translateY(0)" : "translateY(-" + this.height + "px)",
            transition: isAutoHeight ? "none" : undefined,
        };
        // HACKHACK: type cast because there's no single overload that supports all
        // three ReactTypes (string | ComponentClass | StatelessComponent)
        return React.createElement(this.props.component, {
            className: classnames_1.default(Classes.COLLAPSE, this.props.className),
            style: containerStyle,
        }, React.createElement("div", { className: Classes.COLLAPSE_BODY, ref: this.contentsRefHandler, style: contentsStyle, "aria-hidden": !isContentVisible && this.props.keepChildrenMounted }, shouldRenderChildren ? this.props.children : null));
    };
    Collapse.prototype.componentDidMount = function () {
        this.forceUpdate();
        if (this.props.isOpen) {
            this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
        }
        else {
            this.setState({ animationState: AnimationStates.CLOSED });
        }
    };
    Collapse.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.animationState === AnimationStates.CLOSING_START) {
            this.setTimeout(function () {
                return _this.setState({
                    animationState: AnimationStates.CLOSING_END,
                    height: "0px",
                });
            });
            this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
        }
    };
    Collapse.prototype.onDelayedStateChange = function () {
        switch (this.state.animationState) {
            case AnimationStates.OPENING:
                this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
                break;
            case AnimationStates.CLOSING_END:
                this.setState({ animationState: AnimationStates.CLOSED });
                break;
            default:
                break;
        }
    };
    Collapse.displayName = "Blueprint2.Collapse";
    Collapse.defaultProps = {
        component: "div",
        isOpen: false,
        keepChildrenMounted: false,
        transitionDuration: 200,
    };
    return Collapse;
}(abstractPureComponent_1.AbstractPureComponent));
exports.Collapse = Collapse;

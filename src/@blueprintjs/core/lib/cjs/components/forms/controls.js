"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// we need some empty interfaces to show up in docs
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file no-empty-interface
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("../../common/classes"));
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
/**
 * Renders common control elements, with additional props to customize appearance.
 * This component is not exported and is only used in this file for `Checkbox`, `Radio`, and `Switch` below.
 */
var Control = function (_a) {
    var alignIndicator = _a.alignIndicator, children = _a.children, className = _a.className, indicator = _a.indicator, inline = _a.inline, inputRef = _a.inputRef, label = _a.label, labelElement = _a.labelElement, large = _a.large, style = _a.style, type = _a.type, typeClassName = _a.typeClassName, htmlProps = tslib_1.__rest(_a, ["alignIndicator", "children", "className", "indicator", "inline", "inputRef", "label", "labelElement", "large", "style", "type", "typeClassName"]);
    var classes = classnames_1.default(Classes.CONTROL, typeClassName, (_b = {},
        _b[Classes.DISABLED] = htmlProps.disabled,
        _b[Classes.INLINE] = inline,
        _b[Classes.LARGE] = large,
        _b), Classes.alignmentClass(alignIndicator), className);
    return (React.createElement("label", { className: classes, style: style },
        React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: inputRef, type: type })),
        React.createElement("span", { className: Classes.CONTROL_INDICATOR }, indicator),
        label,
        labelElement,
        children));
    var _b;
};
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        return React.createElement(Control, tslib_1.__assign({}, this.props, { type: "checkbox", typeClassName: Classes.SWITCH }));
    };
    Switch.displayName = "Blueprint2.Switch";
    return Switch;
}(React.PureComponent));
exports.Switch = Switch;
var Radio = /** @class */ (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        return React.createElement(Control, tslib_1.__assign({}, this.props, { type: "radio", typeClassName: Classes.RADIO }));
    };
    Radio.displayName = "Blueprint2.Radio";
    return Radio;
}(React.PureComponent));
exports.Radio = Radio;
var Checkbox = /** @class */ (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            checked: _this.props.checked || _this.props.defaultChecked || false,
            indeterminate: _this.props.indeterminate || _this.props.defaultIndeterminate || false,
        };
        _this.handleChange = function (evt) {
            var _a = evt.target, checked = _a.checked, indeterminate = _a.indeterminate;
            _this.setState({ checked: checked, indeterminate: indeterminate });
            utils_1.safeInvoke(_this.props.onChange, evt);
        };
        _this.handleInputRef = function (ref) {
            _this.input = ref;
            utils_1.safeInvoke(_this.props.inputRef, ref);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, defaultIndeterminate = _a.defaultIndeterminate, indeterminate = _a.indeterminate, controlProps = tslib_1.__rest(_a, ["defaultIndeterminate", "indeterminate"]);
        return (React.createElement(Control, tslib_1.__assign({}, controlProps, { indicator: this.renderIndicator(), inputRef: this.handleInputRef, onChange: this.handleChange, type: "checkbox", typeClassName: Classes.CHECKBOX })));
    };
    Checkbox.prototype.componentWillReceiveProps = function (_a) {
        var checked = _a.checked, indeterminate = _a.indeterminate;
        this.setState({ checked: checked, indeterminate: indeterminate });
    };
    Checkbox.prototype.componentDidMount = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.renderIndicator = function () {
        if (this.state.indeterminate) {
            return React.createElement(icon_1.Icon, { icon: "small-minus" });
        }
        else if (this.state.checked) {
            return React.createElement(icon_1.Icon, { icon: "small-tick" });
        }
        return null;
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.state.indeterminate != null) {
            this.input.indeterminate = this.state.indeterminate;
        }
    };
    Checkbox.displayName = "Blueprint2.Checkbox";
    return Checkbox;
}(React.PureComponent));
exports.Checkbox = Checkbox;

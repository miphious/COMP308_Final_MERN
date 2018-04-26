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
var Classes = tslib_1.__importStar(require("../../common/classes"));
var FormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroup, _super);
    function FormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, label = _a.label, labelFor = _a.labelFor;
        return (React.createElement("div", { className: this.getClassName() },
            React.createElement("label", { className: Classes.LABEL, htmlFor: labelFor },
                label,
                this.maybeRenderRequiredLabel()),
            React.createElement("div", { className: Classes.FORM_CONTENT },
                children,
                this.maybeRenderHelperText())));
    };
    FormGroup.prototype.getClassName = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, inline = _a.inline, intent = _a.intent;
        return classnames_1.default(Classes.FORM_GROUP, Classes.intentClass(intent), (_b = {},
            _b[Classes.DISABLED] = disabled,
            _b[Classes.INLINE] = inline,
            _b), className);
        var _b;
    };
    FormGroup.prototype.maybeRenderRequiredLabel = function () {
        var requiredLabel = this.props.requiredLabel;
        return requiredLabel === true ? FormGroup.DEFAULT_REQUIRED_CONTENT : requiredLabel;
    };
    FormGroup.prototype.maybeRenderHelperText = function () {
        var helperText = this.props.helperText;
        if (!helperText) {
            return null;
        }
        return React.createElement("div", { className: Classes.FORM_HELPER_TEXT }, helperText);
    };
    /**
     * Element used to render `required` message when a boolean value is
     * provided for that prop. Modifying the value of this property will change
     * the default globally in your app.
     *
     * Defaults to `<span class={Classes.TEXT_MUTED}>(required)</span>`.
     */
    FormGroup.DEFAULT_REQUIRED_CONTENT = React.createElement("span", { className: Classes.TEXT_MUTED }, "(required)");
    return FormGroup;
}(React.PureComponent));
exports.FormGroup = FormGroup;

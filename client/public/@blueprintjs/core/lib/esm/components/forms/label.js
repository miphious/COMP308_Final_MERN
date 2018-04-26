/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Label = /** @class */ (function (_super) {
    tslib_1.__extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, disabled = _a.disabled, helperText = _a.helperText, inline = _a.inline, text = _a.text, htmlProps = tslib_1.__rest(_a, ["children", "className", "disabled", "helperText", "inline", "text"]);
        var rootClasses = classNames(Classes.LABEL, (_b = {},
            _b[Classes.DISABLED] = disabled,
            _b[Classes.INLINE] = inline,
            _b), className);
        return (React.createElement("label", tslib_1.__assign({}, htmlProps, { className: rootClasses }),
            text,
            helperText && React.createElement("span", { className: Classes.TEXT_MUTED },
                " ",
                helperText),
            children));
        var _b;
    };
    Label.displayName = "Blueprint2.Label";
    return Label;
}(React.PureComponent));
export { Label };

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
var TextArea = /** @class */ (function (_super) {
    tslib_1.__extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, fill = _a.fill, intent = _a.intent, large = _a.large, htmlProps = tslib_1.__rest(_a, ["className", "fill", "intent", "large"]);
        var rootClasses = classNames(Classes.INPUT, Classes.intentClass(intent), (_b = {},
            _b[Classes.FILL] = fill,
            _b[Classes.LARGE] = large,
            _b), className);
        return React.createElement("textarea", tslib_1.__assign({}, htmlProps, { className: rootClasses }));
        var _b;
    };
    TextArea.displayName = "Blueprint2.TextArea";
    return TextArea;
}(React.PureComponent));
export { TextArea };

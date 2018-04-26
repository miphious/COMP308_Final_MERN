/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, Utils } from "../../common";
import { Icon } from "../icon/icon";
var Tag = /** @class */ (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveClick = function (e) {
            Utils.safeInvoke(_this.props.onRemove, e, _this.props);
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, active = _a.active, children = _a.children, className = _a.className, intent = _a.intent, interactive = _a.interactive, large = _a.large, minimal = _a.minimal, onRemove = _a.onRemove, round = _a.round, htmlProps = tslib_1.__rest(_a, ["active", "children", "className", "intent", "interactive", "large", "minimal", "onRemove", "round"]);
        var isRemovable = Utils.isFunction(onRemove);
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_b = {},
            _b[Classes.TAG_REMOVABLE] = isRemovable,
            _b[Classes.ACTIVE] = active,
            _b[Classes.INTERACTIVE] = interactive,
            _b[Classes.LARGE] = large,
            _b[Classes.MINIMAL] = minimal,
            _b[Classes.ROUND] = round,
            _b), className);
        var isLarge = large || tagClasses.indexOf(Classes.LARGE) >= 0;
        var removeButton = isRemovable ? (React.createElement("button", { type: "button", className: Classes.TAG_REMOVE, onClick: this.onRemoveClick },
            React.createElement(Icon, { icon: "small-cross", iconSize: isLarge ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD }))) : null;
        return (React.createElement("span", tslib_1.__assign({}, htmlProps, { className: tagClasses }),
            children,
            removeButton));
        var _b;
    };
    Tag.displayName = "Blueprint2.Tag";
    return Tag;
}(React.PureComponent));
export { Tag };

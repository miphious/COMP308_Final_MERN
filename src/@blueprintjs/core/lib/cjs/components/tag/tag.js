"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var icon_1 = require("../icon/icon");
var Tag = /** @class */ (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveClick = function (e) {
            common_1.Utils.safeInvoke(_this.props.onRemove, e, _this.props);
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, active = _a.active, children = _a.children, className = _a.className, intent = _a.intent, interactive = _a.interactive, large = _a.large, minimal = _a.minimal, onRemove = _a.onRemove, round = _a.round, htmlProps = tslib_1.__rest(_a, ["active", "children", "className", "intent", "interactive", "large", "minimal", "onRemove", "round"]);
        var isRemovable = common_1.Utils.isFunction(onRemove);
        var tagClasses = classnames_1.default(common_1.Classes.TAG, common_1.Classes.intentClass(intent), (_b = {},
            _b[common_1.Classes.TAG_REMOVABLE] = isRemovable,
            _b[common_1.Classes.ACTIVE] = active,
            _b[common_1.Classes.INTERACTIVE] = interactive,
            _b[common_1.Classes.LARGE] = large,
            _b[common_1.Classes.MINIMAL] = minimal,
            _b[common_1.Classes.ROUND] = round,
            _b), className);
        var isLarge = large || tagClasses.indexOf(common_1.Classes.LARGE) >= 0;
        var removeButton = isRemovable ? (React.createElement("button", { type: "button", className: common_1.Classes.TAG_REMOVE, onClick: this.onRemoveClick },
            React.createElement(icon_1.Icon, { icon: "small-cross", iconSize: isLarge ? icon_1.Icon.SIZE_LARGE : icon_1.Icon.SIZE_STANDARD }))) : null;
        return (React.createElement("span", tslib_1.__assign({}, htmlProps, { className: tagClasses }),
            children,
            removeButton));
        var _b;
    };
    Tag.displayName = "Blueprint2.Tag";
    return Tag;
}(React.PureComponent));
exports.Tag = Tag;

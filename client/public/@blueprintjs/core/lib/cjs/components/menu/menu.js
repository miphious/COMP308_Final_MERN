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
var Classes = tslib_1.__importStar(require("../../common/classes"));
var Menu = /** @class */ (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var classes = classnames_1.default(Classes.MENU, (_a = {}, _a[Classes.LARGE] = this.props.large, _a), this.props.className);
        return (React.createElement("ul", { className: classes, ref: this.props.ulRef }, this.props.children));
        var _a;
    };
    Menu.displayName = "Blueprint2.Menu";
    return Menu;
}(React.Component));
exports.Menu = Menu;

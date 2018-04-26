/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
var Menu = /** @class */ (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var classes = classNames(Classes.MENU, (_a = {}, _a[Classes.LARGE] = this.props.large, _a), this.props.className);
        return (React.createElement("ul", { className: classes, ref: this.props.ulRef }, this.props.children));
        var _a;
    };
    Menu.displayName = "Blueprint2.Menu";
    return Menu;
}(React.Component));
export { Menu };

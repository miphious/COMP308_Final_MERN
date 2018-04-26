/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
export var Elevation;
(function (Elevation) {
    Elevation[Elevation["ZERO"] = 0] = "ZERO";
    Elevation[Elevation["ONE"] = 1] = "ONE";
    Elevation[Elevation["TWO"] = 2] = "TWO";
    Elevation[Elevation["THREE"] = 3] = "THREE";
    Elevation[Elevation["FOUR"] = 4] = "FOUR";
})(Elevation || (Elevation = {}));
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, className = _a.className, elevation = _a.elevation, interactive = _a.interactive, htmlProps = tslib_1.__rest(_a, ["className", "elevation", "interactive"]);
        var classes = classNames(Classes.CARD, (_b = {}, _b[Classes.INTERACTIVE] = interactive, _b), Classes.elevationClass(elevation), className);
        return React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps));
        var _b;
    };
    Card.displayName = "Blueprint2.Card";
    Card.defaultProps = {
        elevation: Elevation.ZERO,
        interactive: false,
    };
    return Card;
}(React.PureComponent));
export { Card };

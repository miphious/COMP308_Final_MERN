/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
import { Spinner } from "./spinner";
var SVGSpinner = /** @class */ (function (_super) {
    tslib_1.__extends(SVGSpinner, _super);
    function SVGSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        // TODO: planning to remove this nested `g` element in 3.0
        // tslint:disable:blueprint-classes-constants
        return (React.createElement("g", { className: classNames(Classes.SVG_SPINNER, classes) },
            React.createElement("g", { className: "pt-svg-spinner-transform-group" }, content)));
    };
    return SVGSpinner;
}(Spinner));
export { SVGSpinner };

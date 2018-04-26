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
var Classes = tslib_1.__importStar(require("../../common/classes"));
var spinner_1 = require("./spinner");
var SVGSpinner = /** @class */ (function (_super) {
    tslib_1.__extends(SVGSpinner, _super);
    function SVGSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        // TODO: planning to remove this nested `g` element in 3.0
        // tslint:disable:blueprint-classes-constants
        return (React.createElement("g", { className: classnames_1.default(Classes.SVG_SPINNER, classes) },
            React.createElement("g", { className: "pt-svg-spinner-transform-group" }, content)));
    };
    return SVGSpinner;
}(spinner_1.Spinner));
exports.SVGSpinner = SVGSpinner;

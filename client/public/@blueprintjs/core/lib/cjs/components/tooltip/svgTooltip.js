"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var tooltip_1 = require("./tooltip");
var SVGTooltip = /** @class */ (function (_super) {
    tslib_1.__extends(SVGTooltip, _super);
    function SVGTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTooltip.prototype.render = function () {
        return (React.createElement(tooltip_1.Tooltip, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGTooltip;
}(React.Component));
exports.SVGTooltip = SVGTooltip;

"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var popover_1 = require("./popover");
var SVGPopover = /** @class */ (function (_super) {
    tslib_1.__extends(SVGPopover, _super);
    function SVGPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPopover.prototype.render = function () {
        return (React.createElement(popover_1.Popover, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGPopover;
}(React.Component));
exports.SVGPopover = SVGPopover;

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { Tooltip } from "./tooltip";
var SVGTooltip = /** @class */ (function (_super) {
    tslib_1.__extends(SVGTooltip, _super);
    function SVGTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTooltip.prototype.render = function () {
        return (React.createElement(Tooltip, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGTooltip;
}(React.Component));
export { SVGTooltip };

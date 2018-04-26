/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { Popover } from "./popover";
var SVGPopover = /** @class */ (function (_super) {
    tslib_1.__extends(SVGPopover, _super);
    function SVGPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPopover.prototype.render = function () {
        return (React.createElement(Popover, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGPopover;
}(React.Component));
export { SVGPopover };

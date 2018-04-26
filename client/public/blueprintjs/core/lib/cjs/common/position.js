"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Position;
(function (Position) {
    Position["TOP_LEFT"] = "top-left";
    Position["TOP"] = "top";
    Position["TOP_RIGHT"] = "top-right";
    Position["RIGHT_TOP"] = "right-top";
    Position["RIGHT"] = "right";
    Position["RIGHT_BOTTOM"] = "right-bottom";
    Position["BOTTOM_RIGHT"] = "bottom-right";
    Position["BOTTOM"] = "bottom";
    Position["BOTTOM_LEFT"] = "bottom-left";
    Position["LEFT_BOTTOM"] = "left-bottom";
    Position["LEFT"] = "left";
    Position["LEFT_TOP"] = "left-top";
})(Position = exports.Position || (exports.Position = {}));
function isPositionHorizontal(position) {
    /* istanbul ignore next */
    return (position === Position.TOP ||
        position === Position.TOP_LEFT ||
        position === Position.TOP_RIGHT ||
        position === Position.BOTTOM ||
        position === Position.BOTTOM_LEFT ||
        position === Position.BOTTOM_RIGHT);
}
exports.isPositionHorizontal = isPositionHorizontal;
function isPositionVertical(position) {
    /* istanbul ignore next */
    return (position === Position.LEFT ||
        position === Position.LEFT_TOP ||
        position === Position.LEFT_BOTTOM ||
        position === Position.RIGHT ||
        position === Position.RIGHT_TOP ||
        position === Position.RIGHT_BOTTOM);
}
exports.isPositionVertical = isPositionVertical;

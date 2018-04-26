/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import * as Classes from "../../common/classes";
import { clamp } from "../../common/utils";
import { CoreSlider, formatPercentage } from "./coreSlider";
import { Handle } from "./handle";
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:enable member-ordering
        _this.handleHandleRef = function (ref) {
            _this.handle = ref;
        };
        return _this;
    }
    Slider.prototype.renderFill = function () {
        var tickSizeRatio = this.state.tickSizeRatio;
        var initialValue = clamp(this.props.initialValue, this.props.min, this.props.max);
        var offsetRatio = (initialValue - this.props.min) * tickSizeRatio;
        var sizeRatio = (this.props.value - initialValue) * tickSizeRatio;
        if (sizeRatio < 0) {
            offsetRatio += sizeRatio;
            sizeRatio = Math.abs(sizeRatio);
        }
        var offsetPercentage = formatPercentage(offsetRatio);
        var sizePercentage = formatPercentage(sizeRatio);
        var style = this.props.vertical
            ? { bottom: offsetPercentage, height: sizePercentage }
            : { left: offsetPercentage, width: sizePercentage };
        return React.createElement("div", { className: Classes.SLIDER + "-progress", style: style });
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (React.createElement(Handle, tslib_1.__assign({}, this.props, this.state, { className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef })));
    };
    Slider.prototype.handleTrackClick = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleMovement(event);
        }
    };
    Slider.prototype.handleTrackTouch = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleTouchMovement(event);
        }
    };
    Slider.defaultProps = {
        disabled: false,
        initialValue: 0,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: 0,
        vertical: false,
    };
    return Slider;
}(CoreSlider));
export { Slider };

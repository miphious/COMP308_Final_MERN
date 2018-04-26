"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("../../common/classes"));
var utils_1 = require("../../common/utils");
var coreSlider_1 = require("./coreSlider");
var handle_1 = require("./handle");
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
        var initialValue = utils_1.clamp(this.props.initialValue, this.props.min, this.props.max);
        var offsetRatio = (initialValue - this.props.min) * tickSizeRatio;
        var sizeRatio = (this.props.value - initialValue) * tickSizeRatio;
        if (sizeRatio < 0) {
            offsetRatio += sizeRatio;
            sizeRatio = Math.abs(sizeRatio);
        }
        var offsetPercentage = coreSlider_1.formatPercentage(offsetRatio);
        var sizePercentage = coreSlider_1.formatPercentage(sizeRatio);
        var style = this.props.vertical
            ? { bottom: offsetPercentage, height: sizePercentage }
            : { left: offsetPercentage, width: sizePercentage };
        return React.createElement("div", { className: Classes.SLIDER + "-progress", style: style });
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (React.createElement(handle_1.Handle, tslib_1.__assign({}, this.props, this.state, { className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef })));
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
}(coreSlider_1.CoreSlider));
exports.Slider = Slider;

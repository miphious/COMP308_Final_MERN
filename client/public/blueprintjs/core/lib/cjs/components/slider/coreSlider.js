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
var abstractPureComponent_1 = require("../../common/abstractPureComponent");
var Classes = tslib_1.__importStar(require("../../common/classes"));
var Errors = tslib_1.__importStar(require("../../common/errors"));
var utils_1 = require("../../common/utils");
var CoreSlider = /** @class */ (function (_super) {
    tslib_1.__extends(CoreSlider, _super);
    function CoreSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = Classes.SLIDER;
        _this.refHandlers = {
            track: function (el) { return (_this.trackElement = el); },
        };
        _this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        _this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        _this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + Classes.SLIDER_HANDLE) == null;
        };
        _this.state = {
            labelPrecision: _this.getLabelPrecision(props),
            tickSize: 0,
            tickSizeRatio: 0,
        };
        return _this;
    }
    CoreSlider.prototype.render = function () {
        var classes = classnames_1.default(this.className, (_a = {},
            _a[Classes.DISABLED] = this.props.disabled,
            _a[Classes.SLIDER + "-unlabeled"] = this.props.labelRenderer === false,
            _a[Classes.VERTICAL] = this.props.vertical,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch },
            React.createElement("div", { className: Classes.SLIDER + "-track", ref: this.refHandlers.track }),
            this.maybeRenderFill(),
            this.maybeRenderAxis(),
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentWillReceiveProps = function (props) {
        _super.prototype.componentWillReceiveProps.call(this, props);
        this.setState({ labelPrecision: this.getLabelPrecision(props) });
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var labelRenderer = this.props.labelRenderer;
        if (labelRenderer === false) {
            return undefined;
        }
        else if (utils_1.isFunction(labelRenderer)) {
            // TODO: TS 2.7 might have a type narrowing issue?
            return labelRenderer(value);
        }
        else {
            return value.toFixed(this.state.labelPrecision);
        }
    };
    CoreSlider.prototype.validateProps = function (props) {
        if (props.stepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_STEP);
        }
        if (props.labelStepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_LABEL_STEP);
        }
    };
    CoreSlider.prototype.getTrackInitialPixel = function () {
        if (this.trackElement == null) {
            return undefined;
        }
        var trackRect = this.trackElement.getBoundingClientRect();
        // for vertical tracks, the initial (lowest-`value`) pixel is on the bottom.
        return this.props.vertical ? trackRect.top + trackRect.height : trackRect.left;
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        // explicit typedefs are required because tsc (rightly) assumes that props might be overriden with different
        // types in subclasses
        var max = this.props.max;
        var min = this.props.min;
        var labelStepSize = this.props.labelStepSize;
        if (this.props.labelRenderer === false) {
            return undefined;
        }
        var stepSizeRatio = this.state.tickSizeRatio * labelStepSize;
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration ban-comma-operator
        for (var i = min, offsetRatio = 0; i < max || utils_1.approxEqual(i, max); i += labelStepSize, offsetRatio += stepSizeRatio) {
            var offsetPercentage = formatPercentage(offsetRatio);
            var style = this.props.vertical ? { bottom: offsetPercentage } : { left: offsetPercentage };
            labels.push(React.createElement("div", { className: Classes.SLIDER + "-label", key: i, style: style }, this.formatLabel(i)));
        }
        return React.createElement("div", { className: Classes.SLIDER + "-axis" }, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.getLabelPrecision = function (_a) {
        var labelPrecision = _a.labelPrecision, stepSize = _a.stepSize;
        // infer default label precision from stepSize because that's how much the handle moves.
        return labelPrecision == null ? utils_1.countDecimalPlaces(stepSize) : labelPrecision;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var trackSize = this.props.vertical ? this.trackElement.clientHeight : this.trackElement.clientWidth;
            var tickSizeRatio = 1 / (this.props.max - this.props.min);
            var tickSize = trackSize * tickSizeRatio;
            this.setState({ tickSize: tickSize, tickSizeRatio: tickSizeRatio });
        }
    };
    return CoreSlider;
}(abstractPureComponent_1.AbstractPureComponent));
exports.CoreSlider = CoreSlider;
/** Helper function for formatting ratios as CSS percentage values. */
function formatPercentage(ratio) {
    return (ratio * 100).toFixed(2) + "%";
}
exports.formatPercentage = formatPercentage;

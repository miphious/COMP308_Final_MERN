/// <reference types="react" />
import * as React from "react";
import { AbstractPureComponent } from "../../common/abstractPureComponent";
import { IProps } from "../../common/props";
export interface ICoreSliderProps extends IProps {
    /**
     * Whether the slider is non-interactive.
     * @default false
     */
    disabled?: boolean;
    /**
     * Increment between successive labels. Must be greater than zero.
     * @default 1
     */
    labelStepSize?: number;
    /**
     * Number of decimal places to use when rendering label value. Default value is the number of
     * decimals used in the `stepSize` prop. This prop has _no effect_ if you supply a custom
     * `labelRenderer` callback.
     * @default inferred from stepSize
     */
    labelPrecision?: number;
    /**
     * Maximum value of the slider.
     * @default 10
     */
    max?: number;
    /**
     * Minimum value of the slider.
     * @default 0
     */
    min?: number;
    /**
     * Whether a solid bar should be rendered on the track between current and initial values,
     * or between handles for `RangeSlider`.
     * @default true
     */
    showTrackFill?: boolean;
    /**
     * Increment between successive values; amount by which the handle moves. Must be greater than zero.
     * @default 1
     */
    stepSize?: number;
    /**
     * Callback to render a single label. Useful for formatting numbers as currency or percentages.
     * If `true`, labels will use number value formatted to `labelPrecision` decimal places.
     * If `false`, labels will not be shown.
     * @default true
     */
    labelRenderer?: boolean | ((value: number) => string | JSX.Element);
    /**
     * Whether to show the slider in a vertical orientation.
     * @default false
     */
    vertical?: boolean;
}
export interface ISliderState {
    labelPrecision?: number;
    /** the client size, in pixels, of one tick */
    tickSize?: number;
    /** the size of one tick as a ratio of the component's client size */
    tickSizeRatio?: number;
}
export declare abstract class CoreSlider<P extends ICoreSliderProps> extends AbstractPureComponent<P, ISliderState> {
    className: string;
    private trackElement;
    private refHandlers;
    constructor(props: P);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillReceiveProps(props: P & {
        children: React.ReactNode;
    }): void;
    protected abstract renderHandles(): JSX.Element | JSX.Element[];
    protected abstract renderFill(): JSX.Element;
    /** An event listener invoked when the user clicks on the track outside a handle */
    protected abstract handleTrackClick(event: React.MouseEvent<HTMLElement>): void;
    protected abstract handleTrackTouch(event: React.TouchEvent<HTMLElement>): void;
    protected formatLabel(value: number): React.ReactChild;
    protected validateProps(props: P): void;
    protected getTrackInitialPixel(): number;
    private maybeRenderAxis();
    private maybeRenderFill();
    private maybeHandleTrackClick;
    private maybeHandleTrackTouch;
    private canHandleTrackEvent;
    private getLabelPrecision({labelPrecision, stepSize});
    private updateTickSize();
}
/** Helper function for formatting ratios as CSS percentage values. */
export declare function formatPercentage(ratio: number): string;

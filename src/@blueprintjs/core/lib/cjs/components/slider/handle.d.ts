/// <reference types="react" />
import * as React from "react";
import { AbstractPureComponent } from "../../common/abstractPureComponent";
import { IProps } from "../../common/props";
/**
 * N.B. some properties need to be optional for spread in slider.tsx to work
 */
export interface IHandleProps extends IProps {
    disabled?: boolean;
    label: React.ReactChild;
    max?: number;
    min?: number;
    onChange?: (newValue: number) => void;
    onRelease?: (newValue: number) => void;
    stepSize?: number;
    tickSize?: number;
    tickSizeRatio?: number;
    value?: number;
    vertical?: boolean;
}
export interface IHandleState {
    /** whether slider handle is currently being dragged */
    isMoving?: boolean;
}
export declare class Handle extends AbstractPureComponent<IHandleProps, IHandleState> {
    static displayName: string;
    state: {
        isMoving: boolean;
    };
    private handleElement;
    private refHandlers;
    render(): JSX.Element;
    componentWillUnmount(): void;
    /** Convert client pixel to value between min and max. */
    clientToValue(clientPixel: number): number;
    mouseEventClientOffset(event: MouseEvent | React.MouseEvent<HTMLElement>): number;
    touchEventClientOffset(event: TouchEvent | React.TouchEvent<HTMLElement>): number;
    beginHandleMovement: (event: MouseEvent | React.MouseEvent<HTMLElement>) => void;
    beginHandleTouchMovement: (event: TouchEvent | React.TouchEvent<HTMLElement>) => void;
    protected validateProps(props: IHandleProps): void;
    private endHandleMovement;
    private endHandleTouchMovement;
    private handleMoveEndedAt;
    private handleHandleMovement;
    private handleHandleTouchMovement;
    private handleMovedTo;
    private handleKeyDown;
    private handleKeyUp;
    /** Clamp value and invoke callback if it differs from current value */
    private changeValue(newValue, callback?);
    /** Clamp value between min and max props */
    private clamp(value);
    private getHandleElementCenterPixel(handleElement);
    private getHandleMidpointAndOffset(handleElement, useOppositeDimension?);
    private removeDocumentEventListeners();
}

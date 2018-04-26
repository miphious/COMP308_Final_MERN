/// <reference types="react" />
import { Modifiers as PopperModifiers } from "popper.js";
import * as React from "react";
import { AbstractPureComponent } from "../../common/abstractPureComponent";
import { Position } from "../../common/position";
import { IProps } from "../../common/props";
import { IOverlayableProps } from "../overlay/overlay";
export { PopperModifiers };
export declare enum PopoverInteractionKind {
    CLICK = "click",
    CLICK_TARGET_ONLY = "click-target",
    HOVER = "hover",
    HOVER_TARGET_ONLY = "hover-target",
}
export interface IPopoverProps extends IOverlayableProps, IProps {
    /** HTML props for the backdrop element. Can be combined with `backdropClassName`. */
    backdropProps?: React.HTMLProps<HTMLDivElement>;
    /**
     * The content displayed inside the popover.
     * This can instead be provided as the second `children` element (first is `target`).
     */
    content?: string | JSX.Element;
    /**
     * Initial opened state when uncontrolled.
     * @default false
     */
    defaultIsOpen?: boolean;
    /**
     * The amount of time in milliseconds the popover should remain open after the
     * user hovers off the trigger. The timer is canceled if the user mouses over the
     * target before it expires. This option only applies when `interactionKind` is `HOVER` or
     * `HOVER_TARGET_ONLY`.
     * @default 300
     */
    hoverCloseDelay?: number;
    /**
     * The amount of time in milliseconds the popover should wait before opening after the the
     * user hovers over the trigger. The timer is canceled if the user mouses away from the
     * target before it expires. This option only applies when `interactionKind` is `HOVER` or
     * `HOVER_TARGET_ONLY`.
     * @default 150
     */
    hoverOpenDelay?: number;
    /**
     * Whether a popover should automatically inherit the dark theme from its parent.
     * Note that this prop is ignored if `usePortal={false}`, as the Popover will inherit dark theme via CSS.
     * @default true
     */
    inheritDarkTheme?: boolean;
    /**
     * The kind of interaction that triggers the display of the popover.
     * @default PopoverInteractionKind.CLICK
     */
    interactionKind?: PopoverInteractionKind;
    /**
     * Prevents the popover from appearing when `true`, even if `isOpen={true}`.
     * @default false
     */
    disabled?: boolean;
    /**
     * Enables an invisible overlay beneath the popover that captures clicks and prevents
     * interaction with the rest of the document until the popover is closed.
     * This prop is only available when `interactionKind` is `PopoverInteractionKind.CLICK`.
     * When popovers with backdrop are opened, they become focused.
     * @default false
     */
    hasBackdrop?: boolean;
    /**
     * Whether the popover is visible. Passing this prop puts the popover in
     * controlled mode, where the only way to change visibility is by updating this property.
     * If `disabled={true}`, this prop will be ignored, and the popover will remain closed.
     * @default undefined
     */
    isOpen?: boolean;
    /**
     * Whether to apply minimal styles to this popover, which includes removing the arrow
     * and adding `Classes.MINIMAL` to minimize and accelerate the transitions.
     * @default false
     */
    minimal?: boolean;
    /**
     * Popper modifier options, passed directly to internal Popper instance.
     * See https://popper.js.org/popper-documentation.html#modifiers for complete details.
     */
    modifiers?: PopperModifiers;
    /**
     * Callback invoked in controlled mode when the popover open state *would* change due to
     * user interaction based on the value of `interactionKind`.
     */
    onInteraction?: (nextOpenState: boolean) => void;
    /**
     * Whether the popover should open when its target is focused.
     * If `true`, target will render with `tabindex="0"` to make it focusable via keyboard navigation.
     * This prop is only available when `interactionKind` is `HOVER` or `HOVER_TARGET_ONLY`.
     * @default true
     */
    openOnTargetFocus?: boolean;
    /**
     * A space-delimited string of class names applied to the popover.
     */
    popoverClassName?: string;
    /**
     * Callback invoked after the popover closes and has been removed from the DOM.
     */
    popoverDidClose?: () => void;
    /**
     * Callback invoked when the popover opens after it is added to the DOM.
     */
    popoverDidOpen?: () => void;
    /**
     * Ref supplied to the `Classes.POPOVER` element.
     */
    popoverRef?: (ref: HTMLDivElement | null) => void;
    /**
     * Callback invoked when a popover begins to close.
     */
    popoverWillClose?: () => void;
    /**
     * Callback invoked before the popover opens.
     */
    popoverWillOpen?: () => void;
    /**
     * Space-delimited string of class names applied to the
     * portal that holds the popover if `usePortal={true}`.
     */
    portalClassName?: string;
    /**
     * The position (relative to the target) at which the popover should appear.
     *
     * The default value of `"auto"` will choose the best position when opened
     * and will allow the popover to reposition itself to remain onscreen as the
     * user scrolls around.
     */
    position?: Position | "auto";
    /**
     * The name of the HTML tag to use when rendering the popover target wrapper
     * element (`Classes.POPOVER_WRAPPER`).
     * @default "span"
     */
    rootElementTag?: string;
    /**
     * The target element to which the popover content is attached.
     * This can instead be provided as the first `children` element.
     */
    target?: string | JSX.Element;
    /**
     * Space-delimited string of class names applied to the target.
     */
    targetClassName?: string;
    /**
     * The name of the HTML tag to use when rendering the popover target element.
     * @default "div"
     */
    targetElementTag?: string;
    /**
     * Whether the popover should be rendered inside a `Portal` attached to `document.body`.
     * Rendering content inside a `Portal` allows the popover content to escape the physical bounds of its
     * parent while still being positioned correctly relative to its target.
     *
     * Using a `Portal` is necessary if any ancestor of the target hides overflow or uses very complex positioning.
     * Not using a `Portal` can result in smoother performance when scrolling and allows the popover content to inherit
     * CSS styles from surrounding elements.
     * @default true
     */
    usePortal?: boolean;
}
export interface IPopoverState {
    arrowRotation?: number;
    transformOrigin?: string;
    isOpen?: boolean;
    hasDarkParent?: boolean;
}
export declare class Popover extends AbstractPureComponent<IPopoverProps, IPopoverState> {
    static displayName: string;
    static defaultProps: IPopoverProps;
    /**
     * DOM element that contains the popover.
     * When `usePortal={true}`, this element will be portaled outside the usual DOM flow,
     * so this reference can be very useful for testing.
     */
    popoverElement: HTMLElement;
    /** DOM element that contains the target. */
    targetElement: HTMLElement;
    private isContentMounting;
    private cancelOpenTimeout;
    private isMouseInTargetOrPopover;
    private lostFocusOnSamePage;
    private refHandlers;
    constructor(props?: IPopoverProps, context?: any);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IPopoverProps): void;
    componentWillUpdate(_: IPopoverProps, nextState: IPopoverState): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    protected validateProps(props: IPopoverProps & {
        children?: React.ReactNode;
    }): void;
    private updateDarkParent();
    private renderPopper(content);
    private understandChildren();
    private getIsOpen(props?);
    private handleContentMount;
    private handleTargetFocus;
    private handleTargetBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private handlePopoverClick;
    private handleOverlayClose;
    private handleTargetClick;
    private setOpenState(isOpen, e?, timeout?);
    private isElementInPopover(element);
    private isHoverInteractionKind();
    /** Popper modifier that updates React state (for style properties) based on latest data. */
    private updatePopoverState;
}

/// <reference types="react" />
import * as React from "react";
import { Alignment } from "../../common/alignment";
import { IActionProps } from "../../common/props";
import { IconName } from "../icon/icon";
export interface IButtonProps extends IActionProps {
    /**
     * If set to `true`, the button will display in an active state.
     * This is equivalent to setting `className={Classes.ACTIVE}`.
     * @default false
     */
    active?: boolean;
    /**
     * Text alignment within button. By default, icons and text will be centered within the button.
     * Passing this prop will cause the text container to fill the button and align the text within that
     * to the appropriate side. `icon` and `rightIcon` will be pushed to either side.
     * @default Alignment.CENTER
     */
    alignText?: Alignment;
    /** A ref handler that receives the native HTML element backing this component. */
    elementRef?: (ref: HTMLElement | null) => any;
    /** Whether this button should expand to fill its container. */
    fill?: boolean;
    /** Whether this button should use large styles. */
    large?: boolean;
    /**
     * If set to `true`, the button will display a centered loading spinner instead of its contents.
     * The width of the button is not affected by the value of this prop.
     * @default false
     */
    loading?: boolean;
    /** Whether this button should use minimal styles. */
    minimal?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render after the text. */
    rightIcon?: IconName | JSX.Element;
    /** Whether this button should use small styles. */
    small?: boolean;
    /**
     * HTML `type` attribute of button. Common values are `"button"` and `"submit"`.
     * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
     * @default "button"
     */
    type?: string;
}
export interface IButtonState {
    isActive: boolean;
}
export declare abstract class AbstractButton<H extends React.HTMLAttributes<any>> extends React.PureComponent<IButtonProps & H, IButtonState> {
    state: {
        isActive: boolean;
    };
    protected buttonRef: HTMLElement;
    protected refHandlers: {
        button: (ref: HTMLElement) => void;
    };
    private currentKeyDown;
    abstract render(): JSX.Element;
    protected getCommonButtonProps(): {
        className: string;
        disabled: (IButtonProps & H)["loading"];
        onClick: (IButtonProps & H)["onClick"];
        onKeyDown: (e: React.KeyboardEvent<any>) => void;
        onKeyUp: (e: React.KeyboardEvent<any>) => void;
        ref: (ref: HTMLElement) => void;
    };
    protected handleKeyDown: (e: React.KeyboardEvent<any>) => void;
    protected handleKeyUp: (e: React.KeyboardEvent<any>) => void;
    protected renderChildren(): React.ReactNode;
}

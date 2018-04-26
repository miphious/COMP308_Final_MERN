/// <reference types="react" />
import * as React from "react";
import { Alignment } from "../../common/alignment";
import { HTMLDivProps, IProps } from "../../common/props";
export interface IButtonGroupProps extends IProps, HTMLDivProps {
    /**
     * Text alignment of button contents.
     * This prop only has an effect if buttons are wider than their default widths.
     *
     * `align={Alignment.LEFT}` will left-align button text and push `rightIcon` to right side.
     * `align={Alignment.RIGHT}` right-aligns text and pushes `icon` to left side.
     */
    alignText?: Alignment;
    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill?: boolean;
    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal?: boolean;
    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large?: boolean;
    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical?: boolean;
}
export declare class ButtonGroup extends React.PureComponent<IButtonGroupProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}

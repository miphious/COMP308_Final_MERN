/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, IProps {
    /**
     * Whether the label is non-interactive.
     * Be sure to explicitly disable any child controls as well.
     */
    disabled?: boolean;
    /** The helper text to show next to the label. */
    helperText?: React.ReactNode;
    /** Whether to render the label and children on a single line. */
    inline?: boolean;
    /** The text to show in the label. */
    text: React.ReactNode;
}
export declare class Label extends React.PureComponent<ILabelProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}

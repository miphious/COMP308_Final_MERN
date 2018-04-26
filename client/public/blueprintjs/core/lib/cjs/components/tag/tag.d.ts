/// <reference types="react" />
import * as React from "react";
import { IIntentProps, IProps } from "../../common";
export interface ITagProps extends IProps, IIntentProps, React.HTMLAttributes<HTMLSpanElement> {
    /**
     * If set to `true`, the tag will display in an active state.
     * This is equivalent to setting `className={Classes.ACTIVE}`.
     * @default false
     */
    active?: boolean;
    /**
     * Whether the tag should visually respond to user interactions. If set
     * to `true`, hovering over the tag will change its color and mouse cursor.
     *
     * Recommended when `onClick` is also defined.
     *
     * @default false
     */
    interactive?: boolean;
    /** Whether this tag should use large styles. */
    large?: boolean;
    /** Whether this tag should use minimal styles. */
    minimal?: boolean;
    /**
     * Callback invoked when the tag is clicked.
     * Recommended when `interactive` is `true`.
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Click handler for remove button.
     * Button will only be rendered if this prop is defined.
     */
    onRemove?: (e: React.MouseEvent<HTMLButtonElement>, tagProps: ITagProps) => void;
    /** Whether this tag should have rounded ends. */
    round?: boolean;
}
export declare class Tag extends React.PureComponent<ITagProps, {}> {
    static displayName: string;
    render(): JSX.Element;
    private onRemoveClick;
}

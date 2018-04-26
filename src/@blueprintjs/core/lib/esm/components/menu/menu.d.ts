/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
export interface IMenuProps extends IProps {
    /** Whether the menu items in this menu should use a large appearance. */
    large?: boolean;
    /** Ref handler that receives the HTML `<ul>` element backing this component. */
    ulRef?: (ref: HTMLUListElement | null) => any;
}
export declare class Menu extends React.Component<IMenuProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}

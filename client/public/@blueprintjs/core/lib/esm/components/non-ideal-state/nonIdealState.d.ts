/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
import { IconName } from "../icon/icon";
export interface INonIdealStateProps extends IProps {
    /** An action to resolve the non-ideal state which appears last (after `description`). */
    action?: JSX.Element;
    /** React children will appear immediately after `description` in the same container. */
    children?: React.ReactNode;
    /** A longer description of the non-ideal state. */
    description?: React.ReactNode;
    /** The title of the non-ideal state. */
    title?: React.ReactNode;
    /** The name of a Blueprint icon or a JSX Element (such as `<Spinner/>`) to render above the title. */
    visual?: IconName | JSX.Element;
}
export declare class NonIdealState extends React.PureComponent<INonIdealStateProps, {}> {
    render(): JSX.Element;
    private maybeRenderDescription();
    private maybeRenderVisual();
}

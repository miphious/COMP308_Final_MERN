/// <reference types="react" />
import * as React from "react";
import { HTMLDivProps, IIntentProps, IProps } from "../../common";
import { IconName } from "../icon/icon";
/** This component also supports the full range of HTML `<div>` props. */
export interface ICalloutProps extends IIntentProps, IProps, HTMLDivProps {
    /**
     * Name of a Blueprint UI icon (or an icon element) to render on the left side.
     *
     * If this prop is omitted or `undefined`, the `intent` prop will determine a default icon.
     * If this prop is explicitly `null`, no icon will be displayed (regardless of `intent`).
     */
    icon?: IconName | JSX.Element | null;
    /**
     * String content of optional title element.
     *
     * Due to a conflict with the HTML prop types, to provide JSX content simply
     * pass `<h4 className={Classes.CALLOUT_TITLE}>JSX title content<h4>` as
     * first `children` element instead of using this prop.
     */
    title?: string;
}
export declare class Callout extends React.PureComponent<ICalloutProps, {}> {
    render(): JSX.Element;
    private getIconName();
}

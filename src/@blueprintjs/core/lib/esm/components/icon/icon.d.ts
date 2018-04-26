/// <reference types="react" />
import * as React from "react";
import { IconName } from "@blueprintjs/icons";
import { IIntentProps, IProps } from "../../common";
export { IconName };
export interface IIconProps extends IIntentProps, IProps {
    /** This component does not support custom children. Use the `icon` prop. */
    children?: never;
    /**
     * Color of icon. Equivalent to setting CSS `fill` property.
     */
    color?: string;
    /**
     * Name of a Blueprint UI icon, or an icon element, to render.
     * This prop is required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an `IconName` (a string literal union of all icon names),
     *   that icon will be rendered as an `<svg>` with `<path>` tags.
     * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
     *   This type is supported to simplify usage of this component in other Blueprint components.
     *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
     */
    icon: IconName | JSX.Element | false | null | undefined;
    /**
     * Size of the icon, in pixels.
     * Blueprint contains 16px and 20px SVG icon images,
     * and chooses the appropriate resolution based on this prop.
     * @default Icon.SIZE_STANDARD = 16
     */
    iconSize?: number;
    /** CSS style properties. */
    style?: React.CSSProperties;
    /**
     * Description string.
     * Browsers usually render this as a tooltip on hover, whereas screen
     * readers will use it for aural feedback.
     * By default, this is set to the icon's name for accessibility.
     */
    title?: string | false | null;
}
export declare class Icon extends React.PureComponent<IIconProps & React.SVGAttributes<SVGElement>> {
    static displayName: string;
    static readonly SIZE_STANDARD: number;
    static readonly SIZE_LARGE: number;
    render(): false | JSX.Element;
    private renderSvgPaths(pathsSize, iconName);
}

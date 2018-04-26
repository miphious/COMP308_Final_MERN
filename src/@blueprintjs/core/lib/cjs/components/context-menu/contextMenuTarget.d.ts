/// <reference types="react" />
import * as React from "react";
import { IConstructor } from "../../common/constructor";
export interface IContextMenuTarget extends React.Component<any, any> {
    render(): React.ReactElement<any> | null | undefined;
    renderContextMenu(e: React.MouseEvent<HTMLElement>): JSX.Element | undefined;
    onContextMenuClose?(): void;
}
export declare function ContextMenuTarget<T extends IConstructor<IContextMenuTarget>>(WrappedComponent: T): {
    new (...args: any[]): {
        render(): React.ReactElement<any>;
        renderContextMenu(e: React.MouseEvent<HTMLElement>): JSX.Element;
        onContextMenuClose?(): void;
        setState<K extends string>(state: any, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, prevContext: any): void;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    };
    displayName: string;
} & T;

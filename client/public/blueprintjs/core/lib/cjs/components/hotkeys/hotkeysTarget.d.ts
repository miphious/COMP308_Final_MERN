/// <reference types="react" />
import * as React from "react";
import { IConstructor } from "../../common/constructor";
import { IHotkeysProps } from "./hotkeys";
import { HotkeysEvents } from "./hotkeysEvents";
export interface IHotkeysTarget {
    /** Components decorated with the `@HotkeysTarget` decorator must implement React's component `render` function. */
    render(): React.ReactElement<any> | null | undefined;
    /**
     * Components decorated with the `@HotkeysTarget` decorator must implement
     * this method, and it must return a `Hotkeys` React element.
     */
    renderHotkeys(): React.ReactElement<IHotkeysProps>;
}
export declare type IHotkeysComponent = IHotkeysTarget & React.Component<any, any> & React.ComponentLifecycle<any, any>;
export declare function HotkeysTarget<T extends IConstructor<IHotkeysComponent>>(WrappedComponent: T): {
    new (...args: any[]): {
        globalHotkeysEvents?: HotkeysEvents;
        localHotkeysEvents?: HotkeysEvents;
        componentWillMount(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): React.ReactElement<any>;
        renderHotkeys(): React.ReactElement<IHotkeysProps>;
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
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, prevContext: any): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    };
    displayName: string;
} & T;

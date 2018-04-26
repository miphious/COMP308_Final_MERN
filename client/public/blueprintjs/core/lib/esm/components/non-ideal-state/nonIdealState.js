/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
import { Icon } from "../icon/icon";
var NonIdealState = /** @class */ (function (_super) {
    tslib_1.__extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        var _a = this.props, action = _a.action, className = _a.className, title = _a.title;
        return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE, className) },
            this.maybeRenderVisual(),
            title && React.createElement("h4", { className: Classes.NON_IDEAL_STATE_TITLE }, title),
            this.maybeRenderDescription(),
            action && React.createElement("div", { className: Classes.NON_IDEAL_STATE_ACTION }, action)));
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        var _a = this.props, children = _a.children, description = _a.description;
        if (children == null && description == null) {
            return null;
        }
        return (React.createElement("div", { className: Classes.NON_IDEAL_STATE_DESCRIPTION },
            description,
            children));
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return null;
        }
        else if (typeof visual === "string") {
            return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE_VISUAL, Classes.NON_IDEAL_STATE_ICON) },
                React.createElement(Icon, { icon: visual, iconSize: Icon.SIZE_LARGE * 3 })));
        }
        else {
            return React.createElement("div", { className: Classes.NON_IDEAL_STATE_VISUAL }, visual);
        }
    };
    return NonIdealState;
}(React.PureComponent));
export { NonIdealState };

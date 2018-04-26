/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import { Elevation } from "../components/card/card";
import { Alignment } from "./alignment";
import { Intent } from "./intent";
var NS = process.env.BLUEPRINT_NAMESPACE || "pt";
// modifiers
export var ACTIVE = NS + "-active";
export var ALIGN_LEFT = NS + "-align-left";
export var ALIGN_RIGHT = NS + "-align-right";
export var DARK = NS + "-dark";
export var DISABLED = NS + "-disabled";
export var FILL = NS + "-fill";
export var FIXED = NS + "-fixed";
export var FIXED_TOP = NS + "-fixed-top";
export var INLINE = NS + "-inline";
export var INTERACTIVE = NS + "-interactive";
export var LARGE = NS + "-large";
export var LOADING = NS + "-loading";
export var MINIMAL = NS + "-minimal";
export var MULTILINE = NS + "-multiline";
export var ROUND = NS + "-round";
export var SMALL = NS + "-small";
export var VERTICAL = NS + "-vertical";
export var ELEVATION_0 = elevationClass(Elevation.ZERO);
export var ELEVATION_1 = elevationClass(Elevation.ONE);
export var ELEVATION_2 = elevationClass(Elevation.TWO);
export var ELEVATION_3 = elevationClass(Elevation.THREE);
export var ELEVATION_4 = elevationClass(Elevation.FOUR);
export var INTENT_PRIMARY = intentClass(Intent.PRIMARY);
export var INTENT_SUCCESS = intentClass(Intent.SUCCESS);
export var INTENT_WARNING = intentClass(Intent.WARNING);
export var INTENT_DANGER = intentClass(Intent.DANGER);
// text utilities
export var TEXT_MUTED = NS + "-text-muted";
export var TEXT_OVERFLOW_ELLIPSIS = NS + "-text-overflow-ellipsis";
export var UI_TEXT = NS + "-ui-text";
export var UI_TEXT_LARGE = NS + "-ui-text-large";
export var RUNNING_TEXT = NS + "-running-text";
export var RUNNING_TEXT_SMALL = NS + "-running-text-small";
export var MONOSPACE_TEXT = NS + "-monospace-text";
export var FOCUS_DISABLED = NS + "-focus-disabled";
// lists
export var LIST = NS + "-list";
export var LIST_UNSTYLED = LIST + "-unstyled";
// components
export var ALERT = NS + "-alert";
export var ALERT_BODY = ALERT + "-body";
export var ALERT_CONTENTS = ALERT + "-contents";
export var ALERT_FOOTER = ALERT + "-footer";
export var BREADCRUMB = NS + "-breadcrumb";
export var BREADCRUMB_CURRENT = BREADCRUMB + "-current";
export var BREADCRUMBS = BREADCRUMB + "s";
export var BREADCRUMBS_COLLAPSED = BREADCRUMB + "s-collapsed";
export var BUTTON = NS + "-button";
export var BUTTON_GROUP = BUTTON + "-group";
export var BUTTON_SPINNER = BUTTON + "-spinner";
export var BUTTON_TEXT = BUTTON + "-text";
export var CALLOUT = NS + "-callout";
export var CALLOUT_ICON = CALLOUT + "-icon";
export var CALLOUT_TITLE = CALLOUT + "-title";
export var CARD = NS + "-card";
export var COLLAPSE = NS + "-collapse";
export var COLLAPSE_BODY = COLLAPSE + "-body";
export var COLLAPSIBLE_LIST = NS + "-collapse-list";
export var CONTEXT_MENU = NS + "-context-menu";
export var CONTEXT_MENU_POPOVER_TARGET = CONTEXT_MENU + "-popover-target";
export var CONTROL_GROUP = NS + "-control-group";
export var DIALOG = NS + "-dialog";
export var DIALOG_CONTAINER = DIALOG + "-container";
export var DIALOG_BODY = DIALOG + "-body";
export var DIALOG_CLOSE_BUTTON = DIALOG + "-close-button";
export var DIALOG_FOOTER = DIALOG + "-footer";
export var DIALOG_FOOTER_ACTIONS = DIALOG + "-footer-actions";
export var DIALOG_HEADER = DIALOG + "-header";
export var DIALOG_HEADER_TITLE = DIALOG + "-header-title";
export var EDITABLE_TEXT = NS + "-editable-text";
export var EDITABLE_TEXT_CONTENT = EDITABLE_TEXT + "-content";
export var EDITABLE_TEXT_EDITING = EDITABLE_TEXT + "-editing";
export var EDITABLE_TEXT_INPUT = EDITABLE_TEXT + "-input";
export var EDITABLE_TEXT_PLACEHOLDER = EDITABLE_TEXT + "-placeholder";
export var FLEX_EXPANDER = NS + "-flex-expander";
export var HTML_TABLE = NS + "-html-table";
export var HTML_TABLE_STRIPED = HTML_TABLE + "-striped";
export var HTML_TABLE_BORDERED = HTML_TABLE + "-bordered";
export var INPUT = NS + "-input";
export var INPUT_GHOST = INPUT + "-ghost";
export var INPUT_GROUP = INPUT + "-group";
export var INPUT_ACTION = INPUT + "-action";
export var CONTROL = NS + "-control";
export var CONTROL_INDICATOR = CONTROL + "-indicator";
export var CHECKBOX = NS + "-checkbox";
export var RADIO = NS + "-radio";
export var SWITCH = NS + "-switch";
export var FILE_INPUT = NS + "-file-input";
export var FILE_UPLOAD_INPUT = NS + "-file-upload-input";
export var KEY = NS + "-key";
export var KEY_COMBO = KEY + "-combo";
export var MODIFIER_KEY = NS + "-modifier-key";
export var HOTKEY = NS + "-hotkey";
export var HOTKEY_LABEL = HOTKEY + "-label";
export var HOTKEY_GROUP = HOTKEY + "-group";
export var HOTKEY_COLUMN = HOTKEY + "-column";
export var HOTKEY_DIALOG = HOTKEY + "-dialog";
export var LABEL = NS + "-label";
export var FORM_GROUP = NS + "-form-group";
export var FORM_CONTENT = NS + "-form-content";
export var FORM_HELPER_TEXT = NS + "-form-helper-text";
export var MENU = NS + "-menu";
export var MENU_ITEM = MENU + "-item";
export var MENU_ITEM_LABEL = MENU_ITEM + "-label";
export var MENU_SUBMENU = NS + "-submenu";
export var MENU_DIVIDER = MENU + "-divider";
export var MENU_HEADER = MENU + "-header";
export var NAVBAR = NS + "-navbar";
export var NAVBAR_GROUP = NAVBAR + "-group";
export var NAVBAR_HEADING = NAVBAR + "-heading";
export var NAVBAR_DIVIDER = NAVBAR + "-divider";
export var NON_IDEAL_STATE = NS + "-non-ideal-state";
export var NON_IDEAL_STATE_ACTION = NON_IDEAL_STATE + "-action";
export var NON_IDEAL_STATE_DESCRIPTION = NON_IDEAL_STATE + "-description";
export var NON_IDEAL_STATE_ICON = NON_IDEAL_STATE + "-icon";
export var NON_IDEAL_STATE_TITLE = NON_IDEAL_STATE + "-title";
export var NON_IDEAL_STATE_VISUAL = NON_IDEAL_STATE + "-visual";
export var NUMERIC_INPUT = NS + "-numeric-input";
export var OVERLAY = NS + "-overlay";
export var OVERLAY_BACKDROP = OVERLAY + "-backdrop";
export var OVERLAY_CONTENT = OVERLAY + "-content";
export var OVERLAY_INLINE = OVERLAY + "-inline";
export var OVERLAY_OPEN = OVERLAY + "-open";
export var OVERLAY_SCROLL_CONTAINER = OVERLAY + "-scroll-container";
export var POPOVER = NS + "-popover";
export var POPOVER_ARROW = POPOVER + "-arrow";
export var POPOVER_BACKDROP = POPOVER + "-backdrop";
export var POPOVER_CONTENT = POPOVER + "-content";
export var POPOVER_CONTENT_SIZING = POPOVER_CONTENT + "-sizing";
export var POPOVER_DISMISS = POPOVER + "-dismiss";
export var POPOVER_DISMISS_OVERRIDE = POPOVER_DISMISS + "-override";
export var POPOVER_OPEN = POPOVER + "-open";
export var POPOVER_TARGET = POPOVER + "-target";
export var POPOVER_WRAPPER = POPOVER + "-wrapper";
export var TRANSITION_CONTAINER = NS + "-transition-container";
export var PROGRESS_BAR = NS + "-progress-bar";
export var PROGRESS_METER = NS + "-progress-meter";
export var PROGRESS_NO_STRIPES = NS + "-no-stripes";
export var PROGRESS_NO_ANIMATION = NS + "-no-animation";
export var PORTAL = NS + "-portal";
export var SELECT = NS + "-select";
export var SKELETON = NS + "-skeleton";
export var SLIDER = NS + "-slider";
export var SLIDER_HANDLE = SLIDER + "-handle";
export var SLIDER_LABEL = SLIDER + "-label";
export var SLIDER_PROGRESS = SLIDER + "-progress";
export var RANGE_SLIDER = NS + "-range-slider";
export var SPINNER = NS + "-spinner";
export var SPINNER_HEAD = SPINNER + "-head";
export var SPINNER_NO_SPIN = NS + "-no-spin";
export var SPINNER_TRACK = SPINNER + "-track";
export var SPINNER_SVG_CONTAINER = SPINNER + "-svg-container";
export var SVG_SPINNER = NS + "-svg-spinner";
export var TAB = NS + "-tab";
export var TAB_INDICATOR = TAB + "-indicator";
export var TAB_INDICATOR_WRAPPER = TAB_INDICATOR + "-wrapper";
export var TAB_LIST = TAB + "-list";
export var TAB_PANEL = TAB + "-panel";
export var TABS = TAB + "s";
export var TAG = NS + "-tag";
export var TAG_REMOVABLE = TAG + "-removable";
export var TAG_REMOVE = TAG + "-remove";
export var TAG_INPUT = NS + "-tag-input";
export var TAG_INPUT_ICON = TAG_INPUT + "-icon";
export var TAG_INPUT_VALUES = TAG_INPUT + "-values";
export var TOAST = NS + "-toast";
export var TOAST_CONTAINER = TOAST + "-container";
export var TOAST_MESSAGE = TOAST + "-message";
export var TOOLTIP = NS + "-tooltip";
export var TOOLTIP_INDICATOR = TOOLTIP + "-indicator";
export var TREE = NS + "-tree";
export var TREE_NODE = NS + "-tree-node";
export var TREE_NODE_CARET = TREE_NODE + "-caret";
export var TREE_NODE_CARET_CLOSED = TREE_NODE_CARET + "-closed";
export var TREE_NODE_CARET_NONE = TREE_NODE_CARET + "-none";
export var TREE_NODE_CARET_OPEN = TREE_NODE_CARET + "-open";
export var TREE_NODE_CONTENT = TREE_NODE + "-content";
export var TREE_NODE_EXPANDED = TREE_NODE + "-expanded";
export var TREE_NODE_ICON = TREE_NODE + "-icon";
export var TREE_NODE_LABEL = TREE_NODE + "-label";
export var TREE_NODE_LIST = TREE_NODE + "-list";
export var TREE_NODE_SECONDARY_LABEL = TREE_NODE + "-secondary-label";
export var TREE_NODE_SELECTED = TREE_NODE + "-selected";
export var TREE_ROOT = NS + "-tree-root";
export var ICON = NS + "-icon";
export var ICON_STANDARD = ICON + "-standard";
export var ICON_LARGE = ICON + "-large";
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time with the `process.env.BLUEPRINT_NAMESPACE` environment variable.
 */
export function getClassNamespace() {
    return NS;
}
/** Return CSS class for alignment. */
export function alignmentClass(alignment) {
    switch (alignment) {
        case Alignment.LEFT:
            return ALIGN_LEFT;
        case Alignment.RIGHT:
            return ALIGN_RIGHT;
        default:
            return undefined;
    }
}
export function elevationClass(elevation) {
    if (elevation == null) {
        return undefined;
    }
    return NS + "-elevation-" + elevation;
}
/** Return CSS class for icon, whether or not 'pt-icon-' prefix is included */
export function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf(NS + "-icon-") === 0 ? iconName : NS + "-icon-" + iconName;
}
/** Return CSS class for intent. */
export function intentClass(intent) {
    if (intent === void 0) { intent = Intent.NONE; }
    if (intent == null || intent === Intent.NONE) {
        return undefined;
    }
    return NS + "-intent-" + intent.toLowerCase();
}

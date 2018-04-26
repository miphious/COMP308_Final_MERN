export declare enum Position {
    TOP_LEFT = "top-left",
    TOP = "top",
    TOP_RIGHT = "top-right",
    RIGHT_TOP = "right-top",
    RIGHT = "right",
    RIGHT_BOTTOM = "right-bottom",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM = "bottom",
    BOTTOM_LEFT = "bottom-left",
    LEFT_BOTTOM = "left-bottom",
    LEFT = "left",
    LEFT_TOP = "left-top",
}
export declare function isPositionHorizontal(position: Position): boolean;
export declare function isPositionVertical(position: Position): boolean;

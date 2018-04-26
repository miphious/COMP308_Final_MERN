import PopperJS from "popper.js";
/** Converts a full placement to one of the four positions by stripping text after the `-`. */
export declare function getPosition(placement: PopperJS.Placement): PopperJS.Position;
/** Returns true if position is left or right. */
export declare function isVerticalPosition(side: PopperJS.Position): boolean;
/** Returns the opposite position. */
export declare function getOppositePosition(side: PopperJS.Position): "top" | "right" | "bottom" | "left";
/** Returns the CSS alignment keyword corresponding to given placement. */
export declare function getAlignment(placement: PopperJS.Placement): "right" | "left" | "center";
/** Modifier helper function to compute popper transform-origin based on arrow position */
export declare function getTransformOrigin(data: PopperJS.Data): string;
/** Popper modifier that offsets popper and arrow so arrow points out of the correct side */
export declare const arrowOffsetModifier: PopperJS.ModifierFn;

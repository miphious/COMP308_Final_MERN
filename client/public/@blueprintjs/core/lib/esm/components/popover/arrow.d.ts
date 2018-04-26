/// <reference types="react" />
import { Placement } from "popper.js";
import * as React from "react";
/** Modifier helper function to compute arrow rotate() transform */
export declare function getArrowAngle(placement: Placement): 0 | 90 | -90 | 180;
export declare const PopoverArrow: React.SFC<{
    angle: number;
}>;

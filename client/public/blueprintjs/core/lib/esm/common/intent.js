/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * The four basic intents.
 */
export var Intent;
(function (Intent) {
    Intent["NONE"] = "none";
    Intent["PRIMARY"] = "primary";
    Intent["SUCCESS"] = "success";
    Intent["WARNING"] = "warning";
    Intent["DANGER"] = "danger";
})(Intent || (Intent = {}));

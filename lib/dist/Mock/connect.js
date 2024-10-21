"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = connect;
const remx_1 = require("remx");
function connect(component) {
    // @ts-ignore
    return (0, remx_1.connect)()(component);
}

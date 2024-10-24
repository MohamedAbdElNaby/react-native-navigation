"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const tslib_1 = require("tslib");
const NavigationDelegate_1 = require("./NavigationDelegate");
const navigationDelegate = new NavigationDelegate_1.NavigationDelegate();
exports.Navigation = navigationDelegate;
tslib_1.__exportStar(require("./components/Modal"), exports);
tslib_1.__exportStar(require("./events/EventsRegistry"), exports);
tslib_1.__exportStar(require("./adapters/Constants"), exports);
tslib_1.__exportStar(require("./interfaces/ComponentEvents"), exports);
tslib_1.__exportStar(require("./interfaces/Events"), exports);
tslib_1.__exportStar(require("./interfaces/EventSubscription"), exports);
tslib_1.__exportStar(require("./interfaces/Layout"), exports);
tslib_1.__exportStar(require("./interfaces/Options"), exports);
tslib_1.__exportStar(require("./interfaces/NavigationComponent"), exports);
tslib_1.__exportStar(require("./interfaces/NavigationComponentProps"), exports);
tslib_1.__exportStar(require("./interfaces/NavigationComponentListener"), exports);
tslib_1.__exportStar(require("./interfaces/NavigationFunctionComponent"), exports);
tslib_1.__exportStar(require("./interfaces/CommandName"), exports);
tslib_1.__exportStar(require("./interfaces/Processors"), exports);
tslib_1.__exportStar(require("./interfaces/ProcessorSubscription"), exports);

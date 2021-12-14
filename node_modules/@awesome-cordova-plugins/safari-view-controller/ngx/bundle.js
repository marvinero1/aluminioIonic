'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var SafariViewController = /** @class */ (function (_super) {
    tslib.__extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return core.cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return core.cordova(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return core.cordova(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return core.cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController.decorators = [
        { type: core$1.Injectable }
    ];
    return SafariViewController;
}(core.AwesomeCordovaNativePlugin));

exports.SafariViewController = SafariViewController;

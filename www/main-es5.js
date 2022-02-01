(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" >\n      <ion-content style=\"background: #1e1e1e;\">\n        <ion-list id=\"inbox-list\">\n          <ion-row>\n            <ion-col col-12>\n              <ion-list-header><ion-img src=\"/assets/icon.png\" class=\"ima\"></ion-img>&nbsp; Altools</ion-list-header>\n            </ion-col>\n          </ion-row>\n          \n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" *ngIf=\"this.role != 'vendedor' && this.role != 'user'\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon color=\"dark\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label color=\"dark\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          \n          \n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"rutaImportadora()\" lines=\"none\" *ngIf=\"this.role != 'empresa'\">\n              <ion-icon color=\"dark\" slot=\"start\" name=\"briefcase\"></ion-icon>\n              <ion-label color=\"dark\">Importadoras</ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"rutaCortadora()\" lines=\"none\" *ngIf=\"this.role != 'empresa'\">\n              <ion-icon color=\"dark\" slot=\"start\" name=\"cut\"></ion-icon>\n              <ion-label color=\"dark\">\n                  Cortadora Perfil\n              </ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"rutaCortadoraHistorial()\" lines=\"none\" *ngIf=\"this.role != 'empresa'\" >\n              <ion-icon color=\"dark\" slot=\"start\" name=\"cut\"></ion-icon>\n              <ion-label color=\"dark\">\n                  Historial Cortes\n              </ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"cerrarsesion()\" lines=\"none\">\n              <ion-icon color=\"dark\" slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label color=\"dark\">\n                  Cerrar Sesión\n              </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <ion-footer mode=\"ios\">\n        <ion-toolbar style=\"text-align: center;\">\n          <br><ion-note>\n            Copyright &copy; <a href=\"http://altools.es\" target=\"blank\">Altools.es</a>\n          </ion-note>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | presentacion-presentacion-module */
          "presentacion-presentacion-module").then(__webpack_require__.bind(null,
          /*! ./presentacion/presentacion.module */
          "./src/app/presentacion/presentacion.module.ts")).then(function (m) {
            return m.PresentacionPageModule;
          });
        }
      }, {
        path: 'productos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | productos-productos-module */
          "productos-productos-module").then(__webpack_require__.bind(null,
          /*! ./productos/productos.module */
          "./src/app/productos/productos.module.ts")).then(function (m) {
            return m.ProductosPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~contactanos-modal-contactanos-modal-module~login-login-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'producto/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | producto-producto-module */
          [__webpack_require__.e("common"), __webpack_require__.e("producto-producto-module")]).then(__webpack_require__.bind(null,
          /*! ./producto/producto.module */
          "./src/app/producto/producto.module.ts")).then(function (m) {
            return m.ProductoPageModule;
          });
        }
      }, {
        path: 'importadoras',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | importadoras-importadoras-module */
          [__webpack_require__.e("default~importadoras-importadoras-module~mis-productos-mis-productos-module~pedidomodal-pedidomodal-module"), __webpack_require__.e("default~carrito-carrito-module~importadoras-importadoras-module~mis-productos-mis-productos-module"), __webpack_require__.e("default~importadoras-importadoras-module~mis-productos-mis-productos-module"), __webpack_require__.e("importadoras-importadoras-module")]).then(__webpack_require__.bind(null,
          /*! ./importadoras/importadoras.module */
          "./src/app/importadoras/importadoras.module.ts")).then(function (m) {
            return m.ImportadorasPageModule;
          });
        }
      }, {
        path: 'importadora/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | importadora-importadora-module */
          "importadora-importadora-module").then(__webpack_require__.bind(null,
          /*! ./importadora/importadora.module */
          "./src/app/importadora/importadora.module.ts")).then(function (m) {
            return m.ImportadoraPageModule;
          });
        }
      }, {
        path: 'contactanos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contactanos-contactanos-module */
          "contactanos-contactanos-module").then(__webpack_require__.bind(null,
          /*! ./contactanos/contactanos.module */
          "./src/app/contactanos/contactanos.module.ts")).then(function (m) {
            return m.ContactanosPageModule;
          });
        }
      }, {
        path: 'favoritos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | favoritos-favoritos-module */
          "favoritos-favoritos-module").then(__webpack_require__.bind(null,
          /*! ./favoritos/favoritos.module */
          "./src/app/favoritos/favoritos.module.ts")).then(function (m) {
            return m.FavoritosPageModule;
          });
        }
      }, {
        path: 'novedades',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | novedades-novedades-module */
          "novedades-novedades-module").then(__webpack_require__.bind(null,
          /*! ./novedades/novedades.module */
          "./src/app/novedades/novedades.module.ts")).then(function (m) {
            return m.NovedadesPageModule;
          });
        }
      }, {
        path: 'select',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-select-module */
          "select-select-module").then(__webpack_require__.bind(null,
          /*! ./select/select.module */
          "./src/app/select/select.module.ts")).then(function (m) {
            return m.SelectPageModule;
          });
        }
      }, {
        path: 'perfil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | perfil-perfil-module */
          [__webpack_require__.e("common"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null,
          /*! ./perfil/perfil.module */
          "./src/app/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        }
      }, {
        path: 'pedidomodal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pedidomodal-pedidomodal-module */
          [__webpack_require__.e("default~importadoras-importadoras-module~mis-productos-mis-productos-module~pedidomodal-pedidomodal-module"), __webpack_require__.e("pedidomodal-pedidomodal-module")]).then(__webpack_require__.bind(null,
          /*! ./pedidomodal/pedidomodal.module */
          "./src/app/pedidomodal/pedidomodal.module.ts")).then(function (m) {
            return m.PedidomodalPageModule;
          });
        }
      }, {
        path: 'pedidos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pedidos-pedidos-module */
          "pedidos-pedidos-module").then(__webpack_require__.bind(null,
          /*! ./pedidos/pedidos.module */
          "./src/app/pedidos/pedidos.module.ts")).then(function (m) {
            return m.PedidosPageModule;
          });
        }
      }, {
        path: 'calculadora',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | calculadora-calculadora-module */
          "calculadora-calculadora-module").then(__webpack_require__.bind(null,
          /*! ./calculadora/calculadora.module */
          "./src/app/calculadora/calculadora.module.ts")).then(function (m) {
            return m.CalculadoraPageModule;
          });
        }
      }, {
        path: 'carrito',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | carrito-carrito-module */
          [__webpack_require__.e("default~carrito-carrito-module~importadoras-importadoras-module~mis-productos-mis-productos-module"), __webpack_require__.e("carrito-carrito-module")]).then(__webpack_require__.bind(null,
          /*! ./carrito/carrito.module */
          "./src/app/carrito/carrito.module.ts")).then(function (m) {
            return m.CarritoPageModule;
          });
        }
      }, {
        path: 'modalfavoritos',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modalfavoritos-modalfavoritos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("modalfavoritos-modalfavoritos-module")]).then(__webpack_require__.bind(null,
          /*! ./modalfavoritos/modalfavoritos.module */
          "./src/app/modalfavoritos/modalfavoritos.module.ts")).then(function (m) {
            return m.ModalfavoritosPageModule;
          });
        }
      }, {
        path: 'calculadora-historial',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | calculadora-historial-calculadora-historial-module */
          "calculadora-historial-calculadora-historial-module").then(__webpack_require__.bind(null,
          /*! ./calculadora-historial/calculadora-historial.module */
          "./src/app/calculadora-historial/calculadora-historial.module.ts")).then(function (m) {
            return m.CalculadoraHistorialPageModule;
          });
        }
      }, {
        path: 'mis-cotizaciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mis-cotizaciones-mis-cotizaciones-module */
          "mis-cotizaciones-mis-cotizaciones-module").then(__webpack_require__.bind(null,
          /*! ./mis-cotizaciones/mis-cotizaciones.module */
          "./src/app/mis-cotizaciones/mis-cotizaciones.module.ts")).then(function (m) {
            return m.MisCotizacionesPageModule;
          });
        }
      }, //id de importadora
      {
        path: 'mis-productos/:res',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | mis-productos-mis-productos-module */
          [__webpack_require__.e("default~importadoras-importadoras-module~mis-productos-mis-productos-module~pedidomodal-pedidomodal-module"), __webpack_require__.e("default~carrito-carrito-module~importadoras-importadoras-module~mis-productos-mis-productos-module"), __webpack_require__.e("default~importadoras-importadoras-module~mis-productos-mis-productos-module"), __webpack_require__.e("mis-productos-mis-productos-module")]).then(__webpack_require__.bind(null,
          /*! ./mis-productos/mis-productos.module */
          "./src/app/mis-productos/mis-productos.module.ts")).then(function (m) {
            return m.MisProductosPageModule;
          });
        }
      }, {
        path: 'contrasenia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | contrasenia-contrasenia-module */
          [__webpack_require__.e("common"), __webpack_require__.e("contrasenia-contrasenia-module")]).then(__webpack_require__.bind(null,
          /*! ./contrasenia/contrasenia.module */
          "./src/app/contrasenia/contrasenia.module.ts")).then(function (m) {
            return m.ContraseniaPageModule;
          });
        }
      }, {
        path: 'contactanos-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | contactanos-modal-contactanos-modal-module */
          [__webpack_require__.e("default~contactanos-modal-contactanos-modal-module~login-login-module"), __webpack_require__.e("contactanos-modal-contactanos-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./contactanos-modal/contactanos-modal.module */
          "./src/app/contactanos-modal/contactanos-modal.module.ts")).then(function (m) {
            return m.ContactanosModalPageModule;
          });
        }
      }, {
        path: 'cortadora-perfil',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cortadora-perfil-cortadora-perfil-module */
          "cortadora-perfil-cortadora-perfil-module").then(__webpack_require__.bind(null,
          /*! ./cortadora-perfil/cortadora-perfil.module */
          "./src/app/cortadora-perfil/cortadora-perfil.module.ts")).then(function (m) {
            return m.CortadoraPerfilPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'cortadora-pmodal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cortadora-pmodal-cortadora-pmodal-module */
          "cortadora-pmodal-cortadora-pmodal-module").then(__webpack_require__.bind(null,
          /*! ./cortadora-pmodal/cortadora-pmodal.module */
          "./src/app/cortadora-pmodal/cortadora-pmodal.module.ts")).then(function (m) {
            return m.CortadoraPModalPageModule;
          });
        }
      }, {
        path: 'mis-cortes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mis-cortes-mis-cortes-module */
          "mis-cortes-mis-cortes-module").then(__webpack_require__.bind(null,
          /*! ./mis-cortes/mis-cortes.module */
          "./src/app/mis-cortes/mis-cortes.module.ts")).then(function (m) {
            return m.MisCortesPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ima {\n  width: 25%;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: white;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 5px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #1e1e1e);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #1e1e1e;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #1e1e1e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #1e1e1e;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTs7RUFFRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsMkRBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0RBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFORjs7QUFTQTtFQUNFLGlDQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiBcclxufVxyXG4uaW1he1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjMWUxZTFlKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICMxZTFlMWU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICMxZTFlMWU7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMxZTFlMWU7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].App;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, loadingCtrl, auth, alertController, router, gestureCtrl) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.loadingCtrl = loadingCtrl;
          this.auth = auth;
          this.alertController = alertController;
          this.router = router;
          this.gestureCtrl = gestureCtrl;
          this.selectedIndex = 0;
          this.logs = [];
          this.usuarios$ = [];
          this.appPages = [{
            title: 'Inicio',
            url: '/select',
            icon: 'home'
          }, {
            title: 'Calculadora',
            url: '/calculadora',
            icon: 'calculator'
          }, {
            title: 'Carrito',
            url: '/carrito',
            icon: 'cart'
          }, // {
          //   title: 'Historial Cortes',
          //   url: '/mis-cortes',
          //   icon: 'time'
          // },
          {
            title: 'Historial Calculos',
            url: '/calculadora-historial',
            icon: 'time'
          }, // {
          //   title: 'Importadoras',
          //   url: '/importadoras',
          //   icon: 'briefcase'
          // },
          // {
          //   title: 'Productos',
          //   url: '/productos',
          //   icon: 'bag'
          // },
          {
            title: 'Mi Perfil',
            url: '/perfil',
            icon: 'accessibility'
          }, {
            title: 'Mis Cotizaciones',
            url: '/mis-cotizaciones',
            icon: 'checkbox'
          }];
          this.labels = ['Salir'];
          this.DOUBLE_CLICK_THRESHOLD = 500;
          this.initializeApp();
          this.backButtonEvent();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser(); // const gesture = this.gestureCtrl.create({
            //   el: this.backButtonEvent,
            //   threshold: 0,
            //   onStart: () => { this.onStart(); }
            // });
            // gesture.enable();
          }
        }, {
          key: "rutaCortadora",
          value: function rutaCortadora() {
            this.router.navigateByUrl('/cortadora-perfil');
          }
        }, {
          key: "rutaImportadora",
          value: function rutaImportadora() {
            this.router.navigateByUrl('/importadoras');
          }
        }, {
          key: "rutaCortadoraHistorial",
          value: function rutaCortadoraHistorial() {
            this.router.navigateByUrl('/mis-cortes');
          }
        }, {
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this2 = this;

            document.addEventListener("backbutton", function () {
              _this2.routerOutlets.forEach(function (outlet) {
                if (outlet && outlet.canGoBack()) {
                  outlet.pop();
                }
              });
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this3 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this3.usuarios$ = res;
              var user_id = _this3.usuarios$.id;
              _this3.role = _this3.usuarios$.role;
              console.log(_this3.role);
            });
          } // backNativeButton(){
          //   this.platform.backButton.subscribeWithPriority(-1, () => {
          //     if (!this.routerOutlet.canGoBack()) {
          //       this.salirButton();
          //       App.exitApp();
          //     }
          //   });
          // }
          // async salirButton(){
          //   const alert = await this.alertController.create({
          //     cssClass: 'my-custom-class',
          //     header: '¿Desea Salir de Altool?',
          //     message: '',
          //     buttons: [
          //       {
          //         text: 'Cancelar',
          //         role: 'cancel',
          //         cssClass: 'secondary',
          //         handler: (blah) => {
          //           return false
          //           //console.log('Confirm Cancel: blah');
          //         }
          //       }, {
          //         text: 'Si',
          //         handler: () => {
          //           this.cerrarsesion();
          //         }
          //       }
          //     ]
          //   });
          //   await alert.present();
          // }

        }, {
          key: "cerrarsesion",
          value: function cerrarsesion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("cerrar sesion");
                      _context.next = 3;
                      return this.loadingCtrl.create({
                        spinner: 'dots' // duration: 1500

                      });

                    case 3:
                      loading = _context.sent;
                      loading.present().then(function () {
                        _this4.auth.logout().subscribe(function (data) {
                          loading.dismiss().then(function () {// this.navCtrl.navigateRoot('/home');
                            // this.router.navigate(['/inicio']);
                          });
                          console.log("Salio");
                        }, function () {
                          // this.navCtrl.navigateRoot('/home');
                          loading.dismiss();
                        });
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_fallimg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-fallimg */
      "./node_modules/ng-fallimg/__ivy_ngcc__/fesm2015/ng-fallimg.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _providers_notificacions_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./providers/notificacions.service */
      "./src/app/providers/notificacions.service.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _providers_restangular_restangular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./providers/restangular/restangular */
      "./src/app/providers/restangular/restangular.ts");
      /* harmony import */


      var _providers_token_storage_token_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./providers/token-storage/token-storage */
      "./src/app/providers/token-storage/token-storage.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/downloader/ngx */
      "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      "./node_modules/@awesome-cordova-plugins/in-app-browser/__ivy_ngcc__/ngx/index.js"); // import { FileChooser } from '@ionic-native/file-chooser/ngx';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], ngx_restangular__WEBPACK_IMPORTED_MODULE_10__["RestangularModule"].forRoot([_providers_auth_auth__WEBPACK_IMPORTED_MODULE_17__["AuthProvider"]], _providers_restangular_restangular__WEBPACK_IMPORTED_MODULE_18__["RestangularConfigFactory"]), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"], ng_fallimg__WEBPACK_IMPORTED_MODULE_5__["NgFallimgModule"].forRoot({
          "default": 'assets/img/default-person.jpg',
          picture1: 'assets/img/default-product.jpg'
        })],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"], _providers_auth_auth__WEBPACK_IMPORTED_MODULE_17__["AuthProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _ionic_storage__WEBPACK_IMPORTED_MODULE_22__["Storage"], _providers_token_storage_token_storage__WEBPACK_IMPORTED_MODULE_19__["TokenStorageProvider"], _providers_notificacions_service__WEBPACK_IMPORTED_MODULE_11__["NotificacionsService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_21__["Downloader"], _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_23__["InAppBrowser"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard() {
          _classCallCheck(this, AuthGuard);
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/pipes/filtro.pipe.ts":
    /*!**************************************!*\
      !*** ./src/app/pipes/filtro.pipe.ts ***!
      \**************************************/

    /*! exports provided: FiltroPipe */

    /***/
    function srcAppPipesFiltroPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
        return FiltroPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroPipe = /*#__PURE__*/function () {
        function FiltroPipe() {
          _classCallCheck(this, FiltroPipe);
        }

        _createClass(FiltroPipe, [{
          key: "transform",
          value: function transform(arreglo, texto, columna) {
            //console.log(arreglo);
            if (texto === '') {
              return arreglo;
            }

            return arreglo.filter(function (item) {
              return item[columna].toLowerCase().includes(texto.toLowerCase());
            });
          }
        }]);

        return FiltroPipe;
      }();

      FiltroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtro'
      })], FiltroPipe);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filtro.pipe */
      "./src/app/pipes/filtro.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]],
        //exports:[],
        exports: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]],
        imports: []
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/providers/auth/auth.ts":
    /*!****************************************!*\
      !*** ./src/app/providers/auth/auth.ts ***!
      \****************************************/

    /*! exports provided: AuthProvider */

    /***/
    function srcAppProvidersAuthAuthTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthProvider", function () {
        return AuthProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _token_storage_token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../token-storage/token-storage */
      "./src/app/providers/token-storage/token-storage.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import 'rxjs/add/operator/map';
      // import 'rxjs/add/operator/do';
      // import 'rxjs/add/operator/switchMap';
      // import 'rxjs/add/operator/catch';

      /*
        Generated class for the AuthProvider provider.
      
        See https://angular.io/guide/dependency-injection for more info on providers
        and Angular DI.
      */


      var AuthProvider = /*#__PURE__*/function () {
        function AuthProvider(navCtrl, http, router, // private app:App,
        toastCtrl, tokenStorage, storage) {
          var _this5 = this;

          _classCallCheck(this, AuthProvider);

          this.navCtrl = navCtrl;
          this.http = http;
          this.router = router;
          this.toastCtrl = toastCtrl;
          this.tokenStorage = tokenStorage;
          this.storage = storage; // apiRoot: string = "http://192.168.1.7:5000/api/";
          // apiRoot: string = "http://192.168.1.5:5000/api/";

          this.apiRoot = "https://altools.es/api/"; //apiRoot: string = "https://sheconsultinggroupsrl.com/api/";

          this.valauten = false;
          this.logs = [];
          this.usuarios$ = [];

          this.getUsers = function (route, id) {
            return _this5.http.get("".concat(_this5.apiRoot) + route + id);
          };

          this.getAllObject = function (route) {
            return _this5.http.get("".concat(_this5.apiRoot) + route);
          };

          this.getAllObjectById = function (route, id) {
            return _this5.http.get("".concat(_this5.apiRoot) + route + id);
          };

          this.getAllObjectByIdPerfils = function (route, id, hoja_id) {
            return _this5.http.get("".concat(_this5.apiRoot) + route + id + '/' + hoja_id);
          };

          this.postCalculadora = function (route, calculadora) {
            return _this5.http.post("".concat(_this5.apiRoot) + route, calculadora);
          };

          this.getCarrito = function (route, id) {
            return _this5.http.get("".concat(_this5.apiRoot) + route + id);
          };

          this.getAllObjectByIdforCalculo = function (route, id, hoja_id) {
            return _this5.http.get("".concat(_this5.apiRoot) + route + id + '/' + hoja_id);
          };

          this.postPedido = function (route, pedido) {
            return _this5.http.post("".concat(_this5.apiRoot) + route, pedido);
          };

          this.postFavorito = function (route, favoritos) {
            return _this5.http.post("".concat(_this5.apiRoot) + route, favoritos);
          };

          this.deleteObjectById = function (route, id) {
            return _this5.http["delete"]("".concat(_this5.apiRoot) + route + id);
          };

          this.updateObjectById = function (route, id, carrito) {
            return _this5.http.put("".concat(_this5.apiRoot) + route + id, carrito);
          };

          this.updateObjectByIdUser = function (route, id, user) {
            return _this5.http.put("".concat(_this5.apiRoot) + route + id, user);
          };

          this.cerrarCarrito = function (route, id, carrito) {
            return _this5.http.put("".concat(_this5.apiRoot) + route + id, carrito);
          };

          this.cerrarHojaCortadora = function (route, id, carrito) {
            return _this5.http.put("".concat(_this5.apiRoot) + route + id, carrito);
          };

          this.deleteAllObject = function (route) {
            return _this5.http["delete"]("".concat(_this5.apiRoot) + route);
          }; //console.log('Hello AuthProvider Provider');


          this.getAccessTokenn();
          this.getEmail();
        }

        _createClass(AuthProvider, [{
          key: "headerDefault",
          value: function headerDefault() {
            var bearerToken;
            this.getAccessTokenn().subscribe(function (data) {
              bearerToken = data;
            });
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(bearerToken)
              })
            };
            return httpOptions;
          }
        }, {
          key: "isRreshToken",
          value: function isRreshToken() {
            return this.tokenStorage.getRefreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
              return !!token;
            }));
          }
        }, {
          key: "isAccessToken",
          value: function isAccessToken() {
            return this.tokenStorage.getAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
              return !!token;
            }));
          }
        }, {
          key: "getAccessTokenn",
          value: function getAccessTokenn() {
            var _this6 = this;

            this.isAccessToken().subscribe(function (da) {
              if (!da) {
                _this6.tokenStorage.setAccessToken('hEkfn9h6VOrdUJM25tvtVCRjnJTHDedlXyFhx22J');
              }
            });
            return this.tokenStorage.getAccessToken();
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this7 = this;

            var url = "".concat(this.apiRoot, "/refresh");
            return this.tokenStorage.getRefreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (refreshToken) {
              return (// this.http.post(`http://127.0.0.1:8000/api/refresh`, { refreshToken })
                _this7.http.post(url, {
                  refresh_token: refreshToken,
                  rol: _this7.tokenStorage.getPayload().scopes[0]
                }, _this7.headerDefault())
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tokens) {
              return _this7.saveAccessData(tokens);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              _this7.logout(); // return Observable.throw(err);


              var errorMessage = '';

              if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: ".concat(error.error.message);
              } else {
                // server-side error
                errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
              } //  window.alert(errorMessage);


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(errorMessage);
            }));
          }
        }, {
          key: "salir",
          value: function salir() {
            this.tokenStorage.clear();
            localStorage.removeItem('userdata');
            this.getAccessTokenn();
            this.navCtrl.navigateRoot('/home'); // this.router.navigate(['/home']);
            // this.app.getRootNav().setRoot(LoginPage);
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this8 = this;

            var url = "".concat(this.apiRoot, "login");
            var da = {
              email: data.email,
              password: data.password
            };
            console.log(da);
            return this.http.post(url, da, this.headerDefault()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tokens) {
              _this8.saveAccessData(tokens);

              _this8.router.navigate(['/select']); //ACA HACER EL GUARDADO EN EL STORAGE


              localStorage.setItem('Usuario', JSON.stringify(data.email));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              console.log(err); // console.log(err.error.message);

              if (err.error.message == 'Su dirección de correo electrónico no está verificada.') {
                _this8.presentToast('Su dirección de correo electrónico no está verificada.');
              } else {
                _this8.presentToast("Las credenciales de usuario fueron incorrectas.");
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
            }));
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            var _this9 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            console.log(this.logs);
            this.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this9.usuarios$ = res;
              console.log(_this9.usuarios$);
            });
          } // user() {
          //   const headers = new HttpHeaders({
          //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
          //   });
          //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
          //   .pipe(
          //     tap(user => {
          //       this.storage.setItem("usuario", JSON.stringify(user))
          //         .then(
          //           () => {
          //             console.log('Usuario Guardado');
          //             console.log(user);
          //           },
          //           error => console.error(error)
          //         );
          //       return user;
          //     })
          //   )
          // }

        }, {
          key: "getuser",
          value: function getuser() {
            //localStorage.removeItem('userdata');
            var urludata = "".concat(this.apiRoot, "userdata");
            return this.http.get(urludata, this.headerDefault()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              console.log("user login data"); //localStorage.setItem('userdata', JSON.stringify(data.data.data));

              console.log(data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              // this.salir();
              console.log("No se encontro el usuario");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
            }));
          }
        }, {
          key: "saveAccessData",
          value: function saveAccessData(_ref) {
            var access_token = _ref.access_token,
                refresh_token = _ref.refresh_token;
            this.tokenStorage.setAccessToken(access_token).setRefreshToken(refresh_token);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this10 = this;

            var url = "".concat(this.apiRoot, "/logout");
            return this.http.post(url, {}, this.headerDefault()) // .map(response => response.json())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tokens) {
              _this10.salir();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              _this10.salir();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated(user) {
            var _this11 = this;

            var data = false;
            this.isAccessToken().subscribe(function (da) {
              if (da) {
                for (var i = 0; i < user.length; ++i) {
                  if (_this11.tokenStorage.getPayload().scopes[0] == user[i]) {
                    data = true;
                  }
                }
              } else {
                _this11.salir();
              }
            });
            return data;
          }
        }, {
          key: "errorstatus",
          value: function errorstatus(content, error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var mensaje, a, toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      mensaje = "";

                      for (a in content) {
                        mensaje += content[a][0];
                      }

                      _context2.next = 4;
                      return this.toastCtrl.create({
                        message: mensaje,
                        duration: 3000,
                        position: 'bottom'
                      });

                    case 4:
                      toast = _context2.sent;
                      // toast.onDidDismiss(() => {
                      //   console.log('Dismissed toast');
                      // });
                      toast.present(); // console.log(mensaje);

                      return _context2.abrupt("return", mensaje);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: mensaje,
                        duration: 1500
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AuthProvider;
      }();

      AuthProvider.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _token_storage_token_storage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageProvider"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      AuthProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthProvider);
      /***/
    },

    /***/
    "./src/app/providers/notificacions.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/providers/notificacions.service.ts ***!
      \****************************************************/

    /*! exports provided: NotificacionsService */

    /***/
    function srcAppProvidersNotificacionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionsService", function () {
        return NotificacionsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

      var NotificacionsService = /*#__PURE__*/function () {
        function NotificacionsService(platform, restangular, localNotifications) {
          _classCallCheck(this, NotificacionsService);

          this.platform = platform;
          this.restangular = restangular;
          this.localNotifications = localNotifications;
          this.mensajes = [];
          this.publicidads = [];
          this.seccions = [];
        }

        _createClass(NotificacionsService, [{
          key: "iniciar",
          value: function iniciar() {
            this.ciudad = JSON.parse(localStorage.getItem('ciudad'));

            if (this.ciudad) {
              // console.log(this.ciudad);
              console.log("cargar notificacion");
              this.cargarmensajes();
            }
          }
        }, {
          key: "cargarmensajes",
          value: function cargarmensajes() {
            var _this12 = this;

            return new Promise(function (resolve) {
              _this12.restangular.one('mensajesnotificacion').customGET(_this12.ciudad.id).toPromise().then(function (data) {
                // console.log(data);
                _this12.mensajes = data.data;
                _this12.publicidads = data.publicidad;
                _this12.seccions = data.seccions; // console.log(this.mensajes);

                _this12.generarnotificaciones();

                resolve(true);
              }, function () {
                resolve(false);
              });
            });
          }
        }, {
          key: "generarnotificaciones",
          value: function generarnotificaciones() {
            if (this.publicidads.length > 0 || this.seccions.length > 0) {
              if (this.publicidads.length > 0) {
                this.localNotifications.schedule({
                  id: 0,
                  summary: 'Promociones',
                  group: 'eventos',
                  groupSummary: true,
                  smallIcon: 'res://n_icon',
                  icon: 'file://assets/imgs/new/tr.png',
                  sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
                  // trigger: { every: ELocalNotificationTriggerUnit.DAY},
                  trigger: {
                    "in": 20,
                    unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["ELocalNotificationTriggerUnit"].SECOND
                  },
                  led: '662d8e',
                  // led: { color: '662d8e', on: 500, off: 500 },
                  data: {
                    index: 0,
                    item: this.publicidads[0],
                    datos: this.publicidads
                  },
                  vibrate: true,
                  lockscreen: true,
                  color: '#662d8e'
                });
              } else {
                this.localNotifications.schedule({
                  id: 0,
                  summary: 'Promociones',
                  group: 'eventos',
                  groupSummary: true,
                  smallIcon: 'res://n_icon',
                  icon: 'file://assets/imgs/new/tr.png',
                  sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
                  // trigger: { every: ELocalNotificationTriggerUnit.DAY},
                  trigger: {
                    "in": 20,
                    unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["ELocalNotificationTriggerUnit"].SECOND
                  },
                  led: '662d8e',
                  // led: { color: '662d8e', on: 500, off: 500 },
                  data: {
                    index: 0,
                    item: this.seccions[0],
                    datos: 'seccion',
                    id: 0
                  },
                  vibrate: true,
                  lockscreen: true,
                  color: '#662d8e'
                });
              }

              var id = 1;
              var index = 0;

              var _iterator = _createForOfIteratorHelper(this.publicidads),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var iterator = _step.value;
                  console.log("id publicidad " + id);
                  this.localNotifications.schedule({
                    id: id,
                    smallIcon: 'res://n_icon',
                    // icon: 'file://assets/imgs/new/tr.png',
                    title: iterator.titulo,
                    // text: "Fecha del Evento "+iterator.expira,
                    text: iterator.descripcion,
                    attachments: [iterator.imgpequehna],
                    color: '#662d8e',
                    group: 'eventos',
                    led: '662d8e',
                    data: {
                      index: index,
                      item: iterator,
                      datos: this.publicidads
                    },
                    // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
                    //  // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
                    trigger: {
                      "in": 22,
                      unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["ELocalNotificationTriggerUnit"].SECOND
                    }
                  });
                  index += 1;
                  id += 1;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(this.seccions),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _iterator3 = _step2.value;
                  console.log("id seccion " + id);
                  this.localNotifications.schedule({
                    id: id,
                    smallIcon: 'res://n_icon',
                    // icon: 'file://assets/imgs/new/tr.png',
                    title: _iterator3.nombre,
                    // text: "Fecha del Evento "+iterator.expira,
                    text: _iterator3.descripcion,
                    attachments: [_iterator3.imagen],
                    color: '#662d8e',
                    group: 'eventos',
                    led: '662d8e',
                    data: {
                      index: index,
                      item: _iterator3,
                      datos: 'seccion',
                      id: id
                    },
                    // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
                    // // trigger: { every: ELocalNotificationTriggerUnit.DAY,count:iterator.dias},
                    trigger: {
                      "in": 22,
                      unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["ELocalNotificationTriggerUnit"].SECOND
                    }
                  });
                  index += 1;
                  id += 1;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } // this.localNotifications.schedule(notpublicidads);


            if (this.mensajes.length > 0) {
              var dias = [];
              dias[0] = 1;
              dias[1] = 4;
              dias[2] = 5;
              var fecha = new Date();

              for (var index1 = 0; index1 < 3; index1++) {
                var mensaje = this.mensajes[Math.floor(Math.random() * this.mensajes.length + 0)];
                this.localNotifications.schedule({
                  id: 6 + index1,
                  title: mensaje.titulo,
                  text: mensaje.mensaje,
                  smallIcon: 'res://n_icon',
                  icon: 'file://assets/imgs/new/tr.png',
                  sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
                  trigger: {
                    every: {
                      weekday: dias[index1],
                      hour: 9,
                      minute: 0
                    },
                    count: 5
                  },
                  led: '662d8e',
                  // led: { color: '#662d8e', on: 500, off: 500 },
                  // data:{page:"my page"},
                  vibrate: true,
                  lockscreen: true,
                  color: '#662d8e'
                });
                mensaje = this.mensajes[Math.floor(Math.random() * this.mensajes.length + 0)];
                this.localNotifications.schedule({
                  id: 6 + index1,
                  title: mensaje.titulo,
                  text: mensaje.mensaje,
                  smallIcon: 'res://n_icon',
                  icon: 'file://assets/imgs/new/tr.png',
                  sound: this.platform.is('android') ? 'file://assets/imgs/new/sound.mp3' : 'file://assets/imgs/new/sound.caf',
                  trigger: {
                    every: {
                      weekday: dias[index1],
                      hour: 19,
                      minute: 0
                    },
                    count: 5
                  },
                  led: '662d8e',
                  // led: { color: '#662d8e', on: 500, off: 500 },
                  // data:{page:"my page"},
                  vibrate: true,
                  lockscreen: true,
                  color: '#662d8e'
                });
              }
            }
          }
        }]);

        return NotificacionsService;
      }();

      NotificacionsService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]
        }];
      };

      NotificacionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificacionsService);
      /***/
    },

    /***/
    "./src/app/providers/restangular/restangular.ts":
    /*!******************************************************!*\
      !*** ./src/app/providers/restangular/restangular.ts ***!
      \******************************************************/

    /*! exports provided: RestangularConfigFactory */

    /***/
    function srcAppProvidersRestangularRestangularTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function () {
        return RestangularConfigFactory;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      function RestangularConfigFactory(RestangularProvider, AutentificacionService) {
        // console.log("funcion acceso token");
        var bearerToken;
        AutentificacionService.getAccessTokenn().subscribe(function (token) {
          bearerToken = token;
        }); // console.log(bearerToken);

        var headerss = {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'Accept': 'application/json',
          // 'Accept': 'application/x.laravel.v1+json'
          'Authorization': "Bearer ".concat(bearerToken) // 'X-Requested-With': 'XMLHttpRequest'

        }; // console.log(headerss);
        // This function must return observable

        var refreshAccesstoken = function refreshAccesstoken() {
          // Here you can make action before repeated request
          return AutentificacionService.refreshToken();
        };

        RestangularProvider // .setBaseUrl('/api')
        // .setBaseUrl('http://192.168.1.7:5000/api')
        // .setBaseUrl('http://192.168.1.5:5000/api')
        .setBaseUrl('http://altools.es/api/') // .setDefaultHeaders(headerss)// set static header
        .addResponseInterceptor(function (data, operation, what, url, response) {
          var extractedData; // .. to look for getList operations

          if (operation === "getList") {
            // .. and handle the data and meta data
            if (data.data.data.data) {
              var query = [{
                current_page: data.data.data.current_page,
                from: data.data.data.from,
                last_page: data.data.data.last_page,
                per_page: data.data.data.per_page,
                to: data.data.data.to,
                total: data.data.data.total
              }];
              var daaa = data.data.data.data;
              extractedData = query.concat(daaa);
            } else {
              extractedData = data.data.data;
            }
          } else {
            extractedData = data.data;
          }

          return extractedData; // return data.data.data;
        }).addErrorInterceptor(function (response, subject, responseHandler) {
          if (response.status === 422) {
            for (var error in response.data.errors) {
              return AutentificacionService.errorstatus(response.data.errors[error][0], response.data.message); // return ToastService.error(response.data.errors[error][0]);
            }
          }

          if (response.status === 500) {
            return AutentificacionService.errorstatus(response.statusText, "Error :-("); // return ToastService.error(response.statusText)
          } // if (response.status === 403 || response.status === 401) {


          if (response.status === 403 || response.status === 401) {
            // return AutentificacionService.returnLogin();
            refreshAccesstoken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (refreshAccesstokenResponse) {
              //If you want to change request or make with it some actions and give the request to the repeatRequest func.
              //Or you can live it empty and request will be the same.
              // update Authorization header
              // response.request.headers.set('Authorization', 'Bearer ' + refreshAccesstokenResponse.access_token)
              // return response.repeatRequest(response.request);
              var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(refreshAccesstokenResponse.access_token)
              });
              var newReq = response.request.clone({
                headers: newHeaders
              });
              return response.repeatRequest(newReq);
            })).subscribe(function (res) {
              return responseHandler(res);
            }, function (err) {
              AutentificacionService.salir();
              subject.error(err);
            });
            return false; // error handled
          }

          return true; // error not handled
        }) // by each request to the server receive a token and update headers with it
        .addFullRequestInterceptor(function (element, operation, path, url, headers, params) {
          var bearerToken;
          AutentificacionService.getAccessTokenn().subscribe(function (token) {
            bearerToken = token;
          }); // let bearerToken = AutentificacionService.getAccessToken();

          return {
            headers: Object.assign({}, headers, {
              Authorization: "Bearer ".concat(bearerToken)
            })
          };
        });
      }
      /***/

    },

    /***/
    "./src/app/providers/token-storage/token-storage.ts":
    /*!**********************************************************!*\
      !*** ./src/app/providers/token-storage/token-storage.ts ***!
      \**********************************************************/

    /*! exports provided: TokenStorageProvider */

    /***/
    function srcAppProvidersTokenStorageTokenStorageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageProvider", function () {
        return TokenStorageProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /*
        Generated class for the TokenStorageProvider provider.
      
        See https://angular.io/guide/dependency-injection for more info on providers
        and Angular DI.
      */


      var TokenStorageProvider = /*#__PURE__*/function () {
        function TokenStorageProvider() {
          _classCallCheck(this, TokenStorageProvider);
        }

        _createClass(TokenStorageProvider, [{
          key: "getAccessToken",

          /**
           * Get access token
           * @returns {Observable<string>}
           */
          value: function getAccessToken() {
            var token = localStorage.getItem('access_token');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(token);
          }
          /**
           * Get refresh token
           * @returns {Observable<string>}
           */

        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            var token = localStorage.getItem('refresh_token');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(token);
          }
          /**
           * Set access token
           * @returns {TokenStorageProvider}
           */

        }, {
          key: "setAccessToken",
          value: function setAccessToken(token) {
            localStorage.setItem('access_token', token);
            return this;
          }
          /**
           * Set refresh token
           * @returns {TokenStorageProvider}
           */

        }, {
          key: "setRefreshToken",
          value: function setRefreshToken(token) {
            localStorage.setItem('refresh_token', token);
            return this;
          }
          /**
           * Remove tokens
           */

        }, {
          key: "clear",
          value: function clear() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
          }
        }, {
          key: "clear_refresh",
          value: function clear_refresh() {
            localStorage.removeItem('refresh_token');
          }
        }, {
          key: "getPayload",
          value: function getPayload() {
            var token = localStorage.getItem('access_token');

            if (token && token.split('.').length === 3) {
              try {
                var
                /** @type {?} */
                base64Url = token.split('.')[1];
                var
                /** @type {?} */
                base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(decodeURIComponent(encodeURIComponent(window.atob(base64))));
              } catch (e) {
                return undefined;
              }
            } else {
              return undefined;
            }
          }
        }, {
          key: "getExpirationDate",
          value: function getExpirationDate() {
            var dataEx;
            var payload = this.getPayload();

            if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
              var
              /** @type {?} */
              date = new Date(0);
              date.setUTCSeconds(payload.exp);
              dataEx = date;
            } else {
              dataEx = null;
            } // });


            return dataEx;
          }
        }]);

        return TokenStorageProvider;
      }();

      TokenStorageProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenStorageProvider);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        urlEndPoint: 'http://127.0.0.1:5000/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\laragon\www\aluminioIonic\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
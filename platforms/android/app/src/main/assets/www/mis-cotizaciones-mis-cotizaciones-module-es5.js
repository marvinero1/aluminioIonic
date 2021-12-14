(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-cotizaciones-mis-cotizaciones-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cotizaciones/mis-cotizaciones.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cotizaciones/mis-cotizaciones.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMisCotizacionesMisCotizacionesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cotizaciones Recibidas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button disabled=\"true\">\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class=\"ion-content\" padding><br>\n    <ion-item-group>\n      <ion-item>\n        <p style=\"margin-block-start: 0em; margin-block-end: 0em;\">\n          <strong>Mis Cotizaciones</strong>\n        </p>\n      </ion-item>\n      \n      <ion-item-sliding *ngFor=\"let element of  cotizaciones$\">\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">          \n            <ion-icon name=\"logo-buffer\" style=\"font-size: 53px;color: black;\"></ion-icon>\n          </ion-thumbnail>\n          <ion-label text-wrap>\n            <p><strong>{{element.importadora}} </strong></p>\n            <p>Carrito Cotizado: {{element.carrito_id}}</p>\n            <!-- <p>Estado: {{element.estado}}</p> -->\n            <p>{{element.descripcion}}</p><br>\n          <!-- <p>Archivo: <a [href]=\"http://altools.es/{{ element.file }}\">{{ element.file }}</a> </p> -->\n          </ion-label>\n          <ion-button (click)=\"show(element)\" size=\"default\" >\n            <ion-icon name=\"document-text-outline\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"presentAlertConfirm(element)\">\n            <ion-icon class=\"icongarbage\" slot=\"icon-only\" name=\"trash\"></ion-icon>Eliminar\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n    <br>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/mis-cotizaciones/mis-cotizaciones-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/mis-cotizaciones/mis-cotizaciones-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MisCotizacionesPageRoutingModule */

    /***/
    function srcAppMisCotizacionesMisCotizacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCotizacionesPageRoutingModule", function () {
        return MisCotizacionesPageRoutingModule;
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


      var _mis_cotizaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mis-cotizaciones.page */
      "./src/app/mis-cotizaciones/mis-cotizaciones.page.ts");

      var routes = [{
        path: '',
        component: _mis_cotizaciones_page__WEBPACK_IMPORTED_MODULE_3__["MisCotizacionesPage"]
      }];

      var MisCotizacionesPageRoutingModule = function MisCotizacionesPageRoutingModule() {
        _classCallCheck(this, MisCotizacionesPageRoutingModule);
      };

      MisCotizacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MisCotizacionesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mis-cotizaciones/mis-cotizaciones.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/mis-cotizaciones/mis-cotizaciones.module.ts ***!
      \*************************************************************/

    /*! exports provided: MisCotizacionesPageModule */

    /***/
    function srcAppMisCotizacionesMisCotizacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCotizacionesPageModule", function () {
        return MisCotizacionesPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _mis_cotizaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mis-cotizaciones-routing.module */
      "./src/app/mis-cotizaciones/mis-cotizaciones-routing.module.ts");
      /* harmony import */


      var _mis_cotizaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mis-cotizaciones.page */
      "./src/app/mis-cotizaciones/mis-cotizaciones.page.ts");

      var MisCotizacionesPageModule = function MisCotizacionesPageModule() {
        _classCallCheck(this, MisCotizacionesPageModule);
      };

      MisCotizacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mis_cotizaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisCotizacionesPageRoutingModule"]],
        declarations: [_mis_cotizaciones_page__WEBPACK_IMPORTED_MODULE_6__["MisCotizacionesPage"]]
      })], MisCotizacionesPageModule);
      /***/
    },

    /***/
    "./src/app/mis-cotizaciones/mis-cotizaciones.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/mis-cotizaciones/mis-cotizaciones.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMisCotizacionesMisCotizacionesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLWNvdGl6YWNpb25lcy9taXMtY290aXphY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9taXMtY290aXphY2lvbmVzL21pcy1jb3RpemFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/mis-cotizaciones/mis-cotizaciones.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/mis-cotizaciones/mis-cotizaciones.page.ts ***!
      \***********************************************************/

    /*! exports provided: MisCotizacionesPage */

    /***/
    function srcAppMisCotizacionesMisCotizacionesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCotizacionesPage", function () {
        return MisCotizacionesPage;
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


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/downloader/ngx */
      "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MisCotizacionesPage = /*#__PURE__*/function () {
        function MisCotizacionesPage(auth, transfer, file, downloader, router) {
          _classCallCheck(this, MisCotizacionesPage);

          this.auth = auth;
          this.transfer = transfer;
          this.file = file;
          this.downloader = downloader;
          this.router = router;
          this.cotizaciones$ = [];
          this.logs = [];
          this.usuarios$ = [];
        }

        _createClass(MisCotizacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "getCotizaciones",
          value: function getCotizaciones(user_id) {
            var _this = this;

            this.auth.getAllObjectById('getMisCotizaciones/', user_id).subscribe(function (res) {
              _this.cotizaciones$ = res;
              console.log(_this.cotizaciones$);
            });
          }
        }, {
          key: "show",
          value: function show(element) {
            //console.log(element);
            // const fileTransfer: FileTransferObject = this.transfer.create();
            // const url = ('https://192.168.1.7:5000/api/');
            var url = 'https://altools.es/api/';
            var downloadURL = url + 'downloads/' + element.file;
            var menjsa = "Mi Cotizacion" + element.file;
            var descr = "Descripcion" + element.descripcion;
            var request = {
              uri: downloadURL,
              title: menjsa,
              description: descr,
              mimeType: '',
              visibleInDownloadsUi: true,
              notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__["NotificationVisibility"].VisibleNotifyCompleted,
              destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: 'MyFile.pdf'
              }
            };
            this.downloader.download(request).then(function (location) {
              return console.log('File downloaded at:' + location);
            })["catch"](function (error) {
              return console.error(error);
            });
            console.log(downloadURL); // fileTransfer.download(url, 'download/' + element.file ).then((entry) => {
            //   console.log('download complete: ' + entry.toURL());
            // }, (error) => {
            //   console.log(error);
            // });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(element) {
            console.log(element);
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this2 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this2.usuarios$ = res;
              var user_id = _this2.usuarios$.id;

              _this2.getCotizaciones(user_id); //console.log(this.usuarios$);

            });
          }
        }]);

        return MisCotizacionesPage;
      }();

      MisCotizacionesPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
        }, {
          type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__["Downloader"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      MisCotizacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-cotizaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mis-cotizaciones.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cotizaciones/mis-cotizaciones.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mis-cotizaciones.page.scss */
        "./src/app/mis-cotizaciones/mis-cotizaciones.page.scss"))["default"]]
      })], MisCotizacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mis-cotizaciones-mis-cotizaciones-module-es5.js.map
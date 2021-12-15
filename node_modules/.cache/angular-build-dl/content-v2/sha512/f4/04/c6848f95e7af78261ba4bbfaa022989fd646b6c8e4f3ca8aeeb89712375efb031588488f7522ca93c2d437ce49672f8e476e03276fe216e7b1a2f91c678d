(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-cortes-mis-cortes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMisCortesMisCortesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button disabled=\"true\">\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Historial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"contenido\">\n    <ion-row style=\"border-bottom: groove; text-align: right;\">\n      <ion-col col-4>\n        <ion-label><strong>Cliente</strong></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Celular</strong></ion-label>\n      </ion-col>\n      <!-- <ion-col col-3>\n        <ion-label><strong>Descripción</strong></ion-label>\n      </ion-col> -->\n      <ion-col col-4>\n        <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row style=\"border-bottom: groove;text-align: center;\" *ngFor=\"let element of hoja_calculo_perfil$ \">          \n      <ion-col >\n        <ion-label>{{element.nombre_cliente }}</ion-label>\n      </ion-col>\n      <ion-col >\n        <ion-label>{{element.celular}}</ion-label>\n      </ion-col>\n      <!-- <ion-col style=\"max-width: 35%;\">\n        <ion-label>{{element.descripcion }}</ion-label>\n      </ion-col> -->\n     \n      <ion-button size=\"small\" color=\"light\" (click)=\"selectOptionHojaPerfil(element)\">\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>      \n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer class=\"div\" *ngIf=\"btnbool == true\">\n  <div style=\"padding: 2px 1px 2px 2px;overflow: scroll;max-height: 60.5%;\">\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\">\n      <ion-col col-4>\n        <ion-label><strong>Combinacion</strong></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Linea</strong></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Ancho</strong> </ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Alto</strong></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculoPerfil$ \">\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion1'\">\n        <ion-label>Dos Hojas</ion-label>\n      </ion-col>\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion4'\">\n        <ion-label>Tres Hojas</ion-label>\n      </ion-col>\n      <ion-col class=\"col\" col-4 *ngIf=\"element.combinacion == 'combinacion5'\">\n        <ion-label>Cuatro Hojas</ion-label>\n      </ion-col>\n      <ion-col col-4 style=\"text-align: center !important;\">\n        <ion-label>{{ element.linea }}</ion-label>\n      </ion-col>\n\n      <ion-col col-4 style=\"text-align: center !important;\">\n        <ion-label>{{ element.ancho | number:'0.3-3' }}</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label>{{ element.alto | number:'0.3-3' }}</ion-label>\n      </ion-col>\n\n      <!-- <ion-input [(ngModel)]=\"hoja_id\" value=\"{{ element.id }}\">{{ element.id }}</ion-input> -->\n      <ion-button size=\"small\" color=\"light\" (click)=\"selectOptionPerfil(element)\">\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-row>\n  </div>\n \n    <div style=\"overflow: scroll;max-height: 90%;\">\n      <ion-row>\n        <ion-col class=\"md-12\">\n          <ion-item>\n            <ion-label position=\"floating\">Nombre Cliente</ion-label>\n            <ion-input [(ngModel)]=\"nombre_cliente\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"><a href=\"tel:{{celular}}\"><ion-icon name=\"call-outline\" slot=\"end\" ></ion-icon></a> Celular *</ion-label>\n            <ion-input [(ngModel)]=\"celular\" type=\"tel\" pattern=\"[0-9]*\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row>\n        <ion-col class=\"md-12\">\n          <ion-item>\n            <ion-label position=\"floating\">Descripcion *</ion-label>\n           <ion-input [(ngModel)]=\"descripcion\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-button color=\"dark\" (click)=\"guardarOperacionHoja()\" class=\"float\" style=\"float: right;\">\n        <ion-icon name=\"save\"></ion-icon> Guardar\n      </ion-button>\n\n      <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" style=\"float: right;\">\n        <ion-icon name=\"close\"></ion-icon> Cerrar\n      </ion-button>\n    </div>\n</ion-footer>\n\n\n<ion-footer class=\"div\" *ngIf=\"btnboolPefil == true\">\n  <div style=\"padding: 2px 1px 2px 2px;overflow: scroll;max-height: 31.5%;\">\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculo_hoja$ \">\n      <ion-col col-4>\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\n      </ion-col>\n      <ion-col col-4 class=\"col\">\n        <ion-label>{{element.resultado }}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col\">\n        <ion-label></ion-label>\n      </ion-col>\n      <ion-col  class=\"col\">\n        <ion-label></ion-label>\n      </ion-col>\n      <ion-col class=\"col\" style=\"float: right;\">\n        <ion-label>&nbsp;&nbsp;{{ suma_m2 | number:'0.1-1' }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n \n    <div style=\"overflow: scroll;max-height: 80%;\">\n      <ion-row>\n        <ion-col class=\"md-12\">\n          <ion-item>\n            <ion-label>Combinación</ion-label>\n            <ion-select okText=\"Ok\" cancelText=\"Cancelar\" [(ngModel)]=\"combinacion\">\n              <ion-select-option value=\"combinacion1\">Dos Hojas</ion-select-option>\n              <ion-select-option value=\"combinacion4\">Tres Hojas</ion-select-option>\n              <ion-select-option value=\"combinacion5\">Cuatro Hojas</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Ancho *</ion-label>\n            <ion-input [ngModel]=\"ancho | number:'0.3-3'\" type=\"number\" ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Alto *</ion-label>\n            <ion-input [ngModel]=\"alto | number:'0.3-3'\" type=\"number\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"md-12\">\n          <ion-item>\n            <ion-label position=\"floating\">Linea *</ion-label>\n            <ion-select okText=\"Ok\" cancelText=\"Cancelar\" [(ngModel)]=\"linea\">\n              <ion-select-option value=\"L-20\">Linea 20</ion-select-option>\n              <ion-select-option value=\"L-25\">Linea 25</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button color=\"dark\" (click)=\"guardarOperacionPerfil()\" class=\"float\" style=\"float: right;\">\n        <ion-icon name=\"save\"></ion-icon> Guardar\n      </ion-button>\n\n      <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" style=\"float: right;\">\n        <ion-icon name=\"close\"></ion-icon> Cerrar\n      </ion-button>\n    </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/mis-cortes/mis-cortes-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/mis-cortes/mis-cortes-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: MisCortesPageRoutingModule */

    /***/
    function srcAppMisCortesMisCortesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCortesPageRoutingModule", function () {
        return MisCortesPageRoutingModule;
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


      var _mis_cortes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mis-cortes.page */
      "./src/app/mis-cortes/mis-cortes.page.ts");

      var routes = [{
        path: '',
        component: _mis_cortes_page__WEBPACK_IMPORTED_MODULE_3__["MisCortesPage"]
      }];

      var MisCortesPageRoutingModule = function MisCortesPageRoutingModule() {
        _classCallCheck(this, MisCortesPageRoutingModule);
      };

      MisCortesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MisCortesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mis-cortes/mis-cortes.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/mis-cortes/mis-cortes.module.ts ***!
      \*************************************************/

    /*! exports provided: MisCortesPageModule */

    /***/
    function srcAppMisCortesMisCortesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCortesPageModule", function () {
        return MisCortesPageModule;
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


      var _mis_cortes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mis-cortes-routing.module */
      "./src/app/mis-cortes/mis-cortes-routing.module.ts");
      /* harmony import */


      var _mis_cortes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mis-cortes.page */
      "./src/app/mis-cortes/mis-cortes.page.ts");

      var MisCortesPageModule = function MisCortesPageModule() {
        _classCallCheck(this, MisCortesPageModule);
      };

      MisCortesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mis_cortes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisCortesPageRoutingModule"]],
        declarations: [_mis_cortes_page__WEBPACK_IMPORTED_MODULE_6__["MisCortesPage"]]
      })], MisCortesPageModule);
      /***/
    },

    /***/
    "./src/app/mis-cortes/mis-cortes.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/mis-cortes/mis-cortes.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMisCortesMisCortesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  color: black;\n  font-size: 1.1rem;\n}\n\n.contenido {\n  padding: 10px;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLWNvcnRlcy9taXMtY29ydGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9taXMtY29ydGVzL21pcy1jb3J0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC5jb250ZW5pZG97XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcclxuICAgIC8vIGhlaWdodDogNDAlO1xyXG4gICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9IFxyXG4gIC5jb2x7XHJcbiAgICBXb3JkLXdyYXA6IGJyZWFrLVdvcmQ7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/mis-cortes/mis-cortes.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/mis-cortes/mis-cortes.page.ts ***!
      \***********************************************/

    /*! exports provided: MisCortesPage */

    /***/
    function srcAppMisCortesMisCortesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MisCortesPage", function () {
        return MisCortesPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      "./node_modules/@awesome-cordova-plugins/in-app-browser/__ivy_ngcc__/ngx/index.js");

      var MisCortesPage = /*#__PURE__*/function () {
        function MisCortesPage(auth, alertController, actionSheetController, _formBuilder, toastController, iab) {
          _classCallCheck(this, MisCortesPage);

          this.auth = auth;
          this.alertController = alertController;
          this.actionSheetController = actionSheetController;
          this._formBuilder = _formBuilder;
          this.toastController = toastController;
          this.iab = iab;
          this.calculoPerfil$ = [];
          this.hoja_calculo_perfil$ = [];
          this.logs = [];
          this.usuarios$ = [];
          this.data = [];
          this.data1 = [];
        }

        _createClass(MisCortesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
            this.dataFormHistorial = this.createFormHist();
          }
        }, {
          key: "getHojaCalculo",
          value: function getHojaCalculo(user_id) {
            var _this = this;

            this.auth.getAllObjectById('getHojaCalculoPerfilEditapp/', user_id).subscribe(function (res) {
              _this.hoja_calculo_perfil$ = res;
              console.log(_this.hoja_calculo_perfil$);
            });
          }
        }, {
          key: "getPerfils",
          value: function getPerfils(user_id, hoja_id) {
            var _this2 = this;

            console.log(this.hoja_id);
            this.auth.getAllObjectByIdPerfils('getHistorialCalculos/', user_id, hoja_id).subscribe(function (res) {
              _this2.calculoPerfil$ = res; // console.log(this.calculoPerfil$);
            });
          }
        }, {
          key: "selectOptionHojaPerfil",
          value: function selectOptionHojaPerfil(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Opciones Historial Cortes',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Eliminar',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this3.deleteHojaCalculo(element);
                          }
                        }, {
                          text: 'Editar',
                          icon: 'create',
                          handler: function handler() {
                            _this3.btnboolean();

                            _this3.id = element.id;
                            _this3.nombre_cliente = element.nombre_cliente;
                            _this3.celular = element.celular;
                            _this3.descripcion = element.descripcion;
                            _this3.user_id = element.user_id;

                            _this3.getPerfils(_this3.user_id, _this3.id);
                          }
                        }, {
                          text: 'Cancelar',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            actionSheet.dismiss();
                          }
                        }, {
                          text: 'Ver Historial en la Web',
                          role: 'view',
                          icon: 'globe',
                          handler: function handler() {
                            _this3.goWeb(element.id);
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goWeb",
          value: function goWeb(id) {
            var browser = this.iab.create('https://altools.es/hojaCalculo/' + id); // browser.executeScript( { code: "\
            //   var message = 'this is the message';\
            //   var messageObj = {my_message: message};\
            //   var stringifiedMessageObj = JSON.stringify(messageObj);\
            //   webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);"
            // });

            browser.on('loadstop').subscribe(function (event) {
              browser.insertCSS({
                code: "body{color: red;"
              });
            });
            browser.show(); // this.router.navigateByUrl('https://altools.es/api/hojaCalculo/'+ id);
            // window.open('https://altools.es/hojaCalculo/'+id, '_system', 'location=yes'); return false;
          }
        }, {
          key: "selectOptionPerfil",
          value: function selectOptionPerfil(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var actionSheet, _yield$actionSheet$on2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheetController.create({
                        header: 'Opciones Perfiles',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Eliminar',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this4.deletePerfil(element);
                          }
                        }, {
                          text: 'Editar',
                          icon: 'create',
                          handler: function handler() {
                            _this4.cerrar();

                            _this4.btnbooleanPerfil();

                            _this4.id = element.id;
                            _this4.alto = element.alto;
                            _this4.ancho = element.ancho;
                            _this4.linea = element.linea;
                            _this4.combinacion = element.combinacion;
                          }
                        }, {
                          text: 'Cancelar',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            actionSheet.dismiss();
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context2.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on2 = _context2.sent;
                      role = _yield$actionSheet$on2.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "btnbooleanPerfil",
          value: function btnbooleanPerfil() {
            return this.btnboolPefil = true;
          }
        }, {
          key: "cerrarHoja",
          value: function cerrarHoja() {
            return this.btnboolPefil = false;
          }
        }, {
          key: "btnboolean",
          value: function btnboolean() {
            return this.btnbool = true;
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            return this.btnbool = false;
          }
        }, {
          key: "createFormHist",
          value: function createFormHist() {
            return this._formBuilder.group({
              combinacion: [this.combinacion],
              ancho: [this.ancho, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              alto: [this.alto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              linea: [this.linea, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
            });
          }
        }, {
          key: "guardarOperacionHoja",
          value: function guardarOperacionHoja(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Actualización',
                        message: '¿Desea Actualizar este Item?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            var data = _this5._formBuilder.group({
                              id: [_this5.id],
                              nombre_cliente: [_this5.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              celular: [_this5.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              descripcion: [_this5.descripcion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                            });

                            _this5.data1 = data.value;
                            var a = _this5.data1.id;
                            console.log(_this5.data1);

                            if (data.valid) {
                              _this5.auth.updateObjectById('updateStatusHojaAll/', a, _this5.data1).subscribe(function (datav) {
                                console.log(datav);
                                window.location.reload();
                              });
                            } else {
                              _this5.presentToast("Ingrese Datos para Actualizar");
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "guardarOperacionPerfil",
          value: function guardarOperacionPerfil(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Actualización',
                        message: '¿Desea Actualizar este Item?',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            var data = _this6._formBuilder.group({
                              id: [_this6.id],
                              ancho: [_this6.ancho, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              alto: [_this6.alto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              linea: [_this6.linea, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              combinacion: [_this6.combinacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
                            });

                            _this6.data1 = data.value;
                            var a = _this6.data1.id;
                            console.log(_this6.data1);

                            if (data.valid) {
                              _this6.auth.updateObjectById('actualizarPerfil/', a, _this6.data1).subscribe(function (datav) {
                                console.log(datav);
                                window.location.reload();
                              });
                            } else {
                              _this6.presentToast("Ingrese Datos para Actualizar");
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteHojaCalculo",
          value: function deleteHojaCalculo(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Eliminar este Elemento?',
                        message: '',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            return false; //console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Si',
                          handler: function handler() {
                            _this7.auth.deleteObjectById('deleteHojaPerfil/', element.id).subscribe(function (res) {
                              console.log("Hoja Eliminada");
                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "deletePerfil",
          value: function deletePerfil(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Eliminar este Elemento?',
                        message: '',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            return false; //console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Si',
                          handler: function handler() {
                            _this8.postDeletePerfil(element);

                            window.location.reload();
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "postDeletePerfil",
          value: function postDeletePerfil(element) {
            this.auth.deleteObjectById('deletePerfil/', element.id).subscribe(function (res) {});
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            window.location.reload();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this9 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this9.usuarios$ = res;
              var user_id = _this9.usuarios$.id;
              _this9.role = _this9.usuarios$.role;
              console.log(_this9.role); // this.getPerfils(user_id);

              _this9.getHojaCalculo(user_id);
            });
          }
        }]);

        return MisCortesPage;
      }();

      MisCortesPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
        }];
      };

      MisCortesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-cortes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mis-cortes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-cortes/mis-cortes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mis-cortes.page.scss */
        "./src/app/mis-cortes/mis-cortes.page.scss"))["default"]]
      })], MisCortesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mis-cortes-mis-cortes-module-es5.js.map
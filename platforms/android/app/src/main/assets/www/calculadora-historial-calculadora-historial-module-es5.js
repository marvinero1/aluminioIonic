(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculadora-historial-calculadora-historial-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCalculadoraHistorialCalculadoraHistorialPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calculos Guardados</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"contenido\">\r\n  <ion-row style=\"border-bottom: groove; text-align: right;\">\r\n    <ion-col col-4>\r\n      <ion-label><strong>Cliente</strong></ion-label>\r\n    </ion-col>\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Celular</strong></ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Total Suma</strong></ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Precio$</strong></ion-label>\r\n    </ion-col> -->\r\n    <ion-col col-4>\r\n      <ion-label onclick=\"true\"><strong>Total $us</strong></ion-label>\r\n    </ion-col>\r\n    <ion-col col-4>\r\n      <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"border-bottom: groove;text-align: center;\" *ngFor=\"let element of calculo$ \">\r\n    <ion-col class=\"col\" col-4>\r\n      <ion-label>{{element.nombre_cliente}}</ion-label>\r\n    </ion-col>\r\n    <!-- <ion-col col-4>\r\n      <ion-label>{{element.nombre_operacion}}</ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label>{{element.total_suma }}</ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label> {{element.precio}}</ion-label>\r\n    </ion-col> -->\r\n    <ion-col col-4>\r\n      <ion-label>{{ element.total_suma | number:'0.1-1' }}</ion-label>\r\n    </ion-col>\r\n\r\n    <ion-button size=\"small\" color=\"light\" (click)=\"presentActionSheet(element)\">\r\n      <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <!-- <ion-button size=\"small\" color=\"danger\" (click)=\"deleteAll(element)\">\r\n      <ion-icon name=\"trash-outline\"></ion-icon>\r\n    </ion-button> -->\r\n  </ion-row>\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"div\" *ngIf=\"btnbool == true\">\r\n  <div style=\"float: right;\">\r\n      <ion-icon   (click)=\"cerrar()\"name=\"close\"></ion-icon>\r\n  </div>\r\n\r\n  <div style=\"padding: 10px 10px 0px;overflow: scroll;max-height: 31.5%;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Ancho</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Alto</strong> </ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>TOTAL M²</strong></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculo_hoja$ \">\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 class=\"col\">\r\n        <ion-label>{{element.resultado }}</ion-label>\r\n      </ion-col>\r\n     \r\n      \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col  class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"col\" style=\"float: right;\">\r\n        <ion-label>&nbsp;&nbsp;{{ suma_m2 | number:'0.1-1' }}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n \r\n    <div style=\"overflow: scroll;max-height: 80%;\">\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\" type=\"number\">Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\" type=\"text\"\r\n            minlength=\"2\" maxlength=\"40\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-item style=\"width: 194px;\">\r\n              <ion-label >\r\n                Celular *\r\n              </ion-label>\r\n              &nbsp;<a href=\"tel:{{celular}}\"><ion-icon name=\"call-outline\" slot=\"end\" ></ion-icon></a>\r\n              <ion-input [(ngModel)]=\"celular\" type=\"tel\" pattern=\"[0-9]*\"></ion-input>\r\n            </ion-item>\r\n            <!-- <ion-item >\r\n              <ion-label position=\"floating\" type=\"number\">Celular *</ion-label>\r\n              <a href=\"tel:celular\"><ion-icon name=\"call-outline\" slot=\"end\"  style=\"padding-left: 8rem;\"></ion-icon> </a> \r\n            </ion-item> -->\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" type=\"number\">Precio $</ion-label>\r\n              <ion-input [(ngModel)]=\"precio\" type=\"number\" pattern=\"[0-9]*\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" type=\"number\">Descripción *</ion-label>\r\n            <ion-input [(ngModel)]=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n       <br>\r\n      <p style=\"float: right; padding: 5px;\"><strong>Precio Total: </strong> {{ resultadoM  | number:'0.1-1' }}</p>\r\n      <!-- <ion-item>\r\n        <ion-label position=\"floating\">Total</ion-label>\r\n        <ion-input [(ngModel)]=\"totalTotalesT\" formControlName=\"totalTotalesT\" disabled=\"true\"></ion-input>\r\n      </ion-item> -->\r\n  \r\n      <ion-button color=\"dark\" (click)=\"sumaTotalesTotales()\" class=\"float\">\r\n        <ion-icon name=\"calculator\"></ion-icon>Resultado\r\n      </ion-button>\r\n  \r\n      <ion-button color=\"dark\" (click)=\"guardarOperacion()\" class=\"float\">\r\n        <ion-icon name=\"save\"></ion-icon>Actualizar Operacion\r\n      </ion-button>\r\n    </div>    \r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/calculadora-historial/calculadora-historial-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/calculadora-historial/calculadora-historial-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CalculadoraHistorialPageRoutingModule */

    /***/
    function srcAppCalculadoraHistorialCalculadoraHistorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPageRoutingModule", function () {
        return CalculadoraHistorialPageRoutingModule;
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


      var _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calculadora-historial.page */
      "./src/app/calculadora-historial/calculadora-historial.page.ts");

      var routes = [{
        path: '',
        component: _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_3__["CalculadoraHistorialPage"]
      }];

      var CalculadoraHistorialPageRoutingModule = function CalculadoraHistorialPageRoutingModule() {
        _classCallCheck(this, CalculadoraHistorialPageRoutingModule);
      };

      CalculadoraHistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalculadoraHistorialPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/calculadora-historial/calculadora-historial.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/calculadora-historial/calculadora-historial.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CalculadoraHistorialPageModule */

    /***/
    function srcAppCalculadoraHistorialCalculadoraHistorialModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPageModule", function () {
        return CalculadoraHistorialPageModule;
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


      var _calculadora_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calculadora-historial-routing.module */
      "./src/app/calculadora-historial/calculadora-historial-routing.module.ts");
      /* harmony import */


      var _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calculadora-historial.page */
      "./src/app/calculadora-historial/calculadora-historial.page.ts");

      var CalculadoraHistorialPageModule = function CalculadoraHistorialPageModule() {
        _classCallCheck(this, CalculadoraHistorialPageModule);
      };

      CalculadoraHistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _calculadora_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculadoraHistorialPageRoutingModule"]],
        declarations: [_calculadora_historial_page__WEBPACK_IMPORTED_MODULE_6__["CalculadoraHistorialPage"]]
      })], CalculadoraHistorialPageModule);
      /***/
    },

    /***/
    "./src/app/calculadora-historial/calculadora-historial.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/calculadora-historial/calculadora-historial.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCalculadoraHistorialCalculadoraHistorialPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  color: black;\n  font-size: 1.1rem;\n}\n\n.contenido {\n  padding: 10px;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEtaGlzdG9yaWFsL2NhbGN1bGFkb3JhLWhpc3RvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYWRvcmEtaGlzdG9yaWFsL2NhbGN1bGFkb3JhLWhpc3RvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuICAuY29udGVuaWRve1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmRpdntcclxuICAgIG1hcmdpbjogICAgIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgICAvLyBoZWlnaHQ6IDQwJTtcclxuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfSBcclxuICAuY29se1xyXG4gICAgV29yZC13cmFwOiBicmVhay1Xb3JkO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/calculadora-historial/calculadora-historial.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/calculadora-historial/calculadora-historial.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CalculadoraHistorialPage */

    /***/
    function srcAppCalculadoraHistorialCalculadoraHistorialPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPage", function () {
        return CalculadoraHistorialPage;
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


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CalculadoraHistorialPage = /*#__PURE__*/function () {
        function CalculadoraHistorialPage(auth, alertController, actionSheetController, _formBuilder, restangular, loadingCtrl, router, toastController) {
          _classCallCheck(this, CalculadoraHistorialPage);

          this.auth = auth;
          this.alertController = alertController;
          this.actionSheetController = actionSheetController;
          this._formBuilder = _formBuilder;
          this.restangular = restangular;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.toastController = toastController;
          this.calculo$ = [];
          this.calculo_hoja$ = [];
          this.logs = [];
          this.usuarios$ = [];
          this.data1 = [];
          this.btnbool = false;
        }

        _createClass(CalculadoraHistorialPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "guardarOperacion",
          value: function guardarOperacion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
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
                            var data = _this._formBuilder.group({
                              id: [_this.id],
                              celular: [_this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              nombre_cliente: [_this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              precio: [_this.precio, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              total_suma: [_this.resultadoM, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              suma_m2: [_this.suma_m2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                              descripcion: [_this.descripcion],
                              user_id: [_this.user_id]
                            });

                            _this.data1 = data.value;
                            var a = _this.data1.id;
                            console.log(_this.data1);

                            if (data.valid) {
                              _this.auth.updateObjectById('actualizarCalculo/', a, _this.data1).subscribe(function (datav) {
                                console.log(datav); // this.navCtrl.back();
                                //this.modalController.dismiss();
                                // this.closemodal(response.data);

                                window.location.reload();
                              });
                            } else {
                              _this.presentToast("Ingrese Datos para Actualizar");
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getCalculos",
          value: function getCalculos(user_id) {
            var _this2 = this;

            this.auth.getAllObjectById('historialCalculos/', user_id).subscribe(function (res) {
              _this2.calculo$ = res;
              console.log(_this2.calculo$);
            });
          }
        }, {
          key: "sumaTotalesTotales",
          value: function sumaTotalesTotales() {
            this.resultadoM = this.suma_m2 * this.precio; // console.log(this.resultadoM+"=", +this.suma_m2 ,+ this.precio);

            return this.resultadoM;
          }
        }, {
          key: "deleteAll",
          value: function deleteAll(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
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
                            _this3.auth.deleteObjectById('calculadoraHistorialDelete/', item.id).subscribe(function (res) {
                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCalculsHoja",
          value: function getCalculsHoja(user_id, hoja_id) {
            var _this4 = this;

            this.auth.getAllObjectByIdforCalculo('calculos/', user_id, hoja_id).subscribe(function (res) {
              _this4.calculo_hoja$ = res;
              console.log(_this4.calculo_hoja$);
            });
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Opciones Historial Calculadora',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Eliminar',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this5.confirmacion(element);
                          }
                        }, {
                          text: 'Editar',
                          icon: 'create',
                          handler: function handler() {
                            _this5.btnboolean();

                            var data = _this5._formBuilder.group({
                              id: [element.id],
                              celular: [element.celular],
                              nombre_cliente: [element.nombre_cliente],
                              precio: [element.precio],
                              total_suma: [element.total_suma],
                              suma_m2: [element.suma_m2],
                              descripcion: [element.descripcion],
                              user_id: [element.user_id]
                            });

                            _this5.id = element.id;
                            _this5.celular = element.celular;
                            _this5.nombre_cliente = element.nombre_cliente;
                            _this5.precio = element.precio;
                            _this5.total_suma = element.total_suma;
                            _this5.suma_m2 = element.suma_m2;
                            _this5.descripcion = element.descripcion;
                            _this5.user_id = element.user_id;
                            console.log(data.value);

                            _this5.getCalculsHoja(_this5.user_id, element.hoja_calculo_id);
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
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context3.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context3.sent;
                      role = _yield$actionSheet$on.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "btnboolean",
          value: function btnboolean() {
            if (this.btnbool) {
              this.btnbool = false;
            } else {
              this.btnbool = true;
            }
          }
        }, {
          key: "cerrar",
          value: function cerrar() {
            if (this.btnbool) {
              this.btnbool = false;
            } else {
              this.btnbool = true;
            }
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "confirmacion",
          value: function confirmacion(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
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
                            _this6.auth.deleteObjectById('calculadoraHistorialDelete/', element.id).subscribe(function (res) {
                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this7 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this7.usuarios$ = res;
              var user_id = _this7.usuarios$.id;

              _this7.getCalculos(user_id); //console.log(this.usuarios$);

            });
          }
        }]);

        return CalculadoraHistorialPage;
      }();

      CalculadoraHistorialPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      CalculadoraHistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculadora-historial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calculadora-historial.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calculadora-historial.page.scss */
        "./src/app/calculadora-historial/calculadora-historial.page.scss"))["default"]]
      })], CalculadoraHistorialPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=calculadora-historial-calculadora-historial-module-es5.js.map
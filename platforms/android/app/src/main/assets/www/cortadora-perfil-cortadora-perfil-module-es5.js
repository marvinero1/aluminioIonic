(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cortadora-perfil-cortadora-perfil-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCortadoraPerfilCortadoraPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Cortadora</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"btnHoja == true\">\r\n      <form [formGroup]=\"data_hoja1\" (ngSubmit)=crearHojaCalculo()>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-row style=\"display: block; text-align: center;\">\r\n          <ion-button (click)=\"crearHojaCalculo()\">\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-row>\r\n      </form>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding>\r\n  <div *ngIf=\"btnHoja == false\" style=\"padding: 7px;\">\r\n    <form [formGroup]=\"dataForm\" (ngSubmit)=submitData()>\r\n      <div>\r\n        <ion-row>\r\n          \r\n          <ion-col>\r\n            <p> <strong>Elija una Linea\r\n              <ion-button class=\"help\" slot=\"end\" (click)=\"help()\" color=\"light\" shape=\"round\" size=\"small\">?</ion-button>\r\n               </strong></p><br>\r\n            \r\n           \r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>Linea</ion-label>\r\n                <ion-select [compareWith]=\"compareWith\" formControlName=\"linea\">\r\n                  <ion-select-option value=\"L-20\">Linea 20</ion-select-option>\r\n                  <ion-select-option value=\"L-25\">Linea 25</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ancho</ion-label>\r\n              <ion-input type=\"number\" aria-placeholder=\"0.000\" formControlName=\"ancho\" step=\"0.001\" max=\"9.999\" onKeyPress=\"if(this.value.length==5) return false;\" pattern=\"[0-9]*\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Alto</ion-label>\r\n              <ion-input type=\"number\" aria-placeholder=\"0.000\" formControlName=\"alto\" step=\"0.001\" max=\"9.999\" onKeyPress=\"if(this.value.length==5) return false;\" pattern=\"[0-9]*\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Precio Bs.</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"precio\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\"># Repetición</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"repeticion\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </div>  <br>\r\n      <div>\r\n        <p> <strong>Elija una Combinación</strong></p>\r\n        <p class=\"lp\">*Elija solo una combinación.</p>\r\n        <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Dos Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion1.png\"></ion-img>\r\n              <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked1\" formControlName=\"combinacion\">\r\n                <ion-item *ngIf=\"!isChecked2 && !isChecked3\">\r\n                  <ion-label>OK</ion-label>\r\n                  <ion-radio slot=\"start\"  value=\"combinacion1\" color=\"success\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n\r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Tres Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion4.png\"></ion-img>\r\n                <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked2\" formControlName=\"combinacion\">\r\n                  <ion-item *ngIf=\"!isChecked1 && !isChecked3\">\r\n                    <ion-label>OK</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"combinacion4\" color=\"success\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n  \r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Cuatro Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion5.png\"></ion-img>\r\n              <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked3\" formControlName=\"combinacion\">\r\n                <ion-item *ngIf=\"!isChecked1 && !isChecked2\">\r\n                  <ion-label>OK</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"combinacion5\" color=\"success\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n          <br>\r\n        </ion-slides>\r\n      </div>\r\n      <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n      <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n    </form>\r\n\r\n    <ion-button color=\"dark\" expand=\"block\" (click)=\"submitData()\">\r\n      <ion-icon name=\"save-outline\"></ion-icon> Guardar\r\n    </ion-button>\r\n\r\n    <ion-button color=\"dark\" expand=\"block\" (click)=\"abrirVentana()\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>Cerrar Hoja de Calculo\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"btnbool == false\" class=\"ion-no-border\">\r\n  <div class=\"div\">\r\n    <form [formGroup]=\"data_hoja\" (ngSubmit)=cerrarHoja() novalidate>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\"  formControlName=\"nombre_cliente\" type=\"text\" minlength=\"2\" maxlength=\"40\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n         <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Celular *</ion-label>\r\n            <ion-input [(ngModel)]=\"celular\" formControlName=\"celular\" type=\"tel\" maxlength=\"10\" pattern=\"[0-9]*\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripción *</ion-label>\r\n            <ion-input formControlName=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-col>\r\n        <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" expand=\"full\">\r\n          <ion-icon name=\"save\"></ion-icon>Guardar Operación\r\n        </ion-button>\r\n      </ion-col>\r\n    </form>\r\n  </div>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHelpModalHelpModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <h5>¿Como ingresar datos?</h5>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n      <ion-col>\n        <h5><strong>Alto</strong></h5>\n        <p>Los número validos para este campo son del 0.001 al 9.999 Metros.</p>\n      </ion-col>\n      <ion-col>\n        <h5><strong>Ancho</strong></h5>\n        <p>Los número validos para este campo son del 0.001 al 9.999 Metros.</p>\n      </ion-col>\n  </ion-row>\n</ion-content> \n\n<ion-footer style=\"text-align: center;\">\n    <ion-button color=\"dark\" (click)=\"closeModal()\">Ok</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CortadoraPerfilPageRoutingModule */

    /***/
    function srcAppCortadoraPerfilCortadoraPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPageRoutingModule", function () {
        return CortadoraPerfilPageRoutingModule;
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


      var _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cortadora-perfil.page */
      "./src/app/cortadora-perfil/cortadora-perfil.page.ts");

      var routes = [{
        path: '',
        component: _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_3__["CortadoraPerfilPage"]
      }];

      var CortadoraPerfilPageRoutingModule = function CortadoraPerfilPageRoutingModule() {
        _classCallCheck(this, CortadoraPerfilPageRoutingModule);
      };

      CortadoraPerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CortadoraPerfilPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/cortadora-perfil/cortadora-perfil.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/cortadora-perfil/cortadora-perfil.module.ts ***!
      \*************************************************************/

    /*! exports provided: CortadoraPerfilPageModule */

    /***/
    function srcAppCortadoraPerfilCortadoraPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPageModule", function () {
        return CortadoraPerfilPageModule;
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


      var _cortadora_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cortadora-perfil-routing.module */
      "./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts");
      /* harmony import */


      var _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cortadora-perfil.page */
      "./src/app/cortadora-perfil/cortadora-perfil.page.ts");

      var CortadoraPerfilPageModule = function CortadoraPerfilPageModule() {
        _classCallCheck(this, CortadoraPerfilPageModule);
      };

      CortadoraPerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _cortadora_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["CortadoraPerfilPageRoutingModule"]],
        declarations: [_cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CortadoraPerfilPage"]]
      })], CortadoraPerfilPageModule);
      /***/
    },

    /***/
    "./src/app/cortadora-perfil/cortadora-perfil.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/cortadora-perfil/cortadora-perfil.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCortadoraPerfilCortadoraPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p, ion-label {\n  color: black;\n}\n\n.slide {\n  height: 250px;\n  width: 157px;\n  border: 2px solid #f8f8f8;\n  margin: 4px;\n}\n\n.lp {\n  font-size: 0.7rem;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\n.help {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ydGFkb3JhLXBlcmZpbC9jb3J0YWRvcmEtcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNGLHFCQUFBO0FBSUY7O0FBRkE7RUFDSSxZQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9jb3J0YWRvcmEtcGVyZmlsL2NvcnRhZG9yYS1wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCxpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnNsaWRle1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxNTdweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOGY4Zjg7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG4ubHB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4uZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgfVxyXG4uaGVscHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSAiXX0= */";
      /***/
    },

    /***/
    "./src/app/cortadora-perfil/cortadora-perfil.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/cortadora-perfil/cortadora-perfil.page.ts ***!
      \***********************************************************/

    /*! exports provided: CortadoraPerfilPage */

    /***/
    function srcAppCortadoraPerfilCortadoraPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPage", function () {
        return CortadoraPerfilPage;
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


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../help-modal/help-modal.component */
      "./src/app/help-modal/help-modal.component.ts");

      var CortadoraPerfilPage = /*#__PURE__*/function () {
        function CortadoraPerfilPage(alertController, _formBuilder, auth, restangular, modalController, loadingController, menuCtrl, toastController) {
          _classCallCheck(this, CortadoraPerfilPage);

          this.alertController = alertController;
          this._formBuilder = _formBuilder;
          this.auth = auth;
          this.restangular = restangular;
          this.modalController = modalController;
          this.loadingController = loadingController;
          this.menuCtrl = menuCtrl;
          this.toastController = toastController;
          this.logs = [];
          this.usuarios$ = [];
          this.hojas$ = [];
          this.categorias$ = [];
          this.estado = "false";
          this.repeticion = "1";
          this.btnbool = false;
          this.isChecked1 = false;
          this.isChecked2 = false;
          this.isChecked3 = false;
        }

        _createClass(CortadoraPerfilPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSubCategorias();
            this.getUser();
            this.abrirVentana();
            this.data_hoja1 = this.data_Hoja1();
            this.data_hoja = this.data_Hoja();
            this.dataForm = this.dataCombinacion();
            this.menuCtrl.enable(true);
          }
        }, {
          key: "dataCombinacion",
          value: function dataCombinacion() {
            return this._formBuilder.group({
              alto: [this.alto],
              ancho: [this.ancho],
              combinacion: [this.combinacion],
              linea: [this.linea],
              repeticion: [this.repeticion],
              hoja_id: [this.hoja_id],
              precio: [this.precio],
              estado: [this.estado],
              user_id: [this.user_id]
            });
          }
        }, {
          key: "data_Hoja1",
          value: function data_Hoja1() {
            var estado = "false";
            return this._formBuilder.group({
              estado: [estado],
              user_id: [this.user_id]
            });
          }
        }, {
          key: "data_Hoja",
          value: function data_Hoja() {
            var estado = "true";
            return this._formBuilder.group({
              nombre_cliente: [this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              celular: [this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              descripcion: [this.descripcion],
              estado: [estado]
            });
          }
        }, {
          key: "submitData",
          value: function submitData() {
            var _this = this;

            var data = this.dataForm.value;
            var anchos = data.ancho;
            var altos = data.alto;
            console.log(data);
            this.anchosDecimal = anchos.toFixed(4);
            this.altosDecimal = altos.toFixed(4);
            console.log(this.anchosDecimal, this.altosDecimal);

            if (this.anchosDecimal % 1 == 0) {
              this.presentToast('La variable ancho es entero, debe ser decimal.');
            } else if (this.altosDecimal % 1 == 0) {
              this.presentToast('La variable alto es entero, debe ser decimal.');
            } else if (this.altosDecimal % 1 == 0 && this.anchosDecimal % 1 == 0) {
              this.presentToast('ambos son enteros');
            } else {
              console.log('ambos son decimales');
              this.restangular.all('guardarCombinacion').post(data).subscribe(function (datav) {
                // console.log(data);
                _this.presentLoading();

                window.location.reload();
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "crearHojaCalculo",
          value: function crearHojaCalculo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Crear una Hoja de Calculo?',
                        message: '',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Si',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            var data = _this2.data_hoja1.value;
                            console.log(data);

                            if (data) {
                              _this2.restangular.all('/guardarHojaCortadoraPerfil').post(data).subscribe(function (datav) {
                                _this2.presentLoading();

                                window.location.reload();
                              });
                            } else {
                              (function (error) {
                                console.log(error);
                              });
                            }
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
          key: "getHoja",
          value: function getHoja(user_id) {
            var _this3 = this;

            this.auth.getCarrito('getHojaCalculoPerfil/', user_id).subscribe(function (res) {
              _this3.hojas$ = res;
              console.log(_this3.hojas$);
              var hoja_id = _this3.hojas$.id;

              if (_this3.hojas$.estado == 'false') {
                _this3.btnHoja = false;
              } else {
                _this3.btnHoja = true;
              }

              return _this3.hojas$;
            });
          }
        }, {
          key: "getSubCategorias",
          value: function getSubCategorias() {
            var _this4 = this;

            this.auth.getAllObject('getSubCategoria').subscribe(function (res) {
              _this4.categorias$ = res; // console.log(this.categorias$);
            });
          }
        }, {
          key: "cerrarHoja",
          value: function cerrarHoja() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var estado, data, a, celular, nombre;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      estado = 'true';
                      data = this.data_hoja.value;
                      a = this.hojas$.id;
                      celular = data.celular;
                      nombre = data.nombre_cliente;
                      console.log(nombre);

                      if (nombre != undefined && celular != undefined) {
                        this.auth.cerrarHojaCortadora('updateStatusHojaCortadora/', a, data).subscribe(function (datav) {
                          window.location.reload();
                        });
                      } else {
                        this.presentToast("Ingrese los datos correspondientes");
                      }

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "abrirVentana",
          value: function abrirVentana() {
            if (this.btnbool) {
              this.btnbool = false;
            } else {
              this.btnbool = true;
            }
          }
        }, {
          key: "guardarOperacion",
          value: function guardarOperacion() {
            var _this5 = this;

            var data1 = this.dataFormHistorial.value;
            var a = data1.user_id;
            console.log(data1);
            this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe(function (datav) {
              _this5.presentLoading(); // this.deleteAll(a); //CAMBIARLO POR EL QUE ACTUALIZA SU ESTADO

            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        cssClass: 'loading',
                        message: 'Guardando...',
                        duration: 4000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "help",
          value: function help() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_6__["HelpModalComponent"],
                        cssClass: 'modal-help'
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
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
            var _this6 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this6.usuarios$ = res;
              var user_id = _this6.usuarios$.id;
              console.log(user_id);

              _this6.getHoja(user_id);
            });
          }
        }]);

        return CortadoraPerfilPage;
      }();

      CortadoraPerfilPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"]
        }, {
          type: ngx_restangular__WEBPACK_IMPORTED_MODULE_4__["Restangular"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      CortadoraPerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cortadora-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cortadora-perfil.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cortadora-perfil.page.scss */
        "./src/app/cortadora-perfil/cortadora-perfil.page.scss"))["default"]]
      })], CortadoraPerfilPage);
      /***/
    },

    /***/
    "./src/app/help-modal/help-modal.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/help-modal/help-modal.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHelpModalHelpModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h5 {\n  text-align: center;\n  color: black;\n}\n\np {\n  color: black;\n  text-align: -webkit-center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC1tb2RhbC9oZWxwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hlbHAtbW9kYWwvaGVscC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/help-modal/help-modal.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/help-modal/help-modal.component.ts ***!
      \****************************************************/

    /*! exports provided: HelpModalComponent */

    /***/
    function srcAppHelpModalHelpModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpModalComponent", function () {
        return HelpModalComponent;
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

      var HelpModalComponent = /*#__PURE__*/function () {
        function HelpModalComponent(modalController) {
          _classCallCheck(this, HelpModalComponent);

          this.modalController = modalController;
        }

        _createClass(HelpModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return HelpModalComponent;
      }();

      HelpModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      HelpModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./help-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/help-modal/help-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./help-modal.component.scss */
        "./src/app/help-modal/help-modal.component.scss"))["default"]]
      })], HelpModalComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cortadora-perfil-cortadora-perfil-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cortadora-perfil-cortadora-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Cortadora</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"btnHoja == true\">\r\n      <form [formGroup]=\"data_hoja1\" (ngSubmit)=crearHojaCalculo()>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-row style=\"display: block; text-align: center;\">\r\n          <ion-button (click)=\"crearHojaCalculo()\">\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-row>\r\n      </form>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding>\r\n  <div *ngIf=\"btnHoja == false\" style=\"padding: 7px;\">\r\n    <form [formGroup]=\"dataForm\" (ngSubmit)=submitData()>\r\n      <div>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p> <strong>Elija una Linea</strong></p>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>Linea</ion-label>\r\n                <ion-select [compareWith]=\"compareWith\" formControlName=\"linea\">\r\n                  <ion-select-option value=\"L-20\">Linea 20</ion-select-option>\r\n                  <!-- <ion-select-option value=\"L-21\">Linea 21</ion-select-option>\r\n                  <ion-select-option value=\"L-22\">Linea 22</ion-select-option>\r\n                  <ion-select-option value=\"L-23\">Linea 23</ion-select-option>\r\n                  <ion-select-option value=\"L-24\">Linea 24</ion-select-option> -->\r\n                  <ion-select-option value=\"L-25\">Linea 25</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ancho</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"ancho\" onKeyPress=\"if(this.value.length==5) return false;\" pattern=\"[0-9]*\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Alto</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"alto\" onKeyPress=\"if(this.value.length==5) return false;\" pattern=\"[0-9]*\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Precio Bs.</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"precio\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\"># Repetición</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"repeticion\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </div>  <br>\r\n      <div>\r\n        <p> <strong>Elija una Combinación</strong></p>\r\n        <p class=\"lp\">*Elija solo una combinación.</p>\r\n        <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Dos Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion1.png\"></ion-img>\r\n              <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked1\" formControlName=\"combinacion\">\r\n                <ion-item *ngIf=\"!isChecked2 && !isChecked3\">\r\n                  <ion-label>OK</ion-label>\r\n                  <ion-radio slot=\"start\"  value=\"combinacion1\" color=\"success\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n\r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Tres Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion4.png\"></ion-img>\r\n                <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked2\" formControlName=\"combinacion\">\r\n                  <ion-item *ngIf=\"!isChecked1 && !isChecked3\">\r\n                    <ion-label>OK</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"combinacion4\" color=\"success\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n  \r\n          <ion-slide class=\"slide\">\r\n            <ion-col>\r\n              <ion-label>Cuatro Hojas</ion-label>\r\n              <ion-img style=\"pointer-events:none\" src=\"assets/combinaciones/combinacion5.png\"></ion-img>\r\n              <ion-radio-group allow-empty-selection=\"true\" [(ngModel)]=\"isChecked3\" formControlName=\"combinacion\">\r\n                <ion-item *ngIf=\"!isChecked1 && !isChecked2\">\r\n                  <ion-label>OK</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"combinacion5\" color=\"success\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-slide>\r\n          <br>\r\n        </ion-slides>\r\n      </div>\r\n      <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n      <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n    </form>\r\n\r\n    <ion-button color=\"dark\" expand=\"block\" (click)=\"submitData()\">\r\n      <ion-icon name=\"save-outline\"></ion-icon>Guardar\r\n    </ion-button>\r\n\r\n    <ion-button color=\"dark\" expand=\"block\" (click)=\"abrirVentana()\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>Cerrar Hoja de Calculo\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"btnbool == false\" class=\"ion-no-border\">\r\n  <div class=\"div\">\r\n    <form [formGroup]=\"data_hoja\" (ngSubmit)=cerrarHoja() novalidate>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\"  formControlName=\"nombre_cliente\" type=\"text\" minlength=\"2\" maxlength=\"40\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n         <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Celular *</ion-label>\r\n            <ion-input [(ngModel)]=\"celular\" formControlName=\"celular\" type=\"tel\" maxlength=\"10\" pattern=\"[0-9]*\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripción *</ion-label>\r\n            <ion-input formControlName=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-col>\r\n        <ion-button color=\"dark\" (click)=\"cerrarHoja()\" class=\"float\" expand=\"full\">\r\n          <ion-icon name=\"save\"></ion-icon>Guardar Operación\r\n        </ion-button>\r\n      </ion-col>\r\n    </form>\r\n  </div>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CortadoraPerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPageRoutingModule", function() { return CortadoraPerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cortadora-perfil.page */ "./src/app/cortadora-perfil/cortadora-perfil.page.ts");




const routes = [
    {
        path: '',
        component: _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_3__["CortadoraPerfilPage"]
    }
];
let CortadoraPerfilPageRoutingModule = class CortadoraPerfilPageRoutingModule {
};
CortadoraPerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CortadoraPerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/cortadora-perfil/cortadora-perfil.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/cortadora-perfil/cortadora-perfil.module.ts ***!
  \*************************************************************/
/*! exports provided: CortadoraPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPageModule", function() { return CortadoraPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cortadora_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cortadora-perfil-routing.module */ "./src/app/cortadora-perfil/cortadora-perfil-routing.module.ts");
/* harmony import */ var _cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cortadora-perfil.page */ "./src/app/cortadora-perfil/cortadora-perfil.page.ts");







let CortadoraPerfilPageModule = class CortadoraPerfilPageModule {
};
CortadoraPerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _cortadora_perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["CortadoraPerfilPageRoutingModule"]
        ],
        declarations: [_cortadora_perfil_page__WEBPACK_IMPORTED_MODULE_6__["CortadoraPerfilPage"]]
    })
], CortadoraPerfilPageModule);



/***/ }),

/***/ "./src/app/cortadora-perfil/cortadora-perfil.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/cortadora-perfil/cortadora-perfil.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p, ion-label {\n  color: black;\n}\n\n.slide {\n  height: 250px;\n  width: 157px;\n  border: 2px solid #f8f8f8;\n  margin: 4px;\n}\n\n.lp {\n  font-size: 0.7rem;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ydGFkb3JhLXBlcmZpbC9jb3J0YWRvcmEtcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNGLHFCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9jb3J0YWRvcmEtcGVyZmlsL2NvcnRhZG9yYS1wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCxpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnNsaWRle1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxNTdweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOGY4Zjg7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG4ubHB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4uZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgfSAiXX0= */");

/***/ }),

/***/ "./src/app/cortadora-perfil/cortadora-perfil.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/cortadora-perfil/cortadora-perfil.page.ts ***!
  \***********************************************************/
/*! exports provided: CortadoraPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CortadoraPerfilPage", function() { return CortadoraPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");







let CortadoraPerfilPage = class CortadoraPerfilPage {
    constructor(alertController, _formBuilder, auth, restangular, loadingController, menuCtrl, toastController) {
        this.alertController = alertController;
        this._formBuilder = _formBuilder;
        this.auth = auth;
        this.restangular = restangular;
        this.loadingController = loadingController;
        this.menuCtrl = menuCtrl;
        this.toastController = toastController;
        this.logs = [];
        this.usuarios$ = [];
        this.hojas$ = [];
        this.categorias$ = [];
        this.repeticion = "1";
        this.btnbool = false;
        this.isChecked1 = false;
        this.isChecked2 = false;
        this.isChecked3 = false;
    }
    ngOnInit() {
        this.getSubCategorias();
        this.getUser();
        this.abrirVentana();
        this.data_hoja1 = this.data_Hoja1();
        this.data_hoja = this.data_Hoja();
        this.dataForm = this.dataCombinacion();
        this.menuCtrl.enable(true);
    }
    dataCombinacion() {
        return this._formBuilder.group({
            alto: [this.alto],
            ancho: [this.ancho],
            combinacion: [this.combinacion],
            linea: [this.linea],
            repeticion: [this.repeticion],
            hoja_id: [this.hoja_id],
            precio: [this.precio],
            user_id: [this.user_id]
        });
    }
    data_Hoja1() {
        let estado = "false";
        return this._formBuilder.group({
            estado: [estado],
            user_id: [this.user_id]
        });
    }
    data_Hoja() {
        let estado = "true";
        return this._formBuilder.group({
            nombre_cliente: [this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            celular: [this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descripcion: [this.descripcion],
            estado: [estado],
        });
    }
    submitData() {
        let data = this.dataForm.value;
        let perfil_id = data.perfil_id;
        this.restangular.all('guardarCombinacion').post(data).subscribe((datav) => {
            // console.log(data);
            this.presentLoading();
            window.location.reload();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    crearHojaCalculo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Crear una Hoja de Calculo?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            console.log('Confirm Okay');
                            let data = this.data_hoja1.value;
                            console.log(data);
                            if (data) {
                                this.restangular.all('/guardarHojaCortadoraPerfil').post(data).subscribe((datav) => {
                                    this.presentLoading();
                                    window.location.reload();
                                });
                            }
                            else {
                                (error) => {
                                    console.log(error);
                                };
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getHoja(user_id) {
        this.auth.getCarrito('getHojaCalculoPerfil/', user_id)
            .subscribe((res) => {
            this.hojas$ = res;
            console.log(this.hojas$);
            let hoja_id = this.hojas$.id;
            if (this.hojas$.estado == 'false') {
                this.btnHoja = false;
            }
            else {
                this.btnHoja = true;
            }
            return this.hojas$;
        });
    }
    getSubCategorias() {
        this.auth.getAllObject('getSubCategoria').subscribe((res) => {
            this.categorias$ = res;
            // console.log(this.categorias$);
        });
    }
    cerrarHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let estado = 'true';
            let data = this.data_hoja.value;
            let a = this.hojas$.id;
            let celular = data.celular;
            let nombre = data.nombre_cliente;
            console.log(nombre);
            if (nombre != undefined && celular != undefined) {
                this.auth.cerrarHojaCortadora('updateStatusHojaCortadora/', a, data).subscribe((datav) => {
                    window.location.reload();
                });
            }
            else {
                this.presentToast("Ingrese los datos correspondientes");
            }
        });
    }
    abrirVentana() {
        if (this.btnbool) {
            this.btnbool = false;
        }
        else {
            this.btnbool = true;
        }
    }
    guardarOperacion() {
        let data1 = this.dataFormHistorial.value;
        let a = data1.user_id;
        console.log(data1);
        this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe((datav) => {
            this.presentLoading();
            // this.deleteAll(a); //CAMBIARLO POR EL QUE ACTUALIZA SU ESTADO
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Guardando...',
                duration: 4000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            console.log(user_id);
            this.getHoja(user_id);
        });
    }
};
CortadoraPerfilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_4__["Restangular"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CortadoraPerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cortadora-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cortadora-perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cortadora-perfil/cortadora-perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cortadora-perfil.page.scss */ "./src/app/cortadora-perfil/cortadora-perfil.page.scss")).default]
    })
], CortadoraPerfilPage);



/***/ })

}]);
//# sourceMappingURL=cortadora-perfil-cortadora-perfil-module-es2015.js.map
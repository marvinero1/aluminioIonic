(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculadora-historial-calculadora-historial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calculos Guardados</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"contenido\">\r\n  <ion-row style=\"border-bottom: groove; text-align: right;\">\r\n    <ion-col col-4>\r\n      <ion-label><strong>Cliente</strong></ion-label>\r\n    </ion-col>\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Celular</strong></ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Total Suma</strong></ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label><strong>Precio$</strong></ion-label>\r\n    </ion-col> -->\r\n    <ion-col col-4>\r\n      <ion-label onclick=\"true\"><strong>Total $us</strong></ion-label>\r\n    </ion-col>\r\n    <ion-col col-4>\r\n      <ion-label><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"border-bottom: groove;text-align: center;\" *ngFor=\"let element of calculo$ \">\r\n    <ion-col class=\"col\" col-4>\r\n      <ion-label>{{element.nombre_cliente}}</ion-label>\r\n    </ion-col>\r\n    <!-- <ion-col col-4>\r\n      <ion-label>{{element.nombre_operacion}}</ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label>{{element.total_suma }}</ion-label>\r\n    </ion-col> -->\r\n    <!-- <ion-col col-4>\r\n      <ion-label> {{element.precio}}</ion-label>\r\n    </ion-col> -->\r\n    <ion-col col-4>\r\n      <ion-label>{{ element.total_suma | number:'0.1-1' }}</ion-label>\r\n    </ion-col>\r\n\r\n    <ion-button size=\"small\" color=\"light\" (click)=\"presentActionSheet(element)\">\r\n      <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <!-- <ion-button size=\"small\" color=\"danger\" (click)=\"deleteAll(element)\">\r\n      <ion-icon name=\"trash-outline\"></ion-icon>\r\n    </ion-button> -->\r\n  </ion-row>\r\n</div>\r\n</ion-content>\r\n<ion-footer class=\"div\" *ngIf=\"btnbool == true\">\r\n  <div style=\"float: right;\">\r\n      <ion-icon   (click)=\"cerrar()\"name=\"close\"></ion-icon>\r\n  </div>\r\n\r\n  <div style=\"padding: 10px 10px 0px;overflow: scroll;max-height: 31.5%;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Ancho</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Alto</strong> </ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>TOTAL M²</strong></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: groove;text-align: center !important;\" *ngFor=\"let element of calculo_hoja$ \">\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 class=\"col\">\r\n        <ion-label>{{element.resultado }}</ion-label>\r\n      </ion-col>\r\n     \r\n      \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col  class=\"col\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"col\" style=\"float: right;\">\r\n        <ion-label>&nbsp;&nbsp;{{ suma_m2 | number:'0.1-1' }}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n \r\n    <div style=\"overflow: scroll;max-height: 80%;\">\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\" type=\"number\">Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\" type=\"text\"\r\n            minlength=\"2\" maxlength=\"40\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row>\r\n          <ion-col>\r\n            <ion-item style=\"width: 194px;\">\r\n              <ion-label >\r\n                Celular *\r\n              </ion-label>\r\n              &nbsp;<a href=\"tel:{{celular}}\"><ion-icon name=\"call-outline\" slot=\"end\" ></ion-icon></a>\r\n              <ion-input [(ngModel)]=\"celular\" type=\"tel\" pattern=\"[0-9]*\"></ion-input>\r\n            </ion-item>\r\n            <!-- <ion-item >\r\n              <ion-label position=\"floating\" type=\"number\">Celular *</ion-label>\r\n              <a href=\"tel:celular\"><ion-icon name=\"call-outline\" slot=\"end\"  style=\"padding-left: 8rem;\"></ion-icon> </a> \r\n            </ion-item> -->\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" type=\"number\">Precio $</ion-label>\r\n              <ion-input [(ngModel)]=\"precio\" type=\"number\" pattern=\"[0-9]*\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" type=\"number\">Descripción *</ion-label>\r\n            <ion-input [(ngModel)]=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n       <br>\r\n      <p style=\"float: right; padding: 5px;\"><strong>Precio Total: </strong> {{ resultadoM  | number:'0.1-1' }}</p>\r\n      <!-- <ion-item>\r\n        <ion-label position=\"floating\">Total</ion-label>\r\n        <ion-input [(ngModel)]=\"totalTotalesT\" formControlName=\"totalTotalesT\" disabled=\"true\"></ion-input>\r\n      </ion-item> -->\r\n  \r\n      <ion-button color=\"dark\" (click)=\"sumaTotalesTotales()\" class=\"float\">\r\n        <ion-icon name=\"calculator\"></ion-icon>Resultado\r\n      </ion-button>\r\n  \r\n      <ion-button color=\"dark\" (click)=\"guardarOperacion()\" class=\"float\">\r\n        <ion-icon name=\"save\"></ion-icon>Actualizar Operacion\r\n      </ion-button>\r\n    </div>    \r\n</ion-footer>");

/***/ }),

/***/ "./src/app/calculadora-historial/calculadora-historial-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/calculadora-historial/calculadora-historial-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CalculadoraHistorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPageRoutingModule", function() { return CalculadoraHistorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculadora-historial.page */ "./src/app/calculadora-historial/calculadora-historial.page.ts");




const routes = [
    {
        path: '',
        component: _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_3__["CalculadoraHistorialPage"]
    }
];
let CalculadoraHistorialPageRoutingModule = class CalculadoraHistorialPageRoutingModule {
};
CalculadoraHistorialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculadoraHistorialPageRoutingModule);



/***/ }),

/***/ "./src/app/calculadora-historial/calculadora-historial.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/calculadora-historial/calculadora-historial.module.ts ***!
  \***********************************************************************/
/*! exports provided: CalculadoraHistorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPageModule", function() { return CalculadoraHistorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calculadora_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculadora-historial-routing.module */ "./src/app/calculadora-historial/calculadora-historial-routing.module.ts");
/* harmony import */ var _calculadora_historial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculadora-historial.page */ "./src/app/calculadora-historial/calculadora-historial.page.ts");







let CalculadoraHistorialPageModule = class CalculadoraHistorialPageModule {
};
CalculadoraHistorialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _calculadora_historial_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculadoraHistorialPageRoutingModule"]
        ],
        declarations: [_calculadora_historial_page__WEBPACK_IMPORTED_MODULE_6__["CalculadoraHistorialPage"]]
    })
], CalculadoraHistorialPageModule);



/***/ }),

/***/ "./src/app/calculadora-historial/calculadora-historial.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/calculadora-historial/calculadora-historial.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: black;\n  font-size: 1.1rem;\n}\n\n.contenido {\n  padding: 10px;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEtaGlzdG9yaWFsL2NhbGN1bGFkb3JhLWhpc3RvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYWRvcmEtaGlzdG9yaWFsL2NhbGN1bGFkb3JhLWhpc3RvcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuICAuY29udGVuaWRve1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmRpdntcclxuICAgIG1hcmdpbjogICAgIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgICAvLyBoZWlnaHQ6IDQwJTtcclxuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfSBcclxuICAuY29se1xyXG4gICAgV29yZC13cmFwOiBicmVhay1Xb3JkO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/calculadora-historial/calculadora-historial.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/calculadora-historial/calculadora-historial.page.ts ***!
  \*********************************************************************/
/*! exports provided: CalculadoraHistorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraHistorialPage", function() { return CalculadoraHistorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let CalculadoraHistorialPage = class CalculadoraHistorialPage {
    constructor(auth, alertController, actionSheetController, _formBuilder, restangular, loadingCtrl, router, toastController) {
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
    ngOnInit() {
        this.getUser();
    }
    guardarOperacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Actualización',
                message: '¿Desea Actualizar este Item?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            let data = this._formBuilder.group({
                                id: [this.id],
                                celular: [this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                nombre_cliente: [this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                precio: [this.precio, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                total_suma: [this.resultadoM, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                suma_m2: [this.suma_m2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                                descripcion: [this.descripcion],
                                user_id: [this.user_id]
                            });
                            this.data1 = data.value;
                            let a = this.data1.id;
                            console.log(this.data1);
                            if (data.valid) {
                                this.auth.updateObjectById('actualizarCalculo/', a, this.data1).subscribe((datav) => {
                                    console.log(datav);
                                    // this.navCtrl.back();
                                    //this.modalController.dismiss();
                                    // this.closemodal(response.data);
                                    window.location.reload();
                                });
                            }
                            else {
                                this.presentToast("Ingrese Datos para Actualizar");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getCalculos(user_id) {
        this.auth.getAllObjectById('historialCalculos/', user_id)
            .subscribe((res) => {
            this.calculo$ = res;
            console.log(this.calculo$);
        });
    }
    sumaTotalesTotales() {
        this.resultadoM = this.suma_m2 * this.precio;
        // console.log(this.resultadoM+"=", +this.suma_m2 ,+ this.precio);
        return this.resultadoM;
    }
    deleteAll(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Eliminar este Elemento?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.auth.deleteObjectById('calculadoraHistorialDelete/', item.id).subscribe(res => {
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getCalculsHoja(user_id, hoja_id) {
        this.auth.getAllObjectByIdforCalculo('calculos/', user_id, hoja_id)
            .subscribe((res) => {
            this.calculo_hoja$ = res;
            console.log(this.calculo_hoja$);
        });
    }
    presentActionSheet(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones Historial Calculadora',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Eliminar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.confirmacion(element);
                        }
                    }, {
                        text: 'Editar',
                        icon: 'create',
                        handler: () => {
                            this.btnboolean();
                            let data = this._formBuilder.group({
                                id: [element.id],
                                celular: [element.celular],
                                nombre_cliente: [element.nombre_cliente],
                                precio: [element.precio],
                                total_suma: [element.total_suma],
                                suma_m2: [element.suma_m2],
                                descripcion: [element.descripcion],
                                user_id: [element.user_id]
                            });
                            this.id = element.id;
                            this.celular = element.celular;
                            this.nombre_cliente = element.nombre_cliente;
                            this.precio = element.precio;
                            this.total_suma = element.total_suma;
                            this.suma_m2 = element.suma_m2;
                            this.descripcion = element.descripcion;
                            this.user_id = element.user_id;
                            console.log(data.value);
                            this.getCalculsHoja(this.user_id, element.hoja_calculo_id);
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            actionSheet.dismiss();
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    btnboolean() {
        if (this.btnbool) {
            this.btnbool = false;
        }
        else {
            this.btnbool = true;
        }
    }
    cerrar() {
        if (this.btnbool) {
            this.btnbool = false;
        }
        else {
            this.btnbool = true;
        }
    }
    perfil() {
        this.router.navigate(['/perfil']);
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
    confirmacion(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Eliminar este Elemento?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.auth.deleteObjectById('calculadoraHistorialDelete/', element.id).subscribe(res => {
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            this.getCalculos(user_id);
            //console.log(this.usuarios$);
        });
    }
};
CalculadoraHistorialPage.ctorParameters = () => [
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CalculadoraHistorialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculadora-historial',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calculadora-historial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora-historial/calculadora-historial.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calculadora-historial.page.scss */ "./src/app/calculadora-historial/calculadora-historial.page.scss")).default]
    })
], CalculadoraHistorialPage);



/***/ })

}]);
//# sourceMappingURL=calculadora-historial-calculadora-historial-module-es2015.js.map
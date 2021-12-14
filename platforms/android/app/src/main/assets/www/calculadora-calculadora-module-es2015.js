(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculadora-calculadora-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calculadora</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid style=\"background: whitesmoke;\">\r\n    <form [formGroup]=\"dataForm\" (ngSubmit)=submitData()>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" style=\"color: black;\">Ancho</ion-label>\r\n            <ion-input [(ngModel)]=\"numero1\" formControlName=\"numero1\" value=\"numero1\" pattern=\"[0-9]*\"\r\n              onKeyPress=\"if(this.value.length==8) return false;\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" style=\"color: black;\">Alto</ion-label>\r\n            <ion-input [(ngModel)]=\"numero2\" formControlName=\"numero2\" type=\"number\" value=\"numero2\" pattern=\"[0-9]*\"\r\n              onKeyPress=\"if(this.value.length==8) return false;\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-item style=\"color: black;\">\r\n              <ion-label position=\"floating\" type=\"number\">Total</ion-label>\r\n              <ion-input [(ngModel)]=\"resultado\" formControlName=\"resultado\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_calculo_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"justify-content: center;\">\r\n        <ion-col offset-sm *ngIf=\"btnHoja == false\">\r\n          <ion-button color=\"dark\" (click)=\"calcular()\">\r\n            <ion-icon name=\"calculator-outline\"></ion-icon>Calcular\r\n          </ion-button>\r\n          <ion-button color=\"dark\" (click)=\"submitData()\">\r\n            <ion-icon name=\"save-outline\"></ion-icon>Guardar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n    <div *ngIf=\"btnHoja == true\">\r\n      <form [formGroup]=\"data_hoja\" (ngSubmit)=postHoja()>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-row style=\"display: block; text-align: center;\">\r\n          <ion-button color=\"dark\" (click)=\"postHoja()\">\r\n            <ion-icon name=\"clipboard-outline\"></ion-icon>\r\n            Crear Hoja de Calculo\r\n          </ion-button>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding>\r\n  <!-- <ion-button size=\"small\" color=\"dark\" (click)=\"deleteAllALL()\">ALL\r\n    <ion-icon name=\"trash-outline\"></ion-icon>\r\n  </ion-button> -->\r\n  <div style=\"padding: 10px;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: right !important;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Ancho</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Alto</strong> </ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>TOTAL M²</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"points\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: groove;\" *ngFor=\"let element of calculo$ \">\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 class=\"col\">\r\n        <ion-label>{{element.resultado}}</ion-label>\r\n      </ion-col>\r\n      <ion-button size=\"small\" color=\"dark\" (click)=\"deleteItem(element)\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n      <!-- <ion-col col-4>\r\n        <ion-label>{{element.created_at | date:'fullDate' }}</ion-label>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-6 style=\"margin-top: 16px;\">\r\n        <ion-button color=\"dark\" (click)=\"btnboolean()\">\r\n          <ion-icon name=\"document-text-outline\"></ion-icon>Formulario\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col col-6>\r\n        <p style=\"float: right; padding: 5px;padding-right: 11px;font-size: 1.3rem;\">\r\n          <strong>{{ total | number:'0.2-2' }} &nbsp;&nbsp;\r\n            M²</strong> </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <p style=\"float: right; padding: 5px;\">{{ total | currency:'':symbol: '1.0-2' }}</p> -->\r\n    <!-- <ion-button color=\"dark\" (click)=\"sumaTotales()\">\r\n      <ion-icon name=\"calculator-outline\"></ion-icon>Total M²\r\n    </ion-button> -->\r\n\r\n  </div>\r\n  <!-- <ion-button expand=\"block\" color=\"dark\" (click)=\"presentActionSheet()\">\r\n    <strong>Opciones</strong> </ion-button> -->\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"btnbool == false\" class=\"ion-no-border\">\r\n  <div class=\"div\">\r\n    <form [formGroup]=\"dataFormHistorial\" (ngSubmit)=guardarOperacion() novalidate>\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\" formControlName=\"nombre_cliente\" type=\"text\" minlength=\"2\"\r\n              maxlength=\"40\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Celular *</ion-label>\r\n            <ion-input [(ngModel)]=\"celular\" formControlName=\"celular\" type=\"tel\" maxlength=\"10\" pattern=\"[0-9]*\"\r\n              required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Precio. $us *</ion-label>\r\n            <ion-input [(ngModel)]=\"precio\" formControlName=\"precio\" type=\"number\" pattern=\"[0-9]*\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"resultadoM\" formControlName=\"total_suma\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"total\" formControlName=\"suma_m2\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_calculo_id\" disabled=\"true\" hidden=\"true\">\r\n          </ion-input>\r\n          <label style=\"float: right; padding: 5px;font-size: 1.2rem;color: black;\"><strong>Precio Total: </strong>\r\n            <strong>\r\n              {{ resultadoM | number:'0.1-1' }}</strong></label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripción *</ion-label>\r\n            <ion-input [(ngModel)]=\"descripcion\" formControlName=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row><br>\r\n      <!-- <ion-item>\r\n      <ion-label position=\"floating\">Total</ion-label>\r\n      <ion-input [(ngModel)]=\"totalTotalesT\" formControlName=\"totalTotalesT\" disabled=\"true\"></ion-input>\r\n    </ion-item> -->\r\n      <ion-button color=\"dark\" (click)=\"sumaTotalesTotales()\" class=\"float\">\r\n        <ion-icon name=\"calculator\"></ion-icon>Cotizar\r\n      </ion-button>\r\n\r\n      <ion-button color=\"dark\" (click)=\"postItem()\" class=\"float\">\r\n        <ion-icon name=\"save\"></ion-icon>Guardar Operación\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/calculadora/calculadora-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/calculadora/calculadora-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalculadoraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraPageRoutingModule", function() { return CalculadoraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculadora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculadora.page */ "./src/app/calculadora/calculadora.page.ts");




const routes = [
    {
        path: '',
        component: _calculadora_page__WEBPACK_IMPORTED_MODULE_3__["CalculadoraPage"]
    }
];
let CalculadoraPageRoutingModule = class CalculadoraPageRoutingModule {
};
CalculadoraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculadoraPageRoutingModule);



/***/ }),

/***/ "./src/app/calculadora/calculadora.module.ts":
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.module.ts ***!
  \***************************************************/
/*! exports provided: CalculadoraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraPageModule", function() { return CalculadoraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculadora-routing.module */ "./src/app/calculadora/calculadora-routing.module.ts");
/* harmony import */ var _calculadora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculadora.page */ "./src/app/calculadora/calculadora.page.ts");







let CalculadoraPageModule = class CalculadoraPageModule {
};
CalculadoraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculadoraPageRoutingModule"]
        ],
        declarations: [_calculadora_page__WEBPACK_IMPORTED_MODULE_6__["CalculadoraPage"]]
    })
], CalculadoraPageModule);



/***/ }),

/***/ "./src/app/calculadora/calculadora.page.scss":
/*!***************************************************!*\
  !*** ./src/app/calculadora/calculadora.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: transparent;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-label {\n  color: black;\n}\n\nion-input {\n  --background: transparent;\n}\n\np {\n  color: black !important;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\np {\n  font-family: Lato;\n}\n\n.box {\n  width: 500px;\n  margin: auto;\n  height: 700px;\n  background: #E3E4DB;\n}\n\n.box2 {\n  width: 500px;\n  margin: auto;\n  height: 100px;\n  background: #CDCDCD;\n  margin-top: 30px;\n}\n\n.fixed {\n  position: fixed;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.points {\n  color: black;\n  text-align: center;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEvY2FsY3VsYWRvcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtBQUdKOztBQUFFO0VBQ0UsdUJBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDRixxQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBT0YiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhZG9yYS9jYWxjdWxhZG9yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGlvbi1jb2x7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICB9XHJcbiAgcHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgfSAgXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG4uYm94e1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTNFNERCO1xyXG59XHJcblxyXG4uYm94MntcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0NEQ0RDRDtcclxuICBtYXJnaW4tdG9wOiAzMHB4OyBcclxufVxyXG5cclxuLmZpeGVke1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5wb2ludHN7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29se1xyXG4gIFdvcmQtd3JhcDogYnJlYWstV29yZDtcclxuICBtYXgtd2lkdGg6IDExMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/calculadora/calculadora.page.ts":
/*!*************************************************!*\
  !*** ./src/app/calculadora/calculadora.page.ts ***!
  \*************************************************/
/*! exports provided: CalculadoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraPage", function() { return CalculadoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










let CalculadoraPage = class CalculadoraPage {
    constructor(actionSheetController, router, menuCtrl, auth, loadingController, _formBuilder, alertController, restangular, decimalPipe, toastController) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.loadingController = loadingController;
        this._formBuilder = _formBuilder;
        this.alertController = alertController;
        this.restangular = restangular;
        this.decimalPipe = decimalPipe;
        this.toastController = toastController;
        this.data = '';
        this.hojas$ = [];
        this.resultado = 0;
        this.logs = [];
        this.usuarios$ = [];
        this.btnbool = false;
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
        this.dataForm = this.createForm();
        this.data_hoja = this.data_Hoja();
        this.dataFormHistorial = this.createFormHist();
        this.btnboolean();
        this.getUser();
    }
    getCalculs(user_id, hoja_id) {
        this.auth.getAllObjectByIdforCalculo('calculos/', user_id, hoja_id)
            .subscribe((res) => {
            this.calculo$ = res;
            console.log(this.calculo$);
            //Calculamos el TOTAL 
            this.total = this.calculo$.reduce((acc, obj) => acc + (obj.numero1 * obj.numero2), 0);
            console.log("Total: ", this.total);
        });
    }
    calcular() {
        let num1 = this.numero1;
        let num2 = this.numero2;
        if (num1 != 0 || num2 != 0) {
            this.resultado = num1 * num2;
            this.resultado = this.decimalPipe.transform(this.resultado, '0.2-2');
            console.log(this.resultado);
        }
        else {
            this.presentToast("Intenta agregando numeros, para sacar el total.");
        }
    }
    createForm() {
        return this._formBuilder.group({
            //id : [this.id],
            //nombre: [this.data.nombre,Validators.compose([Validators.required])],
            numero1: [this.numero1],
            numero2: [this.numero2],
            resultado: [this.resultado],
            total: [this.total],
            hoja_calculo_id: [this.hoja_calculo_id],
            user_id: [this.user_id],
        });
    }
    createFormHist() {
        return this._formBuilder.group({
            celular: [this.celular, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            nombre_cliente: [this.nombre_cliente, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            precio: [this.precio, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            total_suma: [this.total_suma, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            descripcion: [this.descripcion],
            suma_m2: [this.total],
            hoja_calculo_id: [this.hoja_calculo_id],
            user_id: [this.user_id]
        });
    }
    submitData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Guardar Este Calculo?',
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
                            let data = this.dataForm.value;
                            let data_resultado = data.resultado;
                            //console.log(data);
                            if (data_resultado != 0) {
                                this.restangular.all('guardarCalculadora').post(data).subscribe((datav) => {
                                    console.log(datav);
                                    this.presentLoading();
                                    window.location.reload();
                                    //this.presentAlert();
                                });
                            }
                            else {
                                this.presentToast("El resultado no puede ser 0");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
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
    sumaTotales() {
        //Calculamos el TOTAL 
        this.total = this.calculo$.reduce((acc, obj) => acc + obj.resultado, 0);
        console.log("Total: ", this.total);
    }
    sumaTotalesTotales() {
        this.resultadoM = this.total * this.precio;
        console.log(this.resultadoM);
        return this.resultadoM;
    }
    postItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Guardar este Calculo?',
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
                            this.statusHoja();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    guardarOperacion() {
        let data1 = this.dataFormHistorial.value;
        let a = data1.user_id;
        // let objecy = JSON.stringify(data1);
        console.log(data1);
        this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe((datav) => {
            this.presentLoading1();
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
            //console.log('Loading dismissed!');
        });
    }
    deleteItem(item) {
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
                            this.auth.deleteObjectById('calculadoraDelete/', item.id).subscribe(res => {
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Calculo',
                subHeader: 'Estado Historial Calculo',
                message: 'Se guardo el calculo',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    perfil() {
        this.router.navigate(['/perfil']);
    }
    deleteAllALL() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-confirm23',
                header: '¿Desea Eliminar este Elemento?',
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.auth.deleteAllObject('calculadoraDeleteAll/').subscribe(res => {
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
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
    deleteAll(user_id) {
        this.auth.deleteObjectById('calculadoraDeleteAll/', user_id).subscribe(res => {
            //window.location.reload();
            console.log(res);
            window.location.reload();
        });
    }
    data_Hoja() {
        let estado = "false";
        return this._formBuilder.group({
            estado: [estado],
            total: [this.total_suma],
            user_id: [this.user_id]
        });
    }
    postHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Crear Hoja de Calculo?',
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
                            let data = this.data_hoja.value;
                            console.log(data);
                            if (data) {
                                this.restangular.all('guardarHoja').post(data).subscribe((datav) => {
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
        this.auth.getCarrito('getHojaCalculo/', user_id)
            .subscribe((res) => {
            this.hojas$ = res;
            console.log(this.hojas$);
            let hoja_id = this.hojas$.id;
            this.getCalculs(user_id, hoja_id);
            //this.carrito$ = Object.values(this.carrito$);
            if (this.hojas$.estado == 'false') {
                this.btnHoja = false;
                //console.log("si hay algo");
            }
            else {
                //console.log("no lo hay");
                this.btnHoja = true;
            }
            //this.loadData();  
            return this.hojas$;
        });
    }
    presentLoading1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Guardando...',
                duration: 4000
            });
            yield loading.present();
            window.location.reload();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed!');
        });
    }
    statusHoja() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let estado = 'true';
            let data = this._formBuilder.group({
                //nombre: [this.data.nombre,Validators.compose([Validators.required])],
                total_suma: [this.total],
                estado: [estado],
            });
            let data1 = data.value;
            let a = this.hojas$.id;
            // console.log(data1);
            if (this.dataFormHistorial.valid) {
                this.auth.cerrarCarrito('updateStatusHoja/', a, data1).subscribe((datav) => {
                    this.guardarOperacion();
                });
            }
            else {
                this.presentToast("Ingresa los datos requeridos");
            }
        });
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            this.getCalculs(user_id, '');
            this.getHoja(user_id);
            //console.log(this.usuarios$);
        });
    }
};
CalculadoraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_6__["Restangular"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CalculadoraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculadora',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calculadora.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calculadora.page.scss */ "./src/app/calculadora/calculadora.page.scss")).default]
    })
], CalculadoraPage);



/***/ })

}]);
//# sourceMappingURL=calculadora-calculadora-module-es2015.js.map
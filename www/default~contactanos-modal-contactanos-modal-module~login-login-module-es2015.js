(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contactanos-modal-contactanos-modal-module~login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos-modal/contactanos-modal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos-modal/contactanos-modal.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cerrarModal();\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      \n    </ion-buttons>\n    <ion-title>Contactanos</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"atras();\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n      \n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"container\">\n    <ion-row>\n      <ion-col col-6>\n        <div class=\"img\">\n          <ion-img src=\"/assets/icon.png\" class=\"imagenLogo\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"text-align: center;\" class=\"col\">\n        <h3>!!! Se parte de Altoos ¡¡¡</h3>\n        <ion-col col-6 >\n          <p align=\"center\">Contacta al staff de Altools.es para empezar con información\n            de Productos e Importadoras de Aluminio en Bolivia </p>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n    \n    <div  style=\"padding:7px;\">\n      <p>Encuentranos en las siguientes ciudades:</p>\n      <ion-row>\n        <ion-col col-4 >\n          <p><strong>La Paz</strong></p>\n          <div *ngFor=\"let element of lpz$\">\n            <div *ngIf=\"element.ciudad == 'La-Paz'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-4>\n          <p><strong>Cochabamba</strong></p> \n          <div *ngFor=\"let element of cbba$\">\n            <div *ngIf=\"element.ciudad == 'Cochabamba'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-4>\n          <p><strong>Santa Cruz</strong></p> \n            <div *ngFor=\"let element of stz$\">\n              <div *ngIf=\"element.ciudad == 'Santa-Cruz'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p><strong>Oruro</strong></p>\n          \n            <div *ngFor=\"let element of oru$\">\n            <div *ngIf=\"element.ciudad == 'Oruro'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Sucre</strong></p> \n            <div *ngFor=\"let element of suc$\">\n              <div *ngIf=\"element.ciudad == 'Sucre'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Pando</strong></p> \n            <div *ngFor=\"let element of pando$\">\n              <div *ngIf=\"element.ciudad == 'Pando'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n              </div>\n          </div>\n        </ion-col><hr>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p><strong>Potosi</strong></p> \n          <div *ngFor=\"let element of pot$\">\n            <div *ngIf=\"element.ciudad == 'Potosi'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Tarija</strong></p> \n            <div *ngFor=\"let element of tar$\">\n              <div *ngIf=\"element.ciudad == 'Tarija'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Beni</strong></p> \n          <div *ngFor=\"let element of beni$\">\n            <div *ngIf=\"element.ciudad == 'Beni'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n          </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/contactanos-modal/contactanos-modal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/contactanos-modal/contactanos-modal.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: white !important;\n}\n\n.imagenLogo {\n  -webkit-padding-before: 15px;\n          padding-block-start: 15px;\n  width: 75%;\n  height: 75%;\n  display: block;\n  margin: auto;\n}\n\n.col {\n  padding: 25px;\n}\n\np, h3 {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGFub3MtbW9kYWwvY29udGFjdGFub3MtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLDRCQUFBO1VBQUEseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDRyxhQUFBO0FBR0g7O0FBREE7RUFDSSxZQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0YW5vcy1tb2RhbC9jb250YWN0YW5vcy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uaW1hZ2VuTG9nb3tcclxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29se1xyXG4gICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcbnAsaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contactanos-modal/contactanos-modal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/contactanos-modal/contactanos-modal.page.ts ***!
  \*************************************************************/
/*! exports provided: ContactanosModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactanosModalPage", function() { return ContactanosModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");





let ContactanosModalPage = class ContactanosModalPage {
    constructor(modalController, auth, router) {
        this.modalController = modalController;
        this.auth = auth;
        this.router = router;
        this.lpz$ = [];
        this.cbba$ = [];
        this.stz$ = [];
        this.oru$ = [];
        this.pot$ = [];
        this.suc$ = [];
        this.tar$ = [];
        this.beni$ = [];
        this.pando$ = [];
    }
    ngOnInit() {
        this.getCiudadaLPZ();
        this.getCiudadaCBBA();
        this.getCiudadaSTCZ();
        this.getCiudadaORU();
        this.getCiudadaPOT();
        this.getCiudadaSUC();
        this.getCiudadaTAR();
        this.getCiudadaBENI();
        this.getCiudadaPANDO();
    }
    getCiudadaLPZ() {
        this.auth.getAllObject('contactgetLPZ').subscribe((res) => {
            this.lpz$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaCBBA() {
        this.auth.getAllObject('contactgetCBBA').subscribe((res) => {
            this.cbba$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaSTCZ() {
        this.auth.getAllObject('contactgetSTCZ').subscribe((res) => {
            this.stz$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaORU() {
        this.auth.getAllObject('contactgetOR').subscribe((res) => {
            this.oru$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaPOT() {
        this.auth.getAllObject('contactgetPOT').subscribe((res) => {
            this.pot$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaSUC() {
        this.auth.getAllObject('contactgetSUC').subscribe((res) => {
            this.suc$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaTAR() {
        this.auth.getAllObject('contactgetTAR').subscribe((res) => {
            this.tar$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaBENI() {
        this.auth.getAllObject('contactgetBENI').subscribe((res) => {
            this.beni$ = res;
            //console.log(this.contactos$);       
        });
    }
    getCiudadaPANDO() {
        this.auth.getAllObject('contactgetPANDO').subscribe((res) => {
            this.pando$ = res;
            //console.log(this.contactos$);       
        });
    }
    cerrarModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    atras() {
        this.cerrarModal();
        this.router.navigateByUrl('/contactanos');
    }
};
ContactanosModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactanosModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactanos-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactanos-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos-modal/contactanos-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactanos-modal.page.scss */ "./src/app/contactanos-modal/contactanos-modal.page.scss")).default]
    })
], ContactanosModalPage);



/***/ })

}]);
//# sourceMappingURL=default~contactanos-modal-contactanos-modal-module~login-login-module-es2015.js.map
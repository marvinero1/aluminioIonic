(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~carrito-carrito-module~importadoras-importadoras-module~mis-productos-mis-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Mi Carrito</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dissmis();\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-content\"><br>\r\n    <ion-item-group>\r\n      <div class=\"sidebar\">\r\n        <ion-item>\r\n          <p style=\"margin-block-start: 0em; margin-block-end: 0em;\">\r\n            <strong>Productos Agregados a carrito</strong>\r\n          </p>\r\n        </ion-item>\r\n      </div>\r\n      <div>\r\n        <!-- <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Enviar Cotización</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" type=\"number\">Nombre Cotización</ion-label>\r\n                <ion-input [(ngModel)]=\"nombre_cotizacion\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-card-content>\r\n        </ion-card> -->\r\n       \r\n        <ion-item-sliding *ngFor=\"let element of pedidos$\">\r\n          <hr style=\"border: 0.5px solid black;\">\r\n          <ion-item lines=\"none\">\r\n            <ion-thumbnail slot=\"start\">\r\n              <img src=\"http://altools.es/{{ element.imagen }}\">\r\n              <!-- <img src=\"http://192.168.1.7:5000/{{ element.imagen }}\"> -->\r\n\r\n            </ion-thumbnail>\r\n            <ion-label text-wrap>\r\n              <p><strong>Codigo:</strong> {{element.codigo}}</p>\r\n              <p><strong>Nombre:</strong> {{element.nombre}}</p>\r\n              <p><strong>Precio:</strong> {{element.precio}}</p>\r\n              <p><strong>Cantidad Pedida</strong> {{element.cantidad_pedido}}</p>\r\n              <p><strong>Importadora:</strong> {{ element.importadora }}</p>\r\n            </ion-label>\r\n            \r\n            <ion-button (click)=\"presentAlertConfirm(element)\" color=\"danger\">\r\n              <ion-icon name=\"trash\" class=\"icongarbage\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-item-sliding>\r\n      </div>\r\n    </ion-item-group>\r\n    <br>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button (click)=\"sendOrder()\" color=\"dark\" expand=\"block\" fill=\"outline\">\r\n     <p><ion-icon name=\"cart-outline\"></ion-icon> Mandar Pedido</p> \r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/carrito/carrito.page.scss":
/*!*******************************************!*\
  !*** ./src/app/carrito/carrito.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\np, ion-card-title {\n  color: black;\n}\n.btn {\n  display: block;\n}\n.ion-content {\n  padding: 5px;\n}\n.sidebar {\n  position: --webkit-sticky;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  -webkit-padding-after: 16px;\n          padding-block-end: 16px;\n  grid-area: header;\n  background: white;\n  align-items: center;\n  justify-content: space-between;\n  grid-gap: 20px;\n  grid-template-areas: \"logo search buttons\";\n  z-index: 999;\n  width: 100%;\n}\n.danger {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ047QUFDSTtFQUNFLDZCQUFBO0FBQ047QUFFSTtFQUNFLDhCQUFBO0FBQU47QUFHRTtFQUNFLFlBQUE7QUFBSjtBQUVBO0VBQ0UsY0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUE7RUFDRSxxQkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbiAgICBcclxuICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzJkZDM2ZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIH1cclxuICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tcm93Omxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAsaW9uLWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBcclxufVxyXG4uaW9uLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiAtLXdlYmtpdC1zdGlja3k7ICAvLyByZXF1aXJlZCBmb3IgU2FmYXJpXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwOyAvLyByZXF1aXJlZCBhcyB3ZWxsLlxyXG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDE2cHg7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsb2dvIHNlYXJjaCBidXR0b25zXCI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGFuZ2Vye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/carrito/carrito.page.ts":
/*!*****************************************!*\
  !*** ./src/app/carrito/carrito.page.ts ***!
  \*****************************************/
/*! exports provided: CarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPage", function() { return CarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");







let CarritoPage = class CarritoPage {
    constructor(api, loadingController, alertController, _formBuilder, router, restangular, modalController, loadingCtrl, toastCtrl) {
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.restangular = restangular;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.pedidos$ = [];
        this.carrito$ = [];
        this.data1 = [];
        this.data = '';
        this.confirmacion = 'true';
        this.estado = 'true';
        this.logs = [];
        this.usuarios$ = [];
    }
    ngOnInit() {
        this.getUser();
    }
    getCarrito(user_id) {
        return this.api.getAllObjectById('getCartAttribute/', user_id)
            .subscribe((res) => {
            this.carrito$ = res;
            console.log(this.carrito$.id);
            this.getCarritoProductos(this.carrito$.id);
        });
    }
    getCarritoProductos(id_carrito) {
        return this.api.getAllObjectById('carritoProductosIonic/', id_carrito)
            .subscribe((res) => {
            this.pedidos$ = res;
        });
    }
    sendOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                // message: 'Registrando.',
                spinner: 'dots'
                // duration: 1500
            });
            loading.present().then(() => {
                let data = this._formBuilder.group({
                    //id : [this.id],
                    //nombre: [this.data.nombre,Validators.compose([Validators.required])],
                    estado: [this.estado]
                });
                try {
                    this.data1 = data.value;
                    let a = this.carrito$.id;
                    this.api.cerrarCarrito('updateStatusCart/', a, this.data1).subscribe((datav) => {
                        this.presentLoading('Carrito Guardado su cotizacion sera respondida pronto!');
                        loading.dismiss().then(() => {
                            console.log(datav);
                            // this.navCtrl.back();
                            //this.modalController.dismiss();
                            // this.closemodal(response.data);
                            window.location.reload();
                        });
                    }, () => {
                        loading.dismiss();
                    });
                }
                catch (error) {
                    console.log(error);
                }
            });
        });
    }
    loadingSave(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Desea Cotizar este Elemento?',
                message: '',
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            return false;
                            //console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Si',
                        handler: () => {
                            this.restangular.all('guardarPedidoRealizado').post(element).subscribe(res => {
                                //this.deleteObject(element);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: mensaje,
                duration: 4000,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed!');
        });
    }
    presentAlertConfirm(element) {
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
                            this.api.deleteObjectById('deleteProductoCarrito/', element.id).subscribe(res => {
                                console.log(res);
                                window.location.reload();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    perfil() {
        this.router.navigate(['/perfil']);
    }
    dissmis() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    presentToast(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: mensaje,
                duration: 1500
            });
            toast.present();
        });
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.api.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            let user_id = this.usuarios$.id;
            this.getCarrito(user_id);
            //console.log(this.usuarios$);
        });
    }
};
CarritoPage.ctorParameters = () => [
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_6__["Restangular"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CarritoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrito.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrito.page.scss */ "./src/app/carrito/carrito.page.scss")).default]
    })
], CarritoPage);



/***/ })

}]);
//# sourceMappingURL=default~carrito-carrito-module~importadoras-importadoras-module~mis-productos-mis-productos-module-es2015.js.map
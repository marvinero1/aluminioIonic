(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~importadoras-importadoras-module~mis-productos-mis-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-productos/mis-productos.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-productos/mis-productos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dissmis();\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>Prod. Importadora</ion-title>\n    <ion-buttons slot=\"end\" >\n      <ion-button (click)=\"cartDetails()\"><ion-icon name=\"cart\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" (ionChange)=\"buscar($event)\" placeholder=\"Buscar por Código\" animated></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"contenido\">\n    <ion-row style=\"border-bottom: groove;text-align: center;\">\n      <ion-col col-4>\n        <ion-label><strong>Cod.</strong></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Nombre</strong> </ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label><strong>Color</strong></ion-label>\n      </ion-col>\n      <!-- <ion-col col-4>\n        <ion-label><strong>Precio</strong></ion-label>\n      </ion-col> -->\n      <ion-col col-4>\n        <ion-label><strong><ion-icon name=\"ellipsis-vertical-outline\"></ion-icon></strong></ion-label>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row style=\"border-bottom: groove;\" *ngFor=\"let element of productos$ | filtro:textoBuscar:'codigo'\">\n      <ion-col col-4>\n        <ion-label>{{element.codigo}}</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label>{{element.nombre}}</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label> {{element.color}}</ion-label>\n      </ion-col>\n      <!-- <ion-col col-4>\n        <ion-label>{{element.precio}}</ion-label>\n      </ion-col> -->      \n      <ion-button size=\"small\" color=\"light\" (click)=\"presentActionSheet(element)\">\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button size=\"small\" color=\"danger\" (click)=\"deleteAll(element)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button> -->\n    </ion-row>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Cargando mas productos...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <app-pedidomodal></app-pedidomodal>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/mis-productos/mis-productos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mis-productos/mis-productos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p, ion-card-title {\n  color: black;\n}\n\nion-col, ion-row {\n  text-align: center;\n}\n\nion-label {\n  color: black;\n}\n\n.contenido {\n  padding: 10px;\n}\n\nion-searchbar {\n  background-color: aliceblue;\n}\n\nion-searchbar, input {\n  color: black;\n}\n\nicon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLXByb2R1Y3Rvcy9taXMtcHJvZHVjdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0FBR0o7O0FBREU7RUFDSSxhQUFBO0FBSU47O0FBRkU7RUFDRSwyQkFBQTtBQUtKOztBQUhBO0VBQ0EsWUFBQTtBQU1BOztBQUhBO0VBQ0UsWUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvbWlzLXByb2R1Y3Rvcy9taXMtcHJvZHVjdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAsIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuaW9uLWNvbCwgaW9uLXJvd3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuY29udGVuaWRve1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbmlvbi1zZWFyY2hiYXIsIGlucHV0e1xyXG5jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmljb257XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/mis-productos/mis-productos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mis-productos/mis-productos.page.ts ***!
  \*****************************************************/
/*! exports provided: MisProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisProductosPage", function() { return MisProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pedidomodal_pedidomodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pedidomodal/pedidomodal.page */ "./src/app/pedidomodal/pedidomodal.page.ts");
/* harmony import */ var _carrito_carrito_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carrito/carrito.page */ "./src/app/carrito/carrito.page.ts");








let MisProductosPage = class MisProductosPage {
    constructor(route, _formBuilder, api, actionSheetController, popoverController, modalController, router) {
        this.route = route;
        this._formBuilder = _formBuilder;
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.router = router;
        this.productos$ = [];
        this.textoBuscar = '';
        this.misProductos = {};
    }
    ngOnInit() {
        this.misProductos = this.data;
        this.dataForm = this.createForm();
        this.getmyProducts();
    }
    presentActionSheet(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Opciones Producto Importadora',
                cssClass: 'my-custom-class-pedido',
                buttons: [{
                        text: 'Ver',
                        role: 'show',
                        cssClass: 'my-custom-class-pedido',
                        icon: 'eye',
                        handler: () => {
                            console.log(element);
                            this.router.navigate(['/producto/' + element.id]);
                            this.modalController.dismiss({
                                'dismissed': true
                            });
                        }
                    }, {
                        text: 'Comprar',
                        icon: 'cart',
                        cssClass: 'my-custom-class-pedido',
                        role: 'buy',
                        handler: () => {
                            this.add_productCartShop(element);
                        }
                    },
                    // {
                    //   text: 'Editar',
                    //   icon: 'create',
                    //   handler: () => {
                    //    let data = this._formBuilder.group({
                    //       id : [element.id],
                    //       extra: [element.extra],
                    //       nombre_operacion : [element.nombre_operacion],
                    //       total_suma: [element.total_suma],
                    //       total_extra:[element.total_extra],
                    //       descripcion:[element.descripcion],
                    //       user_id:[element.user_id]
                    //     });
                    //     this.id = element.id;
                    //     this.nombre_operacion = element.nombre_operacion;
                    //     this.extra = element.extra;
                    //     this.descripcion = element.descripcion;
                    //     this.total_extra = element.total_extra;
                    //     this.total_suma = element.total_suma;
                    //   }
                    // },
                    {
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
            //console.log('onDidDismiss resolved with role', role);
        });
    }
    add_productCartShop(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pedidomodal_pedidomodal_page__WEBPACK_IMPORTED_MODULE_6__["PedidomodalPage"],
                cssClass: 'my-custom-class-pedidoModal',
                componentProps: {
                    data: { element: element },
                    'alto': element.alto,
                    'ancho': element.ancho,
                    'categorias_id': element.categorias_id,
                    'codigo': element.codigo,
                    'confirmacion': element.confirmacion,
                    'color': element.color,
                    'descripcion': element.descripcion,
                    'disponibilidad': element.disponibilidad,
                    'estado': element.estado,
                    'id': element.id,
                    'imagen': element.imagen,
                    'importadora': element.importadora,
                    'nombre': element.nombre,
                    'novedad': element.novedad,
                    'precio': element.precio,
                    'puntuacion': element.puntuacion,
                    'subcategorias_id': element.subcategorias_id,
                    'tipo_medida': element.tipo_medida,
                }
            });
            return yield modal.present();
        });
    }
    cartDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _carrito_carrito_page__WEBPACK_IMPORTED_MODULE_7__["CarritoPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (event.length == 20) {
                event.target.disabled = true;
            }
        }, 500);
    }
    createForm() {
        return this._formBuilder.group({
            id: [this.id],
            importadora: [this.importadora],
            user_id: [this.user_id],
        });
    }
    getmyProducts() {
        let data = this.dataForm.value;
        let a = data.id;
        console.log(data);
        this.api.getAllObjectById('getMyProducts/', a)
            .subscribe((res) => {
            this.productos$ = res;
        });
    }
    buscar(event) {
        this.textoBuscar = event.detail.value;
    }
    dissmis() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
MisProductosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MisProductosPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    user_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    importadora: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MisProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-productos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mis-productos/mis-productos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-productos.page.scss */ "./src/app/mis-productos/mis-productos.page.scss")).default]
    })
], MisProductosPage);



/***/ })

}]);
//# sourceMappingURL=default~importadoras-importadoras-module~mis-productos-mis-productos-module-es2015.js.map
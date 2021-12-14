(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProductoProductoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"body\">\r\n  <ion-card>\r\n    <ion-col col-4>\r\n      <ion-img src=\"http://altools.es/{{ productoId.imagen }}\" class=\"imagen\"></ion-img>\r\n    \r\n      <!-- <ion-img src=\"http://192.168.1.7:5000/{{ productoId.imagen }}\" class=\"imagen\"></ion-img> -->\r\n    </ion-col>\r\n\r\n    <ion-col col-8>\r\n      <ion-row class=\"ios hydrated\">\r\n        <ion-col class=\"ios hydrated\">\r\n          <ion-card-header>\r\n            <ion-card-title>{{ productoId.nombre }} </ion-card-title><br>\r\n            <ion-card-subtitle>{{ productoId.descripcion}}</ion-card-subtitle>\r\n          </ion-card-header>\r\n        </ion-col>\r\n        <ion-col offset-4=\"\" class=\"ios hydrated\">\r\n          <div *ngIf=\"novedad == true\">\r\n            <ion-icon name=\"star-sharp\" class=\"icon\"></ion-icon>\r\n          </div>\r\n          <div>\r\n            <ion-icon name=\"heart-sharp\" class=\"icon1\" (click)=\"presentModalFavorito(productoId)\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col col-4>\r\n            <h4><strong>Tipo Medida</strong></h4>\r\n            <p>{{ productoId.tipo_medida}}</p>\r\n          </ion-col>\r\n          <ion-col col-4>\r\n            <h4><strong>Ancho</strong></h4>\r\n            <p>{{ productoId.ancho}}</p>\r\n          </ion-col>\r\n          <ion-col col-4>\r\n            <h4><strong>Alto</strong></h4>\r\n            <p>{{ productoId.alto}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col col-6>\r\n            <h4><strong>Estado</strong></h4>\r\n            <p>{{ productoId.estado}}</p>\r\n          </ion-col>\r\n          <ion-col col-6>\r\n            <h4><strong>Precio</strong></h4>\r\n            <p>{{ productoId.precio}} Bs.</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col col-6>\r\n            <h4><strong>Color</strong></h4>\r\n            <p>{{ productoId.color}}</p>\r\n          </ion-col>\r\n          <ion-col col-6>\r\n            <h4><strong>Codigo</strong></h4>\r\n            <p>{{ productoId.codigo}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col col-6>\r\n            <h4><strong>Disponible</strong></h4>\r\n            <p>{{ productoId.disponibilidad}}</p>\r\n          </ion-col>\r\n          <ion-col col-6>\r\n            <h4><strong>Codigo</strong></h4>\r\n            <p>{{ productoId.codigo}}</p>\r\n          </ion-col>\r\n        </ion-row><br>\r\n        <hr><br>\r\n   \r\n        <!-- <ion-row>\r\n          <h5 class=\"h5s\">Cantidad a pedir</h5> \r\n        </ion-row> -->\r\n\r\n        <!-- <ion-row >\r\n          <div class=\"wrapper\">\r\n            <ion-button color=\"dark\" class=\"plusminus\" (click)=\"handleMinus()\">-</ion-button>\r\n            <input type=\"number\" class=\"num\" value=\"0\" [(ngModel)]=\"value\" />\r\n            <ion-button color=\"dark\" class=\"plusminus\" (click)=\"handlePlus()\">+</ion-button>\r\n          </div>\r\n        </ion-row><br> -->\r\n        <!-- <ion-row>\r\n          <p><Strong>* Nota:</Strong>&nbsp; Se mandarán la solicitud de pedido y \r\n            el proveedor(importadora) se comunicara con usted.</p>\r\n        </ion-row><br> -->\r\n\r\n        <ion-row style=\"float: left;\">\r\n          <ion-button color=\"dark\" (click)=\"back()\">\r\n            <ion-icon slot=\"start\" name=\"arrow-back-sharp\">\r\n            </ion-icon>Atras\r\n          </ion-button>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row style=\"float: right;\">\r\n          <ion-button color=\"dark\" (click)=\"presentModal(productoId)\">\r\n            <ion-icon slot=\"start\" name=\"cart-sharp\">\r\n            </ion-icon>Agregar a Carrito\r\n          </ion-button>\r\n        </ion-row><br> -->\r\n        <!-- <a href=\"{{ route('instructor.show',$instructoritem->id ) }}\">\r\n          <ion-button class=\"btn btn-sm\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Ver</ion-button>\r\n        </a> -->\r\n      </ion-card-content>\r\n    </ion-col>\r\n  \r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/producto/producto-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/producto/producto-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProductoPageRoutingModule */

    /***/
    function srcAppProductoProductoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function () {
        return ProductoPageRoutingModule;
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


      var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./producto.page */
      "./src/app/producto/producto.page.ts");

      var routes = [{
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_3__["ProductoPage"]
      }];

      var ProductoPageRoutingModule = function ProductoPageRoutingModule() {
        _classCallCheck(this, ProductoPageRoutingModule);
      };

      ProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/producto/producto.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/producto/producto.module.ts ***!
      \*********************************************/

    /*! exports provided: ProductoPageModule */

    /***/
    function srcAppProductoProductoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function () {
        return ProductoPageModule;
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


      var _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./producto-routing.module */
      "./src/app/producto/producto-routing.module.ts");
      /* harmony import */


      var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./producto.page */
      "./src/app/producto/producto.page.ts");

      var ProductoPageModule = function ProductoPageModule() {
        _classCallCheck(this, ProductoPageModule);
      };

      ProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoPageRoutingModule"]],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
      })], ProductoPageModule);
      /***/
    },

    /***/
    "./src/app/producto/producto.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/producto/producto.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppProductoProductoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h4 {\n  color: black;\n}\n\n.icon {\n  font-size: 38px;\n  float: right;\n  padding: 16px;\n  color: sandybrown;\n}\n\n.icon1 {\n  font-size: 38px;\n  float: right;\n  padding: 16px;\n  color: #cb3234;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.modal-wrapper {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n\ninput {\n  text-align: center;\n  border: 1px solid #6C757D;\n}\n\ninput[type=number] {\n  -webkit-appearance: textfield !important;\n  -moz-appearance: textfield !important;\n  appearance: textfield !important;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.wrapper {\n  border: 2px #dcd3d3 solid;\n  width: 38vw;\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  border-radius: 15px;\n}\n\n.plusminus {\n  height: 100%;\n  width: 30%;\n  background: white;\n  border: none;\n  font-size: 20px;\n  color: #5f5fce;\n}\n\n.num {\n  height: 100%;\n  width: 39%;\n  border: none;\n  font-size: 30px;\n}\n\nhr {\n  border-top: 1px solid gray;\n}\n\n.h5s {\n  padding-left: 20px;\n  margin-bottom: 6px;\n}\n\nion-card {\n  background-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vcHJvZHVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNELGNBQUE7QUFFRDs7QUFBQSx3Q0FBQTs7QUFDQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUEsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUdGOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNFO0VBQ0Usd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQ0U7O0VBRUksd0JBQUE7QUFFTjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSwwQkFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsNEJBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGNvbG9yOiBzYW5keWJyb3duO1xyXG4gICAgXHJcbn1cclxuLmljb24xe1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuIGNvbG9yOiAjY2IzMjM0OyBcclxufVxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxuLy9CVVRUT05cclxuaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNkM3NTdEO1xyXG4gIH0gXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAycHggI2RjZDNkMyBzb2xpZDtcclxuICAgIHdpZHRoOiAzOHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucGx1c21pbnVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNWY1ZmNlO1xyXG4gIH1cclxuICBcclxuICAubnVtIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzOSU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIGhye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgfVxyXG4gIC5oNXN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSA7XHJcbiAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/producto/producto.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/producto/producto.page.ts ***!
      \*******************************************/

    /*! exports provided: ProductoPage */

    /***/
    function srcAppProductoProductoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoPage", function () {
        return ProductoPage;
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


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _modalfavoritos_modalfavoritos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modalfavoritos/modalfavoritos.page */
      "./src/app/modalfavoritos/modalfavoritos.page.ts");

      var ProductoPage = /*#__PURE__*/function () {
        function ProductoPage(api, route, router, modalController, alertController, _formBuilder, loadingController, auth) {
          _classCallCheck(this, ProductoPage);

          this.api = api;
          this.route = route;
          this.router = router;
          this.modalController = modalController;
          this.alertController = alertController;
          this._formBuilder = _formBuilder;
          this.loadingController = loadingController;
          this.auth = auth;
          this.productoId = [];
          this.data = '';
          this.name = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].major;
          this.value = 0;
        }

        _createClass(ProductoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProductById();
            this.dataForm = this.createForm();
          }
        }, {
          key: "getProductById",
          value: function getProductById() {
            var _this = this;

            var routeParamId = this.route.snapshot.paramMap.get('id');

            if (routeParamId) {
              var id = parseInt(this.route.snapshot.paramMap.get('id'));
              var a = this.api.getAllObjectById('productos/', id).subscribe(function (res) {
                _this.productoId = res;
                console.log(_this.productoId);
                _this.novedad = _this.productoId.novedad;
              });
            }
          }
        }, {
          key: "handleMinus",
          value: function handleMinus() {
            this.value--;
          }
        }, {
          key: "handlePlus",
          value: function handlePlus() {
            this.value++;
          }
        }, {
          key: "createForm",
          value: function createForm() {
            return this._formBuilder.group({
              //id : [this.id],
              //nombre: [this.data.nombre,Validators.compose([Validators.required])],
              id: [this.data.id],
              nombre: [this.data.nombre],
              alto: [this.data.alto]
            });
          }
        }, {
          key: "submitData",
          value: function submitData() {
            var data = this.dataForm.value;
            console.log(data); // this.auth.postCalculadora('guardarCalculadora/', data).subscribe((datav)=>{ 
            //     console.log(datav);
            //     this.presentLoading();
            //     //this.presentAlert();
            // });
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/productos']);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(productoFavorito) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Agregar este Elemento a Favoritos?',
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
                            _this2.submitData(); // this.api.postFavorito('guardarFavorito/', productoFavorito).subscribe(res=>{
                            //   console.log(res);
                            //   this.return();
                            // });

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
          key: "presentModalFavorito",
          value: function presentModalFavorito(element) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modalfavoritos_modalfavoritos_page__WEBPACK_IMPORTED_MODULE_6__["ModalfavoritosPage"],
                        cssClass: 'my-custom-class-modal-favorito',
                        componentProps: {
                          data: {
                            element: element
                          },
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
                          'tipo_medida': element.tipo_medida
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "return",
          value: function _return() {
            this.router.navigate(['/favoritos']);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: 'loading',
                        message: 'Guardando...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ProductoPage;
      }();

      ProductoPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]
        }];
      };

      ProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./producto.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./producto.page.scss */
        "./src/app/producto/producto.page.scss"))["default"]]
      })], ProductoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=producto-producto-module-es5.js.map
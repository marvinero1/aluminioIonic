(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactanos-contactanos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos/contactanos.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos/contactanos.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppContactanosContactanosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"atras();\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      \n    </ion-buttons>\n    <ion-title>Contactanos</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"atras();\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n      \n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"container\">\n    <ion-row>\n      <ion-col col-6>\n        <div class=\"img\">\n          <ion-img src=\"/assets/icon.png\" class=\"imagenLogo\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"text-align: center;\" class=\"col\">\n        <h3>!!! Se parte de Altoos ¡¡¡</h3>\n        <ion-col col-6 >\n          <p align=\"center\">Contacta al staff de Altools.es para empezar con información\n            de Productos e Importadoras de Aluminio en Bolivia </p>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n    \n    <div  style=\"padding:7px;\">\n      <p>Encuentranos en las siguientes ciudades:</p>\n      <ion-row>\n        <ion-col col-4 >\n          <p><strong>La Paz</strong></p>\n          <div *ngFor=\"let element of lpz$\">\n            <div *ngIf=\"element.ciudad == 'La-Paz'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-4>\n          <p><strong>Cochabamba</strong></p> \n          <div *ngFor=\"let element of cbba$\">\n            <div *ngIf=\"element.ciudad == 'Cochabamba'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-4>\n          <p><strong>Santa Cruz</strong></p> \n            <div *ngFor=\"let element of stz$\">\n              <div *ngIf=\"element.ciudad == 'Santa-Cruz'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p><strong>Oruro</strong></p>\n          \n            <div *ngFor=\"let element of oru$\">\n            <div *ngIf=\"element.ciudad == 'Oruro'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Sucre</strong></p> \n            <div *ngFor=\"let element of suc$\">\n              <div *ngIf=\"element.ciudad == 'Sucre'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Pando</strong></p> \n            <div *ngFor=\"let element of pando$\">\n              <div *ngIf=\"element.ciudad == 'Pando'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n              </div>\n          </div>\n        </ion-col><hr>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p><strong>Potosi</strong></p> \n          <div *ngFor=\"let element of pot$\">\n            <div *ngIf=\"element.ciudad == 'Potosi'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Tarija</strong></p> \n            <div *ngFor=\"let element of tar$\">\n              <div *ngIf=\"element.ciudad == 'Tarija'\">\n                <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n                <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n                <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n                <hr size=\"8px\" color=\"black\"/>\n            </div>\n          </div>\n        </ion-col><hr>\n        <ion-col col-6>\n          <p><strong>Beni</strong></p> \n          <div *ngFor=\"let element of beni$\">\n            <div *ngIf=\"element.ciudad == 'Beni'\">\n              <p style=\"color: black;\"><ion-icon name=\"accessibility-outline\" style=\"color: black;\"></ion-icon> {{ element.nombre}}</p>\n              <a href=\"tel:{{element.telefono}}\"><p style=\"color: steelblue;\"><ion-icon name=\"call-outline\" style=\"color: black;\"></ion-icon> {{ element.telefono}}</p></a>\n              <!-- <p style=\"color: black;\"><ion-icon name=\"logo-whatsapp\" style=\"color: black;\"></ion-icon > {{ element.whatsapp}}</p> -->\n              <hr size=\"8px\" color=\"black\"/>\n          </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/contactanos/contactanos-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/contactanos/contactanos-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContactanosPageRoutingModule */

    /***/
    function srcAppContactanosContactanosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactanosPageRoutingModule", function () {
        return ContactanosPageRoutingModule;
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


      var _contactanos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contactanos.page */
      "./src/app/contactanos/contactanos.page.ts");

      var routes = [{
        path: '',
        component: _contactanos_page__WEBPACK_IMPORTED_MODULE_3__["ContactanosPage"]
      }];

      var ContactanosPageRoutingModule = function ContactanosPageRoutingModule() {
        _classCallCheck(this, ContactanosPageRoutingModule);
      };

      ContactanosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactanosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/contactanos/contactanos.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/contactanos/contactanos.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactanosPageModule */

    /***/
    function srcAppContactanosContactanosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactanosPageModule", function () {
        return ContactanosPageModule;
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


      var _contactanos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contactanos-routing.module */
      "./src/app/contactanos/contactanos-routing.module.ts");
      /* harmony import */


      var _contactanos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contactanos.page */
      "./src/app/contactanos/contactanos.page.ts");

      var ContactanosPageModule = function ContactanosPageModule() {
        _classCallCheck(this, ContactanosPageModule);
      };

      ContactanosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactanos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactanosPageRoutingModule"]],
        declarations: [_contactanos_page__WEBPACK_IMPORTED_MODULE_6__["ContactanosPage"]]
      })], ContactanosPageModule);
      /***/
    },

    /***/
    "./src/app/contactanos/contactanos.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/contactanos/contactanos.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppContactanosContactanosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: white !important;\n}\n\n.imagenLogo {\n  -webkit-padding-before: 15px;\n          padding-block-start: 15px;\n  width: 75%;\n  height: 75%;\n  display: block;\n  margin: auto;\n}\n\n.col {\n  padding: 25px;\n}\n\np, h3 {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGFub3MvY29udGFjdGFub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLDRCQUFBO1VBQUEseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDRyxhQUFBO0FBR0g7O0FBREE7RUFDSSxZQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0YW5vcy9jb250YWN0YW5vcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uaW1hZ2VuTG9nb3tcclxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29se1xyXG4gICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcbnAsaDN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/contactanos/contactanos.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/contactanos/contactanos.page.ts ***!
      \*************************************************/

    /*! exports provided: ContactanosPage */

    /***/
    function srcAppContactanosContactanosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactanosPage", function () {
        return ContactanosPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");

      var ContactanosPage = /*#__PURE__*/function () {
        function ContactanosPage(modalController, auth, router, navCtrl) {
          _classCallCheck(this, ContactanosPage);

          this.modalController = modalController;
          this.auth = auth;
          this.router = router;
          this.navCtrl = navCtrl;
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

        _createClass(ContactanosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "getCiudadaLPZ",
          value: function getCiudadaLPZ() {
            var _this = this;

            this.auth.getAllObject('contactgetLPZ').subscribe(function (res) {
              _this.lpz$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaCBBA",
          value: function getCiudadaCBBA() {
            var _this2 = this;

            this.auth.getAllObject('contactgetCBBA').subscribe(function (res) {
              _this2.cbba$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaSTCZ",
          value: function getCiudadaSTCZ() {
            var _this3 = this;

            this.auth.getAllObject('contactgetSTCZ').subscribe(function (res) {
              _this3.stz$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaORU",
          value: function getCiudadaORU() {
            var _this4 = this;

            this.auth.getAllObject('contactgetOR').subscribe(function (res) {
              _this4.oru$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaPOT",
          value: function getCiudadaPOT() {
            var _this5 = this;

            this.auth.getAllObject('contactgetPOT').subscribe(function (res) {
              _this5.pot$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaSUC",
          value: function getCiudadaSUC() {
            var _this6 = this;

            this.auth.getAllObject('contactgetSUC').subscribe(function (res) {
              _this6.suc$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaTAR",
          value: function getCiudadaTAR() {
            var _this7 = this;

            this.auth.getAllObject('contactgetTAR').subscribe(function (res) {
              _this7.tar$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaBENI",
          value: function getCiudadaBENI() {
            var _this8 = this;

            this.auth.getAllObject('contactgetBENI').subscribe(function (res) {
              _this8.beni$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "getCiudadaPANDO",
          value: function getCiudadaPANDO() {
            var _this9 = this;

            this.auth.getAllObject('contactgetPANDO').subscribe(function (res) {
              _this9.pando$ = res; //console.log(this.contactos$);       
            });
          }
        }, {
          key: "cerrarModal",
          value: function cerrarModal() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "atras",
          value: function atras() {
            this.cerrarModal();
            this.navCtrl.back();
          }
        }]);

        return ContactanosPage;
      }();

      ContactanosPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      ContactanosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactanos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contactanos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/contactanos/contactanos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contactanos.page.scss */
        "./src/app/contactanos/contactanos.page.scss"))["default"]]
      })], ContactanosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contactanos-contactanos-module-es5.js.map
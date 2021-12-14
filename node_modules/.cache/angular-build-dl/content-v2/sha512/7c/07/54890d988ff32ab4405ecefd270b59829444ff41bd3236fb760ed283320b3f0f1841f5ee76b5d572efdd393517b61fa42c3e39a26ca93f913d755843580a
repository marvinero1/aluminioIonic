(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProductosProductosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ titulo }}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-searchbar mode=\"ios\" (ionChange)=\"buscar($event)\" placeholder=\"Buscar por Nombre\" animated></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"body\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-card class=\"card\" *ngFor=\"let element of productos$ | filtro:textoBuscar:'nombre'\">\r\n    \r\n    <ion-col col-4>\r\n      <ion-card-subtitle style=\"padding: 4px;\"><strong>Codigo:</strong>  {{ element.codigo}}</ion-card-subtitle>\r\n\r\n      <!-- <ion-img src=\"http://192.168.1.7:5000/{{ element.imagen }}\" class=\"imagen\"></ion-img> -->\r\n      <ion-img src=\"http://altools.es/{{ element.imagen }}\" class=\"imagen\"></ion-img>\r\n    </ion-col>\r\n\r\n    <div style=\"padding-left: 24px;\">\r\n      <ion-card-title>{{ element.nombre}}</ion-card-title><br>\r\n      <ion-card-subtitle>{{ element.descripcion}}</ion-card-subtitle>\r\n    </div>    \r\n\r\n    <ion-card-content class=\"card\"> \r\n      <div class=\"card\">\r\n        <ion-row class=\"card\">\r\n        <ion-col col-6>\r\n          <h3><strong>Color</strong></h3>\r\n          <p>{{ element.color}}</p>\r\n        </ion-col>\r\n        <ion-col col-6>\r\n          <h3><strong>Precio</strong></h3>\r\n          <p>{{ element.precio}} Bs.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"card\">\r\n        <ion-col col-6>\r\n          <h3><strong>Importadora</strong></h3>\r\n          <p>{{ element.importadora}}</p>\r\n        </ion-col>\r\n        <!-- <ion-col col-6>\r\n          <h3><strong>Precio</strong></h3>\r\n          <p>{{ element.precio}} Bs.</p>\r\n        </ion-col> -->\r\n      </ion-row>\r\n\r\n      <ion-button color=\"dark\" (click)=\"onSelect(element)\">\r\n        <ion-icon slot=\"start\" name=\"eye\">\r\n        </ion-icon>Ver\r\n      </ion-button>\r\n      <!-- <a href=\"{{ route('instructor.show',$instructoritem->id ) }}\">\r\n          <button class=\"btn btn-sm\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Ver</button>\r\n        </a> --> \r\n      </div>\r\n      \r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/productos/productos-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/productos/productos-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ProductosPageRoutingModule */

    /***/
    function srcAppProductosProductosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductosPageRoutingModule", function () {
        return ProductosPageRoutingModule;
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


      var _productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./productos.page */
      "./src/app/productos/productos.page.ts");

      var routes = [{
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosPage"]
      }];

      var ProductosPageRoutingModule = function ProductosPageRoutingModule() {
        _classCallCheck(this, ProductosPageRoutingModule);
      };

      ProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/productos/productos.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/productos/productos.module.ts ***!
      \***********************************************/

    /*! exports provided: ProductosPageModule */

    /***/
    function srcAppProductosProductosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function () {
        return ProductosPageModule;
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


      var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./productos-routing.module */
      "./src/app/productos/productos-routing.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _productos_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./productos.page */
      "./src/app/productos/productos.page.ts");

      var ProductosPageModule = function ProductosPageModule() {
        _classCallCheck(this, ProductosPageModule);
      };

      ProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosPageRoutingModule"]],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_7__["ProductosPage"]]
      })], ProductosPageModule);
      /***/
    },

    /***/
    "./src/app/productos/productos.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/productos/productos.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppProductosProductosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imagen {\n  width: 35% !important;\n  -webkit-padding-before: 20px;\n          padding-block-start: 20px;\n  display: block;\n  margin: auto;\n}\n\nion-searchbar {\n  background-color: aliceblue;\n}\n\n.card {\n  background-color: white !important;\n}\n\n.sc-ion-searchbar-ios-h {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLDRCQUFBO1VBQUEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/productos/productos.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/productos/productos.page.ts ***!
      \*********************************************/

    /*! exports provided: ProductosPage */

    /***/
    function srcAppProductosProductosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductosPage", function () {
        return ProductosPage;
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


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProductosPage = /*#__PURE__*/function () {
        function ProductosPage(api, router, menuCtrl) {
          _classCallCheck(this, ProductosPage);

          this.api = api;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.titulo = "Productos";
          this.productos$ = [];
          this.textoBuscar = '';
        }

        _createClass(ProductosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(true);
            this.getProducts();
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            var _this = this;

            this.api.getAllObject('productos').subscribe(function (res) {
              _this.productos$ = res;
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(element) {
            this.router.navigate(['/producto', element.id]);
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            this.textoBuscar = event.detail.value;
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            setTimeout(function () {
              console.log('Actualizando Productos...');

              _this2.getProducts();

              event.target.complete();
            }, 2000);
          }
        }]);

        return ProductosPage;
      }();

      ProductosPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      ProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./productos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./productos.page.scss */
        "./src/app/productos/productos.page.scss"))["default"]]
      })], ProductosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=productos-productos-module-es5.js.map
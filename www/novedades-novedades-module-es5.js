(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novedades-novedades-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/novedades/novedades.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/novedades/novedades.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNovedadesNovedadesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button><ion-icon name=\"menu-outline\"></ion-icon></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Novedades</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n  <div class=\"ion-content\" padding><br>\r\n    <ion-item-group>\r\n      <ion-item>\r\n        <p style=\"margin-block-start: 0em; margin-block-end: 0em;\"\r\n        ><strong>Productos en Novedad</strong>\r\n        </p>\r\n      </ion-item>\r\n      <ion-item-sliding *ngFor=\"let element of novedades$\">\r\n        <ion-item lines=\"none\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <!-- <img src=\"http://192.168.1.7:5000/{{ element.imagen}}\" > -->\r\n            <img src=\"http://altools.es/{{ element.imagen}}\" >\r\n          </ion-thumbnail>\r\n          <ion-label text-wrap>\r\n            <p><strong>{{ element.nombre}} </strong></p>\r\n            <p>{{ element.importadora }}</p>\r\n          </ion-label>\r\n          <ion-icon name=\"star\" class=\"star\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"success\" (click)=\"ver(element)\">\r\n            <ion-icon class=\"icongarbage\" slot=\"icon-only\" name=\"eye\">\r\n            </ion-icon>Ver\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-item-group><br>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/novedades/novedades-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/novedades/novedades-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: NovedadesPageRoutingModule */

    /***/
    function srcAppNovedadesNovedadesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NovedadesPageRoutingModule", function () {
        return NovedadesPageRoutingModule;
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


      var _novedades_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./novedades.page */
      "./src/app/novedades/novedades.page.ts");

      var routes = [{
        path: '',
        component: _novedades_page__WEBPACK_IMPORTED_MODULE_3__["NovedadesPage"]
      }];

      var NovedadesPageRoutingModule = function NovedadesPageRoutingModule() {
        _classCallCheck(this, NovedadesPageRoutingModule);
      };

      NovedadesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NovedadesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/novedades/novedades.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/novedades/novedades.module.ts ***!
      \***********************************************/

    /*! exports provided: NovedadesPageModule */

    /***/
    function srcAppNovedadesNovedadesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NovedadesPageModule", function () {
        return NovedadesPageModule;
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


      var _novedades_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./novedades-routing.module */
      "./src/app/novedades/novedades-routing.module.ts");
      /* harmony import */


      var _novedades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./novedades.page */
      "./src/app/novedades/novedades.page.ts");

      var NovedadesPageModule = function NovedadesPageModule() {
        _classCallCheck(this, NovedadesPageModule);
      };

      NovedadesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _novedades_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovedadesPageRoutingModule"]],
        declarations: [_novedades_page__WEBPACK_IMPORTED_MODULE_6__["NovedadesPage"]]
      })], NovedadesPageModule);
      /***/
    },

    /***/
    "./src/app/novedades/novedades.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/novedades/novedades.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppNovedadesNovedadesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  color: black;\n}\n\n.star {\n  color: sandybrown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92ZWRhZGVzL25vdmVkYWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbm92ZWRhZGVzL25vdmVkYWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zdGFye1xyXG4gICAgY29sb3I6IHNhbmR5YnJvd247ICBcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/novedades/novedades.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/novedades/novedades.page.ts ***!
      \*********************************************/

    /*! exports provided: NovedadesPage */

    /***/
    function srcAppNovedadesNovedadesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NovedadesPage", function () {
        return NovedadesPage;
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

      var NovedadesPage = /*#__PURE__*/function () {
        function NovedadesPage(api, router) {
          _classCallCheck(this, NovedadesPage);

          this.api = api;
          this.router = router;
          this.novedades$ = [];
        }

        _createClass(NovedadesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProductoNovedad();
          }
        }, {
          key: "getProductoNovedad",
          value: function getProductoNovedad() {
            var _this = this;

            this.api.getAllObject('productosNovedad').subscribe(function (res) {
              _this.novedades$ = res;
            });
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "ver",
          value: function ver(element) {
            this.router.navigate(['/producto', element.id]);
          }
        }]);

        return NovedadesPage;
      }();

      NovedadesPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NovedadesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-novedades',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./novedades.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/novedades/novedades.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./novedades.page.scss */
        "./src/app/novedades/novedades.page.scss"))["default"]]
      })], NovedadesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=novedades-novedades-module-es5.js.map
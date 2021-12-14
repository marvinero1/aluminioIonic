(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Mi Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n  <ion-row align-items-center style=\"text-align: center\">\r\n    <img src=\"http://192.168.1.7:5000/{{ usuarios$.imagen }}\" class=\"ima\">\r\n    <!-- <img src=\"http://altools.es/{{ usuarios$.imagen }}\" class=\"ima\"> -->\r\n\r\n    <ion-col size=\"10\" style=\"margin: 0 auto;\" align-self: center>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Nombre:</strong> {{ usuarios$.name }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Telefono:</strong> {{ usuarios$.telefono }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Whatsapp:</strong> {{ usuarios$.whatsapp }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Pais:</strong> {{ usuarios$.pais }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Ciudad: </strong> {{ usuarios$.ciudad }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Email:</strong> {{ usuarios$.email }} </ion-label>\r\n      </ion-item><br>\r\n      <ion-item>\r\n        <ion-label>\r\n          <strong>Rol:</strong> {{ usuarios$.role }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <ion-row>\r\n        <ion-col>\r\n          <!-- <ion-button (click)=\"changeImagenUser()\">\r\n            <ion-icon slot=\"start\" name=\"image\" ></ion-icon>\r\n            Cambiar Imagen\r\n          </ion-button> -->\r\n\r\n          <ion-button (click)=\"changePasswordUser()\">\r\n            <ion-icon slot=\"start\" name=\"key\" ></ion-icon>\r\n            Cambiar Contraseña\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/perfil/perfil-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/perfil/perfil-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PerfilPageRoutingModule */

    /***/
    function srcAppPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
        return PerfilPageRoutingModule;
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


      var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/perfil/perfil.page.ts");

      var routes = [{
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
      }];

      var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
        _classCallCheck(this, PerfilPageRoutingModule);
      };

      PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/perfil/perfil.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/perfil/perfil.module.ts ***!
      \*****************************************/

    /*! exports provided: PerfilPageModule */

    /***/
    function srcAppPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
        return PerfilPageModule;
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


      var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-routing.module */
      "./src/app/perfil/perfil-routing.module.ts");
      /* harmony import */


      var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/perfil/perfil.page.ts");

      var PerfilPageModule = function PerfilPageModule() {
        _classCallCheck(this, PerfilPageModule);
      };

      PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
      })], PerfilPageModule);
      /***/
    },

    /***/
    "./src/app/perfil/perfil.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/perfil/perfil.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background:white;\n}\n\n.btnInfo {\n  --background: #157424;\n  margin: 0 auto;\n  position: relative;\n  outline: none;\n  width: 75%;\n}\n\n.btnInfo1 {\n  --background:white;\n  color: black;\n  margin: 0 auto;\n  position: relative;\n  outline: none;\n  width: 75%;\n  border-radius: 35px;\n  border: 1px solid black;\n}\n\n.ima {\n  margin: 0 auto;\n  display: block;\n  -webkit-padding-before: 5vh;\n          padding-block-start: 5vh;\n  -webkit-padding-after: 5vh;\n          padding-block-end: 5vh;\n  width: 60%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  border-radius: 50%;\n  background-size: 100% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNDLDJCQUFBO1VBQUEsd0JBQUE7RUFDQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Qsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG59XHJcblxyXG4uYnRuSW5mb3tcclxuICAgIC0tYmFja2dyb3VuZDogIzE1NzQyNDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuLmJ0bkluZm8xe1xyXG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlOyBcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uaW1he1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OjV2aDsgXHJcbiAgICAgcGFkZGluZy1ibG9jay1lbmQ6IDV2aDtcclxuICAgICB3aWR0aDogNjAlOyBcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87IFxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/perfil/perfil.page.ts":
    /*!***************************************!*\
      !*** ./src/app/perfil/perfil.page.ts ***!
      \***************************************/

    /*! exports provided: PerfilPage */

    /***/
    function srcAppPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
        return PerfilPage;
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


      var _contrasenia_contrasenia_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../contrasenia/contrasenia.page */
      "./src/app/contrasenia/contrasenia.page.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { FileChooser } from '@ionic-native/file-chooser/ngx';


      var PerfilPage = /*#__PURE__*/function () {
        function PerfilPage(auth, router, modalController) {
          _classCallCheck(this, PerfilPage);

          this.auth = auth;
          this.router = router;
          this.modalController = modalController;
          this.logs = [];
          this.usuarios$ = [];
        }

        _createClass(PerfilPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEmail();
          } // changeImagenUser(){    
          // }

        }, {
          key: "changePasswordUser",
          value: function changePasswordUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _contrasenia_contrasenia_page__WEBPACK_IMPORTED_MODULE_4__["ContraseniaPage"],
                        cssClass: 'my-custom-class-contraseniaModal'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            var _this = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this.usuarios$ = res;
              console.log(_this.usuarios$);
            });
          }
        }]);

        return PerfilPage;
      }();

      PerfilPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil.page.scss */
        "./src/app/perfil/perfil.page.scss"))["default"]]
      })], PerfilPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=perfil-perfil-module-es5.js.map
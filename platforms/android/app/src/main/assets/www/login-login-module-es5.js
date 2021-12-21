(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>hola </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\" class=\"body\" scroll-y=\"true\">\n  <div id=\"container\">\n    <div class=\"img\">\n      <ion-img src=\"/assets/icon.png\" ></ion-img>\n    </div><br><br>\n    <ion-row align-items-center style=\"text-align: center\">\n      <ion-col size=\"10\" style=\"margin: 0 auto;\" align-self: center>\n        <form [formGroup]=\"dataForm\">\n          <ion-item>\n            <ion-input formControlName=\"email\" type=\"email\" \n            placeholder=\"Nombre de usuario o correo\" required minlength=\"2\"\n            class=\"form-control\">\n            </ion-input>\n          </ion-item>\n          <br>\n          <ion-item>\n            <ion-input formControlName=\"password\" type=\"password\" \n            placeholder=\"Contraseña\" minlength=\"6\"\n            required></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n      <ion-col size=\"12\" size-sm=\"6\" style=\"text-align: center\" align-self: center>\n        <div>\n          <p style=\"color: #fff;font-size: smaller;text-decoration: underline;\">¿Olvidaste tu contraseña?<span></span>\n          </p>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" size-sm=\"4\" style=\"text-align: center\" align-self: center>\n        <div>\n          <ion-button type=\"submit\" shape=\"round\" class=\"btnInfo\" (click)=\"iniciarSesion()\"\n          [disabled]=\"!dataForm.valid\">Iniciar Sesion</ion-button>\n        </div>\n        <div>\n          <ion-button shape=\"round\" color=\"dark\" (click)=\"goContactanos()\">\n            <ion-icon name=\"storefront-outline\"></ion-icon>&nbsp; Contáctanos</ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" size-sm=\"6\" style=\"text-align: center\" align-self: center>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  --ion-background-color: #2A2A2A !important;\n}\n\nion-item {\n  color: #FFFFFF;\n  --padding-bottom: 0px;\n}\n\nion-input {\n  background-color: transparent;\n}\n\n.img {\n  margin: auto !important;\n  -webkit-margin-after: 30px;\n          margin-block-end: 30px;\n  padding-top: 25px !important;\n  display: block;\n  width: 85%;\n}\n\n.text {\n  background: #F4B004 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksNkJBQUE7QUFHSjs7QUFEQTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUdBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyQTJBMkEgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmltZ3tcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gICBcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBcclxufVxyXG4udGV4dHtcclxuICAgIGJhY2tncm91bmQ6I0Y0QjAwNCAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/auth/auth */
      "./src/app/providers/auth/auth.ts");
      /* harmony import */


      var _contactanos_modal_contactanos_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../contactanos-modal/contactanos-modal.page */
      "./src/app/contactanos-modal/contactanos-modal.page.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(auth, loadingCtrl, router, _formBuilder, navCtrl, menuCtrl, modalController) {
          _classCallCheck(this, LoginPage);

          this.auth = auth;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this._formBuilder = _formBuilder;
          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.modalController = modalController;
          this.data = '';
          this.user = {
            usuario: '',
            password: ''
          };
          this.name = 'This is about double click';
          this.dblcount = 0;
          this.snglcount = 0;
          this.message = "Waiting for a click...";
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(false);
            this.dataForm = this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            return this._formBuilder.group({
              email: [this.data.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
              password: [this.data.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])]
            });
          }
        }, {
          key: "iniciarSesion",
          value: function iniciarSesion() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var data, loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = this.dataForm.value;
                      this.user.email = data.email;
                      this.user.password = data.password;
                      _context.next = 5;
                      return this.loadingCtrl.create({
                        // message: 'iniciar sesión.',
                        spinner: 'dots' // duration: 1500

                      });

                    case 5:
                      loading = _context.sent;
                      loading.present().then(function () {
                        _this.auth.login(_this.user).subscribe(function (dat) {
                          console.log("autenticado correctamente");

                          _this.auth.getuser().subscribe(function (data) {
                            loading.dismiss().then(function () {
                              // this.router.navigate(['/ciudad']);
                              //this.closemodal(true);
                              _this.navCtrl.navigateRoot('/select');
                            });
                          }, function (err) {
                            loading.dismiss();
                            console.log(err);
                          });
                        }, function (err) {
                          console.log("Password o Email Incorrectos");
                          loading.dismiss();
                        }, function () {
                          loading.dismiss();
                        });
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goContactanos",
          value: function goContactanos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _contactanos_modal_contactanos_modal_page__WEBPACK_IMPORTED_MODULE_6__["ContactanosModalPage"],
                        cssClass: 'my-custom-class'
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
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map
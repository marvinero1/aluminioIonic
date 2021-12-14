(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculadora-calculadora-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCalculadoraCalculadoraPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"true\">\r\n        <!-- <ion-icon name=\"person-circle-outline\"></ion-icon> -->\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calculadora</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid style=\"background: whitesmoke;\">\r\n    <form [formGroup]=\"dataForm\" (ngSubmit)=submitData()>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" style=\"color: black;\">Ancho</ion-label>\r\n            <ion-input [(ngModel)]=\"numero1\" formControlName=\"numero1\" value=\"numero1\" pattern=\"[0-9]*\"\r\n              onKeyPress=\"if(this.value.length==8) return false;\" type=\"number\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" style=\"color: black;\">Alto</ion-label>\r\n            <ion-input [(ngModel)]=\"numero2\" formControlName=\"numero2\" type=\"number\" value=\"numero2\" pattern=\"[0-9]*\"\r\n              onKeyPress=\"if(this.value.length==8) return false;\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-item style=\"color: black;\">\r\n              <ion-label position=\"floating\" type=\"number\">Total</ion-label>\r\n              <ion-input [(ngModel)]=\"resultado\" formControlName=\"resultado\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-row>\r\n        </ion-col>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_calculo_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"justify-content: center;\">\r\n        <ion-col offset-sm *ngIf=\"btnHoja == false\">\r\n          <ion-button color=\"dark\" (click)=\"calcular()\">\r\n            <ion-icon name=\"calculator-outline\"></ion-icon>Calcular\r\n          </ion-button>\r\n          <ion-button color=\"dark\" (click)=\"submitData()\">\r\n            <ion-icon name=\"save-outline\"></ion-icon>Guardar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n    <div *ngIf=\"btnHoja == true\">\r\n      <form [formGroup]=\"data_hoja\" (ngSubmit)=postHoja()>\r\n        <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n        <ion-row style=\"display: block; text-align: center;\">\r\n          <ion-button color=\"dark\" (click)=\"postHoja()\">\r\n            <ion-icon name=\"clipboard-outline\"></ion-icon>\r\n            Crear Hoja de Calculo\r\n          </ion-button>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" padding>\r\n  <!-- <ion-button size=\"small\" color=\"dark\" (click)=\"deleteAllALL()\">ALL\r\n    <ion-icon name=\"trash-outline\"></ion-icon>\r\n  </ion-button> -->\r\n  <div style=\"padding: 10px;\">\r\n    <ion-row style=\"border-bottom: groove;text-align: right !important;\">\r\n      <ion-col col-4>\r\n        <ion-label><strong>Ancho</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>Alto</strong> </ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label><strong>TOTAL M²</strong></ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"points\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: groove;\" *ngFor=\"let element of calculo$ \">\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero1 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4>\r\n        <ion-label>{{element.numero2 | number:'0.3-3'}}</ion-label>\r\n      </ion-col>\r\n      <ion-col col-4 class=\"col\">\r\n        <ion-label>{{element.resultado}}</ion-label>\r\n      </ion-col>\r\n      <ion-button size=\"small\" color=\"dark\" (click)=\"deleteItem(element)\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n      <!-- <ion-col col-4>\r\n        <ion-label>{{element.created_at | date:'fullDate' }}</ion-label>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col col-6 style=\"margin-top: 16px;\">\r\n        <ion-button color=\"dark\" (click)=\"btnboolean()\">\r\n          <ion-icon name=\"document-text-outline\"></ion-icon>Formulario\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col col-6>\r\n        <p style=\"float: right; padding: 5px;padding-right: 11px;font-size: 1.3rem;\">\r\n          <strong>{{ total | number:'0.2-2' }} &nbsp;&nbsp;\r\n            M²</strong> </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <p style=\"float: right; padding: 5px;\">{{ total | currency:'':symbol: '1.0-2' }}</p> -->\r\n    <!-- <ion-button color=\"dark\" (click)=\"sumaTotales()\">\r\n      <ion-icon name=\"calculator-outline\"></ion-icon>Total M²\r\n    </ion-button> -->\r\n\r\n  </div>\r\n  <!-- <ion-button expand=\"block\" color=\"dark\" (click)=\"presentActionSheet()\">\r\n    <strong>Opciones</strong> </ion-button> -->\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"btnbool == false\" class=\"ion-no-border\">\r\n  <div class=\"div\">\r\n    <form [formGroup]=\"dataFormHistorial\" (ngSubmit)=guardarOperacion() novalidate>\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Nombre Cliente *</ion-label>\r\n            <ion-input [(ngModel)]=\"nombre_cliente\" formControlName=\"nombre_cliente\" type=\"text\" minlength=\"2\"\r\n              maxlength=\"40\" required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Celular *</ion-label>\r\n            <ion-input [(ngModel)]=\"celular\" formControlName=\"celular\" type=\"tel\" maxlength=\"10\" pattern=\"[0-9]*\"\r\n              required></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Precio. $us *</ion-label>\r\n            <ion-input [(ngModel)]=\"precio\" formControlName=\"precio\" type=\"number\" pattern=\"[0-9]*\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"resultadoM\" formControlName=\"total_suma\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"total\" formControlName=\"suma_m2\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n          <ion-input [(ngModel)]=\"hojas$.id\" formControlName=\"hoja_calculo_id\" disabled=\"true\" hidden=\"true\">\r\n          </ion-input>\r\n          <label style=\"float: right; padding: 5px;font-size: 1.2rem;color: black;\"><strong>Precio Total: </strong>\r\n            <strong>\r\n              {{ resultadoM | number:'0.1-1' }}</strong></label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"md-12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Descripción *</ion-label>\r\n            <ion-input [(ngModel)]=\"descripcion\" formControlName=\"descripcion\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row><br>\r\n      <!-- <ion-item>\r\n      <ion-label position=\"floating\">Total</ion-label>\r\n      <ion-input [(ngModel)]=\"totalTotalesT\" formControlName=\"totalTotalesT\" disabled=\"true\"></ion-input>\r\n    </ion-item> -->\r\n      <ion-button color=\"dark\" (click)=\"sumaTotalesTotales()\" class=\"float\">\r\n        <ion-icon name=\"calculator\"></ion-icon>Cotizar\r\n      </ion-button>\r\n\r\n      <ion-button color=\"dark\" (click)=\"postItem()\" class=\"float\">\r\n        <ion-icon name=\"save\"></ion-icon>Guardar Operación\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/calculadora/calculadora-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/calculadora/calculadora-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CalculadoraPageRoutingModule */

    /***/
    function srcAppCalculadoraCalculadoraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraPageRoutingModule", function () {
        return CalculadoraPageRoutingModule;
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


      var _calculadora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calculadora.page */
      "./src/app/calculadora/calculadora.page.ts");

      var routes = [{
        path: '',
        component: _calculadora_page__WEBPACK_IMPORTED_MODULE_3__["CalculadoraPage"]
      }];

      var CalculadoraPageRoutingModule = function CalculadoraPageRoutingModule() {
        _classCallCheck(this, CalculadoraPageRoutingModule);
      };

      CalculadoraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalculadoraPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/calculadora/calculadora.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/calculadora/calculadora.module.ts ***!
      \***************************************************/

    /*! exports provided: CalculadoraPageModule */

    /***/
    function srcAppCalculadoraCalculadoraModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraPageModule", function () {
        return CalculadoraPageModule;
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


      var _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calculadora-routing.module */
      "./src/app/calculadora/calculadora-routing.module.ts");
      /* harmony import */


      var _calculadora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calculadora.page */
      "./src/app/calculadora/calculadora.page.ts");

      var CalculadoraPageModule = function CalculadoraPageModule() {
        _classCallCheck(this, CalculadoraPageModule);
      };

      CalculadoraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _calculadora_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculadoraPageRoutingModule"]],
        declarations: [_calculadora_page__WEBPACK_IMPORTED_MODULE_6__["CalculadoraPage"]]
      })], CalculadoraPageModule);
      /***/
    },

    /***/
    "./src/app/calculadora/calculadora.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/calculadora/calculadora.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCalculadoraCalculadoraPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: transparent;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-label {\n  color: black;\n}\n\nion-input {\n  --background: transparent;\n}\n\np {\n  color: black !important;\n}\n\n.div {\n  margin: auto;\n  background: steelblue;\n}\n\np {\n  font-family: Lato;\n}\n\n.box {\n  width: 500px;\n  margin: auto;\n  height: 700px;\n  background: #E3E4DB;\n}\n\n.box2 {\n  width: 500px;\n  margin: auto;\n  height: 100px;\n  background: #CDCDCD;\n  margin-top: 30px;\n}\n\n.fixed {\n  position: fixed;\n  bottom: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.points {\n  color: black;\n  text-align: center;\n}\n\n.col {\n  Word-wrap: break-Word;\n  max-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYWRvcmEvY2FsY3VsYWRvcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtBQUdKOztBQUFFO0VBQ0UsdUJBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7RUFDRixxQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBT0YiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhZG9yYS9jYWxjdWxhZG9yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGlvbi1jb2x7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICB9XHJcbiAgcHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGl2e1xyXG4gICAgbWFyZ2luOiAgICAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbiAgfSAgXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG4uYm94e1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTNFNERCO1xyXG59XHJcblxyXG4uYm94MntcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0NEQ0RDRDtcclxuICBtYXJnaW4tdG9wOiAzMHB4OyBcclxufVxyXG5cclxuLmZpeGVke1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5wb2ludHN7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29se1xyXG4gIFdvcmQtd3JhcDogYnJlYWstV29yZDtcclxuICBtYXgtd2lkdGg6IDExMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/calculadora/calculadora.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/calculadora/calculadora.page.ts ***!
      \*************************************************/

    /*! exports provided: CalculadoraPage */

    /***/
    function srcAppCalculadoraCalculadoraPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculadoraPage", function () {
        return CalculadoraPage;
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CalculadoraPage = /*#__PURE__*/function () {
        function CalculadoraPage(actionSheetController, router, menuCtrl, auth, loadingController, _formBuilder, alertController, restangular, decimalPipe, toastController) {
          _classCallCheck(this, CalculadoraPage);

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

        _createClass(CalculadoraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuCtrl.enable(true);
            this.dataForm = this.createForm();
            this.data_hoja = this.data_Hoja();
            this.dataFormHistorial = this.createFormHist();
            this.btnboolean();
            this.getUser();
          }
        }, {
          key: "getCalculs",
          value: function getCalculs(user_id, hoja_id) {
            var _this = this;

            this.auth.getAllObjectByIdforCalculo('calculos/', user_id, hoja_id).subscribe(function (res) {
              _this.calculo$ = res;
              console.log(_this.calculo$); //Calculamos el TOTAL 

              _this.total = _this.calculo$.reduce(function (acc, obj) {
                return acc + obj.numero1 * obj.numero2;
              }, 0);
              console.log("Total: ", _this.total);
            });
          }
        }, {
          key: "calcular",
          value: function calcular() {
            var num1 = this.numero1;
            var num2 = this.numero2;

            if (num1 != 0 || num2 != 0) {
              this.resultado = num1 * num2;
              this.resultado = this.decimalPipe.transform(this.resultado, '0.2-2');
              console.log(this.resultado);
            } else {
              this.presentToast("Intenta agregando numeros, para sacar el total.");
            }
          }
        }, {
          key: "createForm",
          value: function createForm() {
            return this._formBuilder.group({
              //id : [this.id],
              //nombre: [this.data.nombre,Validators.compose([Validators.required])],
              numero1: [this.numero1],
              numero2: [this.numero2],
              resultado: [this.resultado],
              total: [this.total],
              hoja_calculo_id: [this.hoja_calculo_id],
              user_id: [this.user_id]
            });
          }
        }, {
          key: "createFormHist",
          value: function createFormHist() {
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
        }, {
          key: "submitData",
          value: function submitData() {
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
                        header: '¿Desea Guardar Este Calculo?',
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
                            var data = _this2.dataForm.value;
                            var data_resultado = data.resultado; //console.log(data);

                            if (data_resultado != 0) {
                              _this2.restangular.all('guardarCalculadora').post(data).subscribe(function (datav) {
                                console.log(datav);

                                _this2.presentLoading();

                                window.location.reload(); //this.presentAlert();
                              });
                            } else {
                              _this2.presentToast("El resultado no puede ser 0");
                            }
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
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "sumaTotales",
          value: function sumaTotales() {
            //Calculamos el TOTAL 
            this.total = this.calculo$.reduce(function (acc, obj) {
              return acc + obj.resultado;
            }, 0);
            console.log("Total: ", this.total);
          }
        }, {
          key: "sumaTotalesTotales",
          value: function sumaTotalesTotales() {
            this.resultadoM = this.total * this.precio;
            console.log(this.resultadoM);
            return this.resultadoM;
          }
        }, {
          key: "postItem",
          value: function postItem() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Guardar este Calculo?',
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
                            _this3.statusHoja();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "guardarOperacion",
          value: function guardarOperacion() {
            var _this4 = this;

            var data1 = this.dataFormHistorial.value;
            var a = data1.user_id; // let objecy = JSON.stringify(data1);

            console.log(data1);
            this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe(function (datav) {
              _this4.presentLoading1(); // this.deleteAll(a); //CAMBIARLO POR EL QUE ACTUALIZA SU ESTADO

            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        cssClass: 'loading',
                        message: 'Guardando...',
                        duration: 4000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context4.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Eliminar este Elemento?',
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
                            _this5.auth.deleteObjectById('calculadoraDelete/', item.id).subscribe(function (res) {
                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert, result;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'Calculo',
                        subHeader: 'Estado Historial Calculo',
                        message: 'Se guardo el calculo',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                      _context6.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      result = _context6.sent;
                      console.log(result);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "perfil",
          value: function perfil() {
            this.router.navigate(['/perfil']);
          }
        }, {
          key: "deleteAllALL",
          value: function deleteAllALL() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'alert-confirm23',
                        header: '¿Desea Eliminar este Elemento?',
                        message: '',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler(blah) {
                            return false; //console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Si',
                          handler: function handler() {
                            _this6.auth.deleteAllObject('calculadoraDeleteAll/').subscribe(function (res) {
                              window.location.reload();
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "btnboolean",
          value: function btnboolean() {
            if (this.btnbool) {
              this.btnbool = false;
            } else {
              this.btnbool = true;
            }
          }
        }, {
          key: "deleteAll",
          value: function deleteAll(user_id) {
            this.auth.deleteObjectById('calculadoraDeleteAll/', user_id).subscribe(function (res) {
              //window.location.reload();
              console.log(res);
              window.location.reload();
            });
          }
        }, {
          key: "data_Hoja",
          value: function data_Hoja() {
            var estado = "false";
            return this._formBuilder.group({
              estado: [estado],
              total: [this.total_suma],
              user_id: [this.user_id]
            });
          }
        }, {
          key: "postHoja",
          value: function postHoja() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¿Desea Crear Hoja de Calculo?',
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
                            var data = _this7.data_hoja.value;
                            console.log(data);

                            if (data) {
                              _this7.restangular.all('guardarHoja').post(data).subscribe(function (datav) {
                                _this7.presentLoading();

                                window.location.reload();
                              });
                            } else {
                              (function (error) {
                                console.log(error);
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getHoja",
          value: function getHoja(user_id) {
            var _this8 = this;

            this.auth.getCarrito('getHojaCalculo/', user_id).subscribe(function (res) {
              _this8.hojas$ = res;
              console.log(_this8.hojas$);
              var hoja_id = _this8.hojas$.id;

              _this8.getCalculs(user_id, hoja_id); //this.carrito$ = Object.values(this.carrito$);


              if (_this8.hojas$.estado == 'false') {
                _this8.btnHoja = false; //console.log("si hay algo");
              } else {
                //console.log("no lo hay");
                _this8.btnHoja = true;
              } //this.loadData();  


              return _this8.hojas$;
            });
          }
        }, {
          key: "presentLoading1",
          value: function presentLoading1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var loading, _yield$loading$onDidD2, role, data;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingController.create({
                        cssClass: 'loading',
                        message: 'Guardando...',
                        duration: 4000
                      });

                    case 2:
                      loading = _context9.sent;
                      _context9.next = 5;
                      return loading.present();

                    case 5:
                      window.location.reload();
                      _context9.next = 8;
                      return loading.onDidDismiss();

                    case 8:
                      _yield$loading$onDidD2 = _context9.sent;
                      role = _yield$loading$onDidD2.role;
                      data = _yield$loading$onDidD2.data;

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "statusHoja",
          value: function statusHoja() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this9 = this;

              var estado, data, data1, a;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      estado = 'true';
                      data = this._formBuilder.group({
                        //nombre: [this.data.nombre,Validators.compose([Validators.required])],
                        total_suma: [this.total],
                        estado: [estado]
                      });
                      data1 = data.value;
                      a = this.hojas$.id; // console.log(data1);

                      if (this.dataFormHistorial.valid) {
                        this.auth.cerrarCarrito('updateStatusHoja/', a, data1).subscribe(function (datav) {
                          _this9.guardarOperacion();
                        });
                      } else {
                        this.presentToast("Ingresa los datos requeridos");
                      }

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this10 = this;

            this.logs = JSON.parse(localStorage.getItem('Usuario'));
            this.auth.getUsers('usuariosStorage/', this.logs).subscribe(function (res) {
              _this10.usuarios$ = res;
              var user_id = _this10.usuarios$.id;

              _this10.getCalculs(user_id, '');

              _this10.getHoja(user_id); //console.log(this.usuarios$);

            });
          }
        }]);

        return CalculadoraPage;
      }();

      CalculadoraPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: ngx_restangular__WEBPACK_IMPORTED_MODULE_6__["Restangular"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      CalculadoraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculadora',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./calculadora.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/calculadora/calculadora.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./calculadora.page.scss */
        "./src/app/calculadora/calculadora.page.scss"))["default"]]
      })], CalculadoraPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=calculadora-calculadora-module-es5.js.map
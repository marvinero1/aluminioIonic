(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contrasenia/contrasenia.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contrasenia/contrasenia.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Cambiar Contraseña</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"dataForm\" (ngSubmit)=submitData()>\r\n    <ion-row>\r\n      <ion-col>\r\n      \r\n         \r\n          <ion-input formControlName=\"id\" value=\"{{usuarios$.id}}\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n       \r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\" style=\"color: black;\">Email</ion-label>\r\n          <ion-input formControlName=\"email\" type=\"text\" value=\"{{usuarios$.email}}\" disabled=\"true\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\" style=\"color: black;\">Contraseña</ion-label>\r\n          <ion-input formControlName=\"password\" type=\"password\" ></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-button expand=\"full\" type=\"submit\" (click)=\"submitData()\">Guardar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modalfavoritos/modalfavoritos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalfavoritos/modalfavoritos.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <p>¿Desea Agregar este Elemento a Favoritos?</p>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"fila\">\r\n    <form [formGroup]=\"dataForm\" (ngSubmit)=guardarFavorito()>\r\n      <ion-input [(ngModel)]=\"usuarios$.id\" formControlName=\"user_id\" disabled=\"true\" hidden=\"true\"></ion-input>\r\n      <ion-button color=\"dark\" (click)=\"dismiss()\"><ion-icon name=\"alert-outline\"></ion-icon>Atras</ion-button>\r\n      <ion-button color=\"dark\" (click)=\"guardarFavorito()\"><ion-icon name=\"checkmark-outline\"></ion-icon>Si, Agregar</ion-button>\r\n    </form>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/contrasenia/contrasenia.page.scss":
/*!***************************************************!*\
  !*** ./src/app/contrasenia/contrasenia.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYXNlbmlhL2NvbnRyYXNlbmlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/contrasenia/contrasenia.page.ts":
/*!*************************************************!*\
  !*** ./src/app/contrasenia/contrasenia.page.ts ***!
  \*************************************************/
/*! exports provided: ContraseniaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContraseniaPage", function() { return ContraseniaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");





let ContraseniaPage = class ContraseniaPage {
    constructor(_formBuilder, auth, restangular) {
        this._formBuilder = _formBuilder;
        this.auth = auth;
        this.restangular = restangular;
        this.logs = [];
        this.usuarios$ = [];
    }
    ngOnInit() {
        this.dataForm = this.createForm();
        this.getEmail();
    }
    createForm() {
        return this._formBuilder.group({
            id: [this.id],
            //nombre: [this.data.nombre,Validators.compose([Validators.required])],
            email: [this.email],
            password: [this.password],
        });
    }
    submitData() {
        let data = this.dataForm.value;
        let id = data.id;
        console.log(data);
        this.auth.updateObjectByIdUser('updatepasswordIonic/', id, data).subscribe((datav) => {
            // console.log("Contra Cambiado");
            window.location.reload();
        });
    }
    getEmail() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
            // console.log(this.usuarios$);
        });
    }
};
ContraseniaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
ContraseniaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contrasenia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contrasenia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contrasenia/contrasenia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contrasenia.page.scss */ "./src/app/contrasenia/contrasenia.page.scss")).default]
    })
], ContraseniaPage);



/***/ }),

/***/ "./src/app/modalfavoritos/modalfavoritos.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modalfavoritos/modalfavoritos.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: whitesmoke;\n}\n\nion-header {\n  color: whitesmoke;\n  text-align: center;\n}\n\n.fila {\n  justify-content: center;\n  text-align: center;\n  padding: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxmYXZvcml0b3MvbW9kYWxmYXZvcml0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbGZhdm9yaXRvcy9tb2RhbGZhdm9yaXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmlsYXtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modalfavoritos/modalfavoritos.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modalfavoritos/modalfavoritos.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalfavoritosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalfavoritosPage", function() { return ModalfavoritosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth/auth */ "./src/app/providers/auth/auth.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");






let ModalfavoritosPage = class ModalfavoritosPage {
    constructor(modalController, auth, _formBuilder, restangular, loadingController) {
        this.modalController = modalController;
        this.auth = auth;
        this._formBuilder = _formBuilder;
        this.restangular = restangular;
        this.loadingController = loadingController;
        this.logs = [];
        this.usuarios$ = [];
    }
    ngOnInit() {
        this.dataForm = this.createForm();
        this.getUser();
    }
    createForm() {
        return this._formBuilder.group({
            id: [this.id],
            nombre: [this.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            importadora: [this.importadora, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            estado: [this.estado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            disponibilidad: [this.disponibilidad, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            confirmacion: [this.confirmacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            codigo: [this.codigo],
            color: [this.color],
            descripcion: [this.descripcion],
            imagen: [this.imagen],
            novedad: [this.novedad],
            precio: [this.precio],
            alto: [this.alto],
            ancho: [this.ancho],
            puntuacion: [this.puntuacion],
            categorias_id: [this.categorias_id],
            subcategorias_id: [this.subcategorias_id],
            tipo_medida: [this.tipo_medida],
            productos_id: [this.id],
            user_id: [this.user_id],
        });
    }
    guardarFavorito() {
        let data = this.dataForm.value;
        console.log(data);
        if (data) {
            this.restangular.all('guardarFavorito').post(data).subscribe((datav) => {
                this.dismiss();
                this.presentLoading();
            });
        }
        else {
            (error) => {
                console.log(error);
            };
        }
    }
    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Agregando a Favoritos!!',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            //console.log('Loading dismissed!');
        });
    }
    getUser() {
        this.logs = JSON.parse(localStorage.getItem('Usuario'));
        this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) => {
            this.usuarios$ = res;
        });
    }
};
ModalfavoritosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ModalfavoritosPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    importadora: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    estado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disponibilidad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    codigo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    descripcion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imagen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    novedad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    precio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    alto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ancho: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    puntuacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    categorias_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subcategorias_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tipo_medida: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ModalfavoritosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modalfavoritos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modalfavoritos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modalfavoritos/modalfavoritos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modalfavoritos.page.scss */ "./src/app/modalfavoritos/modalfavoritos.page.scss")).default]
    })
], ModalfavoritosPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
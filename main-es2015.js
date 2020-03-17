(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-dialog/address-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-dialog/address-dialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{data.title}}</h1>\n\n<div mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <mat-form-field>\n    <mat-label>Регион</mat-label>\n    <mat-select required>\n      <mat-option value=\"23\">Краснодарский край</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <mat-label>Район</mat-label>\n    <input matInput placeholder=\"Район\" value=\"\">\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <mat-label>Город</mat-label>\n    <input matInput placeholder=\"Город\" value=\"\">\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <mat-label>Населенный пункт</mat-label>\n    <input matInput placeholder=\"Населенный пункт\" value=\"\">\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <mat-label>Улица</mat-label>\n    <input matInput placeholder=\"Улица\" value=\"\">\n  </mat-form-field>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <mat-label>Дом</mat-label>\n      <input matInput placeholder=\"Дом\" value=\"\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-label>Корпус</mat-label>\n      <input matInput placeholder=\"Корпус\" value=\"\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-label>Квартира</mat-label>\n      <input matInput placeholder=\"Квартира\" value=\"\">\n    </mat-form-field>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Сохранить</button>\n  <button mat-button (click)=\"cancel()\">Отменить</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" \n  fxLayoutGap=\"5px\" fxFlexFill>\n  <div class=\"sidebar\" fxLayout=\"column\" fxFlex=\"250px\">\n    <div class=\"logo\">\n      <a href=\"http://frgskk.ru\"><img class=\"logo\" src=\"/assets/img/logo.png\" /></a>\n    </div>\n\n    <div class=\"text\">\n      <h2>Заявление на получение оферты для заключения договора страхования</h2>\n\n      <p>При возникновении вопросов или сложностей при составлении заявления \n        обращайтесь, пожалуйста, в Фонд развития жилищного страхования Краснодарского края.</p>\n\n      <p><strong>Телефоны:</strong></p>\n\n      <ul>\n        <li><a href=\"phone:+79882475808\">+7 988 247-58-08</a></li>\n        <li><a href=\"phone:+78002507870\">+7 800 250-78-70</a></li>\n      </ul>\n      \n      <p><strong>Эл. почта: </strong>&nbsp;<a href=\"mailto:mail@frgskk.ru\">mail@frgskk.ru</a></p>\n\n      <p><strong>Адрес: </strong> 350049, г. Краснодар, ул. Аэродромная, 37</p>\n    </div>\n\n    <div fxFlex></div>\n\n    <div class=\"sidebar-footer\">\n      <a href=\"http://frgskk.ru\">Вернуться на сайт ФРЖС КК</a>\n    </div>\n  </div>\n\n  <div class=\"main\" fxFlex>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-application/offer-application.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer-application/offer-application.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFlexFill>\n  <mat-toolbar>\n    <span>Заявление на получение оферты для заключения договора страхования</span>\n  </mat-toolbar>\n\n  <div class=\"content\" fxFlex>\n    <h3>Страхователь</h3>\n\n    <mat-tab-group>\n      <mat-tab label=\"Физическое лицо\">\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex>\n            <mat-label>Фамилия</mat-label>\n            <input matInput placeholder=\"Фамилия\" value=\"\">\n          </mat-form-field>\n\n          <mat-form-field fxFlex>\n            <mat-label>Имя</mat-label>\n            <input matInput placeholder=\"Имя\" value=\"\">\n          </mat-form-field>\n\n          <mat-form-field fxFlex>\n            <mat-label>Отчество</mat-label>\n            <input matInput placeholder=\"Отчество\" value=\"\">\n          </mat-form-field>\n        </div>\n\n        <h4>Документ, удостоверящий личность</h4>\n\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex>\n            <button matPrefix mat-button color=\"accent\"\n              (click)=\"openPassportDialog()\">\n              <mat-icon>mode_edit</mat-icon>\n              Укажите документ, удостоверяющий личность...\n            </button>\n\n            <input matInput placeholder=\"Документ, удостоверяющий личность\" value=\"\">\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex>\n            <mat-label>Адрес регистрации</mat-label>\n\n            <button matPrefix mat-button color=\"accent\"\n              (click)=\"openAddressDialog('Адрес регистрации')\">\n              <mat-icon>mode_edit</mat-icon>\n              Укажите адрес регистрации...\n            </button>\n\n            <input matInput placeholder=\"Адрес регистрации\" value=\"\">\n          </mat-form-field>\n        </div>\n\n        <h4>Контактная информация</h4>\n\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex>\n            <mat-label>Телефон</mat-label>\n            <input matInput placeholder=\"Телефон\" value=\"\">\n          </mat-form-field>\n\n          <mat-form-field fxFlex>\n            <mat-label>Адрес электронной почты</mat-label>\n            <input matInput placeholder=\"Адрес электронной почты\" value=\"\">\n          </mat-form-field>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Юридическое лицо\">\n        <p><strong>TODO Определить реквизиты Юридического лица</strong></p>\n      </mat-tab>\n    </mat-tab-group>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n      <h3>Страховщик</h3>\n\n      <mat-form-field fxFlex=\"300px\">\n        <!-- <mat-label>Вид документа</mat-label> -->\n        <mat-select required>\n          <mat-option value=\"21\">Верна</mat-option>\n          <mat-option value=\"21\">Евроинс</mat-option>\n          <mat-option value=\"21\">Ингосстрах</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n      <h3>Объект страхования</h3>\n\n      <mat-form-field fxFlex=\"300px\">\n        <!-- <mat-label>Вид документа</mat-label> -->\n        <mat-select required>\n          <mat-option value=\"21\">Жилой дом</mat-option>\n          <mat-option value=\"21\">Часть жилого дома</mat-option>\n          <mat-option value=\"21\">Квартира</mat-option>\n          <mat-option value=\"21\">Комната</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <mat-form-field class=\"w-100\">\n      <button matPrefix mat-button color=\"accent\"\n        (click)=\"openAddressDialog('Адрес объекта страхования')\">\n        <mat-icon>mode_edit</mat-icon>\n        Укажите адрес объекта страхования...\n      </button>\n      <input type=\"text\" matInput placeholder=\"Адрес объекта страхования\">\n    </mat-form-field>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n      <h3>Страховая сумма</h3>\n\n      <mat-form-field fxFlex=\"500px\">\n        <!-- <mat-label>Вид документа</mat-label> -->\n        <mat-select required>\n          <mat-option value=\"21\">500 000 руб.</mat-option>\n          <mat-option value=\"21\">1 000 000 руб. (только для квартир после 1990г. постройки)</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n      <h3>Срок страхования:</h3>\n\n      <mat-form-field fxFlex=\"50px\">\n        <!-- <mat-label>Вид документа</mat-label> -->\n        <mat-select required>\n          <mat-option value=\"21\">1</mat-option>\n          <mat-option value=\"21\">2</mat-option>\n          <mat-option value=\"21\">3</mat-option>\n          <mat-option value=\"21\">4</mat-option>\n          <mat-option value=\"21\">5</mat-option>\n          <mat-option value=\"21\">6</mat-option>\n          <mat-option value=\"21\">7</mat-option>\n          <mat-option value=\"21\">8</mat-option>\n          <mat-option value=\"21\">9</mat-option>\n          <mat-option value=\"21\">10</mat-option>\n          <mat-option value=\"21\">11</mat-option>\n          <mat-option value=\"21\">12</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <h3 fxFlex>месяцев</h3>\n    </div>\n\n    <h3>Согласия и утверждения</h3>\n\n    <p><mat-checkbox>Согласие на обработку персональных данных</mat-checkbox></p>\n    <!-- <p>Don't disclose personal info</p> -->\n\n    <p><mat-checkbox>Объект не находится в аварийном состоянии</mat-checkbox></p>\n    <p><mat-checkbox>Объект не расположен в доме, подлежащем сносу или переоборудованию в нежилые</mat-checkbox></p>\n    <p><mat-checkbox>Объект не имеет износ более 60%</mat-checkbox></p>\n    <p><mat-checkbox>Объект не имеет признаки страхового покрытия</mat-checkbox></p>\n    <p><mat-checkbox>Объект не расположен в зоне, которой угрожают стихийные бедствия</mat-checkbox></p>\n    <p class=\"hint\">(при официальном объявлении о такой угрозе в установленном порядке или принятии соотвествующего решения компетентными органами)</p>\n    <p><mat-checkbox>Объект не имеет дефекты в следствие ошибок проектирования и строительства</mat-checkbox></p>\n    <p class=\"hint\">(известных страхователю до заключения договора)</p>\n\n    <div class=\"buttons\">\n      <button mat-raised-button color=\"primary\">Отправить заявление</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/passport-dialog/passport-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passport-dialog/passport-dialog.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Документ, удостоверяющий личность</h1>\n\n<div mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n  <mat-form-field>\n    <mat-label>Вид документа</mat-label>\n    <mat-select required>\n      <mat-option value=\"21\">Паспорт гражданина РФ</mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n\n    <mat-form-field fxFlex>\n      <mat-label>Серия</mat-label>\n      <input matInput placeholder=\"Серия\" value=\"\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-label>Номер</mat-label>\n      <input matInput placeholder=\"Номер\" value=\"\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-label>Дата выдачи</mat-label>\n      <input matInput placeholder=\"Дата выдачи\" value=\"\">\n    </mat-form-field>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <mat-label>Кем выдан</mat-label>\n      <input matInput placeholder=\"Кем выдан\" value=\"\">\n    </mat-form-field>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <mat-label>Код подразделения</mat-label>\n      <input matInput placeholder=\"Код подразделения\" value=\"\">\n    </mat-form-field>\n\n    <div fxFlex></div>\n    <div fxFlex></div>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>Сохранить</button>\n  <button mat-button (click)=\"cancel()\">Отменить</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/address-dialog/address-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/address-dialog/address-dialog.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  padding: 0;\n  margin: 0;\n}\n\n.mat-dialog-actions {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n::ng-deep .mat-form-field-infix {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbWFuL3Byb2plY3RzL2ZyZ3Nray5ydS9jbGllbnQtYXBwL3NyYy9hcHAvYWRkcmVzcy1kaWFsb2cvYWRkcmVzcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZHJlc3MtZGlhbG9nL2FkZHJlc3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MtZGlhbG9nL2FkZHJlc3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogYXV0bztcbn0iLCIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/address-dialog/address-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/address-dialog/address-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: AddressDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDialogComponent", function() { return AddressDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AddressDialogComponent = class AddressDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        console.log('data: ', this.data);
    }
    cancel() {
        this.dialogRef.close();
    }
};
AddressDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddressDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-dialog/address-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-dialog.component.scss */ "./src/app/address-dialog/address-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddressDialogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offer_application_offer_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer-application/offer-application.component */ "./src/app/offer-application/offer-application.component.ts");




const routes = [
    { path: "", component: _offer_application_offer_application_component__WEBPACK_IMPORTED_MODULE_3__["OfferApplicationComponent"] },
    { path: "offer-application", component: _offer_application_offer_application_component__WEBPACK_IMPORTED_MODULE_3__["OfferApplicationComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  background: #fff;\n  box-shadow: 2px 0 4px 2px rgba(0, 0, 0, 0.15);\n  padding: 15px;\n}\n.sidebar div.logo {\n  text-align: center;\n}\n.sidebar .text h2 {\n  text-align: center;\n  color: #2A2A2A;\n  font-weight: 500;\n}\n.sidebar .text p {\n  font-size: 14px;\n}\n.sidebar .text a {\n  color: #3a80f1;\n  text-decoration: none;\n}\n.sidebar .text a:hover {\n  text-decoration: underline;\n}\n.sidebar .sidebar-footer {\n  text-align: center;\n}\n.sidebar .sidebar-footer a {\n  color: #e9392a;\n  text-decoration: none;\n  line-height: 2.5em;\n}\n.sidebar .sidebar-footer a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbWFuL3Byb2plY3RzL2ZyZ3Nray5ydS9jbGllbnQtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLDZDQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FER0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURLSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0hOO0FES007RUFDRSwwQkFBQTtBQ0hSO0FEU0U7RUFDRSxrQkFBQTtBQ1BKO0FEU0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtBQ1JOO0FEVU07RUFDRSwwQkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAwIDRweCAycHggcmdiYSgwLDAsMCwuMTUpO1xuICBib3gtc2hhZG93OiAycHggMCA0cHggMnB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgcGFkZGluZzogMTVweDtcblxuICBkaXYubG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGgyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMkEyQTJBO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjM2E4MGYxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAuc2lkZWJhci1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICNlOTM5MmE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubWFpbiB7XG5cbn0iLCIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAycHggMCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2lkZWJhciBkaXYubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyIC50ZXh0IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJBMkEyQTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zaWRlYmFyIC50ZXh0IHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2lkZWJhciAudGV4dCBhIHtcbiAgY29sb3I6ICMzYTgwZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWRlYmFyIC50ZXh0IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciBhIHtcbiAgY29sb3I6ICNlOTM5MmE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xufVxuLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _offer_application_offer_application_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./offer-application/offer-application.component */ "./src/app/offer-application/offer-application.component.ts");
/* harmony import */ var _passport_dialog_passport_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./passport-dialog/passport-dialog.component */ "./src/app/passport-dialog/passport-dialog.component.ts");
/* harmony import */ var _address_dialog_address_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./address-dialog/address-dialog.component */ "./src/app/address-dialog/address-dialog.component.ts");














// import {MatCardModule} from '@angular/material/card';




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _offer_application_offer_application_component__WEBPACK_IMPORTED_MODULE_15__["OfferApplicationComponent"],
            _passport_dialog_passport_dialog_component__WEBPACK_IMPORTED_MODULE_16__["PassportDialogComponent"],
            _address_dialog_address_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddressDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            // MatCardModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _passport_dialog_passport_dialog_component__WEBPACK_IMPORTED_MODULE_16__["PassportDialogComponent"],
            _address_dialog_address_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddressDialogComponent"],
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/offer-application/offer-application.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/offer-application/offer-application.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  box-sizing: border-box;\n  padding: 0 16px;\n  overflow-y: scroll;\n}\n.content p.hint {\n  font-size: 10px;\n  margin-top: 0;\n}\n.content .buttons {\n  margin: 25px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbWFuL3Byb2plY3RzL2ZyZ3Nray5ydS9jbGllbnQtYXBwL3NyYy9hcHAvb2ZmZXItYXBwbGljYXRpb24vb2ZmZXItYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29mZmVyLWFwcGxpY2F0aW9uL29mZmVyLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9vZmZlci1hcHBsaWNhdGlvbi9vZmZlci1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgcC5oaW50IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5jb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uY29udGVudCBwLmhpbnQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGVudCAuYnV0dG9ucyB7XG4gIG1hcmdpbjogMjVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/offer-application/offer-application.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/offer-application/offer-application.component.ts ***!
  \******************************************************************/
/*! exports provided: OfferApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferApplicationComponent", function() { return OfferApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _passport_dialog_passport_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passport-dialog/passport-dialog.component */ "./src/app/passport-dialog/passport-dialog.component.ts");
/* harmony import */ var _address_dialog_address_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address-dialog/address-dialog.component */ "./src/app/address-dialog/address-dialog.component.ts");





let OfferApplicationComponent = class OfferApplicationComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() { }
    openPassportDialog() {
        const dialog = this.dialog.open(_passport_dialog_passport_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PassportDialogComponent"], {
            width: '650px',
            data: {}
        });
        dialog.afterClosed().subscribe(result => {
            console.log('result: ', result);
        });
    }
    openAddressDialog(title) {
        const dialog = this.dialog.open(_address_dialog_address_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddressDialogComponent"], {
            width: '450px',
            data: {
                title: title,
                address: {},
            }
        });
        dialog.afterClosed().subscribe(result => {
            console.log('result: ', result);
        });
    }
};
OfferApplicationComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
OfferApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer-application.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer-application/offer-application.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer-application.component.scss */ "./src/app/offer-application/offer-application.component.scss")).default]
    })
], OfferApplicationComponent);



/***/ }),

/***/ "./src/app/passport-dialog/passport-dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/passport-dialog/passport-dialog.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  padding: 0;\n  margin: 0;\n}\n\n.mat-dialog-actions {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbWFuL3Byb2plY3RzL2ZyZ3Nray5ydS9jbGllbnQtYXBwL3NyYy9hcHAvcGFzc3BvcnQtZGlhbG9nL3Bhc3Nwb3J0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFzc3BvcnQtZGlhbG9nL3Bhc3Nwb3J0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtVQUFBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXNzcG9ydC1kaWFsb2cvcGFzc3BvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/passport-dialog/passport-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/passport-dialog/passport-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: PassportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportDialogComponent", function() { return PassportDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let PassportDialogComponent = class PassportDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        console.log('data: ', this.data);
    }
    cancel() {
        this.dialogRef.close();
    }
};
PassportDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PassportDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passport-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passport-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/passport-dialog/passport-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passport-dialog.component.scss */ "./src/app/passport-dialog/passport-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PassportDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roman/projects/frgskk.ru/client-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
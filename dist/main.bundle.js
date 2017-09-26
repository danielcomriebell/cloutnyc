webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 138;


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(151);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(325),
            styles: [__webpack_require__(316)]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/about.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.state = 'small';
    }
    AppComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(326),
            styles: [__webpack_require__(317)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* animation */]]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_terms_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privacy_privacy_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logo_logo_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lookbook_lookbook_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__apply_apply_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_draggable__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular_draggable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { AngularFireModule } from 'angularfire2';
// import { ReactiveFormsModule } from '@angular/forms';
// import { firebaseConfig } from '../environments/environment';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__apply_apply_component__["a" /* ApplyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__lookbook_lookbook_component__["a" /* LookbookComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                // AngularFireModule.initializeApp(firebaseConfig),
                // ReactiveFormsModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_draggable__["NgDraggableModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
                    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_7__terms_terms_component__["a" /* TermsComponent */] },
                    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_8__privacy_privacy_component__["a" /* PrivacyComponent */] },
                    { path: 'lookbook', component: __WEBPACK_IMPORTED_MODULE_12__lookbook_lookbook_component__["a" /* LookbookComponent */] },
                    { path: 'apply', component: __WEBPACK_IMPORTED_MODULE_14__apply_apply_component__["a" /* ApplyComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFire } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
var ApplyComponent = /** @class */ (function () {
    function ApplyComponent() {
    }
    ApplyComponent.prototype.ngOnInit = function () {
    };
    ApplyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apply',
            template: __webpack_require__(327),
            styles: [__webpack_require__(318)]
        }),
        __metadata("design:paramtypes", [])
    ], ApplyComponent);
    return ApplyComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/apply.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageElement = ['./assets/first-collection/016.jpg', './assets/first-collection/012.jpg', './assets/first-collection/007.jpg', './assets/first-collection/004.jpg'];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(328),
            styles: [__webpack_require__(319)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/home.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.logoElement = "[CLOUT]";
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(329),
            styles: [__webpack_require__(320)]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/logo.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LookbookComponent = /** @class */ (function () {
    function LookbookComponent() {
        this.collectionElement = ['./assets/first-collection/016.jpg', './assets/first-collection/012.jpg', './assets/first-collection/010.jpg', './assets/first-collection/004.jpg', './assets/first-collection/007.jpg', './assets/first-collection/013.jpg', './assets/first-collection/011.jpg', './assets/first-collection/018.jpg'];
    }
    LookbookComponent.prototype.ngOnInit = function () {
    };
    LookbookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lookbook',
            template: __webpack_require__(330),
            styles: [__webpack_require__(321)]
        }),
        __metadata("design:paramtypes", [])
    ], LookbookComponent);
    return LookbookComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/lookbook.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuElement = ['home', 'about', 'lookbook', 'apply'];
        this.footerElement = ['terms', 'privacy'];
        this.state = 'small';
    }
    MenuComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
        // this.state=(this.state === 'norm' ? 'new' : 'norm');
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(331),
            styles: [__webpack_require__(322)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* animation */]]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/menu.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(332),
            styles: [__webpack_require__(323)]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/privacy.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(333),
            styles: [__webpack_require__(324)]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());

//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/terms.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* unused harmony export firebaseConfig */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
var firebaseConfig = {
    apiKey: "AIzaSyBzmUlZd66XaVCSM-8w6tuLgAC1L32mNv0",
    authDomain: "email-3e43c.firebaseapp.com",
    databaseURL: "https://email-3e43c.firebaseio.com",
    projectId: "email-3e43c",
    storageBucket: "email-3e43c.appspot.com",
    messagingSenderId: "223899107160"
};
//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/environment.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.begin-text {\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  -webkit-animation: example 2s;\n  /* Safari 4.0 - 8.0 */\n  animation: example 2s; }\n  .begin-text h1 {\n    font-family: Reservation;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .begin-text h1 {\n        font-size: 20px; } }\n\n.end-text {\n  position: absolute;\n  left: 50%;\n  top: 60%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  -webkit-animation: example 2s;\n  /* Safari 4.0 - 8.0 */\n  animation: example 2s; }\n  .end-text h1 {\n    font-family: Reservation;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .end-text h1 {\n        font-size: 20px; } }\n\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "p {\n  width: 200px;\n  background: lightgray;\n  margin: 100px auto;\n  text-align: center;\n  padding: 200px;\n  font-size: 1.5em; }\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.home {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"../assets/first-collection/010.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  z-index: 999;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .home {\n      background-image: none; } }\n\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.home-img {\n  position: relative;\n  width: 100%;\n  opacity: 1;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 500px;\n  margin-bottom: 100px; }\n  .home-img:nth-child(1) {\n    left: 100%;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  .home-img:nth-child(2) {\n    left: 0;\n    -webkit-transform: none;\n            transform: none; }\n  .home-img:nth-child(2) {\n    left: 0;\n    -webkit-transform: none;\n            transform: none; }\n  .home-img:nth-child(4) {\n    left: 0;\n    -webkit-transform: none;\n            transform: none;\n    margin-bottom: 0px; }\n  .home-img img {\n    max-width: 500px;\n    -webkit-animation: example 1s;\n    /* Safari 4.0 - 8.0 */\n    animation: example 1s;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .home-img img {\n        max-width: none;\n        width: 100vw; } }\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.logo {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  height: 62px;\n  width: 446px;\n  z-index: -1;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: example .1s 10;\n  /* Safari 4.0 - 8.0 */\n  animation: example .1s 10;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .logo {\n      width: 265px; } }\n  .logo h1 {\n    font-family: Reservation;\n    letter-spacing: 35px;\n    font-size: 50px;\n    margin: 0;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .logo h1 {\n        font-size: 30px;\n        letter-spacing: 20px; } }\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.collection-img {\n  position: relative;\n  width: 100%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 500px;\n  margin-bottom: 100px; }\n  .collection-img:nth-child(1n) {\n    left: 100%;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  .collection-img:nth-child(2n) {\n    left: 0;\n    -webkit-transform: none;\n            transform: none; }\n  .collection-img:nth-child(3n) {\n    left: 0;\n    -webkit-transform: none;\n            transform: none;\n    max-width: none; }\n    .collection-img:nth-child(3n) img {\n      max-width: none;\n      width: 100vw;\n      height: auto; }\n  .collection-img:nth-child(8) {\n    margin-bottom: 0px; }\n  .collection-img img {\n    max-width: 500px;\n    -webkit-animation: example 1s;\n    /* Safari 4.0 - 8.0 */\n    animation: example 1s;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .collection-img img {\n        max-width: none;\n        width: 100vw; } }\n\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  background-color: black;\n  opacity: .9;\n  z-index: 9999;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n  .container .main-nav {\n    position: fixed;\n    top: 50%;\n    width: 100vw;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n    .container .main-nav a {\n      text-decoration: none;\n      text-transform: uppercase;\n      font-family: Reservation;\n      color: white;\n      font-size: 13px;\n      letter-spacing: 1px;\n      font-weight: 100;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .container .main-nav a {\n          font-size: 15px; } }\n    .container .main-nav p {\n      margin: 3px; }\n    .container .main-nav ul {\n      display: block;\n      position: relative;\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      color: black;\n      padding: 0; }\n    .container .main-nav li {\n      height: 50%;\n      display: block;\n      margin-bottom: 20px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .container .main-nav li {\n          margin-bottom: 25px; } }\n  .container p {\n    color: black; }\n  .container h1 {\n    color: black; }\n\n.menu-button {\n  position: fixed;\n  left: 20px;\n  top: 20px;\n  z-index: 9999999;\n  height: 65px;\n  width: 65px;\n  text-align: center;\n  cursor: crosshair;\n  line-height: 43px;\n  background-color: black;\n  transition: all .4s ease-in; }\n  .menu-button h1 {\n    font-size: 18px;\n    font-family: Reservation;\n    color: white;\n    transition: all .4s ease-in; }\n  .menu-button:hover h1 {\n    color: yellow; }\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.privacy {\n  width: 500px;\n  text-align: justify;\n  left: 50%;\n  position: relative;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  -webkit-animation: example 1s;\n  /* Safari 4.0 - 8.0 */\n  animation: example 1s;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .privacy {\n      width: 350px;\n      top: 100px; } }\n  .privacy p {\n    font-family: helvetica;\n    font-size: 11px;\n    text-transform: uppercase;\n    margin: 0;\n    padding-top: 20px; }\n\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "/*.................................................................................*/\n.terms {\n  width: 500px;\n  text-align: justify;\n  left: 50%;\n  position: relative;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  -webkit-animation: example 1s;\n  /* Safari 4.0 - 8.0 */\n  animation: example 1s;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n  @media only screen and (min-width: 0px) and (max-width: 767px) {\n    .terms {\n      width: 350px;\n      top: 100px; } }\n  .terms p {\n    font-family: helvetica;\n    font-size: 11px;\n    text-transform: uppercase;\n    margin: 0;\n    padding-top: 20px; }\n\n@-webkit-keyframes example {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div class=\"begin-text\">\n<h1>we are</h1>\n</div>\n\n<div class=\"end-text\">\n<h1>you are not</h1>\n</div>\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>  {{title}} </h1> -->\n<app-logo></app-logo>\n<app-menu></app-menu>\n<router-outlet></router-outlet>\n\n<!-- <p [@myAwesomeAnimation]='state' (click)=\"animateMe()\">I will animate</p> -->\n"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"home-img\"  *ngFor=\"let image of imageElement\" >\n  <img src={{image}}>\n</div> -->\n\n\n<div class=\"home\">\n  <div class=\"home-img\"  *ngFor=\"let image of imageElement\" >\n    <img src={{image}}>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <h1> {{logoElement}} </h1>\n</div>\n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div class=\"collection-img\"  *ngFor=\"let image of collectionElement\" >\n  <img src={{image}}>\n</div>\n"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-nav\">\n    <p *ngFor=\"let menu of menuElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></p>\n</div> -->\n\n<!-- <div class=\"footer-nav\">\n    <p *ngFor=\"let menu of footerElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></p>\n</div> -->\n\n\n\n<div class=\"container\" [@slideAnimation]='state'>\n  <div class=\"main-nav\">\n    <ul>\n      <li (click)=\"animateMe()\" *ngFor=\"let menu of menuElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></li>\n      <li (click)=\"animateMe(); animateMe2()\" *ngFor=\"let menu of footerElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></li>\n    </ul>\n      <!-- <p (click)=\"animateMe()\" *ngFor=\"let menu of menuElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></p>\n      <p (click)=\"animateMe(); animateMe2()\" *ngFor=\"let menu of footerElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></p> -->\n\n  </div>\n\n  <!-- <div class=\"footer-nav\">\n      <p *ngFor=\"let menu of footerElement\"><a [routerLink]=\"['/' + menu]\">{{menu}}</a></p>\n  </div> -->\n\n  <!-- <h1 (click)=\"animateMe()\"> X </h1> -->\n</div>\n<!-- <p [@myAwesomeAnimation]='state' (click)=\"animateMe()\">I will animate</p> -->\n\n\n<div class=\"menu-button\">\n  <h1  (click)=\"animateMe()\"> [ C ] </h1>\n</div>\n"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<div class=\"privacy\">\n  <p>PRIVACY STATEMENT\n----\nSECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?\nWhen you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.\nWhen you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.\nEmail marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.\n<br>\n<br>\n\nSECTION 2 - CONSENT\nHow do you get my consent?\nWhen you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.\nIf we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.\nHow do I withdraw my consent?\nIf after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at cloutnewyork@gmail.com or mailing us at:\nCLOUT NYC\n16 Bagatelle Rd Dix Hills New York US 11746\n<br>\n<br>\nSECTION 3 - DISCLOSURE\nWe may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.\n<br>\n<br>\nSECTION 4 - SHOPIFY\nOur store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.\nYour data is stored through Shopify’s data storage, databases and the general Shopify application. They store your data on a secure server behind a firewall.\nPayment:\nIf you choose a direct payment gateway to complete your purchase, then Shopify stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.\nAll direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover.\nPCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.\nFor more insight, you may also want to read Shopify’s Terms of Service (https://www.shopify.com/legal/terms) or Privacy Statement (https://www.shopify.com/legal/privacy).\n<br>\n<br>\nSECTION 5 - THIRD-PARTY SERVICES\nIn general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.\nHowever, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.\nFor these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.\nIn particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.\nAs an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.\nOnce you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.\nLinks\nWhen you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.\n<br>\n<br>\nSECTION 6 - SECURITY\nTo protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.\nIf you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.\n<br>\n<br>\nSECTION 7 - COOKIES\nHere is a list of cookies that we use. We’ve listed them here so you that you can choose if you want to opt-out of cookies or not.\n_session_id, unique token, sessional, Allows Shopify to store information about your session (referrer, landing page, etc).\n_shopify_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider’s internal stats tracker to record the number of visits\n_shopify_uniq, no data held, expires midnight (relative to the visitor) of the next day, Counts the number of visits to a store by a single customer.\ncart, unique token, persistent for 2 weeks, Stores information about the contents of your cart.\n_secure_session_id, unique token, sessional\nstorefront_digest, unique token, indefinite If the shop has a password, this is used to determine if the current visitor has access.\n<br>\n<br>\nSECTION 8 - AGE OF CONSENT\nBy using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.\n<br>\n<br>\nSECTION 9 - CHANGES TO THIS PRIVACY POLICY\nWe reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.\nIf our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.\nQUESTIONS AND CONTACT INFORMATION\nIf you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at cloutnewyork@gmail.com or by mail at\nCLOUT NYC\n[Re: Privacy Compliance Officer]\n16 Bagatelle Rd Dix Hills New York US 11746\n----</p>\n\n</div>\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div class=\"terms\">\n  <p>TERMS OF SERVICE\n  -----\n  OVERVIEW\n  This website is operated by CLOUT NYC. Throughout the site, the terms “we”, “us” and “our” refer to CLOUT NYC. CLOUT NYC offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.\n  By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.\n  Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.\n  Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.\n  Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.\n  <br>\n  <br>\n  SECTION 1 - ONLINE STORE TERMS\n  By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.\n  You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).\n  You must not transmit any worms or viruses or any code of a destructive nature.\n  A breach or violation of any of the Terms will result in an immediate termination of your Services.\n  <br>\n  <br>\n  SECTION 2 - GENERAL CONDITIONS\n  We reserve the right to refuse service to anyone for any reason at any time.\n  You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.\n  You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.\n  The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.\n  <br>\n  <br>\n  SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION\n  We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.\n  This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.\n  <br>\n  <br>\n  SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES\n  Prices for our products are subject to change without notice.\n  We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.\n  We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.\n  <br>\n  <br>\n  SECTION 5 - PRODUCTS OR SERVICES (if applicable)\n  Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.\n  We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.\n  We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.\n  We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.\n  <br>\n  <br>\n  SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION\n  We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.\n  You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.\n  For more detail, please review our Returns Policy.\n  <br>\n  <br>\n  SECTION 7 - OPTIONAL TOOLS\n  We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.\n  You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.\n  Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).\n  We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.\n  <br>\n  <br>\n  SECTION 8 - THIRD-PARTY LINKS\n  Certain content, products and services available via our Service may include materials from third-parties.\n  Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.\n  We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.\n  <br>\n  <br>\n  SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS\n  If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.\n  We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.\n  You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.\n  <br>\n  <br>\n  SECTION 10 - PERSONAL INFORMATION\n  Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.\n  <br>\n  <br>\n  SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS\n  Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).\n  We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.\n  <br>\n  <br>\n  SECTION 12 - PROHIBITED USES\n  In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.\n  <br>\n  <br>\n  SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY\n  We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.\n  We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\n  You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.\n  You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.\n  In no case shall CLOUT NYC, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.\n  <br>\n  <br>\n  SECTION 14 - INDEMNIFICATION\n  You agree to indemnify, defend and hold harmless CLOUT NYC and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.\n  <br>\n  <br>\n  SECTION 15 - SEVERABILITY\n  In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.\n  <br>\n  <br>\n  SECTION 16 - TERMINATION\n  The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.\n  These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.\n  If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).\n  <br>\n  <br>\n  SECTION 17 - ENTIRE AGREEMENT\n  The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.\n  These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).\n  Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.\n  <br>\n  <br>\n  SECTION 18 - GOVERNING LAW\n  These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 16 Bagatelle Rd Dix Hills New York US 11746.\n  <br>\n  <br>\n  SECTION 19 - CHANGES TO TERMS OF SERVICE\n  You can review the most current version of the Terms of Service at any time at this page.\n  We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.\n  <br>\n  <br>\n  SECTION 20 - CONTACT INFORMATION\n  Questions about the Terms of Service should be sent to us at cloutnewyork@gmail.com.\n  --------------------------------------</p>\n\n\n</div>\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animation; });

var animation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('slideAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('small', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        transform: 'translateX(-100%)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        transform: 'translateX(0%)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('small <=> large', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('300ms ease-in')),
]);
//# sourceMappingURL=/Users/Daniel/Desktop/cloutnyc/src/animations.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.bundle.map
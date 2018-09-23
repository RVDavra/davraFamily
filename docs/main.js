(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/add-member/add-member.component */ "./src/app/component/add-member/add-member.component.ts");
/* harmony import */ var _component_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/update-member/update-member.component */ "./src/app/component/update-member/update-member.component.ts");
/* harmony import */ var _component_search_member_search_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/search-member/search-member.component */ "./src/app/component/search-member/search-member.component.ts");
/* harmony import */ var _component_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/detail/detail.component */ "./src/app/component/detail/detail.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'add', component: _component_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_3__["AddMemberComponent"] },
    { path: 'update/:name', component: _component_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_4__["UpdateMemberComponent"] },
    { path: 'search', component: _component_search_member_search_member_component__WEBPACK_IMPORTED_MODULE_5__["SearchMemberComponent"] },
    { path: 'detail/:name', component: _component_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-header [title]=\"title\"></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  float: right; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(db, fireAuth, databaseService, authguard) {
        this.db = db;
        this.fireAuth = fireAuth;
        this.databaseService = databaseService;
        this.authguard = authguard;
        this.title = 'Davra Family';
        authguard.checkLogin();
        if (authguard.isloggedIn) {
            // db.object('/').valueChanges().subscribe(this.handleData.bind(this));
        }
    }
    AppComponent.prototype.handleData = function (data) {
        this.databaseService.setData(data);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _component_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/list-item/list-item.component */ "./src/app/component/list-item/list-item.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/add-member/add-member.component */ "./src/app/component/add-member/add-member.component.ts");
/* harmony import */ var _component_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/update-member/update-member.component */ "./src/app/component/update-member/update-member.component.ts");
/* harmony import */ var _component_search_member_search_member_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/search-member/search-member.component */ "./src/app/component/search-member/search-member.component.ts");
/* harmony import */ var _component_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/detail/detail.component */ "./src/app/component/detail/detail.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/modal/modal.component */ "./src/app/component/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ListItemComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _component_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_10__["AddMemberComponent"],
                _component_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_11__["UpdateMemberComponent"],
                _component_search_member_search_member_component__WEBPACK_IMPORTED_MODULE_12__["SearchMemberComponent"],
                _component_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_services_database_service__WEBPACK_IMPORTED_MODULE_17__["DatabaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/add-member/add-member.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/add-member/add-member.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [title]=\"'Success'\" [message]=\"'Data Added Successfully'\" [disable]=\"!showPopup\"\n  (closePopup)=\"closePopup()\"></app-modal>\n<div class=\"container\">\n  <form class=\"form-container\" name=\"form\">\n    <div class=\"card bg-dark text-white\" *ngIf=\"!isValid\">\n      <div class=\"card-body\">To Submit data must add name and Father name</div>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Name</div>\n      </div>\n      <input #name type=\"text\" class=\"form-control\" name=\"name\" (input)=\"isValidData()\" required>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Father</div>\n      </div>\n      <input #father type=\"text\" class=\"form-control\" name=\"father\" (input)=\"isValidData()\" required>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Mother</div>\n      </div>\n      <input #mother type=\"text\" class=\"form-control\" name=\"mother\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Husband</div>\n      </div>\n      <input #husband type=\"text\" class=\"form-control\" name=\"husband\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Wife</div>\n      </div>\n      <input #wife type=\"text\" class=\"form-control\" name=\"wife\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Contact</div>\n      </div>\n      <input #contact type=\"number\" class=\"form-control\" name=\"contact\">\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #sisterTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(sisterTable,'Sister')\">Add Sister</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #brotherTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(brotherTable,'Brother')\">Add Brother</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #sonTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(sonTable,'Son')\">Add Son</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #daughterTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(daughterTable,'Daughter')\">Add Daughter</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"button-container\">\n      <button type=\"button\" class=\"btn btn-dark\" [disabled]=\"!isValid\" (click)=\"submitData('form')\">Submit</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Back</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/component/add-member/add-member.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/add-member/add-member.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  margin: 20px auto; }\n\n.input-container {\n  margin-top: 10px; }\n\n.label-container {\n  width: 27%; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  font-weight: bold; }\n\n.button-container {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto; }\n\n.button-container button {\n    margin: 10px; }\n"

/***/ }),

/***/ "./src/app/component/add-member/add-member.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/add-member/add-member.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(router, db) {
        this.router = router;
        this.db = db;
        this.isValid = false;
        this.sisterCount = 0;
        this.brotherCount = 0;
        this.sonCount = 0;
        this.daughterCount = 0;
        this.showPopup = false;
    }
    AddMemberComponent.prototype.ngOnInit = function () {
    };
    AddMemberComponent.prototype.submitData = function (element) {
        var data = $('form').serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        console.log(data);
        var finalobj = {};
        finalobj.father = data.father;
        finalobj.mother = data.mother ? data.mother : null;
        finalobj.husband = data.husband ? data.husband : null;
        finalobj.wife = data.wife ? data.wife : null;
        finalobj.contact = data.contact ? +data.contact : null;
        finalobj.brother = [null];
        finalobj.sister = [null];
        finalobj.son = [null];
        finalobj.daughter = [null];
        for (var i = 1; i <= this.sisterCount; i++) {
            finalobj.sister.push(data['Sister' + i]);
        }
        for (var i = 1; i <= this.brotherCount; i++) {
            finalobj.brother.push(data['Brother' + i]);
        }
        for (var i = 1; i <= this.sonCount; i++) {
            finalobj.son.push(data['Son' + i]);
        }
        for (var i = 1; i <= this.daughterCount; i++) {
            finalobj.daughter.push(data['Daughter' + i]);
        }
        this.db.object(data.name).set(finalobj).then(this.showPopUp.bind(this));
        console.log(finalobj);
    };
    AddMemberComponent.prototype.isValidData = function () {
        if (this.name.nativeElement.value != '' && this.father.nativeElement.value != '') {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    };
    AddMemberComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/home');
    };
    AddMemberComponent.prototype.addRow = function (element, type) {
        console.log(element);
        var newRow = document.createElement("tr");
        var count = this.IncrementCount(type);
        var input = '<td class="col-md-10">' +
            '<div class="input-group input-container">' +
            '<div class="input-group-prepend label-container">' +
            '<div class="input-group-text label">' + type + count + '</div>' +
            '</div>' +
            '<input type="text" class="form-control" name="' + type + count + '"/></td>' +
            '</div>';
        newRow.innerHTML = input;
        element.appendChild(newRow);
    };
    AddMemberComponent.prototype.IncrementCount = function (type) {
        if (type === 'Sister') {
            this.sisterCount++;
            return this.sisterCount;
        }
        if (type === "Brother") {
            this.brotherCount++;
            return this.brotherCount;
        }
        if (type === "Son") {
            this.sonCount++;
            return this.sonCount;
        }
        if (type === "Daughter") {
            this.daughterCount++;
            return this.daughterCount;
        }
    };
    AddMemberComponent.prototype.showPopUp = function (data) {
        console.log(data);
        this.showPopup = true;
    };
    AddMemberComponent.prototype.closePopup = function () {
        this.showPopup = false;
        this.goBack();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddMemberComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('father'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddMemberComponent.prototype, "father", void 0);
    AddMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! ./add-member.component.html */ "./src/app/component/add-member/add-member.component.html"),
            styles: [__webpack_require__(/*! ./add-member.component.scss */ "./src/app/component/add-member/add-member.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/component/detail/detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/detail/detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\r\n\r\n    <h4 class=\"text-center\">{{name}}</h4>\r\n\r\n    <div class=\"card detail-card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col text-center font-weight-bold label no-wrap\">Father Name</div>\r\n                <h5 class=\"col btn btn-light font-weight-bold\" (click)=\"navigateToDetail(personalInfo.father)\">{{personalInfo.father}}</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"personalInfo.mother\">\r\n            <div class=\"row\">\r\n                <div class=\"col text-center font-weight-bold label\">Mother Name</div>\r\n                <h5 class=\"col btn btn-light font-weight-bold\" (click)=\"navigateToDetail(personalInfo.mother)\">{{personalInfo.mother}}</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"personalInfo.husband\">\r\n            <div class=\"row\">\r\n                <div class=\"col text-center font-weight-bold label\">Contact</div>\r\n                <h5 class=\"col btn btn-light font-weight-bold\" (click)=\"navigateToDetail(personalInfo.husband)\">{{personalInfo.husband}}</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"personalInfo.wife\">\r\n            <div class=\"row\">\r\n                <div class=\"col text-center font-weight-bold label\">Contact</div>\r\n                <h5 class=\"col btn btn-light font-weight-bold\" (click)=\"navigateToDetail(personalInfo.wife)\">{{personalInfo.wife}}</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\" *ngIf=\"personalInfo.contact\">\r\n            <div class=\"row\">\r\n                <div class=\"col text-center font-weight-bold label\">Contact</div>\r\n                <a class=\"col btn btn-light font-weight-bold\" [href]=\"'tel:'+personalInfo.contact\">{{personalInfo.contact}}</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"personalInfo.brother\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of personalInfo.brother\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Brothers</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"personalInfo.sister\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of personalInfo.sister\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Sisters</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"personalInfo.son\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of personalInfo.son\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Sons</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"personalInfo.daughter\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of personalInfo.daughter\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Daughters</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"fatherInfo && fatherInfo.brother\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of fatherInfo.brother\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Uncles</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"fatherInfo && fatherInfo.sister\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of fatherInfo.sister\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Aunts</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"motherInfo && motherInfo.brother\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of motherInfo.brother\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Maternal Uncles</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"card detail-card\" *ngIf=\"motherInfo && motherInfo.sister\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let b of motherInfo.sister\">\r\n                    <h5 *ngIf=\"!b\" class=\"text-center text-center font-weight-bold\">Maternal Aunts</h5>\r\n                    <h5 *ngIf=\"b\" class=\"col text-center btn btn-light font-weight-bold\" (click)=\"navigateToDetail(b)\">{{b}}</h5>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row button-container\">\r\n        <button class=\"col btn btn-primary\" (click)=\"goToUpdate()\">Update</button>\r\n        <div class=\"col\"></div>\r\n        <button class=\"col btn btn-light\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/detail/detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/detail/detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-card {\n  margin-top: 20px; }\n\n.label {\n  padding: .375rem .75rem;\n  white-space: nowrap; }\n\n.no-wrap {\n  white-space: nowrap; }\n\n.button-container {\n  margin-top: 10px; }\n\n.button-container button {\n    margin: 10px; }\n"

/***/ }),

/***/ "./src/app/component/detail/detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/detail/detail.component.ts ***!
  \******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(databaseService, route, router, location, cdr) {
        this.databaseService = databaseService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.cdr = cdr;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.paramMap.get('name');
        this.personalInfo = this.databaseService.getDataOfPerson(this.name);
        this.fatherInfo = this.databaseService.getDataOfPerson(this.personalInfo.father);
        this.motherInfo = this.databaseService.getDataOfPerson(this.personalInfo.mother);
    };
    DetailComponent.prototype.ngDoCheck = function () {
        this.name = this.route.snapshot.paramMap.get('name');
        this.resetData(this.name);
    };
    DetailComponent.prototype.navigateToDetail = function (newname) {
        if (this.databaseService.getDataOfPerson(newname)) {
            this.router.navigateByUrl("/detail/" + newname);
        }
    };
    DetailComponent.prototype.resetData = function (newname) {
        this.name = newname;
        this.personalInfo = this.databaseService.getDataOfPerson(this.name);
        this.fatherInfo = this.databaseService.getDataOfPerson(this.personalInfo.father);
        this.motherInfo = this.databaseService.getDataOfPerson(this.personalInfo.mother);
    };
    DetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailComponent.prototype.goToUpdate = function () {
        this.router.navigateByUrl("/update/" + this.name);
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/component/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/component/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/component/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <button class=\"navbar-brand btn btn-dark\" (click)=\"navigateToDetail('/home')\">{{title}}</button>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"authguard.isloggedIn\">\n        <button class=\"nav-link btn btn-dark\" (click)=\"navigateToDetail('/add')\">Add</button>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authguard.isloggedIn\">\n        <button class=\"nav-link btn btn-dark\" (click)=\"navigateToDetail('/search')\">Search</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"nav-link btn btn-dark\" (click)=\"logout()\">Logout</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authguard.service */ "./src/app/services/authguard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authguard) {
        this.router = router;
        this.authguard = authguard;
        this.isLoggedIn = false;
        this.isLoggedIn = this.authguard.isloggedIn;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.navigateToDetail = function (url) {
        this.router.navigateByUrl(url);
    };
    HeaderComponent.prototype.logout = function () {
        this.authguard.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/component/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_2__["AuthguardService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"nameArray\" class=\"d-flex flex-wrap justify-content-center\">\n    <app-list-item [name]=\"name\" class=\"flex-fill\" *ngFor=\"let name of nameArray\"></app-list-item>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(db, databaseService) {
        this.db = db;
        this.databaseService = databaseService;
        this.nameArray = [];
        if (!databaseService.data) {
            db.object('/').valueChanges().subscribe(this.handleData.bind(this));
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.databaseService.isDataAvailable()) {
            this.nameArray = this.databaseService.getNameArray();
        }
    };
    HomeComponent.prototype.handleData = function (data) {
        this.databaseService.setData(data);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/component/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/list-item/list-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/list-item/list-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card list-item\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title title\">{{name}}</h4>\n    <p class=\"card-text contact\">Contact No: \n      <a [href]=\"getOpenLink()\" class=\"btn btn-sm btn-light\" *ngIf=\"personalInfo.contact\">{{getContact()}}</a>\n      <span *ngIf=\"!personalInfo.contact\">{{ getContact() }}</span>\n    </p>\n    <!-- <a [href]=\"'/detail/'+name\" class=\"btn btn-primary\">See Profile</a> -->\n    <button class=\"btn btn-primary\" (click)=\"navigateToDetail()\">See Profile</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/list-item/list-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/list-item/list-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\n  margin: 10px; }\n\n.title {\n  height: 33px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.contact {\n  height: 31px; }\n"

/***/ }),

/***/ "./src/app/component/list-item/list-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/list-item/list-item.component.ts ***!
  \************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
    }
    ListItemComponent.prototype.ngOnInit = function () {
        this.personalInfo = this.databaseService.getDataOfPerson(this.name);
    };
    ListItemComponent.prototype.getContact = function () {
        return this.personalInfo.contact ? this.personalInfo.contact : "Not Available";
    };
    ListItemComponent.prototype.getOpenLink = function () {
        if (this.personalInfo.contact != undefined) {
            return 'tel:' + this.personalInfo.contact;
        }
        else {
            return '';
        }
    };
    ListItemComponent.prototype.openCall = function () {
        if (this.personalInfo.contact != undefined) {
            return 'tel:' + this.personalInfo.contact;
        }
        else {
            return '';
        }
    };
    ListItemComponent.prototype.navigateToDetail = function () {
        this.router.navigateByUrl("/detail/" + this.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "name", void 0);
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/component/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.scss */ "./src/app/component/list-item/list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [title]=\"'Authentication failed'\" [message]=\"'Email or password is Wrong'\" [disable]=\"!showPopup\"\n  (closePopup)=\"closePopup()\"></app-modal>\n<div class=\"container jumbotron login-container\">\n  <h4>Login</h4>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input #email type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input #password type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\">\n    </div>\n  </form>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(email.value,password.value)\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  width: 400px;\n  margin: 20px auto; }\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authGuard, router) {
        this.authGuard = authGuard;
        this.router = router;
        this.showPopup = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var promise = this.authGuard.signInWithEmailPassWord(email, password);
        promise.then(this.loginSuccessful.bind(this))
            .catch(this.showPopUp.bind(this));
    };
    LoginComponent.prototype.loginSuccessful = function (data) {
        this.authGuard.login(data);
        this.router.navigateByUrl('/home');
    };
    LoginComponent.prototype.showPopUp = function (data) {
        console.log(data);
        this.showPopup = true;
    };
    LoginComponent.prototype.closePopup = function () {
        this.showPopup = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/modal/modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/modal/modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" id=\"myModal\" [ngClass]=\"{'display':!disable}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\"> {{ title }} </h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          {{message}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/component/modal/modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/modal/modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/component/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.disable = true;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.close = function () {
        this.disable = true;
        this.closePopup.emit("false");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable'),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "disable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('closePopup'),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closePopup", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/component/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/component/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/component/search-member/search-member.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/search-member/search-member.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-gruop search-container\">\n    <label for=\"search text\">Type Here to Search:</label>\n    <input #searchBox type=\"text\" class=\"form-control\" id=\"usr\" (keyup)=\"search(searchBox.value)\">\n  </div>\n  <div class=\"container\">\n      <div *ngIf=\"nameArray\" class=\"d-flex flex-wrap justify-content-center\">\n        <app-list-item [name]=\"name\" class=\"flex-fill\" *ngFor=\"let name of searchData\"></app-list-item>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/search-member/search-member.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/search-member/search-member.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  margin-top: 20px; }\n\n.search-btn {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/component/search-member/search-member.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/search-member/search-member.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMemberComponent", function() { return SearchMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchMemberComponent = /** @class */ (function () {
    function SearchMemberComponent(databaseService) {
        this.databaseService = databaseService;
        this.nameArray = [];
        this.searchData = [];
    }
    SearchMemberComponent.prototype.ngOnInit = function () {
        this.nameArray = this.databaseService.getNameArray();
    };
    SearchMemberComponent.prototype.search = function (query) {
        this.searchData = this.nameArray.filter(function (value, index, array) {
            return value.toLowerCase().includes(query.toLowerCase());
        });
        console.log(this.searchData);
        console.log(this.databaseService.getNameArray());
    };
    SearchMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-member',
            template: __webpack_require__(/*! ./search-member.component.html */ "./src/app/component/search-member/search-member.component.html"),
            styles: [__webpack_require__(/*! ./search-member.component.scss */ "./src/app/component/search-member/search-member.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], SearchMemberComponent);
    return SearchMemberComponent;
}());



/***/ }),

/***/ "./src/app/component/update-member/update-member.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/update-member/update-member.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal [title]=\"'Success'\" [message]=\"'Data Added Successfully'\" [disable]=\"!showPopup\"\n  (closePopup)=\"closePopup()\"></app-modal>\n<div class=\"container\">\n  <form class=\"form-container\" name=\"form\">\n    <div class=\"card bg-dark text-white\" *ngIf=\"!isValid\">\n      <div class=\"card-body\">To Submit data must add name and Father name</div>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Name</div>\n      </div>\n      <input #name type=\"text\" class=\"form-control\" name=\"name\" (input)=\"isValidData()\" [value]=\"personName\" required>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Father</div>\n      </div>\n      <input #father type=\"text\" class=\"form-control\" name=\"father\" (input)=\"isValidData()\" [value]=\"personalInfo.father\" required>\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Mother</div>\n      </div>\n      <input #mother type=\"text\" class=\"form-control\" name=\"mother\" [value]=\"personalInfo.mother? personalInfo.mother: ''\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Husband</div>\n      </div>\n      <input #husband type=\"text\" class=\"form-control\" name=\"husband\" [value]=\"personalInfo.husband? personalInfo.husband: ''\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Wife</div>\n      </div>\n      <input #wife type=\"text\" class=\"form-control\" name=\"wife\" [value]=\"personalInfo.wife? personalInfo.wife: ''\">\n    </div>\n    <div class=\"input-group input-container\">\n      <div class=\"input-group-prepend label-container\">\n        <div class=\"input-group-text label\">Contact</div>\n      </div>\n      <input #contact type=\"number\" class=\"form-control\" name=\"contact\" [value]=\"personalInfo.contact? personalInfo.contact: ''\">\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #sisterTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(sisterTable,'Sister')\">Add Sister</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #brotherTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(brotherTable,'Brother')\">Add Brother</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #sonTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(sonTable,'Son')\">Add Son</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"input-container\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody #daughterTable>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRow(daughterTable,'Daughter')\">Add Daughter</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"button-container\">\n      <button type=\"button\" class=\"btn btn-dark\" [disabled]=\"!isValid\" (click)=\"submitData('form')\">Submit</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Back</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/component/update-member/update-member.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/update-member/update-member.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  margin: 20px auto; }\n\n.input-container {\n  margin-top: 10px; }\n\n.label-container {\n  width: 27%; }\n\n.label {\n  width: 100%;\n  text-align: center;\n  font-weight: bold; }\n\n.button-container {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto; }\n\n.button-container button {\n    margin: 10px; }\n"

/***/ }),

/***/ "./src/app/component/update-member/update-member.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/update-member/update-member.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMemberComponent", function() { return UpdateMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateMemberComponent = /** @class */ (function () {
    function UpdateMemberComponent(route, router, db, databaseService, location) {
        this.route = route;
        this.router = router;
        this.db = db;
        this.databaseService = databaseService;
        this.location = location;
        this.isValid = true;
        this.sisterCount = 0;
        this.brotherCount = 0;
        this.sonCount = 0;
        this.daughterCount = 0;
        this.showPopup = false;
    }
    UpdateMemberComponent.prototype.ngOnInit = function () {
        this.personName = this.route.snapshot.paramMap.get('name');
        this.personalInfo = this.databaseService.getDataOfPerson(this.personName);
        if (this.personalInfo.sister) {
            for (var _i = 0, _a = this.personalInfo.sister; _i < _a.length; _i++) {
                var data = _a[_i];
                if (data) {
                    this.addRow(this.sisterTable.nativeElement, 'Sister', data);
                }
            }
        }
        if (this.personalInfo.brother) {
            for (var _b = 0, _c = this.personalInfo.brother; _b < _c.length; _b++) {
                var data = _c[_b];
                if (data) {
                    this.addRow(this.brotherTable.nativeElement, 'Brother', data);
                }
            }
        }
        if (this.personalInfo.son) {
            for (var _d = 0, _e = this.personalInfo.son; _d < _e.length; _d++) {
                var data = _e[_d];
                if (data) {
                    this.addRow(this.sonTable.nativeElement, 'Son', data);
                }
            }
        }
        if (this.personalInfo.daughter) {
            for (var _f = 0, _g = this.personalInfo.daughter; _f < _g.length; _f++) {
                var data = _g[_f];
                if (data) {
                    this.addRow(this.daughterTable.nativeElement, 'Daughter', data);
                }
            }
        }
    };
    UpdateMemberComponent.prototype.submitData = function (element) {
        var data = $('form').serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        console.log(this.sisterCount);
        console.log(data);
        var finalobj = {};
        finalobj.father = data.father;
        finalobj.mother = data.mother ? data.mother : null;
        finalobj.husband = data.husband ? data.husband : null;
        finalobj.wife = data.wife ? data.wife : null;
        finalobj.contact = data.contact ? +data.contact : null;
        finalobj.brother = [null];
        finalobj.sister = [null];
        finalobj.son = [null];
        finalobj.daughter = [null];
        for (var i = 1; i <= this.sisterCount; i++) {
            finalobj.sister.push(data['Sister' + i]);
        }
        for (var i = 1; i <= this.brotherCount; i++) {
            finalobj.brother.push(data['Brother' + i]);
        }
        for (var i = 1; i <= this.sonCount; i++) {
            finalobj.son.push(data['Son' + i]);
        }
        for (var i = 1; i <= this.daughterCount; i++) {
            finalobj.daughter.push(data['Daughter' + i]);
        }
        this.db.object(data.name).set(finalobj).then(this.showPopUp.bind(this));
        console.log(finalobj);
    };
    UpdateMemberComponent.prototype.isValidData = function () {
        if (this.name.nativeElement.value != '' && this.father.nativeElement.value != '') {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    };
    UpdateMemberComponent.prototype.goBack = function () {
        this.location.back();
    };
    UpdateMemberComponent.prototype.addRow = function (element, type, value) {
        if (value === void 0) { value = ''; }
        var newRow = document.createElement("tr");
        var count = this.IncrementCount(type);
        var input = '<td class="col-md-10">' +
            '<div class="input-group input-container">' +
            '<div class="input-group-prepend label-container">' +
            '<div class="input-group-text label">' + type + count + '</div>' +
            '</div>' +
            '<input type="text" class="form-control" name="' + type + count + '" value="' + value + '"/></td>' +
            '</div>';
        newRow.innerHTML = input;
        element.appendChild(newRow);
    };
    UpdateMemberComponent.prototype.IncrementCount = function (type) {
        if (type === 'Sister') {
            this.sisterCount++;
            return this.sisterCount;
        }
        if (type === "Brother") {
            this.brotherCount++;
            return this.brotherCount;
        }
        if (type === "Son") {
            this.sonCount++;
            return this.sonCount;
        }
        if (type === "Daughter") {
            this.daughterCount++;
            return this.daughterCount;
        }
    };
    UpdateMemberComponent.prototype.showPopUp = function (data) {
        console.log(data);
        this.showPopup = true;
    };
    UpdateMemberComponent.prototype.closePopup = function () {
        this.showPopup = false;
        this.goBack();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('father'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "father", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sisterTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "sisterTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('brotherTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "brotherTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sonTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "sonTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('daughterTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UpdateMemberComponent.prototype, "daughterTable", void 0);
    UpdateMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-member',
            template: __webpack_require__(/*! ./update-member.component.html */ "./src/app/component/update-member/update-member.component.html"),
            styles: [__webpack_require__(/*! ./update-member.component.scss */ "./src/app/component/update-member/update-member.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UpdateMemberComponent);
    return UpdateMemberComponent;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(router, fireAuth) {
        this.router = router;
        this.fireAuth = fireAuth;
        this.isloggedIn = false;
    }
    AuthguardService.prototype.checkLogin = function () {
        if (window.localStorage.getItem('logdata')) {
            this.isloggedIn = true;
            this.router.navigateByUrl("/home");
        }
        if (!this.isloggedIn) {
            this.router.navigateByUrl("/login");
        }
    };
    AuthguardService.prototype.login = function (data) {
        console.log(data);
        window.localStorage.setItem('logdata', 'done');
        this.isloggedIn = true;
    };
    AuthguardService.prototype.signInWithEmailPassWord = function (email, password) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthguardService.prototype.logout = function () {
        this.isloggedIn = false;
        window.localStorage.removeItem('logdata');
        this.router.navigateByUrl("/login");
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
        this.nameArray = [];
    }
    DatabaseService.prototype.isDataAvailable = function () {
        if (this.data === null) {
            return false;
        }
        else {
            return true;
        }
    };
    DatabaseService.prototype.setData = function (data) {
        this.data = data;
        for (var key in data) {
            if (!this.nameArray.includes(key)) {
                this.nameArray.push(key);
            }
        }
    };
    DatabaseService.prototype.getData = function () {
        return this.data;
    };
    DatabaseService.prototype.getNameArray = function () {
        return this.nameArray;
    };
    DatabaseService.prototype.getDataOfPerson = function (name) {
        return this.data[name];
    };
    return DatabaseService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDHyQiQ3BX6NtRCQNyXwwlvssVhg1Fmrw0",
        authDomain: "davrafamily-c404b.firebaseapp.com",
        databaseURL: "https://davrafamily-c404b.firebaseio.com",
        projectId: "davrafamily-c404b",
        storageBucket: "davrafamily-c404b.appspot.com",
        messagingSenderId: "236511243135"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git\davra-family\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
(self["webpackChunkteacher"] = self["webpackChunkteacher"] || []).push([["src_app_module_user_user_module_ts"],{

/***/ 5757:
/*!*******************************************************************!*\
  !*** ./src/app/component/user/user-login/user-login.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginComponent": () => (/* binding */ UserLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/form */ 9671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);










function UserLoginComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function UserLoginComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

let UserLoginComponent = /*#__PURE__*/(() => {
  class UserLoginComponent {
    constructor() {}

    ngOnInit() {}

  }

  UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
    return new (t || UserLoginComponent)();
  };

  UserLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UserLoginComponent,
    selectors: [["app-user-login"]],
    decls: 19,
    vars: 2,
    consts: [[1, "container"], ["nz-form", ""], [3, "nzPrefix"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "\u5DE5\u53F7"], ["userIcon", ""], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "\u5BC6\u7801"], ["lockIcon", ""], ["nz-button", "", "nzType", "primary", 1, "login-form-margin"], ["routerLink", "/user/signup"], ["nz-icon", ""], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-5 -2 24 24", "width", "32", "fill", "currentColor"], ["d", "M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-6 -2 24 24", "width", "32", "fill", "currentColor"], ["d", "M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0zM4 8.34A5.99 5.99 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"]],
    template: function UserLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserLoginComponent_ng_template_6_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserLoginComponent_ng_template_12_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u6216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u7ACB\u5373\u6CE8\u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r2);
      }
    },
    directives: [ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective],
    styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUFSIiwiZmlsZSI6InVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG59Il19 */"]
  });
  return UserLoginComponent;
})();

/***/ }),

/***/ 3160:
/*!*********************************************************************!*\
  !*** ./src/app/component/user/user-signup/user-signup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSignupComponent": () => (/* binding */ UserSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/form */ 9671);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6188);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);








let UserSignupComponent = /*#__PURE__*/(() => {
  class UserSignupComponent {
    constructor() {}

    ngOnInit() {}

  }

  UserSignupComponent.ɵfac = function UserSignupComponent_Factory(t) {
    return new (t || UserSignupComponent)();
  };

  UserSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UserSignupComponent,
    selectors: [["app-user-signup"]],
    decls: 36,
    vars: 26,
    consts: [[1, "container"], ["nz-form", ""], ["nzFor", "name", "nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["type", "text", "id", "name", "nz-input", ""], ["nzFor", "year", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzMode", "year", "nzPlaceHolder", " "], ["nzFor", "telephone", 3, "nzSm", "nzXs"], ["type", "tel", "id", "telephone", "nz-input", ""], ["nzFor", "email", 3, "nzSm", "nzXs"], ["type", "email", "id", "email", "formControlName", "email", "nz-input", ""], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["type", "password", "id", "password", "formControlName", "password", "nz-input", ""], ["nzFor", "checkPassword", "nzRequired", "", 3, "nzSm", "nzXs"], ["type", "password", "id", "checkPassword", "formControlName", "checkPassword", "nz-input", ""], ["nz-row", "", 1, "register-area"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]],
    template: function UserSignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u59D3\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u5165\u804C\u5E74\u4EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-date-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u7535\u8BDD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u90AE\u7BB1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u5BC6\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u786E\u8BA4\u5BC6\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u6CE8\u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 18)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 18)("nzOffset", 6);
      }
    },
    directives: [ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_1__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzDatePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"]],
    styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  display: flex;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .register-are[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBQ1E7RUFDSSxXQUFBO0FBQ1o7QUFHSTtFQUNJLGtCQUFBO0FBRFIiLCJmaWxlIjoidXNlci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgICAgICBuei1kYXRlLXBpY2tlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlZ2lzdGVyLWFyZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG59Il19 */"]
  });
  return UserSignupComponent;
})();

/***/ }),

/***/ 7340:
/*!********************************************!*\
  !*** ./src/app/module/user/user.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 8800);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6188);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 9671);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var src_app_component_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/user/user-login/user-login.component */ 5757);
/* harmony import */ var src_app_component_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/user/user-signup/user-signup.component */ 3160);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.routing.module */ 1457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
 // 通用


 // 布局

 // 数据录入








let UserModule = /*#__PURE__*/(() => {
  class UserModule {}

  UserModule.ɵfac = function UserModule_Factory(t) {
    return new (t || UserModule)();
  };

  UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: UserModule
  });
  UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__.NzDatePickerModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule]]
  });
  return UserModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [src_app_component_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_0__.UserLoginComponent, src_app_component_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_1__.UserSignupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__.NzDatePickerModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule]
  });
})();

/***/ }),

/***/ 1457:
/*!****************************************************!*\
  !*** ./src/app/module/user/user.routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_component_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/user/user-login/user-login.component */ 5757);
/* harmony import */ var src_app_component_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/user/user-signup/user-signup.component */ 3160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [{
  path: 'login',
  component: src_app_component_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_0__.UserLoginComponent
}, {
  path: 'signup',
  component: src_app_component_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_1__.UserSignupComponent
}];
let UserRoutingModule = /*#__PURE__*/(() => {
  class UserRoutingModule {}

  UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
    return new (t || UserRoutingModule)();
  };

  UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: UserRoutingModule
  });
  UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return UserRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 4128:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11yModule": () => (/* binding */ A11yModule),
/* harmony export */   "ActiveDescendantKeyManager": () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   "AriaDescriber": () => (/* binding */ AriaDescriber),
/* harmony export */   "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   "CDK_DESCRIBEDBY_ID_PREFIX": () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   "CdkAriaLive": () => (/* binding */ CdkAriaLive),
/* harmony export */   "CdkMonitorFocus": () => (/* binding */ CdkMonitorFocus),
/* harmony export */   "CdkTrapFocus": () => (/* binding */ CdkTrapFocus),
/* harmony export */   "ConfigurableFocusTrap": () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   "ConfigurableFocusTrapFactory": () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   "EventListenerFocusTrapInertStrategy": () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   "FOCUS_MONITOR_DEFAULT_OPTIONS": () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   "FOCUS_TRAP_INERT_STRATEGY": () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   "FocusKeyManager": () => (/* binding */ FocusKeyManager),
/* harmony export */   "FocusMonitor": () => (/* binding */ FocusMonitor),
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "FocusTrapFactory": () => (/* binding */ FocusTrapFactory),
/* harmony export */   "HighContrastModeDetector": () => (/* binding */ HighContrastModeDetector),
/* harmony export */   "INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   "INPUT_MODALITY_DETECTOR_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   "InputModalityDetector": () => (/* binding */ InputModalityDetector),
/* harmony export */   "InteractivityChecker": () => (/* binding */ InteractivityChecker),
/* harmony export */   "IsFocusableConfig": () => (/* binding */ IsFocusableConfig),
/* harmony export */   "LIVE_ANNOUNCER_DEFAULT_OPTIONS": () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   "ListKeyManager": () => (/* binding */ ListKeyManager),
/* harmony export */   "LiveAnnouncer": () => (/* binding */ LiveAnnouncer),
/* harmony export */   "MESSAGES_CONTAINER_ID": () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   "isFakeMousedownFromScreenReader": () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   "isFakeTouchstartFromScreenReader": () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */

const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** ID used for the body container where all messages are appended. */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */

const messageRegistry = /*#__PURE__*/new Map();
/** Container for all registered messages. */

let messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

let AriaDescriber = /*#__PURE__*/(() => {
  class AriaDescriber {
    constructor(_document) {
      this._document = _document;
    }

    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }

      const key = getKey(message, role);

      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message);
        messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }

      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }

    removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }

      const key = getKey(message, role);

      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      } // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.


      if (typeof message === 'string') {
        const registeredMessage = messageRegistry.get(key);

        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }

      if (messagesContainer && messagesContainer.childNodes.length === 0) {
        this._deleteMessagesContainer();
      }
    }
    /** Unregisters all created message elements and removes the message container. */


    ngOnDestroy() {
      const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);

      for (let i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);

        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }

      if (messagesContainer) {
        this._deleteMessagesContainer();
      }

      messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */


    _createMessageElement(message, role) {
      const messageElement = this._document.createElement('div');

      setMessageId(messageElement);
      messageElement.textContent = message;

      if (role) {
        messageElement.setAttribute('role', role);
      }

      this._createMessagesContainer();

      messagesContainer.appendChild(messageElement);
      messageRegistry.set(getKey(message, role), {
        messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */


    _deleteMessageElement(key) {
      var _a;

      const registeredMessage = messageRegistry.get(key);
      (_a = registeredMessage === null || registeredMessage === void 0 ? void 0 : registeredMessage.messageElement) === null || _a === void 0 ? void 0 : _a.remove();
      messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */


    _createMessagesContainer() {
      if (!messagesContainer) {
        const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.


        preExistingContainer === null || preExistingContainer === void 0 ? void 0 : preExistingContainer.remove();
        messagesContainer = this._document.createElement('div');
        messagesContainer.id = MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
        // being searchable by the browser's Ctrl + F functionality.
        // Screen-readers will still read the description for elements with aria-describedby even
        // when the description element is not visible.

        messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
        // the description element doesn't impact page layout.

        messagesContainer.classList.add('cdk-visually-hidden');

        this._document.body.appendChild(messagesContainer);
      }
    }
    /** Deletes the global messages container. */


    _deleteMessagesContainer() {
      if (messagesContainer) {
        messagesContainer.remove();
        messagesContainer = null;
      }
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */


    _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */


    _addMessageReference(element, key) {
      const registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.

      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */


    _removeMessageReference(element, key) {
      const registeredMessage = messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */


    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */


    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }

      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }

      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.

      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */


    _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }

  }

  AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
    return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };

  AriaDescriber.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AriaDescriber,
    factory: AriaDescriber.ɵfac,
    providedIn: 'root'
  });
  return AriaDescriber;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.TAB:
        this.tabOut.next();
        return;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }

}
/**
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


let InteractivityChecker = /*#__PURE__*/(() => {
  class InteractivityChecker {
    constructor(_platform) {
      this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */


    isDisabled(element) {
      // This does not capture some cases, such as a non-form control with a disabled attribute or
      // a form control inside of a disabled form, but should capture the most common cases.
      return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */


    isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */


    isTabbable(element) {
      // Nothing is tabbable on the server 😎
      if (!this._platform.isBrowser) {
        return false;
      }

      const frameElement = getFrameElement(getWindow(element));

      if (frameElement) {
        // Frame elements inherit their tabindex onto all child elements.
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        } // Browsers disable tabbing to an element inside of an invisible frame.


        if (!this.isVisible(frameElement)) {
          return false;
        }
      }

      let nodeName = element.nodeName.toLowerCase();
      let tabIndexValue = getTabIndexValue(element);

      if (element.hasAttribute('contenteditable')) {
        return tabIndexValue !== -1;
      }

      if (nodeName === 'iframe' || nodeName === 'object') {
        // The frame or object's content may be tabbable depending on the content, but it's
        // not possibly to reliably detect the content of the frames. We always consider such
        // elements as non-tabbable.
        return false;
      } // In iOS, the browser only considers some specific elements as tabbable.


      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }

      if (nodeName === 'audio') {
        // Audio elements without controls enabled are never tabbable, regardless
        // of the tabindex attribute explicitly being set.
        if (!element.hasAttribute('controls')) {
          return false;
        } // Audio elements with controls are by default tabbable unless the
        // tabindex attribute is set to `-1` explicitly.


        return tabIndexValue !== -1;
      }

      if (nodeName === 'video') {
        // For all video elements, if the tabindex attribute is set to `-1`, the video
        // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
        // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
        // tabindex attribute is the source of truth here.
        if (tabIndexValue === -1) {
          return false;
        } // If the tabindex is explicitly set, and not `-1` (as per check before), the
        // video element is always tabbable (regardless of whether it has controls or not).


        if (tabIndexValue !== null) {
          return true;
        } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
        // has controls enabled. Firefox is special as videos are always tabbable regardless
        // of whether there are controls or not.


        return this._platform.FIREFOX || element.hasAttribute('controls');
      }

      return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */


    isFocusable(element, config) {
      // Perform checks in order of left to most expensive.
      // Again, naive approach that does not capture many edge cases and browser quirks.
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
    }

  }

  InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
    return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform));
  };

  InteractivityChecker.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InteractivityChecker,
    factory: InteractivityChecker.ɵfac,
    providedIn: 'root'
  });
  return InteractivityChecker;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch (_a) {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }

    const children = root.children;

    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    const children = root.children;

    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


let FocusTrapFactory = /*#__PURE__*/(() => {
  class FocusTrapFactory {
    constructor(_checker, _ngZone, _document) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */


    create(element, deferCaptureElements = false) {
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }

  }

  FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
    return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };

  FocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FocusTrapFactory,
    factory: FocusTrapFactory.ɵfac,
    providedIn: 'root'
  });
  return FocusTrapFactory;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Directive for trapping focus within a region. */


let CdkTrapFocus = /*#__PURE__*/(() => {
  class CdkTrapFocus {
    constructor(_elementRef, _focusTrapFactory,
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 13.0.0
     */
    _document) {
      this._elementRef = _elementRef;
      this._focusTrapFactory = _focusTrapFactory;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */

      this._previouslyFocusedElement = null;
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /** Whether the focus trap is active. */


    get enabled() {
      return this.focusTrap.enabled;
    }

    set enabled(value) {
      this.focusTrap.enabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
    }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */


    get autoCapture() {
      return this._autoCapture;
    }

    set autoCapture(value) {
      this._autoCapture = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
    }

    ngOnDestroy() {
      this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
      // element now that the trapped region is being destroyed.

      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();

        this._previouslyFocusedElement = null;
      }
    }

    ngAfterContentInit() {
      this.focusTrap.attachAnchors();

      if (this.autoCapture) {
        this._captureFocus();
      }
    }

    ngDoCheck() {
      if (!this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }

    ngOnChanges(changes) {
      const autoCaptureChange = changes['autoCapture'];

      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
        this._captureFocus();
      }
    }

    _captureFocus() {
      this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getFocusedElementPierceShadowDom)();
      this.focusTrap.focusInitialElementWhenReady();
    }

  }

  CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
    return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };

  CdkTrapFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkTrapFocus,
    selectors: [["", "cdkTrapFocus", ""]],
    inputs: {
      enabled: ["cdkTrapFocus", "enabled"],
      autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
    },
    exportAs: ["cdkTrapFocus"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return CdkTrapFocus;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends FocusTrap {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */

class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    var _a;

    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (target && !focusTrapRoot.contains(target) && !((_a = target.closest) === null || _a === void 0 ? void 0 : _a.call(target, 'div.cdk-overlay-pane'))) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


let FocusTrapManager = /*#__PURE__*/(() => {
  class FocusTrapManager {
    constructor() {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */


    register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;

      if (stack.length) {
        stack[stack.length - 1]._disable();
      }

      stack.push(focusTrap);

      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */


    deregister(focusTrap) {
      focusTrap._disable();

      const stack = this._focusTrapStack;
      const i = stack.indexOf(focusTrap);

      if (i !== -1) {
        stack.splice(i, 1);

        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }

  }

  FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
    return new (t || FocusTrapManager)();
  };

  FocusTrapManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FocusTrapManager,
    factory: FocusTrapManager.ɵfac,
    providedIn: 'root'
  });
  return FocusTrapManager;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


let ConfigurableFocusTrapFactory = /*#__PURE__*/(() => {
  class ConfigurableFocusTrapFactory {
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
      this._checker = _checker;
      this._ngZone = _ngZone;
      this._focusTrapManager = _focusTrapManager;
      this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

      this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }

    create(element, config = {
      defer: false
    }) {
      let configObject;

      if (typeof config === 'boolean') {
        configObject = {
          defer: config
        };
      } else {
        configObject = config;
      }

      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }

  }

  ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
    return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
  };

  ConfigurableFocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConfigurableFocusTrapFactory,
    factory: ConfigurableFocusTrapFactory.ɵfac,
    providedIn: 'root'
  });
  return ConfigurableFocusTrapFactory;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero. Note that there's an edge case where the user could click the 0x0 spot of the screen
  // themselves, but that is unlikely to contain interaction elements. Historically we used to
  // check `event.buttons === 0`, however that no longer works on recent versions of NVDA.
  return event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    constructor(_platform, ngZone, document, options) {
      this._platform = _platform;
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */

      this._mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

      this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */

      this._lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */

      this._onKeydown = event => {
        var _a, _b; // If this is one of the keys we should ignore, then ignore it and don't update the input
        // modality to keyboard.


        if ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.ignoreKeys) === null || _b === void 0 ? void 0 : _b.some(keyCode => keyCode === event.keyCode)) {
          return;
        }

        this._modality.next('keyboard');

        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */


      this._onMousedown = event => {
        // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
        // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
        // after the previous touch event.
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        } // Fake mousedown events are fired by some screen readers when controls are activated by the
        // screen reader. Attribute them to keyboard input modality.


        this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */


      this._onTouchstart = event => {
        // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
        // events are fired. Again, attribute to keyboard input modality.
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next('keyboard');

          return;
        } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
        // triggered via mouse vs touch.


        this._lastTouchMs = Date.now();

        this._modality.next('touch');

        this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
      };

      this._options = Object.assign(Object.assign({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options); // Skip the first emission as it's null.

      this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
      // modality to detect.

      if (_platform.isBrowser) {
        ngZone.runOutsideAngular(() => {
          document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
          document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
          document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
        });
      }
    }
    /** The most recently detected input modality. */


    get mostRecentModality() {
      return this._modality.value;
    }

    ngOnDestroy() {
      this._modality.complete();

      if (this._platform.isBrowser) {
        document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      }
    }

  }

  InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
    return new (t || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
  };

  InputModalityDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InputModalityDetector,
    factory: InputModalityDetector.ɵfac,
    providedIn: 'root'
  });
  return InputModalityDetector;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
let LiveAnnouncer = /*#__PURE__*/(() => {
  class LiveAnnouncer {
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
      this._ngZone = _ngZone;
      this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
      // reference browser globals (HTMLElement, Document) on non-browser environments, since having
      // a class decorator causes TypeScript to preserve the constructor signature types.

      this._document = _document;
      this._liveElement = elementToken || this._createLiveElement();
    }

    announce(message, ...args) {
      const defaultOptions = this._defaultOptions;
      let politeness;
      let duration;

      if (args.length === 1 && typeof args[0] === 'number') {
        duration = args[0];
      } else {
        [politeness, duration] = args;
      }

      this.clear();
      clearTimeout(this._previousTimeout);

      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
      }

      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      } // TODO: ensure changing the politeness works on all environments we support.


      this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
      // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
      // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
      //   second time without clearing and then using a non-zero delay.
      // (using JAWS 17 at time of this writing).


      return this._ngZone.runOutsideAngular(() => {
        return new Promise(resolve => {
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            resolve();

            if (typeof duration === 'number') {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
          }, 100);
        });
      });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */


    clear() {
      if (this._liveElement) {
        this._liveElement.textContent = '';
      }
    }

    ngOnDestroy() {
      var _a;

      clearTimeout(this._previousTimeout);
      (_a = this._liveElement) === null || _a === void 0 ? void 0 : _a.remove();
      this._liveElement = null;
    }

    _createLiveElement() {
      const elementClass = 'cdk-live-announcer-element';

      const previousElements = this._document.getElementsByClassName(elementClass);

      const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


      for (let i = 0; i < previousElements.length; i++) {
        previousElements[i].remove();
      }

      liveEl.classList.add(elementClass);
      liveEl.classList.add('cdk-visually-hidden');
      liveEl.setAttribute('aria-atomic', 'true');
      liveEl.setAttribute('aria-live', 'polite');

      this._document.body.appendChild(liveEl);

      return liveEl;
    }

  }

  LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
    return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
  };

  LiveAnnouncer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LiveAnnouncer,
    factory: LiveAnnouncer.ɵfac,
    providedIn: 'root'
  });
  return LiveAnnouncer;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


let CdkAriaLive = /*#__PURE__*/(() => {
  class CdkAriaLive {
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
      this._elementRef = _elementRef;
      this._liveAnnouncer = _liveAnnouncer;
      this._contentObserver = _contentObserver;
      this._ngZone = _ngZone;
      this._politeness = 'polite';
    }
    /** The aria-live politeness level to use when announcing messages. */


    get politeness() {
      return this._politeness;
    }

    set politeness(value) {
      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();

          this._subscription = null;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(() => {
          return this._contentObserver.observe(this._elementRef).subscribe(() => {
            // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
            const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
            // changes which we don't want to announce.

            if (elementText !== this._previousAnnouncedText) {
              this._liveAnnouncer.announce(elementText, this._politeness);

              this._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }

    ngOnDestroy() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }

  }

  CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
    return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };

  CdkAriaLive.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkAriaLive,
    selectors: [["", "cdkAriaLive", ""]],
    inputs: {
      politeness: ["cdkAriaLive", "politeness"]
    },
    exportAs: ["cdkAriaLive"]
  });
  return CdkAriaLive;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    constructor(_ngZone, _platform, _inputModalityDetector,
    /** @breaking-change 11.0.0 make document required */
    document, options) {
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._inputModalityDetector = _inputModalityDetector;
      /** The focus origin that the next focus event is a result of. */

      this._origin = null;
      /** Whether the window has just been focused. */

      this._windowFocused = false;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */

      this._originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */

      this._elementInfo = new Map();
      /** The number of elements currently being monitored. */

      this._monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */

      this._rootNodeFocusListenerCount = new Map();
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */

      this._windowFocusListener = () => {
        // Make a note of when the window regains focus, so we can
        // restore the origin info for the focused element.
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Subject for stopping our InputModalityDetector subscription. */


      this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */

      this._rootNodeFocusAndBlurListener = event => {
        const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);

        const handler = event.type === 'focus' ? this._onFocus : this._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

        for (let element = target; element; element = element.parentElement) {
          handler.call(this, event, element);
        }
      };

      this._document = document;
      this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
      /* IMMEDIATE */
      ;
    }

    monitor(element, checkChildren = false) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
      } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.


      const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getShadowRoot)(nativeElement) || this._getDocument();

      const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }

        return cachedInfo.subject;
      } // Create monitored element info.


      const info = {
        checkChildren: checkChildren,
        subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(),
        rootNode
      };

      this._elementInfo.set(nativeElement, info);

      this._registerGlobalListeners(info);

      return info.subject;
    }

    stopMonitoring(element) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

      const elementInfo = this._elementInfo.get(nativeElement);

      if (elementInfo) {
        elementInfo.subject.complete();

        this._setClasses(nativeElement);

        this._elementInfo.delete(nativeElement);

        this._removeGlobalListeners(elementInfo);
      }
    }

    focusVia(element, origin, options) {
      const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

      const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.


      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin); // `focus` isn't available on the server


        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }

    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Access injected document if available or fallback to global document reference */


    _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */


    _getWindow() {
      const doc = this._getDocument();

      return doc.defaultView || window;
    }

    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        // If the origin was realized via a touch interaction, we need to perform additional checks
        // to determine whether the focus origin should be attributed to touch or program.
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      } // If the window has just regained focus, we can restore the most recent origin from before the
      // window blurred. Otherwise, we've reached the point where we can't identify the source of the
      // focus. This typically means one of two things happened:
      //
      // 1) The element was programmatically focused, or
      // 2) The element was focused via screen reader navigation (which generally doesn't fire
      //    events).
      //
      // Because we can't distinguish between these two cases, we default to setting `program`.


      return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */


    _shouldBeAttributedToTouch(focusEventTarget) {
      // Please note that this check is not perfect. Consider the following edge case:
      //
      // <div #parent tabindex="0">
      //   <div #child tabindex="0" (click)="#parent.focus()"></div>
      // </div>
      //
      // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
      // #child, #parent is programmatically focused. This code will attribute the focus to touch
      // instead of program. This is a relatively minor edge-case that can be worked around by using
      // focusVia(parent, 'program') to focus #parent.
      return this._detectionMode === 1
      /* EVENTUAL */
      || !!(focusEventTarget === null || focusEventTarget === void 0 ? void 0 : focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */


    _setClasses(element, origin) {
      element.classList.toggle('cdk-focused', !!origin);
      element.classList.toggle('cdk-touch-focused', origin === 'touch');
      element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
      element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
      element.classList.toggle('cdk-program-focused', origin === 'program');
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */


    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
        // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
        // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
        // a touch event because when a touch event is fired, the associated focus event isn't yet in
        // the event queue. Before doing so, clear any pending timeouts.

        if (this._detectionMode === 0
        /* IMMEDIATE */
        ) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */


    _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      const elementInfo = this._elementInfo.get(element);

      const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);

      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }

      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */


    _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      const elementInfo = this._elementInfo.get(element);

      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }

      this._setClasses(element);

      this._emitOrigin(elementInfo.subject, null);
    }

    _emitOrigin(subject, origin) {
      this._ngZone.run(() => subject.next(origin));
    }

    _registerGlobalListeners(elementInfo) {
      if (!this._platform.isBrowser) {
        return;
      }

      const rootNode = elementInfo.rootNode;
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(() => {
          rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }

      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();

          window.addEventListener('focus', this._windowFocusListener);
        }); // The InputModalityDetector is also just a collection of global listeners.


        this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true
          /* isFromInteraction */
          );
        });
      }
    }

    _removeGlobalListeners(elementInfo) {
      const rootNode = elementInfo.rootNode;

      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      } // Unregister global listeners when last element is unmonitored.


      if (! --this._monitoredElementCount) {
        const window = this._getWindow();

        window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

        this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */


    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);

      this._emitOrigin(elementInfo.subject, origin);

      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */


    _getClosestElementsInfo(element) {
      const results = [];

      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });

      return results;
    }

  }

  FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
    return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
  };

  FocusMonitor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FocusMonitor,
    factory: FocusMonitor.ɵfac,
    providedIn: 'root'
  });
  return FocusMonitor;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


let CdkMonitorFocus = /*#__PURE__*/(() => {
  class CdkMonitorFocus {
    constructor(_elementRef, _focusMonitor) {
      this._elementRef = _elementRef;
      this._focusMonitor = _focusMonitor;
      this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => this.cdkFocusChange.emit(origin));
    }

    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);

      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }

  }

  CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
    return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
  };

  CdkMonitorFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    }
  });
  return CdkMonitorFocus;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

let HighContrastModeDetector = /*#__PURE__*/(() => {
  class HighContrastModeDetector {
    constructor(_platform, document) {
      this._platform = _platform;
      this._document = document;
    }
    /** Gets the current high-contrast-mode for the page. */


    getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return 0
        /* NONE */
        ;
      } // Create a test element with an arbitrary background-color that is neither black nor
      // white; high-contrast mode will coerce the color to either black or white. Also ensure that
      // appending the test element to the DOM does not affect layout by absolutely positioning it


      const testElement = this._document.createElement('div');

      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';

      this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
      // browsers. Once we get this color, we no longer need the test element. Access the `window`
      // via the document so we can fake it in tests. Note that we have extra null checks, because
      // this logic will likely run during app bootstrap and throwing can break the entire app.


      const documentWindow = this._document.defaultView || window;
      const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
      testElement.remove();

      switch (computedColor) {
        case 'rgb(0,0,0)':
          return 2
          /* WHITE_ON_BLACK */
          ;

        case 'rgb(255,255,255)':
          return 1
          /* BLACK_ON_WHITE */
          ;
      }

      return 0
      /* NONE */
      ;
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


    _applyBodyHighContrastModeCssClasses() {
      if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
        const bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
        bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
        this._hasCheckedHighContrastMode = true;
        const mode = this.getHighContrastMode();

        if (mode === 1
        /* BLACK_ON_WHITE */
        ) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
          bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
        } else if (mode === 2
        /* WHITE_ON_BLACK */
        ) {
          bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
          bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
        }
      }
    }

  }

  HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
    return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };

  HighContrastModeDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HighContrastModeDetector,
    factory: HighContrastModeDetector.ɵfac,
    providedIn: 'root'
  });
  return HighContrastModeDetector;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let A11yModule = /*#__PURE__*/(() => {
  class A11yModule {
    constructor(highContrastModeDetector) {
      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }

  }

  A11yModule.ɵfac = function A11yModule_Factory(t) {
    return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
  };

  A11yModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: A11yModule
  });
  A11yModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]]
  });
  return A11yModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5837:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkObserveContent": () => (/* binding */ CdkObserveContent),
/* harmony export */   "ContentObserver": () => (/* binding */ ContentObserver),
/* harmony export */   "MutationObserverFactory": () => (/* binding */ MutationObserverFactory),
/* harmony export */   "ObserversModule": () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1989);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

let MutationObserverFactory = /*#__PURE__*/(() => {
  class MutationObserverFactory {
    create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }

  }

  MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
    return new (t || MutationObserverFactory)();
  };

  MutationObserverFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MutationObserverFactory,
    factory: MutationObserverFactory.ɵfac,
    providedIn: 'root'
  });
  return MutationObserverFactory;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */


let ContentObserver = /*#__PURE__*/(() => {
  class ContentObserver {
    constructor(_mutationObserverFactory) {
      this._mutationObserverFactory = _mutationObserverFactory;
      /** Keeps track of the existing MutationObservers so they can be reused. */

      this._observedElements = new Map();
    }

    ngOnDestroy() {
      this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }

    observe(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        const stream = this._observeElement(element);

        const subscription = stream.subscribe(observer);
        return () => {
          subscription.unsubscribe();

          this._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */


    _observeElement(element) {
      if (!this._observedElements.has(element)) {
        const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

        const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }

        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }

      return this._observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */


    _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;

        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */


    _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        const {
          observer,
          stream
        } = this._observedElements.get(element);

        if (observer) {
          observer.disconnect();
        }

        stream.complete();

        this._observedElements.delete(element);
      }
    }

  }

  ContentObserver.ɵfac = function ContentObserver_Factory(t) {
    return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
  };

  ContentObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ContentObserver,
    factory: ContentObserver.ɵfac,
    providedIn: 'root'
  });
  return ContentObserver;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


let CdkObserveContent = /*#__PURE__*/(() => {
  class CdkObserveContent {
    constructor(_contentObserver, _elementRef, _ngZone) {
      this._contentObserver = _contentObserver;
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      /** Event emitted for each change in the element's content. */

      this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._disabled = false;
      this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */


    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /** Debounce interval for emitting the changes. */


    get debounce() {
      return this._debounce;
    }

    set debounce(value) {
      this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);

      this._subscribe();
    }

    ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }

    ngOnDestroy() {
      this._unsubscribe();
    }

    _subscribe() {
      this._unsubscribe();

      const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
      // Consider brining it back inside the zone next time we're making breaking changes.
      // Bringing it back inside can cause things like infinite change detection loops and changed
      // after checked errors if people's code isn't handling it properly.


      this._ngZone.runOutsideAngular(() => {
        this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
      });
    }

    _unsubscribe() {
      var _a;

      (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }

  }

  CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
    return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };

  CdkObserveContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkObserveContent,
    selectors: [["", "cdkObserveContent", ""]],
    inputs: {
      disabled: ["cdkObserveContentDisabled", "disabled"],
      debounce: "debounce"
    },
    outputs: {
      event: "cdkObserveContent"
    },
    exportAs: ["cdkObserveContent"]
  });
  return CdkObserveContent;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let ObserversModule = /*#__PURE__*/(() => {
  class ObserversModule {}

  ObserversModule.ɵfac = function ObserversModule_Factory(t) {
    return new (t || ObserversModule)();
  };

  ObserversModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ObserversModule
  });
  ObserversModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MutationObserverFactory]
  });
  return ObserversModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5868:
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-cdk-resize-observer.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzResizeObserver": () => (/* binding */ NzResizeObserver),
/* harmony export */   "NzResizeObserverDirective": () => (/* binding */ NzResizeObserverDirective),
/* harmony export */   "NzResizeObserverFactory": () => (/* binding */ NzResizeObserverFactory),
/* harmony export */   "NzResizeObserverModule": () => (/* binding */ NzResizeObserverModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);






/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */

let NzResizeObserverFactory = /*#__PURE__*/(() => {
  class NzResizeObserverFactory {
    create(callback) {
      return typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(callback);
    }

  }

  NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
    return new (t || NzResizeObserverFactory)();
  };

  NzResizeObserverFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NzResizeObserverFactory,
    factory: NzResizeObserverFactory.ɵfac,
    providedIn: 'root'
  });
  return NzResizeObserverFactory;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** An injectable service that allows watching elements for changes to their content. */


let NzResizeObserver = /*#__PURE__*/(() => {
  class NzResizeObserver {
    constructor(nzResizeObserverFactory) {
      this.nzResizeObserverFactory = nzResizeObserverFactory;
      /** Keeps track of the existing ResizeObservers so they can be reused. */

      this.observedElements = new Map();
    }

    ngOnDestroy() {
      this.observedElements.forEach((_, element) => this.cleanupObserver(element));
    }

    observe(elementOrRef) {
      const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        const stream = this.observeElement(element);
        const subscription = stream.subscribe(observer);
        return () => {
          subscription.unsubscribe();
          this.unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */


    observeElement(element) {
      if (!this.observedElements.has(element)) {
        const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        const observer = this.nzResizeObserverFactory.create(mutations => stream.next(mutations));

        if (observer) {
          observer.observe(element);
        }

        this.observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this.observedElements.get(element).count++;
      }

      return this.observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */


    unobserveElement(element) {
      if (this.observedElements.has(element)) {
        this.observedElements.get(element).count--;

        if (!this.observedElements.get(element).count) {
          this.cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying ResizeObserver for the specified element. */


    cleanupObserver(element) {
      if (this.observedElements.has(element)) {
        const {
          observer,
          stream
        } = this.observedElements.get(element);

        if (observer) {
          observer.disconnect();
        }

        stream.complete();
        this.observedElements.delete(element);
      }
    }

  }

  NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
    return new (t || NzResizeObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeObserverFactory));
  };

  NzResizeObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NzResizeObserver,
    factory: NzResizeObserver.ɵfac,
    providedIn: 'root'
  });
  return NzResizeObserver;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzResizeObserverDirective = /*#__PURE__*/(() => {
  class NzResizeObserverDirective {
    constructor(nzResizeObserver, elementRef) {
      this.nzResizeObserver = nzResizeObserver;
      this.elementRef = elementRef;
      this.nzResizeObserve = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.nzResizeObserverDisabled = false;
      this.currentSubscription = null;
    }

    subscribe() {
      this.unsubscribe();
      this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
    }

    unsubscribe() {
      var _a;

      (_a = this.currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }

    ngAfterContentInit() {
      if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
        this.subscribe();
      }
    }

    ngOnDestroy() {
      this.unsubscribe();
    }

    ngOnChanges(changes) {
      const {
        nzResizeObserve
      } = changes;

      if (nzResizeObserve) {
        if (this.nzResizeObserverDisabled) {
          this.unsubscribe();
        } else {
          this.subscribe();
        }
      }
    }

  }

  NzResizeObserverDirective.ɵfac = function NzResizeObserverDirective_Factory(t) {
    return new (t || NzResizeObserverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  NzResizeObserverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzResizeObserverDirective,
    selectors: [["", "nzResizeObserver", ""]],
    inputs: {
      nzResizeObserverDisabled: "nzResizeObserverDisabled"
    },
    outputs: {
      nzResizeObserve: "nzResizeObserve"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzResizeObserverDirective.prototype, "nzResizeObserverDisabled", void 0);

  return NzResizeObserverDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzResizeObserverModule = /*#__PURE__*/(() => {
  class NzResizeObserverModule {}

  NzResizeObserverModule.ɵfac = function NzResizeObserverModule_Factory(t) {
    return new (t || NzResizeObserverModule)();
  };

  NzResizeObserverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzResizeObserverModule
  });
  NzResizeObserverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [NzResizeObserverFactory]
  });
  return NzResizeObserverModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6457:
/*!**************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-color.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPresetColor": () => (/* binding */ isPresetColor),
/* harmony export */   "isStatusColor": () => (/* binding */ isStatusColor),
/* harmony export */   "presetColors": () => (/* binding */ presetColors),
/* harmony export */   "statusColors": () => (/* binding */ statusColors)
/* harmony export */ });
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const statusColors = ['success', 'processing', 'error', 'default', 'warning'];
const presetColors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];

function isPresetColor(color) {
  return presetColors.indexOf(color) !== -1;
}

function isStatusColor(color) {
  return statusColors.indexOf(color) !== -1;
}
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6188:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibPackerModule": () => (/* binding */ LibPackerModule),
/* harmony export */   "NzDatePickerComponent": () => (/* binding */ NzDatePickerComponent),
/* harmony export */   "NzDatePickerModule": () => (/* binding */ NzDatePickerModule),
/* harmony export */   "NzMonthPickerComponent": () => (/* binding */ NzMonthPickerComponent),
/* harmony export */   "NzRangePickerComponent": () => (/* binding */ NzRangePickerComponent),
/* harmony export */   "NzWeekPickerComponent": () => (/* binding */ NzWeekPickerComponent),
/* harmony export */   "NzYearPickerComponent": () => (/* binding */ NzYearPickerComponent),
/* harmony export */   "PREFIX_CLASS": () => (/* binding */ PREFIX_CLASS),
/* harmony export */   "getTimeConfig": () => (/* binding */ getTimeConfig),
/* harmony export */   "isAllowedDate": () => (/* binding */ isAllowedDate),
/* harmony export */   "isTimeValid": () => (/* binding */ isTimeValid),
/* harmony export */   "isTimeValidByConfig": () => (/* binding */ isTimeValidByConfig),
/* harmony export */   "transCompatFormat": () => (/* binding */ transCompatFormat),
/* harmony export */   "ɵAbstractPanelHeader": () => (/* binding */ AbstractPanelHeader),
/* harmony export */   "ɵAbstractTable": () => (/* binding */ AbstractTable),
/* harmony export */   "ɵCalendarFooterComponent": () => (/* binding */ CalendarFooterComponent),
/* harmony export */   "ɵDateHeaderComponent": () => (/* binding */ DateHeaderComponent),
/* harmony export */   "ɵDatePickerService": () => (/* binding */ DatePickerService),
/* harmony export */   "ɵDateRangePopupComponent": () => (/* binding */ DateRangePopupComponent),
/* harmony export */   "ɵDateTableComponent": () => (/* binding */ DateTableComponent),
/* harmony export */   "ɵDecadeHeaderComponent": () => (/* binding */ DecadeHeaderComponent),
/* harmony export */   "ɵDecadeTableComponent": () => (/* binding */ DecadeTableComponent),
/* harmony export */   "ɵInnerPopupComponent": () => (/* binding */ InnerPopupComponent),
/* harmony export */   "ɵMonthHeaderComponent": () => (/* binding */ MonthHeaderComponent),
/* harmony export */   "ɵMonthTableComponent": () => (/* binding */ MonthTableComponent),
/* harmony export */   "ɵYearHeaderComponent": () => (/* binding */ YearHeaderComponent),
/* harmony export */   "ɵYearTableComponent": () => (/* binding */ YearTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 405);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 3758);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 174);
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/time */ 1723);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 6906);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/cdk/resize-observer */ 5868);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);





































/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

function CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function CalendarFooterComponent_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraFooter);
  }
}

function CalendarFooterComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.extraFooter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function CalendarFooterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarFooterComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarFooterComponent_div_1_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-footer-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.extraFooter));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.extraFooter));
  }
}

function CalendarFooterComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r1.prefixCls, "-today-btn ", ctx_r1.isTodayDisabled ? ctx_r1.prefixCls + "-today-btn-disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.todayTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.today, " ");
  }
}

function CalendarFooterComponent_ul_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function CalendarFooterComponent_ul_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.locale.now, " ");
  }
}

function CalendarFooterComponent_ul_3_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r10.prefixCls, "-ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.okDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.locale.ok, " ");
  }
}

function CalendarFooterComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarFooterComponent_ul_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarFooterComponent_ul_3_li_2_Template, 3, 7, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_li_3_Template, 3, 5, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-ranges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.rangeQuickSelector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showNow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasTimePicker);
  }
}

function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const selector_r1 = restoredCtx.$implicit;
      return selector_r1.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
  }
}

function DecadeTableComponent_thead_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 6);
  }
}

function DecadeTableComponent_thead_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
  }
}

function DecadeTableComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
  }
}

function DecadeTableComponent_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};

function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, cell_r9.value));
  }
}

function DecadeTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
  }
}

function DecadeTableComponent_tr_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.isDisabled ? null : cell_r9.onClick();
    })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.onMouseEnter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
  }
}

function DecadeTableComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
  }
}

function YearHeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const selector_r1 = restoredCtx.$implicit;
      return selector_r1.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
  }
}

function YearTableComponent_thead_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 6);
  }
}

function YearTableComponent_thead_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
  }
}

function YearTableComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
  }
}

function YearTableComponent_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
  }
}

function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
  }
}

function YearTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
  }
}

function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, cell_r9.value));
  }
}

function YearTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
  }
}

function YearTableComponent_tr_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearTableComponent_tr_3_td_2_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.isDisabled ? null : cell_r9.onClick();
    })("mouseenter", function YearTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.onMouseEnter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
  }
}

function YearTableComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
  }
}

function MonthHeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const selector_r1 = restoredCtx.$implicit;
      return selector_r1.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
  }
}

function MonthTableComponent_thead_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 6);
  }
}

function MonthTableComponent_thead_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
  }
}

function MonthTableComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
  }
}

function MonthTableComponent_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, cell_r9.value));
  }
}

function MonthTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
  }
}

function MonthTableComponent_tr_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.isDisabled ? null : cell_r9.onClick();
    })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.onMouseEnter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
  }
}

function MonthTableComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
  }
}

function DateHeaderComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const selector_r1 = restoredCtx.$implicit;
      return selector_r1.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
  }
}

function DateTableComponent_thead_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 6);
  }
}

function DateTableComponent_thead_1_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
  }
}

function DateTableComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
  }
}

function DateTableComponent_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
  }
}

function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
  }
}

function DateTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
  }
}

function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, cell_r9.value));
  }
}

function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, cell_r9.value));
  }
}

function DateTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
  }
}

function DateTableComponent_tr_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTableComponent_tr_3_td_2_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.isDisabled ? null : cell_r9.onClick();
    })("mouseenter", function DateTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const cell_r9 = restoredCtx.$implicit;
      return cell_r9.onMouseEnter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
  }
}

function DateTableComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
  }
}

function InnerPopupComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "decade-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.activeDate = $event;
    })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.panelModeChange.emit($event);
    })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.headerChange.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "decade-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onChooseDecade($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
  }
}

function InnerPopupComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "year-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.activeDate = $event;
    })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.panelModeChange.emit($event);
    })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.headerChange.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "year-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.onChooseYear($event);
    })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r15.cellHover.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
  }
}

function InnerPopupComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "month-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.activeDate = $event;
    })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.panelModeChange.emit($event);
    })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.headerChange.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "month-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r20.onChooseMonth($event);
    })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r21.cellHover.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
  }
}

function InnerPopupComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "date-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.activeDate = $event;
    })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r24.panelModeChange.emit($event);
    })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r25.headerChange.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "date-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r26.onSelectDate($event);
    })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r27.cellHover.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r3.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
  }
}

function InnerPopupComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-time-picker-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r28.onSelectTime($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
  }
}

function DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c1 = function (a0) {
  return {
    partType: a0
  };
};

function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r9.datePickerService.activeInput));
  }
}

function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c2 = function () {
  return {
    partType: "left"
  };
};

const _c3 = function () {
  return {
    partType: "right"
  };
};

function DateRangePopupComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 7);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
  }
}

function DateRangePopupComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateRangePopupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DateRangePopupComponent_ng_container_0_ng_container_5_Template, 2, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DateRangePopupComponent_ng_container_0_ng_template_6_Template, 2, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DateRangePopupComponent_ng_container_0_ng_container_8_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-range-arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.arrowLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panel-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasTimePicker)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
  }
}

function DateRangePopupComponent_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateRangePopupComponent_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function DateRangePopupComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DateRangePopupComponent_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate4"]("", ctx_r2.prefixCls, "-panel-container ", ctx_r2.showWeek ? ctx_r2.prefixCls + "-week-number" : "", " ", ctx_r2.hasTimePicker ? ctx_r2.prefixCls + "-time" : "", " ", ctx_r2.isRange ? ctx_r2.prefixCls + "-range" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-panel-rtl", ctx_r2.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
  }
}

function DateRangePopupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "inner-popup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panelModeChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_panelModeChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const partType_r18 = restoredCtx.partType;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.onPanelModeChange($event, partType_r18);
    })("cellHover", function DateRangePopupComponent_ng_template_3_Template_inner_popup_cellHover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r21.onCellHover($event);
    })("selectDate", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectDate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.changeValueFromSelect($event, !ctx_r22.showTime);
    })("selectTime", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectTime_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const partType_r18 = restoredCtx.partType;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r23.onSelectTime($event, partType_r18);
    })("headerChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_headerChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const partType_r18 = restoredCtx.partType;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r24.onActiveDateChange($event, partType_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const partType_r18 = ctx.partType;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-panel-rtl", ctx_r4.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showWeek", ctx_r4.showWeek)("endPanelMode", ctx_r4.getPanelMode(ctx_r4.endPanelMode, partType_r18))("partType", partType_r18)("locale", ctx_r4.locale)("showTimePicker", ctx_r4.hasTimePicker)("timeOptions", ctx_r4.getTimeOptions(partType_r18))("panelMode", ctx_r4.getPanelMode(ctx_r4.panelMode, partType_r18))("activeDate", ctx_r4.getActiveDate(partType_r18))("value", ctx_r4.getValue(partType_r18))("disabledDate", ctx_r4.disabledDate)("dateRender", ctx_r4.dateRender)("selectedValue", ctx_r4.datePickerService == null ? null : ctx_r4.datePickerService.value)("hoverValue", ctx_r4.hoverValue);
  }
}

function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "calendar-footer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r26.onClickOk();
    })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r28.onClickToday($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r25.locale)("isRange", ctx_r25.isRange)("showToday", ctx_r25.showToday)("showNow", ctx_r25.showNow)("hasTimePicker", ctx_r25.hasTimePicker)("okDisabled", !ctx_r25.isAllowed(ctx_r25.datePickerService == null ? null : ctx_r25.datePickerService.value))("extraFooter", ctx_r25.extraFooter)("rangeQuickSelector", ctx_r25.ranges ? _r7 : null);
  }
}

function DateRangePopupComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 8, "calendar-footer", 10);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.hasFooter);
  }
}

function DateRangePopupComponent_ng_template_7_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePopupComponent_ng_template_7_li_0_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const name_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r31.onClickPresetRange(ctx_r31.ranges[name_r30]);
    })("mouseenter", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const name_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r33.onHoverPresetRange(ctx_r33.ranges[name_r30]);
    })("mouseleave", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r34.onPresetRangeMouseLeave();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const name_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r29.prefixCls, "-preset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r30);
  }
}

function DateRangePopupComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_7_li_0_Template, 3, 4, "li", 12);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.getObjectKeys(ctx_r8.ranges));
  }
}

const _c4 = ["separatorElement"];
const _c5 = ["pickerInput"];
const _c6 = ["rangePickerInput"];

function NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NzDatePickerComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.inputValue = $event;
    })("focus", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.onFocus($event);
    })("focusout", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focusout_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.onFocusout($event);
    })("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r16.onInputChange($event);
    })("keyup.enter", function NzDatePickerComponent_ng_container_0_div_1_Template_input_keyup_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r17.onKeyupEnter($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r8.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-input-disabled", ctx_r8.nzDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r8.getPlaceholder());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.nzDisabled)("readOnly", ctx_r8.nzInputReadOnly)("ngModel", ctx_r8.inputValue)("size", ctx_r8.inputSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r8.nzId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.nzSeparator);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NzDatePickerComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-range-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.nzSeparator)("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzDatePickerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDatePickerComponent_ng_container_0_div_1_Template, 4, 12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDatePickerComponent_ng_container_0_ng_container_2_Template, 12, 21, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isRange);
  }
}

function NzDatePickerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDatePickerComponent_ng_template_1_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r27.onClickInputBox($event);
    })("focusout", function NzDatePickerComponent_ng_template_1_Template_input_focusout_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r29.onFocusout($event);
    })("focus", function NzDatePickerComponent_ng_template_1_Template_input_focus_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const partType_r25 = restoredCtx.partType;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r30.onFocus($event, partType_r25);
    })("keyup.enter", function NzDatePickerComponent_ng_template_1_Template_input_keyup_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r31.onKeyupEnter($event);
    })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const partType_r25 = restoredCtx.partType;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return (ctx_r32.inputValue[ctx_r32.datePickerService.getActiveIndex(partType_r25)] = $event);
    })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r33.onInputChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const partType_r25 = ctx.partType;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.getPlaceholder(partType_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize)("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r25)]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.nzId);
  }
}

function NzDatePickerComponent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDatePickerComponent_ng_template_3_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r36.onClickClear($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r34.prefixCls, "-clear");
  }
}

function NzDatePickerComponent_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const suffixIcon_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r38);
  }
}

function NzDatePickerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDatePickerComponent_ng_template_3_span_1_Template, 2, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDatePickerComponent_ng_template_3_ng_container_3_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-active-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.activeBarStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showClear());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzSuffixIcon);
  }
}

function NzDatePickerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "date-range-popup", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panelModeChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_panelModeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r39.onPanelModeChange($event);
    })("calendarChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_calendarChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r41.onCalendarChange($event);
    })("resultOk", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_resultOk_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r42.onResultOk();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.nzDropdownClassName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-dropdown-rtl", ctx_r6.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange)("ant-picker-active-left", ctx_r6.datePickerService.activeInput === "left")("ant-picker-active-right", ctx_r6.datePickerService.activeInput === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.nzPopupStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRange", ctx_r6.isRange)("inline", ctx_r6.nzInline)("defaultPickerValue", ctx_r6.nzDefaultPickerValue)("showWeek", ctx_r6.nzMode === "week")("panelMode", ctx_r6.panelMode)("locale", ctx_r6.nzLocale == null ? null : ctx_r6.nzLocale.lang)("showToday", ctx_r6.nzMode === "date" && ctx_r6.nzShowToday && !ctx_r6.isRange && !ctx_r6.nzShowTime)("showNow", ctx_r6.nzMode === "date" && ctx_r6.nzShowNow && !ctx_r6.isRange && !!ctx_r6.nzShowTime)("showTime", ctx_r6.nzShowTime)("dateRender", ctx_r6.nzDateRender)("disabledDate", ctx_r6.nzDisabledDate)("disabledTime", ctx_r6.nzDisabledTime)("extraFooter", ctx_r6.extraFooter)("ranges", ctx_r6.nzRanges)("dir", ctx_r6.dir);
  }
}

function NzDatePickerComponent_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NzDatePickerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDatePickerComponent_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNoAnimation", !!(ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation))("@slideMotion", "enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
  }
}

const PREFIX_CLASS = 'ant-picker';
const defaultDisabledTime = {
  nzDisabledHours() {
    return [];
  },

  nzDisabledMinutes() {
    return [];
  },

  nzDisabledSeconds() {
    return [];
  }

};

function getTimeConfig(value, disabledTime) {
  let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
  disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
  return disabledTimeConfig;
}

function isTimeValidByConfig(value, disabledTimeConfig) {
  let invalidTime = false;

  if (value) {
    const hour = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();
    const disabledHours = disabledTimeConfig.nzDisabledHours();

    if (disabledHours.indexOf(hour) === -1) {
      const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);

      if (disabledMinutes.indexOf(minutes) === -1) {
        const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }

  return !invalidTime;
}

function isTimeValid(value, disabledTime) {
  const disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}

function isAllowedDate(value, disabledDate, disabledTime) {
  if (!value) {
    return false;
  }

  if (disabledDate) {
    if (disabledDate(value.nativeDate)) {
      return false;
    }
  }

  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }

  return true;
}
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Compatible translate the moment-like format pattern to angular's pattern
 * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
 *
 * TODO: compare and complete all format patterns
 * Each format docs as below:
 *
 * @link https://momentjs.com/docs/#/displaying/format/
 * @link https://angular.io/api/common/DatePipe#description
 * @param format input format pattern
 */


function transCompatFormat(format) {
  return format && format.replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
  .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
}
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let CalendarFooterComponent = /*#__PURE__*/(() => {
  class CalendarFooterComponent {
    constructor(dateHelper) {
      this.dateHelper = dateHelper;
      this.showToday = false;
      this.showNow = false;
      this.hasTimePicker = false;
      this.isRange = false;
      this.okDisabled = false;
      this.rangeQuickSelector = null;
      this.clickOk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.clickToday = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.prefixCls = PREFIX_CLASS;
      this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.isTemplateRef;
      this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyString;
      this.isTodayDisabled = false;
      this.todayTitle = '';
    }

    ngOnChanges(changes) {
      const now = new Date();

      if (changes.disabledDate) {
        this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
      }

      if (changes.locale) {
        // NOTE: Compat for DatePipe formatting rules
        const dateFormat = transCompatFormat(this.locale.dateFormat);
        this.todayTitle = this.dateHelper.format(now, dateFormat);
      }
    }

    onClickToday() {
      const now = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      this.clickToday.emit(now.clone()); // To prevent the "now" being modified from outside, we use clone
    }

  }

  CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) {
    return new (t || CalendarFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  CalendarFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarFooterComponent,
    selectors: [["calendar-footer"]],
    inputs: {
      locale: "locale",
      showToday: "showToday",
      showNow: "showNow",
      hasTimePicker: "hasTimePicker",
      isRange: "isRange",
      okDisabled: "okDisabled",
      disabledDate: "disabledDate",
      extraFooter: "extraFooter",
      rangeQuickSelector: "rangeQuickSelector"
    },
    outputs: {
      clickOk: "clickOk",
      clickToday: "clickToday"
    },
    exportAs: ["calendarFooter"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 6,
    consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled", "click"]],
    template: function CalendarFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_Template, 4, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarFooterComponent_a_2_Template, 2, 6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_Template, 4, 6, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasTimePicker || ctx.rangeQuickSelector);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return CalendarFooterComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let DatePickerService = /*#__PURE__*/(() => {
  class DatePickerService {
    constructor() {
      this.activeInput = 'left';
      this.arrowLeft = 0;
      this.isRange = false;
      this.valueChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
      this.emitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.inputPartChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }

    initValue(reset = false) {
      if (reset) {
        this.initialValue = this.isRange ? [] : null;
      }

      this.setValue(this.initialValue);
    }

    hasValue(value = this.value) {
      if (Array.isArray(value)) {
        return !!value[0] || !!value[1];
      } else {
        return !!value;
      }
    }

    makeValue(value) {
      if (this.isRange) {
        return value ? value.map(val => new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(val)) : [];
      } else {
        return value ? new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(value) : null;
      }
    }

    setActiveDate(value, hasTimePicker = false, mode = 'month') {
      const parentPanels = {
        date: 'month',
        month: 'year',
        year: 'decade'
      };

      if (this.isRange) {
        this.activeDate = (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.normalizeRangeValue)(value, hasTimePicker, parentPanels[mode], this.activeInput);
      } else {
        this.activeDate = (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.cloneDate)(value);
      }
    }

    setValue(value) {
      this.value = value;
      this.valueChange$.next(this.value);
    }

    getActiveIndex(part = this.activeInput) {
      return {
        left: 0,
        right: 1
      }[part];
    }

    ngOnDestroy() {
      this.valueChange$.complete();
      this.emitValue$.complete();
      this.inputPartChange$.complete();
    }

  }

  DatePickerService.ɵfac = function DatePickerService_Factory(t) {
    return new (t || DatePickerService)();
  };

  DatePickerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DatePickerService,
    factory: DatePickerService.ɵfac
  });
  return DatePickerService;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let AbstractPanelHeader = /*#__PURE__*/(() => {
  class AbstractPanelHeader {
    constructor() {
      this.prefixCls = `ant-picker-header`;
      this.selectors = [];
      this.showSuperPreBtn = true;
      this.showSuperNextBtn = true;
      this.showPreBtn = true;
      this.showNextBtn = true;
      this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

    superPreviousTitle() {
      return this.locale.previousYear;
    }

    previousTitle() {
      return this.locale.previousMonth;
    }

    superNextTitle() {
      return this.locale.nextYear;
    }

    nextTitle() {
      return this.locale.nextMonth;
    }

    superPrevious() {
      this.changeValue(this.value.addYears(-1));
    }

    superNext() {
      this.changeValue(this.value.addYears(1));
    }

    previous() {
      this.changeValue(this.value.addMonths(-1));
    }

    next() {
      this.changeValue(this.value.addMonths(1));
    }

    changeValue(value) {
      if (this.value !== value) {
        this.value = value;
        this.valueChange.emit(this.value);
        this.render();
      }
    }

    changeMode(mode) {
      this.panelModeChange.emit(mode);
    }

    render() {
      if (this.value) {
        this.selectors = this.getSelectors();
      }
    }

    ngOnInit() {
      if (!this.value) {
        this.value = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(); // Show today by default
      }

      this.selectors = this.getSelectors();
    }

    ngOnChanges(changes) {
      if (changes.value || changes.locale) {
        this.render();
      }
    }

  }

  AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) {
    return new (t || AbstractPanelHeader)();
  };

  AbstractPanelHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AbstractPanelHeader,
    inputs: {
      value: "value",
      locale: "locale",
      showSuperPreBtn: "showSuperPreBtn",
      showSuperNextBtn: "showSuperNextBtn",
      showPreBtn: "showPreBtn",
      showNextBtn: "showNextBtn"
    },
    outputs: {
      panelModeChange: "panelModeChange",
      valueChange: "valueChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return AbstractPanelHeader;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let DecadeHeaderComponent = /*#__PURE__*/(() => {
  class DecadeHeaderComponent extends AbstractPanelHeader {
    previous() {}

    next() {}

    get startYear() {
      return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }

    get endYear() {
      return this.startYear + 99;
    }

    superPrevious() {
      this.changeValue(this.value.addYears(-100));
    }

    superNext() {
      this.changeValue(this.value.addYears(100));
    }

    getSelectors() {
      return [{
        className: `${this.prefixCls}-decade-btn`,
        title: '',
        onClick: () => {// noop
        },
        label: `${this.startYear}-${this.endYear}`
      }];
    }

  }

  DecadeHeaderComponent.ɵfac = /* @__PURE__ */function () {
    let ɵDecadeHeaderComponent_BaseFactory;
    return function DecadeHeaderComponent_Factory(t) {
      return (ɵDecadeHeaderComponent_BaseFactory || (ɵDecadeHeaderComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DecadeHeaderComponent)))(t || DecadeHeaderComponent);
    };
  }();

  DecadeHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DecadeHeaderComponent,
    selectors: [["decade-header"]],
    exportAs: ["decadeHeader"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 31,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
    template: function DecadeHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DecadeHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_7_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_9_listener() {
          return ctx.superNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
  return DecadeHeaderComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let AbstractTable = /*#__PURE__*/(() => {
  class AbstractTable {
    constructor() {
      this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.isTemplateRef;
      this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyString;
      this.headRow = [];
      this.bodyRows = [];
      this.MAX_ROW = 6;
      this.MAX_COL = 7;
      this.prefixCls = 'ant-picker';
      this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      this.showWeek = false;
      this.selectedValue = []; // Range ONLY

      this.hoverValue = []; // Range ONLY

      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Emitted when hover on a day by mouse enter
    }

    render() {
      if (this.activeDate) {
        this.headRow = this.makeHeadRow();
        this.bodyRows = this.makeBodyRows();
      }
    }

    trackByBodyRow(_index, item) {
      return item.trackByIndex;
    }

    trackByBodyColumn(_index, item) {
      return item.trackByIndex;
    }

    hasRangeValue() {
      var _a, _b;

      return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
    }

    getClassMap(cell) {
      return {
        [`ant-picker-cell`]: true,
        [`ant-picker-cell-in-view`]: true,
        [`ant-picker-cell-selected`]: cell.isSelected,
        [`ant-picker-cell-disabled`]: cell.isDisabled,
        [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
        [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
        [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
        [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
        [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
        [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
        [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
        [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
        [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
        [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
        [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
        [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
      };
    }

    ngOnInit() {
      this.render();
    }

    ngOnChanges(changes) {
      if (changes.activeDate && !changes.activeDate.currentValue) {
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      }

      if (changes.disabledDate || changes.locale || changes.showWeek || this.isDateRealChange(changes.activeDate) || this.isDateRealChange(changes.value) || this.isDateRealChange(changes.selectedValue) || this.isDateRealChange(changes.hoverValue)) {
        this.render();
      }
    }

    isDateRealChange(change) {
      if (change) {
        const previousValue = change.previousValue;
        const currentValue = change.currentValue;

        if (Array.isArray(currentValue)) {
          return !Array.isArray(previousValue) || currentValue.length !== previousValue.length || currentValue.some((value, index) => {
            const previousCandyDate = previousValue[index];
            return previousCandyDate instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
          });
        } else {
          return !this.isSameDate(previousValue, currentValue);
        }
      }

      return false;
    }

    isSameDate(left, right) {
      return !left && !right || left && right && right.isSameDay(left);
    }

  }

  AbstractTable.ɵfac = function AbstractTable_Factory(t) {
    return new (t || AbstractTable)();
  };

  AbstractTable.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: AbstractTable,
    inputs: {
      prefixCls: "prefixCls",
      value: "value",
      locale: "locale",
      activeDate: "activeDate",
      showWeek: "showWeek",
      selectedValue: "selectedValue",
      hoverValue: "hoverValue",
      disabledDate: "disabledDate",
      cellRender: "cellRender",
      fullCellRender: "fullCellRender"
    },
    outputs: {
      valueChange: "valueChange",
      cellHover: "cellHover"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return AbstractTable;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const MAX_ROW = 4;
const MAX_COL = 3;
let DecadeTableComponent = /*#__PURE__*/(() => {
  class DecadeTableComponent extends AbstractTable {
    get startYear() {
      return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
    }

    get endYear() {
      return this.startYear + 99;
    }

    makeHeadRow() {
      return [];
    }

    makeBodyRows() {
      const decades = [];
      const currentYear = this.value && this.value.getYear();
      const startYear = this.startYear;
      const endYear = this.endYear;
      const previousYear = startYear - 10;
      let index = 0;

      for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
        const row = {
          dateCells: [],
          trackByIndex: rowIndex
        };

        for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
          const start = previousYear + index * 10;
          const end = previousYear + index * 10 + 9;
          const content = `${start}-${end}`;
          const cell = {
            trackByIndex: colIndex,
            value: this.activeDate.setYear(start).nativeDate,
            content,
            title: content,
            isDisabled: false,
            isSelected: currentYear >= start && currentYear <= end,
            isLowerThanStart: end < startYear,
            isBiggerThanEnd: start > endYear,
            classMap: {},

            onClick() {},

            onMouseEnter() {}

          };
          cell.classMap = this.getClassMap(cell);

          cell.onClick = () => this.chooseDecade(start);

          index++;
          row.dateCells.push(cell);
        }

        decades.push(row);
      }

      return decades;
    }

    getClassMap(cell) {
      return {
        [`${this.prefixCls}-cell`]: true,
        [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
        [`${this.prefixCls}-cell-selected`]: cell.isSelected,
        [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
      };
    }

    chooseDecade(year) {
      this.value = this.activeDate.setYear(year);
      this.valueChange.emit(this.value);
    }

  }

  DecadeTableComponent.ɵfac = /* @__PURE__ */function () {
    let ɵDecadeTableComponent_BaseFactory;
    return function DecadeTableComponent_Factory(t) {
      return (ɵDecadeTableComponent_BaseFactory || (ɵDecadeTableComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DecadeTableComponent)))(t || DecadeTableComponent);
    };
  }();

  DecadeTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DecadeTableComponent,
    selectors: [["decade-table"]],
    exportAs: ["decadeTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 3,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
    template: function DecadeTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
  return DecadeTableComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let YearHeaderComponent = /*#__PURE__*/(() => {
  class YearHeaderComponent extends AbstractPanelHeader {
    get startYear() {
      return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
    }

    get endYear() {
      return this.startYear + 9;
    }

    superPrevious() {
      this.changeValue(this.value.addYears(-10));
    }

    superNext() {
      this.changeValue(this.value.addYears(10));
    }

    getSelectors() {
      return [{
        className: `${this.prefixCls}-year-btn`,
        title: '',
        onClick: () => this.changeMode('decade'),
        label: `${this.startYear}-${this.endYear}`
      }];
    }

  }

  YearHeaderComponent.ɵfac = /* @__PURE__ */function () {
    let ɵYearHeaderComponent_BaseFactory;
    return function YearHeaderComponent_Factory(t) {
      return (ɵYearHeaderComponent_BaseFactory || (ɵYearHeaderComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](YearHeaderComponent)))(t || YearHeaderComponent);
    };
  }();

  YearHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: YearHeaderComponent,
    selectors: [["year-header"]],
    exportAs: ["yearHeader"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 31,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
    template: function YearHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, YearHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_7_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_9_listener() {
          return ctx.superNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
  return YearHeaderComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let YearTableComponent = /*#__PURE__*/(() => {
  class YearTableComponent extends AbstractTable {
    constructor(dateHelper) {
      super();
      this.dateHelper = dateHelper;
      this.MAX_ROW = 4;
      this.MAX_COL = 3;
    }

    makeHeadRow() {
      return [];
    }

    makeBodyRows() {
      const currentYear = this.activeDate && this.activeDate.getYear();
      const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
      const endYear = startYear + 9;
      const previousYear = startYear - 1;
      const years = [];
      let yearValue = 0;

      for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
        const row = {
          dateCells: [],
          trackByIndex: rowIndex
        };

        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
          const yearNum = previousYear + yearValue;
          const year = this.activeDate.setYear(yearNum);
          const content = this.dateHelper.format(year.nativeDate, 'yyyy');
          const isDisabled = this.isDisabledYear(year);
          const cell = {
            trackByIndex: colIndex,
            value: year.nativeDate,
            isDisabled,
            isSameDecade: yearNum >= startYear && yearNum <= endYear,
            isSelected: yearNum === (this.value && this.value.getYear()),
            content,
            title: content,
            classMap: {},
            isLastCellInPanel: year.getYear() === endYear,
            isFirstCellInPanel: year.getYear() === startYear,
            cellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.cellRender, year),
            fullCellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.fullCellRender, year),
            onClick: () => this.chooseYear(cell.value.getFullYear()),
            onMouseEnter: () => this.cellHover.emit(year)
          };
          this.addCellProperty(cell, year);
          row.dateCells.push(cell);
          yearValue++;
        }

        years.push(row);
      }

      return years;
    }

    getClassMap(cell) {
      return Object.assign(Object.assign({}, super.getClassMap(cell)), {
        [`ant-picker-cell-in-view`]: !!cell.isSameDecade
      });
    }

    isDisabledYear(year) {
      if (!this.disabledDate) {
        return false;
      }

      const firstOfMonth = year.setMonth(0).setDate(1);

      for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
        if (!this.disabledDate(date.nativeDate)) {
          return false;
        }
      }

      return true;
    }

    addCellProperty(cell, year) {
      if (this.hasRangeValue()) {
        const [startHover, endHover] = this.hoverValue;
        const [startSelected, endSelected] = this.selectedValue; // Selected

        if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameYear(year)) {
          cell.isSelectedStart = true;
          cell.isSelected = true;
        }

        if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameYear(year)) {
          cell.isSelectedEnd = true;
          cell.isSelected = true;
        }

        if (startHover && endHover) {
          cell.isHoverStart = startHover.isSameYear(year);
          cell.isHoverEnd = endHover.isSameYear(year);
          cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
        }

        cell.isStartSingle = startSelected && !endSelected;
        cell.isEndSingle = !startSelected && endSelected;
        cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeYear(year)) && (year === null || year === void 0 ? void 0 : year.isBeforeYear(endSelected));
        cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
        cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
      } else if (year.isSameYear(this.value)) {
        cell.isSelected = true;
      }

      cell.classMap = this.getClassMap(cell);
    }

    chooseYear(year) {
      this.value = this.activeDate.setYear(year);
      this.valueChange.emit(this.value);
      this.render();
    }

  }

  YearTableComponent.ɵfac = function YearTableComponent_Factory(t) {
    return new (t || YearTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  YearTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: YearTableComponent,
    selectors: [["year-table"]],
    exportAs: ["yearTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 3,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
    template: function YearTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
  return YearTableComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let MonthHeaderComponent = /*#__PURE__*/(() => {
  class MonthHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
      super();
      this.dateHelper = dateHelper;
    }

    getSelectors() {
      return [{
        className: `${this.prefixCls}-month-btn`,
        title: this.locale.yearSelect,
        onClick: () => this.changeMode('year'),
        label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
      }];
    }

  }

  MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) {
    return new (t || MonthHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  MonthHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MonthHeaderComponent,
    selectors: [["month-header"]],
    exportAs: ["monthHeader"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 31,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
    template: function MonthHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MonthHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_7_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_9_listener() {
          return ctx.superNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
  return MonthHeaderComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let MonthTableComponent = /*#__PURE__*/(() => {
  class MonthTableComponent extends AbstractTable {
    constructor(dateHelper) {
      super();
      this.dateHelper = dateHelper;
      this.MAX_ROW = 4;
      this.MAX_COL = 3;
    }

    makeHeadRow() {
      return [];
    }

    makeBodyRows() {
      const months = [];
      let monthValue = 0;

      for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
        const row = {
          dateCells: [],
          trackByIndex: rowIndex
        };

        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
          const month = this.activeDate.setMonth(monthValue);
          const isDisabled = this.isDisabledMonth(month);
          const content = this.dateHelper.format(month.nativeDate, 'MMM');
          const cell = {
            trackByIndex: colIndex,
            value: month.nativeDate,
            isDisabled,
            isSelected: month.isSameMonth(this.value),
            content,
            title: content,
            classMap: {},
            cellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.cellRender, month),
            fullCellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.fullCellRender, month),
            onClick: () => this.chooseMonth(cell.value.getMonth()),
            onMouseEnter: () => this.cellHover.emit(month)
          };
          this.addCellProperty(cell, month);
          row.dateCells.push(cell);
          monthValue++;
        }

        months.push(row);
      }

      return months;
    }

    isDisabledMonth(month) {
      if (!this.disabledDate) {
        return false;
      }

      const firstOfMonth = month.setDate(1);

      for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
        if (!this.disabledDate(date.nativeDate)) {
          return false;
        }
      }

      return true;
    }

    addCellProperty(cell, month) {
      if (this.hasRangeValue()) {
        const [startHover, endHover] = this.hoverValue;
        const [startSelected, endSelected] = this.selectedValue; // Selected

        if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
          cell.isSelectedStart = true;
          cell.isSelected = true;
        }

        if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
          cell.isSelectedEnd = true;
          cell.isSelected = true;
        }

        if (startHover && endHover) {
          cell.isHoverStart = startHover.isSameMonth(month);
          cell.isHoverEnd = endHover.isSameMonth(month);
          cell.isLastCellInPanel = month.getMonth() === 11;
          cell.isFirstCellInPanel = month.getMonth() === 0;
          cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
        }

        cell.isStartSingle = startSelected && !endSelected;
        cell.isEndSingle = !startSelected && endSelected;
        cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
        cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
        cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
      } else if (month.isSameMonth(this.value)) {
        cell.isSelected = true;
      }

      cell.classMap = this.getClassMap(cell);
    }

    chooseMonth(month) {
      this.value = this.activeDate.setMonth(month);
      this.valueChange.emit(this.value);
    }

  }

  MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) {
    return new (t || MonthTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  MonthTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MonthTableComponent,
    selectors: [["month-table"]],
    exportAs: ["monthTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 3,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
    template: function MonthTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
  return MonthTableComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let DateHeaderComponent = /*#__PURE__*/(() => {
  class DateHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
      super();
      this.dateHelper = dateHelper;
    }

    getSelectors() {
      return [{
        className: `${this.prefixCls}-year-btn`,
        title: this.locale.yearSelect,
        onClick: () => this.changeMode('year'),
        label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
      }, {
        className: `${this.prefixCls}-month-btn`,
        title: this.locale.monthSelect,
        onClick: () => this.changeMode('month'),
        label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
      }];
    }

  }

  DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) {
    return new (t || DateHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  DateHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DateHeaderComponent,
    selectors: [["date-header"]],
    exportAs: ["dateHeader"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 31,
    consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
    template: function DateHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_1_listener() {
          return ctx.superPrevious();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_3_listener() {
          return ctx.previous();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DateHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_7_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_9_listener() {
          return ctx.superNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
  return DateHeaderComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let DateTableComponent = /*#__PURE__*/(() => {
  class DateTableComponent extends AbstractTable {
    constructor(i18n, dateHelper) {
      super();
      this.i18n = i18n;
      this.dateHelper = dateHelper;
    }

    changeValueFromInside(value) {
      // Only change date not change time
      this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
      this.valueChange.emit(this.activeDate);

      if (!this.activeDate.isSameMonth(this.value)) {
        this.render();
      }
    }

    makeHeadRow() {
      const weekDays = [];
      const start = this.activeDate.calendarStart({
        weekStartsOn: this.dateHelper.getFirstDayOfWeek()
      });

      for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
        const day = start.addDays(colIndex);
        weekDays.push({
          trackByIndex: null,
          value: day.nativeDate,
          title: this.dateHelper.format(day.nativeDate, 'E'),
          content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
          isSelected: false,
          isDisabled: false,

          onClick() {},

          onMouseEnter() {}

        });
      }

      return weekDays;
    }

    getVeryShortWeekFormat() {
      return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }

    makeBodyRows() {
      const weekRows = [];
      const firstDayOfMonth = this.activeDate.calendarStart({
        weekStartsOn: this.dateHelper.getFirstDayOfWeek()
      });

      for (let week = 0; week < this.MAX_ROW; week++) {
        const weekStart = firstDayOfMonth.addDays(week * 7);
        const row = {
          isActive: false,
          dateCells: [],
          trackByIndex: week
        };

        for (let day = 0; day < 7; day++) {
          const date = weekStart.addDays(day);
          const dateFormat = transCompatFormat(this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
          const title = this.dateHelper.format(date.nativeDate, dateFormat);
          const label = this.dateHelper.format(date.nativeDate, 'dd');
          const cell = {
            trackByIndex: day,
            value: date.nativeDate,
            label,
            isSelected: false,
            isDisabled: false,
            isToday: false,
            title,
            cellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.cellRender, date),
            fullCellRender: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.fullCellRender, date),
            content: `${date.getDate()}`,
            onClick: () => this.changeValueFromInside(date),
            onMouseEnter: () => this.cellHover.emit(date)
          };
          this.addCellProperty(cell, date);

          if (this.showWeek && !row.weekNum) {
            row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
          }

          if (date.isSameDay(this.value)) {
            row.isActive = date.isSameDay(this.value);
          }

          row.dateCells.push(cell);
        }

        row.classMap = {
          [`ant-picker-week-panel-row`]: this.showWeek,
          [`ant-picker-week-panel-row-selected`]: this.showWeek && row.isActive
        };
        weekRows.push(row);
      }

      return weekRows;
    }

    addCellProperty(cell, date) {
      var _a;

      if (this.hasRangeValue() && !this.showWeek) {
        const [startHover, endHover] = this.hoverValue;
        const [startSelected, endSelected] = this.selectedValue; // Selected

        if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
          cell.isSelectedStart = true;
          cell.isSelected = true;
        }

        if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
          cell.isSelectedEnd = true;
          cell.isSelected = true;
        }

        if (startHover && endHover) {
          cell.isHoverStart = startHover.isSameDay(date);
          cell.isHoverEnd = endHover.isSameDay(date);
          cell.isLastCellInPanel = date.isLastDayOfMonth();
          cell.isFirstCellInPanel = date.isFirstDayOfMonth();
          cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
        }

        cell.isStartSingle = startSelected && !endSelected;
        cell.isEndSingle = !startSelected && endSelected;
        cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
        cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
        cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
      }

      cell.isToday = date.isToday();
      cell.isSelected = date.isSameDay(this.value);
      cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
      cell.classMap = this.getClassMap(cell);
    }

    getClassMap(cell) {
      const date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(cell.value);
      return Object.assign(Object.assign({}, super.getClassMap(cell)), {
        [`ant-picker-cell-today`]: !!cell.isToday,
        [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate)
      });
    }

  }

  DateTableComponent.ɵfac = function DateTableComponent_Factory(t) {
    return new (t || DateTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService));
  };

  DateTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DateTableComponent,
    selectors: [["date-table"]],
    inputs: {
      locale: "locale"
    },
    exportAs: ["dateTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 3,
    consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
    template: function DateTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
  return DateTableComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let InnerPopupComponent = /*#__PURE__*/(() => {
  class InnerPopupComponent {
    constructor() {
      this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // TODO: name is not proper

      this.headerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Emitted when user changed the header's value

      this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Emitted when the date is selected by click the date panel

      this.selectTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Emitted when hover on a day by mouse enter

      this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     *
     * @param direction
     * @param panelMode
     */


    enablePrevNext(direction, panelMode) {
      return !(!this.showTimePicker && panelMode === this.endPanelMode && (this.partType === 'left' && direction === 'next' || this.partType === 'right' && direction === 'prev'));
    }

    onSelectTime(date) {
      this.selectTime.emit(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(date));
    } // The value real changed to outside


    onSelectDate(date) {
      const value = date instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate ? date : new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(date);
      const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue; // Display timeValue when value is null

      if (!this.value && timeValue) {
        value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
      }

      this.selectDate.emit(value);
    }

    onChooseMonth(value) {
      this.activeDate = this.activeDate.setMonth(value.getMonth());

      if (this.endPanelMode === 'month') {
        this.value = value;
        this.selectDate.emit(value);
      } else {
        this.headerChange.emit(value);
        this.panelModeChange.emit(this.endPanelMode);
      }
    }

    onChooseYear(value) {
      this.activeDate = this.activeDate.setYear(value.getYear());

      if (this.endPanelMode === 'year') {
        this.value = value;
        this.selectDate.emit(value);
      } else {
        this.headerChange.emit(value);
        this.panelModeChange.emit(this.endPanelMode);
      }
    }

    onChooseDecade(value) {
      this.activeDate = this.activeDate.setYear(value.getYear());

      if (this.endPanelMode === 'decade') {
        this.value = value;
        this.selectDate.emit(value);
      } else {
        this.headerChange.emit(value);
        this.panelModeChange.emit('year');
      }
    }

    ngOnChanges(changes) {
      if (changes.activeDate && !changes.activeDate.currentValue) {
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      } // New Antd vesion has merged 'date' ant 'time' to one panel,
      // So there is not 'time' panel


      if (changes.panelMode && changes.panelMode.currentValue === 'time') {
        this.panelMode = 'date';
      }
    }

  }

  InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) {
    return new (t || InnerPopupComponent)();
  };

  InnerPopupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InnerPopupComponent,
    selectors: [["inner-popup"]],
    inputs: {
      activeDate: "activeDate",
      endPanelMode: "endPanelMode",
      panelMode: "panelMode",
      showWeek: "showWeek",
      locale: "locale",
      showTimePicker: "showTimePicker",
      timeOptions: "timeOptions",
      disabledDate: "disabledDate",
      dateRender: "dateRender",
      selectedValue: "selectedValue",
      hoverValue: "hoverValue",
      value: "value",
      partType: "partType"
    },
    outputs: {
      panelModeChange: "panelModeChange",
      headerChange: "headerChange",
      selectDate: "selectDate",
      selectTime: "selectTime",
      cellHover: "cellHover"
    },
    exportAs: ["innerPopup"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 11,
    consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]],
    template: function InnerPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InnerPopupComponent_ng_container_6_Template, 4, 17, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-datetime-panel", ctx.showTimePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.panelMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "decade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTimePicker && ctx.timeOptions);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, DecadeHeaderComponent, DecadeTableComponent, YearHeaderComponent, YearTableComponent, MonthHeaderComponent, MonthTableComponent, DateHeaderComponent, DateTableComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__.NzTimePickerPanelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
  return InnerPopupComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let DateRangePopupComponent = /*#__PURE__*/(() => {
  class DateRangePopupComponent {
    constructor(datePickerService, cdr, ngZone, host) {
      this.datePickerService = datePickerService;
      this.cdr = cdr;
      this.ngZone = ngZone;
      this.host = host;
      this.inline = false;
      this.dir = 'ltr';
      this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.calendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.resultOk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Emitted when done with date selecting

      this.prefixCls = PREFIX_CLASS;
      this.endPanelMode = 'date';
      this.timeOptions = null;
      this.hoverValue = []; // Range ONLY

      this.checkedPartArr = [false, false];
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();

      this.disabledStartTime = value => this.disabledTime && this.disabledTime(value, 'start');

      this.disabledEndTime = value => this.disabledTime && this.disabledTime(value, 'end');
    }

    get hasTimePicker() {
      return !!this.showTime;
    }

    get hasFooter() {
      return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }

    ngOnInit() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(() => {
        this.updateActiveDate();
        this.cdr.markForCheck();
      });
      this.ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.fromEvent)(this.host.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(event => event.preventDefault());
      });
    }

    ngOnChanges(changes) {
      // Parse showTime options
      if (changes.showTime || changes.disabledTime) {
        if (this.showTime) {
          this.buildTimeOptions();
        }
      }

      if (changes.panelMode) {
        this.endPanelMode = this.panelMode;
      }

      if (changes.defaultPickerValue) {
        this.updateActiveDate();
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

    updateActiveDate() {
      const activeDate = this.datePickerService.hasValue() ? this.datePickerService.value : this.datePickerService.makeValue(this.defaultPickerValue);
      this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
    }

    onClickOk() {
      const inputIndex = {
        left: 0,
        right: 1
      }[this.datePickerService.activeInput];
      const value = this.isRange ? this.datePickerService.value[inputIndex] : this.datePickerService.value;
      this.changeValueFromSelect(value);
      this.resultOk.emit();
    }

    onClickToday(value) {
      this.changeValueFromSelect(value, !this.showTime);
    }

    onCellHover(value) {
      if (!this.isRange) {
        return;
      }

      const otherInputIndex = {
        left: 1,
        right: 0
      }[this.datePickerService.activeInput];
      const base = this.datePickerService.value[otherInputIndex];

      if (base) {
        if (base.isBeforeDay(value)) {
          this.hoverValue = [base, value];
        } else {
          this.hoverValue = [value, base];
        }
      }
    }

    onPanelModeChange(mode, partType) {
      if (this.isRange) {
        const index = this.datePickerService.getActiveIndex(partType);

        if (index === 0) {
          this.panelMode = [mode, this.panelMode[1]];
        } else {
          this.panelMode = [this.panelMode[0], mode];
        }
      } else {
        this.panelMode = mode;
      }

      this.panelModeChange.emit(this.panelMode);
    }

    onActiveDateChange(value, partType) {
      if (this.isRange) {
        const activeDate = [];
        activeDate[this.datePickerService.getActiveIndex(partType)] = value;
        this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
      } else {
        this.datePickerService.setActiveDate(value);
      }
    }

    onSelectTime(value, partType) {
      if (this.isRange) {
        const newValue = (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.cloneDate)(this.datePickerService.value);
        const index = this.datePickerService.getActiveIndex(partType);
        newValue[index] = this.overrideHms(value, newValue[index]);
        this.datePickerService.setValue(newValue);
      } else {
        const newValue = this.overrideHms(value, this.datePickerService.value);
        this.datePickerService.setValue(newValue); // If not select a date currently, use today
      }

      this.datePickerService.inputPartChange$.next();
      this.buildTimeOptions();
    }

    changeValueFromSelect(value, emitValue = true) {
      if (this.isRange) {
        const selectedValue = (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.cloneDate)(this.datePickerService.value);
        const checkedPart = this.datePickerService.activeInput;
        let nextPart = checkedPart;
        selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
        this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
        this.hoverValue = selectedValue;

        if (emitValue) {
          if (this.inline) {
            // For UE, Should always be reversed, and clear vaue when next part is right
            nextPart = this.reversedPart(checkedPart);

            if (nextPart === 'right') {
              selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
              this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
            }

            this.datePickerService.setValue(selectedValue);
            this.calendarChange.emit(selectedValue);

            if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
              this.clearHoverValue();
              this.datePickerService.emitValue$.next();
            }
          } else {
            /**
             * if sort order is wrong, clear the other part's value
             */
            if ((0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.wrongSortOrder)(selectedValue)) {
              nextPart = this.reversedPart(checkedPart);
              selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
              this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
            }

            this.datePickerService.setValue(selectedValue);
            /**
             * range date usually selected paired,
             * so we emit the date value only both date is allowed and both part are checked
             */

            if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
              this.calendarChange.emit(selectedValue);
              this.clearHoverValue();
              this.datePickerService.emitValue$.next();
            } else if (this.isAllowed(selectedValue)) {
              nextPart = this.reversedPart(checkedPart);
              this.calendarChange.emit([value.clone()]);
            }
          }
        } else {
          this.datePickerService.setValue(selectedValue);
        }

        this.datePickerService.inputPartChange$.next(nextPart);
      } else {
        this.datePickerService.setValue(value);
        this.datePickerService.inputPartChange$.next();

        if (emitValue && this.isAllowed(value)) {
          this.datePickerService.emitValue$.next();
        }
      }
    }

    reversedPart(part) {
      return part === 'left' ? 'right' : 'left';
    }

    getPanelMode(panelMode, partType) {
      if (this.isRange) {
        return panelMode[this.datePickerService.getActiveIndex(partType)];
      } else {
        return panelMode;
      }
    } // Get single value or part value of a range


    getValue(partType) {
      if (this.isRange) {
        return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
      } else {
        return this.datePickerService.value;
      }
    }

    getActiveDate(partType) {
      if (this.isRange) {
        return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
      } else {
        return this.datePickerService.activeDate;
      }
    }

    isOneAllowed(selectedValue) {
      const index = this.datePickerService.getActiveIndex();
      const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
      return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
    }

    isBothAllowed(selectedValue) {
      return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) && isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
    }

    isAllowed(value, isBoth = false) {
      if (this.isRange) {
        return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
      } else {
        return isAllowedDate(value, this.disabledDate, this.disabledTime);
      }
    }

    getTimeOptions(partType) {
      if (this.showTime && this.timeOptions) {
        return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
      }

      return null;
    }

    onClickPresetRange(val) {
      const value = typeof val === 'function' ? val() : val;

      if (value) {
        this.datePickerService.setValue([new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(value[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(value[1])]);
        this.datePickerService.emitValue$.next();
      }
    }

    onPresetRangeMouseLeave() {
      this.clearHoverValue();
    }

    onHoverPresetRange(val) {
      if (typeof val !== 'function') {
        this.hoverValue = [new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(val[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(val[1])];
      }
    }

    getObjectKeys(obj) {
      return obj ? Object.keys(obj) : [];
    }

    show(partType) {
      const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
      return !hide;
    }

    clearHoverValue() {
      this.hoverValue = [];
    }

    buildTimeOptions() {
      if (this.showTime) {
        const showTime = typeof this.showTime === 'object' ? this.showTime : {};

        if (this.isRange) {
          const value = this.datePickerService.value;
          this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
        } else {
          this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
        }
      } else {
        this.timeOptions = null;
      }
    }

    overrideTimeOptions(origin, value, partial) {
      let disabledTimeFn;

      if (partial) {
        disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
      } else {
        disabledTimeFn = this.disabledTime;
      }

      return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }

    overrideHms(newValue, oldValue) {
      newValue = newValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      oldValue = oldValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate();
      return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    }

  }

  DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) {
    return new (t || DateRangePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  DateRangePopupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DateRangePopupComponent,
    selectors: [["date-range-popup"]],
    inputs: {
      isRange: "isRange",
      inline: "inline",
      showWeek: "showWeek",
      locale: "locale",
      disabledDate: "disabledDate",
      disabledTime: "disabledTime",
      showToday: "showToday",
      showNow: "showNow",
      showTime: "showTime",
      extraFooter: "extraFooter",
      ranges: "ranges",
      dateRender: "dateRender",
      panelMode: "panelMode",
      defaultPickerValue: "defaultPickerValue",
      dir: "dir"
    },
    outputs: {
      panelModeChange: "panelModeChange",
      calendarChange: "calendarChange",
      resultOk: "resultOk"
    },
    exportAs: ["dateRangePopup"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 9,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], ["noTimePicker", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]],
    template: function DateRangePopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateRangePopupComponent_ng_container_0_Template, 9, 18, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateRangePopupComponent_ng_template_1_Template, 4, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_3_Template, 2, 18, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DateRangePopupComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRange)("ngIfElse", _r1);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, InnerPopupComponent, CalendarFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
  return DateRangePopupComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

const POPUP_STYLE_PATCH = {
  position: 'relative'
}; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working because the overlay can't get the height/width of it's content)

const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */

let NzDatePickerComponent = /*#__PURE__*/(() => {
  class NzDatePickerComponent {
    // ------------------------------------------------------------------------
    // Input API End
    // ------------------------------------------------------------------------
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, doc, directionality, noAnimation) {
      this.nzConfigService = nzConfigService;
      this.datePickerService = datePickerService;
      this.i18n = i18n;
      this.cdr = cdr;
      this.renderer = renderer;
      this.elementRef = elementRef;
      this.dateHelper = dateHelper;
      this.nzResizeObserver = nzResizeObserver;
      this.platform = platform;
      this.directionality = directionality;
      this.noAnimation = noAnimation;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.isRange = false; // Indicate whether the value is a range value

      this.dir = 'ltr';
      this.panelMode = 'date';
      this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.isCustomPlaceHolder = false;
      this.isCustomFormat = false;
      this.showTime = false; // --- Common API

      this.nzAllowClear = true;
      this.nzAutoFocus = false;
      this.nzDisabled = false;
      this.nzBorderless = false;
      this.nzInputReadOnly = false;
      this.nzInline = false;
      this.nzPlaceHolder = '';
      this.nzPopupStyle = POPUP_STYLE_PATCH;
      this.nzSize = 'default';
      this.nzShowToday = true;
      this.nzMode = 'date';
      this.nzShowNow = true;
      this.nzDefaultPickerValue = null;
      this.nzSeparator = undefined;
      this.nzSuffixIcon = 'calendar';
      this.nzBackdrop = false;
      this.nzId = null; // TODO(@wenqi73) The PanelMode need named for each pickers and export

      this.nzOnPanelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.nzOnCalendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.nzOnOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.inputSize = 12;
      this.prefixCls = PREFIX_CLASS;
      this.activeBarStyle = {};
      this.overlayOpen = false; // Available when "nzOpen" = undefined

      this.overlayPositions = [{
        offsetY: 2,
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        offsetY: -2,
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        offsetY: 2,
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }, {
        offsetY: -2,
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }];
      this.currentPositionX = 'start';
      this.currentPositionY = 'bottom'; // ------------------------------------------------------------------------
      // | Control value accessor implements
      // ------------------------------------------------------------------------
      // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel

      this.onChangeFn = () => void 0;

      this.onTouchedFn = () => void 0;

      this.document = doc;
      this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.CdkOverlayOrigin(this.elementRef);
    }

    get nzShowTime() {
      return this.showTime;
    }

    set nzShowTime(value) {
      this.showTime = typeof value === 'object' ? value : (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.toBoolean)(value);
    }

    get realOpenState() {
      // The value that really decide the open state of overlay
      return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
    }

    ngAfterViewInit() {
      if (this.nzAutoFocus) {
        this.focus();
      }

      if (this.isRange && this.platform.isBrowser) {
        this.nzResizeObserver.observe(this.elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(() => {
          this.updateInputWidthAndArrowLeft();
        });
      }

      this.datePickerService.inputPartChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(partType => {
        if (partType) {
          this.datePickerService.activeInput = partType;
        }

        this.focus();
        this.updateInputWidthAndArrowLeft();
      });
    }

    updateInputWidthAndArrowLeft() {
      var _a, _b, _c;

      this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
      const baseStyle = {
        position: 'absolute',
        width: `${this.inputWidth}px`
      };
      this.datePickerService.arrowLeft = this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;

      if (this.dir === 'rtl') {
        this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), {
          right: `${this.datePickerService.arrowLeft}px`
        });
      } else {
        this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), {
          left: `${this.datePickerService.arrowLeft}px`
        });
      }

      this.cdr.markForCheck();
    }

    getInput(partType) {
      var _a, _b;

      if (this.nzInline) {
        return undefined;
      }

      return this.isRange ? partType === 'left' ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement : this.pickerInput.nativeElement;
    }

    focus() {
      const activeInputElement = this.getInput(this.datePickerService.activeInput);

      if (this.document.activeElement !== activeInputElement) {
        activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
      }
    }

    onFocus(event, partType) {
      event.preventDefault();

      if (partType) {
        this.datePickerService.inputPartChange$.next(partType);
      }

      this.renderClass(true);
    } // blur event has not the relatedTarget in IE11, use focusout instead.


    onFocusout(event) {
      event.preventDefault();

      if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
        this.checkAndClose();
      }

      this.renderClass(false);
    } // Show overlay content


    open() {
      if (this.nzInline) {
        return;
      }

      if (!this.realOpenState && !this.nzDisabled) {
        this.updateInputWidthAndArrowLeft();
        this.overlayOpen = true;
        this.nzOnOpenChange.emit(true);
        this.cdr.markForCheck();
      }
    }

    close() {
      if (this.nzInline) {
        return;
      }

      if (this.realOpenState) {
        this.overlayOpen = false;
        this.nzOnOpenChange.emit(false);
      }
    }

    showClear() {
      return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
    }

    checkAndClose() {
      if (!this.realOpenState) {
        return;
      }

      if (this.panel.isAllowed(this.datePickerService.value, true)) {
        if (Array.isArray(this.datePickerService.value) && (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.wrongSortOrder)(this.datePickerService.value)) {
          const index = this.datePickerService.getActiveIndex();
          const value = this.datePickerService.value[index];
          this.panel.changeValueFromSelect(value, true);
          return;
        }

        this.updateInputValue();
        this.datePickerService.emitValue$.next();
      } else {
        this.datePickerService.setValue(this.datePickerService.initialValue);
        this.close();
      }
    }

    onClickInputBox(event) {
      event.stopPropagation();
      this.focus();

      if (!this.isOpenHandledByUser()) {
        this.open();
      }
    }

    onOverlayKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE) {
        this.datePickerService.initValue();
      }
    } // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429


    onPositionChange(position) {
      this.currentPositionX = position.connectionPair.originX;
      this.currentPositionY = position.connectionPair.originY;
      this.cdr.detectChanges(); // Take side-effects to position styles
    }

    onClickClear(event) {
      event.preventDefault();
      event.stopPropagation();
      this.datePickerService.initValue(true);
      this.datePickerService.emitValue$.next();
    }

    updateInputValue() {
      const newValue = this.datePickerService.value;

      if (this.isRange) {
        this.inputValue = newValue ? newValue.map(v => this.formatValue(v)) : ['', ''];
      } else {
        this.inputValue = this.formatValue(newValue);
      }

      this.cdr.markForCheck();
    }

    formatValue(value) {
      return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
    }

    onInputChange(value, isEnter = false) {
      /**
       * in IE11 focus/blur will trigger ngModelChange if placeholder changes,
       * so we forbidden IE11 to open panel through input change
       */
      if (!this.platform.TRIDENT && this.document.activeElement === this.getInput(this.datePickerService.activeInput) && !this.realOpenState) {
        this.open();
        return;
      }

      const date = this.checkValidDate(value); // Can only change date when it's open

      if (date && this.realOpenState) {
        this.panel.changeValueFromSelect(date, isEnter);
      }
    }

    onKeyupEnter(event) {
      this.onInputChange(event.target.value, true);
    }

    checkValidDate(value) {
      const date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate(this.dateHelper.parseDate(value, this.nzFormat));

      if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
        return null;
      }

      return date;
    }

    getPlaceholder(partType) {
      return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
    }

    isEmptyValue(value) {
      if (value === null) {
        return true;
      } else if (this.isRange) {
        return !value || !Array.isArray(value) || value.every(val => !val);
      } else {
        return !value;
      }
    } // Whether open state is permanently controlled by user himself


    isOpenHandledByUser() {
      return this.nzOpen !== undefined;
    }

    ngOnInit() {
      var _a; // Subscribe the every locale change if the nzLocale is not handled by user


      if (!this.nzLocale) {
        this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(() => this.setLocale());
      } // Default value


      this.datePickerService.isRange = this.isRange;
      this.datePickerService.initValue(true);
      this.datePickerService.emitValue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(_ => {
        var _a, _b, _c, _d;

        const value = this.datePickerService.value;
        this.datePickerService.initialValue = (0,ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.cloneDate)(value);

        if (this.isRange) {
          const vAsRange = value;

          if (vAsRange.length) {
            this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
          } else {
            this.onChangeFn([]);
          }
        } else {
          if (value) {
            this.onChangeFn(value.nativeDate);
          } else {
            this.onChangeFn(null);
          }
        }

        this.onTouchedFn(); // When value emitted, overlay will be closed

        this.close();
      });
      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(direction => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
      this.inputValue = this.isRange ? ['', ''] : '';
      this.setModeAndFormat();
      this.datePickerService.valueChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(() => {
        this.updateInputValue();
      });
    }

    ngOnChanges(changes) {
      var _a, _b;

      if (changes.nzPopupStyle) {
        // Always assign the popup style patch
        this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
      } // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time


      if ((_a = changes.nzPlaceHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
        this.isCustomPlaceHolder = true;
      }

      if ((_b = changes.nzFormat) === null || _b === void 0 ? void 0 : _b.currentValue) {
        this.isCustomFormat = true;
      }

      if (changes.nzLocale) {
        // The nzLocale is currently handled by user
        this.setDefaultPlaceHolder();
      }

      if (changes.nzRenderExtraFooter) {
        this.extraFooter = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.valueFunctionProp)(this.nzRenderExtraFooter);
      }

      if (changes.nzMode) {
        this.setDefaultPlaceHolder();
        this.setModeAndFormat();
      }
    }

    ngOnDestroy() {
      this.destroyed$.next();
      this.destroyed$.complete();
    }

    setModeAndFormat() {
      const inputFormats = {
        year: 'yyyy',
        month: 'yyyy-MM',
        week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
        date: this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
      };

      if (!this.nzMode) {
        this.nzMode = 'date';
      }

      this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode; // Default format when it's empty

      if (!this.isCustomFormat) {
        this.nzFormat = inputFormats[this.nzMode];
      }

      this.inputSize = Math.max(10, this.nzFormat.length) + 2;
      this.updateInputValue();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     *
     * @param open The overlayOpen in picker component
     */


    onOpenChange(open) {
      this.nzOnOpenChange.emit(open);
    }

    writeValue(value) {
      this.setValue(value);
      this.cdr.markForCheck();
    }

    registerOnChange(fn) {
      this.onChangeFn = fn;
    }

    registerOnTouched(fn) {
      this.onTouchedFn = fn;
    }

    setDisabledState(isDisabled) {
      this.nzDisabled = isDisabled;
      this.cdr.markForCheck();
    } // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects


    setLocale() {
      this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
      this.setDefaultPlaceHolder();
      this.cdr.markForCheck();
    }

    setDefaultPlaceHolder() {
      if (!this.isCustomPlaceHolder && this.nzLocale) {
        const defaultPlaceholder = {
          year: this.getPropertyOfLocale('yearPlaceholder'),
          month: this.getPropertyOfLocale('monthPlaceholder'),
          week: this.getPropertyOfLocale('weekPlaceholder'),
          date: this.getPropertyOfLocale('placeholder')
        };
        const defaultRangePlaceholder = {
          year: this.getPropertyOfLocale('rangeYearPlaceholder'),
          month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
          week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
          date: this.getPropertyOfLocale('rangePlaceholder')
        };
        this.nzPlaceHolder = this.isRange ? defaultRangePlaceholder[this.nzMode] : defaultPlaceholder[this.nzMode];
      }
    }

    getPropertyOfLocale(type) {
      return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    } // Safe way of setting value with default


    setValue(value) {
      const newValue = this.datePickerService.makeValue(value);
      this.datePickerService.setValue(newValue);
      this.datePickerService.initialValue = newValue;
    }

    renderClass(value) {
      // TODO: avoid autoFocus cause change after checked error
      if (value) {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
      }
    }

    onPanelModeChange(panelMode) {
      this.nzOnPanelChange.emit(panelMode);
    } // Emit nzOnCalendarChange when select date by nz-range-picker


    onCalendarChange(value) {
      if (this.isRange && Array.isArray(value)) {
        const rangeValue = value.filter(x => x instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.CandyDate).map(x => x.nativeDate);
        this.nzOnCalendarChange.emit(rangeValue);
      }
    }

    onResultOk() {
      var _a, _b;

      if (this.isRange) {
        const value = this.datePickerService.value;

        if (value.length) {
          this.nzOnOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
        } else {
          this.nzOnOk.emit([]);
        }
      } else {
        if (this.datePickerService.value) {
          this.nzOnOk.emit(this.datePickerService.value.nativeDate);
        } else {
          this.nzOnOk.emit(null);
        }
      }
    }

  }

  NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) {
    return new (t || NzDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_17__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.DateHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_18__.NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_21__.NzNoAnimationDirective, 9));
  };

  NzDatePickerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDatePickerComponent,
    selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]],
    viewQuery: function NzDatePickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.CdkConnectedOverlay, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DateRangePopupComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.separatorElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pickerInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rangePickerInputs = _t);
      }
    },
    hostVars: 16,
    hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDatePickerComponent_click_HostBindingHandler($event) {
          return ctx.onClickInputBox($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker", true)("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless)("ant-picker-inline", ctx.nzInline);
      }
    },
    inputs: {
      nzAllowClear: "nzAllowClear",
      nzAutoFocus: "nzAutoFocus",
      nzDisabled: "nzDisabled",
      nzBorderless: "nzBorderless",
      nzInputReadOnly: "nzInputReadOnly",
      nzInline: "nzInline",
      nzOpen: "nzOpen",
      nzDisabledDate: "nzDisabledDate",
      nzLocale: "nzLocale",
      nzPlaceHolder: "nzPlaceHolder",
      nzPopupStyle: "nzPopupStyle",
      nzDropdownClassName: "nzDropdownClassName",
      nzSize: "nzSize",
      nzFormat: "nzFormat",
      nzDateRender: "nzDateRender",
      nzDisabledTime: "nzDisabledTime",
      nzRenderExtraFooter: "nzRenderExtraFooter",
      nzShowToday: "nzShowToday",
      nzMode: "nzMode",
      nzShowNow: "nzShowNow",
      nzRanges: "nzRanges",
      nzDefaultPickerValue: "nzDefaultPickerValue",
      nzSeparator: "nzSeparator",
      nzSuffixIcon: "nzSuffixIcon",
      nzBackdrop: "nzBackdrop",
      nzId: "nzId",
      nzShowTime: "nzShowTime"
    },
    outputs: {
      nzOnPanelChange: "nzOnPanelChange",
      nzOnCalendarChange: "nzOnCalendarChange",
      nzOnOk: "nzOnOk",
      nzOnOpenChange: "nzOnOpenChange"
    },
    exportAs: ["nzDatePicker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DatePickerService, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzDatePickerComponent)
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 7,
    consts: [[4, "ngIf", "ngIfElse"], ["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown"], [3, "class", 4, "ngIf"], [4, "ngIf"], ["autocomplete", "off", 3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "focusout", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], ["autocomplete", "off", 3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "focusout", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [3, "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"]],
    template: function NzDatePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDatePickerComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDatePickerComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDatePickerComponent_ng_template_3_Template, 4, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDatePickerComponent_ng_template_5_Template, 2, 36, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDatePickerComponent_ng_template_7_Template, 2, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_7_listener($event) {
          return ctx.onPositionChange($event);
        })("detach", function NzDatePickerComponent_Template_ng_template_detach_7_listener() {
          return ctx.close();
        })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_7_listener($event) {
          return ctx.onOverlayKeydown($event);
        });
      }

      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzInline)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.CdkConnectedOverlay, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__.NzConnectedOverlayDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_24__.NzStringTemplateOutletDirective, DateRangePopupComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Dir, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_21__.NzNoAnimationDirective],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.slideMotion]
    },
    changeDetection: 0
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzAllowClear", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzDisabled", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzBorderless", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzInline", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzOpen", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzShowToday", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__.InputBoolean)()], NzDatePickerComponent.prototype, "nzShowNow", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_17__.WithConfig)()], NzDatePickerComponent.prototype, "nzSeparator", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_17__.WithConfig)()], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_17__.WithConfig)()], NzDatePickerComponent.prototype, "nzBackdrop", void 0);

  return NzDatePickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let LibPackerModule = /*#__PURE__*/(() => {
  class LibPackerModule {}

  LibPackerModule.ɵfac = function LibPackerModule_Factory(t) {
    return new (t || LibPackerModule)();
  };

  LibPackerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: LibPackerModule
  });
  LibPackerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__.NzTimePickerModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_24__.NzOutletModule]]
  });
  return LibPackerModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let NzMonthPickerComponent = /*#__PURE__*/(() => {
  class NzMonthPickerComponent {
    constructor(datePicker) {
      this.datePicker = datePicker;
      this.datePicker.nzMode = 'month';
    }

  }

  NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) {
    return new (t || NzMonthPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
  };

  NzMonthPickerComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzMonthPickerComponent,
    selectors: [["nz-month-picker"]],
    exportAs: ["nzMonthPicker"]
  });
  return NzMonthPickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let NzRangePickerComponent = /*#__PURE__*/(() => {
  class NzRangePickerComponent {
    constructor(datePicker) {
      this.datePicker = datePicker;
      this.datePicker.isRange = true;
    }

  }

  NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) {
    return new (t || NzRangePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
  };

  NzRangePickerComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzRangePickerComponent,
    selectors: [["nz-range-picker"]],
    exportAs: ["nzRangePicker"]
  });
  return NzRangePickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let NzWeekPickerComponent = /*#__PURE__*/(() => {
  class NzWeekPickerComponent {
    constructor(datePicker) {
      this.datePicker = datePicker;
      this.datePicker.nzMode = 'week';
    }

  }

  NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) {
    return new (t || NzWeekPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
  };

  NzWeekPickerComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzWeekPickerComponent,
    selectors: [["nz-week-picker"]],
    exportAs: ["nzWeekPicker"]
  });
  return NzWeekPickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix


let NzYearPickerComponent = /*#__PURE__*/(() => {
  class NzYearPickerComponent {
    constructor(datePicker) {
      this.datePicker = datePicker;
      this.datePicker.nzMode = 'year';
    }

  }

  NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) {
    return new (t || NzYearPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
  };

  NzYearPickerComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzYearPickerComponent,
    selectors: [["nz-year-picker"]],
    exportAs: ["nzYearPicker"]
  });
  return NzYearPickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzDatePickerModule = /*#__PURE__*/(() => {
  class NzDatePickerModule {}

  NzDatePickerModule.ɵfac = function NzDatePickerModule_Factory(t) {
    return new (t || NzDatePickerModule)();
  };

  NzDatePickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzDatePickerModule
  });
  NzDatePickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.OverlayModule, LibPackerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_21__.NzNoAnimationModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_24__.NzOutletModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__.NzTimePickerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, LibPackerModule]]
  });
  return NzDatePickerModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9671:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTooltipIcon": () => (/* binding */ DefaultTooltipIcon),
/* harmony export */   "NzFormControlComponent": () => (/* binding */ NzFormControlComponent),
/* harmony export */   "NzFormDirective": () => (/* binding */ NzFormDirective),
/* harmony export */   "NzFormItemComponent": () => (/* binding */ NzFormItemComponent),
/* harmony export */   "NzFormLabelComponent": () => (/* binding */ NzFormLabelComponent),
/* harmony export */   "NzFormModule": () => (/* binding */ NzFormModule),
/* harmony export */   "NzFormSplitComponent": () => (/* binding */ NzFormSplitComponent),
/* harmony export */   "NzFormTextComponent": () => (/* binding */ NzFormTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 2920);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 6906);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/

const _c0 = ["*"];

function NzFormControlComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.iconType);
  }
}

function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.innerTip);
  }
}

const _c1 = function (a0) {
  return [a0];
};

const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};

function NzFormControlComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@helpMotion", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, "ant-form-item-explain-" + ctx_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.innerTip)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r1.validateControl));
  }
}

function NzFormControlComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nzExtra);
  }
}

function NzFormControlComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzFormControlComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
  }
}

function NzFormLabelComponent_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const tooltipIconType_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", tooltipIconType_r2)("nzTheme", ctx_r1.tooltipIcon.theme);
  }
}

function NzFormLabelComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzFormLabelComponent_span_2_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r0.nzTooltipTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.tooltipIcon.type);
  }
}

let NzFormItemComponent = /*#__PURE__*/(() => {
  class NzFormItemComponent {
    constructor(elementRef, renderer, cdr) {
      this.cdr = cdr;
      this.status = null;
      this.hasFeedback = false;
      this.withHelpClass = false;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }

    setWithHelpViaTips(value) {
      this.withHelpClass = value;
      this.cdr.markForCheck();
    }

    setStatus(status) {
      this.status = status;
      this.cdr.markForCheck();
    }

    setHasFeedback(hasFeedback) {
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) {
    return new (t || NzFormItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };

  NzFormItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzFormItemComponent,
    selectors: [["nz-form-item"]],
    hostVars: 12,
    hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
      }
    },
    exportAs: ["nzFormItem"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzFormItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return NzFormItemComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

const NZ_CONFIG_MODULE_NAME = 'form';
const DefaultTooltipIcon = {
  type: 'question-circle',
  theme: 'outline'
};
let NzFormDirective = /*#__PURE__*/(() => {
  class NzFormDirective {
    constructor(nzConfigService, elementRef, renderer, directionality) {
      var _a;

      this.nzConfigService = nzConfigService;
      this.renderer = renderer;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.nzLayout = 'horizontal';
      this.nzNoColon = false;
      this.nzAutoTips = {};
      this.nzDisableAutoTips = false;
      this.nzTooltipIcon = DefaultTooltipIcon;
      this.dir = 'ltr';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.renderer.addClass(elementRef.nativeElement, 'ant-form');
      this.dir = this.directionality.value;
      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
      });
    }

    getInputObservable(changeType) {
      return this.inputChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(changes => changeType in changes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => value[changeType]));
    }

    ngOnChanges(changes) {
      this.inputChanges$.next(changes);
    }

    ngOnDestroy() {
      this.inputChanges$.complete();
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzFormDirective.ɵfac = function NzFormDirective_Factory(t) {
    return new (t || NzFormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8));
  };

  NzFormDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzFormDirective,
    selectors: [["", "nz-form", ""]],
    hostVars: 8,
    hostBindings: function NzFormDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzLayout: "nzLayout",
      nzNoColon: "nzNoColon",
      nzAutoTips: "nzAutoTips",
      nzDisableAutoTips: "nzDisableAutoTips",
      nzTooltipIcon: "nzTooltipIcon"
    },
    exportAs: ["nzForm"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()], NzFormDirective.prototype, "nzNoColon", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)()], NzFormDirective.prototype, "nzAutoTips", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()], NzFormDirective.prototype, "nzDisableAutoTips", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)()], NzFormDirective.prototype, "nzTooltipIcon", void 0);

  return NzFormDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const iconTypeMap = {
  error: 'close-circle-fill',
  validating: 'loading',
  success: 'check-circle-fill',
  warning: 'exclamation-circle-fill'
};
let NzFormControlComponent = /*#__PURE__*/(() => {
  class NzFormControlComponent {
    constructor(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
      var _a, _b;

      this.nzFormItemComponent = nzFormItemComponent;
      this.cdr = cdr;
      this.nzFormDirective = nzFormDirective;
      this._hasFeedback = false;
      this.validateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
      this.validateString = null;
      this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.status = null;
      this.validateControl = null;
      this.iconType = null;
      this.innerTip = null;
      this.nzAutoTips = {};
      this.nzDisableAutoTips = 'default';
      renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
      this.subscribeAutoTips(i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(locale => this.localeId = locale.locale)));
      this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
      this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.nzDisableAutoTips === 'default')));
    }

    get disableAutoTips() {
      var _a;

      return this.nzDisableAutoTips !== 'default' ? (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.toBoolean)(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
    }

    set nzHasFeedback(value) {
      this._hasFeedback = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.toBoolean)(value);

      if (this.nzFormItemComponent) {
        this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
      }
    }

    get nzHasFeedback() {
      return this._hasFeedback;
    }

    set nzValidateStatus(value) {
      if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.AbstractControl || value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel) {
        this.validateControl = value;
        this.validateString = null;
        this.watchControl();
      } else if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName) {
        this.validateControl = value.control;
        this.validateString = null;
        this.watchControl();
      } else {
        this.validateString = value;
        this.validateControl = null;
        this.setStatus();
      }
    }

    watchControl() {
      this.validateChanges.unsubscribe();
      /** miss detect https://github.com/angular/angular/issues/10887 **/

      if (this.validateControl && this.validateControl.statusChanges) {
        this.validateChanges = this.validateControl.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(_ => {
          if (!this.disableAutoTips) {
            this.updateAutoErrorTip();
          }

          this.setStatus();
          this.cdr.markForCheck();
        });
      }
    }

    setStatus() {
      this.status = this.getControlStatus(this.validateString);
      this.iconType = this.status ? iconTypeMap[this.status] : null;
      this.innerTip = this.getInnerTip(this.status);

      if (this.nzFormItemComponent) {
        this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
        this.nzFormItemComponent.setStatus(this.status);
      }
    }

    getControlStatus(validateString) {
      let status;

      if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
        status = 'warning';
      } else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
        status = 'error';
      } else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
        status = 'validating';
      } else if (validateString === 'success' || this.validateControlStatus('VALID')) {
        status = 'success';
      } else {
        status = null;
      }

      return status;
    }

    validateControlStatus(validStatus, statusType) {
      if (!this.validateControl) {
        return false;
      } else {
        const {
          dirty,
          touched,
          status
        } = this.validateControl;
        return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
      }
    }

    getInnerTip(status) {
      switch (status) {
        case 'error':
          return !this.disableAutoTips && this.autoErrorTip || this.nzErrorTip || null;

        case 'validating':
          return this.nzValidatingTip || null;

        case 'success':
          return this.nzSuccessTip || null;

        case 'warning':
          return this.nzWarningTip || null;

        default:
          return null;
      }
    }

    updateAutoErrorTip() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

      if (this.validateControl) {
        const errors = this.validateControl.errors || {};
        let autoErrorTip = '';

        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.nzAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.nzAutoTips.default) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.nzFormDirective) === null || _h === void 0 ? void 0 : _h.nzAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.nzFormDirective) === null || _m === void 0 ? void 0 : _m.nzAutoTips.default) === null || _o === void 0 ? void 0 : _o[key];
          }

          if (!!autoErrorTip) {
            break;
          }
        }

        this.autoErrorTip = autoErrorTip;
      }
    }

    subscribeAutoTips(observable) {
      observable === null || observable === void 0 ? void 0 : observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(() => {
        if (!this.disableAutoTips) {
          this.updateAutoErrorTip();
          this.setStatus();
          this.cdr.markForCheck();
        }
      });
    }

    ngOnChanges(changes) {
      const {
        nzDisableAutoTips,
        nzAutoTips,
        nzSuccessTip,
        nzWarningTip,
        nzErrorTip,
        nzValidatingTip
      } = changes;

      if (nzDisableAutoTips || nzAutoTips) {
        this.updateAutoErrorTip();
        this.setStatus();
      } else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
        this.setStatus();
      }
    }

    ngOnInit() {
      this.setStatus();
    }

    ngOnDestroy() {
      this.destroyed$.next();
      this.destroyed$.complete();
    }

    ngAfterContentInit() {
      if (!this.validateControl && !this.validateString) {
        if (this.defaultValidateControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective) {
          this.nzValidateStatus = this.defaultValidateControl.control;
        } else {
          this.nzValidateStatus = this.defaultValidateControl;
        }
      }
    }

  }

  NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) {
    return new (t || NzFormControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzFormItemComponent, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzFormDirective, 8));
  };

  NzFormControlComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzFormControlComponent,
    selectors: [["nz-form-control"]],
    contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControl, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultValidateControl = _t.first);
      }
    },
    inputs: {
      nzSuccessTip: "nzSuccessTip",
      nzWarningTip: "nzWarningTip",
      nzErrorTip: "nzErrorTip",
      nzValidatingTip: "nzValidatingTip",
      nzExtra: "nzExtra",
      nzAutoTips: "nzAutoTips",
      nzDisableAutoTips: "nzDisableAutoTips",
      nzHasFeedback: "nzHasFeedback",
      nzValidateStatus: "nzValidateStatus"
    },
    exportAs: ["nzFormControl"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 7,
    vars: 3,
    consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-item-explain ant-form-item-explain-connected", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-item-explain", "ant-form-item-explain-connected"], ["role", "alert", 3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]],
    template: function NzFormControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzFormControlComponent_div_5_Template, 3, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzFormControlComponent_div_6_Template, 2, 1, "div", 5);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzHasFeedback && ctx.iconType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.innerTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzExtra);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_17__.helpMotion]
    },
    changeDetection: 0
  });
  return NzFormControlComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

function toTooltipIcon(value) {
  const icon = typeof value === 'string' ? {
    type: value
  } : value;
  return Object.assign(Object.assign({}, DefaultTooltipIcon), icon);
}

let NzFormLabelComponent = /*#__PURE__*/(() => {
  class NzFormLabelComponent {
    constructor(elementRef, renderer, cdr, nzFormDirective) {
      this.cdr = cdr;
      this.nzFormDirective = nzFormDirective;
      this.nzRequired = false;
      this.noColon = 'default';
      this._tooltipIcon = 'default';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');

      if (this.nzFormDirective) {
        this.nzFormDirective.getInputObservable('nzNoColon').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.noColon === 'default'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
        this.nzFormDirective.getInputObservable('nzTooltipIcon').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this._tooltipIcon === 'default'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      }
    }

    set nzNoColon(value) {
      this.noColon = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.toBoolean)(value);
    }

    get nzNoColon() {
      var _a;

      return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
    }

    set nzTooltipIcon(value) {
      this._tooltipIcon = toTooltipIcon(value);
    } // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`


    get tooltipIcon() {
      var _a;

      return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzTooltipIcon) || DefaultTooltipIcon);
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) {
    return new (t || NzFormLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzFormDirective, 12));
  };

  NzFormLabelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzFormLabelComponent,
    selectors: [["nz-form-label"]],
    inputs: {
      nzFor: "nzFor",
      nzRequired: "nzRequired",
      nzNoColon: "nzNoColon",
      nzTooltipTitle: "nzTooltipTitle",
      nzTooltipIcon: "nzTooltipIcon"
    },
    exportAs: ["nzFormLabel"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 6,
    consts: [["class", "ant-form-item-tooltip", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]],
    template: function NzFormLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzFormLabelComponent_span_2_Template, 2, 2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.nzFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTooltipTitle);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()], NzFormLabelComponent.prototype, "nzRequired", void 0);

  return NzFormLabelComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzFormSplitComponent = /*#__PURE__*/(() => {
  class NzFormSplitComponent {
    constructor(elementRef, renderer) {
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }

  }

  NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) {
    return new (t || NzFormSplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  NzFormSplitComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzFormSplitComponent,
    selectors: [["nz-form-split"]],
    exportAs: ["nzFormSplit"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzFormSplitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return NzFormSplitComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzFormTextComponent = /*#__PURE__*/(() => {
  class NzFormTextComponent {
    constructor(elementRef, renderer) {
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }

  }

  NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) {
    return new (t || NzFormTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  NzFormTextComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzFormTextComponent,
    selectors: [["nz-form-text"]],
    exportAs: ["nzFormText"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzFormTextComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return NzFormTextComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzFormModule = /*#__PURE__*/(() => {
  class NzFormModule {}

  NzFormModule.ɵfac = function NzFormModule_Factory(t) {
    return new (t || NzFormModule)();
  };

  NzFormModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzFormModule
  });
  NzFormModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzGridModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__.PlatformModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__.NzOutletModule], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzGridModule]
  });
  return NzFormModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3395:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzColDirective": () => (/* binding */ NzColDirective),
/* harmony export */   "NzGridModule": () => (/* binding */ NzGridModule),
/* harmony export */   "NzRowDirective": () => (/* binding */ NzRowDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);














let NzRowDirective = /*#__PURE__*/(() => {
  class NzRowDirective {
    constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.mediaMatcher = mediaMatcher;
      this.ngZone = ngZone;
      this.platform = platform;
      this.breakpointService = breakpointService;
      this.directionality = directionality;
      this.nzAlign = null;
      this.nzJustify = null;
      this.nzGutter = null;
      this.actualGutter$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
      this.dir = 'ltr';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    getGutter() {
      const results = [null, null];
      const gutter = this.nzGutter || 0;
      const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
      normalizedGutter.forEach((g, index) => {
        if (typeof g === 'object' && g !== null) {
          results[index] = null;
          Object.keys(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__.gridResponsiveMap).map(screen => {
            const bp = screen;

            if (this.mediaMatcher.matchMedia(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__.gridResponsiveMap[bp]).matches && g[bp]) {
              results[index] = g[bp];
            }
          });
        } else {
          results[index] = Number(g) || null;
        }
      });
      return results;
    }

    setGutterStyle() {
      const [horizontalGutter, verticalGutter] = this.getGutter();
      this.actualGutter$.next([horizontalGutter, verticalGutter]);

      const renderGutter = (name, gutter) => {
        const nativeElement = this.elementRef.nativeElement;

        if (gutter !== null) {
          this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
        }
      };

      renderGutter('margin-left', horizontalGutter);
      renderGutter('margin-right', horizontalGutter);
      renderGutter('margin-top', verticalGutter);
      renderGutter('margin-bottom', verticalGutter);
    }

    ngOnInit() {
      var _a;

      this.dir = this.directionality.value;
      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
      });
      this.setGutterStyle();
    }

    ngOnChanges(changes) {
      if (changes.nzGutter) {
        this.setGutterStyle();
      }
    }

    ngAfterViewInit() {
      if (this.platform.isBrowser) {
        this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__.gridResponsiveMap).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(() => {
          this.setGutterStyle();
        });
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzRowDirective.ɵfac = function NzRowDirective_Factory(t) {
    return new (t || NzRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__.NzBreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality, 8));
  };

  NzRowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: NzRowDirective,
    selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
    hostAttrs: [1, "ant-row"],
    hostVars: 18,
    hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzAlign: "nzAlign",
      nzJustify: "nzJustify",
      nzGutter: "nzGutter"
    },
    exportAs: ["nzRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return NzRowDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzColDirective = /*#__PURE__*/(() => {
  class NzColDirective {
    constructor(elementRef, nzRowDirective, renderer, directionality) {
      this.elementRef = elementRef;
      this.nzRowDirective = nzRowDirective;
      this.renderer = renderer;
      this.directionality = directionality;
      this.classMap = {};
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.hostFlexStyle = null;
      this.dir = 'ltr';
      this.nzFlex = null;
      this.nzSpan = null;
      this.nzOrder = null;
      this.nzOffset = null;
      this.nzPush = null;
      this.nzPull = null;
      this.nzXs = null;
      this.nzSm = null;
      this.nzMd = null;
      this.nzLg = null;
      this.nzXl = null;
      this.nzXXl = null;
    }

    setHostClassMap() {
      const hostClassMap = Object.assign({
        ['ant-col']: true,
        [`ant-col-${this.nzSpan}`]: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this.nzSpan),
        [`ant-col-order-${this.nzOrder}`]: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this.nzOrder),
        [`ant-col-offset-${this.nzOffset}`]: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this.nzOffset),
        [`ant-col-pull-${this.nzPull}`]: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this.nzPull),
        [`ant-col-push-${this.nzPush}`]: (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this.nzPush),
        ['ant-col-rtl']: this.dir === 'rtl'
      }, this.generateClass());

      for (const i in this.classMap) {
        if (this.classMap.hasOwnProperty(i)) {
          this.renderer.removeClass(this.elementRef.nativeElement, i);
        }
      }

      this.classMap = Object.assign({}, hostClassMap);

      for (const i in this.classMap) {
        if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
          this.renderer.addClass(this.elementRef.nativeElement, i);
        }
      }
    }

    setHostFlexStyle() {
      this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }

    parseFlex(flex) {
      if (typeof flex === 'number') {
        return `${flex} ${flex} auto`;
      } else if (typeof flex === 'string') {
        if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
          return `0 0 ${flex}`;
        }
      }

      return flex;
    }

    generateClass() {
      const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
      const listClassMap = {};
      listOfSizeInputName.forEach(name => {
        const sizeName = name.replace('nz', '').toLowerCase();

        if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(this[name])) {
          if (typeof this[name] === 'number' || typeof this[name] === 'string') {
            listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
          } else {
            const embedded = this[name];
            const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
            prefixArray.forEach(prefix => {
              const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
              listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.isNotNil)(embedded[prefix]);
            });
          }
        }
      });
      return listClassMap;
    }

    ngOnInit() {
      this.dir = this.directionality.value;
      this.directionality.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
        this.setHostClassMap();
      });
      this.setHostClassMap();
      this.setHostFlexStyle();
    }

    ngOnChanges(changes) {
      this.setHostClassMap();
      const {
        nzFlex
      } = changes;

      if (nzFlex) {
        this.setHostFlexStyle();
      }
    }

    ngAfterViewInit() {
      if (this.nzRowDirective) {
        this.nzRowDirective.actualGutter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
          const renderGutter = (name, gutter) => {
            const nativeElement = this.elementRef.nativeElement;

            if (gutter !== null) {
              this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
            }
          };

          renderGutter('padding-left', horizontalGutter);
          renderGutter('padding-right', horizontalGutter);
          renderGutter('padding-top', verticalGutter);
          renderGutter('padding-bottom', verticalGutter);
        });
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzColDirective.ɵfac = function NzColDirective_Factory(t) {
    return new (t || NzColDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzRowDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality, 8));
  };

  NzColDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: NzColDirective,
    selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
    hostVars: 2,
    hostBindings: function NzColDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("flex", ctx.hostFlexStyle);
      }
    },
    inputs: {
      nzFlex: "nzFlex",
      nzSpan: "nzSpan",
      nzOrder: "nzOrder",
      nzOffset: "nzOffset",
      nzPush: "nzPush",
      nzPull: "nzPull",
      nzXs: "nzXs",
      nzSm: "nzSm",
      nzMd: "nzMd",
      nzLg: "nzLg",
      nzXl: "nzXl",
      nzXXl: "nzXXl"
    },
    exportAs: ["nzCol"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return NzColDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzGridModule = /*#__PURE__*/(() => {
  class NzGridModule {}

  NzGridModule.ɵfac = function NzGridModule_Factory(t) {
    return new (t || NzGridModule)();
  };

  NzGridModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NzGridModule
  });
  NzGridModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.LayoutModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.PlatformModule]]
  });
  return NzGridModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2077:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzAutosizeDirective": () => (/* binding */ NzAutosizeDirective),
/* harmony export */   "NzInputDirective": () => (/* binding */ NzInputDirective),
/* harmony export */   "NzInputGroupComponent": () => (/* binding */ NzInputGroupComponent),
/* harmony export */   "NzInputGroupSlotComponent": () => (/* binding */ NzInputGroupSlotComponent),
/* harmony export */   "NzInputGroupWhitSuffixOrPrefixDirective": () => (/* binding */ NzInputGroupWhitSuffixOrPrefixDirective),
/* harmony export */   "NzInputModule": () => (/* binding */ NzInputModule),
/* harmony export */   "NzTextareaCountComponent": () => (/* binding */ NzTextareaCountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);



















const _c0 = ["nz-input-group-slot", ""];

function NzInputGroupSlotComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.icon);
  }
}

function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.template);
  }
}

function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.nzAddOnBeforeIcon)("template", ctx_r7.nzAddOnBefore);
  }
}

function NzInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) {}

function NzInputGroupComponent_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.nzAddOnAfterIcon)("template", ctx_r9.nzAddOnAfter);
  }
}

function NzInputGroupComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon);
  }
}

function NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) {}

function NzInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzInputGroupComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
  }
}

function NzInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r13.nzPrefixIcon)("template", ctx_r13.nzPrefix);
  }
}

function NzInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) {}

function NzInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r15.nzSuffixIcon)("template", ctx_r15.nzSuffix);
  }
}

function NzInputGroupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nzPrefix || ctx_r4.nzPrefixIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nzSuffix || ctx_r4.nzSuffixIcon);
  }
}

function NzInputGroupComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c1 = ["*"];
const _c2 = [[["textarea", "nz-input", ""]]];
const _c3 = ["textarea[nz-input]"];
let NzInputDirective = /*#__PURE__*/(() => {
  class NzInputDirective {
    constructor(ngControl, renderer, elementRef, directionality) {
      this.ngControl = ngControl;
      this.directionality = directionality;
      this.nzBorderless = false;
      this.nzSize = 'default';
      this._disabled = false;
      this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.dir = 'ltr';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      renderer.addClass(elementRef.nativeElement, 'ant-input');
    }

    get disabled() {
      if (this.ngControl && this.ngControl.disabled !== null) {
        return this.ngControl.disabled;
      }

      return this._disabled;
    }

    set disabled(value) {
      this._disabled = value != null && `${value}` !== 'false';
    }

    ngOnInit() {
      var _a, _b;

      if (this.ngControl) {
        (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(() => this.ngControl.disabled !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(() => {
          this.disabled$.next(this.ngControl.disabled);
        });
      }

      this.dir = this.directionality.value;
      (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
      });
    }

    ngOnChanges(changes) {
      const {
        disabled
      } = changes;

      if (disabled) {
        this.disabled$.next(this.disabled);
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzInputDirective.ɵfac = function NzInputDirective_Factory(t) {
    return new (t || NzInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality, 8));
  };

  NzInputDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzInputDirective,
    selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]],
    hostVars: 11,
    hostBindings: function NzInputDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.nzBorderless)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small")("ant-input-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzBorderless: "nzBorderless",
      nzSize: "nzSize",
      disabled: "disabled"
    },
    exportAs: ["nzInput"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzInputDirective.prototype, "nzBorderless", void 0);

  return NzInputDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzInputGroupSlotComponent = /*#__PURE__*/(() => {
  class NzInputGroupSlotComponent {
    constructor() {
      this.icon = null;
      this.type = null;
      this.template = null;
    }

  }

  NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) {
    return new (t || NzInputGroupSlotComponent)();
  };

  NzInputGroupSlotComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzInputGroupSlotComponent,
    selectors: [["", "nz-input-group-slot", ""]],
    hostVars: 6,
    hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
      }
    },
    inputs: {
      icon: "icon",
      type: "type",
      template: "template"
    },
    attrs: _c0,
    decls: 2,
    vars: 2,
    consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
    template: function NzInputGroupSlotComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.template);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
  return NzInputGroupSlotComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzInputGroupWhitSuffixOrPrefixDirective = /*#__PURE__*/(() => {
  class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
      this.elementRef = elementRef;
    }

  }

  NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) {
    return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzInputGroupWhitSuffixOrPrefixDirective,
    selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]]
  });
  return NzInputGroupWhitSuffixOrPrefixDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzInputGroupComponent = /*#__PURE__*/(() => {
  class NzInputGroupComponent {
    constructor(focusMonitor, elementRef, cdr, directionality) {
      this.focusMonitor = focusMonitor;
      this.elementRef = elementRef;
      this.cdr = cdr;
      this.directionality = directionality;
      this.nzAddOnBeforeIcon = null;
      this.nzAddOnAfterIcon = null;
      this.nzPrefixIcon = null;
      this.nzSuffixIcon = null;
      this.nzSize = 'default';
      this.nzSearch = false;
      this.nzCompact = false;
      this.isLarge = false;
      this.isSmall = false;
      this.isAffix = false;
      this.isAddOn = false;
      this.focused = false;
      this.disabled = false;
      this.dir = 'ltr';
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    updateChildrenInputSize() {
      if (this.listOfNzInputDirective) {
        this.listOfNzInputDirective.forEach(item => item.nzSize = this.nzSize);
      }
    }

    ngOnInit() {
      var _a;

      this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
        this.focused = !!focusOrigin;
        this.cdr.markForCheck();
      });
      this.dir = this.directionality.value;
      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
      });
    }

    ngAfterContentInit() {
      this.updateChildrenInputSize();
      const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.listOfNzInputDirective));
      listOfInputChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...[listOfInputChange$, ...list.map(input => input.disabled$)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(() => listOfInputChange$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(list => list.some(input => input.disabled)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(disabled => {
        this.disabled = disabled;
        this.cdr.markForCheck();
      });
    }

    ngOnChanges(changes) {
      const {
        nzSize,
        nzSuffix,
        nzPrefix,
        nzPrefixIcon,
        nzSuffixIcon,
        nzAddOnAfter,
        nzAddOnBefore,
        nzAddOnAfterIcon,
        nzAddOnBeforeIcon
      } = changes;

      if (nzSize) {
        this.updateChildrenInputSize();
        this.isLarge = this.nzSize === 'large';
        this.isSmall = this.nzSize === 'small';
      }

      if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
        this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
      }

      if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
        this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
      }
    }

    ngOnDestroy() {
      this.focusMonitor.stopMonitoring(this.elementRef);
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) {
    return new (t || NzInputGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality, 8));
  };

  NzInputGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzInputGroupComponent,
    selectors: [["nz-input-group"]],
    contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzInputDirective, 4);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzInputDirective = _t);
      }
    },
    hostVars: 40,
    hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
      }
    },
    inputs: {
      nzAddOnBeforeIcon: "nzAddOnBeforeIcon",
      nzAddOnAfterIcon: "nzAddOnAfterIcon",
      nzPrefixIcon: "nzPrefixIcon",
      nzSuffixIcon: "nzSuffixIcon",
      nzAddOnBefore: "nzAddOnBefore",
      nzAddOnAfter: "nzAddOnAfter",
      nzPrefix: "nzPrefix",
      nzSuffix: "nzSuffix",
      nzSize: "nzSize",
      nzSearch: "nzSearch",
      nzCompact: "nzCompact"
    },
    exportAs: ["nzInputGroup"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 2,
    consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"]],
    template: function NzInputGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddOn)("ngIfElse", _r1);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, NzInputGroupSlotComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzInputGroupComponent.prototype, "nzSearch", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzInputGroupComponent.prototype, "nzCompact", void 0);

  return NzInputGroupComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzAutosizeDirective = /*#__PURE__*/(() => {
  class NzAutosizeDirective {
    constructor(elementRef, ngZone, platform, resizeService) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      this.platform = platform;
      this.resizeService = resizeService;
      this.autosize = false;
      this.el = this.elementRef.nativeElement;
      this.maxHeight = null;
      this.minHeight = null;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.inputGap = 10;
    }

    set nzAutosize(value) {
      const isAutoSizeType = data => typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);

      if (typeof value === 'string' || value === true) {
        this.autosize = true;
      } else if (isAutoSizeType(value)) {
        this.autosize = true;
        this.minRows = value.minRows;
        this.maxRows = value.maxRows;
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
      }
    }

    resizeToFitContent(force = false) {
      this.cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.

      if (!this.cachedLineHeight) {
        return;
      }

      const textarea = this.el;
      const value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

      if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
        return;
      }

      const placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
      // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
      // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
      // need to be removed temporarily.

      textarea.classList.add('nz-textarea-autosize-measuring');
      textarea.placeholder = '';
      let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;

      if (this.maxHeight !== null && height > this.maxHeight) {
        height = this.maxHeight;
      }

      if (this.minHeight !== null && height < this.minHeight) {
        height = this.minHeight;
      } // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.


      textarea.style.height = `${height}px`;
      textarea.classList.remove('nz-textarea-autosize-measuring');
      textarea.placeholder = placeholderText; // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
      // We need to re-set the selection in order for it to scroll to the proper position.

      if (typeof requestAnimationFrame !== 'undefined') {
        this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
          const {
            selectionStart,
            selectionEnd
          } = textarea; // IE will throw an "Unspecified error" if we try to set the selection range after the
          // element has been removed from the DOM. Assert that the directive hasn't been destroyed
          // between the time we requested the animation frame and when it was executed.
          // Also note that we have to assert that the textarea is focused before we set the
          // selection range. Setting the selection range on a non-focused textarea will cause
          // it to receive focus on IE and Edge.

          if (!this.destroy$.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
          }
        }));
      }

      this.previousValue = value;
      this.previousMinRows = this.minRows;
    }

    cacheTextareaLineHeight() {
      if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
        return;
      } // Use a clone element because we have to override some styles.


      const textareaClone = this.el.cloneNode(false);
      textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.

      textareaClone.style.position = 'absolute';
      textareaClone.style.visibility = 'hidden';
      textareaClone.style.border = 'none';
      textareaClone.style.padding = '0';
      textareaClone.style.height = '';
      textareaClone.style.minHeight = '';
      textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

      textareaClone.style.overflow = 'hidden';
      this.el.parentNode.appendChild(textareaClone);
      this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
      this.el.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes

      this.maxHeight = this.setMaxHeight();
      this.minHeight = this.setMinHeight();
    }

    setMinHeight() {
      const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;

      if (minHeight !== null) {
        this.el.style.minHeight = `${minHeight}px`;
      }

      return minHeight;
    }

    setMaxHeight() {
      const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;

      if (maxHeight !== null) {
        this.el.style.maxHeight = `${maxHeight}px`;
      }

      return maxHeight;
    }

    noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
    }

    ngAfterViewInit() {
      if (this.autosize && this.platform.isBrowser) {
        this.resizeToFitContent();
        this.resizeService.subscribe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(() => this.resizeToFitContent(true));
      }
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

    ngDoCheck() {
      if (this.autosize && this.platform.isBrowser) {
        this.resizeToFitContent();
      }
    }

  }

  NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) {
    return new (t || NzAutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_18__.NzResizeService));
  };

  NzAutosizeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzAutosizeDirective,
    selectors: [["textarea", "nzAutosize", ""]],
    hostAttrs: ["rows", "1"],
    hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NzAutosizeDirective_input_HostBindingHandler() {
          return ctx.noopInputHandler();
        });
      }
    },
    inputs: {
      nzAutosize: "nzAutosize"
    },
    exportAs: ["nzAutosize"]
  });
  return NzAutosizeDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzTextareaCountComponent = /*#__PURE__*/(() => {
  class NzTextareaCountComponent {
    constructor(renderer, elementRef) {
      this.renderer = renderer;
      this.elementRef = elementRef;
      this.nzMaxCharacterCount = 0;

      this.nzComputeCharacterCount = v => v.length;

      this.nzFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;

      this.configChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    ngAfterContentInit() {
      if (!this.nzInputDirective && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
        throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
      }

      if (this.nzInputDirective.ngControl) {
        const valueChanges = this.nzInputDirective.ngControl.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_19__.EMPTY;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(valueChanges, this.configChange$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(() => this.nzInputDirective.ngControl.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.nzInputDirective.ngControl.value)).subscribe(value => {
          this.setDataCount(value);
        });
      }
    }

    setDataCount(value) {
      const inputValue = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.isNotNil)(value) ? String(value) : '';
      const currentCount = this.nzComputeCharacterCount(inputValue);
      const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
      this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }

    ngOnDestroy() {
      this.configChange$.complete();
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) {
    return new (t || NzTextareaCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  NzTextareaCountComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTextareaCountComponent,
    selectors: [["nz-textarea-count"]],
    contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzInputDirective, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzInputDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-input-textarea-show-count"],
    inputs: {
      nzMaxCharacterCount: "nzMaxCharacterCount",
      nzComputeCharacterCount: "nzComputeCharacterCount",
      nzFormatter: "nzFormatter"
    },
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    template: function NzTextareaCountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return NzTextareaCountComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzInputModule = /*#__PURE__*/(() => {
  class NzInputModule {}

  NzInputModule.ɵfac = function NzInputModule_Factory(t) {
    return new (t || NzInputModule)();
  };

  NzInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzInputModule
  });
  NzInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__.PlatformModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule]]
  });
  return NzInputModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 174:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-time-picker.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTimePickerComponent": () => (/* binding */ NzTimePickerComponent),
/* harmony export */   "NzTimePickerModule": () => (/* binding */ NzTimePickerModule),
/* harmony export */   "NzTimePickerPanelComponent": () => (/* binding */ NzTimePickerPanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 5117);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 6906);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ 7507);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ 787);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 3758);

































/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["hourListElement"];
const _c1 = ["minuteListElement"];
const _c2 = ["secondListElement"];
const _c3 = ["use12HoursListElement"];

function NzTimePickerPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\xA0");
  }
}

function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.selectHour(hour_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r9.isSelectedHour(hour_r8))("ant-picker-time-panel-cell-disabled", hour_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, hour_r8.index, "2.0-0"));
  }
}

function NzTimePickerPanelComponent_ul_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r7.nzHideDisabledOptions && hour_r8.disabled));
  }
}

function NzTimePickerPanelComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.hourRange)("ngForTrackBy", ctx_r1.trackByFn);
  }
}

function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r18.selectMinute(minute_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r17.isSelectedMinute(minute_r16))("ant-picker-time-panel-cell-disabled", minute_r16.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, minute_r16.index, "2.0-0"));
  }
}

function NzTimePickerPanelComponent_ul_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const minute_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r15.nzHideDisabledOptions && minute_r16.disabled));
  }
}

function NzTimePickerPanelComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.minuteRange)("ngForTrackBy", ctx_r2.trackByFn);
  }
}

function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r26.selectSecond(second_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r25.isSelectedSecond(second_r24))("ant-picker-time-panel-cell-disabled", second_r24.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, second_r24.index, "2.0-0"));
  }
}

function NzTimePickerPanelComponent_ul_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const second_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.nzHideDisabledOptions && second_r24.disabled));
  }
}

function NzTimePickerPanelComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_4_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.secondRange)("ngForTrackBy", ctx_r3.trackByFn);
  }
}

function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r34.select12Hours(range_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r33.isSelected12Hours(range_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](range_r32.value);
  }
}

function NzTimePickerPanelComponent_ul_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template, 3, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.nzHideDisabledOptions);
  }
}

function NzTimePickerPanelComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_5_ng_container_2_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.use12HoursRange);
  }
}

function NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template(rf, ctx) {}

function NzTimePickerPanelComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r38.nzAddOn);
  }
}

function NzTimePickerPanelComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_div_6_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r40.onClickNow();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_div_6_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r42.onClickOk();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.nzAddOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.nzNowText || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "Calendar.lang.now"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.nzOkText || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "Calendar.lang.ok"), " ");
  }
}

const _c4 = ["inputElement"];

function NzTimePickerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const suffixIcon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r4);
  }
}

function NzTimePickerComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerComponent_span_6_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.onClickClearBtn($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.nzClearText)("title", ctx_r2.nzClearText);
  }
}

function NzTimePickerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-time-picker-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.value = $event;
    })("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onPanelValueChange($event);
    })("closePanel", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_closePanel_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.setCurrentValueAndClose();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideMotion", "enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.nzPopupClassName)("format", ctx_r3.nzFormat)("nzHourStep", ctx_r3.nzHourStep)("nzMinuteStep", ctx_r3.nzMinuteStep)("nzSecondStep", ctx_r3.nzSecondStep)("nzDisabledHours", ctx_r3.nzDisabledHours)("nzDisabledMinutes", ctx_r3.nzDisabledMinutes)("nzDisabledSeconds", ctx_r3.nzDisabledSeconds)("nzPlaceHolder", ctx_r3.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 19, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.nzHideDisabledOptions)("nzUse12Hours", ctx_r3.nzUse12Hours)("nzDefaultOpenValue", ctx_r3.nzDefaultOpenValue)("nzAddOn", ctx_r3.nzAddOn)("nzClearText", ctx_r3.nzClearText)("nzNowText", ctx_r3.nzNowText)("nzOkText", ctx_r3.nzOkText)("nzAllowEmpty", ctx_r3.nzAllowEmpty)("ngModel", ctx_r3.value);
  }
}

class TimeHolder {
  constructor() {
    this.selected12Hours = undefined;
    this._use12Hours = false;
    this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  setMinutes(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setMinutes(value);
      this.update();
    }

    return this;
  }

  setHours(value, disabled) {
    if (!disabled) {
      this.initValue();

      if (this._use12Hours) {
        if (this.selected12Hours === 'PM' && value !== 12) {
          this.value.setHours(value + 12);
        } else if (this.selected12Hours === 'AM' && value === 12) {
          this.value.setHours(0);
        } else {
          this.value.setHours(value);
        }
      } else {
        this.value.setHours(value);
      }

      this.update();
    }

    return this;
  }

  setSeconds(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setSeconds(value);
      this.update();
    }

    return this;
  }

  setUse12Hours(value) {
    this._use12Hours = value;
    return this;
  }

  get changes() {
    return this._changes.asObservable();
  }

  setValue(value, use12Hours) {
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(use12Hours)) {
      this._use12Hours = use12Hours;
    }

    if (value !== this.value) {
      this._value = value;

      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.value)) {
        if (this._use12Hours && (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.hours)) {
          this.selected12Hours = this.hours >= 12 ? 'PM' : 'AM';
        }
      } else {
        this._clear();
      }
    }

    return this;
  }

  initValue() {
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNil)(this.value)) {
      this.setValue(new Date(), this._use12Hours);
    }
  }

  clear() {
    this._clear();

    this.update();
  }

  get isEmpty() {
    return !((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.hours) || (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.minutes) || (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.seconds));
  }

  _clear() {
    this._value = undefined;
    this.selected12Hours = undefined;
  }

  update() {
    if (this.isEmpty) {
      this._value = undefined;
    } else {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.hours)) {
        this.value.setHours(this.hours);
      }

      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.minutes)) {
        this.value.setMinutes(this.minutes);
      }

      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.seconds)) {
        this.value.setSeconds(this.seconds);
      }

      if (this._use12Hours) {
        if (this.selected12Hours === 'PM' && this.hours < 12) {
          this.value.setHours(this.hours + 12);
        }

        if (this.selected12Hours === 'AM' && this.hours >= 12) {
          this.value.setHours(this.hours - 12);
        }
      }
    }

    this.changed();
  }

  changed() {
    this._changes.next(this.value);
  }
  /**
   * @description
   * UI view hours
   * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
   */


  get viewHours() {
    return this._use12Hours && (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
  }

  setSelected12Hours(value) {
    if (value.toUpperCase() !== this.selected12Hours) {
      this.selected12Hours = value.toUpperCase();
      this.update();
    }
  }

  get value() {
    return this._value || this._defaultOpenValue;
  }

  get hours() {
    var _a;

    return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
  }

  get minutes() {
    var _a;

    return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
  }

  get seconds() {
    var _a;

    return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
  }

  setDefaultOpenValue(value) {
    this._defaultOpenValue = value;
    return this;
  }

  calculateViewHour(value) {
    const selected12Hours = this.selected12Hours;

    if (selected12Hours === 'PM' && value > 12) {
      return value - 12;
    }

    if (selected12Hours === 'AM' && value === 0) {
      return 12;
    }

    return value;
  }

}

function makeRange(length, step = 1, start = 0) {
  return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}

let NzTimePickerPanelComponent = /*#__PURE__*/(() => {
  class NzTimePickerPanelComponent {
    constructor(ngZone, cdr, dateHelper, elementRef) {
      this.ngZone = ngZone;
      this.cdr = cdr;
      this.dateHelper = dateHelper;
      this.elementRef = elementRef;
      this._nzHourStep = 1;
      this._nzMinuteStep = 1;
      this._nzSecondStep = 1;
      this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._format = 'HH:mm:ss';

      this._disabledHours = () => [];

      this._disabledMinutes = () => [];

      this._disabledSeconds = () => [];

      this._allowEmpty = true;
      this.time = new TimeHolder();
      this.hourEnabled = true;
      this.minuteEnabled = true;
      this.secondEnabled = true;
      this.firstScrolled = false;
      this.enabledColumns = 3;
      this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done

      this.nzHideDisabledOptions = false;
      this.nzUse12Hours = false;
      this.closePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

    set nzAllowEmpty(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._allowEmpty = value;
      }
    }

    get nzAllowEmpty() {
      return this._allowEmpty;
    }

    set nzDisabledHours(value) {
      this._disabledHours = value;

      if (this._disabledHours) {
        this.buildHours();
      }
    }

    get nzDisabledHours() {
      return this._disabledHours;
    }

    set nzDisabledMinutes(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._disabledMinutes = value;
        this.buildMinutes();
      }
    }

    get nzDisabledMinutes() {
      return this._disabledMinutes;
    }

    set nzDisabledSeconds(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._disabledSeconds = value;
        this.buildSeconds();
      }
    }

    get nzDisabledSeconds() {
      return this._disabledSeconds;
    }

    set format(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._format = value;
        this.enabledColumns = 0;
        const charSet = new Set(value);
        this.hourEnabled = charSet.has('H') || charSet.has('h');
        this.minuteEnabled = charSet.has('m');
        this.secondEnabled = charSet.has('s');

        if (this.hourEnabled) {
          this.enabledColumns++;
        }

        if (this.minuteEnabled) {
          this.enabledColumns++;
        }

        if (this.secondEnabled) {
          this.enabledColumns++;
        }

        if (this.nzUse12Hours) {
          this.build12Hours();
        }
      }
    }

    get format() {
      return this._format;
    }

    set nzHourStep(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._nzHourStep = value;
        this.buildHours();
      }
    }

    get nzHourStep() {
      return this._nzHourStep;
    }

    set nzMinuteStep(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._nzMinuteStep = value;
        this.buildMinutes();
      }
    }

    get nzMinuteStep() {
      return this._nzMinuteStep;
    }

    set nzSecondStep(value) {
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNotNil)(value)) {
        this._nzSecondStep = value;
        this.buildSeconds();
      }
    }

    get nzSecondStep() {
      return this._nzSecondStep;
    }

    trackByFn(index) {
      return index;
    }

    buildHours() {
      var _a;

      let hourRanges = 24;
      let disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
      let startIndex = 0;

      if (this.nzUse12Hours) {
        hourRanges = 12;

        if (disabledHours) {
          if (this.time.selected12Hours === 'PM') {
            /**
             * Filter and transform hours which greater or equal to 12
             * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
             */
            disabledHours = disabledHours.filter(i => i >= 12).map(i => i > 12 ? i - 12 : i);
          } else {
            /**
             * Filter and transform hours which less than 12
             * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
             */
            disabledHours = disabledHours.filter(i => i < 12 || i === 24).map(i => i === 24 || i === 0 ? 12 : i);
          }
        }

        startIndex = 1;
      }

      this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(r => ({
        index: r,
        disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
      }));

      if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
        const temp = [...this.hourRange];
        temp.unshift(temp[temp.length - 1]);
        temp.splice(temp.length - 1, 1);
        this.hourRange = temp;
      }
    }

    buildMinutes() {
      this.minuteRange = makeRange(60, this.nzMinuteStep).map(r => ({
        index: r,
        disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
      }));
    }

    buildSeconds() {
      this.secondRange = makeRange(60, this.nzSecondStep).map(r => ({
        index: r,
        disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
      }));
    }

    build12Hours() {
      const isUpperFormat = this._format.includes('A');

      this.use12HoursRange = [{
        index: 0,
        value: isUpperFormat ? 'AM' : 'am'
      }, {
        index: 1,
        value: isUpperFormat ? 'PM' : 'pm'
      }];
    }

    buildTimes() {
      this.buildHours();
      this.buildMinutes();
      this.buildSeconds();
      this.build12Hours();
    }

    scrollToTime(delay = 0) {
      if (this.hourEnabled && this.hourListElement) {
        this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, 'hour');
      }

      if (this.minuteEnabled && this.minuteListElement) {
        this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, 'minute');
      }

      if (this.secondEnabled && this.secondListElement) {
        this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, 'second');
      }

      if (this.nzUse12Hours && this.use12HoursListElement) {
        const selectedHours = this.time.selected12Hours;
        const index = selectedHours === 'AM' ? 0 : 1;
        this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
      }
    }

    selectHour(hour) {
      this.time.setHours(hour.index, hour.disabled);

      if (this._disabledMinutes) {
        this.buildMinutes();
      }

      if (this._disabledSeconds || this._disabledMinutes) {
        this.buildSeconds();
      }
    }

    selectMinute(minute) {
      this.time.setMinutes(minute.index, minute.disabled);

      if (this._disabledSeconds) {
        this.buildSeconds();
      }
    }

    selectSecond(second) {
      this.time.setSeconds(second.index, second.disabled);
    }

    select12Hours(value) {
      this.time.setSelected12Hours(value.value);

      if (this._disabledHours) {
        this.buildHours();
      }

      if (this._disabledMinutes) {
        this.buildMinutes();
      }

      if (this._disabledSeconds) {
        this.buildSeconds();
      }
    }

    scrollToSelected(instance, index, duration = 0, unit) {
      if (!instance) {
        return;
      }

      const transIndex = this.translateIndex(index, unit);
      const currentOption = instance.children[transIndex] || instance.children[0];
      this.scrollTo(instance, currentOption.offsetTop, duration);
    }

    translateIndex(index, unit) {
      var _a, _b, _c;

      if (unit === 'hour') {
        return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map(item => item.index).indexOf(index));
      } else if (unit === 'minute') {
        return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, this.time.hours), this.minuteRange.map(item => item.index).indexOf(index));
      } else if (unit === 'second') {
        // second
        return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, this.time.hours, this.time.minutes), this.secondRange.map(item => item.index).indexOf(index));
      } else {
        // 12-hour
        return this.calcIndex([], this.use12HoursRange.map(item => item.index).indexOf(index));
      }
    }

    scrollTo(element, to, duration) {
      if (duration <= 0) {
        element.scrollTop = to;
        return;
      }

      const difference = to - element.scrollTop;
      const perTick = difference / duration * 10;
      this.ngZone.runOutsideAngular(() => {
        (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_3__.reqAnimFrame)(() => {
          element.scrollTop = element.scrollTop + perTick;

          if (element.scrollTop === to) {
            return;
          }

          this.scrollTo(element, to, duration - 10);
        });
      });
    }

    calcIndex(array, index) {
      if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
        return index - array.reduce((pre, value) => pre + (value < index ? 1 : 0), 0);
      } else {
        return index;
      }
    }

    changed() {
      if (this.onChange) {
        this.onChange(this.time.value);
      }
    }

    touched() {
      if (this.onTouch) {
        this.onTouch();
      }
    }

    timeDisabled(value) {
      var _a, _b, _c, _d, _e, _f;

      const hour = value.getHours();
      const minute = value.getMinutes();
      const second = value.getSeconds();
      return ((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 || ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 || ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1;
    }

    onClickNow() {
      const now = new Date();

      if (this.timeDisabled(now)) {
        return;
      }

      this.time.setValue(now);
      this.changed();
      this.closePanel.emit();
    }

    onClickOk() {
      this.time.setValue(this.time.value, this.nzUse12Hours);
      this.changed();
      this.closePanel.emit();
    }

    isSelectedHour(hour) {
      return hour.index === this.time.viewHours;
    }

    isSelectedMinute(minute) {
      return minute.index === this.time.minutes;
    }

    isSelectedSecond(second) {
      return second.index === this.time.seconds;
    }

    isSelected12Hours(value) {
      return value.value.toUpperCase() === this.time.selected12Hours;
    }

    ngOnInit() {
      this.time.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$)).subscribe(() => {
        this.changed();
        this.touched();
        this.scrollToTime(120);
      });
      this.buildTimes();
      setTimeout(() => {
        this.scrollToTime();
        this.firstScrolled = true;
      });
      this.ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.elementRef.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$)).subscribe(event => {
          event.preventDefault();
        });
      });
    }

    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }

    ngOnChanges(changes) {
      const {
        nzUse12Hours,
        nzDefaultOpenValue
      } = changes;

      if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
        this.build12Hours();
        this.enabledColumns++;
      }

      if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
        this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
      }
    }

    writeValue(value) {
      this.time.setValue(value, this.nzUse12Hours);
      this.buildTimes();

      if (value && this.firstScrolled) {
        this.scrollToTime(120);
      } // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)


      this.cdr.markForCheck();
    }

    registerOnChange(fn) {
      this.onChange = fn;
    }

    registerOnTouched(fn) {
      this.onTouch = fn;
    }

  }

  NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) {
    return new (t || NzTimePickerPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.DateHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  NzTimePickerPanelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTimePickerPanelComponent,
    selectors: [["nz-time-picker-panel"]],
    viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hourListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minuteListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.use12HoursListElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker-time-panel"],
    hostVars: 12,
    hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
      }
    },
    inputs: {
      nzInDatePicker: "nzInDatePicker",
      nzAddOn: "nzAddOn",
      nzHideDisabledOptions: "nzHideDisabledOptions",
      nzClearText: "nzClearText",
      nzNowText: "nzNowText",
      nzOkText: "nzOkText",
      nzPlaceHolder: "nzPlaceHolder",
      nzUse12Hours: "nzUse12Hours",
      nzDefaultOpenValue: "nzDefaultOpenValue",
      nzAllowEmpty: "nzAllowEmpty",
      nzDisabledHours: "nzDisabledHours",
      nzDisabledMinutes: "nzDisabledMinutes",
      nzDisabledSeconds: "nzDisabledSeconds",
      format: "format",
      nzHourStep: "nzHourStep",
      nzMinuteStep: "nzMinuteStep",
      nzSecondStep: "nzSecondStep"
    },
    outputs: {
      closePanel: "closePanel"
    },
    exportAs: ["nzTimePickerPanel"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
      useExisting: NzTimePickerPanelComponent,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 6,
    consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content"], ["class", "ant-picker-time-panel-column", "style", "position: relative;", 4, "ngIf"], ["class", "ant-picker-footer", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], ["hourListElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled", "click", 4, "ngIf"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [4, "ngFor", "ngForOf"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "click", 4, "ngIf"], [1, "ant-picker-footer"], ["class", "ant-picker-footer-extra", 4, "ngIf"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [1, "ant-picker-footer-extra"], [3, "ngTemplateOutlet"]],
    template: function NzTimePickerPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_Template, 3, 2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimePickerPanelComponent_ul_3_Template, 3, 2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTimePickerPanelComponent_ul_4_Template, 3, 2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTimePickerPanelComponent_ul_5_Template, 3, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTimePickerPanelComponent_div_6_Template, 11, 7, "div", 3);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzInDatePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hourEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minuteEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzUse12Hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzInDatePicker);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.NzI18nPipe],
    encapsulation: 2,
    changeDetection: 0
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);

  return NzTimePickerPanelComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

const NZ_CONFIG_MODULE_NAME = 'timePicker';
let NzTimePickerComponent = /*#__PURE__*/(() => {
  class NzTimePickerComponent {
    constructor(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, directionality) {
      this.nzConfigService = nzConfigService;
      this.i18n = i18n;
      this.element = element;
      this.renderer = renderer;
      this.cdr = cdr;
      this.dateHelper = dateHelper;
      this.platform = platform;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.isInit = false;
      this.focused = false;
      this.inputValue = '';
      this.value = null;
      this.preValue = null;
      this.i18nPlaceHolder$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(undefined);
      this.overlayPositions = [{
        offsetY: 3,
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        offsetY: -3,
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        offsetY: 3,
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }, {
        offsetY: -3,
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }];
      this.dir = 'ltr';
      this.nzId = null;
      this.nzSize = null;
      this.nzHourStep = 1;
      this.nzMinuteStep = 1;
      this.nzSecondStep = 1;
      this.nzClearText = 'clear';
      this.nzNowText = '';
      this.nzOkText = '';
      this.nzPopupClassName = '';
      this.nzPlaceHolder = '';
      this.nzFormat = 'HH:mm:ss';
      this.nzOpen = false;
      this.nzUse12Hours = false;
      this.nzSuffixIcon = 'clock-circle';
      this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.nzHideDisabledOptions = false;
      this.nzAllowEmpty = true;
      this.nzDisabled = false;
      this.nzAutoFocus = false;
      this.nzBackdrop = false;
    }

    emitValue(value) {
      this.setValue(value, true);

      if (this._onChange) {
        this._onChange(this.value);
      }

      if (this._onTouched) {
        this._onTouched();
      }
    }

    setValue(value, syncPreValue = false) {
      if (syncPreValue) {
        this.preValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(value) ? new Date(value) : null;
      }

      this.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(value) ? new Date(value) : null;
      this.inputValue = this.dateHelper.format(value, this.nzFormat);
      this.cdr.markForCheck();
    }

    open() {
      if (this.nzDisabled || this.nzOpen) {
        return;
      }

      this.focus();
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
    }

    close() {
      this.nzOpen = false;
      this.cdr.markForCheck();
      this.nzOpenChange.emit(this.nzOpen);
    }

    updateAutoFocus() {
      if (this.isInit && !this.nzDisabled) {
        if (this.nzAutoFocus) {
          this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
        } else {
          this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
        }
      }
    }

    onClickClearBtn(event) {
      event.stopPropagation();
      this.emitValue(null);
    }

    onClickOutside(event) {
      if (!this.element.nativeElement.contains(event.target)) {
        this.setCurrentValueAndClose();
      }
    }

    onFocus(value) {
      this.focused = value;

      if (!value) {
        if (this.checkTimeValid(this.value)) {
          this.setCurrentValueAndClose();
        } else {
          this.setValue(this.preValue);
          this.close();
        }
      }
    }

    focus() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.focus();
      }
    }

    blur() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.blur();
      }
    }

    onKeyupEsc() {
      this.setValue(this.preValue);
    }

    onKeyupEnter() {
      if (this.nzOpen && (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(this.value)) {
        this.setCurrentValueAndClose();
      } else if (!this.nzOpen) {
        this.open();
      }
    }

    onInputChange(str) {
      if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
        this.open();
        this.parseTimeString(str);
      }
    }

    onPanelValueChange(value) {
      this.setValue(value);
      this.focus();
    }

    setCurrentValueAndClose() {
      this.emitValue(this.value);
      this.close();
    }

    ngOnInit() {
      var _a;

      this.inputSize = Math.max(8, this.nzFormat.length) + 2;
      this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.CdkOverlayOrigin(this.element);
      this.i18nPlaceHolder$ = this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(nzLocale => nzLocale.TimePicker.placeholder));
      this.dir = this.directionality.value;
      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
      });
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

    ngOnChanges(changes) {
      const {
        nzUse12Hours,
        nzFormat,
        nzDisabled,
        nzAutoFocus
      } = changes;

      if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
        this.nzFormat = 'h:mm:ss a';
      }

      if (nzDisabled) {
        const value = nzDisabled.currentValue;
        const input = this.inputRef.nativeElement;

        if (value) {
          this.renderer.setAttribute(input, 'disabled', '');
        } else {
          this.renderer.removeAttribute(input, 'disabled');
        }
      }

      if (nzAutoFocus) {
        this.updateAutoFocus();
      }
    }

    parseTimeString(str) {
      const value = this.dateHelper.parseTime(str, this.nzFormat) || null;

      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
        this.value = value;
        this.cdr.markForCheck();
      }
    }

    ngAfterViewInit() {
      this.isInit = true;
      this.updateAutoFocus();
    }

    writeValue(time) {
      let result;

      if (time instanceof Date) {
        result = time;
      } else if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.isNil)(time)) {
        result = null;
      } else {
        (0,ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_17__.warn)('Non-Date type is not recommended for time-picker, use "Date" type.');
        result = new Date(time);
      }

      this.setValue(result, true);
    }

    registerOnChange(fn) {
      this._onChange = fn;
    }

    registerOnTouched(fn) {
      this._onTouched = fn;
    }

    setDisabledState(isDisabled) {
      this.nzDisabled = isDisabled;
      this.cdr.markForCheck();
    }

    checkTimeValid(value) {
      var _a, _b, _c;

      if (!value) {
        return true;
      }

      const disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
      const disabledMinutes = (_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, value.getHours());
      const disabledSeconds = (_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, value.getHours(), value.getMinutes());
      return !((disabledHours === null || disabledHours === void 0 ? void 0 : disabledHours.includes(value.getHours())) || (disabledMinutes === null || disabledMinutes === void 0 ? void 0 : disabledMinutes.includes(value.getMinutes())) || (disabledSeconds === null || disabledSeconds === void 0 ? void 0 : disabledSeconds.includes(value.getSeconds())));
    }

  }

  NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) {
    return new (t || NzTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.DateHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8));
  };

  NzTimePickerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTimePickerComponent,
    selectors: [["nz-time-picker"]],
    viewQuery: function NzTimePickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker"],
    hostVars: 10,
    hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTimePickerComponent_click_HostBindingHandler() {
          return ctx.open();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzId: "nzId",
      nzSize: "nzSize",
      nzHourStep: "nzHourStep",
      nzMinuteStep: "nzMinuteStep",
      nzSecondStep: "nzSecondStep",
      nzClearText: "nzClearText",
      nzNowText: "nzNowText",
      nzOkText: "nzOkText",
      nzPopupClassName: "nzPopupClassName",
      nzPlaceHolder: "nzPlaceHolder",
      nzAddOn: "nzAddOn",
      nzDefaultOpenValue: "nzDefaultOpenValue",
      nzDisabledHours: "nzDisabledHours",
      nzDisabledMinutes: "nzDisabledMinutes",
      nzDisabledSeconds: "nzDisabledSeconds",
      nzFormat: "nzFormat",
      nzOpen: "nzOpen",
      nzUse12Hours: "nzUse12Hours",
      nzSuffixIcon: "nzSuffixIcon",
      nzHideDisabledOptions: "nzHideDisabledOptions",
      nzAllowEmpty: "nzAllowEmpty",
      nzDisabled: "nzDisabled",
      nzAutoFocus: "nzAutoFocus",
      nzBackdrop: "nzBackdrop"
    },
    outputs: {
      nzOpenChange: "nzOpenChange"
    },
    exportAs: ["nzTimePicker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
      useExisting: NzTimePickerComponent,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 14,
    consts: [[1, "ant-picker-input"], ["type", "text", "autocomplete", "off", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown", 2, "position", "relative"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]],
    template: function NzTimePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.inputValue = $event;
        })("focus", function NzTimePickerComponent_Template_input_focus_1_listener() {
          return ctx.onFocus(true);
        })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() {
          return ctx.onFocus(false);
        })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_1_listener() {
          return ctx.onKeyupEnter();
        })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_1_listener() {
          return ctx.onKeyupEsc();
        })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.onInputChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTimePickerComponent_span_6_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzTimePickerComponent_ng_template_7_Template, 5, 21, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("detach", function NzTimePickerComponent_Template_ng_template_detach_7_listener() {
          return ctx.close();
        })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_7_listener($event) {
          return ctx.onClickOutside($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.nzDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.nzId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzSuffixIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
      }
    },
    directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_21__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.CdkConnectedOverlay, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__.NzConnectedOverlayDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], NzTimePickerPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_24__.slideMotion]
    },
    changeDetection: 0
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzHourStep", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzSecondStep", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzClearText", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzNowText", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzOkText", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzFormat", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerComponent.prototype, "nzDisabled", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);

  (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_18__.WithConfig)()], NzTimePickerComponent.prototype, "nzBackdrop", void 0);

  return NzTimePickerComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzTimePickerModule = /*#__PURE__*/(() => {
  class NzTimePickerModule {}

  NzTimePickerModule.ɵfac = function NzTimePickerModule_Factory(t) {
    return new (t || NzTimePickerModule)();
  };

  NzTimePickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzTimePickerModule
  });
  NzTimePickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.NzI18nModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_22__.NzOverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_21__.NzOutletModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonModule]]
  });
  return NzTimePickerModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2920:
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzToolTipComponent": () => (/* binding */ NzToolTipComponent),
/* harmony export */   "NzToolTipModule": () => (/* binding */ NzToolTipModule),
/* harmony export */   "NzTooltipBaseComponent": () => (/* binding */ NzTooltipBaseComponent),
/* harmony export */   "NzTooltipBaseDirective": () => (/* binding */ NzTooltipBaseDirective),
/* harmony export */   "NzTooltipDirective": () => (/* binding */ NzTooltipDirective),
/* harmony export */   "isTooltipEmpty": () => (/* binding */ isTooltipEmpty)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 6906);
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/color */ 6457);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 3758);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 405);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);





















const _c0 = ["overlay"];

function NzToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nzTitle);
  }
}

function NzToolTipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1._contentStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1._contentStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", ctx_r1.nzTitleContext);
  }
}

let NzTooltipBaseDirective = /*#__PURE__*/(() => {
  class NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
      this.elementRef = elementRef;
      this.hostView = hostView;
      this.resolver = resolver;
      this.renderer = renderer;
      this.noAnimation = noAnimation;
      this.nzConfigService = nzConfigService;
      this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.internalVisible = false;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this.triggerDisposables = [];
    }
    /**
     * This true title that would be used in other parts on this component.
     */


    get _title() {
      return this.title || this.directiveTitle || null;
    }

    get _content() {
      return this.content || this.directiveContent || null;
    }

    get _trigger() {
      return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
    }

    get _placement() {
      const p = this.placement;
      return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
    }

    get _visible() {
      return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
    }

    get _mouseEnterDelay() {
      return this.mouseEnterDelay || 0.15;
    }

    get _mouseLeaveDelay() {
      return this.mouseLeaveDelay || 0.1;
    }

    get _overlayClassName() {
      return this.overlayClassName || null;
    }

    get _overlayStyle() {
      return this.overlayStyle || null;
    }

    getProxyPropertyMap() {
      return {
        noAnimation: ['noAnimation', () => !!this.noAnimation]
      };
    }

    ngOnChanges(changes) {
      const {
        trigger
      } = changes;

      if (trigger && !trigger.isFirstChange()) {
        this.registerTriggers();
      }

      if (this.component) {
        this.updatePropertiesByChanges(changes);
      }
    }

    ngAfterViewInit() {
      this.createComponent();
      this.registerTriggers();
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete(); // Clear toggling timer. Issue #3875 #4317 #4386

      this.clearTogglingTimer();
      this.removeTriggerListeners();
    }

    show() {
      var _a;

      (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
    }

    hide() {
      var _a;

      (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
    }
    /**
     * Force the component to update its position.
     */


    updatePosition() {
      if (this.component) {
        this.component.updatePosition();
      }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */


    createComponent() {
      const componentRef = this.componentRef;
      this.component = componentRef.instance; // Remove the component's DOM because it should be in the overlay container.

      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
      this.component.setOverlayOrigin(this.origin || this.elementRef);
      this.initProperties();
      this.component.nzVisibleChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(visible => {
        this.internalVisible = visible;
        this.visibleChange.emit(visible);
      });
    }

    registerTriggers() {
      // When the method gets invoked, all properties has been synced to the dynamic component.
      // After removing the old API, we can just check the directive's own `nzTrigger`.
      const el = this.elementRef.nativeElement;
      const trigger = this.trigger;
      this.removeTriggerListeners();

      if (trigger === 'hover') {
        let overlayElement;
        this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
          this.delayEnterLeave(true, true, this._mouseEnterDelay);
        }));
        this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
          var _a;

          this.delayEnterLeave(true, false, this._mouseLeaveDelay);

          if (((_a = this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement) {
            overlayElement = this.component.overlay.overlayRef.overlayElement;
            this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
              this.delayEnterLeave(false, true, this._mouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
              this.delayEnterLeave(false, false, this._mouseLeaveDelay);
            }));
          }
        }));
      } else if (trigger === 'focus') {
        this.triggerDisposables.push(this.renderer.listen(el, 'focusin', () => this.show()));
        this.triggerDisposables.push(this.renderer.listen(el, 'focusout', () => this.hide()));
      } else if (trigger === 'click') {
        this.triggerDisposables.push(this.renderer.listen(el, 'click', e => {
          e.preventDefault();
          this.show();
        }));
      } // Else do nothing because user wants to control the visibility programmatically.

    }

    updatePropertiesByChanges(changes) {
      this.updatePropertiesByKeys(Object.keys(changes));
    }

    updatePropertiesByKeys(keys) {
      var _a;

      const mappingProperties = Object.assign({
        // common mappings
        title: ['nzTitle', () => this._title],
        directiveTitle: ['nzTitle', () => this._title],
        content: ['nzContent', () => this._content],
        directiveContent: ['nzContent', () => this._content],
        trigger: ['nzTrigger', () => this._trigger],
        placement: ['nzPlacement', () => this._placement],
        visible: ['nzVisible', () => this._visible],
        mouseEnterDelay: ['nzMouseEnterDelay', () => this._mouseEnterDelay],
        mouseLeaveDelay: ['nzMouseLeaveDelay', () => this._mouseLeaveDelay],
        overlayClassName: ['nzOverlayClassName', () => this._overlayClassName],
        overlayStyle: ['nzOverlayStyle', () => this._overlayStyle],
        arrowPointAtCenter: ['nzArrowPointAtCenter', () => this.arrowPointAtCenter]
      }, this.getProxyPropertyMap());
      (keys || Object.keys(mappingProperties).filter(key => !key.startsWith('directive'))).forEach(property => {
        if (mappingProperties[property]) {
          const [name, valueFn] = mappingProperties[property];
          this.updateComponentValue(name, valueFn());
        }
      });
      (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
    }

    initProperties() {
      this.updatePropertiesByKeys();
    }

    updateComponentValue(key, value) {
      if (typeof value !== 'undefined') {
        // @ts-ignore
        this.component[key] = value;
      }
    }

    delayEnterLeave(isOrigin, isEnter, delay = -1) {
      if (this.delayTimer) {
        this.clearTogglingTimer();
      } else if (delay > 0) {
        this.delayTimer = setTimeout(() => {
          this.delayTimer = undefined;
          isEnter ? this.show() : this.hide();
        }, delay * 1000);
      } else {
        // `isOrigin` is used due to the tooltip will not hide immediately
        // (may caused by the fade-out animation).
        isEnter && isOrigin ? this.show() : this.hide();
      }
    }

    removeTriggerListeners() {
      this.triggerDisposables.forEach(dispose => dispose());
      this.triggerDisposables.length = 0;
    }

    clearTogglingTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = undefined;
      }
    }

  }

  NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(t) {
    return new (t || NzTooltipBaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.NzConfigService));
  };

  NzTooltipBaseDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzTooltipBaseDirective,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return NzTooltipBaseDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


let NzTooltipBaseComponent = /*#__PURE__*/(() => {
  class NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
      this.cdr = cdr;
      this.directionality = directionality;
      this.noAnimation = noAnimation;
      this.nzTitle = null;
      this.nzContent = null;
      this.nzArrowPointAtCenter = false;
      this.nzOverlayStyle = {};
      this.nzBackdrop = false;
      this.nzVisibleChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._visible = false;
      this._trigger = 'hover';
      this.preferredPlacement = 'top';
      this.dir = 'ltr';
      this._classMap = {};
      this._prefix = 'ant-tooltip';
      this._positions = [...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_TOOLTIP_POSITIONS];
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }

    set nzVisible(value) {
      const visible = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.toBoolean)(value);

      if (this._visible !== visible) {
        this._visible = visible;
        this.nzVisibleChange.next(visible);
      }
    }

    get nzVisible() {
      return this._visible;
    }

    set nzTrigger(value) {
      this._trigger = value;
    }

    get nzTrigger() {
      return this._trigger;
    }

    set nzPlacement(value) {
      const preferredPosition = value.map(placement => ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.POSITION_MAP[placement]);
      this._positions = [...preferredPosition, ...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_TOOLTIP_POSITIONS];
    }

    ngOnInit() {
      var _a;

      (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }

    ngOnDestroy() {
      this.nzVisibleChange.complete();
      this.destroy$.next();
      this.destroy$.complete();
    }

    show() {
      if (this.nzVisible) {
        return;
      }

      if (!this.isEmpty()) {
        this.nzVisible = true;
        this.nzVisibleChange.next(true);
        this.cdr.detectChanges();
      } // for ltr for overlay to display tooltip in correct placement in rtl direction.


      if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
        this.overlay.overlayRef.setDirection('ltr');
      }
    }

    hide() {
      if (!this.nzVisible) {
        return;
      }

      this.nzVisible = false;
      this.nzVisibleChange.next(false);
      this.cdr.detectChanges();
    }

    updateByDirective() {
      this.updateStyles();
      this.cdr.detectChanges();
      Promise.resolve().then(() => {
        this.updatePosition();
        this.updateVisibilityByTitle();
      });
    }
    /**
     * Force the component to update its position.
     */


    updatePosition() {
      if (this.origin && this.overlay && this.overlay.overlayRef) {
        this.overlay.overlayRef.updatePosition();
      }
    }

    onPositionChange(position) {
      this.preferredPlacement = (0,ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.getPlacementName)(position);
      this.updateStyles(); // We have to trigger immediate change detection or the element would blink.

      this.cdr.detectChanges();
    }

    setOverlayOrigin(origin) {
      this.origin = origin;
      this.cdr.markForCheck();
    }

    onClickOutside(event) {
      if (!this.origin.nativeElement.contains(event.target) && this.nzTrigger !== null) {
        this.hide();
      }
    }
    /**
     * Hide the component while the content is empty.
     */


    updateVisibilityByTitle() {
      if (this.isEmpty()) {
        this.hide();
      }
    }

    updateStyles() {
      this._classMap = {
        [this.nzOverlayClassName]: true,
        [`${this._prefix}-placement-${this.preferredPlacement}`]: true
      };
    }

  }

  NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(t) {
    return new (t || NzTooltipBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationDirective));
  };

  NzTooltipBaseComponent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzTooltipBaseComponent,
    viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
      }
    }
  });
  return NzTooltipBaseComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

function isTooltipEmpty(value) {
  return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef ? false : value === '' || !(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.isNotNil)(value);
}

let NzTooltipDirective = /*#__PURE__*/(() => {
  class NzTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
      super(elementRef, hostView, resolver, renderer, noAnimation);
      this.titleContext = null;
      this.trigger = 'hover';
      this.placement = 'top'; // eslint-disable-next-line @angular-eslint/no-output-rename

      this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.componentRef = this.hostView.createComponent(NzToolTipComponent);
    }

    getProxyPropertyMap() {
      return Object.assign(Object.assign({}, super.getProxyPropertyMap()), {
        nzTooltipColor: ['nzColor', () => this.nzTooltipColor],
        nzTooltipTitleContext: ['nzTitleContext', () => this.titleContext]
      });
    }

  }

  NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(t) {
    return new (t || NzTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationDirective, 9));
  };

  NzTooltipDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzTooltipDirective,
    selectors: [["", "nz-tooltip", ""]],
    hostVars: 2,
    hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tooltip-open", ctx.visible);
      }
    },
    inputs: {
      title: ["nzTooltipTitle", "title"],
      titleContext: ["nzTooltipTitleContext", "titleContext"],
      directiveTitle: ["nz-tooltip", "directiveTitle"],
      trigger: ["nzTooltipTrigger", "trigger"],
      placement: ["nzTooltipPlacement", "placement"],
      origin: ["nzTooltipOrigin", "origin"],
      visible: ["nzTooltipVisible", "visible"],
      mouseEnterDelay: ["nzTooltipMouseEnterDelay", "mouseEnterDelay"],
      mouseLeaveDelay: ["nzTooltipMouseLeaveDelay", "mouseLeaveDelay"],
      overlayClassName: ["nzTooltipOverlayClassName", "overlayClassName"],
      overlayStyle: ["nzTooltipOverlayStyle", "overlayStyle"],
      arrowPointAtCenter: ["nzTooltipArrowPointAtCenter", "arrowPointAtCenter"],
      nzTooltipColor: "nzTooltipColor"
    },
    outputs: {
      visibleChange: "nzTooltipVisibleChange"
    },
    exportAs: ["nzTooltip"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });

  (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTooltipDirective.prototype, "arrowPointAtCenter", void 0);

  return NzTooltipDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NzToolTipComponent = /*#__PURE__*/(() => {
  class NzToolTipComponent extends NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
      super(cdr, directionality, noAnimation);
      this.noAnimation = noAnimation;
      this.nzTitle = null;
      this.nzTitleContext = null;
      this._contentStyleMap = {};
    }

    isEmpty() {
      return isTooltipEmpty(this.nzTitle);
    }

    updateStyles() {
      const isColorPreset = this.nzColor && (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_10__.isPresetColor)(this.nzColor);
      this._classMap = {
        [this.nzOverlayClassName]: true,
        [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
        [`${this._prefix}-${this.nzColor}`]: isColorPreset
      };
      this._contentStyleMap = {
        backgroundColor: !!this.nzColor && !isColorPreset ? this.nzColor : null
      };
    }

  }

  NzToolTipComponent.ɵfac = function NzToolTipComponent_Factory(t) {
    return new (t || NzToolTipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationDirective, 9));
  };

  NzToolTipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzToolTipComponent,
    selectors: [["nz-tooltip"]],
    exportAs: ["nzTooltipComponent"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 5,
    consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content", 3, "ngStyle"], [1, "ant-tooltip-inner", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function NzToolTipComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzToolTipComponent_ng_template_0_Template, 6, 11, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function NzToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          return ctx.onClickOutside($event);
        })("detach", function NzToolTipComponent_Template_ng_template_detach_0_listener() {
          return ctx.hide();
        })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_0_listener($event) {
          return ctx.onPositionChange($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
      }
    },
    directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.CdkConnectedOverlay, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.NzConnectedOverlayDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__.zoomBigMotion]
    },
    changeDetection: 0
  });
  return NzToolTipComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


let NzToolTipModule = /*#__PURE__*/(() => {
  class NzToolTipModule {}

  NzToolTipModule.ɵfac = function NzToolTipModule_Factory(t) {
    return new (t || NzToolTipModule)();
  };

  NzToolTipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzToolTipModule
  });
  NzToolTipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_13__.NzOutletModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_6__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__.NzNoAnimationModule]]
  });
  return NzToolTipModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_module_user_user_module_ts.js.map
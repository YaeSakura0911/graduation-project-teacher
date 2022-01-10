"use strict";
(self["webpackChunkteacher"] = self["webpackChunkteacher"] || []).push([["src_app_module_research_research_module_ts"],{

/***/ 6085:
/*!*********************************************************************************!*\
  !*** ./src/app/component/research/research-detail/research-detail.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchDetailComponent": () => (/* binding */ ResearchDetailComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 3763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 9801);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/typography */ 9730);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/divider */ 21);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/comment */ 9527);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 8625);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 8010);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 3134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 9671);
















function ResearchDetailComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-divider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Action \u4E00 ", data_r4.name, "");
} }
function ResearchDetailComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-divider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Action \u4E00 ", data_r5.name, "");
} }
class ResearchDetailComponent {
    constructor() {
        this.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), new Date);
    }
    ngOnInit() {
    }
}
ResearchDetailComponent.ɵfac = function ResearchDetailComponent_Factory(t) { return new (t || ResearchDetailComponent)(); };
ResearchDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResearchDetailComponent, selectors: [["app-research-detail"]], decls: 117, vars: 18, consts: [[1, "container"], ["nzCentered", ""], ["nzTitle", "\u6982\u8FF0"], ["nz-row", "", 1, "tab-container", 2, "display", "flex", 3, "nzGutter"], ["nz-col", "", "nzSpan", "6"], ["nz-typography", ""], ["nzType", "secondary", "nz-typography", ""], ["nz-col", "", "nzSpan", "9"], [2, "margin-bottom", "32px"], ["nzAuthor", "\u59DC\u51EF\u6587", 3, "nzDatetime"], ["nzText", "\u59DC", "nz-comment-avatar", ""], ["nzMode", "alternate"], ["nzColor", "green"], ["nzColor", "gray"], ["nzTitle", "\u4EFB\u52A1"], [1, "tab-container"], ["nz-row", "", "nzJustify", "center", 1, "tab-menu", 3, "nzGutter"], ["nz-col", "", "nzSpan", "8"], ["nz-input", "", "placeholder", "\u641C\u7D22\u4F60\u7684\u4EFB\u52A1"], ["nz-col", "", "nzSpan", "2"], ["nzType", "primary", "nz-button", ""], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzTitle", "\u5B66\u751F"], ["nz-input", "", "placeholder", "\u641C\u7D22\u4F60\u7684\u5B66\u751F"], ["nzTitle", "\u8BBE\u7F6E"], [1, "tab-container", 2, "width", "50%", "margin", "0 auto"], ["nz-form", "", 2, "margin-bottom", "32px"], [3, "nzSm", "nzXs"], ["type", "text", "nz-input", ""], ["nz-input", ""], ["nz-row", "", 1, "register-area"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"], ["nzType", "vertical"]], template: function ResearchDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Concurrent, parallel and distributed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Concurrent, parallel and distributedConcurrent, parallel and distributedConcurrent, parallel and distributedConcurrent, parallel and distributedConcurrent, parallel and distributedConcurrent, parallel and distributedConcurrent, parallel and distributed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u52A8\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-comment", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-avatar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-comment-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u63D0\u4EA4\u4E86\u5F00\u9898\u62A5\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-comment", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-avatar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-comment-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u63D0\u4EA4\u4E86\u5F00\u9898\u62A5\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-comment", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nz-avatar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-comment-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u63D0\u4EA4\u4E86\u5F00\u9898\u62A5\u544A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u4EFB\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-timeline", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-timeline-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Create a services site 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-timeline-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Solve initial network problems 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-timeline-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Solve initial network problems 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-timeline-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Technical testing 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-timeline-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Technical testing 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-timeline-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Technical testing 2015-09-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u6DFB\u52A0\u4EFB\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-table", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u4EFB\u52A1\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ResearchDetailComponent_tr_71_Template, 13, 4, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u6DFB\u52A0\u5B66\u751F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nz-table", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u59D3\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u5165\u5B66\u5E74\u4EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ResearchDetailComponent_tr_93_Template, 13, 4, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nz-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u57FA\u672C\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nz-form-label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u7814\u7A76\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-form-control", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nz-form-label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u7814\u7A76\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-form-control", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nz-form-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nz-form-control", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u7BA1\u7406\u5458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDatetime", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDatetime", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDatetime", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 20)("nzOffset", 4);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__.NzTabComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_4__.NzTypographyComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__.NzDividerComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_6__.NzCommentComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__.NzAvatarComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_6__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_6__.NzCommentContentDirective, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_8__.NzTimelineComponent, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_8__.NzTimelineItemComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent], styles: [".tab-menu[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nnz-comment[_ngcontent-%COMP%]     .ant-comment-inner {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VhcmNoLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBSVE7RUFDSSxhQUFBO0FBRFoiLCJmaWxlIjoicmVzZWFyY2gtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1tZW51IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbm56LWNvbW1lbnQge1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAuYW50LWNvbW1lbnQtaW5uZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5268:
/*!*****************************************************************************!*\
  !*** ./src/app/component/research/research-list/research-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchListComponent": () => (/* binding */ ResearchListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ 511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 2257);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/typography */ 9730);










class ResearchListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResearchListComponent.ɵfac = function ResearchListComponent_Factory(t) { return new (t || ResearchListComponent)(); };
ResearchListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResearchListComponent, selectors: [["app-research-list"]], decls: 39, vars: 12, consts: [[1, "container"], ["nz-row", "", "nzJustify", "center", 1, "menu", 3, "nzGutter"], ["nz-col", "", "nzSpan", "8"], ["nz-input", "", "placeholder", "\u641C\u7D22\u4F60\u7684\u7814\u7A76"], ["nz-col", "", "nzSpan", "2"], ["nzType", "primary", "nz-button", ""], ["nzGrid", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["routerLink", "/research/detail"], ["nzTitle", "Artificial intelligence", "nzHoverable", ""], ["nz-typography", "", "nzEllipsis", "", 3, "nzEllipsisRows"], ["nzTitle", "Computer graphics and visualization", "nzHoverable", ""], ["nzTitle", "Concurrent, parallel and distributed systems", "nzHoverable", ""], ["nzTitle", "Computer networks", "nzHoverable", ""]], template: function ResearchListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u6DFB\u52A0\u7814\u7A76");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Artificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligenceArtificial intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Computer graphics and visualizationComputer graphics and visualizationComputer graphics and visualizationComputer graphics and visualizationComputer graphics and visualizationComputer graphics and visualizationComputer graphics and visualizationComputer graphics and visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Concurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Computer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networksComputer networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Concurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systemsConcurrent, parallel and distributed systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsisRows", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsisRows", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsisRows", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsisRows", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsisRows", 2);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__.NzListGridDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__.NzListItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardComponent, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__.NzTypographyComponent], styles: [".container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VhcmNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtBQURaIiwiZmlsZSI6InJlc2VhcmNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6237:
/*!************************************************************!*\
  !*** ./src/app/module/research/research-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchRoutingModule": () => (/* binding */ ResearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_component_research_research_detail_research_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/research/research-detail/research-detail.component */ 6085);
/* harmony import */ var src_app_component_research_research_list_research_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/research/research-list/research-list.component */ 5268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: src_app_component_research_research_list_research_list_component__WEBPACK_IMPORTED_MODULE_1__.ResearchListComponent },
    {
        path: 'detail',
        data: { breadcrumb: '研究详情' },
        component: src_app_component_research_research_detail_research_detail_component__WEBPACK_IMPORTED_MODULE_0__.ResearchDetailComponent
    }
];
class ResearchRoutingModule {
}
ResearchRoutingModule.ɵfac = function ResearchRoutingModule_Factory(t) { return new (t || ResearchRoutingModule)(); };
ResearchRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResearchRoutingModule });
ResearchRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5492:
/*!****************************************************!*\
  !*** ./src/app/module/research/research.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchModule": () => (/* binding */ ResearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_component_research_research_list_research_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/research/research-list/research-list.component */ 5268);
/* harmony import */ var src_app_component_research_research_detail_research_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/research/research-detail/research-detail.component */ 6085);
/* harmony import */ var _research_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research-routing.module */ 6237);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/typography */ 9730);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/divider */ 21);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 8028);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 9671);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 8625);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ 2257);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/comment */ 9527);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/list */ 511);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 3134);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 9801);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 8010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




// 通用


// 布局


// 导航

// 数据录入


// 数据展示








class ResearchModule {
}
ResearchModule.ɵfac = function ResearchModule_Factory(t) { return new (t || ResearchModule)(); };
ResearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResearchModule });
ResearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _research_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResearchRoutingModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule,
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__.NzTypographyModule,
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__.NzDividerModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzGridModule,
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__.NzAvatarModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
            ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_14__.NzCommentModule,
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__.NzListModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
            ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__.NzTimelineModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResearchModule, { declarations: [src_app_component_research_research_list_research_list_component__WEBPACK_IMPORTED_MODULE_0__.ResearchListComponent,
        src_app_component_research_research_detail_research_detail_component__WEBPACK_IMPORTED_MODULE_1__.ResearchDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _research_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResearchRoutingModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_6__.NzTypographyModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__.NzDividerModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzGridModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__.NzAvatarModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
        ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_14__.NzCommentModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__.NzListModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__.NzTimelineModule] }); })();


/***/ }),

/***/ 9658:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ 1458);

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ 6579:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 2258:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ 9480);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 6579);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ 1807);





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 3763:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 6579);
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ 2258);
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ 7860);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 1410);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ 9658);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 6610);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ 5508:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 9635);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);




function debounce(durationSelector) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let hasValue = false;
        let lastValue = null;
        let durationSubscriber = null;
        const emit = () => {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                const value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, (value) => {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop);
            (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
        }, () => {
            emit();
            subscriber.complete();
        }, undefined, () => {
            lastValue = durationSubscriber = null;
        }));
    });
}


/***/ }),

/***/ 1339:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 5716);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 8947);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 5716:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 4240);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 9295);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 23);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapTo */ 73);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 1353);





function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
    }
    return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => delayDurationSelector(value, index).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_4__.mapTo)(value)));
}


/***/ }),

/***/ 23:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ignoreElements": () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 9635);



function ignoreElements() {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
    });
}


/***/ }),

/***/ 1604:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_COPY_TO_CLIPBOARD_CONFIG": () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   "CdkCopyToClipboard": () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   "Clipboard": () => (/* binding */ Clipboard),
/* harmony export */   "ClipboardModule": () => (/* binding */ ClipboardModule),
/* harmony export */   "PendingCopy": () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a relayout. This relayout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * relayout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
  constructor(text, _document) {
    this._document = _document;

    const textarea = this._textarea = this._document.createElement('textarea');

    const styles = textarea.style; // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.

    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text;

    this._document.body.appendChild(textarea);
  }
  /** Finishes copying the text. */


  copy() {
    const textarea = this._textarea;
    let successful = false;

    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');

        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch (_a) {// Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }

    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */


  destroy() {
    const textarea = this._textarea;

    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
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

/**
 * A service for copying text to the clipboard.
 */


class Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */


  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */


  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }

}

Clipboard.ɵfac = function Clipboard_Factory(t) {
  return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

Clipboard.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Clipboard,
  factory: Clipboard.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */


const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */

class CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    /** Content to be copied. */

    this.text = '';
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */

    this.attempts = 1;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */

    this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Copies that are currently being attempted. */

    this._pending = new Set();

    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */


  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;

      const pending = this._clipboard.beginCopy(this.text);

      this._pending.add(pending);

      const attempt = () => {
        const successful = pending.copy();

        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;

          this._pending.delete(pending);

          pending.destroy();
          this.copied.emit(successful);
        }
      };

      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }

  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }

    this._pending.forEach(copy => copy.destroy());

    this._pending.clear();

    this._destroyed = true;
  }

}

CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
  return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};

CdkCopyToClipboard.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: ["cdkCopyToClipboard", "text"],
    attempts: ["cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      }
    }]
  }], function () {
    return [{
      type: Clipboard
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
      }]
    }];
  }, {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ClipboardModule {}

ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
  return new (t || ClipboardModule)();
};

ClipboardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ClipboardModule
});
ClipboardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
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

/***/ 8625:
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-avatar.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzAvatarComponent": () => (/* binding */ NzAvatarComponent),
/* harmony export */   "NzAvatarGroupComponent": () => (/* binding */ NzAvatarGroupComponent),
/* harmony export */   "NzAvatarModule": () => (/* binding */ NzAvatarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);













const _c0 = ["textEl"];

function NzAvatarComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
  }
}

function NzAvatarComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3.imgError($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.nzSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("srcset", ctx_r1.nzSrcSet, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.nzAlt);
  }
}

function NzAvatarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.textStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nzText);
  }
}

const _c1 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'avatar';

class NzAvatarComponent {
  constructor(nzConfigService, elementRef, cdr, platform) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.platform = platform;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShape = 'circle';
    this.nzSize = 'default';
    this.nzGap = 4;
    this.nzError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.hasText = false;
    this.hasSrc = true;
    this.hasIcon = false;
    this.textStyles = {};
    this.classMap = {};
    this.customSize = null;
    this.el = this.elementRef.nativeElement;
  }

  imgError($event) {
    this.nzError.emit($event);

    if (!$event.defaultPrevented) {
      this.hasSrc = false;
      this.hasIcon = false;
      this.hasText = false;

      if (this.nzIcon) {
        this.hasIcon = true;
      } else if (this.nzText) {
        this.hasText = true;
      }

      this.cdr.detectChanges();
      this.setSizeStyle();
      this.notifyCalc();
    }
  }

  ngOnChanges() {
    this.hasText = !this.nzSrc && !!this.nzText;
    this.hasIcon = !this.nzSrc && !!this.nzIcon;
    this.hasSrc = !!this.nzSrc;
    this.setSizeStyle();
    this.notifyCalc();
  }

  calcStringSize() {
    if (!this.hasText) {
      return;
    }

    const childrenWidth = this.textEl.nativeElement.offsetWidth;
    const avatarWidth = this.el.getBoundingClientRect().width;
    const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
    const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
    this.textStyles = {
      transform: `scale(${scale}) translateX(-50%)`
    };

    if (this.customSize) {
      Object.assign(this.textStyles, {
        lineHeight: this.customSize
      });
    }

    this.cdr.detectChanges();
  }

  notifyCalc() {
    // If use ngAfterViewChecked, always demands more computations, so......
    if (this.platform.isBrowser) {
      setTimeout(() => {
        this.calcStringSize();
      });
    }
  }

  setSizeStyle() {
    if (typeof this.nzSize === 'number') {
      this.customSize = `${this.nzSize}px`;
    } else {
      this.customSize = null;
    }

    this.cdr.markForCheck();
  }

}

NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) {
  return new (t || NzAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

NzAvatarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzAvatarComponent,
  selectors: [["nz-avatar"]],
  viewQuery: function NzAvatarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textEl = _t.first);
    }
  },
  hostAttrs: [1, "ant-avatar"],
  hostVars: 20,
  hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    }
  },
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize",
    nzGap: "nzGap",
    nzText: "nzText",
    nzSrc: "nzSrc",
    nzSrcSet: "nzSrcSet",
    nzAlt: "nzAlt",
    nzIcon: "nzIcon"
  },
  outputs: {
    nzError: "nzError"
  },
  exportAs: ["nzAvatar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 3,
  consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]],
  template: function NzAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzAvatarComponent_i_0_Template, 1, 1, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzIcon && ctx.hasIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSrc && ctx.hasSrc);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzText && ctx.hasText);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.WithConfig)()], NzAvatarComponent.prototype, "nzShape", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.WithConfig)()], NzAvatarComponent.prototype, "nzSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputNumber)()], NzAvatarComponent.prototype, "nzGap", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAvatarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-avatar',
      exportAs: 'nzAvatar',
      template: `
    <i nz-icon *ngIf="nzIcon && hasIcon" [nzType]="nzIcon"></i>
    <img *ngIf="nzSrc && hasSrc" [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    <span class="ant-avatar-string" #textEl [ngStyle]="textStyles" *ngIf="nzText && hasText">{{ nzText }}</span>
  `,
      host: {
        class: 'ant-avatar',
        '[class.ant-avatar-lg]': `nzSize === 'large'`,
        '[class.ant-avatar-sm]': `nzSize === 'small'`,
        '[class.ant-avatar-square]': `nzShape === 'square'`,
        '[class.ant-avatar-circle]': `nzShape === 'circle'`,
        '[class.ant-avatar-icon]': `nzIcon`,
        '[class.ant-avatar-image]': `hasSrc `,
        '[style.width]': 'customSize',
        '[style.height]': 'customSize',
        '[style.line-height]': 'customSize',
        // nzSize type is number when customSize is true
        '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
      },
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_1__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, {
    nzShape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSrcSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAlt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    textEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['textEl', {
        static: false
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzAvatarGroupComponent {}

NzAvatarGroupComponent.ɵfac = function NzAvatarGroupComponent_Factory(t) {
  return new (t || NzAvatarGroupComponent)();
};

NzAvatarGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzAvatarGroupComponent,
  selectors: [["nz-avatar-group"]],
  hostAttrs: [1, "ant-avatar-group"],
  exportAs: ["nzAvatarGroup"],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NzAvatarGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAvatarGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-avatar-group',
      exportAs: 'nzAvatarGroup',
      template: ` <ng-content></ng-content> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-avatar-group'
      }
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzAvatarModule {}

NzAvatarModule.ɵfac = function NzAvatarModule_Factory(t) {
  return new (t || NzAvatarModule)();
};

NzAvatarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzAvatarModule
});
NzAvatarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.PlatformModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAvatarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzAvatarComponent, NzAvatarGroupComponent],
      exports: [NzAvatarComponent, NzAvatarGroupComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.PlatformModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2257:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzCardComponent": () => (/* binding */ NzCardComponent),
/* harmony export */   "NzCardGridDirective": () => (/* binding */ NzCardGridDirective),
/* harmony export */   "NzCardLoadingComponent": () => (/* binding */ NzCardLoadingComponent),
/* harmony export */   "NzCardMetaComponent": () => (/* binding */ NzCardMetaComponent),
/* harmony export */   "NzCardModule": () => (/* binding */ NzCardModule),
/* harmony export */   "NzCardTabComponent": () => (/* binding */ NzCardTabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);















function NzCardTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c0 = ["*"];

function NzCardLoadingComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const className_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", className_r3);
  }
}

function NzCardLoadingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const listOfClassName_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", listOfClassName_r1);
  }
}

function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
  }
}

function NzCardComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzTitle);
  }
}

function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.nzExtra);
  }
}

function NzCardComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzExtra);
  }
}

function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) {}

function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.listOfNzCardTabComponent.template);
  }
}

function NzCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listOfNzCardTabComponent);
  }
}

function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) {}

function NzCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzCover);
  }
}

function NzCardComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}

function NzCardComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-card-loading");
  }
}

function NzCardComponent_ul_6_li_1_ng_template_2_Template(rf, ctx) {}

function NzCardComponent_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCardComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100 / ctx_r13.nzActions.length, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", action_r14);
  }
}

function NzCardComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_ul_6_li_1_Template, 3, 3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.nzActions);
  }
}

function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) {}

function NzCardMetaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzAvatar);
  }
}

function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
  }
}

function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
  }
}

function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nzDescription);
  }
}

function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzDescription);
  }
}

function NzCardMetaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzDescription);
  }
}

class NzCardGridDirective {
  constructor() {
    this.nzHoverable = true;
  }

}

NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) {
  return new (t || NzCardGridDirective)();
};

NzCardGridDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCardGridDirective,
  selectors: [["", "nz-card-grid", ""]],
  hostAttrs: [1, "ant-card-grid"],
  hostVars: 2,
  hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-card-hoverable", ctx.nzHoverable);
    }
  },
  inputs: {
    nzHoverable: "nzHoverable"
  },
  exportAs: ["nzCardGrid"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzCardGridDirective.prototype, "nzHoverable", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardGridDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-card-grid]',
      exportAs: 'nzCardGrid',
      host: {
        class: 'ant-card-grid',
        '[class.ant-card-hoverable]': 'nzHoverable'
      }
    }]
  }], function () {
    return [];
  }, {
    nzHoverable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCardTabComponent {}

NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) {
  return new (t || NzCardTabComponent)();
};

NzCardTabComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCardTabComponent,
  selectors: [["nz-card-tab"]],
  viewQuery: function NzCardTabComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  exportAs: ["nzCardTab"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCardTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardTabComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-card-tab',
      exportAs: 'nzCardTab',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
    }]
  }], null, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCardLoadingComponent {
  constructor() {
    this.listOfLoading = [['ant-col-22'], ['ant-col-8', 'ant-col-15'], ['ant-col-6', 'ant-col-18'], ['ant-col-13', 'ant-col-9'], ['ant-col-4', 'ant-col-3', 'ant-col-16'], ['ant-col-8', 'ant-col-6', 'ant-col-8']];
  }

}

NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) {
  return new (t || NzCardLoadingComponent)();
};

NzCardLoadingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCardLoadingComponent,
  selectors: [["nz-card-loading"]],
  hostAttrs: [1, "ant-card-loading-content"],
  exportAs: ["nzCardLoading"],
  decls: 2,
  vars: 1,
  consts: [[1, "ant-card-loading-content"], ["class", "ant-row", "style", "margin-left: -4px; margin-right: -4px;", 4, "ngFor", "ngForOf"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], ["style", "padding-left: 4px; padding-right: 4px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-left", "4px", "padding-right", "4px", 3, "ngClass"], [1, "ant-card-loading-block"]],
  template: function NzCardLoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardLoadingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-card-loading',
      exportAs: 'nzCardLoading',
      template: `
    <div class="ant-card-loading-content">
      <div class="ant-row" style="margin-left: -4px; margin-right: -4px;" *ngFor="let listOfClassName of listOfLoading">
        <div
          *ngFor="let className of listOfClassName"
          [ngClass]="className"
          style="padding-left: 4px; padding-right: 4px;"
        >
          <div class="ant-card-loading-block"></div>
        </div>
      </div>
    </div>
  `,
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ant-card-loading-content'
      }
    }]
  }], function () {
    return [];
  }, null);
})();

const NZ_CONFIG_MODULE_NAME = 'card';

class NzCardComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBordered = true;
    this.nzBorderless = false;
    this.nzLoading = false;
    this.nzHoverable = false;
    this.nzBodyStyle = null;
    this.nzActions = [];
    this.nzType = null;
    this.nzSize = 'default';
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  ngOnInit() {
    var _a;

    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzCardComponent.ɵfac = function NzCardComponent_Factory(t) {
  return new (t || NzCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality, 8));
};

NzCardComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCardComponent,
  selectors: [["nz-card"]],
  contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCardTabComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCardGridDirective, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzCardTabComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzCardGridDirective = _t);
    }
  },
  hostAttrs: [1, "ant-card"],
  hostVars: 16,
  hostBindings: function NzCardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBorderless === false && ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent)("ant-card-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzBordered: "nzBordered",
    nzBorderless: "nzBorderless",
    nzLoading: "nzLoading",
    nzHoverable: "nzHoverable",
    nzBodyStyle: "nzBodyStyle",
    nzCover: "nzCover",
    nzActions: "nzActions",
    nzType: "nzType",
    nzSize: "nzSize",
    nzTitle: "nzTitle",
    nzExtra: "nzExtra"
  },
  exportAs: ["nzCard"],
  ngContentSelectors: _c0,
  decls: 7,
  vars: 6,
  consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]],
  template: function NzCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCardComponent_div_0_Template, 5, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzCardComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzCardComponent_ul_6_Template, 2, 1, "ul", 5);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzCover);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.nzBodyStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzLoading)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzActions.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, NzCardLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzCardComponent.prototype, "nzBordered", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzCardComponent.prototype, "nzBorderless", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzCardComponent.prototype, "nzLoading", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()], NzCardComponent.prototype, "nzHoverable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.WithConfig)()], NzCardComponent.prototype, "nzSize", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-card',
      exportAs: 'nzCard',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ant-card-head" *ngIf="nzTitle || nzExtra || listOfNzCardTabComponent">
      <div class="ant-card-head-wrapper">
        <div class="ant-card-head-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </div>
        <div class="ant-card-extra" *ngIf="nzExtra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      </div>
      <ng-container *ngIf="listOfNzCardTabComponent">
        <ng-template [ngTemplateOutlet]="listOfNzCardTabComponent.template"></ng-template>
      </ng-container>
    </div>
    <div class="ant-card-cover" *ngIf="nzCover">
      <ng-template [ngTemplateOutlet]="nzCover"></ng-template>
    </div>
    <div class="ant-card-body" [ngStyle]="nzBodyStyle">
      <ng-container *ngIf="!nzLoading; else loadingTemplate">
        <ng-content></ng-content>
      </ng-container>
      <ng-template #loadingTemplate>
        <nz-card-loading></nz-card-loading>
      </ng-template>
    </div>
    <ul class="ant-card-actions" *ngIf="nzActions.length">
      <li *ngFor="let action of nzActions" [style.width.%]="100 / nzActions.length">
        <span><ng-template [ngTemplateOutlet]="action"></ng-template></span>
      </li>
    </ul>
  `,
      host: {
        class: 'ant-card',
        '[class.ant-card-loading]': 'nzLoading',
        '[class.ant-card-bordered]': 'nzBorderless === false && nzBordered',
        '[class.ant-card-hoverable]': 'nzHoverable',
        '[class.ant-card-small]': 'nzSize === "small"',
        '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
        '[class.ant-card-type-inner]': 'nzType === "inner"',
        '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent',
        '[class.ant-card-rtl]': `dir === 'rtl'`
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzBordered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBorderless: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHoverable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBodyStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExtra: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfNzCardTabComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzCardTabComponent, {
        static: false
      }]
    }],
    listOfNzCardGridDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzCardGridDirective]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCardMetaComponent {
  constructor() {
    this.nzTitle = null;
    this.nzDescription = null;
    this.nzAvatar = null;
  }

}

NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) {
  return new (t || NzCardMetaComponent)();
};

NzCardMetaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCardMetaComponent,
  selectors: [["nz-card-meta"]],
  hostAttrs: [1, "ant-card-meta"],
  inputs: {
    nzTitle: "nzTitle",
    nzDescription: "nzDescription",
    nzAvatar: "nzAvatar"
  },
  exportAs: ["nzCardMeta"],
  decls: 2,
  vars: 2,
  consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]],
  template: function NzCardMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAvatar);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzDescription);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardMetaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-card-meta',
      exportAs: 'nzCardMeta',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ant-card-meta-avatar" *ngIf="nzAvatar">
      <ng-template [ngTemplateOutlet]="nzAvatar"></ng-template>
    </div>
    <div class="ant-card-meta-detail" *ngIf="nzTitle || nzDescription">
      <div class="ant-card-meta-title" *ngIf="nzTitle">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div class="ant-card-meta-description" *ngIf="nzDescription">
        <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
      </div>
    </div>
  `,
      host: {
        class: 'ant-card-meta'
      }
    }]
  }], function () {
    return [];
  }, {
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAvatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCardModule {}

NzCardModule.ɵfac = function NzCardModule_Factory(t) {
  return new (t || NzCardModule)();
};

NzCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzCardModule
});
NzCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__.NzOutletModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__.NzOutletModule],
      declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3903:
/*!************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-checkbox.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzCheckboxComponent": () => (/* binding */ NzCheckboxComponent),
/* harmony export */   "NzCheckboxGroupComponent": () => (/* binding */ NzCheckboxGroupComponent),
/* harmony export */   "NzCheckboxModule": () => (/* binding */ NzCheckboxModule),
/* harmony export */   "NzCheckboxWrapperComponent": () => (/* binding */ NzCheckboxWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);














/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-checkbox", ""];

function NzCheckboxGroupComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const o_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r2.onCheckedChange(o_r1, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r1.label);
  }
}

class NzCheckboxWrapperComponent {
  constructor(renderer, elementRef) {
    this.nzOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.checkboxList = [];
    renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
  }

  addCheckbox(value) {
    this.checkboxList.push(value);
  }

  removeCheckbox(value) {
    this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
  }

  onChange() {
    const listOfCheckedValue = this.checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
    this.nzOnChange.emit(listOfCheckedValue);
  }

}

NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) {
  return new (t || NzCheckboxWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzCheckboxWrapperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCheckboxWrapperComponent,
  selectors: [["nz-checkbox-wrapper"]],
  outputs: {
    nzOnChange: "nzOnChange"
  },
  exportAs: ["nzCheckboxWrapper"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCheckboxWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-checkbox-wrapper',
      exportAs: 'nzCheckboxWrapper',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: ` <ng-content></ng-content> `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    nzOnChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NzCheckboxComponent {
  constructor(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
    this.elementRef = elementRef;
    this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();

    this.onChange = () => {};

    this.onTouched = () => {};

    this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzValue = null;
    this.nzAutoFocus = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzChecked = false;
    this.nzId = null;
  }

  hostClick(e) {
    e.preventDefault();
    this.focus();
    this.innerCheckedChange(!this.nzChecked);
  }

  innerCheckedChange(checked) {
    if (!this.nzDisabled) {
      this.nzChecked = checked;
      this.onChange(this.nzChecked);
      this.nzCheckedChange.emit(this.nzChecked);

      if (this.nzCheckboxWrapperComponent) {
        this.nzCheckboxWrapperComponent.onChange();
      }
    }
  }

  writeValue(value) {
    this.nzChecked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.nzDisabled = disabled;
    this.cdr.markForCheck();
  }

  focus() {
    this.focusMonitor.focusVia(this.inputElement, 'keyboard');
  }

  blur() {
    this.inputElement.nativeElement.blur();
  }

  ngOnInit() {
    var _a;

    this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });

    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.addCheckbox(this);
    }

    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);

    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.removeCheckbox(this);
    }

    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) {
  return new (t || NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
};

NzCheckboxComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCheckboxComponent,
  selectors: [["", "nz-checkbox", ""]],
  viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-checkbox-wrapper"],
  hostVars: 4,
  hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzCheckboxComponent_click_HostBindingHandler($event) {
        return ctx.hostClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzValue: "nzValue",
    nzAutoFocus: "nzAutoFocus",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzChecked: "nzChecked",
    nzId: "nzId"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange"
  },
  exportAs: ["nzCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzCheckboxComponent),
    multi: true
  }])],
  attrs: _c2,
  ngContentSelectors: _c0,
  decls: 6,
  vars: 11,
  consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]],
  template: function NzCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.innerCheckedChange($event);
      })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("id", ctx.nzId);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCheckboxComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCheckboxComponent.prototype, "nzChecked", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[nz-checkbox]',
      exportAs: 'nzCheckbox',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [attr.id]="nzId"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
        (click)="$event.stopPropagation()"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzCheckboxComponent),
        multi: true
      }],
      host: {
        class: 'ant-checkbox-wrapper',
        '[class.ant-checkbox-wrapper-checked]': 'nzChecked',
        '[class.ant-checkbox-rtl]': `dir === 'rtl'`,
        '(click)': 'hostClick($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NzCheckboxWrapperComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputElement', {
        static: true
      }]
    }],
    nzCheckedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzIndeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzCheckboxGroupComponent {
  constructor(elementRef, focusMonitor, cdr, directionality) {
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.cdr = cdr;
    this.directionality = directionality;

    this.onChange = () => {};

    this.onTouched = () => {};

    this.options = [];
    this.nzDisabled = false;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  trackByOption(_, option) {
    return option.value;
  }

  onCheckedChange(option, checked) {
    option.checked = checked;
    this.onChange(this.options);
  }

  ngOnInit() {
    var _a;

    this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value) {
    this.options = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.nzDisabled = disabled;
    this.cdr.markForCheck();
  }

}

NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) {
  return new (t || NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
};

NzCheckboxGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCheckboxGroupComponent,
  selectors: [["nz-checkbox-group"]],
  hostAttrs: [1, "ant-checkbox-group"],
  hostVars: 2,
  hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-checkbox-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzDisabled: "nzDisabled"
  },
  exportAs: ["nzCheckboxGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzCheckboxGroupComponent),
    multi: true
  }])],
  decls: 1,
  vars: 2,
  consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]],
  template: function NzCheckboxGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, NzCheckboxComponent],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-checkbox-group',
      exportAs: 'nzCheckboxGroup',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <label
      nz-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [nzDisabled]="o.disabled || nzDisabled"
      [nzChecked]="o.checked!"
      (nzCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzCheckboxGroupComponent),
        multi: true
      }],
      host: {
        class: 'ant-checkbox-group',
        '[class.ant-checkbox-group-rtl]': `dir === 'rtl'`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCheckboxModule {}

NzCheckboxModule.ɵfac = function NzCheckboxModule_Factory(t) {
  return new (t || NzCheckboxModule)();
};

NzCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzCheckboxModule
});
NzCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule],
      declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
      exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9527:
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-comment.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzCommentActionComponent": () => (/* binding */ NzCommentActionComponent),
/* harmony export */   "NzCommentActionHostDirective": () => (/* binding */ NzCommentActionHostDirective),
/* harmony export */   "NzCommentAvatarDirective": () => (/* binding */ NzCommentAvatarDirective),
/* harmony export */   "NzCommentComponent": () => (/* binding */ NzCommentComponent),
/* harmony export */   "NzCommentContentDirective": () => (/* binding */ NzCommentContentDirective),
/* harmony export */   "NzCommentModule": () => (/* binding */ NzCommentModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

function NzCommentActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c0 = ["*"];

function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzAuthor);
  }
}

function NzCommentComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzAuthor);
  }
}

function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nzDatetime);
  }
}

function NzCommentComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDatetime);
  }
}

function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) {}

function NzCommentComponent_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCommentActionHost", action_r6.content);
  }
}

function NzCommentComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.actions);
  }
}

const _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
const _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];

class NzCommentAvatarDirective {}

NzCommentAvatarDirective.ɵfac = function NzCommentAvatarDirective_Factory(t) {
  return new (t || NzCommentAvatarDirective)();
};

NzCommentAvatarDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCommentAvatarDirective,
  selectors: [["nz-avatar", "nz-comment-avatar", ""]],
  exportAs: ["nzCommentAvatar"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentAvatarDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-avatar[nz-comment-avatar]',
      exportAs: 'nzCommentAvatar'
    }]
  }], null, null);
})();

class NzCommentContentDirective {}

NzCommentContentDirective.ɵfac = function NzCommentContentDirective_Factory(t) {
  return new (t || NzCommentContentDirective)();
};

NzCommentContentDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCommentContentDirective,
  selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]],
  hostAttrs: [1, "ant-comment-content-detail"],
  exportAs: ["nzCommentContent"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentContentDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-comment-content, [nz-comment-content]',
      exportAs: 'nzCommentContent',
      host: {
        class: 'ant-comment-content-detail'
      }
    }]
  }], null, null);
})();

class NzCommentActionHostDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef) {
    super(componentFactoryResolver, viewContainerRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngAfterViewInit() {
    this.attach(this.nzCommentActionHost);
  }

}

NzCommentActionHostDirective.ɵfac = function NzCommentActionHostDirective_Factory(t) {
  return new (t || NzCommentActionHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};

NzCommentActionHostDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCommentActionHostDirective,
  selectors: [["", "nzCommentActionHost", ""]],
  inputs: {
    nzCommentActionHost: "nzCommentActionHost"
  },
  exportAs: ["nzCommentActionHost"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentActionHostDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nzCommentActionHost]',
      exportAs: 'nzCommentActionHost'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    nzCommentActionHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzCommentActionComponent {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.contentPortal = null;
  }

  get content() {
    return this.contentPortal;
  }

  ngOnInit() {
    this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(this.implicitContent, this.viewContainerRef);
  }

}

NzCommentActionComponent.ɵfac = function NzCommentActionComponent_Factory(t) {
  return new (t || NzCommentActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};

NzCommentActionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCommentActionComponent,
  selectors: [["nz-comment-action"]],
  viewQuery: function NzCommentActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.implicitContent = _t.first);
    }
  },
  exportAs: ["nzCommentAction"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCommentActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentActionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-comment-action',
      exportAs: 'nzCommentAction',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: '<ng-template><ng-content></ng-content></ng-template>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }]
  });
})();

class NzCommentComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzCommentComponent.ɵfac = function NzCommentComponent_Factory(t) {
  return new (t || NzCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
};

NzCommentComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzCommentComponent,
  selectors: [["nz-comment"]],
  contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCommentActionComponent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.actions = _t);
    }
  },
  hostVars: 4,
  hostBindings: function NzCommentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAuthor: "nzAuthor",
    nzDatetime: "nzDatetime"
  },
  exportAs: ["nzComment"],
  ngContentSelectors: _c2,
  decls: 11,
  vars: 3,
  consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]],
  template: function NzCommentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAuthor);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzDatetime);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions == null ? null : ctx.actions.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, NzCommentActionHostDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-comment',
      exportAs: 'nzComment',
      template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <ng-content select="nz-avatar[nz-comment-avatar]"></ng-content>
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          <span *ngIf="nzAuthor" class="ant-comment-content-author-name">
            <ng-container *nzStringTemplateOutlet="nzAuthor">{{ nzAuthor }}</ng-container>
          </span>
          <span *ngIf="nzDatetime" class="ant-comment-content-author-time">
            <ng-container *nzStringTemplateOutlet="nzDatetime">{{ nzDatetime }}</ng-container>
          </span>
        </div>
        <ng-content select="nz-comment-content"></ng-content>
        <ul class="ant-comment-actions" *ngIf="actions?.length">
          <li *ngFor="let action of actions">
            <span><ng-template [nzCommentActionHost]="action.content"></ng-template></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content></ng-content>
    </div>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class.ant-comment]': `true`,
        '[class.ant-comment-rtl]': `dir === "rtl"`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzAuthor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDatetime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    actions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzCommentActionComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];

class NzCommentModule {}

NzCommentModule.ɵfac = function NzCommentModule_Factory(t) {
  return new (t || NzCommentModule)();
};

NzCommentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzCommentModule
});
NzCommentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzOutletModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzOutletModule],
      exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
      declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4357:
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-trans-button.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTransButtonDirective": () => (/* binding */ NzTransButtonDirective),
/* harmony export */   "NzTransButtonModule": () => (/* binding */ NzTransButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

class NzTransButtonDirective {}

NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) {
  return new (t || NzTransButtonDirective)();
};

NzTransButtonDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTransButtonDirective,
  selectors: [["button", "nz-trans-button", ""]],
  hostVars: 8,
  hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[nz-trans-button]',
      host: {
        '[style.border]': '"0"',
        '[style.background]': '"transparent"',
        '[style.padding]': '"0"',
        '[style.line-height]': '"inherit"'
      }
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTransButtonModule {}

NzTransButtonModule.ɵfac = function NzTransButtonModule_Factory(t) {
  return new (t || NzTransButtonModule)();
};

NzTransButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzTransButtonModule
});
NzTransButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzTransButtonDirective],
      exports: [NzTransButtonDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 21:
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-divider.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDividerComponent": () => (/* binding */ NzDividerComponent),
/* harmony export */   "NzDividerModule": () => (/* binding */ NzDividerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);










function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nzText);
  }
}

function NzDividerComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}

class NzDividerComponent {
  constructor() {
    this.nzType = 'horizontal';
    this.nzOrientation = 'center';
    this.nzDashed = false;
    this.nzPlain = false;
  }

}

NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) {
  return new (t || NzDividerComponent)();
};

NzDividerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzDividerComponent,
  selectors: [["nz-divider"]],
  hostAttrs: [1, "ant-divider"],
  hostVars: 16,
  hostBindings: function NzDividerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    }
  },
  inputs: {
    nzText: "nzText",
    nzType: "nzType",
    nzOrientation: "nzOrientation",
    nzDashed: "nzDashed",
    nzPlain: "nzPlain"
  },
  exportAs: ["nzDivider"],
  decls: 1,
  vars: 1,
  consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]],
  template: function NzDividerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzText);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__.InputBoolean)()], NzDividerComponent.prototype, "nzDashed", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__.InputBoolean)()], NzDividerComponent.prototype, "nzPlain", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDividerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-divider',
      exportAs: 'nzDivider',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <span *ngIf="nzText" class="ant-divider-inner-text">
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
    </span>
  `,
      host: {
        class: 'ant-divider',
        '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
        '[class.ant-divider-vertical]': `nzType === 'vertical'`,
        '[class.ant-divider-with-text]': `nzText`,
        '[class.ant-divider-plain]': `nzPlain`,
        '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
        '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
        '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
        '[class.ant-divider-dashed]': `nzDashed`
      }
    }]
  }], function () {
    return [];
  }, {
    nzText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDashed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPlain: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzDividerModule {}

NzDividerModule.ɵfac = function NzDividerModule_Factory(t) {
  return new (t || NzDividerModule)();
};

NzDividerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzDividerModule
});
NzDividerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzOutletModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzOutletModule],
      declarations: [NzDividerComponent],
      exports: [NzDividerComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4555:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-empty.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ_EMPTY_COMPONENT_NAME": () => (/* binding */ NZ_EMPTY_COMPONENT_NAME),
/* harmony export */   "NzEmbedEmptyComponent": () => (/* binding */ NzEmbedEmptyComponent),
/* harmony export */   "NzEmptyComponent": () => (/* binding */ NzEmptyComponent),
/* harmony export */   "NzEmptyDefaultComponent": () => (/* binding */ NzEmptyDefaultComponent),
/* harmony export */   "NzEmptyModule": () => (/* binding */ NzEmptyModule),
/* harmony export */   "NzEmptySimpleComponent": () => (/* binding */ NzEmptySimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);














/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

function NzEmptyComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.nzNotFoundImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r5.isContentString ? ctx_r5.nzNotFoundContent : "empty");
  }
}

function NzEmptyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}

function NzEmptyComponent_nz_empty_default_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty-default");
  }
}

function NzEmptyComponent_nz_empty_simple_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty-simple");
  }
}

function NzEmptyComponent_p_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.isContentString ? ctx_r6.nzNotFoundContent : ctx_r6.locale["description"], " ");
  }
}

function NzEmptyComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmptyComponent_p_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzNotFoundContent);
  }
}

function NzEmptyComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.nzNotFoundFooter, " ");
  }
}

function NzEmptyComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmptyComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzNotFoundFooter);
  }
}

function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 6);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundImage", "simple");
  }
}

function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 7);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundImage", "simple");
  }
}

function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty");
  }
}

function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "small");
  }
}

function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) {}

function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r5.contentPortal);
  }
}

function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.content, " ");
  }
}

function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentType !== "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contentType === "string");
  }
}

const NZ_EMPTY_COMPONENT_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('nz-empty-component-name');
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

class NzEmptyDefaultComponent {}

NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) {
  return new (t || NzEmptyDefaultComponent)();
};

NzEmptyDefaultComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzEmptyDefaultComponent,
  selectors: [["nz-empty-default"]],
  exportAs: ["nzEmptyDefault"],
  decls: 12,
  vars: 0,
  consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
  template: function NzEmptyDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ellipse", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ellipse", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzEmptyDefaultComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-empty-default',
      exportAs: 'nzEmptyDefault',
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzEmptySimpleComponent {}

NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) {
  return new (t || NzEmptySimpleComponent)();
};

NzEmptySimpleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzEmptySimpleComponent,
  selectors: [["nz-empty-simple"]],
  exportAs: ["nzEmptySimple"],
  decls: 6,
  vars: 0,
  consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
  template: function NzEmptySimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ellipse", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzEmptySimpleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-empty-simple',
      exportAs: 'nzEmptySimple',
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const NzEmptyDefaultImages = ['default', 'simple'];

class NzEmptyComponent {
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.nzNotFoundImage = 'default';
    this.isContentString = false;
    this.isImageBuildIn = true;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;

    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === 'string';
    }

    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || 'default';
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex(i => i === image) > -1;
    }
  }

  ngOnInit() {
    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Empty');
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) {
  return new (t || NzEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NzEmptyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzEmptyComponent,
  selectors: [["nz-empty"]],
  hostAttrs: [1, "ant-empty"],
  inputs: {
    nzNotFoundImage: "nzNotFoundImage",
    nzNotFoundContent: "nzNotFoundContent",
    nzNotFoundFooter: "nzNotFoundFooter"
  },
  exportAs: ["nzEmpty"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 5,
  consts: [[1, "ant-empty-image"], [4, "ngIf"], ["class", "ant-empty-description", 4, "ngIf"], ["class", "ant-empty-footer", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]],
  template: function NzEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzEmptyComponent_nz_empty_default_2_Template, 1, 0, "nz-empty-default", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzEmptyComponent_nz_empty_simple_3_Template, 1, 0, "nz-empty-simple", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzEmptyComponent_p_4_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzEmptyComponent_div_5_Template, 2, 1, "div", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isImageBuildIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage !== "simple");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage === "simple");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzNotFoundContent !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzNotFoundFooter);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzEmptyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-empty',
      exportAs: 'nzEmpty',
      template: `
    <div class="ant-empty-image">
      <ng-container *ngIf="!isImageBuildIn">
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      </ng-container>
      <nz-empty-default *ngIf="isImageBuildIn && nzNotFoundImage !== 'simple'"></nz-empty-default>
      <nz-empty-simple *ngIf="isImageBuildIn && nzNotFoundImage === 'simple'"></nz-empty-simple>
    </div>
    <p class="ant-empty-description" *ngIf="nzNotFoundContent !== null">
      <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
        {{ isContentString ? nzNotFoundContent : locale['description'] }}
      </ng-container>
    </p>
    <div class="ant-empty-footer" *ngIf="nzNotFoundFooter">
      <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
        {{ nzNotFoundFooter }}
      </ng-container>
    </div>
  `,
      host: {
        class: 'ant-empty'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    nzNotFoundImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNotFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNotFoundFooter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


function getEmptySize(componentName) {
  switch (componentName) {
    case 'table':
    case 'list':
      return 'normal';

    case 'select':
    case 'tree-select':
    case 'cascader':
    case 'transfer':
      return 'small';

    default:
      return '';
  }
}

class NzEmbedEmptyComponent {
  constructor(configService, viewContainerRef, cdr, injector) {
    this.configService = configService;
    this.viewContainerRef = viewContainerRef;
    this.cdr = cdr;
    this.injector = injector;
    this.contentType = 'string';
    this.size = '';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }

    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }

  ngOnInit() {
    this.subscribeDefaultEmptyContentChange();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  renderEmpty() {
    const content = this.content;

    if (typeof content === 'string') {
      this.contentType = 'string';
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = 'template';
      this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.Type) {
      const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = 'component';
      this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = 'string';
      this.contentPortal = undefined;
    }

    this.cdr.detectChanges();
  }

  subscribeDefaultEmptyContentChange() {
    this.configService.getConfigChangeEventForComponent('empty').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }

  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
  }

}

NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) {
  return new (t || NzEmbedEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

NzEmbedEmptyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzEmbedEmptyComponent,
  selectors: [["nz-embed-empty"]],
  inputs: {
    nzComponentName: "nzComponentName",
    specificContent: "specificContent"
  },
  exportAs: ["nzEmbedEmpty"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]],
  template: function NzEmbedEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.content && ctx.specificContent !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, NzEmptyComponent, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.CdkPortalOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzEmbedEmptyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-embed-empty',
      exportAs: 'nzEmbedEmpty',
      template: `
    <ng-container *ngIf="!content && specificContent !== null" [ngSwitch]="size">
      <nz-empty *ngSwitchCase="'normal'" class="ant-empty-normal" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchCase="'small'" class="ant-empty-small" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchDefault></nz-empty>
    </ng-container>
    <ng-container *ngIf="content">
      <ng-template *ngIf="contentType !== 'string'" [cdkPortalOutlet]="contentPortal"></ng-template>
      <ng-container *ngIf="contentType === 'string'">
        {{ content }}
      </ng-container>
    </ng-container>
  `
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, {
    nzComponentName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    specificContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzEmptyModule {}

NzEmptyModule.ɵfac = function NzEmptyModule_Factory(t) {
  return new (t || NzEmptyModule)();
};

NzEmptyModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzEmptyModule
});
NzEmptyModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.PortalModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzEmptyModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.PortalModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__.NzOutletModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__.NzI18nModule],
      declarations: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 511:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-list.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzListComponent": () => (/* binding */ NzListComponent),
/* harmony export */   "NzListEmptyComponent": () => (/* binding */ NzListEmptyComponent),
/* harmony export */   "NzListFooterComponent": () => (/* binding */ NzListFooterComponent),
/* harmony export */   "NzListGridDirective": () => (/* binding */ NzListGridDirective),
/* harmony export */   "NzListHeaderComponent": () => (/* binding */ NzListHeaderComponent),
/* harmony export */   "NzListItemActionComponent": () => (/* binding */ NzListItemActionComponent),
/* harmony export */   "NzListItemActionsComponent": () => (/* binding */ NzListItemActionsComponent),
/* harmony export */   "NzListItemComponent": () => (/* binding */ NzListItemComponent),
/* harmony export */   "NzListItemExtraComponent": () => (/* binding */ NzListItemExtraComponent),
/* harmony export */   "NzListItemMetaAvatarComponent": () => (/* binding */ NzListItemMetaAvatarComponent),
/* harmony export */   "NzListItemMetaComponent": () => (/* binding */ NzListItemMetaComponent),
/* harmony export */   "NzListItemMetaDescriptionComponent": () => (/* binding */ NzListItemMetaDescriptionComponent),
/* harmony export */   "NzListItemMetaTitleComponent": () => (/* binding */ NzListItemMetaTitleComponent),
/* harmony export */   "NzListLoadMoreDirective": () => (/* binding */ NzListLoadMoreDirective),
/* harmony export */   "NzListModule": () => (/* binding */ NzListModule),
/* harmony export */   "NzListPaginationComponent": () => (/* binding */ NzListPaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 8625);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/empty */ 4555);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/spin */ 3458);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 3395);




















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["*"];

function NzListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.nzSrc);
  }
}

function NzListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!nzSrc"]);
  }
}

function NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-item-meta-avatar", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx_r0.avatarStr);
  }
}

function NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.avatarTpl);
  }
}

function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
  }
}

function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
  }
}

function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nzDescription);
  }
}

function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-meta-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzDescription);
  }
}

function NzListItemMetaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template, 2, 1, "nz-list-item-meta-title", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template, 2, 1, "nz-list-item-meta-description", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzTitle && !ctx_r2.titleComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzDescription && !ctx_r2.descriptionComponent);
  }
}

const _c1 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
const _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];

function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c3 = ["nz-list-item-actions", ""];

function NzListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) {}

function NzListItemActionsComponent_li_0_em_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 3);
  }
}

function NzListItemActionsComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", i_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
  }
}

function NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template(rf, ctx) {}

const _c4 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};

function NzListComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.nzRenderItem)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, item_r10, index_r11));
  }
}

function NzListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_ng_template_0_ng_container_1_Template, 2, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nzDataSource);
  }
}

function NzListComponent_nz_list_header_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.nzHeader);
  }
}

function NzListComponent_nz_list_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_header_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzHeader);
  }
}

function NzListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-height", 53, "px");
  }
}

function NzListComponent_div_7_div_1_ng_template_1_Template(rf, ctx) {}

function NzListComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_div_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", ctx_r14.nzGrid.span || null)("nzXs", ctx_r14.nzGrid.xs || null)("nzSm", ctx_r14.nzGrid.sm || null)("nzMd", ctx_r14.nzGrid.md || null)("nzLg", ctx_r14.nzGrid.lg || null)("nzXl", ctx_r14.nzGrid.xl || null)("nzXXl", ctx_r14.nzGrid.xxl || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.nzRenderItem)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, item_r15, index_r16));
  }
}

function NzListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_div_7_div_1_Template, 2, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", ctx_r4.nzGrid.gutter || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.nzDataSource);
  }
}

function NzListComponent_nz_list_empty_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 14);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNoResult", ctx_r5.nzNoResult);
  }
}

function NzListComponent_nz_list_footer_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.nzFooter);
  }
}

function NzListComponent_nz_list_footer_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_footer_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzFooter);
  }
}

function NzListComponent_ng_template_11_Template(rf, ctx) {}

function NzListComponent_nz_list_pagination_13_ng_template_1_Template(rf, ctx) {}

function NzListComponent_nz_list_pagination_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListComponent_nz_list_pagination_13_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.nzPagination);
  }
}

const _c5 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
const _c6 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];

function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 6);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActions", ctx_r9.nzActions);
  }
}

function NzListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_0_ul_0_Template, 1, 1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzActions && ctx_r1.nzActions.length > 0);
  }
}

function NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.nzContent);
  }
}

function NzListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r10.nzContent);
  }
}

function NzListItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 7);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzContent);
  }
}

function NzListItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3);
  }
}

function NzListItemComponent_ng_template_6_ng_template_0_Template(rf, ctx) {}

function NzListItemComponent_ng_template_6_ng_template_1_Template(rf, ctx) {}

function NzListItemComponent_ng_template_6_ng_template_2_Template(rf, ctx) {}

function NzListItemComponent_ng_template_6_ng_template_3_Template(rf, ctx) {}

function NzListItemComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_template_6_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_6_ng_template_2_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemComponent_ng_template_6_ng_template_3_Template, 0, 0, "ng-template", 9);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.nzExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}

function NzListItemComponent_ng_container_8_ng_template_2_Template(rf, ctx) {}

function NzListItemComponent_ng_container_8_ng_template_3_Template(rf, ctx) {}

function NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template(rf, ctx) {}

function NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.nzExtra);
  }
}

function NzListItemComponent_ng_container_8_ng_template_5_Template(rf, ctx) {}

function NzListItemComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_container_8_ng_template_2_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemComponent_ng_container_8_ng_template_3_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template, 2, 1, "nz-list-item-extra", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzListItemComponent_ng_container_8_ng_template_5_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.nzExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
  }
}

const _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
const _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];

class NzListItemMetaTitleComponent {}

NzListItemMetaTitleComponent.ɵfac = function NzListItemMetaTitleComponent_Factory(t) {
  return new (t || NzListItemMetaTitleComponent)();
};

NzListItemMetaTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemMetaTitleComponent,
  selectors: [["nz-list-item-meta-title"]],
  exportAs: ["nzListItemMetaTitle"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-title"]],
  template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemMetaTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-meta-title',
      exportAs: 'nzListItemMetaTitle',
      template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

class NzListItemMetaDescriptionComponent {}

NzListItemMetaDescriptionComponent.ɵfac = function NzListItemMetaDescriptionComponent_Factory(t) {
  return new (t || NzListItemMetaDescriptionComponent)();
};

NzListItemMetaDescriptionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemMetaDescriptionComponent,
  selectors: [["nz-list-item-meta-description"]],
  exportAs: ["nzListItemMetaDescription"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-description"]],
  template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemMetaDescriptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-meta-description',
      exportAs: 'nzListItemMetaDescription',
      template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

class NzListItemMetaAvatarComponent {}

NzListItemMetaAvatarComponent.ɵfac = function NzListItemMetaAvatarComponent_Factory(t) {
  return new (t || NzListItemMetaAvatarComponent)();
};

NzListItemMetaAvatarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemMetaAvatarComponent,
  selectors: [["nz-list-item-meta-avatar"]],
  inputs: {
    nzSrc: "nzSrc"
  },
  exportAs: ["nzListItemMetaAvatar"],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]],
  template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSrc);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzSrc);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__.NzAvatarComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemMetaAvatarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-meta-avatar',
      exportAs: 'nzListItemMetaAvatar',
      template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="nzSrc" [nzSrc]="nzSrc"></nz-avatar>
      <ng-content *ngIf="!nzSrc"></ng-content>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    nzSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzListItemMetaComponent {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.avatarStr = '';
    this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
  }

  set nzAvatar(value) {
    if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      this.avatarStr = '';
      this.avatarTpl = value;
    } else {
      this.avatarStr = value;
    }
  }

}

NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) {
  return new (t || NzListItemMetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

NzListItemMetaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemMetaComponent,
  selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
  contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemMetaDescriptionComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemMetaTitleComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descriptionComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleComponent = _t.first);
    }
  },
  inputs: {
    nzAvatar: "nzAvatar",
    nzTitle: "nzTitle",
    nzDescription: "nzDescription"
  },
  exportAs: ["nzListItemMeta"],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 3,
  consts: [[3, "nzSrc", 4, "ngIf"], [4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [3, "nzSrc"], [3, "ngTemplateOutlet"], [1, "ant-list-item-meta-content"], [4, "nzStringTemplateOutlet"]],
  template: function NzListItemMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template, 1, 1, "nz-list-item-meta-avatar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template, 2, 1, "nz-list-item-meta-avatar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzListItemMetaComponent_div_3_Template, 5, 2, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatarStr);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avatarTpl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, NzListItemMetaAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, NzListItemMetaTitleComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemMetaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-meta, [nz-list-item-meta]',
      exportAs: 'nzListItemMeta',
      template: `
    <!--Old API Start-->
    <nz-list-item-meta-avatar *ngIf="avatarStr" [nzSrc]="avatarStr"></nz-list-item-meta-avatar>
    <nz-list-item-meta-avatar *ngIf="avatarTpl">
      <ng-container [ngTemplateOutlet]="avatarTpl"></ng-container>
    </nz-list-item-meta-avatar>
    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar"></ng-content>

    <div *ngIf="nzTitle || nzDescription || descriptionComponent || titleComponent" class="ant-list-item-meta-content">
      <!--Old API Start-->
      <nz-list-item-meta-title *ngIf="nzTitle && !titleComponent">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </nz-list-item-meta-title>
      <nz-list-item-meta-description *ngIf="nzDescription && !descriptionComponent">
        <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
      </nz-list-item-meta-description>
      <!--Old API End-->

      <ng-content select="nz-list-item-meta-title"></ng-content>
      <ng-content select="nz-list-item-meta-description"></ng-content>
    </div>
  `,
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    nzAvatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    descriptionComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListItemMetaDescriptionComponent]
    }],
    titleComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListItemMetaTitleComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzListItemExtraComponent {
  constructor() {}

}

NzListItemExtraComponent.ɵfac = function NzListItemExtraComponent_Factory(t) {
  return new (t || NzListItemExtraComponent)();
};

NzListItemExtraComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemExtraComponent,
  selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
  hostAttrs: [1, "ant-list-item-extra"],
  exportAs: ["nzListItemExtra"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListItemExtraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemExtraComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-extra, [nz-list-item-extra]',
      exportAs: 'nzListItemExtra',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'ant-list-item-extra'
      }
    }]
  }], function () {
    return [];
  }, null);
})();

class NzListItemActionComponent {
  constructor() {}

}

NzListItemActionComponent.ɵfac = function NzListItemActionComponent_Factory(t) {
  return new (t || NzListItemActionComponent)();
};

NzListItemActionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemActionComponent,
  selectors: [["nz-list-item-action"]],
  viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzListItemAction"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListItemActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemActionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item-action',
      exportAs: 'nzListItemAction',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-template><ng-content></ng-content></ng-template> `
    }]
  }], function () {
    return [];
  }, {
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();

class NzListItemActionsComponent {
  constructor(ngZone, cdr) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.nzActions = [];
    this.actions = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.inputActionChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.contentChildrenChanges$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
      if (this.nzListItemActions) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }

      return this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => this.contentChildrenChanges$));
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.contentChildrenChanges$, this.inputActionChanges$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.nzActions.length) {
        this.actions = this.nzActions;
      } else {
        this.actions = this.nzListItemActions.map(action => action.templateRef);
      }

      this.cdr.detectChanges();
    });
  }

  ngOnChanges() {
    this.inputActionChanges$.next(null);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzListItemActionsComponent.ɵfac = function NzListItemActionsComponent_Factory(t) {
  return new (t || NzListItemActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NzListItemActionsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemActionsComponent,
  selectors: [["ul", "nz-list-item-actions", ""]],
  contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemActionComponent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListItemActions = _t);
    }
  },
  hostAttrs: [1, "ant-list-item-action"],
  inputs: {
    nzActions: "nzActions"
  },
  exportAs: ["nzListItemActions"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c3,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]],
  template: function NzListItemActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemActionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ul[nz-list-item-actions]',
      exportAs: 'nzListItemActions',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
      host: {
        class: 'ant-list-item-action'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    nzActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzListItemActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzListItemActionComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzListEmptyComponent {}

NzListEmptyComponent.ɵfac = function NzListEmptyComponent_Factory(t) {
  return new (t || NzListEmptyComponent)();
};

NzListEmptyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListEmptyComponent,
  selectors: [["nz-list-empty"]],
  hostAttrs: [1, "ant-list-empty-text"],
  inputs: {
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzListHeader"],
  decls: 1,
  vars: 2,
  consts: [[3, "nzComponentName", "specificContent"]],
  template: function NzListEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-embed-empty", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzComponentName", "list")("specificContent", ctx.nzNoResult);
    }
  },
  directives: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmbedEmptyComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListEmptyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-empty',
      exportAs: 'nzListHeader',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
      host: {
        class: 'ant-list-empty-text'
      }
    }]
  }], null, {
    nzNoResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzListHeaderComponent {}

NzListHeaderComponent.ɵfac = function NzListHeaderComponent_Factory(t) {
  return new (t || NzListHeaderComponent)();
};

NzListHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListHeaderComponent,
  selectors: [["nz-list-header"]],
  hostAttrs: [1, "ant-list-header"],
  exportAs: ["nzListHeader"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-header',
      exportAs: 'nzListHeader',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'ant-list-header'
      }
    }]
  }], null, null);
})();

class NzListFooterComponent {}

NzListFooterComponent.ɵfac = function NzListFooterComponent_Factory(t) {
  return new (t || NzListFooterComponent)();
};

NzListFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListFooterComponent,
  selectors: [["nz-list-footer"]],
  hostAttrs: [1, "ant-list-footer"],
  exportAs: ["nzListFooter"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-footer',
      exportAs: 'nzListFooter',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'ant-list-footer'
      }
    }]
  }], null, null);
})();

class NzListPaginationComponent {}

NzListPaginationComponent.ɵfac = function NzListPaginationComponent_Factory(t) {
  return new (t || NzListPaginationComponent)();
};

NzListPaginationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListPaginationComponent,
  selectors: [["nz-list-pagination"]],
  hostAttrs: [1, "ant-list-pagination"],
  exportAs: ["nzListPagination"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzListPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListPaginationComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-pagination',
      exportAs: 'nzListPagination',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'ant-list-pagination'
      }
    }]
  }], null, null);
})();

class NzListLoadMoreDirective {}

NzListLoadMoreDirective.ɵfac = function NzListLoadMoreDirective_Factory(t) {
  return new (t || NzListLoadMoreDirective)();
};

NzListLoadMoreDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzListLoadMoreDirective,
  selectors: [["nz-list-load-more"]],
  exportAs: ["nzListLoadMoreDirective"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListLoadMoreDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-list-load-more',
      exportAs: 'nzListLoadMoreDirective'
    }]
  }], null, null);
})();

class NzListGridDirective {}

NzListGridDirective.ɵfac = function NzListGridDirective_Factory(t) {
  return new (t || NzListGridDirective)();
};

NzListGridDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzListGridDirective,
  selectors: [["nz-list", "nzGrid", ""]],
  hostAttrs: [1, "ant-list-grid"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListGridDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-list[nzGrid]',
      host: {
        class: 'ant-list-grid'
      }
    }]
  }], null, null);
})();

class NzListComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.nzBordered = false;
    this.nzGrid = '';
    this.nzItemLayout = 'horizontal';
    this.nzRenderItem = null;
    this.nzLoading = false;
    this.nzLoadMore = null;
    this.nzSize = 'default';
    this.nzSplit = true;
    this.hasSomethingAfterLastItem = false;
    this.dir = 'ltr';
    this.itemLayoutNotifySource = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(this.nzItemLayout);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }

  get itemLayoutNotify$() {
    return this.itemLayoutNotifySource.asObservable();
  }

  ngOnInit() {
    var _a;

    this.dir = this.directionality.value;
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
    });
  }

  getSomethingAfterLastItem() {
    return !!(this.nzLoadMore || this.nzPagination || this.nzFooter || this.nzListFooterComponent || this.nzListPaginationComponent || this.nzListLoadMoreDirective);
  }

  ngOnChanges(changes) {
    if (changes.nzItemLayout) {
      this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
  }

  ngOnDestroy() {
    this.itemLayoutNotifySource.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterContentInit() {
    this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
  }

}

NzListComponent.ɵfac = function NzListComponent_Factory(t) {
  return new (t || NzListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8));
};

NzListComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListComponent,
  selectors: [["nz-list"], ["", "nz-list", ""]],
  contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListFooterComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListPaginationComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListLoadMoreDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListFooterComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListPaginationComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzListLoadMoreDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-list"],
  hostVars: 16,
  hostBindings: function NzListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
    }
  },
  inputs: {
    nzDataSource: "nzDataSource",
    nzBordered: "nzBordered",
    nzGrid: "nzGrid",
    nzHeader: "nzHeader",
    nzFooter: "nzFooter",
    nzItemLayout: "nzItemLayout",
    nzRenderItem: "nzRenderItem",
    nzLoading: "nzLoading",
    nzLoadMore: "nzLoadMore",
    nzPagination: "nzPagination",
    nzSize: "nzSize",
    nzSplit: "nzSplit",
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c6,
  decls: 15,
  vars: 9,
  consts: [["itemsTpl", ""], [4, "ngIf"], [3, "nzSpinning"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], [3, "nzNoResult", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "nzNoResult"]],
  template: function NzListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListComponent_ng_template_0_Template, 3, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListComponent_nz_list_header_2_Template, 2, 1, "nz-list-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-spin", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzListComponent_div_6_Template, 1, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzListComponent_div_7_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzListComponent_nz_list_empty_8_Template, 1, 1, "nz-list-empty", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzListComponent_nz_list_footer_9_Template, 2, 1, "nz-list-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzListComponent_ng_template_11_Template, 0, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzListComponent_nz_list_pagination_13_Template, 2, 1, "nz-list-pagination", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 3);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.nzLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzGrid && ctx.nzDataSource)("ngIfElse", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.nzLoadMore);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzPagination);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__.NzSpinComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, NzListHeaderComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_17__.InputBoolean)()], NzListComponent.prototype, "nzBordered", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_17__.InputBoolean)()], NzListComponent.prototype, "nzLoading", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_17__.InputBoolean)()], NzListComponent.prototype, "nzSplit", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list, [nz-list]',
      exportAs: 'nzList',
      template: `
    <ng-template #itemsTpl>
      <div class="ant-list-items">
        <ng-container *ngFor="let item of nzDataSource; let index = index">
          <ng-template
            [ngTemplateOutlet]="nzRenderItem"
            [ngTemplateOutletContext]="{ $implicit: item, index: index }"
          ></ng-template>
        </ng-container>
        <ng-content></ng-content>
      </div>
    </ng-template>

    <nz-list-header *ngIf="nzHeader">
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
    </nz-list-header>
    <ng-content select="nz-list-header"></ng-content>

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        <div *ngIf="nzLoading && nzDataSource && nzDataSource.length === 0" [style.min-height.px]="53"></div>
        <div *ngIf="nzGrid && nzDataSource; else itemsTpl" nz-row [nzGutter]="nzGrid.gutter || null">
          <div
            nz-col
            [nzSpan]="nzGrid.span || null"
            [nzXs]="nzGrid.xs || null"
            [nzSm]="nzGrid.sm || null"
            [nzMd]="nzGrid.md || null"
            [nzLg]="nzGrid.lg || null"
            [nzXl]="nzGrid.xl || null"
            [nzXXl]="nzGrid.xxl || null"
            *ngFor="let item of nzDataSource; let index = index"
          >
            <ng-template
              [ngTemplateOutlet]="nzRenderItem"
              [ngTemplateOutletContext]="{ $implicit: item, index: index }"
            ></ng-template>
          </div>
        </div>
        <nz-list-empty
          *ngIf="!nzLoading && nzDataSource && nzDataSource.length === 0"
          [nzNoResult]="nzNoResult"
        ></nz-list-empty>
      </ng-container>
    </nz-spin>

    <nz-list-footer *ngIf="nzFooter">
      <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
    </nz-list-footer>
    <ng-content select="nz-list-footer, [nz-list-footer]"></ng-content>

    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content select="nz-list-load-more, [nz-list-load-more]"></ng-content>

    <nz-list-pagination *ngIf="nzPagination">
      <ng-template [ngTemplateOutlet]="nzPagination"></ng-template>
    </nz-list-pagination>
    <ng-content select="nz-list-pagination, [nz-list-pagination]"></ng-content>
  `,
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-list',
        '[class.ant-list-rtl]': `dir === 'rtl'`,
        '[class.ant-list-vertical]': 'nzItemLayout === "vertical"',
        '[class.ant-list-lg]': 'nzSize === "large"',
        '[class.ant-list-sm]': 'nzSize === "small"',
        '[class.ant-list-split]': 'nzSplit',
        '[class.ant-list-bordered]': 'nzBordered',
        '[class.ant-list-loading]': 'nzLoading',
        '[class.ant-list-something-after-last-item]': 'hasSomethingAfterLastItem'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzDataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBordered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFooter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzItemLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzRenderItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoadMore: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSplit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNoResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzListFooterComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListFooterComponent]
    }],
    nzListPaginationComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListPaginationComponent]
    }],
    nzListLoadMoreDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListLoadMoreDirective]
    }]
  });
})();

class NzListItemComponent {
  constructor(elementRef, renderer, parentComp, cdr) {
    this.parentComp = parentComp;
    this.cdr = cdr;
    this.nzActions = [];
    this.nzExtra = null;
    this.nzNoFlex = false;
    renderer.addClass(elementRef.nativeElement, 'ant-list-item');
  }

  get isVerticalAndExtra() {
    return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.nzExtra);
  }

  ngAfterViewInit() {
    this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
      this.itemLayout = val;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.itemLayout$) {
      this.itemLayout$.unsubscribe();
    }
  }

}

NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) {
  return new (t || NzListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzListComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NzListItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzListItemComponent,
  selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
  contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzListItemExtraComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listItemExtraDirective = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-list-item-no-flex", ctx.nzNoFlex);
    }
  },
  inputs: {
    nzActions: "nzActions",
    nzContent: "nzContent",
    nzExtra: "nzExtra",
    nzNoFlex: "nzNoFlex"
  },
  exportAs: ["nzListItem"],
  ngContentSelectors: _c8,
  decls: 9,
  vars: 2,
  consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"], ["nz-list-item-actions", "", 3, "nzActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]],
  template: function NzListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
    }

    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r6);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, NzListItemActionsComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, NzListItemExtraComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_17__.InputBoolean)()], NzListItemComponent.prototype, "nzNoFlex", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-list-item, [nz-list-item]',
      exportAs: 'nzListItem',
      template: `
    <ng-template #actionsTpl>
      <ul nz-list-item-actions *ngIf="nzActions && nzActions.length > 0" [nzActions]="nzActions"></ul>
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]"></ng-content>
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]"></ng-content>
      <ng-content></ng-content>
      <ng-container *ngIf="nzContent">
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      </ng-container>
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]"></ng-content>
    </ng-template>
    <ng-template #simpleTpl>
      <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
    </ng-template>

    <ng-container *ngIf="isVerticalAndExtra; else simpleTpl">
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
      </div>
      <nz-list-item-extra *ngIf="nzExtra">
        <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      </nz-list-item-extra>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
    </ng-container>
  `,
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NzListComponent
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    nzActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExtra: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNoFlex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ant-list-item-no-flex']
    }],
    listItemExtraDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzListItemExtraComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const DIRECTIVES = [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective];

class NzListModule {}

NzListModule.ɵfac = function NzListModule_Factory(t) {
  return new (t || NzListModule)();
};

NzListModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzListModule
});
NzListModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__.NzSpinModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzGridModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__.NzAvatarModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmptyModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzListModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__.NzSpinModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzGridModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__.NzAvatarModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmptyModule],
      declarations: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2800:
/*!**************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-pagination.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzPaginationComponent": () => (/* binding */ NzPaginationComponent),
/* harmony export */   "NzPaginationDefaultComponent": () => (/* binding */ NzPaginationDefaultComponent),
/* harmony export */   "NzPaginationItemComponent": () => (/* binding */ NzPaginationItemComponent),
/* harmony export */   "NzPaginationModule": () => (/* binding */ NzPaginationModule),
/* harmony export */   "NzPaginationOptionsComponent": () => (/* binding */ NzPaginationOptionsComponent),
/* harmony export */   "NzPaginationSimpleComponent": () => (/* binding */ NzPaginationSimpleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);






















/* eslint-disable */

const _c0 = ["nz-pagination-item", ""];

function NzPaginationItemComponent_ng_template_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().page;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4);
  }
}

function NzPaginationItemComponent_ng_template_0_button_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
  }
}

function NzPaginationItemComponent_ng_template_0_button_2_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
  }
}

function NzPaginationItemComponent_ng_template_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_i_2_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_2_i_3_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r6.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rtl");
  }
}

function NzPaginationItemComponent_ng_template_0_button_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
  }
}

function NzPaginationItemComponent_ng_template_0_button_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
  }
}

function NzPaginationItemComponent_ng_template_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_3_i_2_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_i_3_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r7.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rtl");
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r15.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rtl");
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 21);
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r16.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rtl");
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "prev_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "next_5");
  }
}

function NzPaginationItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", type_r3);
  }
}

function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_a_1_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_Template, 4, 3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_Template, 4, 3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzPaginationItemComponent_ng_template_0_ng_container_4_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "next");
  }
}

function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {}

const _c1 = function (a0, a1) {
  return {
    $implicit: a0,
    page: a1
  };
};

const _c2 = ["containerTemplate"];

function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r2.prePage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.jumpToPageViaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.nextPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r1.locale.prev_page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lastIndex, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
  }
}

const _c3 = ["nz-pagination-options", ""];

function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 4);
  }

  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r3.label)("nzValue", option_r3.value);
  }
}

function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.onPageSizeChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
  }
}

function NzPaginationOptionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.jumpToPageViaInput($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.jump_to, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.page, " ");
  }
}

function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) {}

const _c4 = function (a0, a1) {
  return {
    $implicit: a0,
    range: a1
  };
};

function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r2.total, ctx_r2.ranges));
  }
}

function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.jumpPage($event);
    })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.jumpDiff($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index)("direction", ctx_r3.dir);
  }
}

function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.onPageIndexChange($event);
    })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.onPageSizeChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
  }
}

function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
  }
}

function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {}

function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1.template);
  }
}

function NzPaginationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
  }
}

class NzPaginationItemComponent {
  constructor() {
    this.active = false;
    this.index = null;
    this.disabled = false;
    this.direction = 'ltr';
    this.type = null;
    this.itemRender = null;
    this.diffIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.gotoIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.title = null;
  }

  clickItem() {
    if (!this.disabled) {
      if (this.type === 'page') {
        this.gotoIndex.emit(this.index);
      } else {
        this.diffIndex.emit({
          next: 1,
          prev: -1,
          prev_5: -5,
          next_5: 5
        }[this.type]);
      }
    }
  }

  ngOnChanges(changes) {
    var _a, _b, _c, _d;

    const {
      locale,
      index,
      type
    } = changes;

    if (locale || index || type) {
      this.title = {
        page: `${this.index}`,
        next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
        prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
        prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
        next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
      }[this.type];
    }
  }

}

NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) {
  return new (t || NzPaginationItemComponent)();
};

NzPaginationItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzPaginationItemComponent,
  selectors: [["li", "nz-pagination-item", ""]],
  hostVars: 19,
  hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzPaginationItemComponent_click_HostBindingHandler() {
        return ctx.clickItem();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
    }
  },
  inputs: {
    active: "active",
    locale: "locale",
    index: "index",
    disabled: "disabled",
    direction: "direction",
    type: "type",
    itemRender: "itemRender"
  },
  outputs: {
    diffIndex: "diffIndex",
    gotoIndex: "gotoIndex"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c0,
  decls: 3,
  vars: 5,
  consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", "class", "ant-pagination-item-link", 3, "disabled", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "button", 1, "ant-pagination-item-link", 3, "disabled"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "right"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "ngSwitch"], ["class", "ant-pagination-item-container", 4, "ngSwitchDefault"], [1, "ant-pagination-item-container"], [3, "ngSwitch", 4, "ngSwitchCase"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"]],
  template: function NzPaginationItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationItemComponent_ng_template_0_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemRender || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.type, ctx.index));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'li[nz-pagination-item]',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      <ng-container [ngSwitch]="type">
        <a *ngSwitchCase="'page'">{{ page }}</a>
        <button type="button" [disabled]="disabled" class="ant-pagination-item-link" *ngSwitchCase="'prev'">
          <ng-container [ngSwitch]="direction">
            <i *ngSwitchCase="'rtl'" nz-icon nzType="right"></i>
            <i *ngSwitchDefault nz-icon nzType="left"></i>
          </ng-container>
        </button>
        <button type="button" [disabled]="disabled" class="ant-pagination-item-link" *ngSwitchCase="'next'">
          <ng-container [ngSwitch]="direction">
            <i *ngSwitchCase="'rtl'" nz-icon nzType="left"></i>
            <i *ngSwitchDefault nz-icon nzType="right"></i>
          </ng-container>
        </button>
        <ng-container *ngSwitchDefault>
          <a class="ant-pagination-item-link" [ngSwitch]="type">
            <div class="ant-pagination-item-container" *ngSwitchDefault>
              <ng-container [ngSwitch]="type">
                <ng-container *ngSwitchCase="'prev_5'" [ngSwitch]="direction">
                  <i *ngSwitchCase="'rtl'" nz-icon nzType="double-right" class="ant-pagination-item-link-icon"></i>
                  <i *ngSwitchDefault nz-icon nzType="double-left" class="ant-pagination-item-link-icon"></i>
                </ng-container>
                <ng-container *ngSwitchCase="'next_5'" [ngSwitch]="direction">
                  <i *ngSwitchCase="'rtl'" nz-icon nzType="double-left" class="ant-pagination-item-link-icon"></i>
                  <i *ngSwitchDefault nz-icon nzType="double-right" class="ant-pagination-item-link-icon"></i>
                </ng-container>
              </ng-container>
              <span class="ant-pagination-item-ellipsis">•••</span>
            </div>
          </a>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    ></ng-template>
  `,
      host: {
        '[class.ant-pagination-prev]': `type === 'prev'`,
        '[class.ant-pagination-next]': `type === 'next'`,
        '[class.ant-pagination-item]': `type === 'page'`,
        '[class.ant-pagination-jump-prev]': `type === 'prev_5'`,
        '[class.ant-pagination-jump-prev-custom-icon]': `type === 'prev_5'`,
        '[class.ant-pagination-jump-next]': `type === 'next_5'`,
        '[class.ant-pagination-jump-next-custom-icon]': `type === 'next_5'`,
        '[class.ant-pagination-disabled]': 'disabled',
        '[class.ant-pagination-item-active]': 'active',
        '[attr.title]': 'title',
        '(click)': 'clickItem()'
      }
    }]
  }], null, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    diffIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    gotoIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NzPaginationSimpleComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.itemRender = null;
    this.disabled = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.lastIndex = 0;
    this.isFirstIndex = false;
    this.isLastIndex = false;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }

  ngOnInit() {
    var _a;

    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }

  updateRtlStyle() {
    if (this.dir === 'rtl') {
      this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.toNumber)(target.value, this.pageIndex);
    this.onPageIndexChange(index);
    target.value = `${this.pageIndex}`;
  }

  prePage() {
    this.onPageIndexChange(this.pageIndex - 1);
  }

  nextPage() {
    this.onPageIndexChange(this.pageIndex + 1);
  }

  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }

  updateBindingValue() {
    this.lastIndex = Math.ceil(this.total / this.pageSize);
    this.isFirstIndex = this.pageIndex === 1;
    this.isLastIndex = this.pageIndex === this.lastIndex;
  }

  ngOnChanges(changes) {
    const {
      pageIndex,
      total,
      pageSize
    } = changes;

    if (pageIndex || total || pageSize) {
      this.updateBindingValue();
    }
  }

}

NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) {
  return new (t || NzPaginationSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8));
};

NzPaginationSimpleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzPaginationSimpleComponent,
  selectors: [["nz-pagination-simple"]],
  viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    itemRender: "itemRender",
    disabled: "disabled",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize"
  },
  outputs: {
    pageIndexChange: "pageIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "direction", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "direction", "itemRender", "click"]],
  template: function NzPaginationSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [NzPaginationItemComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationSimpleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-pagination-simple',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <li
        nz-pagination-item
        [attr.title]="locale.prev_page"
        [disabled]="isFirstIndex"
        [direction]="dir"
        (click)="prePage()"
        type="prev"
        [itemRender]="itemRender"
      ></li>
      <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
        <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
        <span class="ant-pagination-slash">/</span>
        {{ lastIndex }}
      </li>
      <li
        nz-pagination-item
        [attr.title]="locale?.next_page"
        [disabled]="isLastIndex"
        [direction]="dir"
        (click)="nextPage()"
        type="next"
        [itemRender]="itemRender"
      ></li>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['containerTemplate', {
        static: true
      }]
    }],
    itemRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    total: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzPaginationOptionsComponent {
  constructor() {
    this.nzSize = 'default';
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.listOfPageSizeOption = [];
  }

  onPageSizeChange(size) {
    if (this.pageSize !== size) {
      this.pageSizeChange.next(size);
    }
  }

  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = Math.floor((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.toNumber)(target.value, this.pageIndex));
    this.pageIndexChange.next(index);
    target.value = '';
  }

  trackByOption(_, option) {
    return option.value;
  }

  ngOnChanges(changes) {
    const {
      pageSize,
      pageSizeOptions,
      locale
    } = changes;

    if (pageSize || pageSizeOptions || locale) {
      this.listOfPageSizeOption = [...new Set([...this.pageSizeOptions, this.pageSize])].map(item => ({
        value: item,
        label: `${item} ${this.locale.items_per_page}`
      }));
    }
  }

}

NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) {
  return new (t || NzPaginationOptionsComponent)();
};

NzPaginationOptionsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzPaginationOptionsComponent,
  selectors: [["div", "nz-pagination-options", ""]],
  hostAttrs: [1, "ant-pagination-options"],
  inputs: {
    nzSize: "nzSize",
    disabled: "disabled",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c3,
  decls: 2,
  vars: 2,
  consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]],
  template: function NzPaginationOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSizeChanger);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showQuickJumper);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationOptionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'div[nz-pagination-options]',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <nz-select
      class="ant-pagination-options-size-changer"
      *ngIf="showSizeChanger"
      [nzDisabled]="disabled"
      [nzSize]="nzSize"
      [ngModel]="pageSize"
      (ngModelChange)="onPageSizeChange($event)"
    >
      <nz-option
        *ngFor="let option of listOfPageSizeOption; trackBy: trackByOption"
        [nzLabel]="option.label"
        [nzValue]="option.value"
      ></nz-option>
    </nz-select>
    <div class="ant-pagination-options-quick-jumper" *ngIf="showQuickJumper">
      {{ locale.jump_to }}
      <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
      {{ locale.page }}
    </div>
  `,
      host: {
        class: 'ant-pagination-options'
      }
    }]
  }], function () {
    return [];
  }, {
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSizeChanger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showQuickJumper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    total: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NzPaginationDefaultComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.nzSize = 'default';
    this.itemRender = null;
    this.showTotal = null;
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [10, 20, 30, 40];
    this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ranges = [0, 0];
    this.listOfPageItem = [];
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }

  ngOnInit() {
    var _a;

    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }

  updateRtlStyle() {
    if (this.dir === 'rtl') {
      this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  jumpPage(index) {
    this.onPageIndexChange(index);
  }

  jumpDiff(diff) {
    this.jumpPage(this.pageIndex + diff);
  }

  trackByPageItem(_, value) {
    return `${value.type}-${value.index}`;
  }

  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }

  onPageSizeChange(size) {
    this.pageSizeChange.next(size);
  }

  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }

  buildIndexes() {
    const lastIndex = this.getLastIndex(this.total, this.pageSize);
    this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
  }

  getListOfPageItem(pageIndex, lastIndex) {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const concatWithPrevNext = listOfPage => {
      const prevItem = {
        type: 'prev',
        disabled: pageIndex === 1
      };
      const nextItem = {
        type: 'next',
        disabled: pageIndex === lastIndex
      };
      return [prevItem, ...listOfPage, nextItem];
    };

    const generatePage = (start, end) => {
      const list = [];

      for (let i = start; i <= end; i++) {
        list.push({
          index: i,
          type: 'page'
        });
      }

      return list;
    };

    if (lastIndex <= 9) {
      return concatWithPrevNext(generatePage(1, lastIndex));
    } else {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const generateRangeItem = (selected, last) => {
        let listOfRange = [];
        const prevFiveItem = {
          type: 'prev_5'
        };
        const nextFiveItem = {
          type: 'next_5'
        };
        const firstPageItem = generatePage(1, 1);
        const lastPageItem = generatePage(lastIndex, lastIndex);

        if (selected < 5) {
          // If the 4th is selected, one more page will be displayed.
          const maxLeft = selected === 4 ? 6 : 5;
          listOfRange = [...generatePage(2, maxLeft), nextFiveItem];
        } else if (selected < last - 3) {
          listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
        } else {
          // If the 4th from last is selected, one more page will be displayed.
          const minRight = selected === last - 3 ? last - 5 : last - 4;
          listOfRange = [prevFiveItem, ...generatePage(minRight, last - 1)];
        }

        return [...firstPageItem, ...listOfRange, ...lastPageItem];
      };

      return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
    }
  }

  ngOnChanges(changes) {
    const {
      pageIndex,
      pageSize,
      total
    } = changes;

    if (pageIndex || pageSize || total) {
      this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
      this.buildIndexes();
    }
  }

}

NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) {
  return new (t || NzPaginationDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8));
};

NzPaginationDefaultComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzPaginationDefaultComponent,
  selectors: [["nz-pagination-default"]],
  viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzSize: "nzSize",
    itemRender: "itemRender",
    showTotal: "showTotal",
    disabled: "disabled",
    locale: "locale",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]],
  template: function NzPaginationDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationDefaultComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-pagination-default',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <li class="ant-pagination-total-text" *ngIf="showTotal">
        <ng-template
          [ngTemplateOutlet]="showTotal"
          [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"
        ></ng-template>
      </li>
      <li
        *ngFor="let page of listOfPageItem; trackBy: trackByPageItem"
        nz-pagination-item
        [locale]="locale"
        [type]="page.type"
        [index]="page.index"
        [disabled]="!!page.disabled"
        [itemRender]="itemRender"
        [active]="pageIndex === page.index"
        (gotoIndex)="jumpPage($event)"
        (diffIndex)="jumpDiff($event)"
        [direction]="dir"
      ></li>
      <div
        nz-pagination-options
        *ngIf="showQuickJumper || showSizeChanger"
        [total]="total"
        [locale]="locale"
        [disabled]="disabled"
        [nzSize]="nzSize"
        [showSizeChanger]="showSizeChanger"
        [showQuickJumper]="showQuickJumper"
        [pageIndex]="pageIndex"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        (pageIndexChange)="onPageIndexChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
      ></div>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['containerTemplate', {
        static: true
      }]
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTotal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSizeChanger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showQuickJumper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    total: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const NZ_CONFIG_MODULE_NAME = 'pagination';

class NzPaginationComponent {
  constructor(i18n, cdr, breakpointService, nzConfigService, directionality) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzShowTotal = null;
    this.nzItemRender = null;
    this.nzSize = 'default';
    this.nzPageSizeOptions = [10, 20, 30, 40];
    this.nzShowSizeChanger = false;
    this.nzShowQuickJumper = false;
    this.nzSimple = false;
    this.nzDisabled = false;
    this.nzResponsive = false;
    this.nzHideOnSinglePage = false;
    this.nzTotal = 0;
    this.nzPageIndex = 1;
    this.nzPageSize = 10;
    this.showPagination = true;
    this.size = 'default';
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.ReplaySubject(1);
  }

  validatePageIndex(value, lastIndex) {
    if (value > lastIndex) {
      return lastIndex;
    } else if (value < 1) {
      return 1;
    } else {
      return value;
    }
  }

  onPageIndexChange(index) {
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
    const validIndex = this.validatePageIndex(index, lastIndex);

    if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
      this.nzPageIndex = validIndex;
      this.nzPageIndexChange.emit(this.nzPageIndex);
    }
  }

  onPageSizeChange(size) {
    this.nzPageSize = size;
    this.nzPageSizeChange.emit(size);
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);

    if (this.nzPageIndex > lastIndex) {
      this.onPageIndexChange(lastIndex);
    }
  }

  onTotalChange(total) {
    const lastIndex = this.getLastIndex(total, this.nzPageSize);

    if (this.nzPageIndex > lastIndex) {
      Promise.resolve().then(() => {
        this.onPageIndexChange(lastIndex);
        this.cdr.markForCheck();
      });
    }
  }

  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }

  ngOnInit() {
    var _a;

    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Pagination');
      this.cdr.markForCheck();
    });
    this.total$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(total => {
      this.onTotalChange(total);
    });
    this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.gridResponsiveMap).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(bp => {
      if (this.nzResponsive) {
        this.size = bp === ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzBreakpointEnum.xs ? 'small' : 'default';
        this.cdr.markForCheck();
      }
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes) {
    const {
      nzHideOnSinglePage,
      nzTotal,
      nzPageSize,
      nzSize
    } = changes;

    if (nzTotal) {
      this.total$.next(this.nzTotal);
    }

    if (nzHideOnSinglePage || nzTotal || nzPageSize) {
      this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
    }

    if (nzSize) {
      this.size = nzSize.currentValue;
    }
  }

}

NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) {
  return new (t || NzPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzBreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8));
};

NzPaginationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzPaginationComponent,
  selectors: [["nz-pagination"]],
  hostAttrs: [1, "ant-pagination"],
  hostVars: 8,
  hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzShowTotal: "nzShowTotal",
    nzItemRender: "nzItemRender",
    nzSize: "nzSize",
    nzPageSizeOptions: "nzPageSizeOptions",
    nzShowSizeChanger: "nzShowSizeChanger",
    nzShowQuickJumper: "nzShowQuickJumper",
    nzSimple: "nzSimple",
    nzDisabled: "nzDisabled",
    nzResponsive: "nzResponsive",
    nzHideOnSinglePage: "nzHideOnSinglePage",
    nzTotal: "nzTotal",
    nzPageIndex: "nzPageIndex",
    nzPageSize: "nzPageSize"
  },
  outputs: {
    nzPageSizeChange: "nzPageSizeChange",
    nzPageIndexChange: "nzPageIndexChange"
  },
  exportAs: ["nzPagination"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 18,
  consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]],
  template: function NzPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-pagination-simple", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
        return ctx.onPageIndexChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-pagination-default", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
        return ctx.onPageIndexChange($event);
      })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPagination);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, NzPaginationSimpleComponent, NzPaginationDefaultComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzPaginationComponent.prototype, "nzSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzSimple", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzResponsive", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputNumber)()], NzPaginationComponent.prototype, "nzTotal", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputNumber)()], NzPaginationComponent.prototype, "nzPageIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputNumber)()], NzPaginationComponent.prototype, "nzPageSize", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-pagination',
      exportAs: 'nzPagination',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="showPagination">
      <ng-container *ngIf="nzSimple; else defaultPagination.template">
        <ng-template [ngTemplateOutlet]="simplePagination.template"></ng-template>
      </ng-container>
    </ng-container>
    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
      host: {
        class: 'ant-pagination',
        '[class.ant-pagination-simple]': 'nzSimple',
        '[class.ant-pagination-disabled]': 'nzDisabled',
        '[class.mini]': `!nzSimple && size === 'small'`,
        '[class.ant-pagination-rtl]': `dir === 'rtl'`
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.NzI18nService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzBreakpointService
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzPageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzPageIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzShowTotal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzItemRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSizeChanger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowQuickJumper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSimple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzResponsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHideOnSinglePage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTotal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzPaginationModule {}

NzPaginationModule.ɵfac = function NzPaginationModule_Factory(t) {
  return new (t || NzPaginationModule)();
};

NzPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzPaginationModule
});
NzPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1273:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-radio.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzRadioButtonDirective": () => (/* binding */ NzRadioButtonDirective),
/* harmony export */   "NzRadioComponent": () => (/* binding */ NzRadioComponent),
/* harmony export */   "NzRadioGroupComponent": () => (/* binding */ NzRadioGroupComponent),
/* harmony export */   "NzRadioModule": () => (/* binding */ NzRadioModule),
/* harmony export */   "NzRadioService": () => (/* binding */ NzRadioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-radio", ""];

class NzRadioButtonDirective {}

NzRadioButtonDirective.ɵfac = function NzRadioButtonDirective_Factory(t) {
  return new (t || NzRadioButtonDirective)();
};

NzRadioButtonDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzRadioButtonDirective,
  selectors: [["", "nz-radio-button", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-radio-button]'
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzRadioService {
  constructor() {
    this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.touched$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  }

  touch() {
    this.touched$.next();
  }

  select(value) {
    this.selected$.next(value);
  }

  setDisabled(value) {
    this.disabled$.next(value);
  }

  setName(value) {
    this.name$.next(value);
  }

}

NzRadioService.ɵfac = function NzRadioService_Factory(t) {
  return new (t || NzRadioService)();
};

NzRadioService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NzRadioService,
  factory: NzRadioService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class NzRadioGroupComponent {
  constructor(cdr, nzRadioService, directionality) {
    this.cdr = cdr;
    this.nzRadioService = nzRadioService;
    this.directionality = directionality;
    this.value = null;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

    this.onChange = () => {};

    this.onTouched = () => {};

    this.nzDisabled = false;
    this.nzButtonStyle = 'outline';
    this.nzSize = 'default';
    this.nzName = null;
    this.dir = 'ltr';
  }

  ngOnInit() {
    var _a;

    this.nzRadioService.selected$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(value => {
      if (this.value !== value) {
        this.value = value;
        this.onChange(this.value);
      }
    });
    this.nzRadioService.touched$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(() => {
      Promise.resolve().then(() => this.onTouched());
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzName
    } = changes;

    if (nzDisabled) {
      this.nzRadioService.setDisabled(this.nzDisabled);
    }

    if (nzName) {
      this.nzRadioService.setName(this.nzName);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value) {
    this.value = value;
    this.nzRadioService.select(value);
    this.cdr.markForCheck();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.nzDisabled = isDisabled;
    this.nzRadioService.setDisabled(isDisabled);
    this.cdr.markForCheck();
  }

}

NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) {
  return new (t || NzRadioGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
};

NzRadioGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzRadioGroupComponent,
  selectors: [["nz-radio-group"]],
  hostAttrs: [1, "ant-radio-group"],
  hostVars: 8,
  hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzDisabled: "nzDisabled",
    nzButtonStyle: "nzButtonStyle",
    nzSize: "nzSize",
    nzName: "nzName"
  },
  exportAs: ["nzRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NzRadioService, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzRadioGroupComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzRadioGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzRadioGroupComponent.prototype, "nzDisabled", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-radio-group',
      exportAs: 'nzRadioGroup',
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [NzRadioService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzRadioGroupComponent),
        multi: true
      }],
      host: {
        class: 'ant-radio-group',
        '[class.ant-radio-group-large]': `nzSize === 'large'`,
        '[class.ant-radio-group-small]': `nzSize === 'small'`,
        '[class.ant-radio-group-solid]': `nzButtonStyle === 'solid'`,
        '[class.ant-radio-group-rtl]': `dir === 'rtl'`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NzRadioService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzButtonStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzRadioComponent {
  constructor(ngZone, elementRef, cdr, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.nzRadioService = nzRadioService;
    this.nzRadioButtonDirective = nzRadioButtonDirective;
    this.isNgModel = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.isChecked = false;
    this.name = null;
    this.isRadioButton = !!this.nzRadioButtonDirective;

    this.onChange = () => {};

    this.onTouched = () => {};

    this.nzValue = null;
    this.nzDisabled = false;
    this.nzAutoFocus = false;
    this.dir = 'ltr';
  }

  focus() {
    this.focusMonitor.focusVia(this.inputElement, 'keyboard');
  }

  blur() {
    this.inputElement.nativeElement.blur();
  }

  setDisabledState(disabled) {
    this.nzDisabled = disabled;
    this.cdr.markForCheck();
  }

  writeValue(value) {
    this.isChecked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn) {
    this.isNgModel = true;
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  ngOnInit() {
    if (this.nzRadioService) {
      this.nzRadioService.name$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(name => {
        this.name = name;
        this.cdr.markForCheck();
      });
      this.nzRadioService.disabled$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(disabled => {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
      });
      this.nzRadioService.selected$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(value => {
        this.isChecked = this.nzValue === value;
        this.cdr.markForCheck();
      });
    }

    this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());

        if (this.nzRadioService) {
          this.nzRadioService.touch();
        }
      }
    });
    this.directionality.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.setupClickListener();
  }

  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  setupClickListener() {
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.elementRef.nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(event => {
        /** prevent label click triggered twice. **/
        event.stopPropagation();
        event.preventDefault();

        if (this.nzDisabled || this.isChecked) {
          return;
        }

        this.ngZone.run(() => {
          if (this.nzRadioService) {
            this.nzRadioService.select(this.nzValue);
          }

          if (this.isNgModel) {
            this.isChecked = true;
            this.onChange(true);
          }

          this.cdr.markForCheck();
        });
      });
    });
  }

}

NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) {
  return new (t || NzRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioButtonDirective, 8));
};

NzRadioComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzRadioComponent,
  selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]],
  viewQuery: function NzRadioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    }
  },
  hostVars: 16,
  hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
    }
  },
  inputs: {
    nzValue: "nzValue",
    nzDisabled: "nzDisabled",
    nzAutoFocus: "nzAutoFocus"
  },
  exportAs: ["nzRadio"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzRadioComponent),
    multi: true
  }])],
  attrs: _c2,
  ngContentSelectors: _c0,
  decls: 6,
  vars: 24,
  consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]],
  template: function NzRadioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzRadioComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzRadioComponent.prototype, "nzAutoFocus", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[nz-radio],[nz-radio-button]',
      exportAs: 'nzRadio',
      preserveWhitespaces: false,
      template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="nzDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="nzDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="nzDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzRadioComponent),
        multi: true
      }],
      host: {
        '[class.ant-radio-wrapper]': '!isRadioButton',
        '[class.ant-radio-button-wrapper]': 'isRadioButton',
        '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
        '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
        '[class.ant-radio-wrapper-disabled]': 'nzDisabled && !isRadioButton',
        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled && isRadioButton',
        '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
        '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: NzRadioService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: NzRadioButtonDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputElement', {
        static: false
      }]
    }],
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzRadioModule {}

NzRadioModule.ɵfac = function NzRadioModule_Factory(t) {
  return new (t || NzRadioModule)();
};

NzRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzRadioModule
});
NzRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
      exports: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
      declarations: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 517:
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzOptionComponent": () => (/* binding */ NzOptionComponent),
/* harmony export */   "NzOptionContainerComponent": () => (/* binding */ NzOptionContainerComponent),
/* harmony export */   "NzOptionGroupComponent": () => (/* binding */ NzOptionGroupComponent),
/* harmony export */   "NzOptionItemComponent": () => (/* binding */ NzOptionItemComponent),
/* harmony export */   "NzOptionItemGroupComponent": () => (/* binding */ NzOptionItemGroupComponent),
/* harmony export */   "NzSelectArrowComponent": () => (/* binding */ NzSelectArrowComponent),
/* harmony export */   "NzSelectClearComponent": () => (/* binding */ NzSelectClearComponent),
/* harmony export */   "NzSelectComponent": () => (/* binding */ NzSelectComponent),
/* harmony export */   "NzSelectItemComponent": () => (/* binding */ NzSelectItemComponent),
/* harmony export */   "NzSelectModule": () => (/* binding */ NzSelectModule),
/* harmony export */   "NzSelectPlaceholderComponent": () => (/* binding */ NzSelectPlaceholderComponent),
/* harmony export */   "NzSelectSearchComponent": () => (/* binding */ NzSelectSearchComponent),
/* harmony export */   "NzSelectTopControlComponent": () => (/* binding */ NzSelectTopControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/empty */ 4555);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 6906);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ 787);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 405);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 3758);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);








































/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["*"];

function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
  }
}

function NzOptionItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}

function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

function NzOptionItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
  }
}

function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
  }
}

function NzOptionItemComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
  }
}

function NzOptionContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
  }
}

function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
  }

  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
  }
}

function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.onItemHover($event);
    })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.onItemClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
  }
}

function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
  }
}

function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {}

function NzOptionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c1 = ["inputElement"];
const _c2 = ["mirrorElement"];

function NzSelectSearchComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
  }
}

function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
  }
}

function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
  }
}

function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
  }
}

function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
}

function NzSelectItemComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onDelete($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
  }
}

const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};

function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
  }
}

function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
  }
}

function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select-search", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.isComposingChange($event);
    })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onInputValueChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx_r0.nzId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);
  }
}

function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.onDeleteItem(item_r8.contentTemplateOutletContext);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
  }
}

function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.isComposingChange($event);
    })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.onInputValueChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
  }
}

function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
  }
}

function NzSelectArrowComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
  }
}

function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
}

function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
  }
}

function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
  }
}

function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const suffixIcon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
  }
}

function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
  }
}

function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
  }
}

function NzSelectClearComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
  }
}

function NzSelectComponent_nz_select_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 5);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.nzLoading)("search", ctx_r1.nzOpen && ctx_r1.nzShowSearch)("suffixIcon", ctx_r1.nzSuffixIcon);
  }
}

function NzSelectComponent_nz_select_clear_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_3_Template_nz_select_clear_clear_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.onClearSelection();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r2.nzClearIcon);
  }
}

function NzSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onKeyDown($event);
    })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.onItemClick($event);
    })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.nzScrollToBottom.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
  }
}

class NzOptionGroupComponent {
  constructor() {
    this.nzLabel = null;
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngOnChanges() {
    this.changes.next();
  }

}

NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) {
  return new (t || NzOptionGroupComponent)();
};

NzOptionGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzOptionGroupComponent,
  selectors: [["nz-option-group"]],
  inputs: {
    nzLabel: "nzLabel"
  },
  exportAs: ["nzOptionGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-option-group',
      exportAs: 'nzOptionGroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `
    }]
  }], null, {
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzOptionItemGroupComponent {
  constructor() {
    this.nzLabel = null;
  }

}

NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) {
  return new (t || NzOptionItemGroupComponent)();
};

NzOptionItemGroupComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzOptionItemGroupComponent,
  selectors: [["nz-option-item-group"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
  inputs: {
    nzLabel: "nzLabel"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzOptionItemGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-option-item-group',
      template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ant-select-item ant-select-item-group'
      }
    }]
  }], function () {
    return [];
  }, {
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzOptionItemComponent {
  constructor() {
    this.selected = false;
    this.activated = false;
    this.grouped = false;
    this.customContent = false;
    this.template = null;
    this.disabled = false;
    this.showState = false;
    this.label = null;
    this.value = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.icon = null;
    this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onHostMouseEnter() {
    if (!this.disabled) {
      this.itemHover.next(this.value);
    }
  }

  onHostClick() {
    if (!this.disabled) {
      this.itemClick.next(this.value);
    }
  }

  ngOnChanges(changes) {
    const {
      value,
      activatedValue,
      listOfSelectedValue
    } = changes;

    if (value || listOfSelectedValue) {
      this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
    }

    if (value || activatedValue) {
      this.activated = this.compareWith(this.activatedValue, this.value);
    }
  }

}

NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) {
  return new (t || NzOptionItemComponent)();
};

NzOptionItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzOptionItemComponent,
  selectors: [["nz-option-item"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
  hostVars: 9,
  hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() {
        return ctx.onHostMouseEnter();
      })("click", function NzOptionItemComponent_click_HostBindingHandler() {
        return ctx.onHostClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
    }
  },
  inputs: {
    grouped: "grouped",
    customContent: "customContent",
    template: "template",
    disabled: "disabled",
    showState: "showState",
    label: "label",
    value: "value",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    icon: "icon",
    compareWith: "compareWith"
  },
  outputs: {
    itemClick: "itemClick",
    itemHover: "itemHover"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]],
  template: function NzOptionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-option-item',
      template: `
    <div class="ant-select-item-option-content">
      <ng-container *ngIf="!customContent">{{ label }}</ng-container>
      <ng-container *ngIf="customContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-container>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <i nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></i>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ant-select-item ant-select-item-option',
        '[attr.title]': 'label',
        '[class.ant-select-item-option-grouped]': 'grouped',
        '[class.ant-select-item-option-selected]': 'selected && !disabled',
        '[class.ant-select-item-option-disabled]': 'disabled',
        '[class.ant-select-item-option-active]': 'activated && !disabled',
        '(mouseenter)': 'onHostMouseEnter()',
        '(click)': 'onHostClick()'
      }
    }]
  }], function () {
    return [];
  }, {
    grouped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activatedValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfSelectedValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzOptionContainerComponent {
  constructor() {
    this.notFoundContent = undefined;
    this.menuItemSelectedIcon = null;
    this.dropdownRender = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.mode = 'default';
    this.matchWidth = true;
    this.itemSize = 32;
    this.maxItemLength = 8;
    this.listOfContainerItem = [];
    this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrolledIndex = 0;
  }

  onItemClick(value) {
    this.itemClick.emit(value);
  }

  onItemHover(value) {
    // TODO: keydown.enter won't activate this value
    this.activatedValue = value;
  }

  trackValue(_index, option) {
    return option.key;
  }

  onScrolledIndexChange(index) {
    this.scrolledIndex = index;

    if (index === this.listOfContainerItem.length - this.maxItemLength) {
      this.scrollToBottom.emit();
    }
  }

  scrollToActivatedValue() {
    const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));

    if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
      this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
    }
  }

  ngOnChanges(changes) {
    const {
      listOfContainerItem,
      activatedValue
    } = changes;

    if (listOfContainerItem || activatedValue) {
      this.scrollToActivatedValue();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.scrollToActivatedValue());
  }

}

NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) {
  return new (t || NzOptionContainerComponent)();
};

NzOptionContainerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzOptionContainerComponent,
  selectors: [["nz-option-container"]],
  viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualScrollViewport, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-dropdown"],
  inputs: {
    notFoundContent: "notFoundContent",
    menuItemSelectedIcon: "menuItemSelectedIcon",
    dropdownRender: "dropdownRender",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    compareWith: "compareWith",
    mode: "mode",
    matchWidth: "matchWidth",
    itemSize: "itemSize",
    maxItemLength: "maxItemLength",
    listOfContainerItem: "listOfContainerItem"
  },
  outputs: {
    itemClick: "itemClick",
    scrollToBottom: "scrollToBottom"
  },
  exportAs: ["nzOptionContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 14,
  consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]],
  template: function NzOptionContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
        return ctx.onScrolledIndexChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfContainerItem.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.matchWidth);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dropdownRender);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__.NzEmbedEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, NzOptionItemGroupComponent, NzOptionItemComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-option-container',
      exportAs: 'nzOptionContainer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false,
      template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
      host: {
        class: 'ant-select-dropdown'
      }
    }]
  }], function () {
    return [];
  }, {
    notFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    menuItemSelectedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activatedValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfSelectedValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matchWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxItemLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfContainerItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollToBottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cdkVirtualScrollViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualScrollViewport, {
        static: true
      }]
    }]
  });
})();

class NzOptionComponent {
  constructor(nzOptionGroupComponent, destroy$) {
    this.nzOptionGroupComponent = nzOptionGroupComponent;
    this.destroy$ = destroy$;
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.groupLabel = null;
    this.nzLabel = null;
    this.nzValue = null;
    this.nzDisabled = false;
    this.nzHide = false;
    this.nzCustomContent = false;
  }

  ngOnInit() {
    if (this.nzOptionGroupComponent) {
      this.nzOptionGroupComponent.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
        this.groupLabel = this.nzOptionGroupComponent.nzLabel;
      });
    }
  }

  ngOnChanges() {
    this.changes.next();
  }

}

NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) {
  return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService));
};

NzOptionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzOptionComponent,
  selectors: [["nz-option"]],
  viewQuery: function NzOptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzLabel: "nzLabel",
    nzValue: "nzValue",
    nzDisabled: "nzDisabled",
    nzHide: "nzHide",
    nzCustomContent: "nzCustomContent"
  },
  exportAs: ["nzOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzOptionComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzOptionComponent.prototype, "nzHide", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzOptionComponent.prototype, "nzCustomContent", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-option',
      exportAs: 'nzOption',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService],
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: NzOptionGroupComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCustomContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzSelectSearchComponent {
  constructor(elementRef, renderer, focusMonitor) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.focusMonitor = focusMonitor;
    this.nzId = null;
    this.disabled = false;
    this.mirrorSync = false;
    this.showInput = true;
    this.focusTrigger = false;
    this.value = '';
    this.autofocus = false;
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isComposingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  setCompositionState(isComposing) {
    this.isComposingChange.next(isComposing);
  }

  onValueChange(value) {
    this.value = value;
    this.valueChange.next(value);

    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
  }

  clearInputValue() {
    const inputDOM = this.inputElement.nativeElement;
    inputDOM.value = '';
    this.onValueChange('');
  }

  syncMirrorWidth() {
    const mirrorDOM = this.mirrorElement.nativeElement;
    const hostDOM = this.elementRef.nativeElement;
    const inputDOM = this.inputElement.nativeElement;
    this.renderer.removeStyle(hostDOM, 'width');
    mirrorDOM.innerHTML = this.renderer.createText(`${inputDOM.value}&nbsp;`);
    this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
  }

  focus() {
    this.focusMonitor.focusVia(this.inputElement, 'keyboard');
  }

  blur() {
    this.inputElement.nativeElement.blur();
  }

  ngOnChanges(changes) {
    const inputDOM = this.inputElement.nativeElement;
    const {
      focusTrigger,
      showInput
    } = changes;

    if (showInput) {
      if (this.showInput) {
        this.renderer.removeAttribute(inputDOM, 'readonly');
      } else {
        this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
      }
    } // IE11 cannot input value if focused before removing readonly


    if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
      inputDOM.focus();
    }
  }

  ngAfterViewInit() {
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }

    if (this.autofocus) {
      this.focus();
    }
  }

}

NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) {
  return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor));
};

NzSelectSearchComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectSearchComponent,
  selectors: [["nz-select-search"]],
  viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selection-search"],
  inputs: {
    nzId: "nzId",
    disabled: "disabled",
    mirrorSync: "mirrorSync",
    showInput: "showInput",
    focusTrigger: "focusTrigger",
    value: "value",
    autofocus: "autofocus"
  },
  outputs: {
    valueChange: "valueChange",
    isComposingChange: "isComposingChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.COMPOSITION_BUFFER_MODE,
    useValue: false
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 7,
  consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]],
  template: function NzSelectSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
        return ctx.onValueChange($event);
      })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
        return ctx.setCompositionState(true);
      })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
        return ctx.setCompositionState(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectSearchComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-search',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
      host: {
        class: 'ant-select-selection-search'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.COMPOSITION_BUFFER_MODE,
        useValue: false
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
    }];
  }, {
    nzId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mirrorSync: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    isComposingChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputElement', {
        static: true
      }]
    }],
    mirrorElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mirrorElement', {
        static: false
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectItemComponent {
  constructor() {
    this.disabled = false;
    this.label = null;
    this.deletable = false;
    this.removeIcon = null;
    this.contentTemplateOutletContext = null;
    this.contentTemplateOutlet = null;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onDelete(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.disabled) {
      this.delete.next(e);
    }
  }

}

NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) {
  return new (t || NzSelectItemComponent)();
};

NzSelectItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectItemComponent,
  selectors: [["nz-select-item"]],
  hostAttrs: [1, "ant-select-selection-item"],
  hostVars: 3,
  hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    label: "label",
    deletable: "deletable",
    removeIcon: "removeIcon",
    contentTemplateOutletContext: "contentTemplateOutletContext",
    contentTemplateOutlet: "contentTemplateOutlet"
  },
  outputs: {
    delete: "delete"
  },
  decls: 2,
  vars: 5,
  consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]],
  template: function NzSelectItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-item',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <i nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></i>
    </span>
  `,
      host: {
        class: 'ant-select-selection-item',
        '[attr.title]': 'label',
        '[class.ant-select-selection-item-disabled]': 'disabled'
      }
    }]
  }], function () {
    return [];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    deletable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplateOutletContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplateOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectPlaceholderComponent {
  constructor() {
    this.placeholder = null;
  }

}

NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) {
  return new (t || NzSelectPlaceholderComponent)();
};

NzSelectPlaceholderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectPlaceholderComponent,
  selectors: [["nz-select-placeholder"]],
  hostAttrs: [1, "ant-select-selection-placeholder"],
  inputs: {
    placeholder: "placeholder"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectPlaceholderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-placeholder',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
      host: {
        class: 'ant-select-selection-placeholder'
      }
    }]
  }], function () {
    return [];
  }, {
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectTopControlComponent {
  constructor(elementRef, ngZone, noAnimation) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.noAnimation = noAnimation;
    this.nzId = null;
    this.showSearch = false;
    this.placeHolder = null;
    this.open = false;
    this.maxTagCount = Infinity;
    this.autofocus = false;
    this.disabled = false;
    this.mode = 'default';
    this.customTemplate = null;
    this.maxTagPlaceholder = null;
    this.removeIcon = null;
    this.listOfTopItem = [];
    this.tokenSeparators = [];
    this.tokenize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.listOfSlicedItem = [];
    this.isShowPlaceholder = true;
    this.isShowSingleLabel = false;
    this.isComposing = false;
    this.inputValue = null;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  updateTemplateVariable() {
    const isSelectedValueEmpty = this.listOfTopItem.length === 0;
    this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
  }

  isComposingChange(isComposing) {
    this.isComposing = isComposing;
    this.updateTemplateVariable();
  }

  onInputValueChange(value) {
    if (value !== this.inputValue) {
      this.inputValue = value;
      this.updateTemplateVariable();
      this.inputValueChange.emit(value);
      this.tokenSeparate(value, this.tokenSeparators);
    }
  }

  tokenSeparate(inputValue, tokenSeparators) {
    const includesSeparators = (str, separators) => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < separators.length; ++i) {
        if (str.lastIndexOf(separators[i]) > 0) {
          return true;
        }
      }

      return false;
    };

    const splitBySeparators = (str, separators) => {
      const reg = new RegExp(`[${separators.join()}]`);
      const array = str.split(reg).filter(token => token);
      return [...new Set(array)];
    };

    if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== 'default' && includesSeparators(inputValue, tokenSeparators)) {
      const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
      this.tokenize.next(listOfLabel);
    }
  }

  clearInputValue() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.clearInputValue();
    }
  }

  focus() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }

  blur() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.blur();
    }
  }

  trackValue(_index, option) {
    return option.nzValue;
  }

  onDeleteItem(item) {
    if (!this.disabled && !item.nzDisabled) {
      this.deleteItem.next(item);
    }
  }

  ngOnChanges(changes) {
    const {
      listOfTopItem,
      maxTagCount,
      customTemplate,
      maxTagPlaceholder
    } = changes;

    if (listOfTopItem) {
      this.updateTemplateVariable();
    }

    if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
      const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => ({
        nzLabel: o.nzLabel,
        nzValue: o.nzValue,
        nzDisabled: o.nzDisabled,
        contentTemplateOutlet: this.customTemplate,
        contentTemplateOutletContext: o
      }));

      if (this.listOfTopItem.length > this.maxTagCount) {
        const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
        const listOfSelectedValue = this.listOfTopItem.map(item => item.nzValue);
        const exceededItem = {
          nzLabel: exceededLabel,
          nzValue: '$$__nz_exceeded_item',
          nzDisabled: true,
          contentTemplateOutlet: this.maxTagPlaceholder,
          contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
        };
        listOfSlicedItem.push(exceededItem);
      }

      this.listOfSlicedItem = listOfSlicedItem;
    }
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this.elementRef.nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(event => {
        // `HTMLElement.focus()` is a native DOM API which doesn't require Angular to run change detection.
        if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
          this.nzSelectSearchComponent.focus();
        }
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.fromEvent)(this.elementRef.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(event => {
        if (event.target instanceof HTMLInputElement) {
          const inputValue = event.target.value;

          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.BACKSPACE && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            event.preventDefault(); // Run change detection only if the user has pressed the `Backspace` key and the following condition is met.

            this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}

NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) {
  return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationDirective, 9));
};

NzSelectTopControlComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectTopControlComponent,
  selectors: [["nz-select-top-control"]],
  viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selector"],
  inputs: {
    nzId: "nzId",
    showSearch: "showSearch",
    placeHolder: "placeHolder",
    open: "open",
    maxTagCount: "maxTagCount",
    autofocus: "autofocus",
    disabled: "disabled",
    mode: "mode",
    customTemplate: "customTemplate",
    maxTagPlaceholder: "maxTagPlaceholder",
    removeIcon: "removeIcon",
    listOfTopItem: "listOfTopItem",
    tokenSeparators: "tokenSeparators"
  },
  outputs: {
    tokenize: "tokenize",
    inputValueChange: "inputValueChange",
    deleteItem: "deleteItem"
  },
  exportAs: ["nzSelectTopControl"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]],
  template: function NzSelectTopControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, NzSelectSearchComponent, NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, NzSelectPlaceholderComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectTopControlComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-top-control',
      exportAs: 'nzSelectTopControl',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></nz-select-item>
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
      host: {
        class: 'ant-select-selector'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxTagCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxTagPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfTopItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tokenSeparators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tokenize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    deleteItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSelectSearchComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzSelectSearchComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectArrowComponent {
  constructor() {
    this.loading = false;
    this.search = false;
    this.suffixIcon = null;
  }

}

NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) {
  return new (t || NzSelectArrowComponent)();
};

NzSelectArrowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectArrowComponent,
  selectors: [["nz-select-arrow"]],
  hostAttrs: [1, "ant-select-arrow"],
  hostVars: 2,
  hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow-loading", ctx.loading);
    }
  },
  inputs: {
    loading: "loading",
    search: "search",
    suffixIcon: "suffixIcon"
  },
  decls: 3,
  vars: 2,
  consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzSelectArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectArrowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-arrow',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <i nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></i>
    <ng-template #defaultArrow>
      <ng-container *ngIf="!suffixIcon; else suffixTemplate">
        <i nz-icon nzType="down" *ngIf="!search"></i>
        <i nz-icon nzType="search" *ngIf="search"></i>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </ng-template>
    </ng-template>
  `,
      host: {
        class: 'ant-select-arrow',
        '[class.ant-select-arrow-loading]': 'loading'
      }
    }]
  }], function () {
    return [];
  }, {
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    search: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffixIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectClearComponent {
  constructor() {
    this.clearIcon = null;
    this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clear.emit(e);
  }

}

NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) {
  return new (t || NzSelectClearComponent)();
};

NzSelectClearComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectClearComponent,
  selectors: [["nz-select-clear"]],
  hostAttrs: [1, "ant-select-clear"],
  hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    clearIcon: "clearIcon"
  },
  outputs: {
    clear: "clear"
  },
  decls: 1,
  vars: 2,
  consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
  template: function NzSelectClearComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectClearComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select-clear',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <i
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></i>
  `,
      host: {
        class: 'ant-select-clear',
        '(click)': 'onClick($event)'
      }
    }]
  }], function () {
    return [];
  }, {
    clearIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const defaultFilterOption = (searchValue, item) => {
  if (item && item.nzLabel) {
    return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  } else {
    return false;
  }
};

const NZ_CONFIG_MODULE_NAME = 'select';

class NzSelectComponent {
  constructor(destroy$, nzConfigService, cdr, elementRef, platform, focusMonitor, directionality, noAnimation) {
    this.destroy$ = destroy$;
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.platform = platform;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzSize = 'default';
    this.nzOptionHeightPx = 32;
    this.nzOptionOverflowSize = 8;
    this.nzDropdownClassName = null;
    this.nzDropdownMatchSelectWidth = true;
    this.nzDropdownStyle = null;
    this.nzNotFoundContent = undefined;
    this.nzPlaceHolder = null;
    this.nzMaxTagCount = Infinity;
    this.nzDropdownRender = null;
    this.nzCustomTemplate = null;
    this.nzSuffixIcon = null;
    this.nzClearIcon = null;
    this.nzRemoveIcon = null;
    this.nzMenuItemSelectedIcon = null;
    this.nzTokenSeparators = [];
    this.nzMaxTagPlaceholder = null;
    this.nzMaxMultipleCount = Infinity;
    this.nzMode = 'default';
    this.nzFilterOption = defaultFilterOption;

    this.compareWith = (o1, o2) => o1 === o2;

    this.nzAllowClear = false;
    this.nzBorderless = false;
    this.nzShowSearch = false;
    this.nzLoading = false;
    this.nzAutoFocus = false;
    this.nzAutoClearSearchValue = true;
    this.nzServerSearch = false;
    this.nzDisabled = false;
    this.nzOpen = false;
    this.nzBackdrop = false;
    this.nzOptions = [];
    this.nzOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.listOfValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject([]);
    this.listOfTemplateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject([]);
    this.listOfTagAndTemplateItem = [];
    this.searchValue = '';
    this.isReactiveDriven = false;
    this.requestId = -1;

    this.onChange = () => {};

    this.onTouched = () => {};

    this.dropDownPosition = 'bottom';
    this.triggerWidth = null;
    this.listOfContainerItem = [];
    this.listOfTopItem = [];
    this.activatedValue = null;
    this.listOfValue = [];
    this.focused = false;
    this.dir = 'ltr';
  }

  set nzShowArrow(value) {
    this._nzShowArrow = value;
  }

  get nzShowArrow() {
    return this._nzShowArrow === undefined ? this.nzMode === 'default' : this._nzShowArrow;
  }

  generateTagItem(value) {
    return {
      nzValue: value,
      nzLabel: value,
      type: 'item'
    };
  }

  onItemClick(value) {
    this.activatedValue = value;

    if (this.nzMode === 'default') {
      if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
        this.updateListOfValue([value]);
      }

      this.setOpenState(false);
    } else {
      const targetIndex = this.listOfValue.findIndex(o => this.compareWith(o, value));

      if (targetIndex !== -1) {
        const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
        this.updateListOfValue(listOfValueAfterRemoved);
      } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
        const listOfValueAfterAdded = [...this.listOfValue, value];
        this.updateListOfValue(listOfValueAfterAdded);
      }

      this.focus();

      if (this.nzAutoClearSearchValue) {
        this.clearInput();
      }
    }
  }

  onItemDelete(item) {
    const listOfSelectedValue = this.listOfValue.filter(v => !this.compareWith(v, item.nzValue));
    this.updateListOfValue(listOfSelectedValue);
    this.clearInput();
  }

  onHostClick() {
    if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
      return;
    }

    this.setOpenState(!this.nzOpen);
  }

  updateListOfContainerItem() {
    let listOfContainerItem = this.listOfTagAndTemplateItem.filter(item => !item.nzHide).filter(item => {
      if (!this.nzServerSearch && this.searchValue) {
        return this.nzFilterOption(this.searchValue, item);
      } else {
        return true;
      }
    });

    if (this.nzMode === 'tags' && this.searchValue) {
      const matchedItem = this.listOfTagAndTemplateItem.find(item => item.nzLabel === this.searchValue);

      if (!matchedItem) {
        const tagItem = this.generateTagItem(this.searchValue);
        listOfContainerItem = [tagItem, ...listOfContainerItem];
        this.activatedValue = tagItem.nzValue;
      } else {
        this.activatedValue = matchedItem.nzValue;
      }
    }

    const activatedItem = listOfContainerItem.find(item => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
    this.activatedValue = activatedItem && activatedItem.nzValue || null;
    let listOfGroupLabel = [];

    if (this.isReactiveDriven) {
      listOfGroupLabel = [...new Set(this.nzOptions.filter(o => o.groupLabel).map(o => o.groupLabel))];
    } else {
      if (this.listOfNzOptionGroupComponent) {
        listOfGroupLabel = this.listOfNzOptionGroupComponent.map(o => o.nzLabel);
      }
    }
    /** insert group item **/


    listOfGroupLabel.forEach(label => {
      const index = listOfContainerItem.findIndex(item => label === item.groupLabel);

      if (index > -1) {
        const groupItem = {
          groupLabel: label,
          type: 'group',
          key: label
        };
        listOfContainerItem.splice(index, 0, groupItem);
      }
    });
    this.listOfContainerItem = [...listOfContainerItem];
    this.updateCdkConnectedOverlayPositions();
  }

  clearInput() {
    this.nzSelectTopControlComponent.clearInputValue();
  }

  updateListOfValue(listOfValue) {
    const covertListToModel = (list, mode) => {
      if (mode === 'default') {
        if (list.length > 0) {
          return list[0];
        } else {
          return null;
        }
      } else {
        return list;
      }
    };

    const model = covertListToModel(listOfValue, this.nzMode);

    if (this.value !== model) {
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.value = model;
      this.onChange(this.value);
    }
  }

  onTokenSeparate(listOfLabel) {
    const listOfMatchedValue = this.listOfTagAndTemplateItem.filter(item => listOfLabel.findIndex(label => label === item.nzLabel) !== -1).map(item => item.nzValue).filter(item => this.listOfValue.findIndex(v => this.compareWith(v, item)) === -1);

    if (this.nzMode === 'multiple') {
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
    } else if (this.nzMode === 'tags') {
      const listOfUnMatchedLabel = listOfLabel.filter(label => this.listOfTagAndTemplateItem.findIndex(item => item.nzLabel === label) === -1);
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
    }

    this.clearInput();
  }

  onOverlayKeyDown(e) {
    if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE) {
      this.setOpenState(false);
    }
  }

  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }

    const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter(item => item.type === 'item').filter(item => !item.nzDisabled);
    const activatedIndex = listOfFilteredOptionNotDisabled.findIndex(item => this.compareWith(item.nzValue, this.activatedValue));

    switch (e.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW:
        e.preventDefault();

        if (this.nzOpen) {
          const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
          this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW:
        e.preventDefault();

        if (this.nzOpen) {
          const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
          this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
        } else {
          this.setOpenState(true);
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
        e.preventDefault();

        if (this.nzOpen) {
          if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.isNotNil)(this.activatedValue)) {
            this.onItemClick(this.activatedValue);
          }
        } else {
          this.setOpenState(true);
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
        if (!this.nzOpen) {
          this.setOpenState(true);
          e.preventDefault();
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.TAB:
        this.setOpenState(false);
        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE:
        /**
         * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
         */
        break;

      default:
        if (!this.nzOpen) {
          this.setOpenState(true);
        }

    }
  }

  setOpenState(value) {
    if (this.nzOpen !== value) {
      this.nzOpen = value;
      this.nzOpenChange.emit(value);
      this.onOpenChange();
      this.cdr.markForCheck();
    }
  }

  onOpenChange() {
    this.updateCdkConnectedOverlayStatus();
    this.clearInput();
  }

  onInputValueChange(value) {
    this.searchValue = value;
    this.updateListOfContainerItem();
    this.nzOnSearch.emit(value);
    this.updateCdkConnectedOverlayPositions();
  }

  onClearSelection() {
    this.updateListOfValue([]);
  }

  onClickOutside(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.setOpenState(false);
    }
  }

  focus() {
    this.nzSelectTopControlComponent.focus();
  }

  blur() {
    this.nzSelectTopControlComponent.blur();
  }

  onPositionChange(position) {
    this.dropDownPosition = position.connectionPair.originY;
  }

  updateCdkConnectedOverlayStatus() {
    if (this.platform.isBrowser && this.originElement.nativeElement) {
      const triggerWidth = this.triggerWidth;
      (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__.cancelRequestAnimationFrame)(this.requestId);
      this.requestId = (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__.reqAnimFrame)(() => {
        // Blink triggers style and layout pipelines anytime the `getBoundingClientRect()` is called, which may cause a
        // frame drop. That's why it's scheduled through the `requestAnimationFrame` to unload the composite thread.
        this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;

        if (triggerWidth !== this.triggerWidth) {
          // The `requestAnimationFrame` will trigger change detection, but we're inside an `OnPush` component which won't have
          // the `ChecksEnabled` state. Calling `markForCheck()` will allow Angular to run the change detection from the root component
          // down to the `nz-select`. But we'll trigger only local change detection if the `triggerWidth` has been changed.
          this.cdr.detectChanges();
        }
      });
    }
  }

  updateCdkConnectedOverlayPositions() {
    (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__.reqAnimFrame)(() => {
      var _a, _b;

      (_b = (_a = this.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
    });
  }

  writeValue(modelValue) {
    /** https://github.com/angular/angular/issues/14988 **/
    if (this.value !== modelValue) {
      this.value = modelValue;

      const covertModelToList = (model, mode) => {
        if (model === null || model === undefined) {
          return [];
        } else if (mode === 'default') {
          return [model];
        } else {
          return model;
        }
      };

      const listOfValue = covertModelToList(modelValue, this.nzMode);
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled) {
    this.nzDisabled = disabled;

    if (disabled) {
      this.setOpenState(false);
    }

    this.cdr.markForCheck();
  }

  ngOnChanges(changes) {
    const {
      nzOpen,
      nzDisabled,
      nzOptions
    } = changes;

    if (nzOpen) {
      this.onOpenChange();
    }

    if (nzDisabled && this.nzDisabled) {
      this.setOpenState(false);
    }

    if (nzOptions) {
      this.isReactiveDriven = true;
      const listOfOptions = this.nzOptions || [];
      const listOfTransformedItem = listOfOptions.map(item => {
        return {
          template: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef ? item.label : null,
          nzLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
          nzValue: item.value,
          nzDisabled: item.disabled || false,
          nzHide: item.hide || false,
          nzCustomContent: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
          groupLabel: item.groupLabel || null,
          type: 'item',
          key: item.value
        };
      });
      this.listOfTemplateItem$.next(listOfTransformedItem);
    }
  }

  ngOnInit() {
    var _a;

    this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        this.nzBlur.emit();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
        this.nzFocus.emit();
      }
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.listOfValue$, this.listOfTemplateItem$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
      const listOfTagItem = listOfSelectedValue.filter(() => this.nzMode === 'tags').filter(value => listOfTemplateItem.findIndex(o => this.compareWith(o.nzValue, value)) === -1).map(value => this.listOfTopItem.find(o => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
      this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
      this.listOfTopItem = this.listOfValue.map(v => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find(item => this.compareWith(v, item.nzValue))).filter(item => !!item);
      this.updateListOfContainerItem();
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.nzConfigService.getConfigChangeEventForComponent('select').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
  }

  ngAfterContentInit() {
    if (!this.isReactiveDriven) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.merge)(...[this.listOfNzOptionComponent.changes, this.listOfNzOptionGroupComponent.changes, ...this.listOfNzOptionComponent.map(option => option.changes), ...this.listOfNzOptionGroupComponent.map(option => option.changes)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(true))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
        const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map(item => {
          const {
            template,
            nzLabel,
            nzValue,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel
          } = item;
          return {
            template,
            nzLabel,
            nzValue,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel,
            type: 'item',
            key: nzValue
          };
        });
        this.listOfTemplateItem$.next(listOfOptionInterface);
        this.cdr.markForCheck();
      });
    }
  }

  ngOnDestroy() {
    (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__.cancelRequestAnimationFrame)(this.requestId);
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

}

NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) {
  return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationDirective, 9));
};

NzSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSelectComponent,
  selectors: [["nz-select"]],
  contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
    }
  },
  viewQuery: function NzSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkOverlayOrigin, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkConnectedOverlay, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectTopControlComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzOptionGroupComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectTopControlComponent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select"],
  hostVars: 24,
  hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectComponent_click_HostBindingHandler() {
        return ctx.onHostClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzId: "nzId",
    nzSize: "nzSize",
    nzOptionHeightPx: "nzOptionHeightPx",
    nzOptionOverflowSize: "nzOptionOverflowSize",
    nzDropdownClassName: "nzDropdownClassName",
    nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
    nzDropdownStyle: "nzDropdownStyle",
    nzNotFoundContent: "nzNotFoundContent",
    nzPlaceHolder: "nzPlaceHolder",
    nzMaxTagCount: "nzMaxTagCount",
    nzDropdownRender: "nzDropdownRender",
    nzCustomTemplate: "nzCustomTemplate",
    nzSuffixIcon: "nzSuffixIcon",
    nzClearIcon: "nzClearIcon",
    nzRemoveIcon: "nzRemoveIcon",
    nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
    nzTokenSeparators: "nzTokenSeparators",
    nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
    nzMaxMultipleCount: "nzMaxMultipleCount",
    nzMode: "nzMode",
    nzFilterOption: "nzFilterOption",
    compareWith: "compareWith",
    nzAllowClear: "nzAllowClear",
    nzBorderless: "nzBorderless",
    nzShowSearch: "nzShowSearch",
    nzLoading: "nzLoading",
    nzAutoFocus: "nzAutoFocus",
    nzAutoClearSearchValue: "nzAutoClearSearchValue",
    nzServerSearch: "nzServerSearch",
    nzDisabled: "nzDisabled",
    nzOpen: "nzOpen",
    nzBackdrop: "nzBackdrop",
    nzOptions: "nzOptions",
    nzShowArrow: "nzShowArrow"
  },
  outputs: {
    nzOnSearch: "nzOnSearch",
    nzScrollToBottom: "nzScrollToBottom",
    nzOpenChange: "nzOpenChange",
    nzBlur: "nzBlur",
    nzFocus: "nzFocus"
  },
  exportAs: ["nzSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzSelectComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 24,
  consts: [["cdkOverlayOrigin", "", 3, "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "deleteItem", "keydown"], ["origin", "cdkOverlayOrigin"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "overlayKeydown", "overlayOutsideClick", "detach", "positionChange"], [3, "loading", "search", "suffixIcon"], [3, "clearIcon", "clear"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]],
  template: function NzSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
        return ctx.onInputValueChange($event);
      })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
        return ctx.onTokenSeparate($event);
      })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
        return ctx.onItemDelete($event);
      })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
        return ctx.onKeyDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_arrow_2_Template, 1, 3, "nz-select-arrow", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_clear_3_Template, 1, 1, "nz-select-clear", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayKeydown", function NzSelectComponent_Template_ng_template_overlayKeydown_4_listener($event) {
        return ctx.onOverlayKeyDown($event);
      })("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
        return ctx.onClickOutside($event);
      })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
        return ctx.setOpenState(false);
      })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
        return ctx.onPositionChange($event);
      });
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
    }
  },
  directives: [NzSelectTopControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkOverlayOrigin, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkConnectedOverlay, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_27__.NzConnectedOverlayDirective, NzSelectArrowComponent, NzSelectClearComponent, NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  encapsulation: 2,
  data: {
    animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_28__.slideMotion]
  },
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__.WithConfig)()], NzSelectComponent.prototype, "nzSuffixIcon", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzAllowClear", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzBorderless", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzShowSearch", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzLoading", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzAutoFocus", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzServerSearch", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzOpen", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__.InputBoolean)()], NzSelectComponent.prototype, "nzBackdrop", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-select',
      exportAs: 'nzSelect',
      preserveWhitespaces: false,
      providers: [ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzSelectComponent),
        multi: true
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_28__.slideMotion],
      template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzId]="nzId"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></nz-select-top-control>
    <nz-select-arrow
      *ngIf="nzShowArrow"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
    ></nz-select-arrow>
    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      [cdkConnectedOverlayOpen]="nzOpen"
      (overlayKeydown)="onOverlayKeyDown($event)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
      host: {
        class: 'ant-select',
        '[class.ant-select-lg]': 'nzSize === "large"',
        '[class.ant-select-sm]': 'nzSize === "small"',
        '[class.ant-select-show-arrow]': `nzShowArrow`,
        '[class.ant-select-disabled]': 'nzDisabled',
        '[class.ant-select-show-search]': `(nzShowSearch || nzMode !== 'default') && !nzDisabled`,
        '[class.ant-select-allow-clear]': 'nzAllowClear',
        '[class.ant-select-borderless]': 'nzBorderless',
        '[class.ant-select-open]': 'nzOpen',
        '[class.ant-select-focused]': 'nzOpen || focused',
        '[class.ant-select-single]': `nzMode === 'default'`,
        '[class.ant-select-multiple]': `nzMode !== 'default'`,
        '[class.ant-select-rtl]': `dir === 'rtl'`,
        '(click)': 'onHostClick()'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__.NzDestroyService
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.Platform
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOptionHeightPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOptionOverflowSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownClassName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNotFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMaxTagCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSuffixIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzClearIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzRemoveIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMenuItemSelectedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTokenSeparators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMaxTagPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMaxMultipleCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFilterOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAllowClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBorderless: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoClearSearchValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzServerSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOnSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzScrollToBottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzOpenChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    originElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkOverlayOrigin, {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    cdkConnectedOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.CdkConnectedOverlay, {
        static: true
      }]
    }],
    nzSelectTopControlComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true
      }]
    }],
    listOfNzOptionComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzOptionComponent, {
        descendants: true
      }]
    }],
    listOfNzOptionGroupComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzOptionGroupComponent, {
        descendants: true
      }]
    }],
    nzOptionGroupComponentElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzOptionGroupComponent, {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    nzSelectTopControlComponentElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSelectModule {}

NzSelectModule.ɵfac = function NzSelectModule_Factory(t) {
  return new (t || NzSelectModule)();
};

NzSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzSelectModule
});
NzSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__.NzI18nModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzOutletModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__.NzEmptyModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_27__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationModule, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__.NzI18nModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__.PlatformModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_2__.NzOutletModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__.NzEmptyModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_27__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__.NzNoAnimationModule, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.A11yModule],
      declarations: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
      exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3458:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-spin.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzSpinComponent": () => (/* binding */ NzSpinComponent),
/* harmony export */   "NzSpinModule": () => (/* binding */ NzSpinModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);














function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) {}

function NzSpinComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzTip);
  }
}

function NzSpinComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-spin-rtl", ctx_r2.dir === "rtl")("ant-spin-spinning", ctx_r2.isLoading)("ant-spin-lg", ctx_r2.nzSize === "large")("ant-spin-sm", ctx_r2.nzSize === "small")("ant-spin-show-text", ctx_r2.nzTip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzIndicator || _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzTip);
  }
}

function NzSpinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-spin-blur", ctx_r3.isLoading);
  }
}

const _c0 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'spin';

class NzSpinComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzIndicator = null;
    this.nzSize = 'default';
    this.nzTip = null;
    this.nzDelay = 0;
    this.nzSimple = false;
    this.nzSpinning = true;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.spinning$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.nzSpinning);
    this.delay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.isLoading = false;
    this.dir = 'ltr';
  }

  ngOnInit() {
    var _a;

    const loading$ = this.delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(this.nzDelay), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(delay => {
      if (delay === 0) {
        return this.spinning$;
      }

      return this.spinning$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounce)(spinning => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(spinning ? delay : 0)));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$));
    loading$.subscribe(loading => {
      this.isLoading = loading;
      this.cdr.markForCheck();
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngOnChanges(changes) {
    const {
      nzSpinning,
      nzDelay
    } = changes;

    if (nzSpinning) {
      this.spinning$.next(this.nzSpinning);
    }

    if (nzDelay) {
      this.delay$.next(this.nzDelay);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) {
  return new (t || NzSpinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_10__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8));
};

NzSpinComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzSpinComponent,
  selectors: [["nz-spin"]],
  hostVars: 2,
  hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-spin-nested-loading", !ctx.nzSimple);
    }
  },
  inputs: {
    nzIndicator: "nzIndicator",
    nzSize: "nzSize",
    nzTip: "nzTip",
    nzDelay: "nzDelay",
    nzSimple: "nzSimple",
    nzSpinning: "nzSpinning"
  },
  exportAs: ["nzSpin"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [["defaultTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
  template: function NzSpinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSpinComponent_div_2_Template, 4, 12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSpinComponent_div_3_Template, 2, 2, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzSimple);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_10__.WithConfig)()], NzSpinComponent.prototype, "nzIndicator", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputNumber)()], NzSpinComponent.prototype, "nzDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputBoolean)()], NzSpinComponent.prototype, "nzSimple", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputBoolean)()], NzSpinComponent.prototype, "nzSpinning", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpinComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-spin',
      exportAs: 'nzSpin',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    <div *ngIf="isLoading">
      <div
        class="ant-spin"
        [class.ant-spin-rtl]="dir === 'rtl'"
        [class.ant-spin-spinning]="isLoading"
        [class.ant-spin-lg]="nzSize === 'large'"
        [class.ant-spin-sm]="nzSize === 'small'"
        [class.ant-spin-show-text]="nzTip"
      >
        <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate"></ng-template>
        <div class="ant-spin-text" *ngIf="nzTip">{{ nzTip }}</div>
      </div>
    </div>
    <div *ngIf="!nzSimple" class="ant-spin-container" [class.ant-spin-blur]="isLoading">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        '[class.ant-spin-nested-loading]': '!nzSimple'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_10__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSimple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSpinning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzSpinModule {}

NzSpinModule.ɵfac = function NzSpinModule_Factory(t) {
  return new (t || NzSpinModule)();
};

NzSpinModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzSpinModule
});
NzSpinModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpinModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [NzSpinComponent],
      declarations: [NzSpinComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3134:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzCellAlignDirective": () => (/* binding */ NzCellAlignDirective),
/* harmony export */   "NzCellBreakWordDirective": () => (/* binding */ NzCellBreakWordDirective),
/* harmony export */   "NzCellEllipsisDirective": () => (/* binding */ NzCellEllipsisDirective),
/* harmony export */   "NzCellFixedDirective": () => (/* binding */ NzCellFixedDirective),
/* harmony export */   "NzFilterTriggerComponent": () => (/* binding */ NzFilterTriggerComponent),
/* harmony export */   "NzRowExpandButtonDirective": () => (/* binding */ NzRowExpandButtonDirective),
/* harmony export */   "NzRowIndentDirective": () => (/* binding */ NzRowIndentDirective),
/* harmony export */   "NzTableCellDirective": () => (/* binding */ NzTableCellDirective),
/* harmony export */   "NzTableComponent": () => (/* binding */ NzTableComponent),
/* harmony export */   "NzTableContentComponent": () => (/* binding */ NzTableContentComponent),
/* harmony export */   "NzTableDataService": () => (/* binding */ NzTableDataService),
/* harmony export */   "NzTableFilterComponent": () => (/* binding */ NzTableFilterComponent),
/* harmony export */   "NzTableFixedRowComponent": () => (/* binding */ NzTableFixedRowComponent),
/* harmony export */   "NzTableInnerDefaultComponent": () => (/* binding */ NzTableInnerDefaultComponent),
/* harmony export */   "NzTableInnerScrollComponent": () => (/* binding */ NzTableInnerScrollComponent),
/* harmony export */   "NzTableModule": () => (/* binding */ NzTableModule),
/* harmony export */   "NzTableSelectionComponent": () => (/* binding */ NzTableSelectionComponent),
/* harmony export */   "NzTableSortersComponent": () => (/* binding */ NzTableSortersComponent),
/* harmony export */   "NzTableStyleService": () => (/* binding */ NzTableStyleService),
/* harmony export */   "NzTableTitleFooterComponent": () => (/* binding */ NzTableTitleFooterComponent),
/* harmony export */   "NzTableVirtualScrollDirective": () => (/* binding */ NzTableVirtualScrollDirective),
/* harmony export */   "NzTbodyComponent": () => (/* binding */ NzTbodyComponent),
/* harmony export */   "NzTdAddOnComponent": () => (/* binding */ NzTdAddOnComponent),
/* harmony export */   "NzThAddOnComponent": () => (/* binding */ NzThAddOnComponent),
/* harmony export */   "NzThMeasureDirective": () => (/* binding */ NzThMeasureDirective),
/* harmony export */   "NzThSelectionComponent": () => (/* binding */ NzThSelectionComponent),
/* harmony export */   "NzTheadComponent": () => (/* binding */ NzTheadComponent),
/* harmony export */   "NzTrDirective": () => (/* binding */ NzTrDirective),
/* harmony export */   "NzTrExpandDirective": () => (/* binding */ NzTrExpandDirective),
/* harmony export */   "NzTrMeasureComponent": () => (/* binding */ NzTrMeasureComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 5938);
/* harmony import */ var ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/cdk/resize-observer */ 5868);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 3903);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 3992);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/empty */ 4555);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ 8028);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 2800);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ 1273);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/spin */ 3458);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 2719);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 4805);














































const _c0 = ["*"];

function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {}

function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r7.check(f_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r4.checked);
  }
}

function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r11.check(f_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", f_r4.checked);
  }
}

function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const f_r4 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.check(f_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", f_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.filterMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.filterMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.text);
  }
}

function NzTableFilterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-filter-trigger", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.onVisibleChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.reset();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r20.confirm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.filterReset, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.locale.filterConfirm);
  }
}

function NzTableSelectionComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r2.onCheckedChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
  }
}

function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const selection_r6 = restoredCtx.$implicit;
      return selection_r6.onSelect();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const selection_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selection_r6.text, " ");
  }
}

function NzTableSelectionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSelections);
  }
}

function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {}

function NzTableSortersComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.sortOrder === "ascend");
  }
}

function NzTableSortersComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.sortOrder === "descend");
  }
}

const _c1 = ["nzChecked", ""];

function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-row-indent", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r2.onExpandChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indentSize", ctx_r0.nzIndentSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
  }
}

function NzTdAddOnComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.onCheckedChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
  }
}

const _c2 = ["nzColumnKey", ""];

function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onFilterValueChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
  }
}

function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) {}

function NzThAddOnComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
  }
}

function NzThAddOnComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
  }
}

function NzThAddOnComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-table-sorters", 7);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
  }
}

function NzThAddOnComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}

const _c3 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
const _c4 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
const _c5 = ["nzSelections", ""];
const _c6 = ["nz-table-content", ""];

function NzTableContentComponent_col_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "col");
  }

  if (rf & 2) {
    const width_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", width_r3)("min-width", width_r3);
  }
}

function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) {}

function NzTableContentComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.theadTemplate);
  }
}

function NzTableContentComponent_ng_template_2_Template(rf, ctx) {}

const _c7 = ["tdElement"];
const _c8 = ["nz-table-fixed-row", ""];

function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) {}

function NzTableFixedRowComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.hostWidth$), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}

function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c9 = ["nz-table-measure-row", ""];

function NzTrMeasureComponent_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 1, 2);
  }
}

function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r4.onListOfAutoWidthChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const listOfMeasureColumn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listOfMeasureColumn", listOfMeasureColumn_r2);
  }
}

function NzTbodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const listOfMeasureColumn_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
  }
}

function NzTbodyComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.noResult$));
  }
}

const _c10 = ["tableHeaderElement"];
const _c11 = ["tableBodyElement"];

function NzTableInnerScrollComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.bodyStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollX", ctx_r3.scrollX)("listOfColWidth", ctx_r3.listOfColWidth)("contentTemplate", ctx_r3.contentTemplate);
  }
}

function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template(rf, ctx) {}

const _c12 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};

function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.virtualTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c12, item_r8, i_r9));
  }
}

function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template, 2, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r4.data.length ? ctx_r4.scrollY : ctx_r4.noDateVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx_r4.virtualItemSize)("maxBufferPx", ctx_r4.virtualMaxBufferPx)("minBufferPx", ctx_r4.virtualMinBufferPx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollX", ctx_r4.scrollX)("listOfColWidth", ctx_r4.listOfColWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r4.data)("cdkVirtualForTrackBy", ctx_r4.virtualForTrackBy);
  }
}

function NzTableInnerScrollComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_div_4_Template, 3, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template, 5, 9, "cdk-virtual-scroll-viewport", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.headerStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.virtualTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.virtualTemplate);
  }
}

function NzTableInnerScrollComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.bodyStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
  }
}

function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}

function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.footer);
  }
}

function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) {}

function NzTableComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
  }
}

function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-table-title-footer", 11);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.nzTitle);
  }
}

function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-table-inner-scroll", 12);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
  }
}

function NzTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-table-inner-default", 13);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
  }
}

function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-table-title-footer", 14);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer", ctx_r6.nzFooter);
  }
}

function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) {}

function NzTableComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
  }
}

function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.onPageSizeChange($event);
    })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r17.onPageIndexChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r14.showPagination)("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzPaginationType === "small" ? "small" : ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
  }
}

function NzTableComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 12, "nz-pagination", 15);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
  }
}

function NzTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c13 = ["contentTemplate"];

function NzTheadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

function NzTheadComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}

const NZ_CONFIG_MODULE_NAME$1 = 'filterTrigger';

class NzFilterTriggerComponent {
  constructor(nzConfigService, ngZone, cdr, destroy$) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    this.nzActive = false;
    this.nzVisible = false;
    this.nzBackdrop = false;
    this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onVisibleChange(visible) {
    this.nzVisible = visible;
    this.nzVisibleChange.next(visible);
  }

  hide() {
    this.nzVisible = false;
    this.cdr.markForCheck();
  }

  show() {
    this.nzVisible = true;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.nzDropdown.nativeElement, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
        event.stopPropagation();
      });
    });
  }

}

NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) {
  return new (t || NzFilterTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzDestroyService));
};

NzFilterTriggerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzFilterTriggerComponent,
  selectors: [["nz-filter-trigger"]],
  viewQuery: function NzFilterTriggerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzDropdown = _t.first);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzDropdownMenu: "nzDropdownMenu",
    nzVisible: "nzVisible",
    nzBackdrop: "nzBackdrop"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzFilterTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzDestroyService])],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 8,
  consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange"]],
  template: function NzFilterTriggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
        return ctx.onVisibleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBackdrop", ctx.nzBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
    }
  },
  directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzFilterTriggerComponent.prototype, "nzBackdrop", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzFilterTriggerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-filter-trigger',
      exportAs: `nzFilterTrigger`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzBackdrop]="nzBackdrop"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
      providers: [ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzDestroyService]
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzDestroyService
    }];
  }, {
    nzActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVisibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, {
        static: true,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableFilterComponent {
  constructor(cdr, i18n) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.contentTemplate = null;
    this.customFilter = false;
    this.extraTemplate = null;
    this.filterMultiple = true;
    this.listOfFilter = [];
    this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isChecked = false;
    this.isVisible = false;
    this.listOfParsedFilter = [];
    this.listOfChecked = [];
  }

  trackByValue(_, item) {
    return item.value;
  }

  check(filter) {
    if (this.filterMultiple) {
      this.listOfParsedFilter = this.listOfParsedFilter.map(item => {
        if (item === filter) {
          return Object.assign(Object.assign({}, item), {
            checked: !filter.checked
          });
        } else {
          return item;
        }
      });
      filter.checked = !filter.checked;
    } else {
      this.listOfParsedFilter = this.listOfParsedFilter.map(item => Object.assign(Object.assign({}, item), {
        checked: item === filter
      }));
    }

    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
  }

  confirm() {
    this.isVisible = false;
    this.emitFilterData();
  }

  reset() {
    this.isVisible = false;
    this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    this.emitFilterData();
  }

  onVisibleChange(value) {
    this.isVisible = value;

    if (!value) {
      this.emitFilterData();
    } else {
      this.listOfChecked = this.listOfParsedFilter.filter(item => item.checked).map(item => item.value);
    }
  }

  emitFilterData() {
    const listOfChecked = this.listOfParsedFilter.filter(item => item.checked).map(item => item.value);

    if (!(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.arraysEqual)(this.listOfChecked, listOfChecked)) {
      if (this.filterMultiple) {
        this.filterChange.emit(listOfChecked);
      } else {
        this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
      }
    }
  }

  parseListOfFilter(listOfFilter, reset) {
    return listOfFilter.map(item => {
      const checked = reset ? false : !!item.byDefault;
      return {
        text: item.text,
        value: item.value,
        checked
      };
    });
  }

  getCheckedStatus(listOfParsedFilter) {
    return listOfParsedFilter.some(item => item.checked);
  }

  ngOnInit() {
    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Table');
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes) {
    const {
      listOfFilter
    } = changes;

    if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
      this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
      this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) {
  return new (t || NzTableFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.NzI18nService));
};

NzTableFilterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableFilterComponent,
  selectors: [["nz-table-filter"]],
  hostAttrs: [1, "ant-table-filter-column"],
  inputs: {
    contentTemplate: "contentTemplate",
    customFilter: "customFilter",
    extraTemplate: "extraTemplate",
    filterMultiple: "filterMultiple",
    listOfFilter: "listOfFilter"
  },
  outputs: {
    filterChange: "filterChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 3,
  consts: [[1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]],
  template: function NzTableFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuItemDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableFilterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-filter',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    <ng-container *ngIf="!customFilter; else extraTemplate">
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <i nz-icon nzType="filter" nzTheme="fill"></i>
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            <li
              nz-menu-item
              [nzSelected]="f.checked"
              *ngFor="let f of listOfParsedFilter; trackBy: trackByValue"
              (click)="check(f)"
            >
              <label nz-radio *ngIf="!filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <label nz-checkbox *ngIf="filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <span>{{ f.text }}</span>
            </li>
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">
              {{ locale.filterReset }}
            </button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    </ng-container>
  `,
      host: {
        class: 'ant-table-filter-column'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.NzI18nService
    }];
  }, {
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    extraTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMultiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzRowExpandButtonDirective {
  constructor() {
    this.expand = false;
    this.spaceMode = false;
    this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onHostClick() {
    if (!this.spaceMode) {
      this.expand = !this.expand;
      this.expandChange.next(this.expand);
    }
  }

}

NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) {
  return new (t || NzRowExpandButtonDirective)();
};

NzRowExpandButtonDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzRowExpandButtonDirective,
  selectors: [["button", "nz-row-expand-button", ""]],
  hostAttrs: [1, "ant-table-row-expand-icon"],
  hostVars: 7,
  hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
        return ctx.onHostClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
    }
  },
  inputs: {
    expand: "expand",
    spaceMode: "spaceMode"
  },
  outputs: {
    expandChange: "expandChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRowExpandButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[nz-row-expand-button]',
      host: {
        class: 'ant-table-row-expand-icon',
        '[type]': `'button'`,
        '[class.ant-table-row-expand-icon-expanded]': `!spaceMode && expand === true`,
        '[class.ant-table-row-expand-icon-collapsed]': `!spaceMode && expand === false`,
        '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
        '(click)': 'onHostClick()'
      }
    }]
  }], function () {
    return [];
  }, {
    expand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    spaceMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzRowIndentDirective {
  constructor() {
    this.indentSize = 0;
  }

}

NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) {
  return new (t || NzRowIndentDirective)();
};

NzRowIndentDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzRowIndentDirective,
  selectors: [["nz-row-indent"]],
  hostAttrs: [1, "ant-table-row-indent"],
  hostVars: 2,
  hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx.indentSize, "px");
    }
  },
  inputs: {
    indentSize: "indentSize"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRowIndentDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-row-indent',
      host: {
        class: 'ant-table-row-indent',
        '[style.padding-left.px]': 'indentSize'
      }
    }]
  }], function () {
    return [];
  }, {
    indentSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableSelectionComponent {
  constructor() {
    this.listOfSelections = [];
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.showCheckbox = false;
    this.showRowSelection = false;
    this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onCheckedChange(checked) {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }

}

NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) {
  return new (t || NzTableSelectionComponent)();
};

NzTableSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableSelectionComponent,
  selectors: [["nz-table-selection"]],
  hostAttrs: [1, "ant-table-selection"],
  inputs: {
    listOfSelections: "listOfSelections",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate",
    showCheckbox: "showCheckbox",
    showRowSelection: "showRowSelection"
  },
  outputs: {
    checkedChange: "checkedChange"
  },
  decls: 2,
  vars: 2,
  consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]],
  template: function NzTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRowSelection);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuItemDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-selection',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <label
      *ngIf="showCheckbox"
      nz-checkbox
      [class.ant-table-selection-select-all-custom]="showRowSelection"
      [ngModel]="checked"
      [nzDisabled]="disabled"
      [nzIndeterminate]="indeterminate"
      (ngModelChange)="onCheckedChange($event)"
    ></label>
    <div class="ant-table-selection-extra" *ngIf="showRowSelection">
      <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
        <i nz-icon nzType="down"></i>
      </span>
      <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
        <ul nz-menu class="ant-table-selection-menu">
          <li nz-menu-item *ngFor="let selection of listOfSelections" (click)="selection.onSelect()">
            {{ selection.text }}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  `,
      host: {
        class: 'ant-table-selection'
      }
    }]
  }], function () {
    return [];
  }, {
    listOfSelections: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showRowSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableSortersComponent {
  constructor() {
    this.sortDirections = ['ascend', 'descend', null];
    this.sortOrder = null;
    this.contentTemplate = null;
    this.isUp = false;
    this.isDown = false;
  }

  ngOnChanges(changes) {
    const {
      sortDirections
    } = changes;

    if (sortDirections) {
      this.isUp = this.sortDirections.indexOf('ascend') !== -1;
      this.isDown = this.sortDirections.indexOf('descend') !== -1;
    }
  }

}

NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) {
  return new (t || NzTableSortersComponent)();
};

NzTableSortersComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableSortersComponent,
  selectors: [["nz-table-sorters"]],
  hostAttrs: [1, "ant-table-column-sorters"],
  inputs: {
    sortDirections: "sortDirections",
    sortOrder: "sortOrder",
    contentTemplate: "contentTemplate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 5,
  consts: [[1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
  template: function NzTableSortersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUp);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDown);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableSortersComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-sorters',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title"><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        <i
          nz-icon
          nzType="caret-up"
          *ngIf="isUp"
          class="ant-table-column-sorter-up"
          [class.active]="sortOrder === 'ascend'"
        ></i>
        <i
          nz-icon
          nzType="caret-down"
          *ngIf="isDown"
          class="ant-table-column-sorter-down"
          [class.active]="sortOrder === 'descend'"
        ></i>
      </span>
    </span>
  `,
      host: {
        class: 'ant-table-column-sorters'
      }
    }]
  }], function () {
    return [];
  }, {
    sortDirections: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCellFixedDirective {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzRight = false;
    this.nzLeft = false;
    this.colspan = null;
    this.colSpan = null;
    this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isAutoLeft = false;
    this.isAutoRight = false;
    this.isFixedLeft = false;
    this.isFixedRight = false;
    this.isFixed = false;
  }

  setAutoLeftWidth(autoLeft) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
  }

  setAutoRightWidth(autoRight) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
  }

  setIsFirstRight(isFirstRight) {
    this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
  }

  setIsLastLeft(isLastLeft) {
    this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
  }

  setFixClass(flag, className) {
    // the setFixClass function may call many times, so remove it first.
    this.renderer.removeClass(this.elementRef.nativeElement, className);

    if (flag) {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    }
  }

  ngOnChanges() {
    this.setIsFirstRight(false);
    this.setIsLastLeft(false);
    this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
    this.isAutoRight = this.nzRight === '' || this.nzRight === true;
    this.isFixedLeft = this.nzLeft !== false;
    this.isFixedRight = this.nzRight !== false;
    this.isFixed = this.isFixedLeft || this.isFixedRight;

    const validatePx = value => {
      if (typeof value === 'string' && value !== '') {
        return value;
      } else {
        return null;
      }
    };

    this.setAutoLeftWidth(validatePx(this.nzLeft));
    this.setAutoRightWidth(validatePx(this.nzRight));
    this.changes$.next();
  }

}

NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) {
  return new (t || NzCellFixedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzCellFixedDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCellFixedDirective,
  selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
  hostVars: 6,
  hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("position", ctx.isFixed ? "sticky" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
    }
  },
  inputs: {
    nzRight: "nzRight",
    nzLeft: "nzLeft",
    colspan: "colspan",
    colSpan: "colSpan"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCellFixedDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
      host: {
        '[class.ant-table-cell-fix-right]': `isFixedRight`,
        '[class.ant-table-cell-fix-left]': `isFixedLeft`,
        '[style.position]': `isFixed? 'sticky' : null`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    nzRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colspan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colSpan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableStyleService {
  constructor() {
    this.theadTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.hasFixLeft$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.hasFixRight$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.listOfThWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject([]);
    this.tableWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject([]);
    this.manualWidthConfigPx$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([widthConfig, listOfWidth]) => widthConfig.length ? widthConfig : listOfWidth));
    this.listOfAutoWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.listOfListOfThWidthPx$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(
    /** init with manual width **/
    this.manualWidthConfigPx$, (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([autoWidth, manualWidth]) => {
      /** use autoWidth until column length match **/
      if (autoWidth.length === manualWidth.length) {
        return autoWidth.map((width, index) => {
          if (width === '0px') {
            return manualWidth[index] || null;
          } else {
            return manualWidth[index] || width;
          }
        });
      } else {
        return manualWidth;
      }
    })));
    this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => list.map(width => parseInt(width, 10))));
    this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
  }

  setTheadTemplate(template) {
    this.theadTemplate$.next(template);
  }

  setHasFixLeft(hasFixLeft) {
    this.hasFixLeft$.next(hasFixLeft);
  }

  setHasFixRight(hasFixRight) {
    this.hasFixRight$.next(hasFixRight);
  }

  setTableWidthConfig(widthConfig) {
    this.tableWidthConfigPx$.next(widthConfig);
  }

  setListOfTh(listOfTh) {
    let columnCount = 0;
    listOfTh.forEach(th => {
      columnCount += th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
    });
    const listOfThPx = listOfTh.map(item => item.nzWidth);
    this.columnCount$.next(columnCount);
    this.listOfThWidthConfigPx$.next(listOfThPx);
  }

  setListOfMeasureColumn(listOfTh) {
    const listOfKeys = [];
    listOfTh.forEach(th => {
      const length = th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;

      for (let i = 0; i < length; i++) {
        listOfKeys.push(`measure_key_${i}`);
      }
    });
    this.listOfMeasureColumn$.next(listOfKeys);
  }

  setListOfAutoWidth(listOfAutoWidth) {
    this.listOfAutoWidthPx$.next(listOfAutoWidth.map(width => `${width}px`));
  }

  setShowEmpty(showEmpty) {
    this.showEmpty$.next(showEmpty);
  }

  setNoResult(noResult) {
    this.noResult$.next(noResult);
  }

  setScroll(scrollX, scrollY) {
    const enableAutoMeasure = !!(scrollX || scrollY);

    if (!enableAutoMeasure) {
      this.setListOfAutoWidth([]);
    }

    this.enableAutoMeasure$.next(enableAutoMeasure);
  }

}

NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) {
  return new (t || NzTableStyleService)();
};

NzTableStyleService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NzTableStyleService,
  factory: NzTableStyleService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableStyleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableCellDirective {
  constructor(nzTableStyleService) {
    this.isInsideTable = false;
    this.isInsideTable = !!nzTableStyleService;
  }

}

NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) {
  return new (t || NzTableCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService, 8));
};

NzTableCellDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTableCellDirective,
  selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]],
  hostVars: 2,
  hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-cell", ctx.isInsideTable);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableCellDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])',
      host: {
        '[class.ant-table-cell]': 'isInsideTable'
      }
    }]
  }], function () {
    return [{
      type: NzTableStyleService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

class NzTdAddOnComponent {
  constructor() {
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzIndentSize = 0;
    this.nzShowExpand = false;
    this.nzShowCheckbox = false;
    this.nzExpand = false;
    this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }

  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }

  onExpandChange(expand) {
    this.nzExpand = expand;
    this.nzExpandChange.emit(expand);
  }

  ngOnChanges(changes) {
    const isFirstChange = value => value && value.firstChange && value.currentValue !== undefined;

    const {
      nzExpand,
      nzChecked,
      nzShowExpand,
      nzShowCheckbox
    } = changes;

    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }

    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }

    if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
      this.nzShowExpand = true;
    }

    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }

}

NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) {
  return new (t || NzTdAddOnComponent)();
};

NzTdAddOnComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTdAddOnComponent,
  selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
  hostVars: 4,
  hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
    }
  },
  inputs: {
    nzChecked: "nzChecked",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzIndentSize: "nzIndentSize",
    nzShowExpand: "nzShowExpand",
    nzShowCheckbox: "nzShowCheckbox",
    nzExpand: "nzExpand"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange",
    nzExpandChange: "nzExpandChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c1,
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]],
  template: function NzTdAddOnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowCheckbox);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, NzRowIndentDirective, NzRowExpandButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTdAddOnComponent.prototype, "nzExpand", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTdAddOnComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-container *ngIf="nzShowExpand || nzIndentSize > 0">
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      <button
        nz-row-expand-button
        [expand]="nzExpand"
        (expandChange)="onExpandChange($event)"
        [spaceMode]="!nzShowExpand"
      ></button>
    </ng-container>
    <label
      nz-checkbox
      *ngIf="nzShowCheckbox"
      [nzDisabled]="nzDisabled"
      [ngModel]="nzChecked"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="onCheckedChange($event)"
    ></label>
    <ng-content></ng-content>
  `,
      host: {
        '[class.ant-table-cell-with-append]': `nzShowExpand || nzIndentSize > 0`,
        '[class.ant-table-selection-column]': `nzShowCheckbox`
      }
    }]
  }], null, {
    nzChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzIndeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzIndentSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCheckedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzExpandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NzThAddOnComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.manualClickOrder$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.calcOperatorChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.nzFilterValue = null;
    this.sortOrder = null;
    this.sortDirections = ['ascend', 'descend', null];
    this.sortOrderChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isNzShowSortChanged = false;
    this.isNzShowFilterChanged = false;
    this.nzFilterMultiple = true;
    this.nzSortOrder = null;
    this.nzSortPriority = false;
    this.nzSortDirections = ['ascend', 'descend', null];
    this.nzFilters = [];
    this.nzSortFn = null;
    this.nzFilterFn = null;
    this.nzShowSort = false;
    this.nzShowFilter = false;
    this.nzCustomFilter = false;
    this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  getNextSortDirection(sortDirections, current) {
    const index = sortDirections.indexOf(current);

    if (index === sortDirections.length - 1) {
      return sortDirections[0];
    } else {
      return sortDirections[index + 1];
    }
  }

  emitNextSortValue() {
    if (this.nzShowSort) {
      const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
      this.setSortOrder(nextOrder);
      this.manualClickOrder$.next(this);
    }
  }

  setSortOrder(order) {
    this.sortOrderChange$.next(order);
  }

  clearSortOrder() {
    if (this.sortOrder !== null) {
      this.setSortOrder(null);
    }
  }

  onFilterValueChange(value) {
    this.nzFilterChange.emit(value);
    this.nzFilterValue = value;
    this.updateCalcOperator();
  }

  updateCalcOperator() {
    this.calcOperatorChange$.next();
  }

  ngOnInit() {
    this.sortOrderChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(order => {
      if (this.sortOrder !== order) {
        this.sortOrder = order;
        this.nzSortOrderChange.emit(order);
      }

      this.updateCalcOperator();
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes) {
    const {
      nzSortDirections,
      nzFilters,
      nzSortOrder,
      nzSortFn,
      nzFilterFn,
      nzSortPriority,
      nzFilterMultiple,
      nzShowSort,
      nzShowFilter
    } = changes;

    if (nzSortDirections) {
      if (this.nzSortDirections && this.nzSortDirections.length) {
        this.sortDirections = this.nzSortDirections;
      }
    }

    if (nzSortOrder) {
      this.sortOrder = this.nzSortOrder;
      this.setSortOrder(this.nzSortOrder);
    }

    if (nzShowSort) {
      this.isNzShowSortChanged = true;
    }

    if (nzShowFilter) {
      this.isNzShowFilterChanged = true;
    }

    const isFirstChange = value => value && value.firstChange && value.currentValue !== undefined;

    if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
      this.nzShowSort = true;
    }

    if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
      this.nzShowFilter = true;
    }

    if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
      const listOfValue = this.nzFilters.filter(item => item.byDefault).map(item => item.value);
      this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
    }

    if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
      this.updateCalcOperator();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) {
  return new (t || NzThAddOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NzThAddOnComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzThAddOnComponent,
  selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
  hostVars: 4,
  hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzThAddOnComponent_click_HostBindingHandler() {
        return ctx.emitNextSortValue();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
    }
  },
  inputs: {
    nzColumnKey: "nzColumnKey",
    nzFilterMultiple: "nzFilterMultiple",
    nzSortOrder: "nzSortOrder",
    nzSortPriority: "nzSortPriority",
    nzSortDirections: "nzSortDirections",
    nzFilters: "nzFilters",
    nzSortFn: "nzSortFn",
    nzFilterFn: "nzFilterFn",
    nzShowSort: "nzShowSort",
    nzShowFilter: "nzShowFilter",
    nzCustomFilter: "nzCustomFilter"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange",
    nzSortOrderChange: "nzSortOrderChange",
    nzFilterChange: "nzFilterChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c2,
  ngContentSelectors: _c4,
  decls: 9,
  vars: 2,
  consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
  template: function NzThAddOnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, NzTableFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, NzTableSortersComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzThAddOnComponent.prototype, "nzShowSort", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzThAddOnComponent.prototype, "nzShowFilter", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzThAddOnComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <nz-table-filter
      *ngIf="nzShowFilter || nzCustomFilter; else notFilterTemplate"
      [contentTemplate]="notFilterTemplate"
      [extraTemplate]="extraTemplate"
      [customFilter]="nzCustomFilter"
      [filterMultiple]="nzFilterMultiple"
      [listOfFilter]="nzFilters"
      (filterChange)="onFilterValueChange($event)"
    ></nz-table-filter>
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate"></ng-template>
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]"></ng-content>
      <ng-content select="nz-filter-trigger"></ng-content>
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters
        [sortOrder]="sortOrder"
        [sortDirections]="sortDirections"
        [contentTemplate]="contentTemplate"
      ></nz-table-sorters>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        '[class.ant-table-column-has-sorters]': 'nzShowSort',
        '[class.ant-table-column-sort]': `sortOrder === 'descend' || sortOrder === 'ascend'`,
        '(click)': 'emitNextSortValue()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    nzColumnKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFilterMultiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSortPriority: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSortDirections: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFilters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSortFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFilterFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCustomFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCheckedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSortOrderChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzFilterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzThMeasureDirective {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.nzWidth = null;
    this.colspan = null;
    this.colSpan = null;
    this.rowspan = null;
    this.rowSpan = null;
  }

  ngOnChanges(changes) {
    const {
      nzWidth,
      colspan,
      rowspan,
      colSpan,
      rowSpan
    } = changes;

    if (colspan || colSpan) {
      const col = this.colspan || this.colSpan;

      if (!(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.isNil)(col)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', `${col}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
      }
    }

    if (rowspan || rowSpan) {
      const row = this.rowspan || this.rowSpan;

      if (!(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.isNil)(row)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', `${row}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
      }
    }

    if (nzWidth || colspan) {
      this.changes$.next();
    }
  }

}

NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) {
  return new (t || NzThMeasureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzThMeasureDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzThMeasureDirective,
  selectors: [["th"]],
  inputs: {
    nzWidth: "nzWidth",
    colspan: "colspan",
    colSpan: "colSpan",
    rowspan: "rowspan",
    rowSpan: "rowSpan"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzThMeasureDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'th'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    nzWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colspan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colSpan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowspan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowSpan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzThSelectionComponent {
  constructor() {
    this.nzSelections = [];
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzShowCheckbox = false;
    this.nzShowRowSelection = false;
    this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }

  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }

  ngOnChanges(changes) {
    const isFirstChange = value => value && value.firstChange && value.currentValue !== undefined;

    const {
      nzChecked,
      nzSelections,
      nzShowExpand,
      nzShowCheckbox
    } = changes;

    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }

    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }

    if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
      this.nzShowRowSelection = true;
    }

    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }

}

NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) {
  return new (t || NzThSelectionComponent)();
};

NzThSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzThSelectionComponent,
  selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
  hostAttrs: [1, "ant-table-selection-column"],
  inputs: {
    nzSelections: "nzSelections",
    nzChecked: "nzChecked",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzShowCheckbox: "nzShowCheckbox",
    nzShowRowSelection: "nzShowRowSelection"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c5,
  ngContentSelectors: _c0,
  decls: 2,
  vars: 6,
  consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]],
  template: function NzThSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table-selection", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
        return ctx.onCheckedChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
    }
  },
  directives: [NzTableSelectionComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzThSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    ></nz-table-selection>
    <ng-content></ng-content>
  `,
      host: {
        class: 'ant-table-selection-column'
      }
    }]
  }], function () {
    return [];
  }, {
    nzSelections: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzIndeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowRowSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCheckedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzCellAlignDirective {
  constructor() {
    this.nzAlign = null;
  }

}

NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) {
  return new (t || NzCellAlignDirective)();
};

NzCellAlignDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCellAlignDirective,
  selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
  hostVars: 2,
  hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.nzAlign);
    }
  },
  inputs: {
    nzAlign: "nzAlign"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCellAlignDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'th[nzAlign],td[nzAlign]',
      host: {
        '[style.text-align]': 'nzAlign'
      }
    }]
  }], null, {
    nzAlign: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzCellEllipsisDirective {
  constructor() {
    this.nzEllipsis = true;
  }

}

NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) {
  return new (t || NzCellEllipsisDirective)();
};

NzCellEllipsisDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCellEllipsisDirective,
  selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
  hostVars: 2,
  hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-cell-ellipsis", ctx.nzEllipsis);
    }
  },
  inputs: {
    nzEllipsis: "nzEllipsis"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCellEllipsisDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'th[nzEllipsis],td[nzEllipsis]',
      host: {
        '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
      }
    }]
  }], null, {
    nzEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzCellBreakWordDirective {
  constructor() {
    this.nzBreakWord = true;
  }

}

NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) {
  return new (t || NzCellBreakWordDirective)();
};

NzCellBreakWordDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzCellBreakWordDirective,
  selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
  hostVars: 2,
  hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("word-break", ctx.nzBreakWord ? "break-all" : "");
    }
  },
  inputs: {
    nzBreakWord: "nzBreakWord"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCellBreakWordDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'th[nzBreakWord],td[nzBreakWord]',
      host: {
        '[style.word-break]': `nzBreakWord ? 'break-all' : ''`
      }
    }]
  }], null, {
    nzBreakWord: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableContentComponent {
  constructor() {
    this.tableLayout = 'auto';
    this.theadTemplate = null;
    this.contentTemplate = null;
    this.listOfColWidth = [];
    this.scrollX = null;
  }

}

NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) {
  return new (t || NzTableContentComponent)();
};

NzTableContentComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableContentComponent,
  selectors: [["table", "nz-table-content", ""]],
  hostVars: 8,
  hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-fixed", ctx.scrollX);
    }
  },
  inputs: {
    tableLayout: "tableLayout",
    theadTemplate: "theadTemplate",
    contentTemplate: "contentTemplate",
    listOfColWidth: "listOfColWidth",
    scrollX: "scrollX"
  },
  attrs: _c6,
  ngContentSelectors: _c0,
  decls: 4,
  vars: 3,
  consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]],
  template: function NzTableContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColWidth);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theadTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableContentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'table[nz-table-content]',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <col [style.width]="width" [style.minWidth]="width" *ngFor="let width of listOfColWidth" />
    <thead class="ant-table-thead" *ngIf="theadTemplate">
      <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
    </thead>
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
  `,
      host: {
        '[style.table-layout]': 'tableLayout',
        '[class.ant-table-fixed]': 'scrollX',
        '[style.width]': 'scrollX',
        '[style.min-width]': `scrollX ? '100%': null`
      }
    }]
  }], null, {
    tableLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theadTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfColWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableFixedRowComponent {
  constructor(nzTableStyleService, renderer) {
    this.nzTableStyleService = nzTableStyleService;
    this.renderer = renderer;
    this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(null);
    this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }

  ngOnInit() {
    if (this.nzTableStyleService) {
      const {
        enableAutoMeasure$,
        hostWidth$
      } = this.nzTableStyleService;
      enableAutoMeasure$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.enableAutoMeasure$);
      hostWidth$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.hostWidth$);
    }
  }

  ngAfterViewInit() {
    this.nzTableStyleService.columnCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(count => {
      this.renderer.setAttribute(this.tdElement.nativeElement, 'colspan', `${count}`);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) {
  return new (t || NzTableFixedRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

NzTableFixedRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableFixedRowComponent,
  selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
  viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tdElement = _t.first);
    }
  },
  attrs: _c8,
  ngContentSelectors: _c0,
  decls: 6,
  vars: 4,
  consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]],
  template: function NzTableFixedRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableFixedRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      <div
        class="ant-table-expanded-row-fixed"
        *ngIf="enableAutoMeasure$ | async; else contentTemplate"
        style="position: sticky; left: 0px; overflow: hidden;"
        [style.width.px]="hostWidth$ | async"
      >
        <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      </div>
    </td>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
    }]
  }], function () {
    return [{
      type: NzTableStyleService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    tdElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tdElement', {
        static: true
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableInnerDefaultComponent {
  constructor() {
    this.tableLayout = 'auto';
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.contentTemplate = null;
  }

}

NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) {
  return new (t || NzTableInnerDefaultComponent)();
};

NzTableInnerDefaultComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableInnerDefaultComponent,
  selectors: [["nz-table-inner-default"]],
  hostAttrs: [1, "ant-table-container"],
  inputs: {
    tableLayout: "tableLayout",
    listOfColWidth: "listOfColWidth",
    theadTemplate: "theadTemplate",
    contentTemplate: "contentTemplate"
  },
  decls: 2,
  vars: 4,
  consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]],
  template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
    }
  },
  directives: [NzTableContentComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableInnerDefaultComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-inner-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ant-table-content">
      <table
        nz-table-content
        [contentTemplate]="contentTemplate"
        [tableLayout]="tableLayout"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
      ></table>
    </div>
  `,
      host: {
        class: 'ant-table-container'
      }
    }]
  }], function () {
    return [];
  }, {
    tableLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfColWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theadTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTrMeasureComponent {
  constructor(nzResizeObserver, ngZone) {
    this.nzResizeObserver = nzResizeObserver;
    this.ngZone = ngZone;
    this.listOfMeasureColumn = [];
    this.listOfAutoWidth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }

  trackByFunc(_, key) {
    return key;
  }

  ngAfterViewInit() {
    this.listOfTdElement.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(this.listOfTdElement)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)(list.toArray().map(item => this.nzResizeObserver.observe(item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      return Math.floor(width);
    }))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.debounceTime)(16), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(data => {
      this.ngZone.run(() => {
        this.listOfAutoWidth.next(data);
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) {
  return new (t || NzTrMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

NzTrMeasureComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTrMeasureComponent,
  selectors: [["tr", "nz-table-measure-row", ""]],
  viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfTdElement = _t);
    }
  },
  hostAttrs: [1, "ant-table-measure-now"],
  inputs: {
    listOfMeasureColumn: "listOfMeasureColumn"
  },
  outputs: {
    listOfAutoWidth: "listOfAutoWidth"
  },
  attrs: _c9,
  decls: 1,
  vars: 2,
  consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]],
  template: function NzTrMeasureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTrMeasureComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'tr[nz-table-measure-row]',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <td
      #tdElement
      class="nz-disable-td"
      style="padding: 0px; border: 0px; height: 0px;"
      *ngFor="let th of listOfMeasureColumn; trackBy: trackByFunc"
    ></td>
  `,
      host: {
        class: 'ant-table-measure-now'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    listOfMeasureColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfAutoWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    listOfTdElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['tdElement']
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTbodyComponent {
  constructor(nzTableStyleService) {
    this.nzTableStyleService = nzTableStyleService;
    this.isInsideTable = false;
    this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(undefined);
    this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject([]);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isInsideTable = !!this.nzTableStyleService;

    if (this.nzTableStyleService) {
      const {
        showEmpty$,
        noResult$,
        listOfMeasureColumn$
      } = this.nzTableStyleService;
      noResult$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.noResult$);
      listOfMeasureColumn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.listOfMeasureColumn$);
      showEmpty$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.showEmpty$);
    }
  }

  onListOfAutoWidthChange(listOfAutoWidth) {
    this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) {
  return new (t || NzTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService, 8));
};

NzTbodyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTbodyComponent,
  selectors: [["tbody"]],
  hostVars: 2,
  hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-tbody", ctx.isInsideTable);
    }
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 6,
  consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]],
  template: function NzTbodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.listOfMeasureColumn$));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.showEmpty$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, NzTrMeasureComponent, NzTableFixedRowComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_28__.NzEmbedEmptyComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTbodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'tbody',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-container *ngIf="listOfMeasureColumn$ | async as listOfMeasureColumn">
      <tr
        nz-table-measure-row
        *ngIf="isInsideTable && listOfMeasureColumn.length"
        [listOfMeasureColumn]="listOfMeasureColumn"
        (listOfAutoWidth)="onListOfAutoWidthChange($event)"
      ></tr>
    </ng-container>
    <ng-content></ng-content>
    <tr class="ant-table-placeholder" nz-table-fixed-row *ngIf="showEmpty$ | async">
      <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
    </tr>
  `,
      host: {
        '[class.ant-table-tbody]': 'isInsideTable'
      }
    }]
  }], function () {
    return [{
      type: NzTableStyleService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

class NzTableInnerScrollComponent {
  constructor(renderer, ngZone, platform, resizeService) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.platform = platform;
    this.resizeService = resizeService;
    this.data = [];
    this.scrollX = null;
    this.scrollY = null;
    this.contentTemplate = null;
    this.widthConfig = [];
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.virtualTemplate = null;
    this.virtualItemSize = 0;
    this.virtualMaxBufferPx = 200;
    this.virtualMinBufferPx = 100;

    this.virtualForTrackBy = index => index;

    this.headerStyleMap = {};
    this.bodyStyleMap = {};
    this.verticalScrollBarWidth = 0;
    this.noDateVirtualHeight = '182px';
    this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.scroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }

  setScrollPositionClassName(clear = false) {
    const {
      scrollWidth,
      scrollLeft,
      clientWidth
    } = this.tableBodyElement.nativeElement;
    const leftClassName = 'ant-table-ping-left';
    const rightClassName = 'ant-table-ping-right';

    if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.removeClass(this.tableMainElement, rightClassName);
    } else if (scrollLeft === 0) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    } else if (scrollWidth === scrollLeft + clientWidth) {
      this.renderer.removeClass(this.tableMainElement, rightClassName);
      this.renderer.addClass(this.tableMainElement, leftClassName);
    } else {
      this.renderer.addClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    }
  }

  ngOnChanges(changes) {
    const {
      scrollX,
      scrollY,
      data
    } = changes;

    if (scrollX || scrollY) {
      const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
      this.headerStyleMap = {
        overflowX: 'hidden',
        overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
      };
      this.bodyStyleMap = {
        overflowY: this.scrollY ? 'scroll' : 'hidden',
        overflowX: this.scrollX ? 'auto' : null,
        maxHeight: this.scrollY
      };
      this.scroll$.next();
    }

    if (data) {
      this.data$.next();
    }
  }

  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        const scrollEvent$ = this.scroll$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.tableBodyElement.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(true))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        const resize$ = this.resizeService.subscribe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        const data$ = this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        const setClassName$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(scrollEvent$, resize$, data$, this.scroll$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
        setClassName$.subscribe(() => this.setScrollPositionClassName());
        scrollEvent$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.filter)(() => !!this.scrollY)).subscribe(() => this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft);
      });
    }
  }

  ngOnDestroy() {
    this.setScrollPositionClassName(true);
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) {
  return new (t || NzTableInnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzResizeService));
};

NzTableInnerScrollComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableInnerScrollComponent,
  selectors: [["nz-table-inner-scroll"]],
  viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualScrollViewport, 5, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualScrollViewport);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableHeaderElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableBodyElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-table-container"],
  inputs: {
    data: "data",
    scrollX: "scrollX",
    scrollY: "scrollY",
    contentTemplate: "contentTemplate",
    widthConfig: "widthConfig",
    listOfColWidth: "listOfColWidth",
    theadTemplate: "theadTemplate",
    virtualTemplate: "virtualTemplate",
    virtualItemSize: "virtualItemSize",
    virtualMaxBufferPx: "virtualMaxBufferPx",
    virtualMinBufferPx: "virtualMinBufferPx",
    tableMainElement: "tableMainElement",
    virtualForTrackBy: "virtualForTrackBy",
    verticalScrollBarWidth: "verticalScrollBarWidth"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "ant-table-content", 3, "ngStyle", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-content", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"]],
  template: function NzTableInnerScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTableInnerScrollComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableInnerScrollComponent_div_1_Template, 3, 5, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollY);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scrollY);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, NzTableContentComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkFixedSizeVirtualScroll, NzTbodyComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableInnerScrollComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-inner-scroll',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-container *ngIf="scrollY">
      <div #tableHeaderElement [ngStyle]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
        ></table>
      </div>
      <div #tableBodyElement *ngIf="!virtualTemplate" class="ant-table-body" [ngStyle]="bodyStyleMap">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [contentTemplate]="contentTemplate"
        ></table>
      </div>
      <cdk-virtual-scroll-viewport
        #tableBodyElement
        *ngIf="virtualTemplate"
        [itemSize]="virtualItemSize"
        [maxBufferPx]="virtualMaxBufferPx"
        [minBufferPx]="virtualMinBufferPx"
        [style.height]="data.length ? scrollY : noDateVirtualHeight"
      >
        <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
          <tbody>
            <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
              <ng-template
                [ngTemplateOutlet]="virtualTemplate"
                [ngTemplateOutletContext]="{ $implicit: item, index: i }"
              ></ng-template>
            </ng-container>
          </tbody>
        </table>
      </cdk-virtual-scroll-viewport>
    </ng-container>
    <div class="ant-table-content" #tableBodyElement *ngIf="!scrollY" [ngStyle]="bodyStyleMap">
      <table
        nz-table-content
        tableLayout="fixed"
        [scrollX]="scrollX"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
        [contentTemplate]="contentTemplate"
      ></table>
    </div>
  `,
      host: {
        class: 'ant-table-container'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__.Platform
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzResizeService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    widthConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    listOfColWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theadTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualMaxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualMinBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableMainElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableHeaderElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tableHeaderElement', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    tableBodyElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tableBodyElement', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualScrollViewport, {
        read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.CdkVirtualScrollViewport
      }]
    }],
    verticalScrollBarWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableVirtualScrollDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }

}

NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) {
  return new (t || NzTableVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

NzTableVirtualScrollDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTableVirtualScrollDirective,
  selectors: [["", "nz-virtual-scroll", ""]],
  exportAs: ["nzVirtualScroll"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableVirtualScrollDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-virtual-scroll]',
      exportAs: 'nzVirtualScroll'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableDataService {
  constructor() {
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.pageIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(1);
    this.frontPagination$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(true);
    this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(10);
    this.listOfData$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject([]);
    this.pageIndexDistinct$ = this.pageIndex$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.distinctUntilChanged)());
    this.pageSizeDistinct$ = this.pageSize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.distinctUntilChanged)());
    this.listOfCalcOperator$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject([]);
    this.queryParams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.debounceTime)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([pageIndex, pageSize, listOfCalc]) => ({
      pageIndex,
      pageSize,
      sort: listOfCalc.filter(item => item.sortFn).map(item => ({
        key: item.key,
        value: item.sortOrder
      })),
      filter: listOfCalc.filter(item => item.filterFn).map(item => ({
        key: item.key,
        value: item.filterValue
      }))
    })));
    this.listOfDataAfterCalc$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.listOfData$, this.listOfCalcOperator$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([listOfData, listOfCalcOperator]) => {
      let listOfDataAfterCalc = [...listOfData];
      const listOfFilterOperator = listOfCalcOperator.filter(item => {
        const {
          filterValue,
          filterFn
        } = item;
        const isReset = filterValue === null || filterValue === undefined || Array.isArray(filterValue) && filterValue.length === 0;
        return !isReset && typeof filterFn === 'function';
      });

      for (const item of listOfFilterOperator) {
        const {
          filterFn,
          filterValue
        } = item;
        listOfDataAfterCalc = listOfDataAfterCalc.filter(data => filterFn(filterValue, data));
      }

      const listOfSortOperator = listOfCalcOperator.filter(item => item.sortOrder !== null && typeof item.sortFn === 'function').sort((a, b) => +b.sortPriority - +a.sortPriority);

      if (listOfCalcOperator.length) {
        listOfDataAfterCalc.sort((record1, record2) => {
          for (const item of listOfSortOperator) {
            const {
              sortFn,
              sortOrder
            } = item;

            if (sortFn && sortOrder) {
              const compareResult = sortFn(record1, record2, sortOrder);

              if (compareResult !== 0) {
                return sortOrder === 'ascend' ? compareResult : -compareResult;
              }
            }
          }

          return 0;
        });
      }

      return listOfDataAfterCalc;
    }));
    this.listOfFrontEndCurrentPageData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.filter)(value => {
      const [pageIndex, pageSize, listOfData] = value;
      const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
      return pageIndex <= maxPageIndex;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([pageIndex, pageSize, listOfData]) => listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)));
    this.listOfCurrentPageData$ = this.frontPagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(pagination => pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfDataAfterCalc$));
    this.total$ = this.frontPagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(pagination => pagination ? this.listOfDataAfterCalc$ : this.listOfData$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => list.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.distinctUntilChanged)());
  }

  updatePageSize(size) {
    this.pageSize$.next(size);
  }

  updateFrontPagination(pagination) {
    this.frontPagination$.next(pagination);
  }

  updatePageIndex(index) {
    this.pageIndex$.next(index);
  }

  updateListOfData(list) {
    this.listOfData$.next(list);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTableDataService.ɵfac = function NzTableDataService_Factory(t) {
  return new (t || NzTableDataService)();
};

NzTableDataService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NzTableDataService,
  factory: NzTableDataService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableDataService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableTitleFooterComponent {
  constructor() {
    this.title = null;
    this.footer = null;
  }

}

NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) {
  return new (t || NzTableTitleFooterComponent)();
};

NzTableTitleFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableTitleFooterComponent,
  selectors: [["nz-table-title-footer"]],
  hostVars: 4,
  hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
    }
  },
  inputs: {
    title: "title",
    footer: "footer"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzTableTitleFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.footer);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_35__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableTitleFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table-title-footer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
  `,
      host: {
        '[class.ant-table-title]': `title !== null`,
        '[class.ant-table-footer]': `footer !== null`
      }
    }]
  }], null, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const NZ_CONFIG_MODULE_NAME = 'table';

class NzTableComponent {
  constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
    this.elementRef = elementRef;
    this.nzResizeObserver = nzResizeObserver;
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.nzTableStyleService = nzTableStyleService;
    this.nzTableDataService = nzTableDataService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzTableLayout = 'auto';
    this.nzShowTotal = null;
    this.nzItemRender = null;
    this.nzTitle = null;
    this.nzFooter = null;
    this.nzNoResult = undefined;
    this.nzPageSizeOptions = [10, 20, 30, 40, 50];
    this.nzVirtualItemSize = 0;
    this.nzVirtualMaxBufferPx = 200;
    this.nzVirtualMinBufferPx = 100;

    this.nzVirtualForTrackBy = index => index;

    this.nzLoadingDelay = 0;
    this.nzPageIndex = 1;
    this.nzPageSize = 10;
    this.nzTotal = 0;
    this.nzWidthConfig = [];
    this.nzData = [];
    this.nzPaginationPosition = 'bottom';
    this.nzScroll = {
      x: null,
      y: null
    };
    this.nzPaginationType = 'default';
    this.nzFrontPagination = true;
    this.nzTemplateMode = false;
    this.nzShowPagination = true;
    this.nzLoading = false;
    this.nzOuterBordered = false;
    this.nzLoadingIndicator = null;
    this.nzBordered = false;
    this.nzSize = 'default';
    this.nzShowSizeChanger = false;
    this.nzHideOnSinglePage = false;
    this.nzShowQuickJumper = false;
    this.nzSimple = false;
    this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzQueryParams = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzCurrentPageDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** public data for ngFor tr */

    this.data = [];
    this.scrollX = null;
    this.scrollY = null;
    this.theadTemplate = null;
    this.listOfAutoColWidth = [];
    this.listOfManualColWidth = [];
    this.hasFixLeft = false;
    this.hasFixRight = false;
    this.showPagination = true;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.templateMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.BehaviorSubject(false);
    this.dir = 'ltr';
    this.verticalScrollBarWidth = 0;
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  onPageSizeChange(size) {
    this.nzTableDataService.updatePageSize(size);
  }

  onPageIndexChange(index) {
    this.nzTableDataService.updatePageIndex(index);
  }

  ngOnInit() {
    var _a;

    const {
      pageIndexDistinct$,
      pageSizeDistinct$,
      listOfCurrentPageData$,
      total$,
      queryParams$
    } = this.nzTableDataService;
    const {
      theadTemplate$,
      hasFixLeft$,
      hasFixRight$
    } = this.nzTableStyleService;
    this.dir = this.directionality.value;
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    queryParams$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.nzQueryParams);
    pageIndexDistinct$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(pageIndex => {
      if (pageIndex !== this.nzPageIndex) {
        this.nzPageIndex = pageIndex;
        this.nzPageIndexChange.next(pageIndex);
      }
    });
    pageSizeDistinct$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(pageSize => {
      if (pageSize !== this.nzPageSize) {
        this.nzPageSize = pageSize;
        this.nzPageSizeChange.next(pageSize);
      }
    });
    total$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.filter)(() => this.nzFrontPagination)).subscribe(total => {
      if (total !== this.nzTotal) {
        this.nzTotal = total;
        this.cdr.markForCheck();
      }
    });
    listOfCurrentPageData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(data => {
      this.data = data;
      this.nzCurrentPageDataChange.next(data);
      this.cdr.markForCheck();
    });
    theadTemplate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(theadTemplate => {
      this.theadTemplate = theadTemplate;
      this.cdr.markForCheck();
    });
    hasFixLeft$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(hasFixLeft => {
      this.hasFixLeft = hasFixLeft;
      this.cdr.markForCheck();
    });
    hasFixRight$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(hasFixRight => {
      this.hasFixRight = hasFixRight;
      this.cdr.markForCheck();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([total$, this.templateMode$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([total, templateMode]) => total === 0 && !templateMode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(empty => {
      this.nzTableStyleService.setShowEmpty(empty);
    });
    this.verticalScrollBarWidth = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.measureScrollbar)('vertical');
    this.nzTableStyleService.listOfListOfThWidthPx$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(listOfWidth => {
      this.listOfAutoColWidth = listOfWidth;
      this.cdr.markForCheck();
    });
    this.nzTableStyleService.manualWidthConfigPx$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(listOfWidth => {
      this.listOfManualColWidth = listOfWidth;
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes) {
    const {
      nzScroll,
      nzPageIndex,
      nzPageSize,
      nzFrontPagination,
      nzData,
      nzWidthConfig,
      nzNoResult,
      nzTemplateMode
    } = changes;

    if (nzPageIndex) {
      this.nzTableDataService.updatePageIndex(this.nzPageIndex);
    }

    if (nzPageSize) {
      this.nzTableDataService.updatePageSize(this.nzPageSize);
    }

    if (nzData) {
      this.nzData = this.nzData || [];
      this.nzTableDataService.updateListOfData(this.nzData);
    }

    if (nzFrontPagination) {
      this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
    }

    if (nzScroll) {
      this.setScrollOnChanges();
    }

    if (nzWidthConfig) {
      this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
    }

    if (nzTemplateMode) {
      this.templateMode$.next(this.nzTemplateMode);
    }

    if (nzNoResult) {
      this.nzTableStyleService.setNoResult(this.nzNoResult);
    }

    this.updateShowPagination();
  }

  ngAfterViewInit() {
    this.nzResizeObserver.observe(this.elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
      return Math.floor(width - scrollBarWidth);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.nzTableStyleService.hostWidth$);

    if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
      this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setScrollOnChanges() {
    this.scrollX = this.nzScroll && this.nzScroll.x || null;
    this.scrollY = this.nzScroll && this.nzScroll.y || null;
    this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
  }

  updateShowPagination() {
    this.showPagination = this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize || this.nzData.length > 0 && !this.nzHideOnSinglePage || !this.nzFrontPagination && this.nzTotal > this.nzPageSize;
  }

}

NzTableComponent.ɵfac = function NzTableComponent_Factory(t) {
  return new (t || NzTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableDataService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.Directionality, 8));
};

NzTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTableComponent,
  selectors: [["nz-table"]],
  contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTableVirtualScrollDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzVirtualScrollDirective = _t.first);
    }
  },
  viewQuery: function NzTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTableInnerScrollComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTableInnerScrollComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-table-wrapper"],
  hostVars: 2,
  hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-wrapper-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzTableLayout: "nzTableLayout",
    nzShowTotal: "nzShowTotal",
    nzItemRender: "nzItemRender",
    nzTitle: "nzTitle",
    nzFooter: "nzFooter",
    nzNoResult: "nzNoResult",
    nzPageSizeOptions: "nzPageSizeOptions",
    nzVirtualItemSize: "nzVirtualItemSize",
    nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
    nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
    nzVirtualForTrackBy: "nzVirtualForTrackBy",
    nzLoadingDelay: "nzLoadingDelay",
    nzPageIndex: "nzPageIndex",
    nzPageSize: "nzPageSize",
    nzTotal: "nzTotal",
    nzWidthConfig: "nzWidthConfig",
    nzData: "nzData",
    nzPaginationPosition: "nzPaginationPosition",
    nzScroll: "nzScroll",
    nzPaginationType: "nzPaginationType",
    nzFrontPagination: "nzFrontPagination",
    nzTemplateMode: "nzTemplateMode",
    nzShowPagination: "nzShowPagination",
    nzLoading: "nzLoading",
    nzOuterBordered: "nzOuterBordered",
    nzLoadingIndicator: "nzLoadingIndicator",
    nzBordered: "nzBordered",
    nzSize: "nzSize",
    nzShowSizeChanger: "nzShowSizeChanger",
    nzHideOnSinglePage: "nzHideOnSinglePage",
    nzShowQuickJumper: "nzShowQuickJumper",
    nzSimple: "nzSimple"
  },
  outputs: {
    nzPageSizeChange: "nzPageSizeChange",
    nzPageIndexChange: "nzPageIndexChange",
    nzQueryParams: "nzQueryParams",
    nzCurrentPageDataChange: "nzCurrentPageDataChange"
  },
  exportAs: ["nzTable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NzTableStyleService, NzTableDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 14,
  vars: 27,
  consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]],
  template: function NzTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-spin", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
    }
  },
  directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_37__.NzSpinComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__.NzPaginationComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzFrontPagination", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzTemplateMode", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzShowPagination", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzLoading", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzOuterBordered", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)()], NzTableComponent.prototype, "nzLoadingIndicator", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzBordered", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)()], NzTableComponent.prototype, "nzSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzShowSizeChanger", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzShowQuickJumper", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.InputBoolean)()], NzTableComponent.prototype, "nzSimple", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-table',
      exportAs: 'nzTable',
      providers: [NzTableStyleService, NzTableDataService],
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'top'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-rtl]="dir === 'rtl'"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.nz-table-out-bordered]="nzOuterBordered && !nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        <nz-table-title-footer [title]="nzTitle" *ngIf="nzTitle"></nz-table-title-footer>
        <nz-table-inner-scroll
          *ngIf="scrollY || scrollX; else defaultTemplate"
          [data]="data"
          [scrollX]="scrollX"
          [scrollY]="scrollY"
          [contentTemplate]="contentTemplate"
          [listOfColWidth]="listOfAutoColWidth"
          [theadTemplate]="theadTemplate"
          [verticalScrollBarWidth]="verticalScrollBarWidth"
          [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
          [virtualItemSize]="nzVirtualItemSize"
          [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [virtualMinBufferPx]="nzVirtualMinBufferPx"
          [tableMainElement]="tableMainElement"
          [virtualForTrackBy]="nzVirtualForTrackBy"
        ></nz-table-inner-scroll>
        <ng-template #defaultTemplate>
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
          ></nz-table-inner-default>
        </ng-template>
        <nz-table-title-footer [footer]="nzFooter" *ngIf="nzFooter"></nz-table-title-footer>
      </div>
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
    </nz-spin>
    <ng-template #paginationTemplate>
      <nz-pagination
        *ngIf="nzShowPagination && data.length"
        [hidden]="!showPagination"
        class="ant-table-pagination ant-table-pagination-right"
        [nzShowSizeChanger]="nzShowSizeChanger"
        [nzPageSizeOptions]="nzPageSizeOptions"
        [nzItemRender]="nzItemRender!"
        [nzShowQuickJumper]="nzShowQuickJumper"
        [nzHideOnSinglePage]="nzHideOnSinglePage"
        [nzShowTotal]="nzShowTotal"
        [nzSize]="nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'"
        [nzPageSize]="nzPageSize"
        [nzTotal]="nzTotal"
        [nzSimple]="nzSimple"
        [nzPageIndex]="nzPageIndex"
        (nzPageSizeChange)="onPageSizeChange($event)"
        (nzPageIndexChange)="onPageIndexChange($event)"
      ></nz-pagination>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        class: 'ant-table-wrapper',
        '[class.ant-table-wrapper-rtl]': 'dir === "rtl"'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserver
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: NzTableStyleService
    }, {
      type: NzTableDataService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzTableLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowTotal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzItemRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFooter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNoResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualMaxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualMinBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoadingDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTotal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzWidthConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPaginationPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPaginationType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFrontPagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTemplateMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowPagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOuterBordered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBordered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSizeChanger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHideOnSinglePage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowQuickJumper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSimple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPageSizeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzPageIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzQueryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzCurrentPageDataChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzVirtualScrollDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzTableVirtualScrollDirective, {
        static: false
      }]
    }],
    nzTableInnerScrollComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTableInnerScrollComponent]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTrDirective {
  constructor(nzTableStyleService) {
    this.nzTableStyleService = nzTableStyleService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.listOfFixedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.listOfColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.ReplaySubject(1);
    this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(...[this.listOfFixedColumns$, ...list.map(c => c.changes$)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_39__.mergeMap)(() => this.listOfFixedColumns$))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
    this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => list.filter(item => item.nzLeft !== false)));
    this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => list.filter(item => item.nzRight !== false)));
    this.listOfColumnsChanges$ = this.listOfColumns$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(...[this.listOfColumns$, ...list.map(c => c.changes$)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_39__.mergeMap)(() => this.listOfColumns$))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
    this.isInsideTable = false;
    this.isInsideTable = !!nzTableStyleService;
  }

  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      this.listOfCellFixedDirective.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(this.listOfCellFixedDirective), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.listOfFixedColumns$);
      this.listOfNzThDirective.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(this.listOfNzThDirective), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(this.listOfColumns$);
      /** set last left and first right **/

      this.listOfFixedLeftColumnChanges$.subscribe(listOfFixedLeft => {
        listOfFixedLeft.forEach(cell => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
      });
      this.listOfFixedRightColumnChanges$.subscribe(listOfFixedRight => {
        listOfFixedRight.forEach(cell => cell.setIsFirstRight(cell === listOfFixedRight[0]));
      });
      /** calculate fixed nzLeft and nzRight **/

      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(([listOfAutoWidth, listOfLeftCell]) => {
        listOfLeftCell.forEach((cell, index) => {
          if (cell.isAutoLeft) {
            const currentArray = listOfLeftCell.slice(0, index);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoLeftWidth(`${width}px`);
          }
        });
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(([listOfAutoWidth, listOfRightCell]) => {
        listOfRightCell.forEach((_, index) => {
          const cell = listOfRightCell[listOfRightCell.length - index - 1];

          if (cell.isAutoRight) {
            const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoRightWidth(`${width}px`);
          }
        });
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTrDirective.ɵfac = function NzTrDirective_Factory(t) {
  return new (t || NzTrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService, 8));
};

NzTrDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTrDirective,
  selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
  contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzThMeasureDirective, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCellFixedDirective, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzThDirective = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfCellFixedDirective = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-table-row", ctx.isInsideTable);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTrDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
      host: {
        '[class.ant-table-row]': 'isInsideTable'
      }
    }]
  }], function () {
    return [{
      type: NzTableStyleService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    listOfNzThDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzThMeasureDirective]
    }],
    listOfCellFixedDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzCellFixedDirective]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTheadComponent {
  constructor(elementRef, renderer, nzTableStyleService, nzTableDataService) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nzTableStyleService = nzTableStyleService;
    this.nzTableDataService = nzTableDataService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isInsideTable = false;
    this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isInsideTable = !!this.nzTableStyleService;
  }

  ngOnInit() {
    if (this.nzTableStyleService) {
      this.nzTableStyleService.setTheadTemplate(this.templateRef);
    }
  }

  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      const firstTableRow$ = this.listOfNzTrDirective.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(this.listOfNzTrDirective), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(item => item && item.first));
      const listOfColumnsChanges$ = firstTableRow$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(firstTableRow => firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_40__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
      listOfColumnsChanges$.subscribe(data => this.nzTableStyleService.setListOfTh(data));
      /** TODO: need reset the measure row when scrollX change **/

      this.nzTableStyleService.enableAutoMeasure$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(enable => enable ? listOfColumnsChanges$ : (0,rxjs__WEBPACK_IMPORTED_MODULE_41__.of)([]))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(data => this.nzTableStyleService.setListOfMeasureColumn(data));
      const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(firstTr => firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_40__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
      const listOfFixedRightColumnChanges$ = firstTableRow$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(firstTr => firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_40__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
      listOfFixedLeftColumnChanges$.subscribe(listOfFixedLeftColumn => {
        this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
      });
      listOfFixedRightColumnChanges$.subscribe(listOfFixedRightColumn => {
        this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
      });
    }

    if (this.nzTableDataService) {
      const listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.startWith)(this.listOfNzThAddOnComponent));
      const manualSort$ = listOfColumn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(...this.listOfNzThAddOnComponent.map(th => th.manualClickOrder$))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
      manualSort$.subscribe(data => {
        const emitValue = {
          key: data.nzColumnKey,
          value: data.sortOrder
        };
        this.nzSortOrderChange.emit(emitValue);

        if (data.nzSortFn && data.nzSortPriority === false) {
          this.listOfNzThAddOnComponent.filter(th => th !== data).forEach(th => th.clearSortOrder());
        }
      });
      const listOfCalcOperator$ = listOfColumn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(...[listOfColumn$, ...list.map(c => c.calcOperatorChange$)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_39__.mergeMap)(() => listOfColumn$))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(list => list.filter(item => !!item.nzSortFn || !!item.nzFilterFn).map(item => {
        const {
          nzSortFn,
          sortOrder,
          nzFilterFn,
          nzFilterValue,
          nzSortPriority,
          nzColumnKey
        } = item;
        return {
          key: nzColumnKey,
          sortFn: nzSortFn,
          sortPriority: nzSortPriority,
          sortOrder: sortOrder,
          filterFn: nzFilterFn,
          filterValue: nzFilterValue
        };
      })), // TODO: after checked error here
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
      listOfCalcOperator$.subscribe(list => {
        this.nzTableDataService.listOfCalcOperator$.next(list);
      });
    }
  }

  ngAfterViewInit() {
    if (this.nzTableStyleService) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) {
  return new (t || NzTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableStyleService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTableDataService, 8));
};

NzTheadComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTheadComponent,
  selectors: [["thead", 9, "ant-table-thead"]],
  contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTrDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzThAddOnComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzTrDirective = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzThAddOnComponent = _t);
    }
  },
  viewQuery: function NzTheadComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  outputs: {
    nzSortOrderChange: "nzSortOrderChange"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function NzTheadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInsideTable);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTheadComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'thead:not(.ant-table-thead)',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    <ng-container *ngIf="!isInsideTable">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </ng-container>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NzTableStyleService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: NzTableDataService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentTemplate', {
        static: true
      }]
    }],
    listOfNzTrDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzTrDirective, {
        descendants: true
      }]
    }],
    listOfNzThAddOnComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzThAddOnComponent, {
        descendants: true
      }]
    }],
    nzSortOrderChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTrExpandDirective {
  constructor() {
    this.nzExpand = true;
  }

}

NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) {
  return new (t || NzTrExpandDirective)();
};

NzTrExpandDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTrExpandDirective,
  selectors: [["tr", "nzExpand", ""]],
  hostAttrs: [1, "ant-table-expanded-row"],
  hostVars: 1,
  hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", !ctx.nzExpand);
    }
  },
  inputs: {
    nzExpand: "nzExpand"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTrExpandDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'tr[nzExpand]',
      host: {
        class: 'ant-table-expanded-row',
        '[hidden]': `!nzExpand`
      }
    }]
  }], function () {
    return [];
  }, {
    nzExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTableModule {}

NzTableModule.ɵfac = function NzTableModule_Factory(t) {
  return new (t || NzTableModule)();
};

NzTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzTableModule
});
NzTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_35__.NzOutletModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__.PlatformModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__.NzPaginationModule, ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserverModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_37__.NzSpinModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_28__.NzEmptyModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
      exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_35__.NzOutletModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__.PlatformModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_38__.NzPaginationModule, ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_27__.NzResizeObserverModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_37__.NzSpinModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_28__.NzEmptyModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9801:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tabs.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ_TAB_SET": () => (/* binding */ NZ_TAB_SET),
/* harmony export */   "NzTabChangeEvent": () => (/* binding */ NzTabChangeEvent),
/* harmony export */   "NzTabComponent": () => (/* binding */ NzTabComponent),
/* harmony export */   "NzTabDirective": () => (/* binding */ NzTabDirective),
/* harmony export */   "NzTabLinkDirective": () => (/* binding */ NzTabLinkDirective),
/* harmony export */   "NzTabLinkTemplateDirective": () => (/* binding */ NzTabLinkTemplateDirective),
/* harmony export */   "NzTabSetComponent": () => (/* binding */ NzTabSetComponent),
/* harmony export */   "NzTabsModule": () => (/* binding */ NzTabsModule),
/* harmony export */   "ɵNzTabAddButtonComponent": () => (/* binding */ NzTabAddButtonComponent),
/* harmony export */   "ɵNzTabBodyComponent": () => (/* binding */ NzTabBodyComponent),
/* harmony export */   "ɵNzTabCloseButtonComponent": () => (/* binding */ NzTabCloseButtonComponent),
/* harmony export */   "ɵNzTabNavBarComponent": () => (/* binding */ NzTabNavBarComponent),
/* harmony export */   "ɵNzTabNavItemDirective": () => (/* binding */ NzTabNavItemDirective),
/* harmony export */   "ɵNzTabNavOperationComponent": () => (/* binding */ NzTabNavOperationComponent),
/* harmony export */   "ɵNzTabScrollListDirective": () => (/* binding */ NzTabScrollListDirective),
/* harmony export */   "ɵNzTabsInkBarDirective": () => (/* binding */ NzTabsInkBarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ 787);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 998);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 3992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ 8028);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/cdk/resize-observer */ 5868);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ 7507);

































/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
  }
}

function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.tab.label, " ");
  }
}

const _c0 = function () {
  return {
    visible: false
  };
};

function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.onSelect(item_r5);
    })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.onContextmenu(item_r5, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
  }
}

function NzTabNavOperationComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
  }
}

function NzTabNavOperationComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.addClicked.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r3.addIcon);
  }
}

const _c1 = function () {
  return {
    minWidth: "46px"
  };
};

const _c2 = ["navWarp"];
const _c3 = ["navList"];

function NzTabNavBarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.addClicked.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r2.addIcon);
  }
}

function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) {}

function NzTabNavBarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraTemplate);
  }
}

const _c4 = ["*"];
const _c5 = ["nz-tab-body", ""];

function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) {}

function NzTabBodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
  }
}

function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
  }
}

const _c6 = ["contentTemplate"];

function NzTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

function NzTabComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
  }
}

const _c7 = [[["", "nz-tab-link", ""]], "*"];
const _c8 = ["[nz-tab-link]", "*"];

function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.label);
  }
}

function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.onClose(i_r4, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeIcon", tab_r3.nzCloseIcon);
  }
}

const _c9 = function () {
  return {
    visible: true
  };
};

function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const tab_r3 = restoredCtx.$implicit;
      const i_r4 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.clickNavItem(tab_r3, i_r4, $event);
    })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const tab_r3 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.contextmenuNavItem(tab_r3, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.nzDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
  }
}

function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabs-nav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r15.nzTabListScroll.emit($event);
    })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.setSelectedIndex($event);
    })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.onAdd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
  }
}

function NzTabSetComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
  }

  if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r1.nzSelectedIndex === i_r20 && !ctx_r1.nzHideAll)("content", tab_r19.content)("forceRender", tab_r19.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
  }
}

class NzTabAddButtonComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.addIcon = 'plus';
    this.element = this.elementRef.nativeElement;
  }

  getElementWidth() {
    var _a;

    return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
  }

  getElementHeight() {
    var _a;

    return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
  }

}

NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) {
  return new (t || NzTabAddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzTabAddButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabAddButtonComponent,
  selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]],
  hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"],
  inputs: {
    addIcon: "addIcon"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
  template: function NzTabAddButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.addIcon);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabAddButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tab-add-button, button[nz-tab-add-button]',
      template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
      host: {
        class: 'ant-tabs-nav-add',
        'aria-label': 'Add tab',
        type: 'button'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    addIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTabsInkBarDirective {
  constructor(elementRef, ngZone, animationMode) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.animationMode = animationMode;
    this.position = 'horizontal';
    this.animated = true;
  }

  get _animated() {
    return this.animationMode !== 'NoopAnimations' && this.animated;
  }

  alignToElement(element) {
    this.ngZone.runOutsideAngular(() => {
      (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_3__.reqAnimFrame)(() => this.setStyles(element));
    });
  }

  setStyles(element) {
    const inkBar = this.elementRef.nativeElement;

    if (this.position === 'horizontal') {
      inkBar.style.top = '';
      inkBar.style.height = '';
      inkBar.style.left = this.getLeftPosition(element);
      inkBar.style.width = this.getElementWidth(element);
    } else {
      inkBar.style.left = '';
      inkBar.style.width = '';
      inkBar.style.top = this.getTopPosition(element);
      inkBar.style.height = this.getElementHeight(element);
    }
  }

  getLeftPosition(element) {
    return element ? `${element.offsetLeft || 0}px` : '0';
  }

  getElementWidth(element) {
    return element ? `${element.offsetWidth || 0}px` : '0';
  }

  getTopPosition(element) {
    return element ? `${element.offsetTop || 0}px` : '0';
  }

  getElementHeight(element) {
    return element ? `${element.offsetHeight || 0}px` : '0';
  }

}

NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) {
  return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.ANIMATION_MODULE_TYPE, 8));
};

NzTabsInkBarDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabsInkBarDirective,
  selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]],
  hostAttrs: [1, "ant-tabs-ink-bar"],
  hostVars: 2,
  hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx._animated);
    }
  },
  inputs: {
    position: "position",
    animated: "animated"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsInkBarDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
      host: {
        class: 'ant-tabs-ink-bar',
        '[class.ant-tabs-ink-bar-animated]': '_animated'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzTabNavItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.active = false;
    this.el = elementRef.nativeElement;
    this.parentElement = this.el.parentElement;
  }

  focus() {
    this.el.focus();
  }

  get width() {
    return this.parentElement.offsetWidth;
  }

  get height() {
    return this.parentElement.offsetHeight;
  }

  get left() {
    return this.parentElement.offsetLeft;
  }

  get top() {
    return this.parentElement.offsetTop;
  }

}

NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) {
  return new (t || NzTabNavItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzTabNavItemDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabNavItemDirective,
  selectors: [["", "nzTabNavItem", ""]],
  inputs: {
    disabled: "disabled",
    tab: "tab",
    active: "active"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nzTabNavItem]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTabNavOperationComponent {
  constructor(cdr, elementRef) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.items = [];
    this.addable = false;
    this.addIcon = 'plus';
    this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeAnimationWaitTimeoutId = -1;
    this.menuOpened = false;
    this.element = this.elementRef.nativeElement;
  }

  onSelect(item) {
    if (!item.disabled) {
      // ignore nzCanDeactivate
      item.tab.nzClick.emit();
      this.selected.emit(item);
    }
  }

  onContextmenu(item, e) {
    if (!item.disabled) {
      item.tab.nzContextmenu.emit(e);
    }
  }

  showItems() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
    this.menuOpened = true;
    this.cdr.markForCheck();
  }

  menuVisChange(visible) {
    if (!visible) {
      this.closeAnimationWaitTimeoutId = setTimeout(() => {
        this.menuOpened = false;
        this.cdr.markForCheck();
      }, 150);
    }
  }

  getElementWidth() {
    var _a;

    return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
  }

  getElementHeight() {
    var _a;

    return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
  }

  ngOnDestroy() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
  }

}

NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) {
  return new (t || NzTabNavOperationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzTabNavOperationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabNavOperationComponent,
  selectors: [["nz-tab-nav-operation"]],
  hostAttrs: [1, "ant-tabs-nav-operations"],
  hostVars: 2,
  hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
    }
  },
  inputs: {
    items: "items",
    addable: "addable",
    addIcon: "addIcon"
  },
  outputs: {
    addClicked: "addClicked",
    selected: "selected"
  },
  exportAs: ["nzTabNavOperation"],
  decls: 7,
  vars: 6,
  consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "addIcon", "click"]],
  template: function NzTabNavOperationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) {
        return ctx.menuVisChange($event);
      })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() {
        return ctx.showItems();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1)("nzOverlayStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("nzMatchWidthElement", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addable);
    }
  },
  directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuItemDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzStringTemplateOutletDirective, NzTabAddButtonComponent],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavOperationComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tab-nav-operation',
      exportAs: 'nzTabNavOperation',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">
            {{ item.tab.label }}
          </ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
      host: {
        class: 'ant-tabs-nav-operations',
        '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

class NzTabScrollListDirective {
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.lastWheelDirection = null;
    this.lastWheelTimestamp = 0;
    this.lastTimestamp = 0;
    this.lastTimeDiff = 0;
    this.lastMixedWheel = 0;
    this.lastWheelPrevent = false;
    this.touchPosition = null;
    this.lastOffset = null;
    this.motion = -1;

    this.unsubscribe = () => void 0;

    this.offsetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.onTouchEnd = e => {
      if (!this.touchPosition) {
        return;
      }

      const lastOffset = this.lastOffset;
      const lastTimeDiff = this.lastTimeDiff;
      this.lastOffset = this.touchPosition = null;

      if (lastOffset) {
        const distanceX = lastOffset.x / lastTimeDiff;
        const distanceY = lastOffset.y / lastTimeDiff;
        const absX = Math.abs(distanceX);
        const absY = Math.abs(distanceY); // Skip swipe if low distance

        if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
          return;
        }

        let currentX = distanceX;
        let currentY = distanceY;
        this.motion = window.setInterval(() => {
          if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
            window.clearInterval(this.motion);
            return;
          }

          currentX *= SPEED_OFF_MULTIPLE;
          currentY *= SPEED_OFF_MULTIPLE;
          this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
        }, REFRESH_INTERVAL);
      }
    };

    this.onTouchMove = e => {
      if (!this.touchPosition) {
        return;
      }

      e.preventDefault();
      const {
        screenX,
        screenY
      } = e.touches[0];
      const offsetX = screenX - this.touchPosition.x;
      const offsetY = screenY - this.touchPosition.y;
      this.onOffset(offsetX, offsetY, e);
      const now = Date.now();
      this.lastTimeDiff = now - this.lastTimestamp;
      this.lastTimestamp = now;
      this.lastOffset = {
        x: offsetX,
        y: offsetY
      };
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
    };

    this.onTouchStart = e => {
      const {
        screenX,
        screenY
      } = e.touches[0];
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
      window.clearInterval(this.motion);
    };

    this.onWheel = e => {
      const {
        deltaX,
        deltaY
      } = e;
      let mixed;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX === absY) {
        mixed = this.lastWheelDirection === 'x' ? deltaX : deltaY;
      } else if (absX > absY) {
        mixed = deltaX;
        this.lastWheelDirection = 'x';
      } else {
        mixed = deltaY;
        this.lastWheelDirection = 'y';
      } // Optimize mac touch scroll


      const now = Date.now();
      const absMixed = Math.abs(mixed);

      if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
        this.lastWheelPrevent = false;
      }

      this.onOffset(-mixed, -mixed, e);

      if (e.defaultPrevented || this.lastWheelPrevent) {
        this.lastWheelPrevent = true;
      }

      this.lastWheelTimestamp = now;
      this.lastMixedWheel = absMixed;
    };
  }

  ngOnInit() {
    this.unsubscribe = this.ngZone.runOutsideAngular(() => {
      const el = this.elementRef.nativeElement;
      const wheel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(el, 'wheel');
      const touchstart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(el, 'touchstart');
      const touchmove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(el, 'touchmove');
      const touchend$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(el, 'touchend');
      const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
      subscription.add(this.subscribeWrap('wheel', wheel$, this.onWheel));
      subscription.add(this.subscribeWrap('touchstart', touchstart$, this.onTouchStart));
      subscription.add(this.subscribeWrap('touchmove', touchmove$, this.onTouchMove));
      subscription.add(this.subscribeWrap('touchend', touchend$, this.onTouchEnd));
      return () => {
        subscription.unsubscribe();
      };
    });
  }

  subscribeWrap(type, observable, handler) {
    return observable.subscribe(event => {
      this.tabScroll.emit({
        type,
        event
      });

      if (!event.defaultPrevented) {
        handler(event);
      }
    });
  }

  onOffset(x, y, event) {
    this.ngZone.run(() => {
      this.offsetChange.emit({
        x,
        y,
        event
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}

NzTabScrollListDirective.ɵfac = function NzTabScrollListDirective_Factory(t) {
  return new (t || NzTabScrollListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NzTabScrollListDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabScrollListDirective,
  selectors: [["", "nzTabScrollList", ""]],
  outputs: {
    offsetChange: "offsetChange",
    tabScroll: "tabScroll"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabScrollListDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nzTabScrollList]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    offsetChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tabScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_10__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_11__.asapScheduler;
const CSS_TRANSFORM_TIME = 150;

class NzTabNavBarComponent {
  constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.viewportRuler = viewportRuler;
    this.nzResizeObserver = nzResizeObserver;
    this.dir = dir;
    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.position = 'horizontal';
    this.addable = false;
    this.hideBar = false;
    this.addIcon = 'plus';
    this.inkBarAnimated = true;
    this.translate = null;
    this.transformX = 0;
    this.transformY = 0;
    this.pingLeft = false;
    this.pingRight = false;
    this.pingTop = false;
    this.pingBottom = false;
    this.hiddenItems = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this._selectedIndex = 0;
    this.wrapperWidth = 0;
    this.wrapperHeight = 0;
    this.scrollListWidth = 0;
    this.scrollListHeight = 0;
    this.operationWidth = 0;
    this.operationHeight = 0;
    this.addButtonWidth = 0;
    this.addButtonHeight = 0;
    this.selectedIndexChanged = false;
    this.lockAnimationTimeoutId = -1;
    this.cssTransformTimeWaitingId = -1;
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceNumberProperty)(value);

    if (this._selectedIndex !== newValue) {
      this._selectedIndex = value;
      this.selectedIndexChanged = true;

      if (this.keyManager) {
        this.keyManager.updateActiveItem(value);
      }
    }
  }
  /** Tracks which element has focus; used for keyboard navigation */


  get focusIndex() {
    return this.keyManager ? this.keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */


  set focusIndex(value) {
    if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
      return;
    }

    this.keyManager.setActiveItem(value);
  }

  get showAddButton() {
    return this.hiddenItems.length === 0 && this.addable;
  }

  ngAfterViewInit() {
    const dirChange = this.dir ? this.dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(null);
    const resize = this.viewportRuler.change(150);

    const realign = () => {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
    };

    this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.FocusKeyManager(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap();
    this.keyManager.updateActiveItem(this.selectedIndex);
    (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_3__.reqAnimFrame)(realign);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.auditTime)(16, RESIZE_SCHEDULER)).subscribe(() => {
      realign();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(dirChange, resize, this.items.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(() => {
      Promise.resolve().then(realign);
      this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
    });
    this.keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(newFocusIndex => {
      this.indexFocused.emit(newFocusIndex);
      this.setTabFocus(newFocusIndex);
      this.scrollToTab(this.keyManager.activeItem);
    });
  }

  ngAfterContentChecked() {
    if (this.selectedIndexChanged) {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.lockAnimationTimeoutId);
    clearTimeout(this.cssTransformTimeWaitingId);
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectedFromMenu(tab) {
    const tabIndex = this.items.toArray().findIndex(e => e === tab);

    if (tabIndex !== -1) {
      this.keyManager.updateActiveItem(tabIndex);

      if (this.focusIndex !== this.selectedIndex) {
        this.selectFocusedIndex.emit(this.focusIndex);
        this.scrollToTab(tab);
      }
    }
  }

  onOffsetChange(e) {
    if (this.position === 'horizontal') {
      if (this.lockAnimationTimeoutId === -1) {
        if (this.transformX >= 0 && e.x > 0) {
          return;
        }

        if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
          return;
        }
      }

      e.event.preventDefault();
      this.transformX = this.clampTransformX(this.transformX + e.x);
      this.setTransform(this.transformX, 0);
    } else {
      if (this.lockAnimationTimeoutId === -1) {
        if (this.transformY >= 0 && e.y > 0) {
          return;
        }

        if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
          return;
        }
      }

      e.event.preventDefault();
      this.transformY = this.clampTransformY(this.transformY + e.y);
      this.setTransform(0, this.transformY);
    }

    this.lockAnimation();
    this.setVisibleRange();
    this.setPingStatus();
  }

  handleKeydown(event) {
    const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);

    if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.hasModifierKey)(event) || !inNavigationList) {
      return;
    }

    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.LEFT_ARROW:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.UP_ARROW:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.RIGHT_ARROW:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.DOWN_ARROW:
        this.lockAnimation();
        this.keyManager.onKeydown(event);
        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          this.selectFocusedIndex.emit(this.focusIndex);
        }

        break;

      default:
        this.keyManager.onKeydown(event);
    }
  }

  isValidIndex(index) {
    if (!this.items) {
      return true;
    }

    const tab = this.items ? this.items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }

  scrollToTab(tab) {
    if (!this.items.find(e => e === tab)) {
      return;
    }

    const tabs = this.items.toArray();

    if (this.position === 'horizontal') {
      let newTransform = this.transformX;

      if (this.getLayoutDirection() === 'rtl') {
        const right = tabs[0].left + tabs[0].width - tab.left - tab.width;

        if (right < this.transformX) {
          newTransform = right;
        } else if (right + tab.width > this.transformX + this.wrapperWidth) {
          newTransform = right + tab.width - this.wrapperWidth;
        }
      } else if (tab.left < -this.transformX) {
        newTransform = -tab.left;
      } else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
        newTransform = -(tab.left + tab.width - this.wrapperWidth);
      }

      this.transformX = newTransform;
      this.transformY = 0;
      this.setTransform(newTransform, 0);
    } else {
      let newTransform = this.transformY;

      if (tab.top < -this.transformY) {
        newTransform = -tab.top;
      } else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
        newTransform = -(tab.top + tab.height - this.wrapperHeight);
      }

      this.transformY = newTransform;
      this.transformX = 0;
      this.setTransform(0, newTransform);
    }

    clearTimeout(this.cssTransformTimeWaitingId);
    this.cssTransformTimeWaitingId = setTimeout(() => {
      this.setVisibleRange();
    }, CSS_TRANSFORM_TIME);
  }

  lockAnimation() {
    if (this.lockAnimationTimeoutId === -1) {
      this.ngZone.runOutsideAngular(() => {
        this.navListRef.nativeElement.style.transition = 'none';
        this.lockAnimationTimeoutId = setTimeout(() => {
          this.navListRef.nativeElement.style.transition = '';
          this.lockAnimationTimeoutId = -1;
        }, CSS_TRANSFORM_TIME);
      });
    }
  }

  setTransform(x, y) {
    this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }

  clampTransformX(transform) {
    const scrollWidth = this.wrapperWidth - this.scrollListWidth;

    if (this.getLayoutDirection() === 'rtl') {
      return Math.max(Math.min(scrollWidth, transform), 0);
    } else {
      return Math.min(Math.max(scrollWidth, transform), 0);
    }
  }

  clampTransformY(transform) {
    return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
  }

  updateScrollListPosition() {
    this.resetSizes();
    this.transformX = this.clampTransformX(this.transformX);
    this.transformY = this.clampTransformY(this.transformY);
    this.setVisibleRange();
    this.setPingStatus();

    if (this.keyManager) {
      this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);

      if (this.keyManager.activeItem) {
        this.scrollToTab(this.keyManager.activeItem);
      }
    }
  }

  resetSizes() {
    this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
    this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
    this.operationWidth = this.operationRef.getElementWidth();
    this.operationHeight = this.operationRef.getElementHeight();
    this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
    this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
    this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
    this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
  }

  alignInkBarToSelectedTab() {
    const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
    const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;

    if (selectedItemElement) {
      /**
       * .ant-tabs-nav-list - Target offset parent element
       *   └──.ant-tabs-tab
       *        └──.ant-tabs-tab-btn - Currently focused element
       */
      this.inkBar.alignToElement(selectedItemElement.parentElement);
    }
  }

  setPingStatus() {
    const ping = {
      top: false,
      right: false,
      bottom: false,
      left: false
    };
    const navWarp = this.navWarpRef.nativeElement;

    if (this.position === 'horizontal') {
      if (this.getLayoutDirection() === 'rtl') {
        ping.right = this.transformX > 0;
        ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        ping.left = this.transformX < 0;
        ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
      }
    } else {
      ping.top = this.transformY < 0;
      ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }

    Object.keys(ping).forEach(pos => {
      const className = `ant-tabs-nav-wrap-ping-${pos}`;

      if (ping[pos]) {
        navWarp.classList.add(className);
      } else {
        navWarp.classList.remove(className);
      }
    });
  }

  setVisibleRange() {
    let unit;
    let position;
    let transformSize;
    let basicSize;
    let tabContentSize;
    let addSize;
    const tabs = this.items.toArray();
    const DEFAULT_SIZE = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0
    };

    const getOffset = index => {
      let offset;
      const size = tabs[index] || DEFAULT_SIZE;

      if (position === 'right') {
        offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
      } else {
        offset = size[position];
      }

      return offset;
    };

    if (this.position === 'horizontal') {
      unit = 'width';
      basicSize = this.wrapperWidth;
      tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
      addSize = this.addButtonWidth;
      transformSize = Math.abs(this.transformX);

      if (this.getLayoutDirection() === 'rtl') {
        position = 'right';
        this.pingRight = this.transformX > 0;
        this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        this.pingLeft = this.transformX < 0;
        this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
        position = 'left';
      }
    } else {
      unit = 'height';
      basicSize = this.wrapperHeight;
      tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
      addSize = this.addButtonHeight;
      position = 'top';
      transformSize = -this.transformY;
      this.pingTop = this.transformY < 0;
      this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }

    let mergedBasicSize = basicSize;

    if (tabContentSize + addSize > basicSize) {
      mergedBasicSize = basicSize - addSize;
    }

    if (!tabs.length) {
      this.hiddenItems = [];
      this.cdr.markForCheck();
      return;
    }

    const len = tabs.length;
    let endIndex = len;

    for (let i = 0; i < len; i += 1) {
      const offset = getOffset(i);
      const size = tabs[i] || DEFAULT_SIZE;

      if (offset + size[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    let startIndex = 0;

    for (let i = len - 1; i >= 0; i -= 1) {
      const offset = getOffset(i);

      if (offset < transformSize) {
        startIndex = i + 1;
        break;
      }
    }

    const startHiddenTabs = tabs.slice(0, startIndex);
    const endHiddenTabs = tabs.slice(endIndex + 1);
    this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
    this.cdr.markForCheck();
  }

  getLayoutDirection() {
    return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  setTabFocus(_tabIndex) {}

  ngOnChanges(changes) {
    const {
      position
    } = changes; // The first will be aligning in ngAfterViewInit

    if (position && !position.isFirstChange()) {
      this.alignInkBarToSelectedTab();
      this.lockAnimation();
      this.updateScrollListPosition();
    }
  }

}

NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) {
  return new (t || NzTabNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_21__.NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8));
};

NzTabNavBarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabNavBarComponent,
  selectors: [["nz-tabs-nav"]],
  contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabNavItemDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    }
  },
  viewQuery: function NzTabNavBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavOperationComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabAddButtonComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabsInkBarDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navWarpRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.operationRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBtnRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkBar = _t.first);
    }
  },
  hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"],
  hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      });
    }
  },
  inputs: {
    position: "position",
    addable: "addable",
    hideBar: "hideBar",
    addIcon: "addIcon",
    inkBarAnimated: "inkBarAnimated",
    extraTemplate: "extraTemplate",
    selectedIndex: "selectedIndex"
  },
  outputs: {
    indexFocused: "indexFocused",
    selectFocusedIndex: "selectFocusedIndex",
    addClicked: "addClicked",
    tabScroll: "tabScroll"
  },
  exportAs: ["nzTabsNav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 16,
  consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["nzTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]],
  template: function NzTabNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) {
        return ctx.onOffsetChange($event);
      })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) {
        return ctx.tabScroll.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab-nav-operation", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() {
        return ctx.addClicked.emit();
      })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) {
        return ctx.onSelectedFromMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraTemplate);
    }
  },
  directives: [NzTabScrollListDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, NzTabsInkBarDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tabs-nav',
      exportAs: 'nzTabsNav',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div
        class="ant-tabs-nav-list"
        #navList
        nzTabScrollList
        (offsetChange)="onOffsetChange($event)"
        (tabScroll)="tabScroll.emit($event)"
      >
        <ng-content></ng-content>
        <button *ngIf="showAddButton" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
      host: {
        role: 'tablist',
        class: 'ant-tabs-nav',
        '(keydown)': 'handleKeydown($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler
    }, {
      type: ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_21__.NzResizeObserver
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    indexFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectFocusedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    addClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tabScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inkBarAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    extraTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navWarpRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['navWarp', {
        static: true
      }]
    }],
    navListRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['navList', {
        static: true
      }]
    }],
    operationRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTabNavOperationComponent, {
        static: true
      }]
    }],
    addBtnRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTabAddButtonComponent, {
        static: false
      }]
    }],
    inkBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTabsInkBarDirective, {
        static: true
      }]
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzTabNavItemDirective, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTabBodyComponent {
  constructor() {
    this.content = null;
    this.active = false;
    this.tabPaneAnimated = true;
    this.forceRender = false;
  }

}

NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) {
  return new (t || NzTabBodyComponent)();
};

NzTabBodyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabBodyComponent,
  selectors: [["", "nz-tab-body", ""]],
  hostAttrs: [1, "ant-tabs-tabpane"],
  hostVars: 12,
  hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active);
    }
  },
  inputs: {
    content: "content",
    active: "active",
    tabPaneAnimated: "tabPaneAnimated",
    forceRender: "forceRender"
  },
  exportAs: ["nzTabBody"],
  attrs: _c5,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function NzTabBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabBodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[nz-tab-body]',
      exportAs: 'nzTabBody',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
      host: {
        class: 'ant-tabs-tabpane',
        '[class.ant-tabs-tabpane-active]': 'active',
        '[attr.tabindex]': 'active ? 0 : -1',
        '[attr.aria-hidden]': '!active',
        '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
        '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
        '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
        '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
      }
    }]
  }], null, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabPaneAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    forceRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTabCloseButtonComponent {
  constructor() {
    this.closeIcon = 'close';
  }

}

NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) {
  return new (t || NzTabCloseButtonComponent)();
};

NzTabCloseButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabCloseButtonComponent,
  selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]],
  hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"],
  inputs: {
    closeIcon: "closeIcon"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
  template: function NzTabCloseButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.closeIcon);
    }
  },
  directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabCloseButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tab-close-button, button[nz-tab-close-button]',
      template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
      host: {
        class: 'ant-tabs-tab-remove',
        'aria-label': 'Close tab',
        type: 'button'
      }
    }]
  }], function () {
    return [];
  }, {
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Fix https://github.com/angular/angular/issues/8563
 */


class NzTabLinkTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) {
  return new (t || NzTabLinkTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 1));
};

NzTabLinkTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabLinkTemplateDirective,
  selectors: [["ng-template", "nzTabLink", ""]],
  exportAs: ["nzTabLinkTemplate"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[nzTabLink]',
      exportAs: 'nzTabLinkTemplate'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, null);
})();
/**
 * This component is for catching `routerLink` directive.
 */


class NzTabLinkDirective {
  constructor(elementRef, routerLink, routerLinkWithHref) {
    this.elementRef = elementRef;
    this.routerLink = routerLink;
    this.routerLinkWithHref = routerLinkWithHref;
  }

}

NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) {
  return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref, 10));
};

NzTabLinkDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabLinkDirective,
  selectors: [["a", "nz-tab-link", ""]],
  exportAs: ["nzTabLink"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'a[nz-tab-link]',
      exportAs: 'nzTabLink'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }];
  }, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/** Decorates the `ng-template` tags and reads out the template from it. */


class NzTabDirective {}

NzTabDirective.ɵfac = function NzTabDirective_Factory(t) {
  return new (t || NzTabDirective)();
};

NzTabDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NzTabDirective,
  selectors: [["", "nz-tab", ""]],
  exportAs: ["nzTab"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-tab]',
      exportAs: 'nzTab'
    }]
  }], null, null);
})();
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */


const NZ_TAB_SET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NZ_TAB_SET');

class NzTabComponent {
  constructor(closestTabSet) {
    this.closestTabSet = closestTabSet;
    this.nzTitle = '';
    this.nzClosable = false;
    this.nzCloseIcon = 'close';
    this.nzDisabled = false;
    this.nzForceRender = false;
    this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.template = null;
    this.isActive = false;
    this.position = null;
    this.origin = null;
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
  }

  get content() {
    return this.template || this.contentTemplate;
  }

  get label() {
    var _a;

    return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
  }

  ngOnChanges(changes) {
    const {
      nzTitle,
      nzDisabled,
      nzForceRender
    } = changes;

    if (nzTitle || nzDisabled || nzForceRender) {
      this.stateChanges.next();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

}

NzTabComponent.ɵfac = function NzTabComponent_Factory(t) {
  return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NZ_TAB_SET));
};

NzTabComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabComponent,
  selectors: [["nz-tab"]],
  contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkTemplateDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabLinkTemplateDirective = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
    }
  },
  viewQuery: function NzTabComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzClosable: "nzClosable",
    nzCloseIcon: "nzCloseIcon",
    nzDisabled: "nzDisabled",
    nzForceRender: "nzForceRender"
  },
  outputs: {
    nzSelect: "nzSelect",
    nzDeselect: "nzDeselect",
    nzClick: "nzClick",
    nzContextmenu: "nzContextmenu"
  },
  exportAs: ["nzTab"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c8,
  decls: 4,
  vars: 0,
  consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]],
  template: function NzTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabComponent.prototype, "nzClosable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabComponent.prototype, "nzForceRender", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tab',
      exportAs: 'nzTab',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NZ_TAB_SET]
      }]
    }];
  }, {
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzClosable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCloseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzForceRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzDeselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzTabLinkTemplateDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzTabLinkTemplateDirective, {
        static: false
      }]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzTabDirective, {
        static: false,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    linkDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NzTabLinkDirective, {
        static: false
      }]
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentTemplate', {
        static: true
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTabChangeEvent {}

const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;

class NzTabSetComponent {
  constructor(nzConfigService, cdr, directionality, router) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.router = router;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzTabPosition = 'top';
    this.nzCanDeactivate = null;
    this.nzAddIcon = 'plus';
    this.nzTabBarStyle = null;
    this.nzType = 'line';
    this.nzSize = 'default';
    this.nzAnimated = true;
    this.nzTabBarGutter = undefined;
    this.nzHideAdd = false;
    this.nzCentered = false;
    this.nzHideAll = false;
    this.nzLinkRouter = false;
    this.nzLinkExact = true;
    this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.nzSelectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzTabListScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Pick up only direct descendants under ivy rendering engine
    // We filter out only the tabs that belong to this tab set in `tabs`.

    this.allTabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList(); // All the direct tabs for this tab set

    this.tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.indexToSelect = 0;
    this.selectedIndex = null;
    this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this.canDeactivateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this.tabSetId = nextId++;
  }

  get nzSelectedIndex() {
    return this.selectedIndex;
  }

  set nzSelectedIndex(value) {
    this.indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceNumberProperty)(value, null);
  }

  get position() {
    return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
  }

  get addable() {
    return this.nzType === 'editable-card' && !this.nzHideAdd;
  }

  get closable() {
    return this.nzType === 'editable-card';
  }

  get line() {
    return this.nzType === 'line';
  }

  get inkBarAnimated() {
    return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
  }

  get tabPaneAnimated() {
    return this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane);
  }

  ngOnInit() {
    var _a;

    this.dir = this.directionality.value;
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.tabs.destroy();
    this.tabLabelSubscription.unsubscribe();
    this.tabsSubscription.unsubscribe();
    this.canDeactivateSubscription.unsubscribe();
  }

  ngAfterContentInit() {
    Promise.resolve().then(() => {
      this.setUpRouter();
    });
    this.subscribeToTabLabels();
    this.subscribeToAllTabChanges(); // Subscribe to changes in the amount of tabs, in order to be
    // able to re-render the content as new tabs are added or removed.

    this.tabsSubscription = this.tabs.changes.subscribe(() => {
      const indexToSelect = this.clampTabIndex(this.indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
      // explicit change that selects a different tab.

      if (indexToSelect === this.selectedIndex) {
        const tabs = this.tabs.toArray();

        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `nzSelectedIndexChange` event.
            this.indexToSelect = this.selectedIndex = i;
            break;
          }
        }
      }

      this.subscribeToTabLabels();
      this.cdr.markForCheck();
    });
  }

  ngAfterContentChecked() {
    // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
    // the amount of tabs changes before the actual change detection runs.
    const indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.

    if (this.selectedIndex !== indexToSelect) {
      const isFirstRun = this.selectedIndex == null;

      if (!isFirstRun) {
        this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
      } // Changing these values after change detection has run
      // since the checked content may contain references to them.


      Promise.resolve().then(() => {
        this.tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);

        if (!isFirstRun) {
          this.nzSelectedIndexChange.emit(indexToSelect);
        }
      });
    } // Setup the position for each tab and optionally setup an origin on the next selected tab.


    this.tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
      // if it doesn't have one already.

      if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this.selectedIndex;
      }
    });

    if (this.selectedIndex !== indexToSelect) {
      this.selectedIndex = indexToSelect;
      this.cdr.markForCheck();
    }
  }

  onClose(index, e) {
    e.preventDefault();
    e.stopPropagation();
    this.nzClose.emit({
      index
    });
  }

  onAdd() {
    this.nzAdd.emit();
  }

  clampTabIndex(index) {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }

  createChangeEvent(index) {
    const event = new NzTabChangeEvent();
    event.index = index;

    if (this.tabs && this.tabs.length) {
      event.tab = this.tabs.toArray()[index];
      this.tabs.forEach((tab, i) => {
        if (i !== index) {
          tab.nzDeselect.emit();
        }
      });
      event.tab.nzSelect.emit();
    }

    return event;
  }

  subscribeToTabLabels() {
    if (this.tabLabelSubscription) {
      this.tabLabelSubscription.unsubscribe();
    }

    this.tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
  }

  subscribeToAllTabChanges() {
    this.allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.startWith)(this.allTabs)).subscribe(tabs => {
      this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
      this.tabs.notifyOnChanges();
    });
  }

  canDeactivateFun(pre, next) {
    if (typeof this.nzCanDeactivate === 'function') {
      const observable = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.wrapIntoObservable)(this.nzCanDeactivate(pre, next));
      return observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(true);
    }
  }

  clickNavItem(tab, index, e) {
    if (!tab.nzDisabled) {
      // ignore nzCanDeactivate
      tab.nzClick.emit();

      if (!this.isRouterLinkClickEvent(index, e)) {
        this.setSelectedIndex(index);
      }
    }
  }

  isRouterLinkClickEvent(index, event) {
    var _a, _b;

    const target = event.target;

    if (this.nzLinkRouter) {
      return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
    } else {
      return false;
    }
  }

  contextmenuNavItem(tab, e) {
    if (!tab.nzDisabled) {
      // ignore nzCanDeactivate
      tab.nzContextmenu.emit(e);
    }
  }

  setSelectedIndex(index) {
    this.canDeactivateSubscription.unsubscribe();
    this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
      if (can) {
        this.nzSelectedIndex = index;
        this.tabNavBarRef.focusIndex = index;
        this.cdr.markForCheck();
      }
    });
  }

  getTabIndex(tab, index) {
    if (tab.nzDisabled) {
      return null;
    }

    return this.selectedIndex === index ? 0 : -1;
  }

  getTabContentId(i) {
    return `nz-tabs-${this.tabSetId}-tab-${i}`;
  }

  setUpRouter() {
    if (this.nzLinkRouter) {
      if (!this.router) {
        throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_28__.PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
      }

      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_23__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.delay)(0)).subscribe(() => {
        this.updateRouterActive();
        this.cdr.markForCheck();
      });
    }
  }

  updateRouterActive() {
    if (this.router.navigated) {
      const index = this.findShouldActiveTabIndex();

      if (index !== this.selectedIndex) {
        this.setSelectedIndex(index);
      }

      this.nzHideAll = index === -1;
    }
  }

  findShouldActiveTabIndex() {
    const tabs = this.tabs.toArray();
    const isActive = this.isLinkActive(this.router);
    return tabs.findIndex(tab => {
      const c = tab.linkDirective;
      return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
    });
  }

  isLinkActive(router) {
    return link => link ? router.isActive(link.urlTree || '', {
      paths: this.nzLinkExact ? 'exact' : 'subset',
      queryParams: this.nzLinkExact ? 'exact' : 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    }) : false;
  }

  getTabContentMarginValue() {
    return -(this.nzSelectedIndex || 0) * 100;
  }

  getTabContentMarginLeft() {
    if (this.tabPaneAnimated) {
      if (this.dir !== 'rtl') {
        return `${this.getTabContentMarginValue()}%`;
      }
    }

    return '';
  }

  getTabContentMarginRight() {
    if (this.tabPaneAnimated) {
      if (this.dir === 'rtl') {
        return `${this.getTabContentMarginValue()}%`;
      }
    }

    return '';
  }

}

NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) {
  return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router, 8));
};

NzTabSetComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTabSetComponent,
  selectors: [["nz-tabset"]],
  contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.allTabs = _t);
    }
  },
  viewQuery: function NzTabSetComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavBarComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabNavBarRef = _t.first);
    }
  },
  hostAttrs: [1, "ant-tabs"],
  hostVars: 24,
  hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
    }
  },
  inputs: {
    nzSelectedIndex: "nzSelectedIndex",
    nzTabPosition: "nzTabPosition",
    nzTabBarExtraContent: "nzTabBarExtraContent",
    nzCanDeactivate: "nzCanDeactivate",
    nzAddIcon: "nzAddIcon",
    nzTabBarStyle: "nzTabBarStyle",
    nzType: "nzType",
    nzSize: "nzSize",
    nzAnimated: "nzAnimated",
    nzTabBarGutter: "nzTabBarGutter",
    nzHideAdd: "nzHideAdd",
    nzCentered: "nzCentered",
    nzHideAll: "nzHideAll",
    nzLinkRouter: "nzLinkRouter",
    nzLinkExact: "nzLinkExact"
  },
  outputs: {
    nzSelectChange: "nzSelectChange",
    nzSelectedIndexChange: "nzSelectedIndexChange",
    nzTabListScroll: "nzTabListScroll",
    nzClose: "nzClose",
    nzAdd: "nzAdd"
  },
  exportAs: ["nzTabset"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: NZ_TAB_SET,
    useExisting: NzTabSetComponent
  }])],
  decls: 4,
  vars: 16,
  consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["nz-tab-close-button", "", 3, "closeIcon", "click"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]],
  template: function NzTabSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_div_3_Template, 1, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length || ctx.addable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, NzTabNavBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, NzTabNavItemDirective, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.CdkMonitorFocus, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzStringTemplateOutletDirective, NzTabCloseButtonComponent, NzTabBodyComponent],
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.WithConfig)()], NzTabSetComponent.prototype, "nzType", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.WithConfig)()], NzTabSetComponent.prototype, "nzSize", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.WithConfig)()], NzTabSetComponent.prototype, "nzAnimated", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.WithConfig)()], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabSetComponent.prototype, "nzHideAdd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabSetComponent.prototype, "nzCentered", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabSetComponent.prototype, "nzHideAll", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabSetComponent.prototype, "nzLinkRouter", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_25__.InputBoolean)()], NzTabSetComponent.prototype, "nzLinkExact", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabSetComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tabset',
      exportAs: 'nzTabset',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      providers: [{
        provide: NZ_TAB_SET,
        useExisting: NzTabSetComponent
      }],
      template: `
    <nz-tabs-nav
      *ngIf="tabs.length || addable"
      [ngStyle]="nzTabBarStyle"
      [selectedIndex]="nzSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="nzAddIcon"
      [hideBar]="nzHideAll"
      [position]="position"
      [extraTemplate]="nzTabBarExtraContent"
      (tabScroll)="nzTabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
        [class.ant-tabs-tab-active]="nzSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.nzDisabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <div
          role="tab"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.nzDisabled"
          [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.nzDisabled"
          [tab]="tab"
          [active]="nzSelectedIndex === i"
          class="ant-tabs-tab-btn"
          nzTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button
            nz-tab-close-button
            *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
            [closeIcon]="tab.nzCloseIcon"
            (click)="onClose(i, $event)"
          ></button>
        </div>
      </div>
    </nz-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [style.margin-left]="getTabContentMarginLeft()"
        [style.margin-right]="getTabContentMarginRight()"
      >
        <div
          nz-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="nzSelectedIndex === i && !nzHideAll"
          [content]="tab.content"
          [forceRender]="tab.nzForceRender"
          [tabPaneAnimated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
      host: {
        class: 'ant-tabs',
        '[class.ant-tabs-card]': `nzType === 'card' || nzType === 'editable-card'`,
        '[class.ant-tabs-editable]': `nzType === 'editable-card'`,
        '[class.ant-tabs-editable-card]': `nzType === 'editable-card'`,
        '[class.ant-tabs-centered]': `nzCentered`,
        '[class.ant-tabs-rtl]': `dir === 'rtl'`,
        '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
        '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
        '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
        '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
        '[class.ant-tabs-default]': `nzSize === 'default'`,
        '[class.ant-tabs-small]': `nzSize === 'small'`,
        '[class.ant-tabs-large]': `nzSize === 'large'`
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_31__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzSelectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTabPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTabBarExtraContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCanDeactivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAddIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTabBarStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTabBarGutter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHideAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHideAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLinkRouter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLinkExact: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSelectChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSelectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzTabListScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    allTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzTabComponent, {
        descendants: true
      }]
    }],
    tabNavBarRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTabNavBarComponent, {
        static: false
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const DIRECTIVES = [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];

class NzTabsModule {}

NzTabsModule.ɵfac = function NzTabsModule_Factory(t) {
  return new (t || NzTabsModule)();
};

NzTabsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzTabsModule
});
NzTabsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_32__.ObserversModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzOutletModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__.PlatformModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.CdkScrollableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [DIRECTIVES],
      exports: [DIRECTIVES],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_32__.ObserversModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzOutletModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__.PlatformModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__.A11yModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__.CdkScrollableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 8010:
/*!************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-timeline.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTimelineComponent": () => (/* binding */ NzTimelineComponent),
/* harmony export */   "NzTimelineItemComponent": () => (/* binding */ NzTimelineItemComponent),
/* harmony export */   "NzTimelineModule": () => (/* binding */ NzTimelineModule),
/* harmony export */   "TimelineService": () => (/* binding */ TimelineService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

const _c0 = ["template"];

function NzTimelineItemComponent_ng_template_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nzLabel);
  }
}

function NzTimelineItemComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineItemComponent_ng_template_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzLabel);
  }
}

function NzTimelineItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzDot);
  }
}

function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineItemComponent_ng_template_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTimelineItemComponent_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-item-right", (ctx_r1.nzPosition || ctx_r1.position) === "right")("ant-timeline-item-left", (ctx_r1.nzPosition || ctx_r1.position) === "left")("ant-timeline-item-last", ctx_r1.isLast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r1.borderColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-item-head-red", ctx_r1.nzColor === "red")("ant-timeline-item-head-blue", ctx_r1.nzColor === "blue")("ant-timeline-item-head-green", ctx_r1.nzColor === "green")("ant-timeline-item-head-gray", ctx_r1.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r1.nzDot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDot);
  }
}

const _c1 = ["*"];

function NzTimelineComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzTimelineComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

function NzTimelineComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r5.template);
  }
}

function NzTimelineComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
  }
}

function NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.nzPendingDot, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.nzPendingDot);
  }
}

function NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.isPendingBoolean ? "" : ctx_r9.nzPending, " ");
  }
}

function NzTimelineComponent_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzPendingDot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzPending);
  }
}

function NzTimelineComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTimelineComponent_ng_template_4_li_0_Template, 6, 2, "li", 5);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.nzPending);
  }
}

const TimelineModes = ['left', 'alternate', 'right', 'custom'];
const TimelinePositions = ['left', 'right'];
const TimelineTimeDefaultColors = ['red', 'blue', 'green', 'grey', 'gray'];
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

class TimelineService {
  constructor() {
    this.check$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  }

  markForCheck() {
    this.check$.next();
  }

}

TimelineService.ɵfac = function TimelineService_Factory(t) {
  return new (t || TimelineService)();
};

TimelineService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TimelineService,
  factory: TimelineService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


function isDefaultColor(color) {
  return TimelineTimeDefaultColors.findIndex(i => i === color) !== -1;
}

class NzTimelineItemComponent {
  constructor(cdr, timelineService) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.nzColor = 'blue';
    this.isLast = false;
    this.borderColor = null;
  }

  ngOnChanges(changes) {
    this.timelineService.markForCheck();

    if (changes.nzColor) {
      this.updateCustomColor();
    }
  }

  detectChanges() {
    this.cdr.detectChanges();
  }

  updateCustomColor() {
    this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
  }

}

NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) {
  return new (t || NzTimelineItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimelineService));
};

NzTimelineItemComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTimelineItemComponent,
  selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]],
  viewQuery: function NzTimelineItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzPosition: "nzPosition",
    nzColor: "nzColor",
    nzDot: "nzDot",
    nzLabel: "nzLabel"
  },
  exportAs: ["nzTimelineItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "ant-timeline-item"], ["class", "ant-timeline-item-label", 4, "ngIf"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], [1, "ant-timeline-item-label"]],
  template: function NzTimelineItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTimelineItemComponent_ng_template_0_Template, 7, 20, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTimelineItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false,
      selector: 'nz-timeline-item, [nz-timeline-item]',
      exportAs: 'nzTimelineItem',
      template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        <div *ngIf="nzLabel" class="ant-timeline-item-label">
          <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
        </div>
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: TimelineService
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['template', {
        static: false
      }]
    }],
    nzPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class NzTimelineComponent {
  constructor(cdr, timelineService, directionality) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.directionality = directionality;
    this.nzMode = 'left';
    this.nzReverse = false;
    this.isPendingBoolean = false;
    this.timelineItems = [];
    this.dir = 'ltr';
    this.hasLabelItem = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }

  ngOnChanges(changes) {
    const {
      nzMode,
      nzReverse,
      nzPending
    } = changes;

    if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
      this.updateChildren();
    }

    if (nzPending) {
      this.isPendingBoolean = nzPending.currentValue === true;
    }
  }

  ngOnInit() {
    var _a;

    this.timelineService.check$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngAfterContentInit() {
    this.updateChildren();
    this.listOfItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.updateChildren();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateChildren() {
    if (this.listOfItems && this.listOfItems.length) {
      const length = this.listOfItems.length;
      let hasLabelItem = false;
      this.listOfItems.forEach((item, index) => {
        item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
        item.position = getInferredTimelineItemPosition(index, this.nzMode);

        if (!hasLabelItem && item.nzLabel) {
          hasLabelItem = true;
        }

        item.detectChanges();
      });
      this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
      this.hasLabelItem = hasLabelItem;
    } else {
      this.timelineItems = [];
      this.hasLabelItem = false;
    }

    this.cdr.markForCheck();
  }

}

NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) {
  return new (t || NzTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimelineService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8));
};

NzTimelineComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTimelineComponent,
  selectors: [["nz-timeline"]],
  contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTimelineItemComponent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfItems = _t);
    }
  },
  inputs: {
    nzMode: "nzMode",
    nzPending: "nzPending",
    nzPendingDot: "nzPendingDot",
    nzReverse: "nzReverse"
  },
  exportAs: ["nzTimeline"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TimelineService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 15,
  consts: [[1, "ant-timeline"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pendingTemplate", ""], [3, "ngTemplateOutlet"], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]],
  template: function NzTimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTimelineComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTimelineComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTimelineComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTimelineComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-timeline-label", ctx.hasLabelItem)("ant-timeline-right", !ctx.hasLabelItem && ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzReverse);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzReverse);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTimelineComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false,
      selector: 'nz-timeline',
      providers: [TimelineService],
      exportAs: 'nzTimeline',
      template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-label]="hasLabelItem"
      [class.ant-timeline-right]="!hasLabelItem && nzMode === 'right'"
      [class.ant-timeline-alternate]="nzMode === 'alternate' || nzMode === 'custom'"
      [class.ant-timeline-pending]="!!nzPending"
      [class.ant-timeline-reverse]="nzReverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      <ng-container *ngIf="nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- timeline items -->
      <ng-container *ngFor="let item of timelineItems">
        <ng-template [ngTemplateOutlet]="item.template"></ng-template>
      </ng-container>
      <ng-container *ngIf="!nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      <li *ngIf="nzPending" class="ant-timeline-item ant-timeline-item-pending">
        <div class="ant-timeline-item-tail"></div>
        <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
          <ng-container *nzStringTemplateOutlet="nzPendingDot">
            {{ nzPendingDot }}
            <i *ngIf="!nzPendingDot" nz-icon nzType="loading"></i>
          </ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-container *nzStringTemplateOutlet="nzPending">
            {{ isPendingBoolean ? '' : nzPending }}
          </ng-container>
        </div>
      </li>
    </ng-template>
    <!-- Grasp items -->
    <ng-content></ng-content>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: TimelineService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    listOfItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzTimelineItemComponent]
    }],
    nzMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPending: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPendingDot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzReverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

function simpleChangeActivated(simpleChange) {
  return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}

function getInferredTimelineItemPosition(index, mode) {
  return mode === 'custom' ? undefined : mode === 'left' ? 'left' : mode === 'right' ? 'right' : mode === 'alternate' && index % 2 === 0 ? 'left' : 'right';
}
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTimelineModule {}

NzTimelineModule.ɵfac = function NzTimelineModule_Factory(t) {
  return new (t || NzTimelineModule)();
};

NzTimelineModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzTimelineModule
});
NzTimelineModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTimelineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzTimelineItemComponent, NzTimelineComponent],
      exports: [NzTimelineItemComponent, NzTimelineComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule]
    }]
  }], null, null);
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9730:
/*!**************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-typography.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTextCopyComponent": () => (/* binding */ NzTextCopyComponent),
/* harmony export */   "NzTextEditComponent": () => (/* binding */ NzTextEditComponent),
/* harmony export */   "NzTypographyComponent": () => (/* binding */ NzTypographyComponent),
/* harmony export */   "NzTypographyModule": () => (/* binding */ NzTypographyModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 2347);
/* harmony import */ var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/trans-button */ 4357);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4310);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5869);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 2077);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 2920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 7125);
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ 787);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6506);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 7992);































function NzTextCopyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
  }
}

const _c0 = ["textarea"];

function NzTextEditComponent_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r3);
  }
}

function NzTextEditComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTextEditComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTextEditComponent_button_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r0.tooltip === null ? null : ctx_r0.tooltip || (ctx_r0.locale == null ? null : ctx_r0.locale.edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.icon);
  }
}

function NzTextEditComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r7.onInput($event);
    })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.confirm();
    })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10.onCancel();
    })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.onEnter($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTextEditComponent_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.confirm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}

const _c1 = ["ellipsisContainer"];
const _c2 = ["expandable"];
const _c3 = ["contentTemplate"];

function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!content"]);
  }
}

function NzTypographyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
  }

  if (rf & 2) {
    const content_r5 = ctx.content;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !content_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", content_r5, " ");
  }
}

function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {}

function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.nzSuffix);
  }
}

const _c4 = function (a0) {
  return {
    content: a0
  };
};

function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r7.nzContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.nzSuffix);
  }
}

function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.ellipsisStr);
  }
}

function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.nzSuffix);
  }
}

function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r17.onExpand();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.locale == null ? null : ctx_r15.locale.expand, " ");
  }
}

function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 8);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isEllipsis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.nzSuffix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.nzExpandable && ctx_r9.isEllipsis);
  }
}

function NzTypographyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.expanded || !ctx_r2.hasOperationsWithEllipsis && ctx_r2.nzEllipsisRows === 1 && !ctx_r2.hasEllipsisObservers || ctx_r2.canCssEllipsis || ctx_r2.nzSuffix && ctx_r2.expanded)("ngIfElse", _r8);
  }
}

function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-text-edit", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.onEndEditing($event);
    })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r21.onStartEditing();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r3.nzContent)("icon", ctx_r3.nzEditIcon)("tooltip", ctx_r3.nzEditTooltip);
  }
}

function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-text-copy", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.onTextCopy($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r4.copyText)("tooltips", ctx_r4.nzCopyTooltips)("icons", ctx_r4.nzCopyIcons);
  }
}

const _c5 = ["*"];

class NzTextCopyComponent {
  constructor(host, cdr, clipboard, i18n) {
    this.host = host;
    this.cdr = cdr;
    this.clipboard = clipboard;
    this.i18n = i18n;
    this.copied = false;
    this.copyId = -1;
    this.nativeElement = this.host.nativeElement;
    this.copyTooltip = null;
    this.copedTooltip = null;
    this.copyIcon = 'copy';
    this.copedIcon = 'check';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.icons = ['copy', 'check'];
    this.textCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {
    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Text');
      this.updateTooltips();
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(changes) {
    const {
      tooltips,
      icons
    } = changes;

    if (tooltips) {
      this.updateTooltips();
    }

    if (icons) {
      this.updateIcons();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.copyId);
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick() {
    if (this.copied) {
      return;
    }

    this.copied = true;
    this.cdr.detectChanges();
    const text = this.text;
    this.textCopy.emit(text);
    this.clipboard.copy(text);
    this.onCopied();
  }

  onCopied() {
    clearTimeout(this.copyId);
    this.copyId = setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  updateTooltips() {
    var _a, _b, _c, _d;

    if (this.tooltips === null) {
      this.copedTooltip = null;
      this.copyTooltip = null;
    } else if (Array.isArray(this.tooltips)) {
      const [copyTooltip, copedTooltip] = this.tooltips;
      this.copyTooltip = copyTooltip || ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.copy);
      this.copedTooltip = copedTooltip || ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.copied);
    } else {
      this.copyTooltip = (_c = this.locale) === null || _c === void 0 ? void 0 : _c.copy;
      this.copedTooltip = (_d = this.locale) === null || _d === void 0 ? void 0 : _d.copied;
    }

    this.cdr.markForCheck();
  }

  updateIcons() {
    const [copyIcon, copedIcon] = this.icons;
    this.copyIcon = copyIcon;
    this.copedIcon = copedIcon;
    this.cdr.markForCheck();
  }

}

NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) {
  return new (t || NzTextCopyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService));
};

NzTextCopyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTextCopyComponent,
  selectors: [["nz-text-copy"]],
  inputs: {
    text: "text",
    tooltips: "tooltips",
    icons: "icons"
  },
  outputs: {
    textCopy: "textCopy"
  },
  exportAs: ["nzTextCopy"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 4,
  consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextCopyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTextCopyComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-typography-copy-success", ctx.copied);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
    }
  },
  directives: [ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_5__.NzTransButtonDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzTooltipDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTextCopyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-text-copy',
      exportAs: 'nzTextCopy',
      template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.Clipboard
    }, {
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService
    }];
  }, {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    textCopy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTextEditComponent {
  constructor(zone, host, cdr, i18n) {
    this.zone = zone;
    this.host = host;
    this.cdr = cdr;
    this.i18n = i18n;
    this.editing = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.icon = 'edit';
    this.startEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.endEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    this.nativeElement = this.host.nativeElement;
  }

  ngOnInit() {
    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Text');
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick() {
    this.beforeText = this.text;
    this.currentText = this.beforeText;
    this.editing = true;
    this.startEditing.emit();
    this.focusAndSetValue();
  }

  confirm() {
    this.editing = false;
    this.endEditing.emit(this.currentText);
  }

  onInput(event) {
    const target = event.target;
    this.currentText = target.value;
  }

  onEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.confirm();
  }

  onCancel() {
    this.currentText = this.beforeText;
    this.confirm();
  }

  focusAndSetValue() {
    this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      var _a;

      if ((_a = this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
        this.textarea.nativeElement.focus();
        this.textarea.nativeElement.value = this.currentText || '';
        this.autosizeDirective.resizeToFitContent();
        this.cdr.markForCheck();
      }
    });
  }

}

NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) {
  return new (t || NzTextEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService));
};

NzTextEditComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTextEditComponent,
  selectors: [["nz-text-edit"]],
  viewQuery: function NzTextEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosizeDirective = _t.first);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    tooltip: "tooltip"
  },
  outputs: {
    startEditing: "startEditing",
    endEditing: "endEditing"
  },
  exportAs: ["nzTextEdit"],
  decls: 2,
  vars: 2,
  consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTooltipTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]],
  template: function NzTextEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTextEditComponent_button_0_Template, 2, 2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTextEditComponent_ng_container_1_Template, 5, 0, "ng-container", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_5__.NzTransButtonDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzTooltipDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTextEditComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-text-edit',
      exportAs: 'nzTextEdit',
      template: `
    <button
      *ngIf="!editing"
      nz-tooltip
      nz-trans-button
      class="ant-typography-edit"
      [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="icon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
    <ng-container *ngIf="editing">
      <textarea
        #textarea
        nz-input
        nzAutosize
        (input)="onInput($event)"
        (blur)="confirm()"
        (keydown.esc)="onCancel()"
        (keydown.enter)="onEnter($event)"
      ></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <i nz-icon nzType="enter"></i>
      </button>
    </ng-container>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService
    }];
  }, {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startEditing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    endEditing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    textarea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['textarea', {
        static: false
      }]
    }],
    autosizeDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, {
        static: false
      }]
    }]
  });
})();

const NZ_CONFIG_MODULE_NAME = 'typography';
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';

class NzTypographyComponent {
  constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.cdr = cdr;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.platform = platform;
    this.i18n = i18n;
    this.resizeService = resizeService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzCopyable = false;
    this.nzEditable = false;
    this.nzDisabled = false;
    this.nzExpandable = false;
    this.nzEllipsis = false;
    this.nzCopyTooltips = undefined;
    this.nzCopyIcons = ['copy', 'check'];
    this.nzEditTooltip = undefined;
    this.nzEditIcon = 'edit';
    this.nzEllipsisRows = 1;
    this.nzContentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // This is not a two-way binding output with {@link nzEllipsis}

    this.nzOnEllipsis = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.expandableBtnElementCache = null;
    this.editing = false;
    this.cssEllipsis = false;
    this.isEllipsis = true;
    this.expanded = false;
    this.ellipsisStr = '...';
    this.dir = 'ltr';
    this.viewInit = false;
    this.rfaId = -1;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.windowResizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription.EMPTY;
    this.document = document;
  }

  get hasEllipsisObservers() {
    return this.nzOnEllipsis.observers.length > 0;
  }

  get canCssEllipsis() {
    return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
  }

  get hasOperationsWithEllipsis() {
    return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
  }

  get copyText() {
    return typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent;
  }

  onTextCopy(text) {
    this.nzCopy.emit(text);
  }

  onStartEditing() {
    this.editing = true;
  }

  onEndEditing(text) {
    this.editing = false;
    this.nzContentChange.emit(text);

    if (this.nzContent === text) {
      this.renderOnNextFrame();
    }

    this.cdr.markForCheck();
  }

  onExpand() {
    this.isEllipsis = false;
    this.expanded = true;
    this.nzExpandChange.emit();
    this.nzOnEllipsis.emit(false);
  }

  canUseCSSEllipsis() {
    if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
      return false;
    } // make sure {@link nzOnEllipsis} works, will force use JS to calculations


    if (this.hasEllipsisObservers) {
      return false;
    }

    if (this.nzEllipsisRows === 1) {
      return (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.isStyleSupport)('textOverflow');
    } else {
      return (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.isStyleSupport)('webkitLineClamp');
    }
  }

  renderOnNextFrame() {
    (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_14__.cancelRequestAnimationFrame)(this.rfaId);

    if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
      return;
    }

    this.rfaId = (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_14__.reqAnimFrame)(() => {
      this.syncEllipsis();
    });
  }

  getOriginContentViewRef() {
    const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
      content: this.nzContent
    });
    viewRef.detectChanges();
    return {
      viewRef,
      removeView: () => {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
      }
    };
  }

  syncEllipsis() {
    if (this.cssEllipsis) {
      return;
    }

    const {
      viewRef,
      removeView
    } = this.getOriginContentViewRef();
    const fixedNodes = [this.textCopyRef, this.textEditRef].filter(e => e && e.nativeElement).map(e => e.nativeElement);
    const expandableBtnElement = this.getExpandableBtnElement();

    if (expandableBtnElement) {
      fixedNodes.push(expandableBtnElement);
    }

    const {
      contentNodes,
      text,
      ellipsis
    } = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.measure)(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
    removeView();
    this.ellipsisText = text;

    if (ellipsis !== this.isEllipsis) {
      this.isEllipsis = ellipsis;
      this.nzOnEllipsis.emit(ellipsis);
    }

    const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;

    while (ellipsisContainerNativeElement.firstChild) {
      this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
    }

    contentNodes.forEach(n => {
      this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
    });
    this.cdr.markForCheck();
  } // Need to create the element for calculation size before view init


  getExpandableBtnElement() {
    if (this.nzExpandable) {
      const expandText = this.locale ? this.locale.expand : '';
      const cache = this.expandableBtnElementCache;

      if (!cache || cache.innerText === expandText) {
        const el = this.document.createElement('a');
        el.className = EXPAND_ELEMENT_CLASSNAME;
        el.innerText = expandText;
        this.expandableBtnElementCache = el;
      }

      return this.expandableBtnElementCache;
    } else {
      this.expandableBtnElementCache = null;
      return null;
    }
  }

  renderAndSubscribeWindowResize() {
    if (this.platform.isBrowser) {
      this.windowResizeSubscription.unsubscribe();
      this.cssEllipsis = this.canUseCSSEllipsis();
      this.renderOnNextFrame();
      this.windowResizeSubscription = this.resizeService.subscribe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => this.renderOnNextFrame());
    }
  }

  ngOnInit() {
    var _a;

    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Text');
      this.cdr.markForCheck();
    });
    (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }

  ngAfterViewInit() {
    this.viewInit = true;
    this.renderAndSubscribeWindowResize();
  }

  ngOnChanges(changes) {
    const {
      nzCopyable,
      nzEditable,
      nzExpandable,
      nzEllipsis,
      nzContent,
      nzEllipsisRows,
      nzSuffix
    } = changes;

    if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
      if (this.nzEllipsis) {
        if (this.expanded) {
          this.windowResizeSubscription.unsubscribe();
        } else {
          this.renderAndSubscribeWindowResize();
        }
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.expandableBtnElementCache = null;
    this.windowResizeSubscription.unsubscribe();
  }

}

NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) {
  return new (t || NzTypographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__.NzResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8));
};

NzTypographyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NzTypographyComponent,
  selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]],
  viewQuery: function NzTypographyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTextEditComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTextCopyComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textEditRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textCopyRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ellipsisContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expandableBtn = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    }
  },
  hostVars: 26,
  hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-single-line", ctx.nzEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    }
  },
  inputs: {
    nzCopyable: "nzCopyable",
    nzEditable: "nzEditable",
    nzDisabled: "nzDisabled",
    nzExpandable: "nzExpandable",
    nzEllipsis: "nzEllipsis",
    nzCopyTooltips: "nzCopyTooltips",
    nzCopyIcons: "nzCopyIcons",
    nzEditTooltip: "nzEditTooltip",
    nzEditIcon: "nzEditIcon",
    nzContent: "nzContent",
    nzEllipsisRows: "nzEllipsisRows",
    nzType: "nzType",
    nzCopyText: "nzCopyText",
    nzSuffix: "nzSuffix"
  },
  outputs: {
    nzContentChange: "nzContentChange",
    nzCopy: "nzCopy",
    nzExpandChange: "nzExpandChange",
    nzOnEllipsis: "nzOnEllipsis"
  },
  exportAs: ["nzTypography"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["jsEllipsis", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "icon", "tooltip", "endEditing", "startEditing"], [3, "text", "tooltips", "icons", "textCopy"]],
  template: function NzTypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzCopyable && !ctx.editing);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputBoolean)()], NzTypographyComponent.prototype, "nzCopyable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputBoolean)()], NzTypographyComponent.prototype, "nzEditable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputBoolean)()], NzTypographyComponent.prototype, "nzDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputBoolean)()], NzTypographyComponent.prototype, "nzExpandable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputBoolean)()], NzTypographyComponent.prototype, "nzEllipsis", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTypographyComponent.prototype, "nzCopyIcons", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTypographyComponent.prototype, "nzEditTooltip", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTypographyComponent.prototype, "nzEditIcon", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_13__.InputNumber)()], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTypographyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
      exportAs: 'nzTypography',
      template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template
          [ngTemplateOutlet]="contentTemplate"
          [ngTemplateOutletContext]="{ content: nzContent }"
        ></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">
          {{ locale?.expand }}
        </a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false,
      host: {
        '[class.ant-typography]': '!editing',
        '[class.ant-typography-rtl]': 'dir === "rtl"',
        '[class.ant-typography-edit-content]': 'editing',
        '[class.ant-typography-secondary]': 'nzType === "secondary"',
        '[class.ant-typography-warning]': 'nzType === "warning"',
        '[class.ant-typography-danger]': 'nzType === "danger"',
        '[class.ant-typography-success]': 'nzType === "success"',
        '[class.ant-typography-disabled]': 'nzDisabled',
        '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
        '[class.ant-typography-single-line]': 'nzEllipsis && nzEllipsisRows === 1',
        '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
        '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
        '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.Platform
    }, {
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__.NzResizeService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzCopyable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEditable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExpandable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCopyTooltips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCopyIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEditTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEditIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEllipsisRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCopyText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSuffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzContentChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzCopy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzExpandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzOnEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    textEditRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTextEditComponent, {
        static: false
      }]
    }],
    textCopyRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NzTextCopyComponent, {
        static: false
      }]
    }],
    ellipsisContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ellipsisContainer', {
        static: false
      }]
    }],
    expandableBtn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['expandable', {
        static: false
      }]
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentTemplate', {
        static: false
      }]
    }]
  });
})();
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


class NzTypographyModule {}

NzTypographyModule.ɵfac = function NzTypographyModule_Factory(t) {
  return new (t || NzTypographyModule)();
};

NzTypographyModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NzTypographyModule
});
NzTypographyModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nModule, ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_5__.NzTransButtonModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzOutletModule], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTypographyModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__.NzI18nModule, ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_5__.NzTransButtonModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzOutletModule],
      exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule],
      declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
    }]
  }], null, null);
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
//# sourceMappingURL=src_app_module_research_research_module_ts.js.map
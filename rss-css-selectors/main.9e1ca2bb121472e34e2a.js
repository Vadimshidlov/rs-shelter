/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/levels/levels.scss":
/*!*******************************************!*\
  !*** ./src/components/levels/levels.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/main.scss":
/*!***************************************!*\
  !*** ./src/components/main/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/table/table-levels.scss":
/*!************************************************!*\
  !*** ./src/components/table/table-levels.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppPage = void 0;
const create_element_1 = __importDefault(__webpack_require__(/*! ../element/create-element */ "./src/components/element/create-element.ts"));
const footer_1 = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.ts");
const header_1 = __webpack_require__(/*! ../header/header */ "./src/components/header/header.ts");
const main_1 = __webpack_require__(/*! ../main/main */ "./src/components/main/main.ts");
const table_1 = __webpack_require__(/*! ../table/table */ "./src/components/table/table.ts");
const input_element_1 = __webpack_require__(/*! ../sanbox/sanbox-css/input-element */ "./src/components/sanbox/sanbox-css/input-element.ts");
const levels_1 = __webpack_require__(/*! ../levels/levels */ "./src/components/levels/levels.ts");
const sandbox_html_1 = __webpack_require__(/*! ../sanbox/sandbox-html */ "./src/components/sanbox/sandbox-html.ts");
const input_button_1 = __webpack_require__(/*! ../sanbox/sanbox-css/input-button */ "./src/components/sanbox/sanbox-css/input-button.ts");
__webpack_require__(/*! ../main/main.scss */ "./src/components/main/main.scss");
__webpack_require__(/*! ../../styles.scss */ "./src/styles.scss");
__webpack_require__(/*! ../table/table-levels.scss */ "./src/components/table/table-levels.scss");
const leves_data_1 = __webpack_require__(/*! ../levels/leves-data */ "./src/components/levels/leves-data.ts");
const CSS_CLASSES = {
    HEADER: 'header',
    CONTAINER: '_container',
    MAIN: 'main',
    tableBody: 'table-body',
    table: 'table-body__table',
};
class AppPage {
    constructor() {
        var _a;
        this.cssInput = new input_element_1.InputElement();
        this.buttonInput = new input_button_1.InputButton();
        const stateLevel = localStorage.getItem('currentLevel');
        this.currentLevel = stateLevel ? +stateLevel : 0;
        this.container = null;
        this.main = new main_1.MainElement().getHTMLElement();
        this.table = new table_1.Table(this.currentLevel);
        this.tableElement = this.table.getHTMLElement();
        this.sandboxBody = null;
        this.cssInputElement = this.cssInput.getElement();
        this.cssButtonHelp = null;
        this.cssButtonRestart = null;
        this.buttonInputElement = this.buttonInput.getElement();
        this.levels = new levels_1.LevelsElement(leves_data_1.GAME_TASKS, this.currentLevel);
        this.levelsElement = this.levels.getHTMLElement();
        this.levelsAllElements = (_a = this.levelsElement) === null || _a === void 0 ? void 0 : _a.childNodes[1];
        this.htmlSandbox = new sandbox_html_1.SandboxHtmlElement(this.currentLevel);
        this.htmlSandboxElement = this.htmlSandbox.getHTMLElement();
        this.getHTMLPage();
        this.addEventListeners();
    }
    getHTMLPage() {
        var _a;
        const containerData = {
            tag: 'div',
            classNames: [CSS_CLASSES.CONTAINER],
            text: '',
            callback: null,
        };
        const container = new create_element_1.default(containerData).getElement();
        this.container = container;
        this.createHeaderBlock();
        this.createMainBlock();
        this.createFooterBlock();
        if (container) {
            (_a = document.body) === null || _a === void 0 ? void 0 : _a.append(container);
        }
    }
    createHeaderBlock() {
        var _a;
        const header = new header_1.HeaderElement().getHTMLElement();
        if (header) {
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.append(header);
        }
    }
    createFooterBlock() {
        var _a;
        const footer = new footer_1.FooterElement().getHTMLElement();
        if (footer) {
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.append(footer);
        }
    }
    createMainBlock() {
        var _a, _b;
        const contentWrapper = new create_element_1.default({
            tag: 'div',
            classNames: ['content-wrapper'],
            text: '',
            callback: null,
        }).getElement();
        const mainBlock = new create_element_1.default({
            tag: 'div',
            classNames: ['content-main-block'],
            text: '',
            callback: null,
        }).getElement();
        const sandboxBody = new create_element_1.default({
            tag: 'div',
            classNames: ['sandbox-body'],
            text: '',
            callback: null,
        }).getElement();
        this.sandboxBody = sandboxBody;
        const sandboxBodyCssWrapper = new create_element_1.default({
            tag: 'div',
            classNames: ['sandbox-body__css', 'css-sandbox'],
            text: '',
            callback: null,
        }).getElement();
        const sandboxBodyCssTitle = new create_element_1.default({
            tag: 'div',
            classNames: ['css-sandbox__title'],
            text: 'CSS Editor',
            callback: null,
        }).getElement();
        const cssButtonsBlock = new create_element_1.default({
            tag: 'div',
            classNames: ['css-sandbox__buttons-block'],
            text: '',
            callback: null,
        }).getElement();
        const cssButtonHelp = new create_element_1.default({
            tag: 'button',
            classNames: ['css-sandbox__button-help'],
            text: 'Help',
            callback: null,
        }).getElement();
        this.cssButtonHelp = cssButtonHelp;
        const cssButtonRestart = new create_element_1.default({
            tag: 'button',
            classNames: ['css-sandbox__button-restart'],
            text: 'Restart',
            callback: null,
        }).getElement();
        this.cssButtonRestart = cssButtonRestart;
        if (this.cssInputElement &&
            this.buttonInputElement &&
            this.main &&
            cssButtonHelp &&
            cssButtonRestart &&
            sandboxBodyCssTitle &&
            cssButtonsBlock &&
            sandboxBodyCssWrapper &&
            this.tableElement &&
            sandboxBody &&
            mainBlock &&
            contentWrapper &&
            this.htmlSandboxElement &&
            this.levelsElement) {
            cssButtonsBlock === null || cssButtonsBlock === void 0 ? void 0 : cssButtonsBlock.append(cssButtonHelp);
            cssButtonsBlock === null || cssButtonsBlock === void 0 ? void 0 : cssButtonsBlock.append(cssButtonRestart);
            sandboxBodyCssWrapper === null || sandboxBodyCssWrapper === void 0 ? void 0 : sandboxBodyCssWrapper.append(sandboxBodyCssTitle);
            this.cssInputElement.append(this.buttonInputElement);
            sandboxBodyCssWrapper === null || sandboxBodyCssWrapper === void 0 ? void 0 : sandboxBodyCssWrapper.append(this.cssInputElement);
            sandboxBodyCssWrapper === null || sandboxBodyCssWrapper === void 0 ? void 0 : sandboxBodyCssWrapper.append(cssButtonsBlock);
            sandboxBody === null || sandboxBody === void 0 ? void 0 : sandboxBody.append(sandboxBodyCssWrapper);
            sandboxBody === null || sandboxBody === void 0 ? void 0 : sandboxBody.append(this.htmlSandboxElement);
            mainBlock === null || mainBlock === void 0 ? void 0 : mainBlock.append(this.tableElement);
            mainBlock === null || mainBlock === void 0 ? void 0 : mainBlock.append(sandboxBody);
            this.table.setClasses(leves_data_1.GAME_TASKS[this.currentLevel].tableClass);
            contentWrapper === null || contentWrapper === void 0 ? void 0 : contentWrapper.append(mainBlock);
            contentWrapper === null || contentWrapper === void 0 ? void 0 : contentWrapper.append(this.levelsElement);
            (_a = this.main) === null || _a === void 0 ? void 0 : _a.append(contentWrapper);
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.append(this.main);
        }
    }
    changeLevel() {
        if (this.tableElement) {
            this.table.clearTable();
            this.table.setClasses(leves_data_1.GAME_TASKS[this.currentLevel].tableClass);
            this.table.fillTable(leves_data_1.GAME_TASKS[this.currentLevel].markup, this.tableElement);
            if (this.htmlSandboxElement) {
                this.htmlSandbox.fillHtmlViewer(leves_data_1.GAME_TASKS[this.currentLevel].markup);
            }
            this.levels.start(leves_data_1.GAME_TASKS, this.currentLevel);
        }
    }
    failedAnswer() {
        var _a;
        (_a = this.sandboxBody) === null || _a === void 0 ? void 0 : _a.classList.add('sandbox-body__css__fall');
        this.cssInput.failedState();
        setTimeout(() => {
            var _a;
            (_a = this.sandboxBody) === null || _a === void 0 ? void 0 : _a.classList.remove('sandbox-body__css__fall');
        }, 400);
    }
    buttonEnterAction() {
        const answer = this.cssInput.getInputValue();
        if (this.levels.checkResult(answer, this.currentLevel)) {
            const indexVal = this.currentLevel;
            const help = false;
            this.levels.setStatusLevel({ indexVal, help });
            this.cssInput.clearInput();
            const completeLevels = this.levels.getCompleteLevels();
            if (this.currentLevel === leves_data_1.GAME_TASKS.length - 1 && completeLevels.length === leves_data_1.GAME_TASKS.length) {
                this.levels.setStatusLevel({ indexVal: 10, help });
                this.levels.start(leves_data_1.GAME_TASKS, 10);
                this.table.hideTargetElement();
                setTimeout(() => {
                    this.table.clearTable();
                    this.table.finallyMessage();
                    if (this.buttonInputElement) {
                        this.buttonInputElement.disabled = true;
                    }
                }, 500);
                return;
            }
            if (completeLevels.length === leves_data_1.GAME_TASKS.length) {
                this.levels.setStatusLevel({ indexVal: 10, help });
                this.levels.start(leves_data_1.GAME_TASKS, 10);
                this.table.hideTargetElement();
                setTimeout(() => {
                    this.table.clearTable();
                    this.table.finallyMessage();
                    if (this.buttonInputElement) {
                        this.buttonInputElement.disabled = true;
                    }
                }, 500);
                return;
            }
            this.currentLevel = this.levels.getUncompleteLevel();
            localStorage.setItem('currentLevel', String(this.currentLevel));
            this.table.hideTargetElement();
            setTimeout(() => {
                this.changeLevel();
            }, 500);
        }
        else {
            this.failedAnswer();
        }
    }
    addEventListeners() {
        var _a, _b, _c, _d, _e;
        (_a = this.buttonInputElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.buttonEnterAction.bind(this));
        (_b = this.cssInputElement) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', (e) => {
            if (e instanceof KeyboardEvent && e.code === 'Enter') {
                this.buttonEnterAction();
            }
        });
        (_c = this.levelsElement) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const { parentElement } = event.target;
                if ((parentElement === null || parentElement === void 0 ? void 0 : parentElement.classList.contains('levels-block__item')) &&
                    parentElement.id !== String(this.currentLevel) &&
                    !this.levels.checkLevels(+parentElement.id)) {
                    this.currentLevel = +parentElement.id;
                    localStorage.setItem('currentLevel', String(this.currentLevel));
                    this.changeLevel();
                }
            }
        });
        (_d = this.cssButtonRestart) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
            if (this.tableElement) {
                if (this.buttonInputElement) {
                    this.buttonInputElement.disabled = false;
                }
                this.currentLevel = 0;
                localStorage.clear();
                this.cssInput.clearInput();
                this.table.clearTable();
                this.table.setClasses(leves_data_1.GAME_TASKS[this.currentLevel].tableClass);
                this.table.fillTable(leves_data_1.GAME_TASKS[this.currentLevel].markup, this.tableElement);
                if (this.htmlSandboxElement) {
                    this.htmlSandbox.fillHtmlViewer(leves_data_1.GAME_TASKS[this.currentLevel].markup);
                }
                this.levels.start(leves_data_1.GAME_TASKS, this.currentLevel, true);
            }
        });
        (_e = this.cssButtonHelp) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
            const result = leves_data_1.GAME_TASKS[this.currentLevel].result[0];
            this.cssInput.clearInput();
            let index = 0;
            const interval = setInterval(() => {
                this.cssInput.setInputValue(result[index]);
                index += 1;
                if (index === result.length) {
                    clearInterval(interval);
                    const indexVal = this.currentLevel;
                    const help = true;
                    this.levels.setStatusLevel({ indexVal, help });
                }
            }, 100);
        });
    }
}
exports.AppPage = AppPage;


/***/ }),

/***/ "./src/components/element/create-element.ts":
/*!**************************************************!*\
  !*** ./src/components/element/create-element.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CreateElement {
    constructor(data) {
        this.element = null;
        this.createElement(data);
    }
    createElement(data) {
        this.element = document.createElement(data.tag);
        this.setStyles(data);
        this.setTextContent(data);
        this.setCallback(data);
    }
    setStyles(data) {
        data.classNames.forEach((cssClass) => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add(cssClass); });
    }
    setTextContent(data) {
        if (this.element) {
            this.element.textContent = data.text;
        }
    }
    setCallback(data) {
        var _a;
        if (typeof data.callback === 'function') {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => data.callback);
        }
    }
    appendElement(element) {
        var _a;
        if (element) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(element);
        }
    }
    getElement() {
        return this.element;
    }
}
exports["default"] = CreateElement;


/***/ }),

/***/ "./src/components/element/element-view.ts":
/*!************************************************!*\
  !*** ./src/components/element/element-view.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementView = void 0;
const create_element_1 = __importDefault(__webpack_require__(/*! ./create-element */ "./src/components/element/create-element.ts"));
class ElementView {
    constructor(elementData) {
        this.elementObj = null;
        this.createElement(elementData);
    }
    createElement(elementData) {
        const data = {
            tag: elementData.tag,
            classNames: elementData.classNames,
            text: '',
            callback: null,
        };
        const elementObj = new create_element_1.default(data);
        this.elementObj = elementObj;
    }
    getHTMLElement() {
        if (!this.elementObj) {
            throw new Error('HTML Element is null!');
        }
        return this.elementObj.getElement();
    }
}
exports.ElementView = ElementView;


/***/ }),

/***/ "./src/components/footer/footer.ts":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FooterElement = void 0;
const create_element_1 = __importDefault(__webpack_require__(/*! ../element/create-element */ "./src/components/element/create-element.ts"));
const element_view_1 = __webpack_require__(/*! ../element/element-view */ "./src/components/element/element-view.ts");
__webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
const CSS_CLASSES = {
    FOOTER: 'footer',
    FOOTER_TITLE: 'footer__title',
    FOOTER_LINK: 'footer__link',
    FOOTER_LOGO: 'footer__logo',
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const footerLogo = __webpack_require__(/*! ../../assets/footer-rsschool-logo.svg */ "./src/assets/footer-rsschool-logo.svg");
const TEXT_CONTENT = 'Vadim Shidlov';
const RSSCHOOL_LINK = 'https://rs.school/js/';
const GITHUB_LINK = 'https://github.com/Vadimshidlov';
class FooterElement extends element_view_1.ElementView {
    constructor() {
        const footerData = {
            tag: 'footer',
            classNames: [CSS_CLASSES.FOOTER],
            text: '',
            callback: null,
        };
        super(footerData);
        this.additionElement();
    }
    additionElement() {
        var _a, _b, _c;
        const headerTitle = new create_element_1.default({
            tag: 'h2',
            classNames: [CSS_CLASSES.FOOTER_TITLE],
            text: '',
            callback: null,
        }).getElement();
        const footerLink = document.createElement('a');
        footerLink.href = RSSCHOOL_LINK;
        footerLink.classList.add('footer_logo-link');
        const rsSchoolLogo = document.createElement('img');
        rsSchoolLogo.classList.add(CSS_CLASSES.FOOTER_LOGO);
        if (rsSchoolLogo) {
            rsSchoolLogo.src = footerLogo;
        }
        footerLink.append(rsSchoolLogo);
        const parOne = document.createElement('p');
        parOne.classList.add('copyright');
        const parTwo = document.createElement('p');
        parTwo.textContent = '2023';
        parTwo.classList.add('copyright');
        const gitHubLink = document.createElement('a');
        gitHubLink.textContent = TEXT_CONTENT;
        gitHubLink.href = GITHUB_LINK;
        parOne.append(gitHubLink);
        if (headerTitle && footerLink) {
            footerLink.append(rsSchoolLogo);
            headerTitle.textContent = TEXT_CONTENT;
            (_a = this.elementObj) === null || _a === void 0 ? void 0 : _a.appendElement(footerLink);
            (_b = this.elementObj) === null || _b === void 0 ? void 0 : _b.appendElement(parOne);
            (_c = this.elementObj) === null || _c === void 0 ? void 0 : _c.appendElement(parTwo);
        }
    }
}
exports.FooterElement = FooterElement;


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderElement = void 0;
const create_element_1 = __importDefault(__webpack_require__(/*! ../element/create-element */ "./src/components/element/create-element.ts"));
const element_view_1 = __webpack_require__(/*! ../element/element-view */ "./src/components/element/element-view.ts");
__webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
const CSS_CLASSES = {
    HEADER: 'header',
    CONTAINER: '_container',
    MAIN: 'main',
    tableBody: 'table-body',
    table: 'table-body__table',
};
const TEXT_CONTENT = 'CSS Diner';
class HeaderElement extends element_view_1.ElementView {
    constructor() {
        const headerData = {
            tag: 'header',
            classNames: [CSS_CLASSES.HEADER],
            text: '',
            callback: null,
        };
        super(headerData);
        this.additionElement();
    }
    additionElement() {
        var _a;
        const headerTitle = new create_element_1.default({
            tag: 'h1',
            classNames: ['header__title'],
            text: '',
            callback: null,
        }).getElement();
        if (headerTitle) {
            headerTitle.textContent = TEXT_CONTENT;
            (_a = this.elementObj) === null || _a === void 0 ? void 0 : _a.appendElement(headerTitle);
        }
    }
}
exports.HeaderElement = HeaderElement;


/***/ }),

/***/ "./src/components/levels/levels.ts":
/*!*****************************************!*\
  !*** ./src/components/levels/levels.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LevelsElement = void 0;
const element_view_1 = __webpack_require__(/*! ../element/element-view */ "./src/components/element/element-view.ts");
const create_element_1 = __importDefault(__webpack_require__(/*! ../element/create-element */ "./src/components/element/create-element.ts"));
__webpack_require__(/*! ./levels.scss */ "./src/components/levels/levels.scss");
const CSS_CLASSES = {
    levelsBlock: 'levels-block',
    levelsBlockTitle: 'levels-block__title',
    levels: 'levels-block__levels',
};
class LevelsElement extends element_view_1.ElementView {
    constructor(gameTasks, currentLevel) {
        var _a, _b;
        const levelsData = {
            tag: 'div',
            classNames: [CSS_CLASSES.levels],
            text: '',
            callback: null,
        };
        super(levelsData);
        this.elementContainer = null;
        this.element = (_a = this.elementObj) === null || _a === void 0 ? void 0 : _a.getElement();
        this.gameLevels = gameTasks;
        this.completeLevels = localStorage.getItem(`completeLevels`)
            ? [...JSON.parse((_b = localStorage.getItem(`completeLevels`)) !== null && _b !== void 0 ? _b : '{}')]
            : [];
        this.currentLevel = currentLevel;
        this.additionalElement();
        this.start(gameTasks, this.currentLevel);
    }
    additionalElement() {
        var _a;
        const levelsBlockData = {
            tag: 'aside',
            classNames: [CSS_CLASSES.levelsBlock],
            text: '',
            callback: null,
        };
        const levelsContainer = new create_element_1.default(levelsBlockData).getElement();
        const levelsBlockTitleData = {
            tag: 'h2',
            classNames: [CSS_CLASSES.levelsBlockTitle],
            text: 'LEVELS',
            callback: null,
        };
        const levelsTitle = new create_element_1.default(levelsBlockTitleData).getElement();
        const input = (_a = this.elementObj) === null || _a === void 0 ? void 0 : _a.getElement();
        if (levelsTitle && input) {
            levelsContainer === null || levelsContainer === void 0 ? void 0 : levelsContainer.append(levelsTitle);
            levelsContainer === null || levelsContainer === void 0 ? void 0 : levelsContainer.append(input);
        }
        this.elementContainer = levelsContainer;
    }
    checkLevels(value) {
        for (let i = 0; i < this.completeLevels.length; i += 1) {
            if (this.completeLevels[i].indexVal === value) {
                return true;
            }
        }
        return false;
    }
    checkHelpLevels(value) {
        for (let i = 0; i < this.completeLevels.length; i += 1) {
            if (this.completeLevels[i].indexVal === value && this.completeLevels[i].help) {
                return true;
            }
        }
        return false;
    }
    getUncompleteLevel() {
        const completeNumbers = [];
        const unCompleteLevels = [];
        this.completeLevels.forEach((item, index) => {
            completeNumbers.push(item.indexVal);
        });
        for (let i = 0; i <= 9; i += 1) {
            if (!completeNumbers.includes(i)) {
                unCompleteLevels.push(i);
            }
        }
        return Math.min(...unCompleteLevels);
    }
    start(gameTasks, currentLevel, restart) {
        if (restart) {
            this.completeLevels = [];
        }
        if (this.element) {
            this.element.innerHTML = '';
        }
        gameTasks.forEach((level, index) => {
            var _a;
            const levelElement = document.createElement('div');
            levelElement.id = String(level.idLevel);
            const levelTitle = document.createElement('h3');
            levelTitle.classList.add('levels-block__item-title');
            levelTitle.textContent = level.title;
            const levelText = document.createElement('h4');
            levelText.classList.add('levels-block__item-text');
            levelText.textContent = level.taskText;
            const levelStatus = document.createElement('div');
            levelStatus.classList.add('levels-block__level-status');
            const levelStatusTitle = document.createElement('p');
            levelStatusTitle.classList.add('levels-block__level-title');
            levelStatusTitle.textContent = 'Uncomplete task';
            const levelStatusImg = document.createElement('img');
            levelStatusImg.classList.add('levels-block__level__uncomplete');
            // if (this.completeLevels.includes(index)) {
            if (this.checkLevels(index) && !this.checkHelpLevels(index)) {
                levelStatusImg.className = 'levels-block__level__complete';
                levelStatusTitle.textContent = 'Complete task';
                levelStatusTitle.style.color = 'green';
            }
            if (this.checkLevels(index) && this.checkHelpLevels(index)) {
                levelStatusImg.className = 'levels-block__level__help-complete';
                levelStatusTitle.textContent = 'Complete with help';
                levelStatusTitle.style.color = 'yellow';
            }
            levelStatus.append(levelStatusTitle);
            levelStatus.append(levelStatusImg);
            levelElement.append(levelTitle);
            levelElement.append(levelText);
            levelElement.append(levelStatus);
            if (index === currentLevel) {
                levelElement.classList.add('levels-block__item__active');
            }
            levelElement.classList.add('levels-block__item');
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(levelElement);
        });
    }
    setStatusLevel({ indexVal, help }) {
        if (!this.checkLevels(indexVal)) {
            this.completeLevels.push({ indexVal, help });
            localStorage.removeItem('completeLevels');
            localStorage.setItem('completeLevels', JSON.stringify(this.completeLevels));
        }
    }
    checkResult(answer, currentLevel) {
        return this.gameLevels[currentLevel].result.includes(answer);
    }
    getHTMLElement() {
        return this.elementContainer;
    }
    getCompleteLevels() {
        return this.completeLevels;
    }
}
exports.LevelsElement = LevelsElement;


/***/ }),

/***/ "./src/components/levels/leves-data.ts":
/*!*********************************************!*\
  !*** ./src/components/levels/leves-data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GAME_TASKS = void 0;
exports.GAME_TASKS = [
    {
        title: 'Level 1',
        idLevel: 0,
        taskText: 'Write tag selector',
        tableClass: 'table-body__table__one',
        result: ['plate'],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                tooltip: `<plate/>`,
                target: true,
                closeTag: 'plate',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'pickle',
                tooltip: `<pickle/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cup',
                tooltip: `<cup/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 2',
        idLevel: 1,
        taskText: 'Select element with nth-child()',
        tableClass: 'table-body__table__two',
        result: ['table:nth-child(2)', 'div:nth-child(2)'],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                closeTag: 'plate',
                tooltip: `<plate/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cup',
                target: true,
                tooltip: `<cup/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'pickle',
                tooltip: `<pickle/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 3',
        idLevel: 2,
        taskText: 'Find nested element by any selector',
        tableClass: 'table-body__table__three',
        result: ['#spoon-item', 'spoon', '.table plate cup spoon'],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                closeTag: 'plate',
                tooltip: `<plate/>`,
                margin: 10,
                children: [
                    {
                        tag: 'div',
                        text: 'cup',
                        closeTag: 'cup',
                        tooltip: `<cup/>`,
                        margin: 20,
                        children: [
                            {
                                tag: 'div',
                                text: 'spoon',
                                id: 'spoon-item',
                                tooltip: `<spoon id='spoon-item'/>`,
                                margin: 20,
                                target: true,
                                children: null,
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'div',
                text: 'apple',
                tooltip: `<apple/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cherry',
                tooltip: `<cherry/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 4',
        idLevel: 3,
        taskText: 'Select element by their id',
        tableClass: 'table-body__table__four',
        result: ['#pickleElement'],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                closeTag: 'plate',
                tooltip: `<plate/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'pickle',
                id: 'pickleElement',
                tooltip: `<pickle/>`,
                target: true,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cup',
                tooltip: `<cup/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 5',
        idLevel: 4,
        taskText: 'Write chain of classes',
        tableClass: 'table-body__table__five',
        result: ['.table .board-item .apple-item', `:nth-child(2)`],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                closeTag: 'plate',
                tooltip: `<plate/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'board',
                class: 'board-item',
                closeTag: 'board',
                tooltip: `<board/>`,
                margin: 10,
                children: [
                    {
                        tag: 'div',
                        text: 'pickle',
                        tooltip: `<pickle/>`,
                        margin: 15,
                        children: null,
                    },
                    {
                        tag: 'div',
                        text: 'apple',
                        class: 'apple-item',
                        tooltip: `<apple/>`,
                        target: true,
                        margin: 15,
                        children: null,
                    },
                ],
            },
            {
                tag: 'div',
                text: 'cup',
                tooltip: `<cup/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 6',
        idLevel: 5,
        taskText: 'Combine selectors',
        tableClass: 'table-body__table__six',
        result: ['.plate-item.white', 'div .plate-item.white', '.table .plate-item.white'],
        markup: [
            {
                tag: 'div',
                text: 'plate',
                target: true,
                closeTag: 'plate',
                class: 'plate-item white',
                tooltip: '<plate class="plate-item white"/>',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'pickle',
                tooltip: '<pickle/>',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cup',
                tooltip: '<cup/>',
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 7',
        idLevel: 6,
        taskText: 'Find element with pseudo-class :has()',
        tableClass: 'table-body__table__seven',
        result: ['board:has(.pear-item)', 'board:has(pear)'],
        markup: [
            {
                tag: 'div',
                text: 'board',
                closeTag: 'board',
                tooltip: '<board/>',
                margin: 10,
                children: [
                    {
                        tag: 'div',
                        text: 'pear',
                        class: 'pear-item',
                        tooltip: '<pear class="pear-item"/>',
                        target: true,
                        margin: 10,
                        children: null,
                    },
                ],
            },
            {
                tag: 'div',
                text: 'apple',
                tooltip: '<apple/>',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cup',
                tooltip: '<cup/>',
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 8',
        idLevel: 7,
        taskText: 'Find element with pseudo-class :not()',
        tableClass: 'table-body__table__eight',
        result: ['.table:not(.board-item,.apple-item)', '.table:not(board,apple)', 'div:not(board,apple)', '.table:not(board,apple)', '.div:not(.board-item,.apple-item)'],
        markup: [
            {
                tag: 'div',
                text: 'board',
                closeTag: 'board',
                tooltip: '<board/>',
                class: 'board-item',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'apple',
                tooltip: '<apple/>',
                class: 'apple-item',
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'watermelon',
                tooltip: '<watermelon/>',
                class: 'watermelon-item',
                target: true,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 9',
        idLevel: 8,
        taskText: 'Find element with pseudo-class :first-child',
        tableClass: 'table-body__table__nine',
        result: ['.table:first-child', 'div:first-child'],
        markup: [
            {
                tag: 'div',
                text: 'apple',
                target: true,
                closeTag: 'apple',
                tooltip: `<apple/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cherry',
                tooltip: `<cherry/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'watermelon',
                tooltip: `<watermelon/>`,
                margin: 10,
                children: null,
            },
        ],
    },
    {
        title: 'Level 10',
        idLevel: 9,
        taskText: 'Find element with pseudo-class :last-child',
        tableClass: 'table-body__table__ten',
        result: ['.table:last-child', 'div:last-child'],
        markup: [
            {
                tag: 'div',
                text: 'apple',
                closeTag: 'apple',
                tooltip: `<apple/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'cherry',
                tooltip: `<cherry/>`,
                margin: 10,
                children: null,
            },
            {
                tag: 'div',
                text: 'watermelon',
                target: true,
                tooltip: `<watermelon/>`,
                margin: 10,
                children: null,
            },
        ],
    },
];


/***/ }),

/***/ "./src/components/main/main.ts":
/*!*************************************!*\
  !*** ./src/components/main/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainElement = void 0;
const element_view_1 = __webpack_require__(/*! ../element/element-view */ "./src/components/element/element-view.ts");
__webpack_require__(/*! ./main.scss */ "./src/components/main/main.scss");
const CSS_CLASSES = {
    HEADER: 'header',
    CONTAINER: '_container',
    MAIN: 'main',
    tableBody: 'table-body',
    table: 'table-body__table',
    levelsBlock: 'levels-block',
    levelsBlockTitle: 'levels-block__title',
};
class MainElement extends element_view_1.ElementView {
    constructor() {
        const mainData = {
            tag: 'main',
            classNames: [CSS_CLASSES.MAIN],
            text: '',
            callback: null,
        };
        super(mainData);
    }
}
exports.MainElement = MainElement;


/***/ }),

/***/ "./src/components/sanbox/sanbox-css/input-button.ts":
/*!**********************************************************!*\
  !*** ./src/components/sanbox/sanbox-css/input-button.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputButton = void 0;
const CSS_CLASSES = {
    inputButton: 'css-sandbox__button',
};
const BUTTON_TEXT = 'ENTER';
class InputButton {
    constructor() {
        this.element = document.createElement('button');
        this.createElement();
    }
    createElement() {
        if (!this.element) {
            throw new Error('');
        }
        this.element.textContent = BUTTON_TEXT;
        this.element.classList.add(CSS_CLASSES.inputButton);
    }
    getElement() {
        return this.element;
    }
}
exports.InputButton = InputButton;


/***/ }),

/***/ "./src/components/sanbox/sanbox-css/input-element.ts":
/*!***********************************************************!*\
  !*** ./src/components/sanbox/sanbox-css/input-element.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputElement = void 0;
const INPUT_PLACEHOLDER = 'Write your CSS Selector';
class InputElement {
    constructor() {
        this.inputElement = document.createElement('input');
        this.containerBlock = document.createElement('div');
        this.createElement();
    }
    createElement() {
        var _a, _b;
        if (!this.inputElement) {
            throw new Error('');
        }
        (_a = this.containerBlock) === null || _a === void 0 ? void 0 : _a.classList.add('css-sandbox__input-block');
        this.inputElement.placeholder = INPUT_PLACEHOLDER;
        this.inputElement.type = 'text';
        this.inputElement.value = '';
        this.inputElement.classList.add('css-sandbox__input');
        (_b = this.containerBlock) === null || _b === void 0 ? void 0 : _b.append(this.inputElement);
    }
    failedState() {
        var _a;
        (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.classList.add('css-sandbox__input__failed');
        setTimeout(() => {
            var _a;
            (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.classList.remove('css-sandbox__input__failed');
        }, 400);
    }
    getElement() {
        return this.containerBlock;
    }
    clearInput() {
        if (this.inputElement) {
            this.inputElement.value = '';
        }
    }
    getInputValue() {
        var _a;
        if (!this.inputElement) {
            throw new Error('');
        }
        return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.value;
    }
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.value += value;
        }
    }
}
exports.InputElement = InputElement;


/***/ }),

/***/ "./src/components/sanbox/sandbox-html.ts":
/*!***********************************************!*\
  !*** ./src/components/sanbox/sandbox-html.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SandboxHtmlElement = void 0;
const element_view_1 = __webpack_require__(/*! ../element/element-view */ "./src/components/element/element-view.ts");
const leves_data_1 = __webpack_require__(/*! ../levels/leves-data */ "./src/components/levels/leves-data.ts");
const CSS_CLASSES = {
    sandboxCss: 'sandbox-body__html',
    htmlNumbers: 'sandbox-body__numbers',
    htmlEditor: 'sandbox-body__editor',
};
const HTML_NUMBERS_TEXT = '1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7 <br /> 8 <br /> 9 <br /> 10 <br /> 11 <br /> 12 <br /> 13 <br /> 14 <br /> 15 <br /> 16<br /> 17<br /> 18<br /> 19<br /> 20 <br /> 21 <br /> 22';
class SandboxHtmlElement extends element_view_1.ElementView {
    constructor(currentLevel) {
        var _a;
        const headerData = {
            tag: 'div',
            classNames: [CSS_CLASSES.sandboxCss],
            text: '',
            callback: null,
        };
        super(headerData);
        this.element = (_a = this.elementObj) === null || _a === void 0 ? void 0 : _a.getElement();
        this.htmlNumbers = null;
        this.htmlEditor = null;
        this.additionElement();
        if (this.htmlEditor) {
            this.fillHtmlViewer(leves_data_1.GAME_TASKS[currentLevel].markup, this.htmlEditor);
        }
    }
    additionElement() {
        var _a, _b;
        const htmlNumbersData = {
            tag: 'div',
            classNames: [CSS_CLASSES.htmlNumbers],
            text: '',
            callback: null,
        };
        this.htmlNumbers = new element_view_1.ElementView(htmlNumbersData).getHTMLElement();
        if (this.htmlNumbers) {
            this.htmlNumbers.innerHTML = HTML_NUMBERS_TEXT;
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(this.htmlNumbers);
        }
        const htmlEditorData = {
            tag: 'div',
            classNames: [CSS_CLASSES.htmlEditor],
            text: '',
            callback: null,
        };
        this.htmlEditor = new element_view_1.ElementView(htmlEditorData).getHTMLElement();
        if (this.htmlEditor) {
            (_b = this.element) === null || _b === void 0 ? void 0 : _b.append(this.htmlEditor);
        }
    }
    printCode(markup, itemBox) {
        const box = itemBox;
        const markupData = [];
        markup.forEach((item) => {
            const itemDiv = document.createElement('div');
            if (!item.children) {
                // itemDiv.textContent = item.text;
                if (item.id && !item.class) {
                    itemDiv.innerHTML = `&lt;${item.text} id="${item.id}"/&gt;`;
                }
                if (!item.id && item.class) {
                    itemDiv.innerHTML = `&lt;${item.text} class="${item.class}"/&gt;`;
                }
                if (item.id && item.class) {
                    itemDiv.innerHTML = `&lt;${item.text} id="${item.id}" class="${item.class}"/&gt;`;
                }
                if (!item.id && !item.class) {
                    itemDiv.innerHTML = `&lt;${item.text}/&gt;`;
                }
                itemDiv.style.marginLeft = `${item.margin}px`;
                markupData.push(itemDiv.outerHTML);
            }
            else {
                this.printCode(item.children, itemDiv);
                let parentString = `&lt;${item.text}&gt;`;
                if (item.id && !item.class) {
                    parentString = `&lt;${item.text} id="${item.id}"/&gt;`;
                }
                if (!item.id && item.class) {
                    parentString = `&lt;${item.text} class="${item.class}"/&gt;`;
                }
                if (item.id && item.class) {
                    parentString = `&lt;${item.text} id="${item.id}" class="${item.class}"/&gt;`;
                }
                itemDiv.insertAdjacentHTML('afterbegin', parentString);
                itemDiv.insertAdjacentHTML('beforeend', `&lt;/${item.closeTag}&gt;`);
                itemDiv.style.marginLeft = `${item.margin}px`;
                markupData.push(itemDiv.outerHTML);
            }
        });
        if (box) {
            box.innerHTML = markupData.join('');
        }
    }
    correctCode() {
        var _a, _b;
        (_a = this.htmlEditor) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', `&lt;div class="table"&gt;`);
        (_b = this.htmlEditor) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', `&lt;/div&gt;`);
    }
    clearViewer() {
        if (this.htmlEditor) {
            this.htmlEditor.innerHTML = '';
        }
    }
    fillHtmlViewer(markup, itemBox = this.htmlEditor) {
        this.clearViewer();
        this.printCode(markup, itemBox);
        this.correctCode();
    }
}
exports.SandboxHtmlElement = SandboxHtmlElement;


/***/ }),

/***/ "./src/components/table/table.ts":
/*!***************************************!*\
  !*** ./src/components/table/table.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const create_element_1 = __importDefault(__webpack_require__(/*! ../element/create-element */ "./src/components/element/create-element.ts"));
const leves_data_1 = __webpack_require__(/*! ../levels/leves-data */ "./src/components/levels/leves-data.ts");
const CSS_CLASSES = {
    HEADER: 'header',
    CONTAINER: '_container',
    MAIN: 'main',
    tableBody: 'table-body',
    table: 'table-body__table',
    table__one: 'table-body__table__one',
    table__two: 'table-body__table__two',
    plateElement: 'sandbox-body__plate',
};
class Table {
    constructor(currentLevel) {
        this.table = null;
        this.additionElement();
        this.targetElement = null;
        this.targetElementHideClass = '';
        this.targetElementData = [];
        if (this.table) {
            this.fillTable(leves_data_1.GAME_TASKS[currentLevel].markup, this.table);
        }
    }
    additionElement() {
        const tableData = {
            tag: 'div',
            classNames: [CSS_CLASSES.table__one],
            text: '',
            callback: null,
        };
        this.table = new create_element_1.default(tableData).getElement();
    }
    setClasses(cssClass) {
        if (this.table) {
            this.table.className = cssClass;
        }
    }
    finallyMessage() {
        var _a;
        const finallyMessage = document.createElement('div');
        finallyMessage.classList.add('finally-message');
        finallyMessage.textContent = `You are BEST CSS-Programmer! Click RESTART and try again!`;
        (_a = this.table) === null || _a === void 0 ? void 0 : _a.append(finallyMessage);
    }
    clearTable() {
        if (this.table) {
            this.table.innerHTML = '';
        }
    }
    fillTable(markup, container) {
        markup.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add(`sandbox-body__${item.text}`);
            div.dataset.tooltip = item.text;
            let tooltipHtmlElement;
            div.onmouseover = (event) => {
                var _a;
                const { target } = event;
                if (target && target instanceof HTMLElement) {
                    // const toolTipText = `<${target.dataset.tooltip}/>`;
                    const toolTipText = item.tooltip;
                    tooltipHtmlElement = document.createElement('div');
                    if (toolTipText) {
                        tooltipHtmlElement.textContent = toolTipText;
                    }
                    tooltipHtmlElement.className = 'table-body__tooltip';
                    (_a = this.table) === null || _a === void 0 ? void 0 : _a.append(tooltipHtmlElement);
                    const position = target.getBoundingClientRect();
                    let left = position.left + (target.offsetWidth - tooltipHtmlElement.offsetWidth) / 2;
                    if (left < 0)
                        left = 0;
                    let top = position.top - tooltipHtmlElement.offsetHeight - 5;
                    if (top < 0) {
                        top = position.top + target.offsetHeight + 5;
                    }
                    tooltipHtmlElement.style.left = `${left}px`;
                    tooltipHtmlElement.style.top = `${top}px`;
                }
            };
            div.onmouseout = (event) => {
                if (tooltipHtmlElement) {
                    tooltipHtmlElement.remove();
                    tooltipHtmlElement = null;
                }
            };
            container.append(div);
            if (item.target) {
                this.targetElementData.push([div, item.text]);
            }
            if (item.children && this.table) {
                this.fillTable(item.children, this.table);
            }
        });
    }
    hideTargetElement() {
        this.targetElementData.forEach((targetElement) => {
            targetElement[0].classList.add(`sandbox-body__${targetElement[1]}__hide`);
        });
    }
    getЕTargetHTMLElement() {
        return this.targetElement;
    }
    getHTMLElement() {
        return this.table;
    }
}
exports.Table = Table;


/***/ }),

/***/ "./src/assets/footer-rsschool-logo.svg":
/*!*********************************************!*\
  !*** ./src/assets/footer-rsschool-logo.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ad178c0df28bc133be34.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts");
const app = new app_1.AppPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNi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QWlCO0FBQzdFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSGI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMseURBQXNCO0FBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3M/ZTNmZCIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcz83OGM0Iiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvbGV2ZWxzL2xldmVscy5zY3NzP2Y5MzciLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9tYWluL21haW4uc2Nzcz8yMzdlIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtbGV2ZWxzLnNjc3M/NmVlMyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9zdHlsZXMuc2Nzcz8wMjlhIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL2VsZW1lbnQvY3JlYXRlLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9lbGVtZW50L2VsZW1lbnQtdmlldy50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvbGV2ZWxzL2xldmVscy50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL2xldmVscy9sZXZlcy1kYXRhLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9tYWluLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvc2FuYm94L3NhbmJveC1jc3MvaW5wdXQtYnV0dG9uLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvc2FuYm94L3NhbmJveC1jc3MvaW5wdXQtZWxlbWVudC50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL3NhbmJveC9zYW5kYm94LWh0bWwudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcFBhZ2UgPSB2b2lkIDA7XG5jb25zdCBjcmVhdGVfZWxlbWVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9lbGVtZW50L2NyZWF0ZS1lbGVtZW50XCIpKTtcbmNvbnN0IGZvb3Rlcl8xID0gcmVxdWlyZShcIi4uL2Zvb3Rlci9mb290ZXJcIik7XG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWFkZXIvaGVhZGVyXCIpO1xuY29uc3QgbWFpbl8xID0gcmVxdWlyZShcIi4uL21haW4vbWFpblwiKTtcbmNvbnN0IHRhYmxlXzEgPSByZXF1aXJlKFwiLi4vdGFibGUvdGFibGVcIik7XG5jb25zdCBpbnB1dF9lbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vc2FuYm94L3NhbmJveC1jc3MvaW5wdXQtZWxlbWVudFwiKTtcbmNvbnN0IGxldmVsc18xID0gcmVxdWlyZShcIi4uL2xldmVscy9sZXZlbHNcIik7XG5jb25zdCBzYW5kYm94X2h0bWxfMSA9IHJlcXVpcmUoXCIuLi9zYW5ib3gvc2FuZGJveC1odG1sXCIpO1xuY29uc3QgaW5wdXRfYnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vc2FuYm94L3NhbmJveC1jc3MvaW5wdXQtYnV0dG9uXCIpO1xucmVxdWlyZShcIi4uL21haW4vbWFpbi5zY3NzXCIpO1xucmVxdWlyZShcIi4uLy4uL3N0eWxlcy5zY3NzXCIpO1xucmVxdWlyZShcIi4uL3RhYmxlL3RhYmxlLWxldmVscy5zY3NzXCIpO1xuY29uc3QgbGV2ZXNfZGF0YV8xID0gcmVxdWlyZShcIi4uL2xldmVscy9sZXZlcy1kYXRhXCIpO1xuY29uc3QgQ1NTX0NMQVNTRVMgPSB7XG4gICAgSEVBREVSOiAnaGVhZGVyJyxcbiAgICBDT05UQUlORVI6ICdfY29udGFpbmVyJyxcbiAgICBNQUlOOiAnbWFpbicsXG4gICAgdGFibGVCb2R5OiAndGFibGUtYm9keScsXG4gICAgdGFibGU6ICd0YWJsZS1ib2R5X190YWJsZScsXG59O1xuY2xhc3MgQXBwUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5jc3NJbnB1dCA9IG5ldyBpbnB1dF9lbGVtZW50XzEuSW5wdXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuYnV0dG9uSW5wdXQgPSBuZXcgaW5wdXRfYnV0dG9uXzEuSW5wdXRCdXR0b24oKTtcbiAgICAgICAgY29uc3Qgc3RhdGVMZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50TGV2ZWwnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBzdGF0ZUxldmVsID8gK3N0YXRlTGV2ZWwgOiAwO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBtYWluXzEuTWFpbkVsZW1lbnQoKS5nZXRIVE1MRWxlbWVudCgpO1xuICAgICAgICB0aGlzLnRhYmxlID0gbmV3IHRhYmxlXzEuVGFibGUodGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnRhYmxlRWxlbWVudCA9IHRoaXMudGFibGUuZ2V0SFRNTEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5zYW5kYm94Qm9keSA9IG51bGw7XG4gICAgICAgIHRoaXMuY3NzSW5wdXRFbGVtZW50ID0gdGhpcy5jc3NJbnB1dC5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY3NzQnV0dG9uSGVscCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3NzQnV0dG9uUmVzdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnV0dG9uSW5wdXRFbGVtZW50ID0gdGhpcy5idXR0b25JbnB1dC5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IGxldmVsc18xLkxldmVsc0VsZW1lbnQobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1MsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgdGhpcy5sZXZlbHNFbGVtZW50ID0gdGhpcy5sZXZlbHMuZ2V0SFRNTEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5sZXZlbHNBbGxFbGVtZW50cyA9IChfYSA9IHRoaXMubGV2ZWxzRWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIHRoaXMuaHRtbFNhbmRib3ggPSBuZXcgc2FuZGJveF9odG1sXzEuU2FuZGJveEh0bWxFbGVtZW50KHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgdGhpcy5odG1sU2FuZGJveEVsZW1lbnQgPSB0aGlzLmh0bWxTYW5kYm94LmdldEhUTUxFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuZ2V0SFRNTFBhZ2UoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBnZXRIVE1MUGFnZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjb250YWluZXJEYXRhID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDU1NfQ0xBU1NFUy5DT05UQUlORVJdLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdChjb250YWluZXJEYXRhKS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmNyZWF0ZUhlYWRlckJsb2NrKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkJsb2NrKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9vdGVyQmxvY2soKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgKF9hID0gZG9jdW1lbnQuYm9keSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUhlYWRlckJsb2NrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG5ldyBoZWFkZXJfMS5IZWFkZXJFbGVtZW50KCkuZ2V0SFRNTEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoaGVhZGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVGb290ZXJCbG9jaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBuZXcgZm9vdGVyXzEuRm9vdGVyRWxlbWVudCgpLmdldEhUTUxFbGVtZW50KCk7XG4gICAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGZvb3Rlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlTWFpbkJsb2NrKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFsnY29udGVudC13cmFwcGVyJ10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IG1haW5CbG9jayA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFsnY29udGVudC1tYWluLWJsb2NrJ10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHNhbmRib3hCb2R5ID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogWydzYW5kYm94LWJvZHknXSxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5zYW5kYm94Qm9keSA9IHNhbmRib3hCb2R5O1xuICAgICAgICBjb25zdCBzYW5kYm94Qm9keUNzc1dyYXBwZXIgPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbJ3NhbmRib3gtYm9keV9fY3NzJywgJ2Nzcy1zYW5kYm94J10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHNhbmRib3hCb2R5Q3NzVGl0bGUgPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbJ2Nzcy1zYW5kYm94X190aXRsZSddLFxuICAgICAgICAgICAgdGV4dDogJ0NTUyBFZGl0b3InLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY3NzQnV0dG9uc0Jsb2NrID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogWydjc3Mtc2FuZGJveF9fYnV0dG9ucy1ibG9jayddLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjc3NCdXR0b25IZWxwID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogWydjc3Mtc2FuZGJveF9fYnV0dG9uLWhlbHAnXSxcbiAgICAgICAgICAgIHRleHQ6ICdIZWxwJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuY3NzQnV0dG9uSGVscCA9IGNzc0J1dHRvbkhlbHA7XG4gICAgICAgIGNvbnN0IGNzc0J1dHRvblJlc3RhcnQgPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbJ2Nzcy1zYW5kYm94X19idXR0b24tcmVzdGFydCddLFxuICAgICAgICAgICAgdGV4dDogJ1Jlc3RhcnQnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH0pLmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jc3NCdXR0b25SZXN0YXJ0ID0gY3NzQnV0dG9uUmVzdGFydDtcbiAgICAgICAgaWYgKHRoaXMuY3NzSW5wdXRFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbklucHV0RWxlbWVudCAmJlxuICAgICAgICAgICAgdGhpcy5tYWluICYmXG4gICAgICAgICAgICBjc3NCdXR0b25IZWxwICYmXG4gICAgICAgICAgICBjc3NCdXR0b25SZXN0YXJ0ICYmXG4gICAgICAgICAgICBzYW5kYm94Qm9keUNzc1RpdGxlICYmXG4gICAgICAgICAgICBjc3NCdXR0b25zQmxvY2sgJiZcbiAgICAgICAgICAgIHNhbmRib3hCb2R5Q3NzV3JhcHBlciAmJlxuICAgICAgICAgICAgdGhpcy50YWJsZUVsZW1lbnQgJiZcbiAgICAgICAgICAgIHNhbmRib3hCb2R5ICYmXG4gICAgICAgICAgICBtYWluQmxvY2sgJiZcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyICYmXG4gICAgICAgICAgICB0aGlzLmh0bWxTYW5kYm94RWxlbWVudCAmJlxuICAgICAgICAgICAgdGhpcy5sZXZlbHNFbGVtZW50KSB7XG4gICAgICAgICAgICBjc3NCdXR0b25zQmxvY2sgPT09IG51bGwgfHwgY3NzQnV0dG9uc0Jsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjc3NCdXR0b25zQmxvY2suYXBwZW5kKGNzc0J1dHRvbkhlbHApO1xuICAgICAgICAgICAgY3NzQnV0dG9uc0Jsb2NrID09PSBudWxsIHx8IGNzc0J1dHRvbnNCbG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3NzQnV0dG9uc0Jsb2NrLmFwcGVuZChjc3NCdXR0b25SZXN0YXJ0KTtcbiAgICAgICAgICAgIHNhbmRib3hCb2R5Q3NzV3JhcHBlciA9PT0gbnVsbCB8fCBzYW5kYm94Qm9keUNzc1dyYXBwZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhbmRib3hCb2R5Q3NzV3JhcHBlci5hcHBlbmQoc2FuZGJveEJvZHlDc3NUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmNzc0lucHV0RWxlbWVudC5hcHBlbmQodGhpcy5idXR0b25JbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgc2FuZGJveEJvZHlDc3NXcmFwcGVyID09PSBudWxsIHx8IHNhbmRib3hCb2R5Q3NzV3JhcHBlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2FuZGJveEJvZHlDc3NXcmFwcGVyLmFwcGVuZCh0aGlzLmNzc0lucHV0RWxlbWVudCk7XG4gICAgICAgICAgICBzYW5kYm94Qm9keUNzc1dyYXBwZXIgPT09IG51bGwgfHwgc2FuZGJveEJvZHlDc3NXcmFwcGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzYW5kYm94Qm9keUNzc1dyYXBwZXIuYXBwZW5kKGNzc0J1dHRvbnNCbG9jayk7XG4gICAgICAgICAgICBzYW5kYm94Qm9keSA9PT0gbnVsbCB8fCBzYW5kYm94Qm9keSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2FuZGJveEJvZHkuYXBwZW5kKHNhbmRib3hCb2R5Q3NzV3JhcHBlcik7XG4gICAgICAgICAgICBzYW5kYm94Qm9keSA9PT0gbnVsbCB8fCBzYW5kYm94Qm9keSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2FuZGJveEJvZHkuYXBwZW5kKHRoaXMuaHRtbFNhbmRib3hFbGVtZW50KTtcbiAgICAgICAgICAgIG1haW5CbG9jayA9PT0gbnVsbCB8fCBtYWluQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1haW5CbG9jay5hcHBlbmQodGhpcy50YWJsZUVsZW1lbnQpO1xuICAgICAgICAgICAgbWFpbkJsb2NrID09PSBudWxsIHx8IG1haW5CbG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWFpbkJsb2NrLmFwcGVuZChzYW5kYm94Qm9keSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldENsYXNzZXMobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1NbdGhpcy5jdXJyZW50TGV2ZWxdLnRhYmxlQ2xhc3MpO1xuICAgICAgICAgICAgY29udGVudFdyYXBwZXIgPT09IG51bGwgfHwgY29udGVudFdyYXBwZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRXcmFwcGVyLmFwcGVuZChtYWluQmxvY2spO1xuICAgICAgICAgICAgY29udGVudFdyYXBwZXIgPT09IG51bGwgfHwgY29udGVudFdyYXBwZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRXcmFwcGVyLmFwcGVuZCh0aGlzLmxldmVsc0VsZW1lbnQpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5tYWluKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKGNvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgICAgIChfYiA9IHRoaXMuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kKHRoaXMubWFpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlTGV2ZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy50YWJsZS5jbGVhclRhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLnNldENsYXNzZXMobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1NbdGhpcy5jdXJyZW50TGV2ZWxdLnRhYmxlQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5maWxsVGFibGUobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1NbdGhpcy5jdXJyZW50TGV2ZWxdLm1hcmt1cCwgdGhpcy50YWJsZUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaHRtbFNhbmRib3hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sU2FuZGJveC5maWxsSHRtbFZpZXdlcihsZXZlc19kYXRhXzEuR0FNRV9UQVNLU1t0aGlzLmN1cnJlbnRMZXZlbF0ubWFya3VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KGxldmVzX2RhdGFfMS5HQU1FX1RBU0tTLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmFpbGVkQW5zd2VyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuc2FuZGJveEJvZHkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdzYW5kYm94LWJvZHlfX2Nzc19fZmFsbCcpO1xuICAgICAgICB0aGlzLmNzc0lucHV0LmZhaWxlZFN0YXRlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5zYW5kYm94Qm9keSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ3NhbmRib3gtYm9keV9fY3NzX19mYWxsJyk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxuICAgIGJ1dHRvbkVudGVyQWN0aW9uKCkge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSB0aGlzLmNzc0lucHV0LmdldElucHV0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxzLmNoZWNrUmVzdWx0KGFuc3dlciwgdGhpcy5jdXJyZW50TGV2ZWwpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleFZhbCA9IHRoaXMuY3VycmVudExldmVsO1xuICAgICAgICAgICAgY29uc3QgaGVscCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZXZlbHMuc2V0U3RhdHVzTGV2ZWwoeyBpbmRleFZhbCwgaGVscCB9KTtcbiAgICAgICAgICAgIHRoaXMuY3NzSW5wdXQuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVMZXZlbHMgPSB0aGlzLmxldmVscy5nZXRDb21wbGV0ZUxldmVscygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSBsZXZlc19kYXRhXzEuR0FNRV9UQVNLUy5sZW5ndGggLSAxICYmIGNvbXBsZXRlTGV2ZWxzLmxlbmd0aCA9PT0gbGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMuc2V0U3RhdHVzTGV2ZWwoeyBpbmRleFZhbDogMTAsIGhlbHAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMuc3RhcnQobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1MsIDEwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLmhpZGVUYXJnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuY2xlYXJUYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLmZpbmFsbHlNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbklucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25JbnB1dEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcGxldGVMZXZlbHMubGVuZ3RoID09PSBsZXZlc19kYXRhXzEuR0FNRV9UQVNLUy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5zZXRTdGF0dXNMZXZlbCh7IGluZGV4VmFsOiAxMCwgaGVscCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5zdGFydChsZXZlc19kYXRhXzEuR0FNRV9UQVNLUywgMTApO1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGUuaGlkZVRhcmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZS5jbGVhclRhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGUuZmluYWxseU1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbklucHV0RWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gdGhpcy5sZXZlbHMuZ2V0VW5jb21wbGV0ZUxldmVsKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudExldmVsJywgU3RyaW5nKHRoaXMuY3VycmVudExldmVsKSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLmhpZGVUYXJnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUxldmVsKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWlsZWRBbnN3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgKF9hID0gdGhpcy5idXR0b25JbnB1dEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uRW50ZXJBY3Rpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIChfYiA9IHRoaXMuY3NzSW5wdXRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQgJiYgZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25FbnRlckFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKF9jID0gdGhpcy5sZXZlbHNFbGVtZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICgocGFyZW50RWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbGV2ZWxzLWJsb2NrX19pdGVtJykpICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuaWQgIT09IFN0cmluZyh0aGlzLmN1cnJlbnRMZXZlbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubGV2ZWxzLmNoZWNrTGV2ZWxzKCtwYXJlbnRFbGVtZW50LmlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9ICtwYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudExldmVsJywgU3RyaW5nKHRoaXMuY3VycmVudExldmVsKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAoX2QgPSB0aGlzLmNzc0J1dHRvblJlc3RhcnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbklucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbklucHV0RWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDA7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jc3NJbnB1dC5jbGVhcklucHV0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZS5jbGVhclRhYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZS5zZXRDbGFzc2VzKGxldmVzX2RhdGFfMS5HQU1FX1RBU0tTW3RoaXMuY3VycmVudExldmVsXS50YWJsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlLmZpbGxUYWJsZShsZXZlc19kYXRhXzEuR0FNRV9UQVNLU1t0aGlzLmN1cnJlbnRMZXZlbF0ubWFya3VwLCB0aGlzLnRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaHRtbFNhbmRib3hFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbFNhbmRib3guZmlsbEh0bWxWaWV3ZXIobGV2ZXNfZGF0YV8xLkdBTUVfVEFTS1NbdGhpcy5jdXJyZW50TGV2ZWxdLm1hcmt1cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KGxldmVzX2RhdGFfMS5HQU1FX1RBU0tTLCB0aGlzLmN1cnJlbnRMZXZlbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAoX2UgPSB0aGlzLmNzc0J1dHRvbkhlbHApID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxldmVzX2RhdGFfMS5HQU1FX1RBU0tTW3RoaXMuY3VycmVudExldmVsXS5yZXN1bHRbMF07XG4gICAgICAgICAgICB0aGlzLmNzc0lucHV0LmNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNzc0lucHV0LnNldElucHV0VmFsdWUocmVzdWx0W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4VmFsID0gdGhpcy5jdXJyZW50TGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlbHAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5zZXRTdGF0dXNMZXZlbCh7IGluZGV4VmFsLCBoZWxwIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQXBwUGFnZSA9IEFwcFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENyZWF0ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KGRhdGEpO1xuICAgIH1cbiAgICBjcmVhdGVFbGVtZW50KGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkYXRhLnRhZyk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGVzKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFRleHRDb250ZW50KGRhdGEpO1xuICAgICAgICB0aGlzLnNldENhbGxiYWNrKGRhdGEpO1xuICAgIH1cbiAgICBzZXRTdHlsZXMoZGF0YSkge1xuICAgICAgICBkYXRhLmNsYXNzTmFtZXMuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gdGhpcy5lbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7IH0pO1xuICAgIH1cbiAgICBzZXRUZXh0Q29udGVudChkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDYWxsYmFjayhkYXRhKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRhdGEuY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVsZW1lbnRWaWV3ID0gdm9pZCAwO1xuY29uc3QgY3JlYXRlX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGUtZWxlbWVudFwiKSk7XG5jbGFzcyBFbGVtZW50VmlldyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudERhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JqID0gbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KGVsZW1lbnREYXRhKTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudChlbGVtZW50RGF0YSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdGFnOiBlbGVtZW50RGF0YS50YWcsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBlbGVtZW50RGF0YS5jbGFzc05hbWVzLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZWxlbWVudE9iaiA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoZGF0YSk7XG4gICAgICAgIHRoaXMuZWxlbWVudE9iaiA9IGVsZW1lbnRPYmo7XG4gICAgfVxuICAgIGdldEhUTUxFbGVtZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudE9iaikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVE1MIEVsZW1lbnQgaXMgbnVsbCEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50T2JqLmdldEVsZW1lbnQoKTtcbiAgICB9XG59XG5leHBvcnRzLkVsZW1lbnRWaWV3ID0gRWxlbWVudFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRm9vdGVyRWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGNyZWF0ZV9lbGVtZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2VsZW1lbnQvY3JlYXRlLWVsZW1lbnRcIikpO1xuY29uc3QgZWxlbWVudF92aWV3XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9lbGVtZW50LXZpZXdcIik7XG5yZXF1aXJlKFwiLi9mb290ZXIuc2Nzc1wiKTtcbmNvbnN0IENTU19DTEFTU0VTID0ge1xuICAgIEZPT1RFUjogJ2Zvb3RlcicsXG4gICAgRk9PVEVSX1RJVExFOiAnZm9vdGVyX190aXRsZScsXG4gICAgRk9PVEVSX0xJTks6ICdmb290ZXJfX2xpbmsnLFxuICAgIEZPT1RFUl9MT0dPOiAnZm9vdGVyX19sb2dvJyxcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xuY29uc3QgZm9vdGVyTG9nbyA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9mb290ZXItcnNzY2hvb2wtbG9nby5zdmcnKTtcbmNvbnN0IFRFWFRfQ09OVEVOVCA9ICdWYWRpbSBTaGlkbG92JztcbmNvbnN0IFJTU0NIT09MX0xJTksgPSAnaHR0cHM6Ly9ycy5zY2hvb2wvanMvJztcbmNvbnN0IEdJVEhVQl9MSU5LID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9WYWRpbXNoaWRsb3YnO1xuY2xhc3MgRm9vdGVyRWxlbWVudCBleHRlbmRzIGVsZW1lbnRfdmlld18xLkVsZW1lbnRWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2Zvb3RlcicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ1NTX0NMQVNTRVMuRk9PVEVSXSxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKGZvb3RlckRhdGEpO1xuICAgICAgICB0aGlzLmFkZGl0aW9uRWxlbWVudCgpO1xuICAgIH1cbiAgICBhZGRpdGlvbkVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogW0NTU19DTEFTU0VTLkZPT1RFUl9USVRMRV0sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGZvb3RlckxpbmsuaHJlZiA9IFJTU0NIT09MX0xJTks7XG4gICAgICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX2xvZ28tbGluaycpO1xuICAgICAgICBjb25zdCByc1NjaG9vbExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcnNTY2hvb2xMb2dvLmNsYXNzTGlzdC5hZGQoQ1NTX0NMQVNTRVMuRk9PVEVSX0xPR08pO1xuICAgICAgICBpZiAocnNTY2hvb2xMb2dvKSB7XG4gICAgICAgICAgICByc1NjaG9vbExvZ28uc3JjID0gZm9vdGVyTG9nbztcbiAgICAgICAgfVxuICAgICAgICBmb290ZXJMaW5rLmFwcGVuZChyc1NjaG9vbExvZ28pO1xuICAgICAgICBjb25zdCBwYXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhck9uZS5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcbiAgICAgICAgY29uc3QgcGFyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJUd28udGV4dENvbnRlbnQgPSAnMjAyMyc7XG4gICAgICAgIHBhclR3by5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcbiAgICAgICAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZ2l0SHViTGluay50ZXh0Q29udGVudCA9IFRFWFRfQ09OVEVOVDtcbiAgICAgICAgZ2l0SHViTGluay5ocmVmID0gR0lUSFVCX0xJTks7XG4gICAgICAgIHBhck9uZS5hcHBlbmQoZ2l0SHViTGluayk7XG4gICAgICAgIGlmIChoZWFkZXJUaXRsZSAmJiBmb290ZXJMaW5rKSB7XG4gICAgICAgICAgICBmb290ZXJMaW5rLmFwcGVuZChyc1NjaG9vbExvZ28pO1xuICAgICAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBURVhUX0NPTlRFTlQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnRPYmopID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRFbGVtZW50KGZvb3RlckxpbmspO1xuICAgICAgICAgICAgKF9iID0gdGhpcy5lbGVtZW50T2JqKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kRWxlbWVudChwYXJPbmUpO1xuICAgICAgICAgICAgKF9jID0gdGhpcy5lbGVtZW50T2JqKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYXBwZW5kRWxlbWVudChwYXJUd28pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Gb290ZXJFbGVtZW50ID0gRm9vdGVyRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IZWFkZXJFbGVtZW50ID0gdm9pZCAwO1xuY29uc3QgY3JlYXRlX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZWxlbWVudC9jcmVhdGUtZWxlbWVudFwiKSk7XG5jb25zdCBlbGVtZW50X3ZpZXdfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50L2VsZW1lbnQtdmlld1wiKTtcbnJlcXVpcmUoXCIuL2hlYWRlci5zY3NzXCIpO1xuY29uc3QgQ1NTX0NMQVNTRVMgPSB7XG4gICAgSEVBREVSOiAnaGVhZGVyJyxcbiAgICBDT05UQUlORVI6ICdfY29udGFpbmVyJyxcbiAgICBNQUlOOiAnbWFpbicsXG4gICAgdGFibGVCb2R5OiAndGFibGUtYm9keScsXG4gICAgdGFibGU6ICd0YWJsZS1ib2R5X190YWJsZScsXG59O1xuY29uc3QgVEVYVF9DT05URU5UID0gJ0NTUyBEaW5lcic7XG5jbGFzcyBIZWFkZXJFbGVtZW50IGV4dGVuZHMgZWxlbWVudF92aWV3XzEuRWxlbWVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJEYXRhID0ge1xuICAgICAgICAgICAgdGFnOiAnaGVhZGVyJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDU1NfQ0xBU1NFUy5IRUFERVJdLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIoaGVhZGVyRGF0YSk7XG4gICAgICAgIHRoaXMuYWRkaXRpb25FbGVtZW50KCk7XG4gICAgfVxuICAgIGFkZGl0aW9uRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IG5ldyBjcmVhdGVfZWxlbWVudF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogWydoZWFkZXJfX3RpdGxlJ10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIGlmIChoZWFkZXJUaXRsZSkge1xuICAgICAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBURVhUX0NPTlRFTlQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnRPYmopID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRFbGVtZW50KGhlYWRlclRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuSGVhZGVyRWxlbWVudCA9IEhlYWRlckVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGV2ZWxzRWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfdmlld18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvZWxlbWVudC12aWV3XCIpO1xuY29uc3QgY3JlYXRlX2VsZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZWxlbWVudC9jcmVhdGUtZWxlbWVudFwiKSk7XG5yZXF1aXJlKFwiLi9sZXZlbHMuc2Nzc1wiKTtcbmNvbnN0IENTU19DTEFTU0VTID0ge1xuICAgIGxldmVsc0Jsb2NrOiAnbGV2ZWxzLWJsb2NrJyxcbiAgICBsZXZlbHNCbG9ja1RpdGxlOiAnbGV2ZWxzLWJsb2NrX190aXRsZScsXG4gICAgbGV2ZWxzOiAnbGV2ZWxzLWJsb2NrX19sZXZlbHMnLFxufTtcbmNsYXNzIExldmVsc0VsZW1lbnQgZXh0ZW5kcyBlbGVtZW50X3ZpZXdfMS5FbGVtZW50VmlldyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVRhc2tzLCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgbGV2ZWxzRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ1NTX0NMQVNTRVMubGV2ZWxzXSxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKGxldmVsc0RhdGEpO1xuICAgICAgICB0aGlzLmVsZW1lbnRDb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSAoX2EgPSB0aGlzLmVsZW1lbnRPYmopID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuZ2FtZUxldmVscyA9IGdhbWVUYXNrcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZUxldmVscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb21wbGV0ZUxldmVsc2ApXG4gICAgICAgICAgICA/IFsuLi5KU09OLnBhcnNlKChfYiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBjb21wbGV0ZUxldmVsc2ApKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAne30nKV1cbiAgICAgICAgICAgIDogW107XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gY3VycmVudExldmVsO1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuc3RhcnQoZ2FtZVRhc2tzLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgfVxuICAgIGFkZGl0aW9uYWxFbGVtZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGxldmVsc0Jsb2NrRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2FzaWRlJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDU1NfQ0xBU1NFUy5sZXZlbHNCbG9ja10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsZXZlbHNDb250YWluZXIgPSBuZXcgY3JlYXRlX2VsZW1lbnRfMS5kZWZhdWx0KGxldmVsc0Jsb2NrRGF0YSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBsZXZlbHNCbG9ja1RpdGxlRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDU1NfQ0xBU1NFUy5sZXZlbHNCbG9ja1RpdGxlXSxcbiAgICAgICAgICAgIHRleHQ6ICdMRVZFTFMnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxldmVsc1RpdGxlID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdChsZXZlbHNCbG9ja1RpdGxlRGF0YSkuZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IChfYSA9IHRoaXMuZWxlbWVudE9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGxldmVsc1RpdGxlICYmIGlucHV0KSB7XG4gICAgICAgICAgICBsZXZlbHNDb250YWluZXIgPT09IG51bGwgfHwgbGV2ZWxzQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsZXZlbHNDb250YWluZXIuYXBwZW5kKGxldmVsc1RpdGxlKTtcbiAgICAgICAgICAgIGxldmVsc0NvbnRhaW5lciA9PT0gbnVsbCB8fCBsZXZlbHNDb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxldmVsc0NvbnRhaW5lci5hcHBlbmQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRhaW5lciA9IGxldmVsc0NvbnRhaW5lcjtcbiAgICB9XG4gICAgY2hlY2tMZXZlbHModmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbXBsZXRlTGV2ZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZUxldmVsc1tpXS5pbmRleFZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrSGVscExldmVscyh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGxldGVMZXZlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlTGV2ZWxzW2ldLmluZGV4VmFsID09PSB2YWx1ZSAmJiB0aGlzLmNvbXBsZXRlTGV2ZWxzW2ldLmhlbHApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldFVuY29tcGxldGVMZXZlbCgpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVOdW1iZXJzID0gW107XG4gICAgICAgIGNvbnN0IHVuQ29tcGxldGVMZXZlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZUxldmVscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29tcGxldGVOdW1iZXJzLnB1c2goaXRlbS5pbmRleFZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICghY29tcGxldGVOdW1iZXJzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgICAgICAgICAgdW5Db21wbGV0ZUxldmVscy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLm1pbiguLi51bkNvbXBsZXRlTGV2ZWxzKTtcbiAgICB9XG4gICAgc3RhcnQoZ2FtZVRhc2tzLCBjdXJyZW50TGV2ZWwsIHJlc3RhcnQpIHtcbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVMZXZlbHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZVRhc2tzLmZvckVhY2goKGxldmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXZlbEVsZW1lbnQuaWQgPSBTdHJpbmcobGV2ZWwuaWRMZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBsZXZlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGxldmVsVGl0bGUuY2xhc3NMaXN0LmFkZCgnbGV2ZWxzLWJsb2NrX19pdGVtLXRpdGxlJyk7XG4gICAgICAgICAgICBsZXZlbFRpdGxlLnRleHRDb250ZW50ID0gbGV2ZWwudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBsZXZlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgbGV2ZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ2xldmVscy1ibG9ja19faXRlbS10ZXh0Jyk7XG4gICAgICAgICAgICBsZXZlbFRleHQudGV4dENvbnRlbnQgPSBsZXZlbC50YXNrVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGxldmVsU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXZlbFN0YXR1cy5jbGFzc0xpc3QuYWRkKCdsZXZlbHMtYmxvY2tfX2xldmVsLXN0YXR1cycpO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWxTdGF0dXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldmVsU3RhdHVzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbGV2ZWxzLWJsb2NrX19sZXZlbC10aXRsZScpO1xuICAgICAgICAgICAgbGV2ZWxTdGF0dXNUaXRsZS50ZXh0Q29udGVudCA9ICdVbmNvbXBsZXRlIHRhc2snO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWxTdGF0dXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGxldmVsU3RhdHVzSW1nLmNsYXNzTGlzdC5hZGQoJ2xldmVscy1ibG9ja19fbGV2ZWxfX3VuY29tcGxldGUnKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmNvbXBsZXRlTGV2ZWxzLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tMZXZlbHMoaW5kZXgpICYmICF0aGlzLmNoZWNrSGVscExldmVscyhpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBsZXZlbFN0YXR1c0ltZy5jbGFzc05hbWUgPSAnbGV2ZWxzLWJsb2NrX19sZXZlbF9fY29tcGxldGUnO1xuICAgICAgICAgICAgICAgIGxldmVsU3RhdHVzVGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGUgdGFzayc7XG4gICAgICAgICAgICAgICAgbGV2ZWxTdGF0dXNUaXRsZS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0xldmVscyhpbmRleCkgJiYgdGhpcy5jaGVja0hlbHBMZXZlbHMoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxTdGF0dXNJbWcuY2xhc3NOYW1lID0gJ2xldmVscy1ibG9ja19fbGV2ZWxfX2hlbHAtY29tcGxldGUnO1xuICAgICAgICAgICAgICAgIGxldmVsU3RhdHVzVGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGUgd2l0aCBoZWxwJztcbiAgICAgICAgICAgICAgICBsZXZlbFN0YXR1c1RpdGxlLnN0eWxlLmNvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbFN0YXR1cy5hcHBlbmQobGV2ZWxTdGF0dXNUaXRsZSk7XG4gICAgICAgICAgICBsZXZlbFN0YXR1cy5hcHBlbmQobGV2ZWxTdGF0dXNJbWcpO1xuICAgICAgICAgICAgbGV2ZWxFbGVtZW50LmFwcGVuZChsZXZlbFRpdGxlKTtcbiAgICAgICAgICAgIGxldmVsRWxlbWVudC5hcHBlbmQobGV2ZWxUZXh0KTtcbiAgICAgICAgICAgIGxldmVsRWxlbWVudC5hcHBlbmQobGV2ZWxTdGF0dXMpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBsZXZlbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGV2ZWxzLWJsb2NrX19pdGVtX19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsZXZlbHMtYmxvY2tfX2l0ZW0nKTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChsZXZlbEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0U3RhdHVzTGV2ZWwoeyBpbmRleFZhbCwgaGVscCB9KSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0xldmVscyhpbmRleFZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVMZXZlbHMucHVzaCh7IGluZGV4VmFsLCBoZWxwIH0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NvbXBsZXRlTGV2ZWxzJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGxldGVMZXZlbHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbXBsZXRlTGV2ZWxzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tSZXN1bHQoYW5zd2VyLCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUxldmVsc1tjdXJyZW50TGV2ZWxdLnJlc3VsdC5pbmNsdWRlcyhhbnN3ZXIpO1xuICAgIH1cbiAgICBnZXRIVE1MRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudENvbnRhaW5lcjtcbiAgICB9XG4gICAgZ2V0Q29tcGxldGVMZXZlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlTGV2ZWxzO1xuICAgIH1cbn1cbmV4cG9ydHMuTGV2ZWxzRWxlbWVudCA9IExldmVsc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR0FNRV9UQVNLUyA9IHZvaWQgMDtcbmV4cG9ydHMuR0FNRV9UQVNLUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTGV2ZWwgMScsXG4gICAgICAgIGlkTGV2ZWw6IDAsXG4gICAgICAgIHRhc2tUZXh0OiAnV3JpdGUgdGFnIHNlbGVjdG9yJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX19vbmUnLFxuICAgICAgICByZXN1bHQ6IFsncGxhdGUnXSxcbiAgICAgICAgbWFya3VwOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAncGxhdGUnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8cGxhdGUvPmAsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAncGxhdGUnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3BpY2tsZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDxwaWNrbGUvPmAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY3VwJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPGN1cC8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZXZlbCAyJyxcbiAgICAgICAgaWRMZXZlbDogMSxcbiAgICAgICAgdGFza1RleHQ6ICdTZWxlY3QgZWxlbWVudCB3aXRoIG50aC1jaGlsZCgpJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX190d28nLFxuICAgICAgICByZXN1bHQ6IFsndGFibGU6bnRoLWNoaWxkKDIpJywgJ2RpdjpudGgtY2hpbGQoMiknXSxcbiAgICAgICAgbWFya3VwOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAncGxhdGUnLFxuICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAncGxhdGUnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8cGxhdGUvPmAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY3VwJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDxjdXAvPmAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAncGlja2xlJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHBpY2tsZS8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZXZlbCAzJyxcbiAgICAgICAgaWRMZXZlbDogMixcbiAgICAgICAgdGFza1RleHQ6ICdGaW5kIG5lc3RlZCBlbGVtZW50IGJ5IGFueSBzZWxlY3RvcicsXG4gICAgICAgIHRhYmxlQ2xhc3M6ICd0YWJsZS1ib2R5X190YWJsZV9fdGhyZWUnLFxuICAgICAgICByZXN1bHQ6IFsnI3Nwb29uLWl0ZW0nLCAnc3Bvb24nLCAnLnRhYmxlIHBsYXRlIGN1cCBzcG9vbiddLFxuICAgICAgICBtYXJrdXA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwbGF0ZScsXG4gICAgICAgICAgICAgICAgY2xvc2VUYWc6ICdwbGF0ZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDxwbGF0ZS8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnY3VwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAnY3VwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8Y3VwLz5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnc3Bvb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3Nwb29uLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHNwb29uIGlkPSdzcG9vbi1pdGVtJy8+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdhcHBsZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDxhcHBsZS8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdjaGVycnknLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8Y2hlcnJ5Lz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0xldmVsIDQnLFxuICAgICAgICBpZExldmVsOiAzLFxuICAgICAgICB0YXNrVGV4dDogJ1NlbGVjdCBlbGVtZW50IGJ5IHRoZWlyIGlkJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX19mb3VyJyxcbiAgICAgICAgcmVzdWx0OiBbJyNwaWNrbGVFbGVtZW50J10sXG4gICAgICAgIG1hcmt1cDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3BsYXRlJyxcbiAgICAgICAgICAgICAgICBjbG9zZVRhZzogJ3BsYXRlJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHBsYXRlLz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3BpY2tsZScsXG4gICAgICAgICAgICAgICAgaWQ6ICdwaWNrbGVFbGVtZW50JyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHBpY2tsZS8+YCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY3VwJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPGN1cC8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZXZlbCA1JyxcbiAgICAgICAgaWRMZXZlbDogNCxcbiAgICAgICAgdGFza1RleHQ6ICdXcml0ZSBjaGFpbiBvZiBjbGFzc2VzJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX19maXZlJyxcbiAgICAgICAgcmVzdWx0OiBbJy50YWJsZSAuYm9hcmQtaXRlbSAuYXBwbGUtaXRlbScsIGA6bnRoLWNoaWxkKDIpYF0sXG4gICAgICAgIG1hcmt1cDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3BsYXRlJyxcbiAgICAgICAgICAgICAgICBjbG9zZVRhZzogJ3BsYXRlJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHBsYXRlLz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ2JvYXJkJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ2JvYXJkLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAnYm9hcmQnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8Ym9hcmQvPmAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3BpY2tsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBgPHBpY2tsZS8+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdhcHBsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2FwcGxlLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogYDxhcHBsZS8+YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdjdXAnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8Y3VwLz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0xldmVsIDYnLFxuICAgICAgICBpZExldmVsOiA1LFxuICAgICAgICB0YXNrVGV4dDogJ0NvbWJpbmUgc2VsZWN0b3JzJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX19zaXgnLFxuICAgICAgICByZXN1bHQ6IFsnLnBsYXRlLWl0ZW0ud2hpdGUnLCAnZGl2IC5wbGF0ZS1pdGVtLndoaXRlJywgJy50YWJsZSAucGxhdGUtaXRlbS53aGl0ZSddLFxuICAgICAgICBtYXJrdXA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwbGF0ZScsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAncGxhdGUnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncGxhdGUtaXRlbSB3aGl0ZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzxwbGF0ZSBjbGFzcz1cInBsYXRlLWl0ZW0gd2hpdGVcIi8+JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwaWNrbGUnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICc8cGlja2xlLz4nLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ2N1cCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzxjdXAvPicsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTGV2ZWwgNycsXG4gICAgICAgIGlkTGV2ZWw6IDYsXG4gICAgICAgIHRhc2tUZXh0OiAnRmluZCBlbGVtZW50IHdpdGggcHNldWRvLWNsYXNzIDpoYXMoKScsXG4gICAgICAgIHRhYmxlQ2xhc3M6ICd0YWJsZS1ib2R5X190YWJsZV9fc2V2ZW4nLFxuICAgICAgICByZXN1bHQ6IFsnYm9hcmQ6aGFzKC5wZWFyLWl0ZW0pJywgJ2JvYXJkOmhhcyhwZWFyKSddLFxuICAgICAgICBtYXJrdXA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdib2FyZCcsXG4gICAgICAgICAgICAgICAgY2xvc2VUYWc6ICdib2FyZCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzxib2FyZC8+JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAncGVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BlYXItaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAnPHBlYXIgY2xhc3M9XCJwZWFyLWl0ZW1cIi8+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdhcHBsZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzxhcHBsZS8+JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdjdXAnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICc8Y3VwLz4nLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0xldmVsIDgnLFxuICAgICAgICBpZExldmVsOiA3LFxuICAgICAgICB0YXNrVGV4dDogJ0ZpbmQgZWxlbWVudCB3aXRoIHBzZXVkby1jbGFzcyA6bm90KCknLFxuICAgICAgICB0YWJsZUNsYXNzOiAndGFibGUtYm9keV9fdGFibGVfX2VpZ2h0JyxcbiAgICAgICAgcmVzdWx0OiBbJy50YWJsZTpub3QoLmJvYXJkLWl0ZW0sLmFwcGxlLWl0ZW0pJywgJy50YWJsZTpub3QoYm9hcmQsYXBwbGUpJywgJ2Rpdjpub3QoYm9hcmQsYXBwbGUpJywgJy50YWJsZTpub3QoYm9hcmQsYXBwbGUpJywgJy5kaXY6bm90KC5ib2FyZC1pdGVtLC5hcHBsZS1pdGVtKSddLFxuICAgICAgICBtYXJrdXA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdib2FyZCcsXG4gICAgICAgICAgICAgICAgY2xvc2VUYWc6ICdib2FyZCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzxib2FyZC8+JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ2JvYXJkLWl0ZW0nLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ2FwcGxlJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAnPGFwcGxlLz4nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnYXBwbGUtaXRlbScsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnd2F0ZXJtZWxvbicsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJzx3YXRlcm1lbG9uLz4nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnd2F0ZXJtZWxvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTGV2ZWwgOScsXG4gICAgICAgIGlkTGV2ZWw6IDgsXG4gICAgICAgIHRhc2tUZXh0OiAnRmluZCBlbGVtZW50IHdpdGggcHNldWRvLWNsYXNzIDpmaXJzdC1jaGlsZCcsXG4gICAgICAgIHRhYmxlQ2xhc3M6ICd0YWJsZS1ib2R5X190YWJsZV9fbmluZScsXG4gICAgICAgIHJlc3VsdDogWycudGFibGU6Zmlyc3QtY2hpbGQnLCAnZGl2OmZpcnN0LWNoaWxkJ10sXG4gICAgICAgIG1hcmt1cDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ2FwcGxlJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2VUYWc6ICdhcHBsZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDxhcHBsZS8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdjaGVycnknLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8Y2hlcnJ5Lz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3dhdGVybWVsb24nLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8d2F0ZXJtZWxvbi8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdMZXZlbCAxMCcsXG4gICAgICAgIGlkTGV2ZWw6IDksXG4gICAgICAgIHRhc2tUZXh0OiAnRmluZCBlbGVtZW50IHdpdGggcHNldWRvLWNsYXNzIDpsYXN0LWNoaWxkJyxcbiAgICAgICAgdGFibGVDbGFzczogJ3RhYmxlLWJvZHlfX3RhYmxlX190ZW4nLFxuICAgICAgICByZXN1bHQ6IFsnLnRhYmxlOmxhc3QtY2hpbGQnLCAnZGl2Omxhc3QtY2hpbGQnXSxcbiAgICAgICAgbWFya3VwOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnYXBwbGUnLFxuICAgICAgICAgICAgICAgIGNsb3NlVGFnOiAnYXBwbGUnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IGA8YXBwbGUvPmAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnY2hlcnJ5JyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBgPGNoZXJyeS8+YCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICd3YXRlcm1lbG9uJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogYDx3YXRlcm1lbG9uLz5gLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1haW5FbGVtZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF92aWV3XzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9lbGVtZW50LXZpZXdcIik7XG5yZXF1aXJlKFwiLi9tYWluLnNjc3NcIik7XG5jb25zdCBDU1NfQ0xBU1NFUyA9IHtcbiAgICBIRUFERVI6ICdoZWFkZXInLFxuICAgIENPTlRBSU5FUjogJ19jb250YWluZXInLFxuICAgIE1BSU46ICdtYWluJyxcbiAgICB0YWJsZUJvZHk6ICd0YWJsZS1ib2R5JyxcbiAgICB0YWJsZTogJ3RhYmxlLWJvZHlfX3RhYmxlJyxcbiAgICBsZXZlbHNCbG9jazogJ2xldmVscy1ibG9jaycsXG4gICAgbGV2ZWxzQmxvY2tUaXRsZTogJ2xldmVscy1ibG9ja19fdGl0bGUnLFxufTtcbmNsYXNzIE1haW5FbGVtZW50IGV4dGVuZHMgZWxlbWVudF92aWV3XzEuRWxlbWVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBtYWluRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ21haW4nLFxuICAgICAgICAgICAgY2xhc3NOYW1lczogW0NTU19DTEFTU0VTLk1BSU5dLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobWFpbkRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFpbkVsZW1lbnQgPSBNYWluRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnB1dEJ1dHRvbiA9IHZvaWQgMDtcbmNvbnN0IENTU19DTEFTU0VTID0ge1xuICAgIGlucHV0QnV0dG9uOiAnY3NzLXNhbmRib3hfX2J1dHRvbicsXG59O1xuY29uc3QgQlVUVE9OX1RFWFQgPSAnRU5URVInO1xuY2xhc3MgSW5wdXRCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfVxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IEJVVFRPTl9URVhUO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDU1NfQ0xBU1NFUy5pbnB1dEJ1dHRvbik7XG4gICAgfVxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5JbnB1dEJ1dHRvbiA9IElucHV0QnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklucHV0RWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IElOUFVUX1BMQUNFSE9MREVSID0gJ1dyaXRlIHlvdXIgQ1NTIFNlbGVjdG9yJztcbmNsYXNzIElucHV0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLmNvbnRhaW5lckJsb2NrKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LmFkZCgnY3NzLXNhbmRib3hfX2lucHV0LWJsb2NrJyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnBsYWNlaG9sZGVyID0gSU5QVVRfUExBQ0VIT0xERVI7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nzcy1zYW5kYm94X19pbnB1dCcpO1xuICAgICAgICAoX2IgPSB0aGlzLmNvbnRhaW5lckJsb2NrKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gICAgZmFpbGVkU3RhdGUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5pbnB1dEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdjc3Mtc2FuZGJveF9faW5wdXRfX2ZhaWxlZCcpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuaW5wdXRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xhc3NMaXN0LnJlbW92ZSgnY3NzLXNhbmRib3hfX2lucHV0X19mYWlsZWQnKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG4gICAgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyQmxvY2s7XG4gICAgfVxuICAgIGNsZWFySW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuaW5wdXRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWU7XG4gICAgfVxuICAgIHNldElucHV0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuSW5wdXRFbGVtZW50ID0gSW5wdXRFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNhbmRib3hIdG1sRWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfdmlld18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvZWxlbWVudC12aWV3XCIpO1xuY29uc3QgbGV2ZXNfZGF0YV8xID0gcmVxdWlyZShcIi4uL2xldmVscy9sZXZlcy1kYXRhXCIpO1xuY29uc3QgQ1NTX0NMQVNTRVMgPSB7XG4gICAgc2FuZGJveENzczogJ3NhbmRib3gtYm9keV9faHRtbCcsXG4gICAgaHRtbE51bWJlcnM6ICdzYW5kYm94LWJvZHlfX251bWJlcnMnLFxuICAgIGh0bWxFZGl0b3I6ICdzYW5kYm94LWJvZHlfX2VkaXRvcicsXG59O1xuY29uc3QgSFRNTF9OVU1CRVJTX1RFWFQgPSAnMSA8YnIgLz4gMiA8YnIgLz4gMyA8YnIgLz4gNCA8YnIgLz4gNSA8YnIgLz4gNiA8YnIgLz4gNyA8YnIgLz4gOCA8YnIgLz4gOSA8YnIgLz4gMTAgPGJyIC8+IDExIDxiciAvPiAxMiA8YnIgLz4gMTMgPGJyIC8+IDE0IDxiciAvPiAxNSA8YnIgLz4gMTY8YnIgLz4gMTc8YnIgLz4gMTg8YnIgLz4gMTk8YnIgLz4gMjAgPGJyIC8+IDIxIDxiciAvPiAyMic7XG5jbGFzcyBTYW5kYm94SHRtbEVsZW1lbnQgZXh0ZW5kcyBlbGVtZW50X3ZpZXdfMS5FbGVtZW50VmlldyB7XG4gICAgY29uc3RydWN0b3IoY3VycmVudExldmVsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaGVhZGVyRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ1NTX0NMQVNTRVMuc2FuZGJveENzc10sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICBzdXBlcihoZWFkZXJEYXRhKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gKF9hID0gdGhpcy5lbGVtZW50T2JqKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmh0bWxOdW1iZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5odG1sRWRpdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRpdGlvbkVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5maWxsSHRtbFZpZXdlcihsZXZlc19kYXRhXzEuR0FNRV9UQVNLU1tjdXJyZW50TGV2ZWxdLm1hcmt1cCwgdGhpcy5odG1sRWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRpdGlvbkVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGh0bWxOdW1iZXJzRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ1NTX0NMQVNTRVMuaHRtbE51bWJlcnNdLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odG1sTnVtYmVycyA9IG5ldyBlbGVtZW50X3ZpZXdfMS5FbGVtZW50VmlldyhodG1sTnVtYmVyc0RhdGEpLmdldEhUTUxFbGVtZW50KCk7XG4gICAgICAgIGlmICh0aGlzLmh0bWxOdW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmh0bWxOdW1iZXJzLmlubmVySFRNTCA9IEhUTUxfTlVNQkVSU19URVhUO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5lbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kKHRoaXMuaHRtbE51bWJlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGh0bWxFZGl0b3JEYXRhID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDU1NfQ0xBU1NFUy5odG1sRWRpdG9yXSxcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbEVkaXRvciA9IG5ldyBlbGVtZW50X3ZpZXdfMS5FbGVtZW50VmlldyhodG1sRWRpdG9yRGF0YSkuZ2V0SFRNTEVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaHRtbEVkaXRvcikge1xuICAgICAgICAgICAgKF9iID0gdGhpcy5lbGVtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kKHRoaXMuaHRtbEVkaXRvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpbnRDb2RlKG1hcmt1cCwgaXRlbUJveCkge1xuICAgICAgICBjb25zdCBib3ggPSBpdGVtQm94O1xuICAgICAgICBjb25zdCBtYXJrdXBEYXRhID0gW107XG4gICAgICAgIG1hcmt1cC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBpdGVtRGl2LnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICYmICFpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EaXYuaW5uZXJIVE1MID0gYCZsdDske2l0ZW0udGV4dH0gaWQ9XCIke2l0ZW0uaWR9XCIvJmd0O2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pZCAmJiBpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EaXYuaW5uZXJIVE1MID0gYCZsdDske2l0ZW0udGV4dH0gY2xhc3M9XCIke2l0ZW0uY2xhc3N9XCIvJmd0O2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICYmIGl0ZW0uY2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgPSBgJmx0OyR7aXRlbS50ZXh0fSBpZD1cIiR7aXRlbS5pZH1cIiBjbGFzcz1cIiR7aXRlbS5jbGFzc31cIi8mZ3Q7YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmlkICYmICFpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EaXYuaW5uZXJIVE1MID0gYCZsdDske2l0ZW0udGV4dH0vJmd0O2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1EaXYuc3R5bGUubWFyZ2luTGVmdCA9IGAke2l0ZW0ubWFyZ2lufXB4YDtcbiAgICAgICAgICAgICAgICBtYXJrdXBEYXRhLnB1c2goaXRlbURpdi5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludENvZGUoaXRlbS5jaGlsZHJlbiwgaXRlbURpdik7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFN0cmluZyA9IGAmbHQ7JHtpdGVtLnRleHR9Jmd0O2A7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgJiYgIWl0ZW0uY2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3RyaW5nID0gYCZsdDske2l0ZW0udGV4dH0gaWQ9XCIke2l0ZW0uaWR9XCIvJmd0O2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5pZCAmJiBpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFN0cmluZyA9IGAmbHQ7JHtpdGVtLnRleHR9IGNsYXNzPVwiJHtpdGVtLmNsYXNzfVwiLyZndDtgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAmJiBpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFN0cmluZyA9IGAmbHQ7JHtpdGVtLnRleHR9IGlkPVwiJHtpdGVtLmlkfVwiIGNsYXNzPVwiJHtpdGVtLmNsYXNzfVwiLyZndDtgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtRGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHBhcmVudFN0cmluZyk7XG4gICAgICAgICAgICAgICAgaXRlbURpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGAmbHQ7LyR7aXRlbS5jbG9zZVRhZ30mZ3Q7YCk7XG4gICAgICAgICAgICAgICAgaXRlbURpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7aXRlbS5tYXJnaW59cHhgO1xuICAgICAgICAgICAgICAgIG1hcmt1cERhdGEucHVzaChpdGVtRGl2Lm91dGVySFRNTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYm94KSB7XG4gICAgICAgICAgICBib3guaW5uZXJIVE1MID0gbWFya3VwRGF0YS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb3JyZWN0Q29kZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9hID0gdGhpcy5odG1sRWRpdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYCZsdDtkaXYgY2xhc3M9XCJ0YWJsZVwiJmd0O2ApO1xuICAgICAgICAoX2IgPSB0aGlzLmh0bWxFZGl0b3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGAmbHQ7L2RpdiZndDtgKTtcbiAgICB9XG4gICAgY2xlYXJWaWV3ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmh0bWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuaHRtbEVkaXRvci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWxsSHRtbFZpZXdlcihtYXJrdXAsIGl0ZW1Cb3ggPSB0aGlzLmh0bWxFZGl0b3IpIHtcbiAgICAgICAgdGhpcy5jbGVhclZpZXdlcigpO1xuICAgICAgICB0aGlzLnByaW50Q29kZShtYXJrdXAsIGl0ZW1Cb3gpO1xuICAgICAgICB0aGlzLmNvcnJlY3RDb2RlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5TYW5kYm94SHRtbEVsZW1lbnQgPSBTYW5kYm94SHRtbEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGUgPSB2b2lkIDA7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXG5jb25zdCBjcmVhdGVfZWxlbWVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9lbGVtZW50L2NyZWF0ZS1lbGVtZW50XCIpKTtcbmNvbnN0IGxldmVzX2RhdGFfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHMvbGV2ZXMtZGF0YVwiKTtcbmNvbnN0IENTU19DTEFTU0VTID0ge1xuICAgIEhFQURFUjogJ2hlYWRlcicsXG4gICAgQ09OVEFJTkVSOiAnX2NvbnRhaW5lcicsXG4gICAgTUFJTjogJ21haW4nLFxuICAgIHRhYmxlQm9keTogJ3RhYmxlLWJvZHknLFxuICAgIHRhYmxlOiAndGFibGUtYm9keV9fdGFibGUnLFxuICAgIHRhYmxlX19vbmU6ICd0YWJsZS1ib2R5X190YWJsZV9fb25lJyxcbiAgICB0YWJsZV9fdHdvOiAndGFibGUtYm9keV9fdGFibGVfX3R3bycsXG4gICAgcGxhdGVFbGVtZW50OiAnc2FuZGJveC1ib2R5X19wbGF0ZScsXG59O1xuY2xhc3MgVGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGN1cnJlbnRMZXZlbCkge1xuICAgICAgICB0aGlzLnRhYmxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRpdGlvbkVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXJnZXRFbGVtZW50SGlkZUNsYXNzID0gJyc7XG4gICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudERhdGEgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFRhYmxlKGxldmVzX2RhdGFfMS5HQU1FX1RBU0tTW2N1cnJlbnRMZXZlbF0ubWFya3VwLCB0aGlzLnRhYmxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRpdGlvbkVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlRGF0YSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ1NTX0NMQVNTRVMudGFibGVfX29uZV0sXG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhYmxlID0gbmV3IGNyZWF0ZV9lbGVtZW50XzEuZGVmYXVsdCh0YWJsZURhdGEpLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgc2V0Q2xhc3Nlcyhjc3NDbGFzcykge1xuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZS5jbGFzc05hbWUgPSBjc3NDbGFzcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5hbGx5TWVzc2FnZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmaW5hbGx5TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaW5hbGx5TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmaW5hbGx5LW1lc3NhZ2UnKTtcbiAgICAgICAgZmluYWxseU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91IGFyZSBCRVNUIENTUy1Qcm9ncmFtbWVyISBDbGljayBSRVNUQVJUIGFuZCB0cnkgYWdhaW4hYDtcbiAgICAgICAgKF9hID0gdGhpcy50YWJsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZChmaW5hbGx5TWVzc2FnZSk7XG4gICAgfVxuICAgIGNsZWFyVGFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbGxUYWJsZShtYXJrdXAsIGNvbnRhaW5lcikge1xuICAgICAgICBtYXJrdXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgc2FuZGJveC1ib2R5X18ke2l0ZW0udGV4dH1gKTtcbiAgICAgICAgICAgIGRpdi5kYXRhc2V0LnRvb2x0aXAgPSBpdGVtLnRleHQ7XG4gICAgICAgICAgICBsZXQgdG9vbHRpcEh0bWxFbGVtZW50O1xuICAgICAgICAgICAgZGl2Lm9ubW91c2VvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvb2xUaXBUZXh0ID0gYDwke3RhcmdldC5kYXRhc2V0LnRvb2x0aXB9Lz5gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sVGlwVGV4dCA9IGl0ZW0udG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sVGlwVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEh0bWxFbGVtZW50LnRleHRDb250ZW50ID0gdG9vbFRpcFRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEh0bWxFbGVtZW50LmNsYXNzTmFtZSA9ICd0YWJsZS1ib2R5X190b29sdGlwJztcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy50YWJsZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZCh0b29sdGlwSHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgKHRhcmdldC5vZmZzZXRXaWR0aCAtIHRvb2x0aXBIdG1sRWxlbWVudC5vZmZzZXRXaWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvcCA9IHBvc2l0aW9uLnRvcCAtIHRvb2x0aXBIdG1sRWxlbWVudC5vZmZzZXRIZWlnaHQgLSA1O1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gcG9zaXRpb24udG9wICsgdGFyZ2V0Lm9mZnNldEhlaWdodCArIDU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRpdi5vbm1vdXNlb3V0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBIdG1sRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwSHRtbEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIdG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgIGlmIChpdGVtLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0RWxlbWVudERhdGEucHVzaChbZGl2LCBpdGVtLnRleHRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxUYWJsZShpdGVtLmNoaWxkcmVuLCB0aGlzLnRhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhpZGVUYXJnZXRFbGVtZW50KCkge1xuICAgICAgICB0aGlzLnRhcmdldEVsZW1lbnREYXRhLmZvckVhY2goKHRhcmdldEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZChgc2FuZGJveC1ib2R5X18ke3RhcmdldEVsZW1lbnRbMV19X19oaWRlYCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXTQlVRhcmdldEhUTUxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRFbGVtZW50O1xuICAgIH1cbiAgICBnZXRIVE1MRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGU7XG4gICAgfVxufVxuZXhwb3J0cy5UYWJsZSA9IFRhYmxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYXBwL2FwcFwiKTtcbmNvbnN0IGFwcCA9IG5ldyBhcHBfMS5BcHBQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
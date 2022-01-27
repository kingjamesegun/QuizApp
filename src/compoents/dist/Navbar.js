"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Logo_svg_1 = require("../assets/Logo.svg");
var bar_svg_1 = require("../assets/bar.svg");
var close_svg_1 = require("../assets/close.svg");
require("../styles/Navbar.css");
var react_router_dom_1 = require("react-router-dom");
function Navbar() {
    var _a = react_1.useState(false), toogle = _a[0], setToggle = _a[1];
    var handleBarClick = function (e) {
        e.preventDefault();
        setToggle(function (prevState) { return !prevState; });
    };
    var toogleClass = 'nav__links';
    if (toogle === true) {
        toogleClass += ' active';
    }
    return (react_1["default"].createElement("nav", { className: 'navbar' },
        react_1["default"].createElement("div", { className: 'nav__text' },
            react_1["default"].createElement("img", { src: Logo_svg_1["default"], alt: 'Logo' })),
        react_1["default"].createElement("div", { className: 'nav__bar', onClick: handleBarClick }, toogle ? (react_1["default"].createElement("img", { src: close_svg_1["default"], alt: 'close' })) : (react_1["default"].createElement("img", { src: bar_svg_1["default"], alt: 'Bar' }))),
        react_1["default"].createElement("div", { className: toogleClass },
            react_1["default"].createElement("ul", { className: 'nav__ul' },
                react_1["default"].createElement("li", { className: 'nav__li' },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: 'contact_us' }, "Contact Us")),
                react_1["default"].createElement("li", { className: 'nav__li' },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: 'help_center' }, "Help Center")),
                react_1["default"].createElement("li", { className: 'nav__li btn__demo' },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: 'quiz' }, "PlayDemo"))))));
}
exports["default"] = Navbar;

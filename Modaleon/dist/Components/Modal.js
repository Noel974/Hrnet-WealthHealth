"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Composant de fenêtre modale.
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte.
 * @param {Function} props.onClose - Fonction de rappel pour fermer la modal.
 * @param {ReactNode} props.children - Éléments enfants à afficher dans la modal.
 * @returns {JSX.Element|null} - Composant rendu ou null si la modal n'est pas ouverte.
 */

// Interface pour les propriétés d'un composant Modal dans React

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) return null; // Si la modal n'est pas ouverte, ne rend rien

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7 "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body"
  }, children, " ")));
};
var _default = exports["default"] = Modal;
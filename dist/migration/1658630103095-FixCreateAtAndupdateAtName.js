"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FixCreateAtAndupdateAtName1658630103095 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var FixCreateAtAndupdateAtName1658630103095 = /*#__PURE__*/function () {
  function FixCreateAtAndupdateAtName1658630103095() {
    (0, _classCallCheck2["default"])(this, FixCreateAtAndupdateAtName1658630103095);
  }

  (0, _createClass2["default"])(FixCreateAtAndupdateAtName1658630103095, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.renameColumn("users", "createAt", "createdAt");

              case 2:
                _context.next = 4;
                return queryRunner.renameColumn("users", "updateAt", "updatedAt");

              case 4:
                _context.next = 6;
                return queryRunner.renameColumn("posts", "createAt", "createdAt");

              case 6:
                _context.next = 8;
                return queryRunner.renameColumn("posts", "updateAt", "updatedAt");

              case 8:
                _context.next = 10;
                return queryRunner.renameColumn("comments", "createAt", "createdAt");

              case 10:
                _context.next = 12;
                return queryRunner.renameColumn("comments", "updateAt", "updatedAt");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return queryRunner.renameColumn("users", "createdAt", "createAt");

              case 2:
                _context2.next = 4;
                return queryRunner.renameColumn("users", "updatedAt", "updateAt");

              case 4:
                _context2.next = 6;
                return queryRunner.renameColumn("posts", "createdAt", "createAt");

              case 6:
                _context2.next = 8;
                return queryRunner.renameColumn("posts", "updatedAt", "updateAt");

              case 8:
                _context2.next = 10;
                return queryRunner.renameColumn("comments", "createdAt", "createAt");

              case 10:
                _context2.next = 12;
                return queryRunner.renameColumn("comments", "updatedAt", "updateAt");

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return FixCreateAtAndupdateAtName1658630103095;
}();

exports.FixCreateAtAndupdateAtName1658630103095 = FixCreateAtAndupdateAtName1658630103095;
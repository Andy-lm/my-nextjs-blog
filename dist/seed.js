"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataSource = require("./data-source");

var _Post = require("./entity/Post");

_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var post, i, post2;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connection.manager.find(_Post.Post);

          case 2:
            post = _context.sent;
            console.log(post, "=====post1");

            if (!(post.length === 0)) {
              _context.next = 12;
              break;
            }

            i = 1;

          case 6:
            if (!(i <= 10)) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return connection.manager.save(new _Post.Post({
              title: "Title ".concat(i),
              content: "Andy\u7684\u7B2C".concat(i, "\u7BC7\u5185\u5BB9")
            }));

          case 9:
            i++;
            _context.next = 6;
            break;

          case 12:
            console.log("数据填充完成");
            _context.next = 15;
            return connection.manager.find(_Post.Post);

          case 15:
            post2 = _context.sent;
            console.log(post2, "=====post1");
            connection.close();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});
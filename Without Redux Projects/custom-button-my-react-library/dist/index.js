function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_3ybTi","primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","texty":"_2eIGG","link":"_71S8l"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(_ref2) {
  var text = _ref2.text,
      type = _ref2.type;

  if (type == "primary") {
    return /*#__PURE__*/React.createElement("button", {
      className: styles.primary
    }, text);
  }

  if (type == "default") {
    return /*#__PURE__*/React.createElement("button", {
      className: styles["default"]
    }, text);
  }

  if (type == "dashed") {
    return /*#__PURE__*/React.createElement("button", {
      className: styles.dashed
    }, text);
  }

  if (type == "texty") {
    return /*#__PURE__*/React.createElement("button", {
      className: styles.texty
    }, text);
  }

  if (type == "link") {
    return /*#__PURE__*/React.createElement("button", {
      className: styles.link
    }, text);
  }
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map

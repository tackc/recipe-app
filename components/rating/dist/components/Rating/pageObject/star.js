"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Star page object class.
 * @class
 */
var PageRatingStar =
/*#__PURE__*/
function () {
  /**
   * Create a new Star page object.
   * @constructor
   * @param {string} rootElement - The selector of the Star root element.
   */
  function PageRatingStar(rootElement) {
    _classCallCheck(this, PageRatingStar);

    this.rootElement = rootElement;
  }
  /** Click the star.
   * @method
   */


  _createClass(PageRatingStar, [{
    key: "click",
    value: function click() {
      $(this.rootElement).$('input[type="radio"]').click();
    }
    /** Hover the star.
     * @method
     */

  }, {
    key: "hover",
    value: function hover() {
      return $(this.rootElement).$('input[type="radio"]').hover();
    }
    /**
     * Returns true when the star is checked.
     * @method
     * @returns {bool}
     */

  }, {
    key: "isChecked",
    value: function isChecked() {
      return !!$(this.rootElement).$('input[type="radio"]').getAttribute('checked');
    }
  }]);

  return PageRatingStar;
}();

module.exports = PageRatingStar;

//# sourceMappingURL=star.js.map
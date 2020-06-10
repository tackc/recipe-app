"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageRatingStar = require('./star');
/**
 * Rating page object class.
 * @class
 */


var PageRating =
/*#__PURE__*/
function () {
  /**
   * Create a new Rating page object.
   * @constructor
   * @param {string} rootElement - The selector of the Rating root element.
   */
  function PageRating(rootElement) {
    _classCallCheck(this, PageRating);

    this.rootElement = rootElement;
  }
  /**
   * Returns a new Star page object of the element in item position.
   * @method
   * @param {number} itemPosition - The base 0 index of the star.
   */


  _createClass(PageRating, [{
    key: "getItem",
    value: function getItem(itemPosition) {
      var items = $(this.rootElement).$$('.rainbow-rating_star');

      if (items[itemPosition]) {
        return new PageRatingStar("".concat(this.rootElement, " .rainbow-rating_star:nth-child(").concat(itemPosition + 1, ")"));
      }

      return null;
    }
  }]);

  return PageRating;
}();

module.exports = PageRating;

//# sourceMappingURL=index.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MilesCard = /** @class */ (function (_super) {
    __extends(MilesCard, _super);
    function MilesCard() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: 'open' });
        _this.render();
        return _this;
    }
    Object.defineProperty(MilesCard.prototype, "miles", {
        get: function () {
            return parseInt(this.getAttribute('miles'));
        },
        set: function (value) {
            this.setAttribute('miles', '' + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MilesCard, "observedAttributes", {
        get: function () {
            return ['miles'];
        },
        enumerable: true,
        configurable: true
    });
    MilesCard.prototype.render = function () {
        this.shadowRoot.innerHTML = "\n        <div style=\"border: darkkhaki 2px dashed; padding: 20px\">\n            <p>\n                <img src=\"assets/js.png\" height=\"50\">\n            </p>\n            <b>Miles: " + this.miles + "</b>\n        </div>\n      ";
    };
    MilesCard.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        this.render();
    };
    return MilesCard;
}(HTMLElement));
customElements.define('miles-card', MilesCard);

var DrinkItem = /** @class */ (function () {
    /*
      Constructor to create an instance from an DrinkItem-like object
    */
    function DrinkItem(data) {
        if (data === void 0) { data = {}; }
        // Web.API model properties
        this.id = 0;
        this.img = '';
        this.name = '';
        this.price = 0;
        this.count = 0;
        for (var key in data) {
            if (key in this) {
                this[key] = data[key];
            }
        }
    }
    DrinkItem.prototype.available = function () {
        return this.count > 0;
    };
    return DrinkItem;
}());
export { DrinkItem };
//# sourceMappingURL=drink.item.js.map
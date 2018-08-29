var VendingTip = /** @class */ (function () {
    function VendingTip() {
        this.status = false;
        this.text = ''; // Tip info
    }
    VendingTip.prototype.resetStatus = function () {
        this.status = false;
        this.text = '';
    };
    VendingTip.prototype.prepareTip = function (pText) {
        this.status = true;
        this.text = pText;
    };
    return VendingTip;
}());
export { VendingTip };
//# sourceMappingURL=tip.model.js.map
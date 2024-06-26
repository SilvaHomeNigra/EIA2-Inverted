"use strict";
var Vector2D;
(function (Vector2D_1) {
    class Vector2D {
        x;
        y;
        constructor(_x, _y) {
            this.setXY(_x, _y);
        }
        setXY(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setVector(_v) {
            this.setXY(_v.x, _v.y);
        }
        getDistanceTo(_v) {
            var dx = this.x - _v.x;
            var dy = this.y - _v.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
        getLength() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        getDiff(_subtract) {
            return new Vector2D(this.x - _subtract.x, this.y - _subtract.y);
        }
        getSum(_add) {
            return new Vector2D(this.x + _add.x, this.y + _add.y);
        }
        subtract(_subtract) {
            this.x -= _subtract.x;
            this.y -= _subtract.y;
        }
        add(_add) {
            this.x += _add.x;
            this.y += _add.y;
        }
        scale(_s) {
            this.x *= _s;
            this.y *= _s;
        }
        normalize() {
            var l = this.getLength();
            if (l > 0)
                this.scale(1 / l);
        }
    }
    Vector2D_1.Vector2D = Vector2D;
})(Vector2D || (Vector2D = {}));
//# sourceMappingURL=Vector.js.map
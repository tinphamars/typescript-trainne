var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class in typescript
{
    var Animal = /** @class */ (function () {
        function Animal(n) {
            //khi goi class thi ham nay se goi truoc tien            
            this.name = n;
        }
        Animal.prototype.getName = function () {
            console.log('It is ' + this.name);
        };
        Animal.prototype.run = function () {
            console.log(this.name + " is running!");
        };
        Animal.prototype.sleep = function () {
            console.log(this.name + " go to the bed!");
        };
        Animal.prototype.thePrivate = function () {
            console.log('private method');
        };
        Animal.prototype.theProtected = function () {
            console.log('protected method');
        };
        return Animal;
    }());
    // khoi tao mot class
    var theDog = new Animal('Dog');
    theDog.getName();
    theDog.run();
    // INHERITANCE (tinh ke thua)
    // child class co nhung tinh chat va thuoc tinh cua class cha
    var TheCat = /** @class */ (function (_super) {
        __extends(TheCat, _super);
        function TheCat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TheCat.prototype.eat = function () {
            console.log(this.name + ' eating fish');
        };
        return TheCat;
    }(Animal));
    var blackCat = new TheCat('Black cat');
    blackCat.getName();
    blackCat.eat();
    blackCat.sleep();
    //over write  lai cac phuong cua class cha.
    var TheDog = /** @class */ (function (_super) {
        __extends(TheDog, _super);
        function TheDog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // readonly chi co the lay gia tri cua chung thoi, khong the thay doi duoc 
            _this.newName = '1000';
            return _this;
        }
        TheDog.prototype.sleep = function () {
            console.log('the dog is not sleep');
            this.theProtected();
            this.goToBed();
        };
        // chi co noi tai cua class moi co the goi duoc
        TheDog.prototype.goToBed = function () {
            console.log('Go to the bed');
        };
        // chi co noi tai cua class va class con ket thua moi co the goi duoc
        TheDog.prototype.modifierProtected = function () {
            console.log('Go to the bed');
        };
        TheDog.origin = { x: 10, y: 30 };
        return TheDog;
    }(Animal));
    var theDog_1 = new TheDog('Con cho');
    theDog_1.getName();
    theDog_1.sleep();
    console.log(TheDog.origin);
}

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
        //short hand code
        function Animal(name) {
            this.name = name;
            //khi goi class thi ham nay se goi truoc tien            
        }
        // ở trên là cách viết ngắn của đoạn code ở dưới
        // public name: string
        // constructor(n: string) {
        //     this.name = n
        // }
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
    //over write lai cac phuong cua class cha.
    //OVERRIDING METHOD: một class có thể định nghĩa và khái báo lại các method của class cha của nó.
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
        // modifier static co the goi truc tiep thong qua name cua class ma khong can khoi tao class do 
        TheDog.origin = { x: 10, y: 30 };
        return TheDog;
    }(Animal));
    var theDog_1 = new TheDog('Con cho');
    theDog_1.getName();
    theDog_1.sleep();
    console.log(TheDog.origin);
    // ABSTRACT CLASS : sinh ra với mục đích thể hiện rõ ràng tính kế thừa
    //abstract class co the implements >1 interface
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        return Person;
    }());
    //Student khi ke thua person thi phai dinh lai toan bo cac method trieu tuong trong class person (getAge), nieu khong type script se bao loi
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student.prototype.getAge = function () {
            return 'String';
        };
        return Student;
    }(Person));
}
function newClass(aa) {
    var defaultValue = { color: 'red', width: 30 };
    if (aa.color)
        defaultValue.color = aa.color;
    return defaultValue;
}
var callFN = newClass({ color: 'purple', width: 20 });

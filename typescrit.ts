// class in typescript
{
    class Animal {
        name: string
        constructor(n: string) {
            //khi goi class thi ham nay se goi truoc tien            
            this.name = n
        }
        getName(this: Animal) {
            console.log('It is ' + this.name)
        }
        run() {
            console.log(this.name + " is running!")
        }
        sleep() {
            console.log(this.name + " go to the bed!")
        }
        private thePrivate() {
            console.log('private method')
        }
        protected theProtected() {
            console.log('protected method')
        }
    }

    // khoi tao mot class
    let theDog = new Animal('Dog')
    theDog.getName()
    theDog.run()


    // INHERITANCE (tinh ke thua)
    // child class co nhung tinh chat va thuoc tinh cua class cha
    class TheCat extends Animal {
        eat() {
            console.log(this.name + ' eating fish')
        }
    }

    let blackCat = new TheCat('Black cat')
    blackCat.getName()
    blackCat.eat()
    blackCat.sleep()


    //over write  lai cac phuong cua class cha.
    class TheDog extends Animal {
        sleep() {
            console.log('the dog is not sleep')
            this.theProtected()
            this.goToBed()
        }

        // chi co noi tai cua class moi co the goi duoc
        private goToBed() {
            console.log('Go to the bed')
        }
        // chi co noi tai cua class va class con ket thua moi co the goi duoc
        protected modifierProtected() {
            console.log('Go to the bed')
        }
        // readonly chi co the lay gia tri cua chung thoi, khong the thay doi duoc 
        readonly newName: string = '1000'
        // modifier static co the goi truc tiep thong qua name cua class ma khong can khoi tao class do 
        static origin = { x: 10, y: 30 }
    }

    let theDog_1 = new TheDog('Con cho')
    theDog_1.getName()
    theDog_1.sleep()
    console.log(TheDog.origin)

}   
abstract class Shape {
        constructor(public color: string) {}

        abstract clone(): Shape;
        abstract calculateArea(): number;
        abstract show(): void;
}

class Rectangle extends Shape {
        constructor(public height: number, public width: number, color: string) {
                super(color);
        }

        clone(): Shape {
                return new Rectangle(this.height, this.width, this.color);
        }

        show(): void {
                console.log(`Its rectangle! Color - ${this.color} Width - ${this.width} Height - ${this.height}`);
        }

        calculateArea(): number {
                return this.height * this.width;
        }
}

class Circle extends Shape {
        constructor(public radius: number, color) {
                super(color);
        }
        clone(): Shape {
                return new Circle(this.radius, this.color);
        }
        show(): void {
                console.log(`Its circle! Color - ${this.color} Radius - ${this.radius}`);
        }
        calculateArea(): number {
                return 3.14 * this.radius * this.radius;
        }
}

const r1 = new Rectangle(100, 200, 'white');
const c1 = new Circle(20, 'red');

r1.show();
c1.show();

const r2 = r1.clone();
console.log(r2.calculateArea());

const c2 = c1.clone();
console.log(c2.calculateArea());

interface Builder {
        reset(): void;
        setSeats(seat: number): void;
        setEngine(engine: number): void;
        setTripComputer(flag: boolean): void;
        setGPS(flag: boolean): void;
        getResults(): Car;
}

class Car {
        constructor(
                public seat: number = 0,
                public engine: number = 0,
                public tripPC: boolean = false,
                public gps: boolean = false,
        ) {}
}

class CarBuilder implements Builder {
        private car: Car;

        constructor() {
                this.reset();
        }

        reset(): void {
                this.car = new Car();
        }

        setSeats(seat: number): void {
                this.car.seat = seat;
        }
        setEngine(engine: number): void {
                this.car.engine = engine;
        }
        setTripComputer(flag: boolean): void {
                this.car.tripPC = flag;
        }
        setGPS(flag: boolean): void {
                this.car.gps = flag;
        }
        getResults(): Car {
                const result = this.car;
                this.reset();
                return result;
        }
}

class Director {
        private builder: Builder;

        setBuilder(builder: Builder) {
                this.builder = builder;
        }

        makeSportCar(): Car {
                this.builder.setSeats(2);
                this.builder.setEngine(2);
                this.builder.setGPS(false);
                this.builder.setTripComputer(false);
                return this.builder.getResults();
        }

        makeJeep(): Car {
                this.builder.setSeats(6);
                this.builder.setEngine(4);
                this.builder.setGPS(true);
                this.builder.setTripComputer(true);
                return this.builder.getResults();
        }
}

const director = new Director();
const carBuilder = new CarBuilder();

director.setBuilder(carBuilder);
let sportCar = director.makeSportCar();
let jeep = director.makeJeep();

console.log(sportCar);
console.log(jeep);

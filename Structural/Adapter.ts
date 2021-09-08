class RoundHole {
        constructor(private radius: number) {}

        getRadius() {
                return this.radius;
        }

        compareRadius(roundPeg: RoundPeg) {
                return roundPeg.getRadius() <= this.radius;
        }
}

class RoundPeg {
        constructor(private radius: number) {}

        getRadius() {
                return this.radius;
        }
}

class SquarePeg {
        constructor(private width: number) {}

        getWidth() {
                return this.width;
        }
}

class SquarePegAdapter extends RoundPeg {
        constructor(private squarePeg: SquarePeg) {
                super((squarePeg.getWidth() * Math.sqrt(2)) / 2);
        }
}

const hole = new RoundHole(10);
const rpeg = new RoundPeg(5);
console.log(hole.compareRadius(rpeg));

const small_speg = new SquarePeg(10);
const large_speg = new SquarePeg(100);

const small_speg_adapter = new SquarePegAdapter(small_speg);
console.log(hole.compareRadius(small_speg_adapter));

const large_speg_adapter = new SquarePegAdapter(large_speg);
console.log(hole.compareRadius(large_speg_adapter));

abstract class BossFactory {
        public abstract name: string;
        public abstract complexity: number;
        public abstract create(name: string): void;
        public abstract show(): void;
}

class EasyBoss extends BossFactory implements BossInfo {
        constructor(public name, public complexity = 1) {
                super();
        }
        create(name) {
                return new EasyBoss(name, 1);
        }
        show() {
                console.log(`Easy boss ${this.name}. Complexity = ${this.complexity}`);
        }
}

class MediumBoss extends BossFactory implements BossInfo {
        constructor(public name, public complexity = 2) {
                super();
        }
        create(name) {
                return new MediumBoss(name, 2);
        }
        show() {
                console.log(`Medium boss ${this.name}. Complexity = ${this.complexity}`);
        }
}

class HardBoss extends BossFactory implements BossInfo {
        constructor(public name, public complexity = 3) {
                super();
        }
        create(name) {
                return new EasyBoss(name, 3);
        }
        show() {
                console.log(`Hard boss ${this.name}. Complexity = ${this.complexity}`);
        }
}

interface BossInfo {
        readonly name: string;
}

const clientCode = (bossArr: BossFactory[]) => {
        bossArr.forEach((boss) => boss.show());
};

console.log('Lets go testing out pattern!');
clientCode([new EasyBoss('Djoker'), new MediumBoss('Hitler'), new HardBoss('Dragon')]);

class Database {
        static instance: Database;
        private data: any;
        constructor(data: any) {
                if (!Database.instance) {
                        Database.instance = this;
                        this.data = data;
                }

                return Database.instance;
        }

        getData() {
                return this.data;
        }
}

const database1 = new Database('PostgreSQL');
const database2 = new Database('MySQL');

console.log(database1.getData());
console.log(database2.getData());

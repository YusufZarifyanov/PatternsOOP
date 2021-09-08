interface DataSourse {
        writeData(data: string): void;
        readData(): string;
        getData(): string;
}

class FileData implements DataSourse {
        constructor(private fileData: string) {}
        writeData() {}

        readData() {}

        getData() {}
}

class DataSourseDecorator implements DataSourse {
        constructor(protected wrappee: DataSourse, private fileData: string = '') {}
        writeData(data: string) {
                this.wrappee.writeData(data);
        }

        readData() {
                return this.readData();
        }

        getData() {
                return this.fileData;
        }
}

class EncryptionDecorator extends DataSourseDecorator {
        private salt: string = 'secretSalt';
        writeData(data: string) {
                data = data + this.salt;
                this.writeData(data);
        }

        readData() {
                const newData = this.readData();
        }
}

const;
const decorator = new DataSourseDecorator();

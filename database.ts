interface Database {
    get(id: string): string;
    set(id: string, value: string): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id];
    }
    set(id: string, value: string): void {
        this.db[id] = value;
    }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const myDb = new InMemoryDatabase();
myDb.set("foo", "bar");
// myDb.db["foo"] = "bar";
console.log(myDb.get("foo"));

const myDb2 = new PersistentMemoryDB();
myDb2.set("foo", "bar");
console.log(myDb2.saveToString());



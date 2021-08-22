function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

const dogs = [
    { name: "Mimi", age: 12 },
    { name: "Lg", age: 13 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string };
    checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
    console.log([name, data]);
}

sendEvent("addToCart", { time: 1, user: "test", quantity: 1, productID: "ABCD" });


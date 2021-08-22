let userName: string = "Jack";
let hasLoggedIn = true;
const names: string[] = userName.split("a");
const myValues: Array<number> = [1, 2, 3];

interface Person {
    fist: string;
    last: string
}

type Person2 = {
    fist: string;
    last: string
}

const myPerson: Person = {
    fist: "Jack",
    last: "Herrington"
};

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

const out: number[] = [4, 5, 6].map((v) => v * 10);
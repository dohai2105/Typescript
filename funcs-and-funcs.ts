export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

type MutationFuntion = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFuntion): number[] {
    return numbers.map(mutate);;
}

console.log(arrayMutate([1, 20, 3], (v) => v * 2))

const myMutationFuntion: MutationFuntion = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], myMutationFuntion));

export function createAdder(num: number): (val: number) => number {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55))
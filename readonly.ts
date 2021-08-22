interface Cat {
    readonly name: string;
    breed: string;
}

function makecat(name: string, breed: string): Readonly<Cat> {
    return {
        name,
        breed,
    }
}

const usul = makecat("name", "O1");
usul.name = "updateName";

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
    return [x, y, z];
}

const c1 = makeCoordinate(10,20,30);
c1[0] = 50;


const reallyConst = [1,2,3] as const
reallyConst[0] = 3;
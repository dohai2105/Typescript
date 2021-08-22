interface Coordinate {
    x: number,
    y?: number,
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return {
        ...obj,
    }
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
    return {
        x,
        y,
    }
}

function parseCoodinate(str: string): Coordinate;
function parseCoodinate(x: number, y: number): Coordinate;
function parseCoodinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    }

    if (typeof arg1 === "object") {
        coord = {
            ...(arg1 as Coordinate)
        };
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }

    return coord;
}
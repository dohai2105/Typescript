interface MyUser {
    name: string;
    id: string;
    email?: string;
    phone?: string;
}
// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge(
    {
        name: "jack",
        id: "foo",
        email: "dohai2105@gmail.com",
    },
    {
        email: "test@gmail.com",
    },
))

type RequireMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, "email" | "name">
type ReadOnlyMyUser = Readonly<MyUser>

const readOnlymyUser: ReadOnlyMyUser =
{
    name: "string",
    id: "string",
}

const mapById = (user: MyUser[]): Record<string, Omit<MyUser, "id">> => {
    return user.reduce((a, v) => {
        const {id, ...other} = v;
        return {
            ...a,
            [id]: other,
        }
    }, {})
}

console.log(mapById ([
    {
        id: "foo",
        name: "Mr. Foo"
    },
    {
        id: "foo2",
        name: "Mr. Foo2"
    }
]))
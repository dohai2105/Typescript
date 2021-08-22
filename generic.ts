function simpleStringState<T>(
    initial: T
): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        },
    ];
}

const [str1Getter, str1Setter] = simpleStringState(10);
console.log(str1Getter());
str1Setter(20);
console.log(str1Getter());

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }))

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemons: Pokemon[] =
    [
        {
            name: "Bulbasaur",
            hp: 20
        },
        {
            name: "Pikachu",
            hp: 5
        },
    ];
 const ranks = ranker(pokemons, ({hp}) => hp);
 console.log(ranks);

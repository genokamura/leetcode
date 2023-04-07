type StringNumber = Record<string, number>
const token: StringNumber = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
};

function romanToInt(s: string): number {
    let r: number = 0;

    const given = s.split('');
    for (let i = 0; i < given.length; i++) {
        if (i !== given.length - 1) {
            if (given[i] === 'I') {
                if (given[i + 1] === 'V' || given[i + 1] === 'X') {
                    r -= token[given[i]];
                    continue;
                }
            } else if (given[i] === 'X') {
                if (given[i + 1] === 'L' || given[i + 1] === 'C') {
                    r -= token[given[i]];
                    continue;
                }
            } else if (given[i] === 'C') {
                if (given[i + 1] === 'D' || given[i + 1] === 'M') {
                    r -= token[given[i]];
                    continue;
                }
            }
        }
        r += token[given[i]];
    }
    return r;
};

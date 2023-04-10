type Bracket = {
  start: '(' | '{' | '[';
  end: ')' | '}' | ']';
};

function isValid(s: string): boolean {
  const brackets: Bracket[] = [
    { start: '(', end: ')' },
    { start: '{', end: '}' },
    { start: '[', end: ']' },
  ];

  const stack: Bracket[] = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = brackets.find((b) => b.start === s[i] || b.end === s[i]);

    if (!bracket) {
      return false;
    }

    if (bracket.start === s[i]) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();

      if (lastBracket?.end !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

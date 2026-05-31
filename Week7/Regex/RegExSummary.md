## Brief Summary of JavaScript regular expressions

Character Classes

- .: Matches any single character except newline \n.
- \d: Matches any digit (equivalent to [0-9]).
- \w: Matches any alphanumeric character including the underscore (equivalent to
  [a-zA-Z0-9_]).
- \s: Matches any whitespace character (spaces, tabs, line breaks).

Quantifiers

- \*: Matches 0 or more repetitions of the preceding element.
- +: Matches 1 or more repetitions of the preceding element.
- ?: Matches 0 or 1 repetition of the preceding element (makes preceding element
  optional).
- {n}: Matches exactly n occurrences of the preceding element.
- {n,}: Matches n or more occurrences of the preceding element.
- {n,m}: Matches between n and m occurrences of the preceding element.

Assertions

- ^: Matches the beginning of a string or line.
- $: Matches the end of a string or line.
- \b: Matches a word boundary (position between a word character and a non-word
  character).

Groups and Ranges

- (...): Captures the matched substring for use in the result.
- [abc]: Matches any one of the characters a, b, or c.
- [^abc]: Matches any one character that is not a, b, or c.
- [a-z]: Matches any character from lowercase a to lowercase z.

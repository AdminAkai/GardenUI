# GardenUI (pre-alpha)

Open Source minimal UI library for React

[NPM Repo for Adminis - GardenUI](https://www.npmjs.com/package/adminis-gardenui)

---

## Hacker Scramble Effect:

#### `<ScrambleText />`

Hacker Scramble Effect Component for text. Takes a `text` prop and can be customized freely.

- `text: string` - Text to scramble

#### `useHackerScramble()`

Hacker Scramble hook for text, the underlying driver for `<ScrambleText />`.

- Takes text as argument and returns a text that changes.
- **Important**: Causes the component to **_re-render until the scramble is completed_**.

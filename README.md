# GardenUI (pre-alpha)

Open Source minimal UI library for React

[NPM Package for Adminis - GardenUI](https://www.npmjs.com/package/adminis-gardenui)
[Github Repo for Adminis - GardenUI](https://github.com/AdminAkai/GardenUI)

---

<br>

## Hacker Scramble Effect:

#### `<ScrambleText />`

Hacker Scramble Effect Component for text. Takes a `text` prop and can be customized freely.

- `text: string` - Text to scramble

<br>

#### `useHackerScramble(text: string)`

Hacker Scramble hook for text, the underlying driver for `<ScrambleText />`.

- Takes a `string` as argument and returns a `string` that changes.
- **Important**: Causes the component to **_re-render until the scramble is completed_**.
- Ideally only use in isolated text components or use `<ScrambleText />` instead

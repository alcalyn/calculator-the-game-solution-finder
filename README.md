Calculator solution finder
==========================

Calculate solutions for puzzles
[Calculator: The Game](https://play.google.com/store/apps/details?id=com.sm.calculateme).

Enter initial number, available touches and target number,
then it says which keys to press, in which order.

``` bash
node main.js 25 -4 x-4 /3 +/- /8 4

searching solution...

SOLUTION FOUND: [-4]  [/3]  [-4]  [-4]  [x-4]
```


## Install

To use it locally, [download it here](https://github.com/alcalyn/calculator-the-game-solution-finder/archive/master.zip)
and extract it.

Or, using git:

``` bash
git clone git@github.com:alcalyn/calculator-the-game-solution-finder.git
cd calculator-the-game-solution-finder/
```


## Usage

With nodejs:

``` bash
node main.js [initial] [touches...] [target]

# Examples:

# I have 34, I have touches [-5] [+8] [/7] [+/-], and I need to reach 3
node main.js 34 -5 +8 /7 +/- 3

# Use quotes for special characters, like '<'
node main.js 34 +/- "<<" +2 3
```

### Supported touches

| Name          | Format            | Examples              |
|---------------|-------------------|-----------------------|
| Sum or sub    | `+N` or `-N       | `+5`, `-2`            |
| Mul           | `xN`              | `x2`, `x-5`           |
| Div           | `/N`              | `/2`, `/-5`           |
| Replace       | `N => P`          | `1 => 2`, `25 => 36`  |
| ShiftRight    | `<<`              | `<<`                  |
| Opposite      | `+/-`             | `+/-`                 |
| Unshift       | `N`               | `1`, `6`              |


## License

This library is under [MIT License](LICENSE).

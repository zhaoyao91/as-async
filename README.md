# As Async

## Description

Sometimes we want to run a function uniformly in async/await manner no matter if it is a sync or async function. 
This package help you do this.

## Install

`npm install --save as-async`

## Usage

```
const {run, wrap} = require('as-async')

// original sync or async function
const fn = ... 

// you can wrap it into an async function
const asyncFn = wrap(fn)
const result = await asyncFn(...args)

// or run it directly as an async function
const result = run(fn, ...args)
```

## License

MIT

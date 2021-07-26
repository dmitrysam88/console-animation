# Console animator

It is the library to show progress in the terminal (console).

Code example:

```js
const createAnimation = require('console-animator').default;

import { promisify } from 'util';

const sleep = promisify(setTimeout);

let v = 0;

const spinner = createAnimation(['/', '-', '\\', '|'], () => v, '%a \t %v', 200);

function loop() {
  const inter = setInterval(() => {
    if (v > 10 ** 4) clearInterval(inter);
    v++;
  }, 5);
}

(async function () {
  spinner.start();

  loop();

  await sleep(10000);

  spinner.stop();
})();

```

`createAnimation` - is a function which create animation with methods `start` and `stop`;

Argument list:

- `animations` - an array of strings that will change in animation;
- `varListerner` - a function that will return the current value of the mutable variable in the animation; 
- `template` - string which can have two variable `%a` and `%v` which will replace to value from `animations` and `varListerner`;
- `speed` - animation spped time in milliseconds wait before animation will change;

import readline from 'readline';

export default function (animations: Array<string> = [], varListerner: Function = undefined, template: string = undefined, speed: number = 100) {

  let interval;
  let i = 0;

  if (! template) template = 'It is work';

  function logInSameRow(text: string) {
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`${text} \t`);
  }

  function generateString(animationElement: string | undefined) {
    return template.replace('%a', animationElement).replace('%v', varListerner());
  }

  function loop() {
    if (i > animations.length - 1) i = 0;
    logInSameRow(generateString(animations[i]));
    i++;
  }
  
  function start() {
    interval = setInterval(loop, speed);
  }

  function stop() {
    clearInterval(interval);
    console.log('\n');
  }

  return { start, stop }

}
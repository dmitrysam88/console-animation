"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
function default_1(animations = [], varListerner = undefined, template = undefined, speed = 100) {
    let interval;
    let i = 0;
    if (!template)
        template = 'It is work';
    function logInSameRow(text) {
        readline_1.default.cursorTo(process.stdout, 0);
        process.stdout.write(`${text} \t`);
    }
    function generateString(animationElement) {
        return template.replace('%a', animationElement).replace('%v', varListerner());
    }
    function loop() {
        if (i > animations.length - 1)
            i = 0;
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
    return { start, stop };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
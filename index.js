let codes = {
    reset: [0, 0],

    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],

    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],

    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],

    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],

    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],

    // legacy styles for colors pre v1.0.0
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49],

};

let trap_ = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
        '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['z00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
        '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
};
let available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];

let  rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];

let colors ={};

    colors.stylize = function(str, color){
        let code = codes[color];
        return ('\u001b[' + code[0] + 'm'+str+'\u001b[' + code[1] + 'm');
    };
    colors.trap=function(text) {
    var result = '';
    text = text || 'Run the trap, drop the bass';
    text = text.split('');
    text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap_[c] || [' '];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap_[c] !== 'undefined') {
            result += trap_[c][rand];
        } else {
            result += c;
        }
    });
    return result;
};
    colors.zebra = function(str) {
        let mappedStr='';
      str = str.split('');
      for (let i=0; i<str.length; i++){
          if (i % 2 === 0) {
              mappedStr+=str[i];
          }
          else{
              mappedStr+=colors.stylize(str[i], 'inverse');
          }
      }
    return mappedStr;
    };

    colors.random = function(str) {
        let mappedStr='';
        str = str.split('');
        for(let i=0; i<str.length; i++){
            if (str[i] === ' ') {
                mappedStr+=str[i];
            }
            else{
                mappedStr+=colors.stylize(str[i], available[Math.round(Math.random() * (available.length - 2))]);
            }
        }
        return mappedStr;
    };

    colors.rainbow = function(str) {
        let mappedStr='';
        str = str.split('');
        for(let i=0; i<str.length; i++){
            if (str[i] === ' ') {
                mappedStr+=str[i];
            } else {
            mappedStr+=colors.stylize(str[i],[rainbowColors[i % rainbowColors.length]]);
            }
        }
        return mappedStr;
};
    colors.america = function(str) {
        let mappedStr='';
        str = str.split('');
        for(let i=0; i<str.length; i++){
            if (str === ' ') {
                mappedStr+=str[i];
            } else{
                switch (i%3) {
                    case 0: mappedStr+=colors.stylize(str[i], 'red');break;
                    case 1: mappedStr+=colors.stylize(str[i], 'white');break;
                    case 2: mappedStr+=colors.stylize(str[i], 'blue');break;
                }
            }
        }
        return mappedStr;
};
colors.setTheme = {
    silly: ['rainbow'],
    input: ['grey'],
    verbose: ['cyan'],
    prompt: ['grey'],
    info: ['green'],
    data: ['grey'],
    help: ['cyan'],
    warn: ['yellow'],
    debug: ['blue'],
    error: ['red'],
    custom:['whiteBG']
    
};
        colors.theme = function(str, style){
        let style_ =  colors.setTheme[style];
        for (let i = 0; i<style_.length;i++){
            str = colors.stylize(str,style_[i]);
        }

        return   str;
    };

    export {colors}



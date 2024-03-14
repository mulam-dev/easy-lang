import {init_converter, load_cmrule} from "./chelonia/utils.js";
import {parser} from "./chelonia/parser.js";
const __dirname = new URL('.', import.meta.url).pathname;

if (import.meta.main) {
    await init_converter();
    const rule = await load_cmrule(__dirname + "rules/easy-lang-base");
    console.log(parser(rule, `
        0 1 -2 3.14
        #T #F
        \`hello\` \`backseq\n\`
        \`multiline
        newline\`
        token - -> ' $name \\\`
        @call(1 2)
        @@rcall(1)(2)
    `.split('')));
}
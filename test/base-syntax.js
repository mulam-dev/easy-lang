import {init_converter, load_cmrule, load_text} from "../chelonia/utils.js";
import {parser} from "../chelonia/parser.js";
import "../ext-lang/all.js";
const mdir = import.meta.url.path_dir.trim_start("file://");

if (import.meta.main) {
    await init_converter();
    const rule = await load_cmrule(mdir.path_join("../rules/easy-lang-base"));
    const src = await load_text(mdir.path_join("base-syntax.elb"));
    parser(rule, src.split('')).ll;
}
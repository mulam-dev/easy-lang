import {init_converter, load_cmrule, load_text} from "./chelonia/utils.js";
import {parser} from "./chelonia/parser.js";
import "./ext-lang/all.js";
const mdir = import.meta.url.path_dir.trim_start("file://");

let cur_uidx = 0;
const uuid = () => (cur_uidx++).toString(16).padStart(1, '0');

const TYPES = {};

const sign_type = (type, extend) => {
    TYPES[type] = {
        extend,
    };
};
const sign_anon_type = (...args) => {
    const type = "t:" + uuid();
    sign_type(type, ...args);
    return type;
};

const type = (base, ...params) => {
    return [base, ...params.map(p => type(...(p instanceof Array ? p : [p])))];
};

const FUNCS = {};

const sign_func = (name) => {
    FUNCS[name] = {};
};
const sign_anon_func = (...args) => {
    const name = "λ:" + uuid();
    sign_func(name, ...args);
    return name;
};

sign_type("Number", []);
sign_type("Vector", []);
sign_type("String", []);
sign_type("Lambda", []);

if (import.meta.main) {
    await init_converter();
    const rule = await load_cmrule(mdir.path_join("rules/easy-lang-base"));
    const src = await load_text(mdir.path_join("main.elb"));
    const program = parser(rule, src.split('')).ll;
    TYPES.ll;
    FUNCS.ll;
}
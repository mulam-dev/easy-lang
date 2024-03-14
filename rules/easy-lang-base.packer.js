export const packer = {
    Gap: elems => [],
    Number: elems => [{id: "Number", value: Number.parseFloat(elems.join(''))}],
    Boolean: elems => [{id: "Boolean", value: elems[1] === "T"}],
    String: elems => [{id: "String", value: elems[1]}],
    StringBody: elems => [elems.join('')],
    StringBackslashSequence: elems => [elems[1]],
    Token: elems => [{id: "Token", value: elems.join('')}],
    TokenBackslashSequence: elems => [elems[1]],
    Call: elems => [{id: "Call", head: elems[1], body: elems[3]}],
    CallBody: elems => [elems],
};
function regexVar() {
  let re = /^(Mr|Mrs|Ms|Dr|Er)\. ?[a-zA-Z]+$/gi;
  return re;
}

let regexp = regexVar();
let str = "Dr.Joseph";

console.log(!!str.match(regexp));

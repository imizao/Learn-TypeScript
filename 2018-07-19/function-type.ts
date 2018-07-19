interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

console.log(mySearch("诸 葛", "葛"));
console.log(mySearch("诸葛", "亮"));
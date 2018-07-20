/**
 * 某种程度上说，void 类型像是与 any 类型相反，它表示没有任何类型。
 * 当一个函数没有返回值时，你通常会看到其返回的类型是 void
 */
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
warnUser();
console.log(unusable);
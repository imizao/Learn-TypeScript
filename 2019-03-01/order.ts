declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem);

interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}
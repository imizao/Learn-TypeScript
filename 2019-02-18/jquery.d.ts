// 定义 jQuery 需要用到的类型命名空间
declare namespace JQuery {
  // 定义基本使用的类型
  type Selector = string;
  type TypeOrArray<T> = T | T[]
  type htmlString = string;
}

// 定义 jQuery 接口， jQuery 是一个包含 Element 的集合
interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
  length: number;
  eq(index: number): this;
  // 重载
  add(selector: JQuery.Selector, context: Element): this;
  add(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery.htmlString | JQuery): this;

  children(selector?: JQuery.Selector): this;
  css(propertyName: string): string;
  html(): string;
}

// 对模板 jquery 输出接口
declare module 'jquery' {
  // module 中要使用 export = 而不是 export default
  export = JQuery
}
class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
}

/**
 * 如果没有 this类型， ScientificCalculator就不能够在继承 
 * BasicCalculator的同时还保持接口的连贯性。 
 * multiply将会返回 BasicCalculator，它并没有 sin方法。 
 * 然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator。
 */

let v = new ScientificCalculator(2)
            .multiply(5);
            .sin()
            .add(1)
            .currentValue();


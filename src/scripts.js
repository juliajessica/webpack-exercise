export class Sum {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculator() {
    let a = +this.a;
    let b = +this.b;
    let c = a + b;
    return c;
  }
  // console.log(c);
}

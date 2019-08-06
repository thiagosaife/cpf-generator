class CpfGenerator {
  constructor(mask) {
    this.mask = mask;
  }

  generateNumbers() {
    const random = number => Math.round(Math.random() * number);
    const mod = (dividend, divider) =>
      Math.round(dividend - (Math.floor(dividend / divider) * divider));
    const rn = [...Array(9)].map(() => random(9));
    let m1 = 1;
    let m2 = 2;
    let d1 = rn.reduceRight((total, number) => {
      m1 += 1;
      return total + (number * m1);
    }, 0);
    let d2 = rn.reduceRight((total, number) => {
      m2 += 1;
      return total + (number * m2);
    }, 0);
    d1 = 11 - (mod(d1, 11));
    if (d1 >= 10) d1 = 0;

    d2 += (d1 * 2);
    d2 = 11 - (mod(d2, 11));
    if (d2 >= 10) d2 = 0;

    if (this.mask) {
      return `${rn[0]}${rn[1]}${rn[2]}.${rn[3]}${rn[4]}${rn[5]}.${rn[6]}${rn[7]}${rn[8]}-${d1}${d2}`;
    }
    return `${rn[0]}${rn[1]}${rn[2]}${rn[3]}${rn[4]}${rn[5]}${rn[6]}${rn[7]}${rn[8]}${d1}${d2}`;
  }
}

export default CpfGenerator;

class CpfGenerator {
  constructor(mask) {
    this.mask = mask;
  }

  generateNumbers() {
    const random = number => Math.round(Math.random() * number);
    const rn = [...Array(9)].map(() => random(9));
    let m1 = 1;
    let m2 = 2;
    let d1 = rn.reduceRight((total, item) => {
      m1 += 1;
      return total + (item * m1);
    }, 0);
    let d2 = rn.reduceRight((total, item) => {
      m2 += 1;
      return total + (item * m2);
    }, 0);
    d1 = (d1 % 11) < 2 ? 0 : 11 - (d1 % 11);

    d2 += d1 * 2;
    d2 = (d2 % 11) < 2 ? 0 : 11 - (d2 % 11);

    if (this.mask) {
      return `${rn[0]}${rn[1]}${rn[2]}.${rn[3]}${rn[4]}${rn[5]}.${rn[6]}${rn[7]}${rn[8]}-${d1}${d2}`;
    }
    return `${rn[0]}${rn[1]}${rn[2]}${rn[3]}${rn[4]}${rn[5]}${rn[6]}${rn[7]}${rn[8]}${d1}${d2}`;
  }
}

export default CpfGenerator;

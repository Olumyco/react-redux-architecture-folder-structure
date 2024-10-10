const moneyFormat = money => {
    const a = (money/100).toFixed(2);
    let x = (a/1000);
    let y = a + '';
    let z = '';
    if (x >= 1 && x < 1000) {
        x = (x + '').split('.')[0];
        z = y.slice(0, x.length) + ',' + y.slice(x.length);
        return z;
    } else if (x >= 1000 && x < 1000000) {
        let c = (x/1000 + '').split('.')[0];
        x = (x + '').split('.')[0];
        z = y.slice(0, c.length) + ',' + y.slice(c.length, x.length) + ',' + y.slice(x.length);
     return z;
    } else {
      return y;
    }
}

export {
    moneyFormat
};
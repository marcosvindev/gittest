function imcCalculator(weigh, height) {
    let hightMultiplied = height * height;
    let imc = weigh / hightMultiplied;
    return imc;

    
}

console.log(imcCalculator(90, 1.80));

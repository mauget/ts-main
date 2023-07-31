function sqrtNM(arg){
    const GUESS = arg / 3;
    // In finding the zero of f(x) = x2 − a, e have f′(x) = 2x
    const epsilon = 0.0000001;
    let x0 : number;
    let x1 = GUESS;
    do {
        x0 = x1;
        const fx = (x)=> x * x - arg;
        const fxp = (x) => 2 * x;
        x1  = x0 - fx(x0) / fxp(x0);
    } while((Math.abs(x1 - x0) > epsilon));

    return x1;
}
export default sqrtNM;

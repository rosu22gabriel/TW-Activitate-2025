// JavaScript are un mecanism clasic de tratare a exceptiilor
// cu throw, try, catch si finally

function div(a, b) {
    var r = NaN;
    try {
        if (typeof a === "string") {
            a = parseFloat(a);
        }
        if (typeof b === "string") {
            b = parseFloat(b);
        }
        if (b === 0) {
            throw("Divide by zero error.");
        } else {
            r = a / b;
        }
    } catch (e) {
        console.log(e);
    } finally {
        console.log(r);
    }
    return r;
}
var isTrue = true;
var isFalse = false;



function checkValue(value) {
    if(value ) { 
        console.log(typeof(value) + " is a Truthy Value");
    } else { 
        console.log(typeof(value) + " is a Falsy Value");
    }
}

checkValue(isFalse);
checkValue('');
checkValue(0);
checkValue(-0);
checkValue(undefined);
checkValue(null);
checkValue(NaN);
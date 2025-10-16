const n = 1;
function f() { 
    const n = 2;
    console.log(`in function n = ${n}`);
    { 
        const n = 3;
        console.log(`in block of function n = ${n}`);
    }
}
console.log(`global n = ${n}`);
f();
{ 
    const n = 4;
    console.log(`in global block n = ${n}`);
}
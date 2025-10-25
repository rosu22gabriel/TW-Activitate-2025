// Callback-urile duc la ramificarea programului si la imbricare;
// Promise-urile elimina imbricarea dar pastreaza ramificarea programului;
// Async/Await in plus fata de eliminarea imbricarii si liniarizeaza ramificatiile programului

function doSomethingAsync(callback) {
    // getting the result
    callback(result);
}

doSomethingAsync(result => { 
    // consuming the result
    result.doSomethingAsync(otherResult => { 
        // consuming the other result
    });
});

// function doSomethingAsync() { 
//     return new Promise(resolve) {
//         // getting the result
//         resolve(result);
//     };
// }

doSomethingAsync()
    .then(result => { 
        // consuming the result
        return result.doSomethingAsync();
    })
    .then(otherResult => { 
        // consuming the other result
    });

async function doSomethingAsync() { 
    // awaiting to get the result
    return result;
}

result = await doSomethingAsync();
// consuming the result
otherResult = await result.doSomethingAsync();
// consuming the other result




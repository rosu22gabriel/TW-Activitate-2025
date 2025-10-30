// Basic
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        strawberry: 'strawberry'
    }

    return Promise.resolve(fruits[name]);
}

getFruit('peach').then(console.log);


// Async + Await

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    const smoothie = Promise.all([a, b]);
    return smoothie;
}

const badSmoothie = async() => {
    try {
        const a = await getFruit('pineapple');
        const b = await getFruit('strawberry');
        const smoothie = Promise.all([a, b]);
        
        throw 'broken';

        return smoothie;

    } catch (err) {
        console.log(err);
        // return "We're going to be fine..."
        // throw 'It's broken!'
    }
}



// Promise

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
        .then(v => {
            v = a;
            return getFruit('strawberry');
        })
        .then(v => [v, a]);
}



const fruits = ['peach', 'pineapple', 'strawberry'];
// const smoothie = fruits.map(v => getFruit(v));

// const smoothie = fruits.map(async v => {
//     const emoji = await getFruit(v)
//     log(emoji)
//     return emoji
// });

// const fruitLoop = async() => {
//     for (const f of fruits) {
//         const emoji = await getFruit(f);
//         log(emoji);
//     }
// }

const fruitLoop = async() => { 
    for await (const emoji of smoothie) {
        log(emoji)
    }
}

fruitLoop();

const fruitInspection = async() => {
    if (await getFruit('peach') === 'peach') {
        console.log('looks peachy!')
    }
}
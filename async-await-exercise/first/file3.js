const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
    // let i = 0;
    // while(i < 1000000) {
    //     i++;
    // }
    // return 'Billion loops are done';
    // return new Promise((resolve, reject) => 
    // {
    //     let i = 0;
    //     while(i < 1000000000) { i++;}
        
    //     resolve('billion loops done');
    // });
    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) { i++; }
        return 'billion loops done';
    })
}

log('Synchronous 1');
log(codeBlocker());
log('Synchronous 2');





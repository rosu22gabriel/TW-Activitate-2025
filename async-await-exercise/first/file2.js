import fetch from 'node-fetch';

const promise = fetch('http://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => {
        throw new Error('uh oh');
        return user;
    })
    .then(user => console.log('emoji-1', user.title))
    .catch(err => console.error('emoji2', err));

console.log('Synchronous');
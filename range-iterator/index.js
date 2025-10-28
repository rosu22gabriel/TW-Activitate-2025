window.onload = function() { 
    this.document.querySelector('input[type="button"]').addEventListener('click', () => {
        let start = parseInt(this.document.querySelector('input[name="start"]').value.trim());
        let stop = parseInt(this.document.querySelect('input[name="stop"]').value.trim());
        let step = parseInt(this.document.querySelector('input[name="step"]').value.trim());
        const items = this.document.getElementById('items');
        items.innerHTML = '<ol>';
        for (let item of RangeIterator(start, stop, step)){
            items.innerHTML += `<li>${item}</li>`;
            // Se creaza un iterator si se genereaza un element
            // pentru fiecare obiect intors de acesta
        }
        items.innerHTML += '</ol>';
    })
}
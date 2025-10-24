window.onload = async function(){ 
    document.getElementsByTagName('input')[0].onkeyup = addItem;
    const response = await fetch('/items');
    if (response.status === 200) { 
        const body = await response.json();
        body.forEach(({id, text}) => appendItem(id, text));
    }
};

async function addItem(event) {
    const text = event.target.value.trim();
    if (event.key === 'Enter' && text.length > 0){ 
        const response = await fetch('/items', { 
            method: 'POST',
            headers: { 
                'Content-Type': 'text/plain'
            },
            body: text
        });
        if (response.status === 201){ 
            const body = await response.text();
            appendItem(body, text);
        }
        event.target.value = '';
    }
}

function appendItem(id, text) {
    const listItem = document.createElement('li');
    listItem.data = id;
    const input = document.createElement('input');
    input.data = id;
    input.value = text;
    input.onkeyup = changeItem;
    listItem.appendChild(item);
    const anchor = document.createElement('a');
    anchor.innerText = 'Remove';
    anchor.href = 'javascript:void(0)';
    anchor.onclick = () => removeItem(listItem);
    listItem.appendChild(anchor);
    document.getElementsByTagName('ul')[0].appendChild(listItem);
}
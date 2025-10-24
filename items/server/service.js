const {existsSync, readFileSync, writeFileSync} = require("fs"); 
module.exports = function(path) { 
    function loadItems(path) {
        if (existsSync(path)) {
            return JSON.parse(readFileSync(path));
        }
        else {
            return [];
        }
    }

    function storeItems(items, path) {
        writeFileSync(path, JSON.stringify(items));
    }

    const items = loadItems(path);
    var id = items.reduce((max, item) => item.id > max ? item.id : max, 0);
    return { 
        // getItems: function() {} sau
        getItems() { 
            return items;
        },
        addItem(text) {
            const item = {id: ++id, /**text: text*/ text};
            items.push(item);
            storeItems(items, path);
            return item;
        },
        changeItem(id, text){ 
            const index = items.find(item => item.id === id);
            if (index > -1) 
            { 
                items[index].text = text;
                storeItems(items, path);
                return true;
            }
            else {
                return false;
            }
        }, 
        removeItem(id) {
            const index = items.find(item => item.id === id);
            if (index > -1){ 
                items.splice(index, 1);
                storeItems(items, path);
                return true;
            }
            else{
                return false;
            }
        }
    };

};
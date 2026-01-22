// Salvam datele pe server intr-un fisier cu ajutorul modulului fs
const {existsSync, readFileSync, writeFileSync} = require('fs');

const uuid = require('uuid');
module.exports = function(path) {
    function readRecords(path) {
        if (existsSync(path)) {
            return JSON.parse(readFileSync(path));
        } else {
            return {};
        }
    }
    function writeRecords(records, path) {
        writeFileSync(path, JSON.stringify(records));
    }
    const records = readRecords(path);
    return {
        getRecords() {
            // Se citeste continutul fisierului ca JSON
            return Object.entries(records)
            // Se parcurg perechile [cheie, valoare] din obiectul stocat in fisier
            // si adaugam cheia care reprezinta id-ul valorii care este inregistrarea
            // de model de tip student
                .map(([id, record]) => {
                    record.id = id;
                    return record;
                });
        },
        getRecord(id) {
            return records[id];
        }, 
        addRecord(record){ 
            const id = uuid.v4();
            records[id]= record;
            writeRecords(records, path);
            return id;
        },
        saveRecord(id, record) {
            if (records.hasOwnProperty(id)) {
                records[id] = record;
                writeRecords(records, path);
                return true;
            } else {
                return false;
            }
        },
        removeRecord(id) {
            if (records.hasOwnProperty(id)) {
                delete records[id];
                writeRecords(records, path);
                return true;
            } else {
                return false;
            }
        }


    }
}
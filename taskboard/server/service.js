const {existsSync, readFileSync, writeFileSync} = require('fs');
module.exports = function(path) {
    const tasksByStatus = existsSync(path)
        ? JSON.parse(readFileSync(path)) : {};
    return {
        getTasksByStatus() {
            return tasksByStatus;
        },
        changeTaskStatus() { 
            if (tasksByStatus[oldStatus] instanceof Array
                && tasksByStatus[newStatus] instanceof Array) {

                let index = tasksByStatus[oldStatus].findIndex(task);
                if (index > -1) {
                    tasksByStatus[oldStatus].splice(index, 1);
                    tasksByStatus[newStatus].push(task);
                    writeFileSync(path, JSON.stringify(tasksByStatus));
                    return true;
                }
            }
        }
    } 
}
HTMLElement.prototype.taskboard = function(tasksByStatus, changeTaskStatus) {
    this.innerHTML = '';
    this.className = 'container';
    Object.entries(tasksByStatus).forEach(([status, tasks]) => {
        

    });
};
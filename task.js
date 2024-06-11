const FormatedDate = require('./Date.js');

// task status -open, in-progress, peer-review, Resolve conflict, verified


const TaskStatus = {
    OPEN: 'open',
    IN_PROGRESS: 'in-progress',
    PEER_REVIEW: 'peer-review',
    RESOLVE_CONFLICT: 'resolve-conflict',
    VERIFIED: 'verified'
};


class Task {
    constructor(taskName, description,taskOwner){
        this.taskName = taskName
        this.description = description
        this.taskOwner = [taskOwner]
        this.createdDate = FormatedDate.getCurrentDate()
        this.taskStatus = TaskStatus.OPEN
    }

    addTaskOwner(taskOwner) {
        this.taskOwner.push(taskOwner)
    }
}



class TaskOwner {
    constructor(name,email,tasks) {
        this.name = name
        this.email = email
        if (tasks.length === 0) { 
            this.tasks = tasks
        } else {
            this.tasks = []
        }
    }
}

console.log(new FormatedDate().getCrrentDate())
const FormatedDate = require('./Date.js');
const TaskManager = require('./taskmanager.js')
const Date = new FormatedDate();
const TaskController = new TaskManager();
// task status -open, in-progress, peer-review, Resolve conflict, verified





class Task {
    constructor(taskName, description,taskOwner){
        this.taskName = taskName
        this.description = description
        this.taskOwner = [taskOwner]
        this.createdDate = Date.getCurrentDate()
        this.createdTimeInMillis = Date.getCurrentTimeinMillis()
        this.updateDate = Date.getCurrentDate()
        this.updatedTimeInMillis = Date.getCurrentTimeinMillis()
        this.TaskManager = new TaskManager();
        this.TaskStatus = this.TaskManager.defaultStatus.OPEN
        this.taskFlow = [[this.task.status,this.createdTimeInMillis]]
    }
    
    addTaskOwner(taskOwner) {
        this.taskOwner.push(taskOwner)
    }

    getValidTransistion() {
        return this.TaskManager.getValidTransistion(this.TaskStatus)
    }
    
    makeTransistion(status) {
        let validTranstions = this.getValidTransistion()
        console.log(validTranstions)
        if(validTranstions.includes(status)) {
            this.TaskStatus =  status.toUpperCase()
            this.taskFlow.push([this.TaskStatus,Date.getCurrentTimeinMillis()])
            this.updatedTimeInMillis = Date.getCurrentTimeinMillis()
            this.updateDate = Date.getCurrentDate
        }
    }

    getTaskFlow() {
        return this.taskFlow
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

let task = new Task()
console.log(task.getValidTransistion())
console.log(task.makeTransistion('InProgress'))
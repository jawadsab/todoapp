let taskID = 100
class TaskClass {
    static taskID = 0;
    constructor(taskTitle,taskState = "ACTIVE") {
        this.taskTitle = taskTitle,
        this.taskState = taskState // active, inActive
        this.id = taskID;
        taskID++;

    }
}

export default TaskClass;
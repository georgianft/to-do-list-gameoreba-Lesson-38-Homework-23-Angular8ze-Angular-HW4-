export class TodoModel {
    id: number;
    title: string
    description: string
    // completed: boolean =false;
    completed: boolean;
    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}

export class customInput {
    completed: boolean =false;
    constructor() {
        this.completed = false;
    }
}


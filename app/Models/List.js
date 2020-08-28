export default class List {
    constructor({ title }) {
        this.title = title
    }

    get Template() {
        console.log("Template here")
        return `<h1 card col-12>${this.title}</h1>`
    }
}

/*
export default class Value {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}
*/
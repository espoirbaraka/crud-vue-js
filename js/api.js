const STUDENTDB = "StudentDB"

function getLocalDB(){
    if(!localStorage.getItem(STUDENTDB)){
        localStorage.setItem(STUDENTDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(STUDENTDB))
}

function updateDB(db){
    localStorage.setItem(STUDENTDB, JSON.stringify(db))
}

function addStudent(student){
    const db = getLocalDB()
    student.id = Date.now()+""
    db.push(student)
    updateDB(db)
}
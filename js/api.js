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

function updateStudent(student){
    const db = getLocalDB()
    const updatedb = db.map(function(curStudent){
        if (curStudent.id == student.id){
            return{
                nom : student.nom,
                prenom : student.prenom,
                dateNaissance: student.dateNaissance,
                niveauEtude : student.niveauEtude
            }
        }
        return curStudent
    })
    updateDB(updatedb)
}

function deleteStudent(student){
    const db = getLocalDB()
    const updateDb = db.filter(function (curStudent){
        return curStudent.id != student.id;
    })
    updateDB(updateDb)
}
const checkIfEmpty=(obj)=>{
    let isEmpty = false;
    for (const prop in obj){
        if (obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty;
}
const showSuccessMessage = (message)=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}

const showErrorMessage = (message)=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
    })
}

const App = {
    data(){
        return{
            showHome: false,
            showCreateForm: false,
            showStudentsList: true,
            newStudent:{
                nom : "",
                prenom: "",
                dateNaissance: "",
                niveauEtude: ""
            }
        }
    },
    mounted(){
        this.changeNavigationState("create")
    },
    methods:{
        goToHome(){
            this.changeNavigationState("home")
        },
        goToList(){
            this.changeNavigationState("student")
        },
        goToForm(){
            this.changeNavigationState("create")
        },
        submitStudent(){
            if (!checkIfEmpty(this.newStudent)){
                if(!checkIfStudentExist(this.newStudent.nom, this.newStudent.prenom)){
                    addStudent(this.newStudent)
                    this.newStudent={
                        nom : "",
                        prenom: "",
                        dateNaissance: "",
                        niveauEtude: ""
                    }
                    showSuccessMessage("Etudiant ajouté")
                }else{
                    showErrorMessage("Cet etudiant existe déjà")
                }
            }else{
                showErrorMessage("Veuillez remplir tous les champs")
            }
        },
        changeNavigationState(destinaire){
            this.showHome = false
            this.showCreateForm = false
            this.showStudentsList = false

            switch (destinaire) {
                case "home" :
                    this.showHome = true
                    break;
                case "create" :
                    this.showCreateForm = true
                    break;
                case "student" :
                    this.showStudentsList = true
                    break;
                default:
                    this.showHome=true
                    break;
            }
        }
    }
}

Vue.createApp(App).mount("#app");
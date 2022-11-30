const checkIfEmpty=(obj)=>{
    let isEmpty = false;
    for (const prop in obj){
        if (obj[prop] == ""){
            isEmpty = true;
        }
    }
    return isEmpty;
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
                addStudent(this.newStudent)
                this.newStudent={
                    nom : "",
                    prenom: "",
                    dateNaissance: "",
                    niveauEtude: ""
                }
                console.log("Etudiant ajouté")
            }else{

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
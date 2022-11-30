const App = {
    data(){
        return{
            showHome: false,
            showCreateForm: false,
            showStudentsList: true
        }
    },
    mounted(){
        this.changeNavigationState("home")
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
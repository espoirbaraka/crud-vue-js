const App = {
    data(){
        return{
            showHome: false,
            showCreateForm: false,
            showStudentsList: true
        }
    },
    methods:{
        goToHome(){
            this.showHome = true
        },
        goToList(){
            this.showStudentsList = true
        },
        goToForm(){
            this.showCreateForm = true
        }
    }
}

Vue.createApp(App).mount("#app");
const App = {
    data(){
        return{
            showHome: true,
            showCreateForm: false,
            showStudentsList: false
        }
    },
    methods:{
        goToHome: ()=>{
            this.showHome = true
        },
        goToStudent: ()=>{
            this.showStudentsList = true
        },
        goToForm: ()=>{
            this.showCreateForm = true
        }
    }
}

Vue.createApp(App).mount("#app");
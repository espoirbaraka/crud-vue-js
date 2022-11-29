const App = {
    data(){
        return{
            showHome: false,
            showCreateForm: true,
            showStudentsList: false
        }
    }
}

Vue.createApp(App).mount("#app");
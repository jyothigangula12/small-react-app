 const studentsdata = (state = [], action) => {
    console.log("Todos =>" , action) 
        switch (action.type) {
            case 'ADD_TODO':
                console.log("From Reducer",action)
                return state.concat({ todo : action.data})
           
            default:
                return state
        }
    }
    export{ studentsdata}
 const studentsdata = (state = [], action) => {
    console.log("Todos =>" , action) 
        switch (action.type) {
            case 'ADD_TODO':
                console.log("From Reducer",action)
                return state.concat({ todo : action.data})
            case 'COMPLETE_TODO':
                 
                  const tempState = [...state]
              for(let i in tempState) {
                    let event = tempState[i]
                    if (event.todo === action.data) {
                       tempState[i] = action.data   
                    }
                    console.log("State is",tempState) 
                }
                
            return state
            case 'DELETE_TODO':
                const newState = [...state]
                   return state.filter(function(el){
                        return (el.todo !== action.data)
                    }) 
            default:
                return state
        }
    }
    export{ studentsdata}
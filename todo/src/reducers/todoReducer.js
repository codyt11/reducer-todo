export const initialState = { 
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }
]}

export const todoReducer = (state, action) => {

    switch (action.type){
        
        case "ADD_TODO":
            return {
                ...state, 
                todo:[
                    ...state.todo,
                    {item: action.text,
                    completed: false,
                    id: Date.now()}
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(todo => todo.id === action.id 
                    ?{
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo)
            }
        case "CLEAR_COMPLETED":
            return{
            ...state,
            todo: state.todo.filter(todo => !todo.completed) 
            }
        default:
            return state;
    }
}
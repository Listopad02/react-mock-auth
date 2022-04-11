import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"

interface stateTypes {
    result: string
}
interface ActionOne {
    type: 'TEST';
    TEST: string
}
interface ActionTwo {
    type: 'FOO';
    FOO: string
}
type Action = ActionOne | ActionTwo

const initialState: stateTypes = {
    result: 'test'
}

const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'TEST':
            return state
        default:
            return state
    }
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store
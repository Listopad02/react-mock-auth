import axios from "axios";

export function fetchUsers() {
    return async(dispatch: Function) => {
        const url = 'https://jsonplaceholder.typicode.com/users'

        try {
            axios.get(url).then(data => {
                const answer = data.data.users
                dispatch(changeUsersList(answer))
            })
        } catch (err) {
            console.log(err)
        }
    }
}

function changeUsersList(val: string) {
    return {
        type: 'CHANGE_USERS_LIST',
        payData: val
    }
}
const initState = {
    users: [
        { id: 1, name: 'Cơ sở dữ liệu' },
        { id: 2, name: 'Lập trình hướng đối tượng' },
        { id: 3, name: 'Ngôn ngữ lập trình' }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>> run redux delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'Add_User':
            let id = Math.floor(Math.random() * 100000)
            let user = { id: id, name: `Random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }


}

export default rootReducer;
const userContextReducer = async (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case 'LOGOUT':
            return localStorage.clear();
        default:
            return state;
    }
}

export default userContextReducer;

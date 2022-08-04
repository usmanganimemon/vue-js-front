export default{
    setUserToken(state, token) {
        state.token = token
    },
    reset(state) {
        state.token = ''
    }
}
import {register, login, logout} from '@/api/index'

const state = {
  status: '',
  username: '',
  token: localStorage.getItem('userid') || '',
};
const getters = {
  isLogined(state) {
    return !!state.token
  },
  token(state) {
    return state.token
  },
  authStatus(state) {
    return state.status
  },
  getusername(state) {
    return state.username
  },
};
const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, data){
    state.status = 'success'
    state.token = data.token
    state.username = data.username
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
};
const actions = {
  Login(context, user){
    return login(user.email, user.password).
           then((res) => {
             //axios.defaults.headers.common['Authorization'] = token
             localStorage.setItem('token', res.data.token)
             context.commit('auth_success', res.data)
           }).
           catch(() => {
             context.commit('auth_error')
             localStorage.removeItem('token')
           })
  },
  Register(context, user){
    return register(user.username, user.email, user.password).
           then((res) => {
             console.log(res.data)
             if (res.data.retcode > 0) {
                 //axios.defaults.headers.common['Authorization'] = token
                 localStorage.setItem('token', res.data.token)
                 context.commit('auth_success', res.data)
             }
           }).
           catch((err) => {
              context.commit('auth_error', err)
              localStorage.removeItem('token')
           })
  },
  Logout({commit, state}) {
    return logout(state.token).
           then(() => {
              //delete axios.defaults.headers.common['Authorization']
              commit('logout')
              localStorage.removeItem('token')
           })
  },
  gettoken({state}) {
    console.log(state.token)
  },
};

export default ({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
});


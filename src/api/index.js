import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios)

axios.defaults.timeout = 1000

export function register(username,email,password,captcha) {
  return Vue.axios.get(`/xwapi/api_member.php?act=register&username=${username}&email=${email}&password=${password}&captcha=${captcha}`);
}

export function login(email,password) {
  return Vue.axios.get(`/xwapi/api_member.php?act=login&email=${email}&password=${password}`);
}

export function setpasswd(token,password) {
  return Vue.axios.get(`/xwapi/api_member.php?act=setpasswd&token=${token}&password=${password}`);
}

export function getinfo(token) {
  return Vue.axios.get(`/xwapi/api_member.php?act=getinfo&token=${token}`);
}

export function setinfo(token, image) {
  return Vue.axios.get(`/xwapi/api_member.php?act=setinfo&token=${token}&image=${image}`);
}

export function logout(token) {
  return Vue.axios.get(`/xwapi/api_member.php?act=logout&token=${token}`);
}

import Cookies from 'js-cookie'

const tokenKey = 'Admin-Token'
const userName = 'userName'
const passWord = 'passWord'
const keepPassWord = 'keepPassWord'

export function TokenKey() {
}

TokenKey.prototype = {
  setToken: function(token) {
    return Cookies.set(tokenKey, token, { expires: 7 })
  },
  getToken: function() {
    return Cookies.get(tokenKey)
  },
  removeToken: function() {
    return Cookies.remove(tokenKey)
  }
}

export function UserName() {
}

UserName.prototype = {
  setUserName: function(name) {
    return Cookies.set(userName, name, { expires: 7 })
  },
  getUserName: function() {
    return Cookies.get(userName)
  },
  removeUserName: function() {
    return Cookies.remove(userName)
  }
}

export function PassWord() {
}

PassWord.prototype = {
  setPassWord: function(password) {
    return Cookies.set(passWord, password, { expires: 7 })
  },
  getPassWord: function() {
    return Cookies.get(passWord)
  },
  removePassWord: function() {
    return Cookies.remove(passWord)
  }
}

export function KeepPassWord() {
}

KeepPassWord.prototype = {
  setKPW: function(value) {
    return Cookies.set(keepPassWord, value, { expires: 7 })
  },
  getKPW: function() {
    return Cookies.get(keepPassWord)
  },
  removeKPW: function() {
    return Cookies.remove(keepPassWord)
  }
}

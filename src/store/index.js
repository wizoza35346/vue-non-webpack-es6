const state = {
  username: '',
  isAuth: false
};

const getters = {
  username: function(state) {
    return state.username;
  },
  isAuth: function(state) {
    return state.isAuth;
  }
};

// vuex matations 不支持非同步 函式 ,用來直接更改state值
const mutations = {
  setUsername: function(state, value) {
    state.username = value;
  },
  setAuth: function(state, value) {
    state.isAuth = value;
  }
};

// vuex action 支持非同步 函式 必需回傳一個promise
const actions = {
  // ES6 解構賦值 https://github.com/lukehoban/es6features#destructuring
  // 官網說明 https://vuex.vuejs.org/zh-cn/actions.html
  login: function(context, userInfo) {
    console.log(userInfo);
    return new Promise(function(resolve) {
      setTimeout(function() {
        //使用context.commit 調用mutations 更改state
        context.commit('setUsername', '楊承勳');
        context.commit('setAuth', true);

        resolve(true);
      }, 500);
    });
  },
  logout: function(context) {
    context.commit('setUsername', '');
    context.commit('setAuth', false);

    router.push('/');
  }
};

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

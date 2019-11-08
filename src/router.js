// 測試用 Component
var home = {
  template: '<div>home works!!</div>'
};
var page1 = {
  template: '<div>page1 works!!</div>'
};
var page2 = {
  template: '<div>page2 works!!</div>'
};

// 路由設置
var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/page1',
      component: page1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/page2',
      component: page2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: httpVueLoader('../component/login-conponent.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

// 全域守衛
router.beforeEach(function(to, from, next) {
  window.to = to;
  if (
    to.matched.some(function(record) {
      return record.meta.requiresAuth;
    })
  ) {
    //to.meta.requiresAuth) {
    //console.log(state.isAuth);
    if (state.isAuth) next();
    else
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
  } else next();
});

httpVueLoader.httpRequest = async url => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return Promise.reject(err.status);
  }
};

httpVueLoader.langProcessor.javascript = scriptText =>
  Babel.transform(scriptText, { presets: ['es2015', 'stage-2'] }).code;

Vue.use(vueCompositionApi.default);
const {
  reactive,
  ref,
  isRef,
  toRefs,
  computed,
  readonly,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  createComponent
} = vueCompositionApi;

httpVueLoader.register(Vue, './src/App.vue');
const App = new Vue({
  render: h => h('App')
}).$mount('#app');

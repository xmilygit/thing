import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //错误提示框变量
    result: {
      show: false,
      error: false,
      message: '',
      title: '',
      result: '',
      from: '',
      closeMode:0,
    },
    //加载中overlayout变量
    showPreloader: false,
    loginStatus:false,
  },
  mutations: {
    ChangeShowPreloader(state, value) {
      state.showPreloader = value;
    },
    //改进异步执行结果反馈
    setAsyncResult(state, res) {
      state.result = res;
    },
    setDialogHidde(state) {
      state.result.show = false;
    },
    setLoginStatus(state,value){
      state.loginStatus=value;
    }
  },
  actions: {
    async accountLogin({commit},account){
      try {
        let res = await axios.post(
          "/api/login",
          { data: account},
        );
        commit('ChangeShowPreloader',false)
        if (res.data.error) {
          commit('setAsyncResult',{
            show:true,
            error:true,
            message:res.data.message,
            title:'登录出错',
            result:'',
            from:'登录系统',
            closeMode:0
          })
          commit('setLoginStatus',false)
          return;
        }
        commit('setLoginStatus',true)
        return res.data.result;
      } catch (err) {
        commit('ChangeShowPreloader',false)
        commit('setAsyncResult',{
          show:true,
          error:true,
          message:err.message,
          title:'登录出错',
          result:'',
          from:'登录系统',
          closeMode:0
        })
        commit('setLoginStatus',false)
        return;
      }
    }
  },
  modules: {
  }
})

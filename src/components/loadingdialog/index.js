import ld from './loadingdialog.vue'

const ldc={
    install:function(Vue){
        Vue.component("LoadingDialog",ld)
    }
}

export default ldc;
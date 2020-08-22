<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-card class="mx-auto mt-16" max-width="344" outlined elevation="10">
        <v-card-title><v-icon class="mr-2">mdi-vector-link</v-icon>请登录</v-card-title>
        <v-card-text>
          <v-text-field prepend-inner-icon="mdi-account" v-model="account.name" :rules="requiredRules" label="用户名"></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-key"
            type="password"
            v-model="account.password"
            :rules="requiredRules"
            label="密码"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="blue" @click="formsubmit" width="100%" tile>登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <LoadingDialog />
    <!-- <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          正在处理数据...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialoginfo.show" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">{{dialoginfo.title}}</v-card-title>
        <v-card-text>{{dialoginfo.message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogclose">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations, mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      account: {
        name: "",
        password: ""
      },
      requiredRules: [v => !!v || "该项必须填写！"],
      isbinder: false
    };
  },
  mounted() {
    document.getElementById("loading").style.display = "none";
  },
  computed:{
    ...mapState([
      'loginStatus'
    ])
  },
  methods: {
    ...mapMutations([
        'ChangeShowPreloader',
    ]),
    ...mapActions([
      'accountLogin'
    ]),
    dialogclose() {
      switch (this.dialogclosetype) {
        case 0:
            this.dialoginfo.show=false;
            break;
        case 1:
          this.closewindow();
          break;
        case 2:
          this.jumptopage();
          break;
      }
    },
    formsubmit() {
      if (this.$refs.form.validate()) {
        this.login();
      }
    },
    closewindow() {
    },
    //跳转后续页面
    jumptopage() {
      //alert("jump");
      if (this.isbinder)
        window.location =
          sitecfg.binderokPATH + "?token=" + sessionStorage.getItem("token");
    },
    async login() {
      let r=await this.accountLogin(this.account)
      console.log(r)
      if(this.loginStatus){
        localStorage.setItem('token',r.token)
        this.$router.push({name:'home'})
      }
      // this.ChangeShowPreloader(true)
      // try {
      //   let res = await axios.post(
      //     "/api/login",
      //     { data: this.account },
      //   );
      //   this.ChangeShowPreloader(false)
      //   this.$router.push({name:'home'})
      // } catch (err) {
      //   this.ChangeShowPreloader(false)
      // }
    }
  }
};
</script>
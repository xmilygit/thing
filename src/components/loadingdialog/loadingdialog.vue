<template>
  <v-layout>
    <v-dialog v-model="loading" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          正在处理数据...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialoginfo.show" max-width="290">
      <v-card>
        <v-card-title class="headline">{{dialoginfo.title}}</v-card-title>

        <v-card-text>{{dialoginfo.message}}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      dialoginfo: "result",
      loading: "showPreloader"
    })
  },
  methods: {
    ...mapMutations({
      dialogHidde: "setDialogHidde"
    }),
    close() {
      this.dialogHidde();
      if (this.dialoginfo.closeMode) {
        this.$emit("close", null);
      }
    }
  }
};
</script>

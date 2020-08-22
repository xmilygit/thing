<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="$route.meta.mainNav">
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />-->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >-->
      <!-- <span class="mr-2">Latest Release</span> -->

      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
              <v-list-item
              >
                <v-list-item-title>退出</v-list-item-title>
              </v-list-item>
            </v-list>
      </v-menu>
      <!-- </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
};
</script>

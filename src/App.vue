<template>
  <v-app>
    <navigation v-if="isLoggedIn"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: { Navigation },
  name: 'App',

  data: () => ({
    isLoggedIn : false
  }),
};
</script>

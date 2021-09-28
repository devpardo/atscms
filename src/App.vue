<template>
  <b-container fluid>
    <alert-components :show="hasError.status" :message="hasError.errorMessage"/>
    <b-row class="min-vh-100" align-v="stretch" no-gutters>
      <b-col v-if="isLoggedIn" align-self="stretch" cols="3" class="p-0 bg-primary">
        <navigation />
      </b-col>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navigation from './components/Navigation';
import AlertComponents from './components/AlertComponents'
import { mapGetters } from 'vuex';

export default {
  components: { Navigation, AlertComponents },
  name: 'App',
  computed : {
    ...mapGetters(['hasError']),
    isLoggedIn () {
      return this.$route.meta.requiresAuth;
    },
    height () {
      return `${window.innerHeight}px`;
    }
  }
};
</script>

<style>
.debug {
  border: 1px dashed red;
}
</style>
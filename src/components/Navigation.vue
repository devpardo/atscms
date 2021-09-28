<template>
  <div class="navigation p-2 text-light">
    <b-img center class="mb-3"
          fluid src="https://sanjosebatangas.gov.ph/img/logo.c377f8a5.png" alt="Logo"></b-img>

    <div>
      <h5>Navigation</h5>

      <b-list-group flush>
        <b-list-group-item variant="info" v-for="link in links" :key="link.name"
          active-class="active" :to="{ path : link.to }"> 
          {{link.name}}
        </b-list-group-item>
      </b-list-group>

      <div class="p-2">
        <b-link class="text-light text-decoration-none" :to="{path : '/logout'}">Logout</b-link>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name : 'Navigation',
  computed : {
  },
  data () {
    return {
      links : [
        { name : 'Dashboard', to : '/management'},
        { name : 'News', to : '/news'},
        { name : 'Announcements', to : '/announcements'},
        { name : 'Tourism', to : '/tourism'},
        { name : 'Departments', to : '/departments'},
        { name : 'Projects', to : '/projects'},
        { name : 'Gallery', to : '/gallery'},
        { name : 'SB Members', to : '/members'},
        { name : 'Bidding', to : '/bidding'},
        { name : 'Social', to : '/social'},
        { name : 'Programs', to : '/programs'},
        { name : 'Mayor', to : '/mayor'},
      ]
    }
  }
}
</script>

<style scoped>
</style>
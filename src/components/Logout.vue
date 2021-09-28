<template>
  <p>Logging out</p>
</template>

<script>
export default {
  name : 'Logout',
  created () {
    let data = {
      user : parseInt(localStorage.getItem('user')),
      token : localStorage.getItem('accessToken')
    }

    this.$store.dispatch('destroyToken', data).then(response => {
      this.$router.push({
        name : 'Login'
      })
    });
  }
}
</script>
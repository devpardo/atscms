<template>
  <b-row class="full-height bg-light" align-v="center">
    <b-container>
      <b-col
      md="6" offset-md="3">
      <b-card class="bg-primary" shadow>
        <b-img center  
          fluid src="https://sanjosebatangas.gov.ph/img/logo.c377f8a5.png" alt="Logo"></b-img>

        <div class="text-light mt-3 mb-3">
          <b-form>
            <b-form-group class="mb-2"
              label="Enter username"
              label-for="username"
            >
              <b-form-input
                size="lg"
                id="username"
                v-model="username"
                placeholder="Username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-2"
              label="Enter password"
              label-for="password"
            >
              <b-form-input
                size="lg"
                id="password"
                type="password"
                v-model="password"
                placeholder="Password"
                required
              ></b-form-input>
            </b-form-group>

            <b-button @click="login" class="w-100 mt-3" block variant="warning" size="lg">Enter</b-button>
           
          </b-form>

        </div>

        <template #footer>
          <small class="text-light">CMS by: Automators Services</small>
        </template>
      </b-card>
      </b-col>
    </b-container>
<!--     
    <alert-components :show="hasError" :message="errMsg" :type="type" />
    <v-container fill-height fluid class="primary">
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">

          <v-img class="mb-2" src="https://sanjosebatangas.gov.ph/img/logo.c377f8a5.png"></v-img>

          <v-card class="pa-5">
            <v-text-field
              v-model="username"
              label="Username"
              :rules="rules.required"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              :rules="rules.required"
              type="password"
              class="mb-2"
            ></v-text-field>

            <v-btn
              x-large
              block
              color="primary"
              @click.stop="login"
            >
              Login
            </v-btn>

          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </b-row>
</template>

<script>
import AlertComponents from './AlertComponents'
import {mapActions} from 'vuex';
export default {
  name : 'Login',
  components : {
    AlertComponents
  },
  data() {
    return {
      username : '',
      password : '',
      rules : {
        required: [val => (val || '').length > 0 || 'This field is required']
      },
      news : [],
      hasError : false,
      errMsg : '',
      type : 'error'
    }
  },
  methods : {
    ...mapActions(['addErrors']),
    login : function () {
      this.$store.dispatch('retrieveToken', {
        username : this.username,
        password : this.password
      })
      .then(response => {
        this.$router.push({
          name : 'Management'
        });
      }).catch(err => {
        this.addErrors(err);
      })
    }
  }
}
</script>

<style scoped>
  .red {
    background-color: red;
  }

  .full-height {
    height: 100vh;
  }

  .debug {
    border: 1px dashed red;
  }
</style>
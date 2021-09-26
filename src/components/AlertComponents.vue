<template>
  <v-dialog v-model="status">
    <v-card v-if="type == 'error'">
      <v-card-title class="text-h5 grey lighten-2">
        Error
      </v-card-title>

      <v-card-text>
        {{errMessage}}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="removeErrors"
        >
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name : 'AlertComponents',
  computed : {
    ...mapGetters(['hasError']),
    status() {
      return this.hasError.status || false;
    },
    errMessage() {
      return this.hasError.errorMessage || '';
    }
  },
  methods : {
    ...mapActions(['addErrors']),
    removeErrors() {
      this.addErrors('');
    }
  },
  props : {
    show : {
      type : Boolean,
      required : false
    },
    type : {
      type : String, 
      required : true
    }
  }
}
</script>

<style scoped>

</style>
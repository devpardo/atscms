<template>
  <b-modal id="modal" v-model="showModal" hide-header no-close-on-backdrop no-close-on-esc>
    {{message}}
    <template #modal-footer>
      <b-button @click="removeErrors">Okay</b-button>
    </template>
  </b-modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name : 'AlertComponents',
  computed : {
    ...mapGetters(['hasError']),
    showModal : {
      get () {
        return this.hasError.status
      },
      set () {
        this.addErrors('');
      }
    }
  },
  methods : {
    ...mapActions(['addErrors']),
    removeErrors() {
      this.$bvModal.hide('modal');
    }
  },
  mounted () {
  },
  props : {
    show : {
      type : Boolean,
      required : true
    },
    type : {
      type : String, 
      required : false
    },
    message : {
      type : String, 
      required : false
    }
  }
}
</script>

<style scoped>

</style>
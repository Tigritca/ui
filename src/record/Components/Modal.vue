<template>
  <div
      class="modal fade"
      v-bind:class="{'show' : getModal.active}"
      v-bind:style="getModal.active ? {display: 'block'} : ''"
      id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Register on lesson here:</h5>
        </div>
        <div class="modal-body">
          <div
              v-if="availableRecordsQuantity > 0">
            <registration-form></registration-form>
          </div>
          <div v-if="availableRecordsQuantity === 0">
            Sorry, there are no more places!
          </div>
        </div>
        <div class="modal-footer">
          <button
              @click="hideModal()"
              type="button" class="btn btn-secondary" data-dismiss="modal">Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {mapGetters, mapActions} from "vuex/dist/vuex.mjs";
import RegistrationForm from './RegistrationForm'
import record from "../../mixins/record";

export default {
  components: {RegistrationForm},
  data() {
    return {
      modalActive: false
    }
  },
  computed: {
    ...mapGetters(['getModal', 'getRecords']),
  },
  mixins:[record],
  methods: {
    ...mapActions(['setModal']),
    hideModal() {
      this.setModal({
        scheduleId: null,
        active: false
      })
    }
  },
}
</script>
<style lang="scss">
@media (min-width: 576px) {
  body {
    .modal-dialog {
      max-width: 900px;
      margin: 1.75rem auto;
    }

    .modal {
      background-color: #212529a3;
    }
  }
}

</style>
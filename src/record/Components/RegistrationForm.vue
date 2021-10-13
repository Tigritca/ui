<template>
  <form action="" class="registration-form">
    <div v-for="(record, index) in records" class="row align-items-start" v-bind:key="record">
      <div class="col">
        <div>
          <label for="name" class="form-label">Name</label>
          <input v-model="record.name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
          <div id="nameHelp" class="form-text">Please enter your or other customer (your friend) name.</div>
        </div>
      </div>
      <div class="col">
        <div>
          <label for="phone" class="form-label">Phone number</label>
          <input v-model="record.phone" type="text" class="form-control" id="phone" aria-describedby="emailHelp">
          <div id="phoneHelp" class="form-text">Please enter your or other customer (your friend) number so that we can
            contact you if necessary.
          </div>
        </div>
      </div>
      <div class="col" v-if="records.length > 1">
        <label class="form-label">Remove record</label>
        <div>
          <button
              @click="removeRecord(index)"
              type="button"
              class="row-button" data-dismiss="modal">
            <i class="bi bi-dash-square-fill"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col" v-if="records.length < availableRecordsQuantity">
      <label class="form-label">Add record</label>
      <div>
        <button
            @click="addRecord()"
            type="button"
            class="row-button" data-dismiss="modal">
          <i class="bi bi-plus-square-fill"></i>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import {mapGetters} from "vuex/dist/vuex.mjs";
import record from '../../mixins/record'

export default {
  data() {
    return {
      records: [
        {
          name: null,
          phone: null
        }
      ],
      available: null
    }
  },
  computed: {
    ...mapGetters(['getModal', 'getRecords']),
  },
  mixins:[record],
  methods: {
    addRecord() {
      if (this.available === null) {
        this.available = this.getRecords[this.getModal.scheduleId].available
      }
      if (this.records.length < this.available) {
        this.records.push({
          name: null,
          phone: null
        })
      }
    },
    removeRecord(index) {
      if (this.records.length > 1) {
        this.records.splice(index, 1)
      }
    }
  },
}
</script>
<style>
@font-face {
  font-family: "bootstrap-icons";
  src: url("./../../../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2") format("woff2"),
  url("./../../../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff") format("woff");
}

i {
  font-family: bootstrap-icons;
  font-size: 38px;
}

.row-button {
  padding: 0;
  outline: none;
  border: none;
  background: none;
  line-height: 14px;
}

.registration-form {
  text-align: left;
}
</style>

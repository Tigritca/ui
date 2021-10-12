<template>
  <div class="container-lg">
    <main class="">
      <img alt="logo" src="../../assets/pngwing.com.png">
      <div class="calendar-wrapper">
        <Calendar></Calendar>
      </div>
      <modal></modal>
    </main>
  </div>
</template>
<script>
import Calendar from "./Calendar";
import {mapGetters, mapActions} from "vuex/dist/vuex.mjs";
import Modal from "../../record/Components/Modal";

export default {
  components: {
    Modal,
    Calendar
  },
  computed: {
    ...mapGetters(['getModal'])
  },
  methods: {
    ...mapActions(['setSchedule']),
    getCurrentWeekScopeTime() {
      let curr = new Date;
      let start = curr.getDate() - curr.getDay();

      return {
        from: (new Date(curr.setDate(start))).getTime(),
        to: (new Date(curr.setDate(start + 6))).getTime()
      }
    }
  },
  created() {
    this.setSchedule(this.getCurrentWeekScopeTime());
  },
  updated() {
    console.log('page getModal.active', this.getModal.active)
    this.setSchedule(this.getCurrentWeekScopeTime());
  },
}
</script>
<style scoped>
.calendar-wrapper {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
</style>
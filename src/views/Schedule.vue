<template>
  <div class="container-lg">
    <main class="">
      <img alt="logo" src="../assets/pngwing.com.png">
      <div class="calendar-wrapper">
        <Calendar></Calendar>
      </div>
      <modal></modal>
    </main>
  </div>
</template>
<script>
import {mapActions} from "vuex/dist/vuex.mjs";
import Calendar from "../schedule/Components/Calendar";
import Modal from "../record/Components/Modal";

export default {
  components: {
    Modal,
    Calendar
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
}
</script>
<style scoped>
.calendar-wrapper {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
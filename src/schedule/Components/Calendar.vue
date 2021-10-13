<template>
  <div class="text-center section">
    <h2 class="h2">Lessons booking Calendar</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Register on your class here:
    </p>
    <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
                v-for="(attr, key) in attributes"
                :key="key"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 text-white"
                :class="attr.customData.class"
                :data-id="attr.customData.id"
                v-on:click="scheduleClick($event)"
            >
              {{ attr.customData.time }}
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex/dist/vuex.mjs";

export default {
  data() {
    return {
      masks: {
        weekdays: 'WWW',
      },
    };
  },
  computed: {
    ...mapGetters(['getSchedule', 'getRecords']),
    attributes: function () {
      let attributes = [];
      for (let i = 0; i < this.getSchedule.length; i++) {
        let item = this.getSchedule[i]
        const dates = this.formatDates(this.getSchedule[i].dates)
        item.dates = dates
        item.customData.time = this.formatTime(dates)
        item.customData.class = this.mapClassBySlug(item.slug)
        attributes.push(item)
      }

      return attributes;
    }
  },
  methods: {
    ...mapActions(['setModal', 'setRecords']),
    formatDates(dates) {
      return new Date(dates * 1000)
    },
    formatTime(dates) {
      return dates.getHours() + ':' + dates.getMinutes()
    },
    mapClassBySlug(slug) {
      const classes = {
        'pole_fit': 'bg-red-600',
        'exotic': 'bg-indigo-500',
        'pole_kids': 'bg-teal-500',
      };

      return classes[slug]
    },
    scheduleClick: function (event) {
      let scheduleId = event.target.getAttribute('data-id');
      this.setRecords(scheduleId).then(() => {
        this.setModal({
          scheduleId: scheduleId,
          active: true
        })
      }).catch((error) => {
        this.$toast(
            error.message,
            {
              styles: {
                backgroundColor: '#e53e3e',
                color: '#fff'
              }
            }
        );
      });
    }
  }
};
</script>

<style scoped lang="postcss">
::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  display: none;
}

/deep/ .custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}

/deep/ .custom-calendar.vc-container .vc-weeks {
  padding: 0;
}

/deep/ .custom-calendar.vc-container .vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}

/deep/ .custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
}

/deep/ .custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: var(--day-height);
  min-width: var(--day-width);
  background-color: white;
}

/deep/ .custom-calendar.vc-container .vc-day.weekday-1,
/deep/ .custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}

/deep/ .custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
}

/deep/ .custom-calendar.vc-container .vc-day:not(.on-bottom) .weekday-1 {
  border-bottom: var(--day-border-highlight);
}

/deep/ .custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: var(--day-border);
}

.bg-red-600 {
  --bg-opacity: 1;
  background-color: #e53e3e;
}

.bg-blue-500 {
  --bg-opacity: 1;
  background-color: #4299e1;
}

.bg-indigo-500 {
  --bg-opacity: 1;
  background-color: #667eea;
}

.bg-teal-500 {
  --bg-opacity: 1;
  background-color: #38b2ac;
}

.bg-pink-500 {
  --bg-opacity: 1;
  background-color: #ed64a6;
}

.p-1 {
  padding: .25rem;
}

.rounded-sm {
  border-radius: .125rem;
}
</style>
<style lang="scss">
body {
  .vc-day {
    .text-xs {
      font-size: 11px !important;
      margin-block-start: 1px !important;
      margin-block-end: 1px !important;
      padding: 0 !important;
    }
  }
}

</style>
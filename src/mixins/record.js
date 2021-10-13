import {mapGetters} from "vuex/dist/vuex.mjs";

let record = {
    computed: {
        ...mapGetters(['getModal', 'getRecords']),
        availableRecordsQuantity() {
            return this.getRecords[this.getModal.scheduleId]?.available
        }
    }
}

export default record
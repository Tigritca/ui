import {createStore} from 'vuex'
import schedule from "../schedule/store";
import record from "../record/store";

const store = createStore({
    modules: {
        schedule: schedule,
        record: record
    }
})
export default store;
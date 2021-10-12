import Axios from "axios";

const record = {
    state: () => ({
        records: [{
            scheduleId: {
                available: null,
                throughput: null
            }
        }]
    }),
    getters: {
        getRecords(state) {
            return state.records
        }
    },
    mutations: {
        setRecords(state, {data, scheduleId}) {
            state.records[scheduleId] = data
        }
    },
    actions: {
        records(context, scheduleId) {
            const getSchedulesRecordsUrl = 'http://localhost/api/schedule/' + scheduleId + '/records'
            return Axios.get(getSchedulesRecordsUrl)
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setRecords', {data: response.data, scheduleId: scheduleId})
                    }
                })
        }
    }
}

export default record;
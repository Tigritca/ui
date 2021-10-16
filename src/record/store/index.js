import Axios from "axios";

const record = {
    state: () => ({
        records: [{
            scheduleId: {
                available: null,
                throughput: null
            }
        }],
        recordsValidation: []
    }),
    getters: {
        getRecords(state) {
            return state.records
        }
    },
    mutations: {
        setRecords(state, {data, scheduleId}) {
            state.records[scheduleId] = data
        },
        setRecordsValidation(state, {data}) {
            console.log('mutations setRecordsValidation data', data)
            state.recordsValidation = data
        }
    },
    actions: {
        setRecords(context, scheduleId) {
            const getSchedulesRecordsUrl = 'http://localhost/api/schedule/' + scheduleId + '/records'
            return Axios.get(getSchedulesRecordsUrl)
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setRecords', {data: response.data, scheduleId: scheduleId})
                    }
                })
        },
        createRecords(context, {scheduleId, records}) {
            const createRecordsUrl = 'http://localhost/api/schedule/' + scheduleId + '/records'
            return Axios.post(createRecordsUrl, {data: records})
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response)
                    }
                }).catch((error) => {
                        if (error.response?.status === 422) {
                            context.commit('setRecordsValidation', {data: error.response.data.errors})
                        } else {
                            throw error
                        }
                    }
                )
        }
    }
}

export default record;
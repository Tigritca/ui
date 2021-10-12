import Axios from "axios";

const SCHEDULES_API_URL = 'http://localhost/api/schedule/';

const schedule = {
    state: () => ({
        schedule: [],
        modal: {
            scheduleId: null,
            active: false
        }
    }),
    getters: {
        getSchedule(state) {
            return state.schedule
        },
        getModal(state) {
            return state.modal
        }
    },
    mutations: {
        setSchedule(state, data) {
            state.schedule = data;
        },
        setModal(state, data) {
            state.modal = data;
        },
    },
    actions: {
        setSchedule(context, parameters) {
            Axios.get(SCHEDULES_API_URL, {params: parameters})
                .then((response) => {
                    if (response.status === 200) {
                        context.commit('setSchedule', response.data)
                    }
                })
                .catch((response) => {
                    console.log('error:', response)
                });
        },
        setModal(context, value) {
            context.commit('setModal', value)
        }
    },
}

export default schedule;
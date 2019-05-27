export const state = () => ({
    logs: [],
  })


  export const mutations = {
    clear(state){
        state.logs = []
    },
    addLogs(state,logs) {
        state.logs = logs
    },
}
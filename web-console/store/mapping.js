export const state = () => ({
    mappings: [],
  })


  export const mutations = {
    clear(state){
        state.mappings = []
    },
    addMappings(state,mappings) {
        state.mappings = mappings
    },
}
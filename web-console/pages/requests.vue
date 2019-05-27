<template>
<div>

      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">Requests Log</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="getAllRequests()">refresh</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon @click="clear()">clear_all</v-icon>
        </v-btn>    
      </v-toolbar>
      <LogTable v-bind:logs="logs" v-bind:loading="loading" />

    
  </div>
</template>

<script>
  import LogTable from "../components/LogTable"
  import { MMOCK_HTTP } from '../constants';

  export default {
    components: {
        LogTable
    },
    data () {
      return {
        requests: [],
        loading:false
      }
    },
    mounted(){
        this.getAllRequests()
    },
    computed: {
      logs () {
        return this.$store.state.log.logs
      } 
    },
    methods: {
      async clear() {
        this.loading=true
        const logs = await this.$axios.$get(MMOCK_HTTP+'/api/request/reset')
        this.$store.commit('log/clear')
        this.loading=false
      },
      async getAllRequests() {
        this.loading=true
        const logs = await this.$axios.$get(MMOCK_HTTP+'/api/request/all')
        this.$store.commit('log/addLogs',logs)
        this.loading=false
      }
    }
  }
</script>
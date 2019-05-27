<template>

<div>
    <NoData v-show="empty"/>
    <div v-show="!empty">  
      <v-toolbar flat color="primary">
      <v-toolbar-title class="white--text">Real time requests</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="clear()">clear_all</v-icon>
      </v-btn>
    </v-toolbar>

        <v-spacer></v-spacer>  
      <TimeLine v-bind:requests="requests"/>
    </div>
</div>
</template>

<script>
  import TimeLine from "../components/TimeLine"
  import NoData from "../components/NoData"

  export default {
    components: {
        TimeLine,
        NoData
    },
    computed: {
      requests () {
        return this.$store.state.requests
      },
      empty() {
        return this.$store.state.requests.length == 0
      } 
    },
    methods: {
      clear() {
        this.$store.commit('clear')
      }
    }
  }
</script>
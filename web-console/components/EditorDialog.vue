<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent lazy scrollable max-width="600">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>
            <JsonEditor :objData="jsonData" v-model="jsonData" ></JsonEditor>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    props: ['dialog','edit_item'],
    data () {
      return {
        jsonData: {},
      }
    }
  }
</script>
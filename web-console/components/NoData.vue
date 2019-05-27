<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 >
      <v-toolbar color="blue">
        <v-icon>settings_input_component</v-icon> 
        <v-toolbar-title> We are ready to start!</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"></h3>
            <div>You can start sending requests and you will see the results in real time. Or you can inspect the previous request you made in the Log page.</div>
            
             <v-alert
                :value="true"
                type="info"
                outline
                style="margin-top:25px"
                >
                Remember this is the console, the mock server is in another port.<br>(by default :8083 for HTTP and :8084 for HTTPS).
            </v-alert>


          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn 
          flat 
          color="warning" 
          href="https://github.com/jmartin82/mmock"
          target="blank"
          >Documentation</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
         <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>MMock Web Console</v-toolbar-title>
    </v-toolbar>
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex fill-height>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
    <v-snackbar v-model="newRequest" top :timeout="3000">
      New Request!
      <v-btn
        color="info"
        flat
  
        @click="newRequest = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  export default {

    data: () => ({
      drawer: null,
      newRequest: false,
      items: [
        {
          icon: 'swap_vert',
          title: 'Realtime',
          to: '/'
        },
        {
          icon: 'list',
          title: 'Log',
          to: '/requests'
        },
        {
          icon: 'settings',
          title: 'Mapping',
          to: '/mapping'
        },
        {
          icon: 'info',
          title: 'About',
          to: '/about'
        }
      ]
    }),
    mounted() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type =='SOCKET_ONMESSAGE') {
          this.newRequest = true
        }      
      })
    },
  }
</script>
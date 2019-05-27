<template>
        <v-tabs
              v-model="active"
              color="grey lighten-2"
              slider-color="blue"
            >
              <v-tab key="request" ripple >
                Request
              </v-tab>
              <v-tab key="response" ripple >
                Response
              </v-tab>
              <v-tab key="log" ripple >
                Log
              </v-tab>
              <v-tab-item key="request">
                <tree-view :data="item.request" :options="{maxDepth: 2}"></tree-view>
              </v-tab-item>
              <v-tab-item key="response">
                <v-card flat>
                  <tree-view :data="item.response" :options="{maxDepth: 2}"></tree-view>
                </v-card>
              </v-tab-item>
              <v-tab-item key="log">
                <v-card>
                  <tree-view :data="item.result" :options="{maxDepth: 3}"></tree-view>
                </v-card>
              </v-tab-item>
            </v-tabs>
</template>
<script>
export default {
    props: ['item'],
    data () {
      return {
        active: '',
      }
    },
}
</script>

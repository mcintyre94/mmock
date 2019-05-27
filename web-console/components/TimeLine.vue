<template>
<div>
     <v-card
    class="mx-auto"
  >
    <v-card-text class="py-0">
      <v-timeline dense>
        <v-slide-x-reverse-transition
          group
          hide-on-leave
        >
          <v-timeline-item
            v-for="r in requests"
            :key="r.id"
            :color="getColor(r.status)"
            small
            fill-dot
          >
           <v-layout pt-2>
      
            <v-flex>
                <strong>
                 {{ r.method }} {{ r.path }}
                </strong>
                <div class="caption mb-2">{{r.time}}</div>
               
            </v-flex>
            <v-flex xs2>
              <v-btn   @click="details(r)">
                details
              </v-btn>
            </v-flex>
          </v-layout>

          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
</v-card>

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog.active"
      lazy
      width="800"
    >
      <v-card>
        <RequestDetails  v-bind:item="dialog.data"></RequestDetails>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog.active = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  
</div>
</template>
<script>

  import RequestDetails from "../components/RequestDetails"

  export default {
    components: {
        RequestDetails
    },
    props: ['requests'],
    data () {
      return {
        dialog: {
          maxDepth: 2,
          active:false,
          data: {
            request:[],
            response:[],
            log:[],
          }
        }
      }
    },
    methods: {
      getColor(status) {
        if (status >= 200 && status < 400) {
            return "info";
        } else if (status == 404) {
            return "error";
        }
        return "warning";
      },
      details(data) {
        this.dialog.data = data
        this.dialog.active = true       
      }

    }
  }
</script>
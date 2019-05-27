<template>
  <div >

    <v-data-table
      :headers="headers"
      :items="logs"
      :search="search"
      :loading="loading"
      :rows-per-page-items="[25,50,100]"
      item-key="id"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ getRequestTime(props.item.time) }}</td>
          <td><v-chip :color=getColor(props.item.response.statusCode) text-color="white" >{{ props.item.response.statusCode }}</v-chip> </td>
          <td>{{ props.item.request.method }}</td>
          <td>{{ props.item.request.path }}</td>
        </tr>
      </template>
      <template v-slot:expand="props">
          <div>
            <RequestDetails  v-bind:item="props.item"></RequestDetails>
          </div>
        </template>
        <template v-slot:no-data>
          <v-alert :value="true" color="info" icon="warning">
            There is no request available. MMock is hungry feed him.
          </v-alert>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  import RequestDetails from "../components/RequestDetails"

  export default {
    components: {
        RequestDetails
    },
    props: ['logs','loading'],
    data () {
      return {
        search: '',
        headers: [
          { text: 'Date', value: 'time', width: '20%' },
          { text: 'Code', value: 'status', width: '15%' },
          { text: 'Method', value: 'method', width: '15%' },
          { text: 'Path', value: 'path' , width: '50%'},
        ]
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
      getRequestTime(timestamp) {
        var requestTime = new Date(timestamp*1000);
        var datetime = requestTime.getDate() + "/" +
        (requestTime.getMonth() + 1) + "/" +
        requestTime.getFullYear() + " @ " +
        requestTime.getHours() + ":" +
        requestTime.getMinutes() + ":" +
        requestTime.getSeconds();
        return datetime;
      }
    }
}
</script>

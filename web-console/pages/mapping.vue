<template>
  <div>
    <EditorDialog v-bind:dialog="dialog" v-bind:item="edit_item"></EditorDialog>
    <v-toolbar flat color="primary">
      <v-toolbar-title class="white--text">Mocks mapping</v-toolbar-title>
       <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon @click="getAllMappings()">refresh</v-icon>
        </v-btn>
        <v-btn icon>  
          <v-icon @click="newItem()">add</v-icon>
        </v-btn>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="mappings"
    >
      <template v-slot:items="props">
        <td>{{ props.item.URI }}</td>
        <td>{{ props.item.description }}</td>
        <td>{{ props.item.request.method }}</td>
        <td>{{ props.item.request.path }}</td>
        <td>{{ props.item.response.statusCode }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" >TODO</v-btn>
      </template>
    </v-data-table>
    
  </div>
</template>
<script>
 import { MMOCK_HTTP } from '../constants';
 import EditorDialog from "../components/EditorDialog"

  export default {
    components: {
        EditorDialog
    },
    data: () => ({
      dialog: false,
      edit_item: {},
      headers: [
          { text: 'URI', value: 'URI', width: '20%' },
          { text: 'Description', value: 'description', width: '25%' },
          { text: 'Method', value: 'method', width: '5%' },
          { text: 'Path', value: 'path' , width: '30%'},
          { text: 'Result', value: 'result' , width: '5%'},
          { text: 'Actions', value: 'result' , width: '5%'},
        ]
    }),
    mounted(){
        this.getAllMappings()
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      mappings() {
          return this.$store.state.mapping.mappings
      }
    },
  
    methods: {
        newItem (item) {
            this.dialog_edit = {}
            this.dialog = true
        },
        editItem (item) {
            this.dialog_edit = item
            this.dialog = true
        },
        deleteItem (item) {
            if (confirm('Are you sure you want to delete this item?')){
                console.log("hihihi")
            }
        },
        close () {
            this.dialog = false
        },
        save () {
            this.close()
        },
        async getAllMappings() {
            this.loading=true
            const mappings = await this.$axios.$get(MMOCK_HTTP+'/api/mapping')
            this.$store.commit('mapping/addMappings',mappings)
            this.loading=false
        } 
    }
  }
</script>
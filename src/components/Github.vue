<template lang="html">
  <v-flex>
    <v-layout row wrap ml-3 mr-3 mt-5>
      <v-flex xs12 sm5 md3 md v-for="repo in filtertrepos" :key="repo.id">
        <v-card class="mt-3 mx-2" outlined>
            <v-list-item>
              <v-list-item-content>
                <v-row class="ma-0 fill-height">
                  <v-col>
                    <v-list-item-title class="headline mb-1">{{repo.name}}</v-list-item-title>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                    <v-btn icon color="blue" v-clipboard="repo.ssh_url">
                      <v-icon>mdi-content-copy</v-icon>
                    </v-btn>
                    <v-btn icon color="blue" :href="repo.html_url">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-list-item-subtitle>
                  <b class="blue--text">{{repo.language}}</b><br>
                  <b>DESCRIPTION: {{repo.description}}</b><br>
                  <b>UPDATE: {{repo.updated_at | date}}</b><br>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        repos: [],
      }
    },
    methods: {
    },
    computed: {
      filtertrepos: function () {
        return this.repos.filter(function (repro) {
          return repro.fork === false
        })
      }
    },
    created() {
      this.$http.get('https://api.github.com/users/Crisu1710/repos').then(function(data){
        console.log(data);
        this.repos = data.body //get request data and send it do return items
    });
  },
}

</script>

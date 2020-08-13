<template lang="html">
  <v-flex>
    <h1 class="text-center text-uppercase mt-5">my github repositories</h1>
    <v-layout row wrap ml-2 mr-2 mt-1 mb-5 justify-center>
      <v-flex xs12 sm9 md6 lg4 xl3 v-for="repo in filtertrepos" :key="repo.id" class="mb-4">
        <v-card class="mt-3 mx-2" outlined height="100%">
            <v-list-item>
              <v-list-item-content>
                <v-subheader class="justify-center blue--text">{{repo.language}}</v-subheader>
                <v-card-title class="justify-center">{{repo.name}}</v-card-title>
                <v-row class="justify-center">
                    <v-btn class="mr-2" color="blue" rounded outlined :href="repo.html_url">
                      <v-icon>mdi-github</v-icon> Open
                    </v-btn>
                    <v-btn class="mr-2" rounded outlined color="blue" v-clipboard="repo.ssh_url">
                      <v-icon>mdi-git</v-icon>clone
                    </v-btn>
                    <v-btn rounded outlined color="blue">
                      <v-icon>mdi-star-outline</v-icon>{{repo.stargazers_count}}
                    </v-btn>
                </v-row>
                <v-card-text class="mt-3" >
                  <h4 v-if="repo.description" class="text-wrap">{{repo.description}}</h4><br>
                  <h5>UPDATE: {{repo.updated_at | date}}</h5><br>
                </v-card-text>
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

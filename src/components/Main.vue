<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

        <v-avatar size="200">
          <v-img
            :src="user.avatar_url"
            class="my-3"
            contain
            height="200"
          />
        </v-avatar>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{user.name}} - @{{user.login}}
        </h1>

        <p class="subheading font-weight-regular">
          {{user.bio}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        user: [],
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
      this.$http.get('https://api.github.com/users/Crisu1710').then(function(data){
        console.log(data);
        this.user = data.body //get request data and send it do return items
    });
  },
}

</script>

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
          {{user.name}} @{{user.login}}
        </h1>
        <h1 class="display-2 font-weight-bold mb-3">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon target="_blank" :href="icon.link">
            <v-icon size="24px" :color="icon.color">{{ icon.icon }}</v-icon>
          </v-btn>
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
        icons: [
          { icon: 'mdi-spotify', color: 'green', link: 'https://www.instagram.com/robins1710'},
          { icon: 'mdi-gog', color: 'purple', link: 'https://www.instagram.com/robins1710'},
          { icon: 'mdi-steam', color: 'indigo darken-4', link: 'https://www.instagram.com/robins1710'},
          { icon: 'mdi-github', color: '', link: 'https://github.com/Crisu1710'},
          { icon: 'mdi-twitter', color: 'blue', link: 'https://twitter.com/Crisu1710'},
          { icon: 'mdi-xing', color: 'teal darken-3', link: 'https://www.xing.com/profile/Robin_Schneider99/cv'},
          { icon: 'mdi-instagram', color: 'pink', link: 'https://www.instagram.com/robins1710'},
        ],
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

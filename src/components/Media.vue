<template lang="html">
  <v-flex>
    <h1 class="text-center text-uppercase mt-5">my favorite playlists</h1>
    <v-layout row wrap ml-3 mr-3 mt-5 justify-center>
      <v-flex xs11 sm6 md4 lg4 xl3 v-for="playlist in playlists" :key="playlist.link">
        <v-card class="mt-3 mx-2 mb-3" outlined>
            <iframe :src="playlist.link" width="100%" height="700" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        playlists: [
          {link: 'https://open.spotify.com/embed/playlist/2UyctvoE9z83tzE5VvYCCu'},
          {link: 'https://open.spotify.com/embed/playlist/4yz7NmsKeSiAxjPwr6d5VK'},
          {link: 'https://open.spotify.com/embed/playlist/2fVb2ALBE5g5b3oG073C9k'},
        ],
      }
    }
}

</script>

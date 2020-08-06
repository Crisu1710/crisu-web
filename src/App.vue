<template>
  <v-app>
    <v-app-bar class="white--text blue" app >
      <v-app-bar-nav-icon color="white--text" @click.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer; text-decoration: none">CRISU-WEB</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" >
          <v-btn color="blue" v-for="item in menuItems" :key="item.title" :to="item.link" >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer persistent v-model="sideNav" class="text-uppercase" color="blue" app>  <!-- navigation bar -->
      <v-list color="blue">  <!-- text color -->
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-action>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
              {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Robin Schneider @Crisu1710</strong>
        <v-spacer></v-spacer>
        <a href="/imprint">IMPRINT</a>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      version: "1.0.3",
      imprint: "/imprint",
      menuItems: [
        { icon: 'mdi-github', title: 'GIT REPOS', link: '/github'},
        { icon: 'mdi-music', title: 'MEDIA', link: '/media'},
        { icon: 'mdi-home', title: 'HOME', link: '/'},
      ]
    }
  },
};
</script>

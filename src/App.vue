<template>
  <v-app>
    <v-app-bar class="white--text indigo darken-3" app >
      <v-app-bar-nav-icon color="white--text" @click.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer; text-decoration: none">CRISU-WEB</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" >
          <v-btn color="indigo darken-3" v-for="item in menuItems" :key="item.title" :to="item.link" >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer persistent v-model="sideNav" class="vwdblue text-uppercase" color="indigo darken-2" app>  <!-- navigation bar -->
      <v-list color="indigo darken-2">  <!-- text color -->
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link" >
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
      <v-card-title class="teal">
        <strong class="subheading"></strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon target="_blank" :href="icon.link">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Robin @Crisu1710</strong>
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
      icons: [
        { icon: 'mdi-steam', link: 'https://www.instagram.com/robins1710'},
        { icon: 'mdi-github', link: 'https://github.com/Crisu1710'},
        { icon: 'mdi-twitter', link: 'https://twitter.com/Crisu1710'},
        { icon: 'mdi-xing', link: 'https://www.xing.com/profile/Robin_Schneider99/cv'},
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/robins1710'},
      ],
      menuItems: [
        { icon: 'mdi-github', title: 'GIT REPOS', link: '/github'},
      ]
    }
  },
};
</script>

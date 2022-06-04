<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      fixed
      app
      color="#FEFEFE"
    >
      <v-list-item>
        <div class="d-flex align-center pa-52px">
          <v-list-item-content>
            <v-img
            alt="Gym Management Logo"
            contain
            src="@/assets/Logo.png"
            height="127px"
            width="212px"
          />
          </v-list-item-content>
        </div>
      </v-list-item>


      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="press(item.title)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      app
      color="#FEFEFE"
      fixed
    >
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
      color="#F48743">
    </v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-toolbar-title
        class="font-weight-bold"
        > {{this.page}} </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text
          v-bind="attrs"
          v-on="on">
            <span class="mr-2">SuperAdmin</span>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        
        <v-list>
          <v-list-item-content>
            <div class="d-flex">
              <v-icon class="order-1 px-2">mdi-logout</v-icon>
              <v-list-item-title class="order-2">LOGOUT</v-list-item-title>
            </div>
          </v-list-item-content>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

    data: () => ({
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Data Member', icon: 'mdi-badge-account-horizontal-outline' },
        { title: 'Data Kelas', icon: 'mdi-dumbbell' },
        { title: 'Data Admin', icon: 'mdi-badge-account-horizontal-outline' },
        { title: 'Classes', icon: 'mdi-dumbbell' },
        { title: 'Newsletter', icon: 'mdi-newspaper-variant' },
        { title: 'Logout', icon: 'mdi-logout' },
      ],
      drawer: false,
      group: null,
      page: "Dashboard",
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods :{
      press(path){
        this.page = path;
      // this.$router.push({name: path})
    }
  },
  }
</script>

<style>
.v-main__wrap {
    background-color: #FEE9CC;
}

.v-image__image, .v-image__placeholder {
    max-width: 70%;
}

* {
    justify-content: center;
}



</style>
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
            <v-img class="navLogo"
            alt="Gym Management Logo"
            contain
            src="@/assets/logo.png"
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
        <v-list-item-group
          v-model="selectedItem"
          color="#F48743"
        >
          <v-list-item class="navIcon"
            v-for="(item, index) in items"
            :key="'A'+index"
            @click="press(item.title); changeExpKelas(item.title);"
          >

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-content v-if="expandKelas && item.title=='Data Kelas'">
            <v-list-item 
              class="navIcon"
              v-for="(kelas, index) in subItems"
              :key="'B'+index"
              @click="press(kelas.title)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ kelas.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
          </v-list-item-content>
          
          </v-list-item>
        </v-list-item-group>
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
        { title: 'Data Pemesanan', icon: 'mdi-cart' },
        { title: 'Data Pelatih', icon: 'mdi-badge-account-horizontal-outline' },
        { title: 'Data Admin', icon: 'mdi-badge-account-horizontal-outline' },
        { title: 'Jadwal Latihan', icon: 'mdi-calendar-month' },
        { title: 'Berita', icon: 'mdi-newspaper-variant' },
      ],
      subItems:[
        { title: 'Online'},
        { title: 'Offline'},
      ],
      drawer: false,
      expandKelas: false,
      group: null,
      page: "Dashboard",
      selectedItem: 0,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods :{
      press(path){
        this.page = path;
        this.$router.push({name: path})
    },
      changeExpKelas(param){
        if(param == "Data Kelas"){
          this.expandKelas = !this.expandKelas;
        }
        else{
          this.expandKelas = false;
        }
      }
  },
  }
</script>

<style>
.v-main__wrap {
    background-color: #FEE9CC;
}

.navLogo .v-image__image, .v-image__placeholder {
    max-width: 70%;
    left: 10%
}

* {
    justify-content: center;
}

.navIcon:hover{
  background: #FEE9CC;
}

.navIcon:visited{
  color: #F48743;
  background: red;
}

.navIcon{
  max-height: 40px;
  max-width: 224px;
}

.expansion .v-expansion-panels{
  max-height: 40px;
  max-width: 224px;
}
</style>
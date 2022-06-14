<template>
  <v-app>
    <!-- <v-navigation-drawer 
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

            <nav-bar-data-kelas v-if="expandKelas && item.title=='Data Kelas'"/>
          
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      color="#FEFEFE"
      app
    >
    <v-list-item class="px-2 pt-1">
        <v-list-item-avatar>
            <v-list-item-content>
            <v-img class="navLogo"
            alt="Gym Management Logo"
            contain
            src="@/assets/logo.png"
            height="127px"
            width="212px"
          />
          </v-list-item-content>
        </v-list-item-avatar>
        <v-list-item-title class="ml-4 text-capitalize">FITNESS GYM</v-list-item-title>
    </v-list-item>
      <v-list shaped  class="clickable">
        <template v-for="item in items2">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            @click="press(item.text)"
            active-class="orange--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title >
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route :to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            active-class="orange--text"
            route :to="item.route"
            @click="press(item.text)"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>  
    
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="#FEFEFE"
    >
    <!-- <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
      color="#F48743">
    </v-app-bar-nav-icon> -->
    <v-app-bar-nav-icon @click.stop="mini = !mini"  class="clickable"/>

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
// import NavBarDataKelas from './components/NavBarDataKelas.vue';

export default {
  // components: { NavBarDataKelas },
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
      // drawer: false,
      expandKelas: false,
      group: null,
      page: "Dashboard",
      selectedItem: 0,
      items2: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard' , route:'/'},
        { icon: 'mdi-badge-account-horizontal-outline', text: 'Data Member' , route:'/DataMember'},
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          'icon-ctr': 'mdi-dumbbell',
          text: 'Data Kelas',
          model: false,
          children: [
        { text: 'Offline', route:'/DataKelasOffline' },
        { text: 'Online', route:'/DataKelasOnline' },
          ],
        },
        { icon: 'mdi-cart', text: 'Data Pemesanan', route:'/DataPemesanan' },
        { icon: 'mdi-badge-account-horizontal-outline', text: 'Data Pelatih', route:'/DataPelatih' },
        { icon: 'mdi-badge-account-horizontal-outline', text: 'Data Admin', route:'/DataAdmin' },
        { icon: 'mdi-calendar-month', text: 'Jadwal Latihan', route:'/JadwalLatihan' },
        { icon: 'mdi-newspaper-variant', text: 'Berita', route:'/Berita'},
      ],
      drawer: null,
      mini: false,
      fab: false,
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
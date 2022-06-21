<template>
    <v-container>
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
        <!-- <v-expansion-panels popout>
        <v-expansion-panel>
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
    </v-container>
</template>

<script>
export default {
    setup() {
        
    },
    data:() => ({
        subItems:[
        { title: 'Online'},
        { title: 'Offline'},
      ],
    }),
}
</script>

<style scoped>
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

</style>
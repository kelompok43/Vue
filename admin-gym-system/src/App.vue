<template>
  <v-app>
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</template>

<script>
export default {
  // components: { NavBarDataKelas },
  name: 'App',
  }
</script>

<style>
<<<<<<< HEAD
* {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
=======
.v-main__wrap {
    background-color: #FEE9CC;
>>>>>>> f6db956c8984da0eb68835aa7e4a16f1976f6b37
}

* {
    justify-content: center;
    font-weight: 600;
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
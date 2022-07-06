<template>
  <v-app>
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  }
</script>

<style>

* {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
}

.v-main__wrap {
    background-color: #FEE9CC;
}

</style>

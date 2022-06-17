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
.v-main__wrap {
    background-color: #FEE9CC;
}

* {
    justify-content: center;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 600;
}
</style>
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
    font-weight: 600 !important;
}
</style>
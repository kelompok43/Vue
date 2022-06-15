<template>
  <v-app>
    <v-app-bar app color="#F48743" dark>
      <div class="d-flex align-center">
        <v-btn
        href="/"
        text
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        href="/about"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn
        href="/registrasi"
        target="_blank"
        text
      >
        <span class="mr-2">Form Data Admin</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="/editmember"
        target="_blank"
        text
      >
        <span class="mr-2">Form Data Member</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: 'Poppins', sans-serif !important;
}

</style>
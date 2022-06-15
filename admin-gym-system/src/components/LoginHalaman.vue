<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-img 
                        width="500px"
                        height="500px"
                        src="@/assets/gambar.jpg"
                        class="ms-auto"
                        >
                      <v-card-text class="white--text mt-3">
                        <br><br><br><br><br><br><br><br>
                        <v-img 
                        max-width="200px"
                        max-height="200px"
                        src="@/assets/frameputih.png"
                        class="mx-auto"
                        ></v-img>
                      </v-card-text>
                      </v-img>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <v-img 
                        max-width="170px"
                        max-height="170px"
                        src="@/assets/icon.png"
                        class="mx-auto"
                        ></v-img><br>
                        <!-- <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >Fitness Gym</h1> -->
                        <h2 class="text-center mt-4">Selamat Datang</h2>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="orange"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="orange"
                          />
                        </v-form>
                        <h3 class="text-right mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn color="#F48743" dark width="500px" @click="Login">LOGIN</v-btn>
                      </div>
                      <br>
                    </v-col>
                  </v-row>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  },
  methods:{
    Login(){
      localStorage.setItem("authenticated", true);
      this.$router.push({name: "Dashboard" });
    }
  }
};
</script>

<style scoped>
h3 {
  color: #F48743;
}


</style>

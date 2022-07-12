<template>
  <v-app id="login">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card elevation="14">
              <v-window v-model="step">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-img
                      max-width="1000px"
                      max-height="1000px"
                      src="../assets/gambar.jpg"
                      class="ms-auto"
                    >
                      <v-card-text class="white--text mt-3">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <v-img
                          max-width="400px"
                          max-height="400px"
                          src="../assets/frameputih.png"
                          class="mx-auto"
                        ></v-img>
                      </v-card-text>
                    </v-img>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <v-img
                        max-width="170px"
                        max-height="170px"
                        src="@/assets/icon.png"
                        class="mx-auto"
                      ></v-img
                      ><br />
                      <!-- <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >Fitness Gym</h1> -->
                      <h2 class="text-center mt-4">Selamat Datang</h2>
                      <v-form lazy-validation>
                        <v-text-field
                          :rules="emailRules"
                          label="Email"
                          v-model="email"
                          type="text"
                          color="orange"
                          required
                        />
                        <v-text-field
                          :rules="passwordRules"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          id="password"
                          label="Password"
                          v-model="password"
                          @click:append="show = !show"
                          color="orange"
                          required
                        />
                      </v-form>
                      <p v-if="errorText" class="error-text">{{ errorText }}</p>
                      <h3 class="text-right mt-4">Lupa Password?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn color="#F48743" dark width="500px" @click="login"
                        >LOGIN</v-btn
                      >
                    </div>
                    <br />
                  </v-col>
                </v-row>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    valid: false,
    emailRules: [(v) => !!v || "Email is required"],
    passwordRules: [(v) => !!v || "Password required"],
    email: "",
    password: "",
    show: false,
    errorText: "",
  }),
  props: {
    source: String,
  },
  methods: {
    async login() {
      const result = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      if (result) {
        localStorage.setItem("authenticated", true);
        this.$router.push({ name: "Dashboard" });
      } else {
        this.errorText = this.$store.state.info;
      }
    },
  },
};
</script>

<style scoped>
h3 {
  color: #f48743;
}
</style>

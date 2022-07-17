<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <div>
          <v-alert
            v-if="sucess"
            dense
            text
            dismissible
            type="success"
            color="green darken-3"
            class="alertatas"
          >
            <strong>SUKSES!</strong> Data berhasil disimpan
          </v-alert>
        </div>
        <v-card class="elevation-12">
          <v-col cols="12" md="8">
            <h3 class="text-left ms-3 mt-4 blue--text">
              Tambahkan admin operasional baru
            </h3>
            <v-card-text class="mt-5">
              <v-form>
                <h4>Nama Lengkap</h4>
                <br />
                <v-text-field
                  label="Masukkan Nama Lengkap"
                  v-model="namaAdmin"
                  type="text"
                  outlined
                  color="orange"
                  max-width="100px"
                />
                <h4>Tanggal Lahir</h4>
                <br />
                <v-text-field
                  id="tanggallahir"
                  v-model="tanggallahir"
                  type="date"
                  outlined
                  color="orange"
                />
                <h4>Jenis Kelamin</h4>
                <v-radio-group v-model="jenisKelamin" row>
                  <v-radio label="Laki-laki" value="L"></v-radio>
                  <v-radio label="Perempuan" value="P"></v-radio>
                </v-radio-group>

                <h4>Alamat</h4>
                <br />
                <v-textarea outlined v-model="alamat"></v-textarea>
                <h4>Role</h4>
                <br />
                <v-select
                  :items="items"
                  outlined
                  color="orange"
                  v-model="role"
                ></v-select>
                <h4>Email</h4>
                <br />
                <v-text-field
                  label="Masukkan Email"
                  v-model="emailAdmin"
                  type="text"
                  outlined
                  color="orange"
                  max-width="100px"
                />
                <h4>Password</h4>
                <br />
                <v-text-field
                  label="Password"
                  v-model="passwordAdmin"
                  type="password"
                  outlined
                  color="orange"
                  max-width="100px"
                />
              </v-form>
            </v-card-text>
            <div class="text-left mt-5 ms-3">
              <!-- <v-btn color="#F48743" dark width="200px">Save</v-btn> -->
              <v-dialog v-model="dialog" persistent width="800">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#F48743"
                    dark
                    width="200px"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Save
                  </v-btn>
                </template>
                <v-card height="250px">
                  <v-card-title class="judul"
                    ><strong> KONFIRMASI </strong></v-card-title
                  ><br /><br />
                  <v-card-text class="desc"
                    >Apakah data yang anda masukkan sudah benar?</v-card-text
                  >
                  <v-card-actions class="justify-center">
                    <br /><br /><br />

                    <v-btn
                      class="btnbatal"
                      width="150px"
                      color="error"
                      @click="dialog = false"
                    >
                      Batal
                    </v-btn>
                    <v-btn
                      class="btnya"
                      width="150px"
                      color="success"
                      @click="
                        addAdmin();
                        dialog = false;
                        sucess = true;
                      "
                    >
                      Ya
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <br />
            <br />
          </v-col>
        </v-card>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Admin Operasional", "Super Admin"],
    role: null,
    dialog: false,
    namaAdmin: null,
    emailAdmin: null,
    passwordAdmin: null,
    tanggallahir: null,
    tanggaljoin: null,
    alamat: null,
    message: {},
    sucess: false,
    jenisKelamin: null,
  }),
  methods: {
    addAdmin() {
      const payload = {
        name: this.namaAdmin,
        dob: this.tanggallahir,
        gender: this.jenisKelamin,
        address: this.alamat,
        role: this.role,
        email: this.emailAdmin,
        password: this.passwordAdmin,
      };
      this.$store.dispatch("addAdmin", payload);
    },
  },
};
</script>

<style scoped>
.judul {
  font-size: 50px;
  justify-content: center !important;
}
.desc {
  font-size: 25px;
  text-align: center;
}
.btnbatal {
  margin-left: 10px;
  margin-right: 45px;
}
.alertatas {
  background: #b3ea78 !important;
}
</style>

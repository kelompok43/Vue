<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-col cols="12" md="8">
              <h3 class="text-left ms-3 mt-4 blue--text">Edit Data User</h3>
              <v-card-text class="mt-5">
                <v-form>
                  <h4>Nama Lengkap</h4>
                  <br />
                  <v-text-field
                    label="Masukkan Nama Lengkap"
                    name="namalengkap"
                    type="text"
                    outlined
                    color="orange"
                    max-width="100px"
                  />
                  <h4>Email</h4>
                  <br />
                  <v-text-field
                    label="Masukkan Email"
                    name="email"
                    type="text"
                    outlined
                    color="orange"
                    max-width="100px"
                  />
                  <h4>Tanggal Lahir</h4>
                  <br />
                  <v-text-field
                    id="tanggallahir"
                    name="date"
                    type="date"
                    outlined
                    color="orange"
                  />
                  <h4>Jenis Kelamin</h4>
                  <v-radio-group v-model="row" row>
                    <v-radio label="Laki-laki" value="radio-1"></v-radio>

                    <v-radio label="Perempuan" value="radio-2"></v-radio>
                  </v-radio-group>
                  <h4>Nomor Ponsel</h4>
                  <br />
                  <v-text-field
                    label="Masukkan Nomor Ponsel"
                    name="nomorponsel"
                    type="text"
                    outlined
                    color="orange"
                    max-width="100px"
                  />

                  <h4>Alamat</h4>
                  <br />
                  <v-textarea outlined name="alamat"></v-textarea>
                  <h4>Status</h4>
                  <br />
                  <v-select :items="items" outlined color="orange"></v-select>
                </v-form>
              </v-card-text>
              <div class="text-left mt-5 ms-3">
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
                        @click="dialog = false"
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
  </v-content>
</template>

<script>
export default {
  data: () => ({
    items: ["Admin Operasional", "Member"],
    dialog: false,
  }),
};
</script>

<style scoped>
.judul {
  font-size: 50px;
  justify-content: center;
}
.desc {
  font-size: 25px;
  text-align: center;
}
.btnbatal {
  margin-left: 10px;
  margin-right: 45px;
}
</style>

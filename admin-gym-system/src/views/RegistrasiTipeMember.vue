<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="12">
          <v-card class="elevation-12">
            <v-col cols="12" md="8">
              <h3 class="text-left ms-3 mt-4 blue--text">Tipe Membership</h3>
              <v-card-text class="mt-5">
                <v-form>
                  <h4>Tipe</h4>
                  <br />
                  <v-select :items="items" outlined color="orange"></v-select>
                  <h4>Harga</h4>
                  <br />
                  <v-text-field
                    label="Harga"
                    name="Harga"
                    type="text"
                    outlined
                    color="orange"
                    max-width="100px"
                  />
                  <h4>Deskripsi</h4>
                  <br />
                  <v-text-field
                    id="deskripsi"
                    name="deskripsi"
                    type="deskripsi"
                    outlined
                    color="orange"
                  />
                  
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
</template>

<script>
export default {
  data: () => ({
    items: ["Bukan Member", "Member"],
    dialog: false,
  }),
};
</script>

<style scoped>
.judul {
  font-size: 50px;
  justify-content: center;
  text-align: center;
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
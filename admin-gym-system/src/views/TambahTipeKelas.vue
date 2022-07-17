<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-col cols="12" md="8">
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
            <h3 class="text-left mt-4 blue--text">Tambah Tipe Kelas Baru</h3>
            <v-card-text class="mt-5">
              <v-form v-model="valid">
                <h4>Nama Kelas</h4>
                <br />
                <v-text-field
                  v-model="namaKelas"
                  :rules="nameRules"
                  label="Masukkan nama kelas"
                  required
                  type="text"
                  outlined
                  color="orange"
                  max-width="100px"
                />

                <h4>Deskripsi</h4>
                <br />
                <v-textarea
                  v-model="Deskripsi"
                  :rules="descRules"
                  label="Masukkan deskripsi singkat kelas"
                  required
                  type="text"
                  outlined
                  color="orange"
                ></v-textarea>

                <template>
                  <h4>Upload Foto</h4>
                  <br />
                  <v-file-input
                    :rules="rulesImage"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Upload Foto"
                    prepend-icon=""
                    label="Upload Foto"
                    @change="Preview_image"
                    v-model="image"
                    height="200px"
                    outlined
                  >
                  </v-file-input>
                  <v-img :src="url"></v-img>
                </template>
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
                        addTipeKelas();
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
    valid: false,
    namaKelas: null,
    Deskripsi: null,
    nameRules: [(v) => !!v || "Nama kelas tidak boleh kosong"],
    descRules: [(v) => !!v || "Deskripsi tidak boleh kosong"],
    rulesImage: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Images size should be less than 2 MB!",
    ],
    dialog: false,
    message: {},
    sucess: false,
    url: null,
    image: null,
  }),

  methods: {
    addTipeKelas() {
      this.message = {
        number: 11,
        name: this.namaKelas,
        foto: this.url,
        description: this.Deskripsi,
      };
      this.$store.dispatch("addTipeKelas", this.message);
    },
    Preview_image() {
      this.url = URL.createObjectURL(this.image);
    },
  },
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
.alertatas {
  background: #b3ea78 !important;
}
</style>

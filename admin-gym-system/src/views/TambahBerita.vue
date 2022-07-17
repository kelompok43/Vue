<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="my-2 mx-3">
          <v-sheet
            :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-4 ma-3 rounded-lg"
          >
            <div class="judul">Tambah Berita Baru</div>
            <br />
            <v-col cols="12" md="8">
              <v-form v-model="valid">
                <h4>Kategori Berita</h4>
                <br />
                <v-select
                  :items="items"
                  outlined
                  single-line
                  dense
                  v-model="kategoriBerita"
                  :rules="kategoriBeritaRules"
                ></v-select>

                <h4>Judul Berita</h4>
                <br />
                <v-text-field
                  label="Masukkan judul berita"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="judulBerita"
                  :rules="judulBeritaRules"
                />

                <h4>Author</h4>
                <br />
                <v-text-field
                  label="Masukkan nama author"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="author"
                  :rules="authorRules"
                />

                <h4>Tanggal</h4>
                <br />
                <v-text-field
                  type="date"
                  outlined
                  single-line
                  dense
                  color="orange"
                  v-model="date"
                  :rules="dateRules"
                />

                <h4>Deskripsi</h4>
                <br />
                <v-textarea
                  label="Masukkan deskripsi singkat"
                  type="text"
                  outlined
                  single-line
                  color="orange"
                  max-width="100px"
                  v-model="deskripsi"
                  :rules="deskripsiRules"
                />

                <h4>Upload Foto</h4>
                <br />
                <v-file-input
                  label="Upload Foto"
                  outlined
                  single-line
                  dense
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-form>

              <v-dialog v-model="dialogSave" max-width="400px">
                <v-card>
                  <v-card-title class="text-h6">Konfirmasi</v-card-title>
                  <v-card-text class="text-center"
                    >Apakah data yang anda masukkan sudah benar?</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed color="error" text @click="closeSave"
                      >Batal</v-btn
                    >
                    <v-btn depressed color="success" text>Ya</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <div class="text-left mt-5 ms-3">
                <v-btn color="#F48743" dark width="200px" @click="saveItem"
                  >Save
                </v-btn>
              </div>
              <br />
              <br />
            </v-col>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  setup() {},

  inject: {
    theme: {
      default: { isDark: false },
    },
  },

  data() {
    return {
      dialogSave: false,
      items: ["Fitness Gym", "Pola Latihan Gym", "Pola Makan Sehat"],
      row: null,
      valid: false,
      judulBerita: "",
      judulBeritaRules: [(v) => !!v || "Judul tidak boleh kosong"],
      author: "",
      authorRules: [(v) => !!v || "Nama author tidak boleh kosong"],
      date: "",
      dateRules: [(v) => !!v || "Tanggal tidak boleh kosong"],
      deskripsi: "",
      deskripsiRules: [(v) => !!v || "Deskripsi tidak boleh kosong"],
      kategoriBerita: "",
      kategoriBeritaRules: [(v) => !!v || "Kategori berita tidak boleh kosong"],
    };
  },

  methods: {
    saveItem() {
      this.dialogSave = true;
    },
    closeSave() {
      this.dialogSave = false;
    },
  },
};
</script>

<style scoped>
.judul {
  align-items: center;
  display: block;
  color: #026daa;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.0125em;
  line-height: 21px;
  word-break: break-all;
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(250, 146, 0, 0.986);
}
</style>

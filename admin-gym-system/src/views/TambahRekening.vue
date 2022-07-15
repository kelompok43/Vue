<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="my-2 mx-3">
          <v-sheet
            :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-4 ma-3 rounded-lg"
          >
            <div class="judul">Data Rekening</div>
            <br />
            <v-col cols="12" md="8">
              <v-form v-model="valid">
                <h4>Nama Bank</h4>
                <br />
                <v-text-field
                  label="Masukkan nama bank"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="nameBank"
                  :rules="nameBankRules"
                />
                <h4>Nomor Rekening</h4>
                <br />
                <v-text-field
                  label="Masukkan nomor rekening"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="numberRek"
                  :rules="numberRekRules"
                />
                <h4>Nama Pemilik</h4>
                <br />
                <v-text-field
                  label="Masukkan nama pemilik"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="namePemilik"
                  :rules="namePemilikRules"
                />
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
      valid: false,
      nameBank: "",
      nameBankRules: [(v) => !!v || "Nama bank tidak boleh kosong"],
      numberRek: "",
      numberRekRules: [(v) => !!v || "Nomor rekening tidak boleh kosong"],
      namePemilik: "",
      namePemilikRules: [(v) => !!v || "Nama pemilik tidak boleh kosong"],
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

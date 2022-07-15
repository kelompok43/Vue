<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="my-2 mx-3">
          <v-sheet
            :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-4 ma-3 rounded-lg"
          >
            <div class="judul">Tambah Pelatih</div>
            <br />
            <v-col cols="12" md="8">
              <v-form v-model="valid">
                <h4>Nama</h4>
                <br />
                <v-text-field
                  label="Masukkan nama"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="name"
                  :rules="nameRules"
                />
                <h4>Email</h4>
                <br />
                <v-text-field
                  label="Masukkan email"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="email"
                  :rules="emailRules"
                />
                <h4>Tanggal lahir</h4>
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

                <h4>Jenis Kelamin</h4>
                <br />
                <div class="d-flex justify-start mb-6">
                  <v-radio-group v-model="row" row>
                    <v-radio
                      label="Laki-laki"
                      color="orange"
                      value="radio-1"
                    ></v-radio>
                    <v-radio
                      label="Perempuan"
                      color="orange"
                      value="radio-2"
                    ></v-radio>
                  </v-radio-group>
                </div>

                <h4>Phone Number</h4>
                <br />
                <v-text-field
                  label="Masukkan phone number"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="phoneNumber"
                  :rules="phoneNumberRules"
                />

                <h4>Alamat</h4>
                <br />
                <v-text-field
                  label="Masukkan alamat"
                  type="text"
                  outlined
                  single-line
                  dense
                  color="orange"
                  max-width="100px"
                  v-model="address"
                  :rules="addressRules"
                />

                <h4>Bidang Keahlian</h4>
                <br />
                <v-select
                  :items="items"
                  outlined
                  single-line
                  dense
                  v-model="bidangKeahlian"
                  :rules="bidangKeahlianRules"
                ></v-select>

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
      items: ["Cycling", "Body & Mind", "Cardio", "Strenght and Condition"],
      row: null,
      valid: false,
      name: "",
      nameRules: [(v) => !!v || "Nama tidak boleh kosong"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail tidak boleh kosong",
        (v) => /.+@.+/.test(v) || "E-mail harus valid",
      ],
      date: "",
      dateRules: [(v) => !!v || "Tanggal lahir tidak boleh kosong"],
      phoneNumber: "",
      phoneNumberRules: [(v) => !!v || "Phone number tidak boleh kosong"],
      address: "",
      addressRules: [(v) => !!v || "Alamat tidak boleh kosong"],
      bidangKeahlian: "",
      bidangKeahlianRules: [(v) => !!v || "Bidang keahlian tidak boleh kosong"],
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

<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-col cols="12" md="8">
            <h3 class="text-left mt-4 blue--text">Edit Kelas Online</h3>
            <v-alert v-if="sucess" dense text type="success">
              <strong>SUKSES!</strong> Data berhasil disimpan
            </v-alert>
            <v-card-text class="mt-5">
              <v-form v-model="valid">
                <h4>Nama Kelas</h4>
                <br />
                <v-text-field
                  v-model="namaKelas"
                  :rules="nameRules"
                  :disabled="isUpdating"
                  :counter="10"
                  :label="namaKelasComputed"
                  required
                  type="text"
                  outlined
                  color="orange"
                  max-width="100px"
                />
                <h4>Tanggal</h4>
                <br />
                <v-text-field
                  v-model="tanggal"
                  :rules="dateRules"
                  :label="tanggalComputed"
                  required
                  type="date"
                  outlined
                  color="orange"
                />

                <h4>Jam Mulai</h4>
                <br />
                <v-dialog
                  ref="dialog1"
                  v-model="modal1"
                  :return-value.sync="timeStart"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="timeStart"
                      :rules="timeStartRules"
                      :label="timeStartComputed"
                      required
                      type="text"
                      outlined
                      color="orange"
                      max-width="100px"
                      append-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal1"
                    v-model="timeStart"
                    full-width
                    :max="timeEnd"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="orange" @click="modal1 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="orange"
                      @click="
                        $refs.dialog1.save(timeStart);
                        modal1 = false;
                      "
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>

                <h4>Jam Selesai</h4>
                <br />
                <v-dialog
                  ref="dialog"
                  v-model="modal2"
                  :return-value.sync="timeEnd"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="timeEnd"
                      :rules="timeEndRules"
                      :label="timeEndComputed"
                      required
                      type="text"
                      outlined
                      color="orange"
                      max-width="100px"
                      append-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal2"
                    v-model="timeEnd"
                    full-width
                    :min="timeStart"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="orange" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="orange"
                      @click="
                        $refs.dialog.save(timeEnd);
                        modal2 = false;
                      "
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>

                <h4>Nama Pelatih</h4>
                <br />
                <v-select
                  :items="items"
                  outlined
                  color="orange"
                  v-model="trainer"
                  :label="trainerComputed"
                ></v-select>

                <h4>Deskripsi</h4>
                <br />
                <v-textarea
                  v-model="Deskripsi"
                  :rules="descRules"
                  :label="DeskripsiComputed"
                  required
                  type="text"
                  outlined
                  color="orange"
                ></v-textarea>

                <h4>Virtual Meeting</h4>
                <br />
                <v-text-field
                  v-model="link"
                  :rules="linkRules"
                  label="Masukkan link zoom"
                  required
                  type="url"
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
                    Edit
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
                        editKelas();
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
    items: ["Peter", "Alan", "VanXaiver", "John", "Steven"],
    modal1: false,
    modal2: false,
    valid: false,
    namaKelas: null,
    tanggal: null,
    timeStart: null,
    timeEnd: null,
    link: null,
    isUpdating: false,
    namaPelatih: null,
    Deskripsi: null,
    trainer: null,
    nameRules: [
      (v) => !!v || "Nama kelas tidak boleh kosong",
      // (v) => v.length <= 10 || "Nama kelas harus kurang dari 10 huruf",
    ],
    dateRules: [(v) => !!v || "Tanggal tidak boleh kosong"],
    timeStartRules: [(v) => !!v || "Jam mulai tidak boleh kosong"],
    timeEndRules: [(v) => !!v || "Jam selesai tidak boleh kosong"],
    linkRules: [
      (v) => !!v || "Link zoom tidak boleh kosong",
      // (v) => this.isURL(v) || "URL tidak valid",
    ],
    descRules: [(v) => !!v || "Deskripsi tidak boleh kosong"],
    dialog: false,
    message: {},
    sucess: false,
  }),

  methods: {
    editKelas() {
      this.message = {
        name: this.namaKelas,
        description: this.Deskripsi,
        Trainer: this.trainer,
        Date: this.tanggal,
        TimeStart: this.timeStart,
        TimeEnd: this.timeEnd,
      };
      this.$store.dispatch("editKelasOnline", this.message);
    },
  },
  computed: {
    kelasonlineFromStore() {
      return this.$store.state.kelasonline;
    },
    indexyangDipilih() {
      return this.$store.state.IndexDipilih;
    },
    namaKelasComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].name;
    },
    DeskripsiComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].description;
    },
    tanggalComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].Date;
    },
    trainerComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].Trainer
    },
    timeStartComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].TimeStart;
    },
    timeEndComputed(){
      return this.kelasonlineFromStore[this.indexyangDipilih].TimeEnd;
    },
  },
};
</script>

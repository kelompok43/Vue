<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-col cols="12" md="8">
            <h3 class="text-left mt-4 blue--text">Tambah Kelas Offline Baru</h3>
            <v-alert v-if="sucess" dense text type="success">
              I'm a dense alert with the <strong>text</strong> prop and a
              <strong>type</strong> of success
            </v-alert>
            <v-card-text class="mt-5">
              <v-form v-model="valid">
                <h4>Nama Kelas</h4>
                <br />
                <v-text-field
                  v-model="namaKelas"
                  :rules="nameRules"
                  :counter="10"
                  label="Masukkan nama kelas"
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
                  label="Masukkan tanggal"
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
                      label="Masukkan jam mulai"
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
                      label="Masukkan jam selesai"
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

                <h4>Kuota Kelas</h4>
                <br />
                <v-text-field
                  v-model="kuota"
                  :rules="kuotaRules"
                  label="Masukkan kuota kelas"
                  required
                  type="number"
                  outlined
                  color="orange"
                  max-width="100px"
                />

                <h4>Nama Pelatih</h4>
                <br />
                <v-select :items="items" outlined color="orange"></v-select>

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
              </v-form>
            </v-card-text>
            <div class="text-left mt-5 ms-3">
              <v-btn color="#F48743" dark width="200px">Save</v-btn>
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
    kuota: null,
    namaPelatih: null,
    Deskripsi: null,
    nameRules: [
      (v) => !!v || "Nama kelas tidak boleh kosong",
      (v) => v.length <= 10 || "Nama kelas harus kurang dari 10 huruf",
    ],
    dateRules: [(v) => !!v || "Tanggal tidak boleh kosong"],
    timeStartRules: [(v) => !!v || "Jam mulai tidak boleh kosong"],
    timeEndRules: [(v) => !!v || "Jam selesai tidak boleh kosong"],
    kuotaRules: [(v) => !!v || "Kuota Kelas tidak boleh kosong"],
    descRules: [(v) => !!v || "Deskripsi tidak boleh kosong"],
    dialog: false,
    sucess: false,
  }),

  methods: {},
};
</script>

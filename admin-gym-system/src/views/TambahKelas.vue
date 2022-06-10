<template>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                    <v-col cols="12" md="8">
                        <h3 class="text-left mt-4 blue--text">Tambah Kelas Offline Baru</h3>
                      <v-card-text class="mt-5">
                        <!-- <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >Fitness Gym</h1> -->
                            <h4>Nama Kelas</h4> <br>
                          <v-text-field
                            label="Masukkan nama kelas"
                            name="namaKelas"
                            type="text"
                            outlined
                            color="orange"
                            max-width="100px"
                          />
                            <h4>Tanggal</h4> <br>
                          <v-text-field
                            id="tanggallahir"
                            name="date"
                            type="date"
                            outlined
                            color="orange"
                          />

                          <h4>Jam Mulai</h4> <br>
                          <v-dialog
                            ref="dialog1"
                            v-model="modal1"
                            :return-value.sync="timeStart"
                            persistent
                            width="290px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                label="Masukkan jam mulai"
                                v-model="timeStart"
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
                                <v-btn
                                text
                                color="orange"
                                @click="modal1 = false"
                                >
                                Cancel
                                </v-btn>
                                <v-btn
                                text
                                color="orange"
                                @click="$refs.dialog1.save(timeStart); modal1 = false"
                                >
                                OK
                                </v-btn>
                            </v-time-picker>
                            </v-dialog>

                          <h4>Jam Selesai</h4> <br>
                            <v-dialog
                            ref="dialog"
                            v-model="modal2"
                            :return-value.sync="timeEnd"
                            persistent
                            width="290px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                label="Masukkan jam selesai"
                                v-model="timeEnd"
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
                                <v-btn
                                text
                                color="orange"
                                @click="modal2 = false"
                                >
                                Cancel
                                </v-btn>
                                <v-btn
                                text
                                color="orange"
                                @click="$refs.dialog.save(timeEnd); modal2 = false;"
                                >
                                OK
                                </v-btn>
                            </v-time-picker>
                            </v-dialog>
                            <h3>{{cek()}}</h3>
                          <h4>Kuota Kelas</h4> <br>
                          <v-text-field
                            label="Masukkan kuota kelas"
                            name="kuotaKelas"
                            type="text"
                            outlined
                            color="orange"
                            max-width="100px"
                          />

                          <h4>Nama Pelatih</h4> <br>
                            <v-select
                            :items="items"
                            outlined
                            color="orange"
                            ></v-select>

                          <h4>Deskripsi</h4> <br>
                          <v-textarea
                            outlined
                            name="alamat"
                            color="orange"
                            ></v-textarea>
                      </v-card-text>
                      <div class="text-left mt-5 ms-3">
                        <v-btn color="#F48743" dark width="200px">Save</v-btn>
                      </div> <br>
                      <br>
                    </v-col>
            </v-card> <br>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
    data: () => ({
      items: ['Peter', 'Alan', 'VanXaiver', 'John', 'Steven'],
      timeStart: null,
      timeEnd: null,
      modal1: false,
      modal2: false,
    }),

    methods:{
        cek(){
            console.log("test1  :" + this.timeStart);
            console.log("test2  :" + this.timeEnd);
        }
    },
}
</script>
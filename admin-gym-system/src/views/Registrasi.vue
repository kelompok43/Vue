<template>
    <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                    <v-col cols="12" md="8">
                        <h3 class="text-left mt-4 blue--text">Tambahkan admin operasional baru</h3>
                      <v-card-text class="mt-5">
                        <!-- <h1
                          class="text-center display-2 orange--text text--accent-3"
                        >Fitness Gym</h1> -->
                        <v-form>
                            <h4>Nama Lengkap</h4> <br>
                          <v-text-field
                            label="Masukkan Nama Lengkap"
                            name="namalengkap"
                            type="text"
                            outlined
                            color="orange"
                            max-width="100px"
                          />
                            <h4>Tanggal Lahir</h4> <br>
                          <v-text-field
                            id="tanggallahir"
                            name="date"
                            type="date"
                            outlined
                            color="orange"
                          />
                          <h4>Jenis Kelamin</h4>
                          <v-radio-group
                            v-model="row"
                            row
                            >
                            <v-radio
                                label="Laki-laki"
                                value="radio-1"
                            ></v-radio>
                            
                            <v-radio
                                label="Perempuan"
                                value="radio-2"
                            ></v-radio>
                            </v-radio-group>

                          <h4>Alamat</h4> <br>
                          <v-textarea
                            outlined
                            name="alamat"
                            
                            ></v-textarea>
                          <h4>Role</h4> <br>
                            <v-select
                            :items="items"
                            outlined
                            color="orange"
                            ></v-select>
                        </v-form>
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
    </v-content>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      items: ['Admin Operasional', 'Member'],
    }),
}
</script>
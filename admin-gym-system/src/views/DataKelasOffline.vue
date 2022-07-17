<template>
  <v-container fluid>
    <div class="text-center d-flex justify-start mb-6">
      <div v-if="cekRole !== 'Admin Operasional'" class="my-2 mx-3">
        <v-btn
          width="300px"
          color="#F48743"
          dark
          @click="add('TambahKelasOffline')"
        >
          Tambahkan Kelas
        </v-btn>
      </div>
    </div>

    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">Tabel Kelas Offline</div>
          <v-spacer class="order-2 pa-2"></v-spacer>
          <div class="d-flex order-3 justify-end">
            <div class="d-flex align-center mb-6 mx-4">Search :</div>
            <v-text-field
              v-model="search"
              outlined
              single-line
              dense
              label="cari disini"
              append-icon="mdi-magnify"
              class="shrink"
            >
            </v-text-field>
          </div>
        </div>
        <div class="ma-5">
          <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="px-5 py-0"
          >
            <v-row>
              <v-col>
                <v-data-table
                  :headers="headers"
                  :items="kelasofflineFromStore"
                  :search="search"
                  hide-default-header
                  hide-default-footer
                  :page.sync="page"
                  @page-count="
                    pageCount = $event;
                    hitungPage($event);
                  "
                  :items-per-page="itemsPerPage"
                >
                  <template v-slot:header="{ props: { headers } }">
                    <thead class="MyHeader">
                      <tr>
                        <th
                          v-for="(h, index) in headers"
                          :class="h.class"
                          :key="index"
                        >
                          <span class="JudulHeader">{{ h.text }}</span>
                        </th>
                      </tr>
                    </thead>
                  </template>
                  <template
                    v-slot:[`item.description`]="{ item }"
                    max-width="100px"
                  >
                    <v-container id class="deskripsi">
                      {{ item.description }}
                    </v-container>
                  </template>

                  <template v-slot:top>
                    <v-dialog v-model="dialogDelete" presistent width="800">
                      <v-card height="250px">
                        <v-card-title class="judul"
                          ><strong> KONFIRMASI </strong></v-card-title
                        ><br /><br />
                        <v-card-text class="desc"
                          >Apakah yakin untuk menghapus data ini?</v-card-text
                        >
                        <v-card-actions class="justify-center">
                          <br /><br /><br />

                          <v-btn
                            class="btnbatal"
                            width="150px"
                            color="error"
                            @click="closeDelete"
                          >
                            Batal
                          </v-btn>

                          <v-btn
                            class="btnya"
                            width="150px"
                            color="success"
                            @click="deleteItemConfirm"
                          >
                            Ya
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </template>

                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                      class="mr-2"
                      color="#04BAED"
                      dark
                      width="45%"
                      height="26px"
                      @click="editItem(item)"
                    >
                      Edit
                    </v-btn>

                    <v-btn
                      color="#FE8E93"
                      dark
                      width="45%"
                      height="26px"
                      @click="deleteItem(item)"
                    >
                      Hapus
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-sheet>
          <v-row>
            <v-col>
              <div class="d-flex justify-end mt-4">
                <v-sheet class="pa-5" :rounded="'lg'">
                  <template>
                    <div>
                      <v-pagination
                        class="halaman"
                        color="#F48743"
                        v-model="page"
                        total-visible
                        :length="totalPage"
                      ></v-pagination>
                    </div>
                  </template>
                </v-sheet>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data() {
    return {
      totalPage: null,
      search: "",
      dialogDelete: false,
      selectedItemIndex: -1,
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      headers: [
        {
          text: "No",
          value: "number",
          align: "start",
          filterable: false,
        },
        { text: "Nama Kelas", value: "name" },
        {
          text: "Deskripsi",
          value: "description",
          filterable: false,
        },
        { text: "Nama Pelatih", value: "Trainer" },
        { text: "Lokasi", value: "Location" },
        { text: "Tanggal", value: "Date" },
        { text: "Jam Mulai", value: "TimeStart" },
        { text: "Jam Selesai", value: "TimeEnd" },
        { text: "Kuota", value: "Quota" },
        { text: "Action", value: "actions" },
      ],
    };
  },
  methods: {
    add(path) {
      this.$router.push({ name: path });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.selectedItemIndex = -1;
      });
    },
    deleteItemConfirm() {
      this.kelasofflineFromStore.filter(this.selectedItemIndex, 1);
      this.closeDelete();
    },
    deleteItem(item) {
      this.selectedItemIndex = this.kelasofflineFromStore.indexOf(item);
      this.dialogDelete = true;
    },
    editItem(item) {
      this.selectedItemIndex = this.kelasofflineFromStore.indexOf(item);
      this.$store.dispatch("updateIndex", this.selectedItemIndex);
      this.$router.push({ name: "EditKelasOffline" });
    },
    hitungPage(totalitem) {
      this.totalPage = totalitem;
    },
  },
  computed: {
    kelasofflineFromStore(){
      return this.$store.state.kelasoffline
    },
    cekRole() {
      return this.$store.state.role;
    },
  },
};
</script>

<style>
.v-btn.tambahKelas {
  margin-top: 25px;
  margin-left: 21px;
}

tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
  background-color: rgb(250, 250, 250);
}

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

.MyHeader {
  background-color: #f6f6f6 !important;
}
.JudulHeader {
  font-weight: 900 !important;
}

.deskripsi {
  width: 300px;
  font-size: 14px;
}

.pagination {
  background-color: #ffffff;
  color: #f48743;
}

.theme--light.v-pagination .v-pagination__item:hover {
  background: #fee9cc !important;
}

.theme--light.v-pagination .v-pagination__item {
  color: #f48743;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: #ffffff !important;
}

.v-pagination__navigation {
  box-shadow: none;
}
.judul {
  font-size: 50px;
  justify-content: center !important;
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

<template>
  <v-container fluid>
    <div class="text-center d-flex justify-start mb-6">
      <div class="my-2 mx-3">
        <v-btn
          class="tambahKelas"
          width="300px"
          color="#F48743"
          dark
          @click="add('TambahKelasOnline')"
        >
          Tambahkan Kelas
        </v-btn>
      </div>
    </div>

    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3"
      >
        <div class="judul">Tabel Kelas Online</div>
        <div class="d-flex justify-end">
          <div class="d-flex align-center mb-6 mx-4">show</div>
          <v-text-field
            v-model="search"
            outlined
            single-line
            label="cari disini"
            append-icon="mdi-magnify"
            class="shrink"
          >
          </v-text-field>
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
                  :items="kelasonlineFromStore"
                  :search="search"
                  hide-default-footer
                  :page.sync="page"
                  @page-count="pageCount = $event"
                  :items-per-page="itemsPerPage"
                  hide-default-header
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
                    <v-dialog v-model="dialogDelete" max-width="400px">
                      <v-card>
                        <v-card-title class="text-h5"
                          >Yakin ingin menghapus data ini?</v-card-title
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" text @click="closeDelete"
                            >Cancel</v-btn
                          >
                          <v-btn color="primary" text @click="deleteItemConfirm"
                            >OK</v-btn
                          >
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </template>

                  <template v-slot:[`item2.no`]="{ item2 }">
                    <v-text-field> {{item2}} </v-text-field>
                  </template>

                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                      class="mr-2"
                      color="#04BAED"
                      dark
                      width="90px"
                      height="26px"
                    >
                      Edit
                    </v-btn>
                    <v-btn
                      color="#FE8E93"
                      dark
                      width="90px"
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
                <v-sheet color="#FEE9CC" class="pa-5" :rounded="'lg'">
                  <template>
                    <div>
                      <v-pagination
                        color="#F48743"
                        v-model="page"
                        previous-aria-label="Prev"
                        next-aria-label="Next"
                        wrapper-aria-label
                        total-visible
                        :length="6"
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
          sortable: false,
        },
        { text: "Nama Kelas", value: "name" },
        {
          text: "Deskripsi",
          value: "description",
          sortable: false,
        },
        { text: "Nama Pelatih", value: "Trainer" },
        { text: "Tanggal", value: "Date" },
        { text: "Jam Mulai", value: "TimeStart" },
        { text: "Jam Selesai", value: "TimeEnd" },
        { text: "Rating", value: "Rating" },
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
      this.kelasonlineFromStore.splice(this.selectedItemIndex, 1);
      this.closeDelete();
    },
    deleteItem(item) {
      this.selectedItemIndex = this.kelasonlineFromStore.indexOf(item);
      this.dialogDelete = true;
    },
  },
  computed:{
    kelasonlineFromStore(){
      return this.$store.state.kelasonline;
    }
  },
};
</script>

<style scoped>
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

.v-data-table-header {
  background-color: rgba(182, 183, 187);
  color: white;
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

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  padding: 0 16px;
  transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  color: #88898a;
}

.MyHeader {
  background-color: #f6f6f6 !important;
}
.JudulHeader {
  font-weight: 900 !important;
}
.pagination {
  background-color: #fee9cc;
  color: #f48743;
}
.deskripsi {
  width: 300px;
  font-size: 14px;
}
</style>

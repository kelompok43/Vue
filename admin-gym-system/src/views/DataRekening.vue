<template>
  <v-container fluid>
    <div class="text-center d-flex justify-start mb-6">
      <div class="my-2 mx-3">
        <v-btn
          width="300px"
          color="#F48743"
          dark
          @click="add('TambahRekening')"
        >
          Tambahkan Rekening
        </v-btn>
      </div>
    </div>
    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="judul">Tabel Data Rekening</div>
        <div class="d-flex justify-end">
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
        <div>
          <v-row>
            <v-col>
              <v-data-table
                :headers="headers"
                :items="identity"
                :search="search"
                hide-default-footer
                class="elevation-1"
                :page.sync="page"
                @page-count="pageCount = $event"
                :items-per-page="itemsPerPage"
              >
                <template v-slot:top>
                  <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.no"
                                label="No :"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.namaBank"
                                label="Nama Bank :"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.nomorRekening"
                                label="Nomor Rekening :"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.namaPemilik"
                                label="Nama Pemilik :"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                          Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save">
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialogDelete" max-width="400px">
                    <v-card>
                      <v-card-title class="text-h6">Konfirmasi</v-card-title>
                      <v-card-text class="text-center"
                        >Apakah anda yakin untuk menghapus data
                        ini?</v-card-text
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn depressed color="error" text @click="closeDelete"
                          >Batal</v-btn
                        >
                        <v-btn
                          depressed
                          color="success"
                          text
                          @click="deleteItemConfirm"
                          >Ya</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <div class="d-flex">
                    <v-btn
                      class="mr-2"
                      color="#04BAED"
                      dark
                      width="90px"
                      height="26px"
                      @click="editItem(item)"
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
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="d-flex justify-end mt-4">
                <v-sheet
                  :color="`#FEE9CC ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class="pa-5"
                >
                  <template>
                    <div class="text-center">
                      <v-pagination
                        v-model="page"
                        :length="6"
                        color="#F48743"
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
  setup() {},
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data() {
    return {
      search: "",
      dialogDelete: false,
      dialog: false,
      selectedItemIndex: -1,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "No", value: "no" },
        { text: "Nama Bank", value: "namaBank" },
        { text: "Nomor Rekening", value: "nomorRekening" },
        { text: "Nama Pemilik", value: "namaPemilik" },
        { text: "Action", value: "actions" },
      ],
      identity: [],
      editedItem: {
        no: 0,
        namaBank: "",
        nomorRekening: 0,
        namaPemilik: "",
      },
      defaultItem: {
        no: 0,
        namaBank: "",
        nomorRekening: 0,
        namaPemilik: "",
      },
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    add(path) {
      this.$router.push({ name: path });
    },
    initialize() {
      this.identity = [
        {
          no: 1,
          namaBank: "BNI(Bank Negara Indonesia)",
          nomorRekening: "1112233344567890",
          namaPemilik: "ulil",
        },
        {
          no: 2,
          namaBank: "BRI(Bank Rakyat Indonesia)",
          nomorRekening: "11122333445678000",
          namaPemilik: "ulil",
        },
        {
          no: 3,
          namaBank: "BCA(Bank Central Asia)",
          nomorRekening: "111223334456789987",
          namaPemilik: "ulil",
        },
        {
          no: 4,
          namaBank: "BSI(Bank Syariah Indonesia)",
          nomorRekening: "22222233344567890",
          namaPemilik: "ulil",
        },
        {
          no: 5,
          namaBank: "Mandiri",
          nomorRekening: "3111233344567890",
          namaPemilik: "ulil",
        },
      ];
    },
    deleteItem(item) {
      this.selectedItemIndex = this.identity.indexOf(item);
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.selectedItemIndex = -1;
      });
    },
    deleteItemConfirm() {
      this.identity.splice(this.selectedItemIndex, 1);
      this.closeDelete();
    },
    editItem(item) {
      this.selectedItemIndex = this.identity.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.selectedItemIndex = -1;
      });
    },
    save() {
      if (this.selectedItemIndex > -1) {
        Object.assign(this.identity[this.selectedItemIndex], this.editedItem);
      } else {
        this.identity.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
tbody tr:nth-of-type(even) {
  background-color: rgb(250, 250, 250);
}
tbody tr:nth-of-type(odd) {
  background-color: rgb(255, 255, 255);
}
.v-data-table-header {
  background-color: rgba(245, 245, 245);
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
</style>

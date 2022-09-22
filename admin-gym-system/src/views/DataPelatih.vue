<template>
  <v-container fluid>
    <div class="text-center d-flex justify-start mb-6">
      <div v-if="cekRole !== 'Admin Operasional'" class="my-2 mx-3">
        <v-btn
          class="tambahPelatih"
          width="300px"
          color="#F48743"
          dark
          @click="add('TambahPelatih')"
        >
          Tambahkan Pelatih
        </v-btn>
      </div>
    </div>

    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">Tabel Laporan Data Pelatih</div>
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
                  :items="identity"
                  :search="search"
                  hide-default-footer
                  hide-default-header
                  class="elevation-1"
                  :page.sync="page"
                  @page-count="
                    pageCount = $event;
                    hitungPage($event);
                  "
                  :items-per-page="itemsPerPage"
                >
                  <template v-slot:top>
                    <v-dialog v-model="dialog" max-width="1200px">
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
                                  v-model="editedItem.bidangKeahlian"
                                  label="Bidang Keahlian :"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Nama :"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.email"
                                  label="Email :"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.phoneNumber"
                                  label="Phone Number :"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.alamat"
                                  label="Alamat :"
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.jenisKelamin"
                                  label="Jenis Kelamin :"
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

                  <template v-slot:[`item.actions`]="{ item }">
                    <div class="d-flex">
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
                    </div>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-sheet>
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
                        :length="totalPage"
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
      totalPage: null,
      search: "",
      dialogDelete: false,
      dialog: false,
      selectedItemIndex: -1,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "No", value: "no" },
        { text: "Bidang Keahlian", value: "bidangKeahlian" },
        { text: "Nama", value: "name" },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Alamat", value: "alamat" },
        { text: "Jenis Kelamin", value: "jenisKelamin" },
        { text: "Action", value: "actions" },
      ],
      identity: [],
      editedItem: {
        no: 0,
        bidangKeahlian: "",
        name: "",
        email: "",
        phoneNumber: 0,
        alamat: "",
        jenisKelamin: "",
      },
      defaultItem: {
        no: 0,
        bidangKeahlian: "",
        name: "",
        email: "",
        phoneNumber: 0,
        alamat: "",
        jenisKelamin: "",
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
          bidangKeahlian: "Cycling",
          name: "Peter",
          email: "jackson.graham@example.com",
          phoneNumber: "(252) 555-0126",
          alamat: "775 Rolling Green Rd.",
          jenisKelamin: "Female",
        },
        {
          no: 2,
          bidangKeahlian: "Cycling",
          name: "Jacob Jones",
          email: "nevaeh.simmons@example.com",
          phoneNumber: "(684) 555-0102",
          alamat: "7529 E. Pecan St.",
          jenisKelamin: "Female",
        },
        {
          no: 3,
          bidangKeahlian: "Cycling",
          name: "Eleanor Pena",
          email: "kenzi.lawson@example.com",
          phoneNumber: "(629) 555-0129",
          alamat: "8558 Green Rd.",
          jenisKelamin: "Female",
        },
        {
          no: 4,
          bidangKeahlian: "Body & Mind",
          name: "Floyd Miles",
          email: "tim.jennings@example.com",
          phoneNumber: "(205) 555-0100",
          alamat: "8558 Green Rd.",
          jenisKelamin: "Female",
        },
        {
          no: 5,
          bidangKeahlian: "Body & Mind",
          name: "deanna",
          email: "deanna.curtis@example.com",
          phoneNumber: "(907) 555-0101",
          alamat: "775 Rolling Green Rd.",
          jenisKelamin: "Female",
        },
        {
          no: 6,
          bidangKeahlian: "Body & Mind",
          name: "Marvin McKinney",
          email: "nathan.roberts@example.com",
          phoneNumber: "(603) 555-0123",
          alamat: "3890 Poplar Dr.",
          jenisKelamin: "male",
        },
        {
          no: 7,
          bidangKeahlian: "Cardio",
          name: "Darrell Steward",
          email: "debra.holt@example.com",
          phoneNumber: "(307) 555-0133",
          alamat: "8080 Railroad St.",
          jenisKelamin: "Female",
        },
        {
          no: 8,
          bidangKeahlian: "Cardio",
          name: "Jerome Bell",
          email: "bill.sanders@example.com",
          phoneNumber: "(319) 555-0115",
          alamat: "7529 E. Pecan St.",
          jenisKelamin: "male",
        },
        {
          no: 9,
          bidangKeahlian: "Strenght and Condition",
          name: "Darrell Steward",
          email: "debra.holt@example.com",
          phoneNumber: "(704) 555-0127",
          alamat: "8080 Railroad St.",
          jenisKelamin: "Female",
        },
        {
          no: 10,
          bidangKeahlian: "Strenght and Condition",
          name: "Jerome Bell",
          email: "bill.sanders@example.com",
          phoneNumber: "(225) 555-0118",
          alamat: "3605 Parker Rd.",
          jenisKelamin: "male",
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
    hitungPage(totalitem) {
      this.totalPage = totalitem;
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
  computed: {
    cekRole() {
      return this.$store.state.role;
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
.judul {
  align-items: center;
  display: block;
  color: #026daa;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23.4539px !important;
  line-height: 140%;
  line-height: 21px;
  letter-spacing: 0.015em;
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

<template>
  <v-container fluid>
    <div class="text-center d-flex justify-start mb-6">
      <div class="my-2 mx-3">
        <v-btn width="300px" color="#F48743" dark @click="add('Registrasi')">
          Tambahkan Admin
        </v-btn>
      </div>
    </div>
    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">Tabel Data Admin</div>
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
                  :items="admins"
                  :search="search"
                  hide-default-footer
                  :page.sync="page"
                  @page-count="
                    pageCount = $event;
                    hitungPage($event);
                  "
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
                            @click="deleteItemConfirm()"
                          >
                            Ya
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </template>

                  <template v-slot:[`item.no`]="{ item }">
                    {{ admins.indexOf(item) + 1 }}
                  </template>
  
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                      class="mr-2"
                      color="#04BAED"
                      dark
                      width="45%"
                      height="26px"
                    >
                      Edit
                    </v-btn>
                    <v-btn
                      color="#FE8E93"
                      dark
                      width="45%"
                      height="26px"
                      @click="deleteItem(item.id, item)"
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
                <v-sheet color="#FFFFFF" class="pa-5" :rounded="'lg'">
                  <template>
                    <div>
                      <v-pagination
                        class="halaman"
                        color="#F48743"
                        v-model="page"
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
  name: "DataAdmin",
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
      admins: [],
      selectedID: -1,
      dialogDelete: false,
      selectedItemIndex: -1,
      pageCount: 0,
      itemsPerPage: 10,
      page: 1,
      headers: [
        {
          text: "No",
          value: "no",
          align: "start",
          sortable: false,
        },
        {
          text: "Nama",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Tanggal Lahir",
          value: "dob",
        },
        {
          text: "Alamat",
          value: "address",
        },
        {
          text: "Date Joined",
          value: "tanggaljoin",
        },
        {
          text: "Last Login",
          value: "lastlogin",
        },
        {
          text: "Staff",
          value: "staff",
        },
        {
          text: "Admin",
          value: "admin",
        },
        {
          text: "Action",
          value: "actions",
        },
      ],
    };
  },
  methods: {
    add(Registrasi) {
      this.$router.push({ name: Registrasi });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.selectedItemIndex = -1;
      });
    },
    async deleteItemConfirm() {
      this.$store.dispatch("deleteAdmin", this.selectedID);
      this.admins.splice(this.selectedItemIndex, 1);
      this.selectedID = -1;
      this.closeDelete();
    },
    async deleteItem(id, item) {
      this.selectedItemIndex = this.admins.indexOf(item);
      this.selectedID = id;
      this.dialogDelete = true;
    },
    async getAllAdmin() {
      const admin = await this.$store.dispatch("getAllAdmin");
      this.admins = admin;
    },
    hitungPage(totalitem) {
      this.totalPage = totalitem;
    },
  },
  computed: {
    dataadminFromStore() {
      return this.$store.state.dataadmin;
    },
  },
  mounted() {
    this.getAllAdmin();
  },
};
</script>

<style>
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

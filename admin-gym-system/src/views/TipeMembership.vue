<template>
  <v-container fluid>
    <div class="d-flex justify-start mb-6">
      <div v-if="cekRole !== 'Admin Operasional'" class="my-2 mx-3">
        <v-btn width="300px" color="#F48743" dark @click="add()">
          Tambahkan Membership
        </v-btn>
      </div>
    </div>
    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">Tabel Membership</div>
          <v-spacer class="order-2 pa-2"></v-spacer>
          <div class="d-flex order-3 justify-end">
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
                  :items="memberships"
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

                  <template v-slot:[`item.no`]="{ item }">
                    {{ memberships.indexOf(item) + 1 }}
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
                <v-sheet color="#FFFFFF" class="pa-5" :rounded="'lg'">
                  <template>
                    <div>
                      <v-pagination
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
  name: "DataMember",
  setup() {},
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  methods: {
    add() {
      this.$router.push({ name: "RegistrasiTipeMember" });
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
    deleteItem(item) {
      this.selectedItemIndex = this.identity.indexOf(item);
      this.dialogDelete = true;
    },

    async getAllMembership() {
      const membership = await this.$store.dispatch("getAllMembership");
      console.log("membership dari method: ", membership);
      this.memberships = membership;
    },

    hitungPage(totalitem) {
      this.totalPage = totalitem;
    },
  },
  data() {
    return {
      totalPage: null,
      search: "",
      page: 1,
      memberships: [],
      dialogDelete: false,
      selectedItemIndex: -1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "No",
          sortable: false,
          value: "no",
        },
        {
          text: "Tipe",
          value: "id",
        },
        {
          text: "Harga",
          value: "price",
        },
        {
          text: "Deskripsi",
          value: "category",
        },
        {
          text: "Action",
          value: "actions",
        },
      ],
      identity: [
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi:
            "Dapat mengikuti kelas online, dapat mengikuti kelas offline setiap hari",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
        {
          no: 1,
          tipe: "Member 1 Bulan",
          harga: "Rp. 200.000,00",
          deskripsi: "jackson.graham@example.com",
        },
      ],
    };
  },
  mounted() {
    this.getAllMembership();
  },
  computed: {
    cekRole() {
      return this.$store.state.role;
    },
  },
};
</script>

<style>
.v-main__wrap {
  background-color: #fee9cc;
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
</style>

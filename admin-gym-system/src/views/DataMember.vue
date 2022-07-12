<template>
  <v-container fluid>
    <div class="d-flex justify-start mb-6">
      <div class="my-2 mx-3">
        <v-btn
          class="mt-8 ms-4"
          width="300px"
          color="#F48743"
          dark
          @click="add()"
        >
          Tambahkan Member
        </v-btn>
      </div>
    </div>
    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">Tabel Data Member</div>
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
                  :items="users"
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
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                      class="mr-2"
                      color="#04BAED"
                      dark
                      width="93.5px"
                      height="26px"
                    >
                      Edit
                    </v-btn>
                    <v-btn
                      color="#FE8E93"
                      dark
                      width="93.5px"
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
      this.$router.push({ name: "RegistrasiMember" });
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
    async getAllUser() {
      const user = await this.$store.dispatch("getAllUser");
      console.log("user dari method: ", user);
      this.users = user;
    },
    hitungPage(totalitem) {
      this.totalPage = totalitem;
    },
  },
  data() {
    return {
      totalPage: null,
      itemUser: [],
      users: [],
      search: "",
      page: 1,
      dialogDelete: false,
      selectedItemIndex: -1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "No",
          value: "id",
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
          text: "Nomor Ponsel",
          value: "phone",
        },
        {
          text: "Alamat",
          value: "address",
        },
        {
          text: "Date Joined",
          value: "created_at",
        },
        {
          text: "Date Expired",
          value: "updated_at",
        },
        {
          text: "Status",
          value: "status",
        },
        {
          text: "Action",
          value: "actions",
        },
      ],
    };
  },
  mounted() {
    this.getAllUser();
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
</style>

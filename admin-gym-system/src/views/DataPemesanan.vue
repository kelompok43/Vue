<template>
  <v-container>
    <div>
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-4 ma-3 rounded-lg"
      >
        <div class="d-flex mb-6">
          <div class="judul order-1 pt-5 ms-5">
            Tabel Laporan Data Pemesanan
          </div>
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
                </v-data-table>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
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
      selectedItemIndex: -1,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "No", value: "no" },
        { text: "Nama Kelas", value: "namaKelas" },
        { text: "Deskripsi", value: "deskripsi" },
        { text: "Nama Pelatih", value: "namaPelatih" },
        { text: "Lokasi", value: "lokasi" },
        { text: "Tanggal", value: "tanggal" },
        { text: "Jam Mulai", value: "jamMulai" },
        { text: "Jam Selesai", value: "jamSelesai" },
        { text: "Kuota", value: "kuota" },
        { text: "Jumlah Pesan", value: "jumlahPesan" },
      ],
      identity: [
        {
          no: 1,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 2,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 3,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 4,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 5,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 6,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 7,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
        {
          no: 8,
          namaKelas: "Cycling",
          deskripsi:
            "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
          namaPelatih: "Jacob Jones",
          lokasi: "Ruangan 1",
          tanggal: "03/06/2022",
          jamMulai: "07.00 AM",
          jamSelesai: "08.00 AM",
          kuota: "30",
          jumlahPesan: "12",
        },
      ],
    };
  },
  methods: {
    hitungPage(totalitem) {
      this.totalPage = totalitem;
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

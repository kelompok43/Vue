<template>
    <v-container>
        <div>
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-4 ma-3 rounded-lg">
                <div class="judul"> Tabel Laporan Data Pemesanan </div>
                <div class="d-flex justify-end">
                    <div class="d-flex align-center mb-6 mx-4">Search :</div>
                    <v-text-field 
                    v-model="search"
                    outlined single-line 
                    dense
                    label="cari disini" 
                    append-icon="mdi-magnify" 
                    class="shrink"
                    >
                    </v-text-field>
                </div>
                <div >
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
                          </v-data-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <div class="d-flex justify-end mt-4">
                          <v-sheet :color="`#FEE9CC ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-5">
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
    setup() {
        
    },
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
    data () {
      return {
        search:'',
        dialogDelete: false,
        selectedItemIndex: -1,
        page: 1,
        pageCount: 0,
        itemsPerPage : 10,
        headers: [
        { text: 'No', value: 'no'},
        { text: 'Nama Kelas', value: 'namaKelas'},
        { text: 'Deskripsi', value: 'deskripsi'},
        { text: 'Nama Pelatih', value: 'namaPelatih'},
        { text: 'Lokasi', value: 'lokasi'},
        { text: 'Tanggal', value: 'tanggal'},
        { text: 'Jam Mulai', value: 'jamMulai'},
        { text: 'Jam Selesai', value: 'jamSelesai'},
        { text: 'Kuota', value: 'kuota'},
        { text: 'Jumlah Pesan', value: 'jumlahPesan'}
      ],
      identity: [
        {
          no: 1,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 2,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 3,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 4,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 5,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 6,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 7,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
        {
          no: 8,
          namaKelas: 'Cycling',
          deskripsi: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
          namaPelatih: 'Jacob Jones',
          lokasi: 'Ruangan 1',
          tanggal: '03/06/2022',
          jamMulai: '07.00 AM', 
          jamSelesai: '08.00 AM',
          kuota: '30',
          jumlahPesan: '12',
        },
      ]
      }
    },
  }
</script>

<style>
  tbody tr:nth-of-type(even) {
    background-color: rgb(250, 250, 250);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgb(255 ,255, 255);
  }

  .v-data-table-header {
    background-color: rgba(245, 245, 245);
    color: white;
  }

  .judul {
    align-items: center;
    display: block;
    color: #026DAA;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.0125em;
    line-height: 21px;
    word-break: break-all;
  }
</style>
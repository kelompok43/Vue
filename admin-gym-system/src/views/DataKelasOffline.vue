<template>
    <v-container fluid>
        <div class="text-center d-flex justify-start mb-6">
            <div class="my-2 mx-3">
                <v-btn
                    class="tambahKelas"
                    width="300px"
                    color="#F48743"
                    dark
                    @click="add('TambahKelas')"
                    >
                    Tambahkan Kelas
                </v-btn>
            </div>
        </div>

        <div>
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-4 ma-3">
                <div class="judul"> Tabel data pelatih </div>
                <div class="d-flex justify-end">
                    <div class="d-flex align-center mb-6 mx-4">show</div>
                    <v-text-field 
                    v-model="search"
                    outlined single-line 
                    label="cari disini" 
                    append-icon="mdi-magnify" 
                    class="shrink"
                    >
                    </v-text-field>
                </div>
                <div class="ma-5">
                    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-5 py-0">
                      <v-row>
                        <v-col>
                          <v-data-table
                              :headers="headers"
                              :items="kelasoffline"
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
                                  <th v-for="(h,index) in headers" :class="h.class" :key="index">
                                    <span class="JudulHeader">{{h.text}}</span>
                                  </th>
                                </tr>
                              </thead>
                          </template>
                          <template v-slot:[`item.description`]="{ item }" max-width="100px">
                            <v-textarea
                              rows="4"
                              hide-details
                              max-height="200px"
                              readonly
                              no-resize
                              
                              color="#000000"
                              :value="item.description"
                            ></v-textarea>
                          </template>
                        
                            <template v-slot:top>
                              <v-dialog v-model="dialogDelete" max-width="400px">
                                <v-card>
                                  <v-card-title class="text-h5">Yakin ingin menghapus data ini?</v-card-title>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
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
                                    width= "93.5px"
                                    height= "26px"
                                  >
                                      Edit
                                  </v-btn>

                              <v-btn
                                  color="#FE8E93"
                                  dark
                                  width= "93.5px"
                                  height= "26px"
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
    data () {
      return {
        search: '',
        dialogDelete: false,
        selectedItemIndex: -1,
        page: 1,
        pageCount: 0,
        itemsPerPage : 5,
        headers: [
          {
            text: 'No', 
            value: 'number',
            align: 'start',
            filterable: false,
          },
          { text: 'Nama Kelas', value: 'name' },
          { 
            text: 'Deskripsi', 
            value: 'description',
            filterable: false,
          },
          { text: 'Nama Pelatih', value: 'Trainer' },
          { text: 'Lokasi', value: 'Location' },
          { text: 'Tanggal', value: 'Date' },
          { text: 'Jam Mulai', value: 'TimeStart' },
          { text: 'Jam Selesai', value: 'TimeEnd' },
          { text: 'Kuota', value: 'Quota' },
          { text: 'Action', value: 'actions' },
        ],
        kelasoffline: [
          {
            number: 1,
            name: 'Cycling',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Ulil',
            Location: 'Ruangan 1',
            Date: '03/06/2022',
            TimeStart: '07.00 AM',
            TimeEnd: '09.00 AM',
            Quota: 30,
          },
          {
            number: 2,
            name: 'Cycling',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Vidi',
            Location: 'Ruangan 2',
            Date: '04/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '11.00 AM',
            Quota: 30,
          },
          {
            number: 3,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Vidi',
            Location: 'Ruangan 2',
            Date: '04/06/2022',
            TimeStart: '08.00 PM',
            TimeEnd: '11.00 PM',
            Quota: 30,
          },
          {
            number: 4,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 5,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 6,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 7,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 8,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 9,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
          {
            number: 10,
            name: 'Mind & Body',
            description: 'Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym',
            Trainer: 'Alif',
            Location: 'Ruangan 3',
            Date: '05/06/2022',
            TimeStart: '08.00 AM',
            TimeEnd: '011.00 AM',
            Quota: 30,
          },
        ],
      }
    },
    methods :{
      add(path){
        this.$router.push({name: path})
      },
      closeDelete(){
        this.dialogDelete = false
        this.$nextTick(() => {
          this.selectedItemIndex = -1
        })
      },
      deleteItemConfirm(){
        this.identity.splice(this.selectedItemIndex, 1)
        this.closeDelete()
      },
      deleteItem(item){
        this.selectedItemIndex = this.identity.indexOf(item)
        this.dialogDelete = true
      }
  },
}
</script>

<style scoped>
.v-btn.tambahKelas{
  margin-top: 25px;
  margin-left: 21px;
}

  tbody tr:nth-of-type(even) {
    background-color: rgba(236, 237, 237);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgb(250 ,250, 250);
  }

  .v-data-table-header {
    background-color: rgba(182, 183, 187);
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

  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td{
    padding: 0 16px;
    transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    color: #88898A;
  }

  .MyHeader {
    background-color: #F6F6F6 !important;
  }
  .JudulHeader{
    
    font-weight: 900 !important;
  }
  .pagination {
    background-color: #FEE9CC;
    color: #F48743;
  }

</style>
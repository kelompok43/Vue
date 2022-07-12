<template>
    <v-container>
        <div class="text-center d-flex justify-start mb-6">
            <div class="my-2 mx-3">
                <v-btn
                    width="300px"
                    color="#F48743"
                    dark
                    @click="add('TambahBerita')"
                    >
                    Tambahkan Berita
                </v-btn>
            </div>
        </div>
        <div>
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-4 ma-3 rounded-lg">
                <div class="judul"> Tabel Laporan Berita </div>
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
                                <v-dialog v-model="dialog" max-width="1200px">
                                  <v-card>
                                    <v-card-text>
                                            <v-container>
                                              <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.no"
                                                    label="No :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.kategoryBerita"
                                                    label="Kategori Berita :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.judulBerita"
                                                    label="Judul Berita :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.author"
                                                    label="Author :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.tanggal"
                                                    label="Tanggal :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.like"
                                                    label="Like :"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    sm="6"
                                                    md="4"
                                                >
                                                    <v-text-field
                                                    v-model="editedItem.readers"
                                                    label="Readers :"
                                                    ></v-text-field>
                                                </v-col>
                                              </v-row>
                                            </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                               @click="close"
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                               @click="save"
                                            >
                                                Save
                                            </v-btn>
                                    </v-card-actions>
                                  </v-card>
                              </v-dialog>

                              <v-dialog v-model="dialogDelete" max-width="400px">
                                <v-card>
                                  <v-card-title class="text-h6">Konfirmasi</v-card-title>
                                  <v-card-text class="text-center">Apakah anda yakin untuk menghapus data ini?</v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn depressed color="error" text @click="closeDelete">Batal</v-btn>
                                    <v-btn depressed color="success" text @click="deleteItemConfirm">Ya</v-btn>
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
                                    width= "90px"
                                    height= "26px"
                                    @click="editItem(item)"
                                  >
                                      Edit
                                  </v-btn>

                              <v-btn
                                  color="#FE8E93"
                                  dark
                                  width= "90px"
                                  height= "26px"
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
        dialog: false,
        selectedItemIndex: -1,
        page: 1,
        pageCount: 0,
        itemsPerPage : 10,
        headers: [
        { text: 'No', value: 'no'},
        { text: 'Kategori Berita', value: 'kategoryBerita'},
        { text: 'Judul Berita', value: 'judulBerita'},
        { text: 'Author', value: 'author'},
        { text: 'Tanggal', value: 'tanggal'},
        { text: 'Like', value: 'like'},
        { text: 'Readers', value: 'readers'},
        { text: 'Action', value: 'actions'}
        ],
        identity: [],
        editedItem: {
          no: 0,
          kategoryBerita: '',
          judulBerita: '',
          author: '',
          tanggal: 0,
          like: '',
          readers: '',
        },
        defaultItem: {
          no: 0,
          kategoryBerita: '',
          judulBerita: '',
          author: '',
          tanggal: 0,
          like: '',
          readers: '',
        },
      }
    },

    created () {
    this.initialize()
    },


    methods: {
      add(path){
        this.$router.push({name: path})
      },

      initialize(){
        this.identity=[
        {
          no: 1,
          kategoryBerita: 'Fitness Gym',
          judulBerita: 'Mengenal  kelas Virtual Studio di “Fitness Gym”',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: '100',
          readers: '1500',
        },
        {
          no: 2,
          kategoryBerita: 'Fitness Gym',
          judulBerita: 'Maksimalkan Latihan di Gym Favoritmu...',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: 'Food',
          readers: 'Food',
        },
        {
          no: 3,
          kategoryBerita: 'Pola Latihan Gym',
          judulBerita: 'Mengenal  kelas Virtual Studio di “Fitness Gym”',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: '100',
          readers: '1500',
        },
        {
          no: 4,
          kategoryBerita: 'Pola Latihan Gym',
          judulBerita: 'Maksimalkan Latihan di Gym Favoritmu...',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: 'Food',
          readers: 'Food',
        },
        {
          no: 5,
          kategoryBerita: 'Pola Makan Sehat',
          judulBerita: 'Mengenal  kelas Virtual Studio di “Fitness Gym”',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: '100',
          readers: '1500',
        },
        {
          no: 6,
          kategoryBerita: 'Pola Makan Sehat',
          judulBerita: 'Maksimalkan Latihan di Gym Favoritmu...',
          author: 'Syania Tan',
          tanggal: '03/06/2022',
          like: 'Food',
          readers: 'Food',
        },
      ]
      },

      deleteItem(item){
        this.selectedItemIndex = this.identity.indexOf(item)
        this.dialogDelete = true
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

        editItem (item) {
        this.selectedItemIndex = this.identity.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
    
        close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.selectedItemIndex = -1
        })
        },

        save () {
            if (this.selectedItemIndex > -1) {
            Object.assign(this.identity[this.selectedItemIndex], this.editedItem)
            } else {
            this.identity.push(this.editedItem)
            }
            this.close()
        },
    }
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
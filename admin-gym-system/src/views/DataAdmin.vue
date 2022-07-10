<template>
    <v-container>
        <div class="text-center d-flex justify-start mb-6">
            <div class="my-2 mx-3">
            <v-btn
            class="mt-8 ms-4"
            width="300px"
            color="#F48743"
            dark
            @click="add('Registrasi')"
            >
            Tambahkan Admin
        </v-btn>
            </div>
        </div>
        <div>
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-4 ma-3">
                <div class="judul blue--text"> Tabel Data Admin </div>
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
                              :items="identity"
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
                            <v-container id
                              class="deskripsi"
                            > {{item.description}}
                            </v-container>
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
  name: "DataAdmin",
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
        pageCount: 0,
        itemsPerPage : 10,
        page: 1,
        headers: [
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Bidang Keahlian',
          align: 'left',
          filterable: false,
          value: 'bidangKeahlian'
        },
        {
          text: 'Nama',
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Phone Number',
          value: 'phoneNumber'
        },
        {
          text: 'Alamat',
          value: 'alamat'
        },
        {
          text: 'Jenis Kelamin',
          value: 'jenisKelamin'
        },
        {
          text: 'Action',
          value: 'actions'
        }
      ],
      identity: [
        {
          no: 1,
          bidangKeahlian: 'Cycling',
          name: 'Peter',
          email: 'jackson.graham@example.com',
          phoneNumber: '(252) 555-0126',
          alamat: '775 Rolling Green Rd.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 2,
          bidangKeahlian: 'Cycling',
          name: 'Jacob Jones',
          email: 'nevaeh.simmons@example.com',
          phoneNumber: '(684) 555-0102',
          alamat: '7529 E. Pecan St.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 3,
          bidangKeahlian: 'Cycling',
          name: 'Eleanor Pena',
          email: 'kenzi.lawson@example.com',
          phoneNumber: '(629) 555-0129',
          alamat: '8558 Green Rd.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 4,
          bidangKeahlian: 'Body & Mind',
          name: 'Floyd Miles',
          email: 'tim.jennings@example.com',
          phoneNumber: '(205) 555-0100',
          alamat: '8558 Green Rd.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 5,
          bidangKeahlian: 'Body & Mind',
          name: '6.0',
          email: 'deanna.curtis@example.com',
          phoneNumber: '(907) 555-0101',
          alamat: '775 Rolling Green Rd.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 6,
          bidangKeahlian: 'Body & Mind',
          name: 'Marvin McKinney',
          email: 'nathan.roberts@example.com',
          phoneNumber: '(603) 555-0123',
          alamat: '3890 Poplar Dr.',
          jenisKelamin: 'male',
          action: 'edit'
        },
        {
          no: 7,
          bidangKeahlian: 'Cardio',
          name: 'Darrell Steward',
          email: 'debra.holt@example.com',
          phoneNumber: '(307) 555-0133',
          alamat: '8080 Railroad St.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 8,
          bidangKeahlian: 'Cardio',
          name: 'Jerome Bell',
          email: 'bill.sanders@example.com',
          phoneNumber: '(319) 555-0115',
          alamat: '7529 E. Pecan St.',
          jenisKelamin: 'male',
          action: 'edit'
        },
        {
          no: 9,
          bidangKeahlian: 'Strengh and Condition',
          name: 'Darrell Steward',
          email: 'debra.holt@example.com',
          phoneNumber: '(704) 555-0127',
          alamat: '8080 Railroad St.',
          jenisKelamin: 'Female',
          action: 'edit'
        },
        {
          no: 10,
          bidangKeahlian: 'Strenght and Condition',
          name: 'Jerome Bell',
          email: 'bill.sanders@example.com',
          phoneNumber: '(225) 555-0118',
          alamat: '3605 Parker Rd.',
          jenisKelamin: 'male',
          action: 'edit'
        },
      ]
      }
    },
    methods :{
     add(Registrasi){
       this.$router.push({name: Registrasi})
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
     },
 },
  }
</script>

<style>
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
</style>

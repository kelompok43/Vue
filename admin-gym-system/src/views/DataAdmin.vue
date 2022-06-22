<template>
<v-app>
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
            <v-card>
            <v-sheet :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-4 ma-3">
                <div> Tabel data Admin </div>
                <div class="d-flex justify-end">
                    <div class="d-flex align-center mb-6 mx-4">show</div>
                    <v-text-field 
                    v-model="search"
                    outlined 
                    single-line 
                    label="cari disini" 
                    append-icon="mdi-magnify" 
                    class="shrink"></v-text-field>
                </div>
                <div class="ma-5">
                    <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-5">
                      <v-data-table
                          :headers="headers"
                          :items="identity"
                          :search="search"
                          :items-per-page="10"
                          hide-default-footer
                          class="elevation-1"
                      >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.no }}</td>
                            <td class="text-xs-right">{{ props.item.bidangKeahlian }}</td>
                            <td class="text-xs-right">{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.email }}</td>
                            <td class="text-xs-right">{{ props.item.phoneNumber }}</td>
                            <td class="text-xs-right">{{ props.item.alamat }}</td>
                            <td class="text-xs-right">{{ props.item.jenisKelamin }}</td>
                            <td class="text-xs-right">{{ props.item.action }}
                              <!-- <template>
                              <v-btn
                                class="ma-2"
                                color="secondary"  
                              >test</v-btn>
                              </template> -->
                            </td>
                        </template>
                      </v-data-table>
                      <div class="d-flex justify-end mt-4">
                        <v-sheet :color="`#FEE9CC ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-5">
                        <template>
                          <div class="text-center">
                            <v-pagination
                              v-model="page"
                              :length="6"
                            ></v-pagination>
                            </div>
                        </template>
                        </v-sheet>
                      </div>
                    </v-sheet>
                </div>
            </v-sheet>
            </v-card>
        </div>
    </v-container>
</v-app>
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
     methods :{
      add(Registrasi){
        this.$router.push({name: Registrasi})
    }
  },
    data () {
      return {
        search:'',
        page: 1,
        headers: [
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Bidang Keahlian',
          align: 'left',
          sortable: false,
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
          value: 'action'
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
          bidangKeahlian: 'Strenght and Condition',
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

<template>
    <v-container fluid>
        <v-btn
            class="tambahKelas"
            width="300px"
            color="#F48743"
            dark
            @click="add('TambahKelas')"
            >
            Tambahkan Kelas
        </v-btn>

        <v-card class="tabel">
          <v-card-title class="judul"> Tabel Kelas Offline </v-card-title>
          <v-card-subtitle>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-subtitle>
          <v-data-table
            :headers="headers"
            :items="kelasoffline"
            :search="search"
          ></v-data-table>
        </v-card>

    </v-container>
</template>

<script>
export default {
    data () {
      return {
        search: '',
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
          { text: 'Action', value: 'Action' },
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
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
            Action: 'Edit Hapus'
          },
        ],
      }
    },
    methods :{
      add(path){
        this.$router.push({name: path})
    }
  },
}
</script>

<style scoped>
.v-btn.tambahKelas{
  margin-top: 25px;
  margin-left: 21px;
}

.v-sheet.v-card.tabel{
  margin-top: 33px;
  margin-left: 21px;
}

.v-card__title[data-v-5b3e9aa0] {
    padding: 16px;
    color: blue;
    left: 0;
}
</style>
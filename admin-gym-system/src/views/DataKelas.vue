<template>
    <v-container fluid>
        <v-btn
            class="mt-8 ms-4"
            width="300px"
            color="#F48743"
            dark
            @click="add('TambahKelas')"
            >
            Tambahkan Kelas
        </v-btn>
    </v-container>
</template>

<script>
export default {
    setup() {
        
    },
    methods :{
      add(path){
        this.$router.push({name: path})
    }
  },
}
</script>
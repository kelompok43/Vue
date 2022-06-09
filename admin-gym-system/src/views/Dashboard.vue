<template>
    <v-container>
        <div
        class="d-flex justify-center mb-6 mt-7"
        >
            <v-spacer class="order-1 pa-2"></v-spacer>

            <div class="order-2 pa-2">
                <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">Jumlah User</v-card-title>
                        <v-card-subtitle>23</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="60">mdi-account-group</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="order-4 pa-2">
               <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">Jumlah Class</v-card-title>
                        <v-card-subtitle>7</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="45">mdi-dumbbell</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>

            <div class="order-6 pa-2">
                <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">Jumlah Feed</v-card-title>
                        <v-card-subtitle>17</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="45">mdi-newspaper-variant-outline</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>
            <v-spacer class="order-7 pa-2"></v-spacer>
        </div>
        <div
        class="d-flex justify-center mb-6 mt-7"
        >
            <v-spacer class="order-1 pa-2"></v-spacer>

            <div class="order-2 pa-2">
                <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">User Yang Login Hari Ini</v-card-title>
                        <v-card-subtitle>1</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="60">mdi-account-group</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="order-4 pa-2">
               <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">Jumlah Booking Class</v-card-title>
                        <v-card-subtitle>23</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="45">mdi-dumbbell</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>

            <div class="order-6 pa-2">
                <v-card
                    class="text-left mx-auto"
                    width="400"
                >
                    <v-img
                    class="text-left ml-auto"
                    height="95px"
                    >
                    <div
                    class="d-flex"
                    >
                    <div class="order-1  pl-2">
                        <v-card-title class="text-left">Jumlah Trainer</v-card-title>
                        <v-card-subtitle>10</v-card-subtitle>
                    </div>
                    <v-spacer class="order-2"></v-spacer>
                    <v-icon class="order-3 pr-5" size="45">mdi-account</v-icon>
                    </div>
                    </v-img>
                </v-card>
            </div>
            <v-spacer class="order-7 pa-2"></v-spacer>
        </div>
        <div
        class="d-flex justify-center mb-6"
        >
            <v-spacer class="order-1 pa-2"></v-spacer>

            <div class="grafik order-2 py-2">
                <v-card
                    class="mt-4"
                    width="629px"
                >
                <v-card-subtitle>Jumlah Registrasi User</v-card-subtitle>
                    <v-sheet
                    class="mx-auto"
                    color="white"
                    max-width="calc(100%)"
                    >
                    <ChartRegis/>
                    </v-sheet>
                </v-card>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="grafik order-4 py-2">
               <v-card
                    class="mt-4"
                    width="629px"
                >
                <v-card-subtitle>Laporan Book Class</v-card-subtitle>
                    <v-sheet
                    class="mx-auto"
                    color="white"
                    elevation="12"
                    max-width="calc(100%)"
                    >
                    <!-- <v-sparkline
                        fill
                        :labels="labels"
                        :value="value"
                        :gradient ="gradients"
                        color="#0291CB"
                        line-width="1"
                        padding="16"
                        :smooth="16"
                        auto-draw
                        stroke-linecap="round"
                    ></v-sparkline> -->
                    <ChartBook/>
                    </v-sheet>
                </v-card>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>
        </div>
        <div
        class="d-flex justify-center mb-6"
        >
            <v-spacer class="order-1 pa-2"></v-spacer>

            <div class="grafik order-2 pa-2">
                <v-card
                    class="mt-4"
                    width="629px"
                >
                <v-card-subtitle>Jenis Class</v-card-subtitle>
                    <v-sheet
                    class="mx-auto"
                    color="white"
                    max-width="calc(100%)"
                    >
                        <v-progress-circular class="chart"
                        :value="46"
                        :rotate="-270"
                        color="#806EF1"
                        size="208"
                        width="15"

                        >46%</v-progress-circular>
                    </v-sheet>
                    <div
                    class="d-flex justify-center mb-6"
                    >
                        <v-spacer class="order-1"></v-spacer>
                        <v-icon class="order-2 pr-2">mdi-circle</v-icon>
                        <h4 class="order-3 pr-6">Online</h4>
                        <v-icon class="order-4 pr-2" color="#806EF1">mdi-circle</v-icon>
                        <h4 class="order-5">Offline</h4>
                        <v-spacer class="order-6"></v-spacer>
                    </div>
                </v-card>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="grafik order-4 pa-2">
               <v-card
                    class="mt-4"
                    width="629px"
                >
                <v-card-subtitle>Kategori Class</v-card-subtitle>
                    <v-sheet
                    class="mx-auto"
                    color="white"
                    max-width="calc(100%)"
                    >
                    <v-progress-circular class="chart"
                        :value="64"
                        :rotate="-270"
                        color="#806EF1"
                        size="208"
                        width="15"

                        >64%
                    </v-progress-circular>
                    </v-sheet>

                    <div
                    class="d-flex justify-center mb-6"
                    >
                        <v-spacer class="order-1"></v-spacer>
                        <v-icon class="order-2 pr-2">mdi-circle</v-icon>
                        <h4 class="order-3 pr-6">Online</h4>
                        <v-icon class="order-4 pr-2" color="#806EF1">mdi-circle</v-icon>
                        <h4 class="order-5">Offline</h4>
                        <v-spacer class="order-6 pb-7"></v-spacer>
                    </div>
                </v-card>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>
        </div>
    </v-container>
</template>

<script>
import ChartRegis from "@/components/JumlahRegisChart.vue"
import ChartBook from "@/components/LaporanBookChart.vue"
const gradients = ["#0E9CFF", "#FFFFFF"];

export default {
    setup() {
        
    },
    components:{
        ChartRegis,
        ChartBook,
    },
    inject: {
      theme: {
        default: { isDark: false },
      },
    },

    data: () => ({
      labels: [
        'Mei',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
      ],
      value: [
        60,
        15,
        0,
        25,
        10,
      ],
      labels2: [
        'Mei',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
      ],
      value2: [
        50,
        70,
        23,
        40,
        65,
      ],
      gradients: gradients,
    }),
}
</script>

<style scoped>
.order-2 .v-image {
  background-image: url("../assets/frame.jpg");
}

.order-2 .v-card {
    border-radius: 8px;
}

.order-2 .v-card__title{
    color:#F48743;
    text-align: left;
    left: 0;
}
.order-2 .v-card__subtitle{
    color:black;
    font-size: 16px;
}

.order-2 .v-icon{
    color: #FEE9CC;
    padding-left: 1px;
}

.order-4 .v-image {
  background-image: url("../assets/frame.jpg");
}

.order-4 .v-card {
    border-radius: 8px;
}

.order-4 .v-card__title{
    color:#F48743;
    text-align: left;
    left: 0;
}

.order-4 .v-card__subtitle{
    color:black;
    font-size: 16px;
}

.order-4 .v-icon{
    color: #FEE9CC;
    padding-left: 1px;
}

.order-6 .v-image {
  background-image: url("../assets/frame.jpg");
}

.order-6 .v-card {
    border-radius: 8px;
}

.order-6 .v-card__title{
    color:#F48743;
    text-align: left;
    left: 0;
}

.order-6 .v-card__subtitle{
    color:black;
    font-size: 16px;
}

.order-6 .v-icon{
    color: #FEE9CC;
    padding-left: 1px;
}

.v-sheet--offset {
    top: -24px;
    position: relative;
  }

.grafik .v-card__subtitle{
    background-color: #CCFEFA;
    color: #0291CB !important;
    text-align: left;
    font-weight: bold;
}

.chart{
    transform: translateX(-50%);
    left:50%;
    margin-top: 26px;
    margin-bottom: 26px;
}
</style>
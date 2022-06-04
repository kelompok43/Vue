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

            <div class="order-2 pa-2">
                <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                >
                    <v-skeleton-loader
                    class="mx-auto"
                    width= "629px"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="order-4 pa-2">
               <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                >
                    <v-skeleton-loader
                    class="mx-auto"
                    width= "629px"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>
        </div>
        <div
        class="d-flex justify-center mb-6"
        >
            <v-spacer class="order-1 pa-2"></v-spacer>

            <div class="order-2 pa-2">
                <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                >
                    <v-skeleton-loader
                    class="mx-auto"
                    width= "629px"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </div>

            <v-spacer class="order-3 pa-2"></v-spacer>

            <div class="order-4 pa-2">
               <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                >
                    <v-skeleton-loader
                    class="mx-auto"
                    width= "629px"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </div>

            <v-spacer class="order-5 pa-2"></v-spacer>
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
</style>
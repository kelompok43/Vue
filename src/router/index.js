import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue"
import DataRekening from "@/components/DataRekening.vue"
import DataPelatih from "@/components/DataPelatih.vue"
import DataPemesanan from "@/components/DataPemesanan.vue"
import Berita from "@/components/Berita"
import TambahBerita from "@/components/TambahBerita.vue"
import TambahRekening from "@/components/TambahRekening.vue"
import TambahPelatih from "@/components/TambahPelatih.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/tambahberita",
        name: "TambahBerita",
        component: TambahBerita
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita
    },
    {
        path: "/datapemesanan",
        name: "DataPemesanan",
        component: DataPemesanan
    },
    {
        path: "/datarekening",
        name: "DataRekening",
        component: DataRekening,
    },
    {
        path: "/tambahrekening",
        name: "TambahRekening",
        component: TambahRekening,
    },
    {
        path: "/datapelatih",
        name: "DataPelatih",
        component: DataPelatih,
    },
    {
        path: "/tambahpelatih",
        name: "TambahPelatih",
        component: TambahPelatih,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue"
import DataKelas from "@/views/DataKelas.vue"
import DataAdmin from "@/views/DataAdmin.vue"
import DataMember from "@/views/DataMember.vue"
import DataPemesanan from "@/views/DataPemesanan.vue"
import DataPelatih from "@/views/DataPelatih.vue"
import Berita from "@/views/Berita.vue"
import JadwalLatihan from "@/views/JadwalLatihan.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/DataKelas",
        name: "Data Kelas",
        component: DataKelas,
    },
    {
        path: "/DataAdmin",
        name: "Data Admin",
        component: DataAdmin,
    },
    {
        path: "/DataMember",
        name: "Data Member",
        component: DataMember,
    },
    {
        path: "/DataPelatih",
        name: "Data Pelatih",
        component: DataPelatih,
    },
    {
        path: "/DataPemesanan",
        name: "Data Pemesanan",
        component: DataPemesanan,
    },
    {
        path: "/JadwalLatihan",
        name: "Jadwal Latihan",
        component: JadwalLatihan,
    },
    {
        path: "/Berita",
        name: "Berita",
        component: Berita,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

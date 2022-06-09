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
import Home from "../views/Home.vue";
import Registrasi from "../views/Registrasi.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/Dashboard",
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
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/registrasi",
        name: "Registrasi",
        component: Registrasi,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

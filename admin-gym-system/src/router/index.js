import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue"
import DataKelasOffline from "@/views/DataKelasOffline.vue"
import DataAdmin from "@/views/DataAdmin.vue"
import DataMember from "@/views/DataMember.vue"
import DataPemesanan from "@/views/DataPemesanan.vue"
import DataPelatih from "@/views/DataPelatih.vue"
import Berita from "@/views/Berita.vue"
import JadwalLatihan from "@/views/JadwalLatihan.vue"
import Login from "@/views/LoginView.vue";
import TambahKelasOffline from "../views/TambahKelasOffline.vue";
import TambahKelasOnline from "../views/TambahKelasOnline.vue";
import DataKelasOnline from "@/views/DataKelasOnline.vue";
import Registrasi from "@/views/Registrasi.vue";
import Navigasi from "@/components/Navigasi.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Navigasi,
        children:[{
            path: "/",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/DataKelasOffline",
            name: "Data Kelas Offline",
            component: DataKelasOffline,
        },
        {
            path: "/DataKelasOnline",
            name: "Data Kelas Online",
            component: DataKelasOnline,
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
            path: "/tambahKelasOffline",
            name: "TambahKelasOffline",
            component: TambahKelasOffline,
        },
        {
            path: "/tambahKelasOnline",
            name: "TambahKelasOnline",
            component: TambahKelasOnline,
        },
        ]
    },
    
    {
        path: "/registrasi",
        name: "Registrasi",
        component: Registrasi,
    },

    {
        path: "/Login",
        name: "Login",
        component: Login,
        children: [
        ]
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
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


router.beforeEach((to, from, next) =>{
    const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
    if(to.name !== "Login" && !isAuthenticated) next({ name: "Login"});
    if(to.name === "Login" && isAuthenticated) next({ name: "Dashboard"});
    else next();
})

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import DataKelasOffline from "@/views/DataKelasOffline.vue";
import DataAdmin from "@/views/DataAdmin.vue";
import DataMember from "@/views/DataMember.vue";
import DataPemesanan from "@/views/DataPemesanan.vue";
import DataPelatih from "@/views/DataPelatih.vue";
import Berita from "@/views/Berita.vue";
import Login from "@/views/LoginView.vue";
import TambahKelasOffline from "../views/TambahKelasOffline.vue";
import TambahKelasOnline from "../views/TambahKelasOnline.vue";
import DataKelasOnline from "@/views/DataKelasOnline.vue";
import Registrasi from "@/views/Registrasi.vue";
import Navigasi from "@/components/Navigasi.vue";
import TipeKelas from "@/views/TipeKelas.vue";
import DataRekening from "@/views/DataRekening.vue"
import RegistrasiMember from "@/views/RegistrasiMember.vue"
import TipeMembership from "@/views/TipeMembership.vue"
import TambahRekening from "@/views/TambahRekening.vue"
import TambahPelatih from "@/views/TambahPelatih.vue"
import TambahBerita from "@/views/TambahBerita.vue"
import TambahTipeKelas from "@/views/TambahTipeKelas.vue"
import EditKelasOnline from "@/components/EditKelasOnline.vue"
import RegistrasiTipeMember from "@/views/RegistrasiTipeMember.vue"
import EditKelasOffline from "@/components/EditKelasOffline.vue"
import EditTipeKelas from "@/components/EditTipeKelas.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Navigasi,
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/EditKelasOffline",
        name: "EditKelasOffline",
        component: EditKelasOffline,
      },
      {
        path: "/DataKelasOffline",
        name: "Data Kelas Offline",
        component: DataKelasOffline,
      },
      {
        path: "/EditKelasOnline",
        name: "EditKelasOnline",
        component: EditKelasOnline,
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
        path: "/Berita",
        name: "Berita",
        component: Berita,
      },
      {
        path: "/tambahBerita",
        name: "TambahBerita",
        component: TambahBerita,
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
      {
        path: "/TipeKelas",
        name: "TipeKelas",
        component: TipeKelas,
      },
      {
        path: "/EditTipeKelas",
        name: "EditTipeKelas",
        component: EditTipeKelas,
      },
      {
        path: "/tambahTipeKelas",
        name: "TambahTipeKelas",
        component: TambahTipeKelas,
      },
      {
        path: "/DataRekening",
        name: "DataRekening",
        component: DataRekening,
      },
      {
        path: "/RegistrasiMember",
        name: "RegistrasiMember",
        component: RegistrasiMember,
      },
      {
        path: "/RegistrasiTipeMember",
        name: "RegistrasiTipeMember",
        component: RegistrasiTipeMember,
      },
      {
        path: "/registrasi",
        name: "Registrasi",
        component: Registrasi,
      },
      {
        path: "/TipeMembership",
        name: "TipeMembership",
        component: TipeMembership,
      },
      {
        path: "/TambahRekening",
        name: "TambahRekening",
        component: TambahRekening,
      },
      {
        path: "/TambahPelatih",
        name: "TambahPelatih",
        component: TambahPelatih,
      },
    ],
  },

  {
    path: "/Login",
    name: "Login",
    component: Login,
    children: [],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  if (to.name === "Login" && isAuthenticated) next({ name: "Dashboard" });
  else next();
});

export default router;

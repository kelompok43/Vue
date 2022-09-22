import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["token", "tipekelas", "IndexDipilih", "role"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  state: {
    token: null,
    role: null,
    error: null,
    IndexDipilih: null,
    info: null,
    list: null,
    kelasonline: [
      {
        number: 1,
        name: "Cycling",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Ulil",
        Date: "03/06/2022",
        TimeStart: "07.00 AM",
        TimeEnd: "09.00 AM",
        Rating: "4/5",
      },
      {
        number: 2,
        name: "Cycling",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Vidi",
        Date: "04/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "11.00 AM",
        Rating: "4.5/5",
      },
      {
        number: 3,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Vidi",
        Date: "04/06/2022",
        TimeStart: "08.00 PM",
        TimeEnd: "11.00 PM",
        Rating: "3/5",
      },
      {
        number: 4,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "10.00 AM",
        Rating: "4/5",
      },
      {
        number: 5,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "9.00 AM",
        Rating: "4/5",
      },
      {
        number: 6,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "12.00 AM",
        Rating: "4/5",
      },
      {
        number: 7,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "12.00 AM",
        Rating: "4/5",
      },
      {
        number: 8,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "10.00 AM",
        Rating: "4/5",
      },
      {
        number: 9,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "10.00 AM",
        Rating: "4/5",
      },
      {
        number: 10,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "12.00 AM",
        Rating: "4/5",
      },
    ],
    kelasoffline: [
      {
        number: 1,
        name: "Cycling",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Ulil",
        Location: "Ruangan 1",
        Date: "03/06/2022",
        TimeStart: "07.00 AM",
        TimeEnd: "09.00 AM",
        Quota: 30,
      },
      {
        number: 2,
        name: "Cycling",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Vidi",
        Location: "Ruangan 2",
        Date: "04/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "11.00 AM",
        Quota: 30,
      },
      {
        number: 3,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Vidi",
        Location: "Ruangan 2",
        Date: "04/06/2022",
        TimeStart: "08.00 PM",
        TimeEnd: "11.00 PM",
        Quota: 30,
      },
      {
        number: 4,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "01.00 PM",
        Quota: 30,
      },
      {
        number: 5,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "02.00 PM",
        Quota: 30,
      },
      {
        number: 6,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "10.00 AM",
        Quota: 30,
      },
      {
        number: 7,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "9.00 AM",
        Quota: 30,
      },
      {
        number: 8,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "11.30 AM",
        Quota: 30,
      },
      {
        number: 9,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "12.00 AM",
        Quota: 30,
      },
      {
        number: 10,
        name: "Mind & Body",
        description:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
        Trainer: "Alif",
        Location: "Ruangan 3",
        Date: "05/06/2022",
        TimeStart: "08.00 AM",
        TimeEnd: "9.30 AM",
        Quota: 30,
      },
    ],
    tipekelas: [
      {
        no: 1,
        name: "Cycling",
        foto: "https://user-images.githubusercontent.com/77964982/178594801-3c963074-3aa7-4b95-ac43-a8b1f34f18fb.png",
        deskripsi:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
      },
      {
        no: 2,
        name: "Cycling",
        foto: "https://user-images.githubusercontent.com/77964982/178594801-3c963074-3aa7-4b95-ac43-a8b1f34f18fb.png",
        deskripsi:
          "Fill the burn of a 3-part spin workout and explore different terrains without even leaving the gym",
      },
      {
        no: 3,
        name: "Mind & Body ",
        foto: "https://user-images.githubusercontent.com/77964982/178720976-033551a1-907d-4e28-a2ee-48657b615296.png",
        deskripsi:
          "Find your center with a combination of Yoga, Tai Chi, and Pilates",
      },
      {
        no: 4,
        name: "Mind & Body ",
        foto: "https://user-images.githubusercontent.com/77964982/178720976-033551a1-907d-4e28-a2ee-48657b615296.png",
        deskripsi:
          "Find your center with a combination of Yoga, Tai Chi, and Pilates",
      },
      {
        no: 5,
        name: "Cardio",
        foto: "https://user-images.githubusercontent.com/77964982/178594801-3c963074-3aa7-4b95-ac43-a8b1f34f18fb.png",
        deskripsi:
          "Train like a warrior for an all over body workout that all leave you lean and toned",
      },
      {
        no: 6,
        name: "Cardio",
        foto: "https://user-images.githubusercontent.com/77964982/178720985-938a2ff9-ff26-44b6-9248-8b114363637d.png",
        deskripsi:
          "Train like a warrior for an all over body workout that all leave you lean and toned",
      },
      {
        no: 7,
        name: "Strength And Conditioning",
        foto: "https://user-images.githubusercontent.com/77964982/178720985-938a2ff9-ff26-44b6-9248-8b114363637d.png",
        deskripsi:
          "Sculp and shape your whole body using light barbell weights and high reps",
      },
      {
        no: 8,
        name: "Strength And Conditioning",
        foto: "https://user-images.githubusercontent.com/77964982/178720986-d8c9dc35-da4c-491c-8190-32c83025a560.png",
        deskripsi:
          "Sculp and shape your whole body using light barbell weights and high reps",
      },
      {
        no: 9,
        name: "Cardio",
        foto: "https://user-images.githubusercontent.com/77964982/178720986-d8c9dc35-da4c-491c-8190-32c83025a560.png",
        deskripsi:
          "Sculp and shape your whole body using light barbell weights and high reps",
      },
      {
        no: 10,
        name: "Strength And Conditioning",
        foto: "https://user-images.githubusercontent.com/77964982/178720986-d8c9dc35-da4c-491c-8190-32c83025a560.png",
        deskripsi:
          "Sculp and shape your whole body using light barbell weights and high reps",
      },
    ],
    dataadmin: [
      {
        number: 1,
        name: "Peter",
        email: "jackson.graham@example.com",
        tanggallahir: "05/06/2002",
        alamat: "775 Rolling Green Rd.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(252) 555-0126",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 2,
        name: "Jacob Jones",
        email: "nevaeh.simmons@example.com",
        tanggallahir: "05/06/2022",
        alamat: "7529 E. Pecan St.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(684) 555-0102",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 3,
        name: "Eleanor Pena",
        email: "kenzi.lawson@example.com",
        tanggallahir: "05/06/2022",
        alamat: "8558 Green Rd.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(629) 555-0129",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 4,
        name: "Floyd Miles",
        email: "tim.jennings@example.com",
        tanggallahir: "05/06/2022",
        alamat: "8558 Green Rd.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(205) 555-0100",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 5,
        name: "6.0",
        email: "deanna.curtis@example.com",
        tanggallahir: "05/06/2022",
        alamat: "775 Rolling Green Rd.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(907) 555-0101",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 6,
        name: "Marvin McKinney",
        email: "nathan.roberts@example.com",
        tanggallahir: "05/06/2022",
        alamat: "3890 Poplar Dr.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(603) 555-0123",
        jenisKelamin: "male",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 7,
        name: "Darrell Steward",
        email: "debra.holt@example.com",
        tanggallahir: "05/06/2022",
        alamat: "8080 Railroad St.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(307) 555-0133",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 8,
        name: "Jerome Bell",
        email: "bill.sanders@example.com",
        tanggallahir: "05/06/2022",
        alamat: "7529 E. Pecan St.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(319) 555-0115",
        jenisKelamin: "male",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 9,
        name: "Darrell Steward",
        email: "debra.holt@example.com",
        tanggallahir: "05/06/2022",
        alamat: "8080 Railroad St.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(704) 555-0127",
        jenisKelamin: "Female",
        action: "edit",
        staff: "False",
        admin: "True",
      },
      {
        number: 10,
        name: "Jerome Bell",
        email: "bill.sanders@example.com",
        tanggallahir: "05/06/2022",
        alamat: "3605 Parker Rd.",
        tanggaljoin: "05/06/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(225) 555-0118",
        action: "edit",
        staff: "False",
        admin: "True",
      },
    ],

  },
  mutations: {
    setToken(state, param) {
      state.token = param;
    },
    setRole(state, param) {
      state.role = param;
    },
    setList(state, param) {
      state.list = param;
    },
    setInfo(state, param) {
      state.info = param;
    },
    setIndex(state, payload) {
      state.IndexDipilih = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setKelasOnline(state, payload) {
      state.kelasonline.push({
        number: payload.number,
        name: payload.name,
        description: payload.description,
        Trainer: payload.Trainer,
        Date: payload.Date,
        TimeStart: payload.TimeStart,
        TimeEnd: payload.TimeEnd,
        Rating: payload.Rating,
      });
    },
    setKelasOffline(state, payload) {
      state.kelasoffline.push({
        number: payload.number,
        name: payload.name,
        description: payload.description,
        Trainer: payload.Trainer,
        Location: payload.Location,
        Date: payload.Date,
        TimeStart: payload.TimeStart,
        TimeEnd: payload.TimeEnd,
        Quota: payload.Quota,
      });
    },
    setTipeKelas(state, payload) {
      state.tipekelas.push({
        no: payload.number,
        name: payload.name,
        foto: payload.foto,
        deskripsi: payload.description,
      });
    },
    setDataAdmin(state, payload) {
      state.dataadmin.push({
        number: payload.number,
        name: payload.name,
        email: payload.emailAdmin,
        phoneNumber: payload.phoneNumber,
        tanggallahir: payload.tanggallahir,
        tanggaljoin: payload.tanggaljoin,
        alamat: payload.alamat,
        lastlogin: payload.lastlogin,
        staff: payload.staff,
        admin: payload.admin,
      });
    },
    editKelasOnline(state, payload) {
      //Object.assign(state.kelasonline[this.state.IndexDipilih], payload);
      state.kelasonline[state.IndexDipilih].name = payload.name;
      state.kelasonline[state.IndexDipilih].description = payload.description;
      state.kelasonline[state.IndexDipilih].Trainer = payload.Trainer;
      state.kelasonline[state.IndexDipilih].Date = payload.Date;
      state.kelasonline[state.IndexDipilih].TimeStart = payload.TimeStart;
      state.kelasonline[state.IndexDipilih].TimeEnd = payload.TimeEnd;
    },
    editKelasOffline(state, payload) {
      state.kelasoffline[state.IndexDipilih].name = payload.name;
      state.kelasoffline[state.IndexDipilih].description = payload.description;
      state.kelasoffline[state.IndexDipilih].Trainer = payload.Trainer;
      state.kelasoffline[state.IndexDipilih].Location = payload.Location;
      state.kelasoffline[state.IndexDipilih].Date = payload.Date;
      state.kelasoffline[state.IndexDipilih].TimeStart = payload.TimeStart;
      state.kelasoffline[state.IndexDipilih].TimeEnd = payload.TimeEnd;
      state.kelasoffline[state.IndexDipilih].Quota = payload.Quota;
    },
    editTipeKelas(state, payload) {
      state.tipekelas[state.IndexDipilih].name = payload.name;
      state.tipekelas[state.IndexDipilih].deskripsi = payload.description;
      state.tipekelas[state.IndexDipilih].foto = payload.foto;
    },
  },
  actions: {
    addKelasOnline(store, param) {
      store.commit("setKelasOnline", param);
    },
    addKelasOffline(store, param) {
      store.commit("setKelasOffline", param);
    },
    addTipeKelas(store, param) {
      store.commit("setTipeKelas", param);
    },
    addDataAdmin(store, param) {
      store.commit("setDataAdmin", param);
    },
    updateIndex(store, param) {
      store.commit("setIndex", param);
    },
    editKelasOnline(store, param) {
      store.commit("editKelasOnline", param);
    },
    editKelasOffline(store, param) {
      store.commit("editKelasOffline", param);
    },
    editTipeKelas(store, param) {
      store.commit("editTipeKelas", param);
    },
    login(store, credentials) {
      return axios
        .post(`https://api.gms.mirfanrafif.me/admin/login`, {
          email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          if (response.data.message === "success") {
            store.commit("setToken", response.data.token);
            store.commit("setRole", response.data.data.role);
            return response;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setInfo", "Email atau Password salah");
          store.commit("setError", error);
        });
    },
    getAllUser(store) {
      return axios
        .get(`https://api.gms.mirfanrafif.me/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          if (response.data.message === "success") {
            return response.data.data;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setError", error);
        });
    },
    getAllAdmin(store) {
      return axios
        .get(`https://api.gms.mirfanrafif.me/admin`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          if (response.data.message === "success") {
            store.commit("setList", response.data);
            return response.data.data;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setInfo", "Email atau Password salah");
          store.commit("setError", error);
        });
    },
    getAllMembership(store) {
      return axios
        .get(`https://api.gms.mirfanrafif.me/membership/category`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          if (response.data.message === "success") {
            return response.data.data;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setError", error);
        });
    },
    getAllPayment(store) {
      return axios
        .get(`https://api.gms.mirfanrafif.me/payment/method`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          if (response.data.message === "success") {
            return response.data.data;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setError", error);
        });
    },
    hapusMember(store, param) {
      return axios
        .delete(
          "https://api.gms.mirfanrafif.me/user/delete/" +
            param
        )
        .then(() => {
          store.dispatch("getAllUser");
        });
    },

    async deleteAdmin(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios
        .delete("https://api.gms.mirfanrafif.me/admin/" + id, config)
    },

    async addAdmin(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post("https://api.gms.mirfanrafif.me/admin/register", param, config)
    },
  },
  modules: {},
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    DataAdmin: [
      {
        no: 1,
        bidangKeahlian: "Cycling",
        name: "Peter",
        email: "jackson.graham@example.com",
        phoneNumber: "(252) 555-0126",
        alamat: "775 Rolling Green Rd.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 2,
        bidangKeahlian: "Cycling",
        name: "Jacob Jones",
        email: "nevaeh.simmons@example.com",
        phoneNumber: "(684) 555-0102",
        alamat: "7529 E. Pecan St.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 3,
        bidangKeahlian: "Cycling",
        name: "Eleanor Pena",
        email: "kenzi.lawson@example.com",
        phoneNumber: "(629) 555-0129",
        alamat: "8558 Green Rd.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 4,
        bidangKeahlian: "Body & Mind",
        name: "Floyd Miles",
        email: "tim.jennings@example.com",
        phoneNumber: "(205) 555-0100",
        alamat: "8558 Green Rd.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 5,
        bidangKeahlian: "Body & Mind",
        name: "6.0",
        email: "deanna.curtis@example.com",
        phoneNumber: "(907) 555-0101",
        alamat: "775 Rolling Green Rd.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 6,
        bidangKeahlian: "Body & Mind",
        name: "Marvin McKinney",
        email: "nathan.roberts@example.com",
        phoneNumber: "(603) 555-0123",
        alamat: "3890 Poplar Dr.",
        jenisKelamin: "male",
        action: "edit",
      },
      {
        no: 7,
        bidangKeahlian: "Cardio",
        name: "Darrell Steward",
        email: "debra.holt@example.com",
        phoneNumber: "(307) 555-0133",
        alamat: "8080 Railroad St.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 8,
        bidangKeahlian: "Cardio",
        name: "Jerome Bell",
        email: "bill.sanders@example.com",
        phoneNumber: "(319) 555-0115",
        alamat: "7529 E. Pecan St.",
        jenisKelamin: "male",
        action: "edit",
      },
      {
        no: 9,
        bidangKeahlian: "Strengh and Condition",
        name: "Darrell Steward",
        email: "debra.holt@example.com",
        phoneNumber: "(704) 555-0127",
        alamat: "8080 Railroad St.",
        jenisKelamin: "Female",
        action: "edit",
      },
      {
        no: 10,
        bidangKeahlian: "Strenght and Condition",
        name: "Jerome Bell",
        email: "bill.sanders@example.com",
        phoneNumber: "(225) 555-0118",
        alamat: "3605 Parker Rd.",
        jenisKelamin: "male",
        action: "edit",
      },
    ],
    datamember: [
      {
        number: 1,
        name: "Peter",
        email: "jackson.graham@example.com",
        tanggallahir: "05/06/2002",
        alamat: "775 Rolling Green Rd.",
        tanggaljoin: "05/06/2021",
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
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
        tanggalexpired: "05/07/2021",
        lastlogin: "Oct 13, 2021 at 08:09 pm",
        phoneNumber: "(225) 555-0118",
        action: "edit",
        statusMember: "Member"
      },
    ],
  },
  mutations: {
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
    setDataMember(state, payload) {
      state.datamember.push({
        number: payload.number,
        name: payload.name,
        emailMember: payload.email,
        phoneNumber: payload.phoneNumber,
        tanggallahir: payload.tanggallahir,
        tanggaljoin: payload.tanggaljoin,
        tanggalexpired: payload.tanggalexpired,
        alamat: payload.alamat,
        lastlogin: payload.lastlogin,
        statusMember: payload.statusMember,
      });
    },
  },
  actions: {
    addKelasOnline(store, param) {
      store.commit("setKelasOnline", param);
    },
    addDataMember(store, param) {
      store.commit("setDataMember", param);
    },
  },
  modules: {},
});

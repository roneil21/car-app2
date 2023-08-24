import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Car Page
    cars: JSON.parse(localStorage.getItem("cars") || '[]'),
    // cars: JSON.parse(localStorage.getItem("cars")),
    //Manufacturer Page
    manufacturers: JSON.parse(localStorage.getItem("manufacturers") || '[]'),
    // manufacturers: JSON.parse(localStorage.getItem("manufacturers")),
    //Color Page
    colors: JSON.parse(localStorage.getItem("colors") || '[]'),
    // colors: JSON.parse(localStorage.getItem("colors")),
    //Login Page
    adminAccess: {
      username: "admin",
      password: "admin",
    },
  },
  getters: {
    getColors: (state) => state.colors,
    getMfr: (state) => state.manufacturers,
    getCar: (state) => state.cars,
    getAccount: (state) => state.adminAccess,
  },

  mutations: {
    //Car Page
    ADD_CAR: (state, payload) => {
      const newCar = {
        carManufacturer: payload.newMfr,
        carColor: payload.newCarColor,
        id: payload.carId,
        editing: false,
      };
      state.cars.unshift(newCar);
    },
    EDIT_CAR: (state, payload) => {
      const item = state.cars.find((item) => item.id === payload);
      item.editing = true;
    },
    DONE_CAR: (state, payload) => {
      const item = state.cars.find((item) => item.id === payload);
      item.editing = false;
    },
    DELETE_CAR: (state, payload) => {
      const index = state.cars.findIndex((item) => item.id === payload);
      state.cars.splice(index, 1);
    },

    //CarColor Page
    ADD_COLOR: (state, payload) => {
      const newColor = {
        color: payload.newColor,
        id: payload.colorId,
        completed: false,
        editing: false,
      };
      state.colors.unshift(newColor);
    },
    DELETE_COLOR: (state, payload) => {
      const index = state.colors.findIndex((item) => item.id === payload);
      state.colors.splice(index, 1);
    },
    EDIT_COLOR: (state, payload) => {
      const item = state.colors.find((item) => item.id === payload);
      item.editing = true;
    },
    DONE_COLOR: (state, payload) => {
      const item = state.colors.find((item) => item.id === payload);
      item.editing = false;
    },

    //Manufaturer Page
    ADD_MFR: (state, payload) => {
      const newMfr = {
        manufacturer: payload.newManufacturer,
        id: payload.newId,
        completed: false,
        editing: false,
      };
      state.manufacturers.unshift(newMfr);
    },
    DELETE_MFR: (state, payload) => {
      const index = state.manufacturers.findIndex(
        (item) => item.id === payload
      );
      state.manufacturers.splice(index, 1);
    },
    EDIT_MFR: (state, payload) => {
      const item = state.manufacturers.find((item) => item.id === payload);
      item.editing = true;
    },
    DONE_EDIT: (state, payload) => {
      const item = state.manufacturers.find((item) => item.id === payload);
      item.editing = false;
    },
  },
  actions: {
    //Car Page
    addCar: (context, payload) => {
      context.commit("ADD_CAR", payload);
    },
    editCar: (context, payload) => {
      context.commit("EDIT_CAR", payload);
    },
    doneCar: (context, payload) => {
      context.commit("DONE_CAR", payload);
    },
    deleteCar: (context, payload) => {
      context.commit("DELETE_CAR", payload);
    },

    //Manufacturer Page
    addManufacturer: (context, payload) => {
      context.commit("ADD_MFR", payload);
    },
    deleteItem: (context, payload) => {
      context.commit("DELETE_MFR", payload);
    },
    editItem: (context, payload) => {
      context.commit("EDIT_MFR", payload);
    },
    doneEdit: (context, payload) => {
      context.commit("DONE_EDIT", payload);
    },

    //Color Page
    addColor: (context, payload) => {
      context.commit("ADD_COLOR", payload);
    },
    deleteColor: (context, payload) => {
      context.commit("DELETE_COLOR", payload);
    },
    editColor: (context, payload) => {
      context.commit("EDIT_COLOR", payload);
    },
    doneColor: (context, payload) => {
      context.commit("DONE_COLOR", payload);
    },
  },
  modules: {},
});

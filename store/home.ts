import { defineStore } from "pinia";

interface HomeState {
  homeBody: any[]; // массив любых значений
  homeMeta: Record<string, any>; // объект с любыми ключами и значениями
  loading: boolean; // булево значение
}

// define the store
export const useHomeStore = defineStore({
  // define unique id of the store
  id: "home",

  // initial state
  state: (): HomeState => ({
    homeBody: [],
    homeMeta: {},
    loading: false,
  }),

  // getters for computed values
  getters: {
    // // get the home page meta
    // getHomeMeta(): any {
    //   return this.home ? this.home.meta : {};
    // },
    //
    // // get the home page body
    // getHomeBody(): any[] {
    //   return this.home ? this.home.body : [];
    // },
  },

  // actions for changing the state
  actions: {
    setHomeBody(homeBody: any[]) {
      this.homeBody = homeBody;
    },

    setHomeMeta(homeMeta: Record<string, any>) {
      this.homeMeta = homeMeta;
    },

    // // fetch the home page data from the API
    // async fetchHome() {
    //   // set loading to true
    //   this.loading = true;
    //
    //   // make an API request using fetch or axios
    //   const response = (await $fetch("/api/home")) as any;
    //
    //   const data = await response.body[0].data.articles;
    //
    //   // set the home page data to the state
    //   this.home = data;
    //
    //   //  set loading to false
    //   this.loading = false;
    // },
  },
});

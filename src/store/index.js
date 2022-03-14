/* eslint-disable no-unused-vars */
import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		mode: "dark",
		cardHidden: true,
		errorState: false,
		userName: "",
		cardData: {},
	},
	mutations: {
		setUserQuerry: (state, payload) => {
			state.userName = payload;
		},

		fillUserCard(state, payload) {
			if (state.errorState == false) {
				state.cardData = payload;
				console.log("data fetched:", state.cardData);
				state.cardHidden = false;
			} else {
				state.errorState = true;
				state.cardData = [];
				return;
			}
		},
	},
	actions: {
		async getUserData({ commit, state }) {
			let options = {
				method: "GET",
				url: process.env.VUE_APP_URL,
				params: { username: state.userName, q: "[repos,orgs]", limit: "30" },
				headers: {
					"x-rapidapi-host": process.env.VUE_APP_HOST,
					"x-rapidapi-key": process.env.VUE_APP_APIKEY,
				},
			};
			await axios
				.request(options)
				.then((response) => {
					commit("fillUserCard", response.data.data);
				})
				.catch(function (error) {
					console.log("api request error :", error);
					state.errorState = true;
				});
		},
	},
	modules: {},
	getters: {
		getCardState: (state) => state.cardHidden,
	},
});

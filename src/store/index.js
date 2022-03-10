import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		mode: "dark",
		errorState: false,
		userName: "",
		cardData: [],
	},
	getters: {},
	mutations: {
		setUserQuerry: (state, payload) => {
			state.userName = payload;
		},

		fillUserCard(state, payload) {
			if (state.errorState == false) {
				console.log("PAYLOAD", payload);
				// let cardInfo = payload;
				// cardInfo.forEach((info, index) => {
				// 	console.log(index);
				// 	state.cardData.push(info);
				// });
				// console.log("data fetched:", state.cardData);
			} else {
				state.errorState = true;
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
});

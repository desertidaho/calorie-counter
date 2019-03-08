import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})

const _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/yumyum/logs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: [],
    activeDay: {},
    foodDetails: []
  },
  mutations: {
    setDays(state, data) {
      state.days = data
    },
    setActiveDay(state, day) {
      state.activeDay = day
    },
    foodDetails(state, data) {
      state.foodDetails = data
    }
  },
  actions: {
    addDay({ commit, dispatch }, payload) {
      _sandbox.post('', payload)
        .then(res => {
          dispatch('getAllDays')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllDays({ commit, dispatch }) {
      _sandbox.get('')
        .then(res => {
          commit('setDays', res.data.data)
        })
    },
    setActive({ commit, dispatch }, day) {
      commit('setActiveDay', day)
    },
    getFoods({ commit, dispatch }, newFood) {
      _api.post('', newFood)
        .then(res => {
          commit('foodDetails', res.data.foods)
        })
    },
    addFoodDetailsToSandbox({ commit, dispatch }, payload) {
      _sandbox.post(`${this.state.activeDay._id}/foods`, payload)
        .then(res => {
        })
    },
    foodDetails({ commit, dispatch }, logId) {
      console.log('bingo')
      _sandbox.get(logId)
        .then(res => {
          commit('setActiveDay', res.data.data)
        })
    }

  }

})

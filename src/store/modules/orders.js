// import axios from 'axios'
import $http from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    orders: [],
    ordersCount: ''
  },
  getters: {},
  mutations: {
    SET_ORDERS (state, payload) {
      state.orders = payload
    },
    SET_ORDERS_COUNT (state, payload) {
      state.ordersCount = payload
    }
  },
  actions: {
    async getAllOrders ({ commit }) {
      const response = await $http.Api({
        method: 'GET',
        url: '/orders'
      })
      commit('SET_ORDERS', response.data?.data)
      commit('SET_ORDERS_COUNT', response.data?.data.length)
    },
    async createOrder ({ commit }, payload) {
      const response = await $http.Api({
        method: 'POST',
        url: '/orders',
        data: payload
      })
      return response
    },
    async updateOrder ({ commit }, payload) {
      const response = await $http.Api({
        method: 'PUT',
        url: `/orders/${payload.orderId}`,
        data: payload.order
      })
      return response
    },
    async deleteOrder ({ commit }, payload) {
      const response = await $http.Api({
        method: 'DELETE',
        url: `/orders/${payload}`,
        data: payload.order
      })
      return response
    }
  }
}

// import axios from 'axios'
import $http from '@/plugins/axios'
// import { reject } from 'lodash'

export default {
  namespaced: true,

  state: {
    products: [],
    productsCount: 0

  },
  getters: {},
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    NEW_PRODUCT (state, payload) {
      state.products.push(payload)
    },
    DELETE_PRODUCT (state, payload) {
      state.products.push(payload)
    },
    SET_PRODUCTS_COUNT (state, payload) {
      state.productsCount = payload
    }
  },
  actions: {
    async getAllProducts ({ commit }) {
      const response = await $http.Api({
        method: 'GET',
        url: '/products'
      })
      commit('SET_PRODUCTS', response.data?.data)
      commit('SET_PRODUCTS_COUNT', response.data?.data.length)
      return response
    },
    async createProduct ({ commit }, payload) {
      const response = await $http.Api({
        method: 'POST',
        url: '/products',
        data: payload
      })
      return response
    },
    async updateProduct ({ commit }, payload) {
      const response = await $http.Api({
        method: 'PUT',
        url: `/products/${payload.productId}`,
        data: payload.product
      })
      return response
    },
    async deleteProduct ({ commit }, payload) {
      const response = await $http.Api({
        method: 'DELETE',
        url: `/products/${payload}`
      })
      return response
    }
  }
}

export const state = () => ({
  channels: [],
  pages: [],
  currentPage: {},
  currentChannel: {}
})

export const mutations = {
  setChannels (state, data) {
    state.channels = data
  },
  setPageList (state, data) {
    state.pages = data
  },
  addChannel (state, channel) {
    state.channels.push({
      channel
    })
  },
  removeChannel (state, { todo }) {
    state.channels.splice(state.channels.indexOf(todo), 1)
  },
  setPages (state, data) {
    state.pages = data
  },
  setCurrentPage (state, data) {
    state.currentPage = data
  },
  setCurrentChannel (state, data) {
    state.currentChannel = data
  }
}

export const actions = {
  async getChannels (context, page = 1, limit = 30) {
    const response = await this.$axios.get('page/channels', { params: { pageId: context.state.currentPage.fbPageId, page, limit } }).catch(() => { context.commit('setPages', []) })
    if (response && response.data.success) {
      context.commit('setChannels', response.data.data.docs)
      if (response.data.data.docs.length > 0) {
        context.commit('setCurrentChannel', response.data.data.docs[0])
      }
    } else {
      context.commit('setChannels', [])
    }
  },
  changeCurrentPage (context, page) {
    if (page !== context.state.currentPage) {
      context.commit('setCurrentPage', page)
      context.commit('setCurrentChannel', {})
      context.dispatch('getChannels').then(() => {})
    }
  },
  async getPages (context) {
    const response = await this.$axios.get('pages').catch(() => { context.commit('setPages', []) })
    if (response && response.data.success) {
      context.commit('setPages', response.data.data)
      if (Object.keys(context.state.currentPage).length === 0 && response.data.data.length > 0) {
        context.dispatch('changeCurrentPage', response.data.data[0]).then(() => {})
      }
    } else {
      context.commit('setPages', [])
    }
  }
}

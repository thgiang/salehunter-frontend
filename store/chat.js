export const state = () => ({
  channelList: []
})

export const mutations = {
  setChannelList (state, data) {
    state.channelList = data
  },
  addChannel (state, channel) {
    state.channelList.push({
      channel
    })
  },
  removeChannel (state, { todo }) {
    state.channelList.splice(state.channelList.indexOf(todo), 1)
  }
}

export const actions = {
  getChannelList (context) {
    const channelList = []
    for (let i = 0; i < 20; i++) {
      channelList.push({ id: i, name: 'Trần Văn ' + i, last_message: 'Tin nhắn cuối', last_message_time: '22:08', avatar: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/121145435_2692479717635717_1162425011590618119_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=GMDiKOByW2YAX-AvuwN&_nc_ht=scontent.fhan2-3.fna&tp=27&oh=9f335afbf8c1211f17162241b20681c1&oe=5FCC2616' })
    }
    context.commit('setChannelList', channelList)
  }
}

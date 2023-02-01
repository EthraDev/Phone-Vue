import { createStore } from 'vuex'

export default createStore({
  state: {
    contact: [
      {
        name: 'Touille',
        numero: '01 01 01 01 01'
      },
      {
        name: 'Juju',
        numero: '02 02 02 02 02'
      },
      {
        name: 'Adilouille',
        numero: '03 03 03 03 03'
      }
    ],
    call: [
      {
        name: 'Raphlota',
        date: 'le 20/1/2023 à 12h00',
        numero: '03 03 03 03 03'
      },
      {
        name: 'Matmat',
        date: 'le 21/1/2023 à 12h00',
        numero: '01 01 01 01 01'
      },
      {
        name: 'Arthur',
        date: 'le 22/1/2023 à 12h00',
        numero: '02 02 02 02 02'
      }
    ]
  },
  getters: {
  },
  mutations: { 
    ajoutContact(state, contacts) {
      state.contact.push(contacts)
    },
    phoneCall(state, calls) {
      state.call.push(calls)
    }
  },
  actions: {
  },
  modules: {
  }
})

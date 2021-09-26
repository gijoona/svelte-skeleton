import { client } from '../plugins/lightrpc'
import { writable } from 'svelte/store'

const data = {
  account: {},
  accounts: [],
  feed: []
}

function createCondenser() {
  const { subscribe, set, update } = writable({})

  return {
    subscribe,
    getAccount: () => {
      client
        .sendAsync('condenser_api.get_accounts', [['gijoona']])
        .then(res => {
          data.account = res[0]
          update(n => n = data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getAccounts: () => {
      client
        .sendAsync('condenser_api.get_accounts', [['gijoona']])
        .then(res => {
          data.accounts = res
          update(n => n = data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getFeed: () => {
      client
        .sendAsync('tags_api.get_discussions_by_feed', { tag: 'gijoona', limit: 10 })
        .then(res => {
          data.feed = res
          update(n => n = data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}

export const condenser = createCondenser();
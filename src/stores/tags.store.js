import { client } from '../plugins/lightrpc'
import { writable } from 'svelte/store'

const data = {
  discussionsByFeed: [],
  discussionsByTrending: [],
  discussionsByHot: []
}

function createTags() {
  const { subscribe, set, update } = writable({})

  return {
    subscribe,
    getDiscussionsByFeed: () => {
      client.sendAsync('get_discussions_by_feed', [{ tag: 'sct-kr', limit: 10 }])
            .then(console.log)
            .catch(console.error)
      
        // (err, res) => {
        //   if(err) console.error(err)
        //   else {
        //     data.discussionsByFeed =  res.discussions
        //     update(n => n = data)
        //   }
        // }
    },
    getDiscussionsByTrending: () => {
      client.sendAsync('get_discussions_by_trending', [{ tag: 'sct-kr', limit: 10, truncate_body: 80 }])
            .then(res => {
              data.discussionsByTrending = res
              update(n => n = data)
            })
            .catch(console.error)
    },
    getDiscussionsByHot: () => {
      client.sendAsync('get_discussions_by_hot', [{ tag: 'sct-kr', limit: 10, truncate_body: 80 }])
            .then(res => {
              console.log(res)
              data.discussionsByHot = res
              update(n => n = data)
            })
            .catch(console.error)
    }
  }
}

export const tags = createTags();
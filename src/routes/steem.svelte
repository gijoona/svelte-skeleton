<script>
  import { tags } from '../stores/tags.store'
  import Card from '../components/Card.svelte'
</script>

<div
  class="container mx-auto"
>
  <div
    class="my-3"
  >
    <button 
      class="box-border p-2 border-0"
      on:click="{ () => tags.getDiscussionsByTrending() }">getDiscussionsByTrending</button>
    <button 
      class="box-border p-2 border-0"
      on:click="{ () => tags.getDiscussionsByHot() }">getDiscussionsByHot</button>
  </div>

  <h1
    class="text-4xl"
  > Hot List: </h1>
  {#if $tags.discussionsByHot}
  <ul>
    {#each $tags.discussionsByHot as hot}
    <li>
      <Card>
        <svelte:fragment slot="title">{ hot.title }</svelte:fragment>
        
        <div>{ hot.body }</div>

        <svelte:fragment slot="action">
          <button>close</button>
        </svelte:fragment>
      </Card>
    </li>
    {/each}
  </ul>
  {/if}
</div>

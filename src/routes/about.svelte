<script>
  import { count, double } from '../stores/store'
</script>

<h1>{ $count } { $double }</h1>

<button on:click="{ () => count.calc('+') }">+</button>
<button on:click="{ () => count.calc('-') }">-</button>
<button on:click="{ () => count.reset() }">reset</button>
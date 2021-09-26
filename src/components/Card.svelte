<script>
</script>

<div
  class="box-border py-2 px-1 my-2 shadow-md rounded"
>
  <h1
  class="text-2xl"
  >
    <slot name="title"></slot>
  </h1>

  <div
    class="text-base"
  >
    <slot></slot>
  </div>

  <div>
    <slot name="action"></slot>
  </div>
</div>
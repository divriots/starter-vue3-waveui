<template>
  <w-button :bg-color="color">
    <slot></slot>
  </w-button>
</template>

<script>
  export default {
    props: {
      color: { type: String, default: 'primary' }
    }
  }
</script>
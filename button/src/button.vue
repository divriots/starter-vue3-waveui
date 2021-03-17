<template>
  <w-flex class="wrap">
    <w-button class="ma1" bg-color="success">success</w-button>
    <w-button class="ma1" bg-color="error">error</w-button>
    <w-button class="ma1" bg-color="warning">warning</w-button>
    <w-button class="ma1" bg-color="info">info</w-button>
    <w-button class="ma1" bg-color="primary">primary</w-button>
    <w-button class="ma1" bg-color="secondary">secondary</w-button>
    <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
  </w-flex>
</template>

<script>
  export default {
    props: {
      color: { type: String, default: 'green' }
    }
  }
</script>
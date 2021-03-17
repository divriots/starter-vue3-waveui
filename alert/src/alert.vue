<template>
  <div>
    <w-alert color="primary">
      This is an alert with a primary color.
    </w-alert>

    <w-alert bg-color="primary" color="white">
      This is an alert with a primary background color.
    </w-alert>

    <w-alert color="pink">
      This is an alert with a pink color.
    </w-alert>

    <w-alert bg-color="pink" color="white">
      This is an alert with a pink background color.
    </w-alert>

    <p>
      You can even mix different colors and background colors.
    </p>

    <w-alert bg-color="purple" color="cyan-light4">
      This is an alert with a purple background and cyan color.
    </w-alert>

    <w-alert bg-color="cyan-light4" color="purple">
      This is an alert with a cyan background and purple color.
    </w-alert>
  </div>
</template>

<script>
  export default {
    props: {
    }
  }
</script>
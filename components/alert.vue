<template>
  <div :class="alertClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: {
    type: String
  },
  computed: {
    alertClass () {
      return [
        'alert',
        {
          'alert--default': this.type === 'default' || this.type === '',
          'alert--warning': this.type === 'warning'
        }
      ]
    }
  }
}
</script>
<style>
  .alert{
    width: 100%;
    border: 1px solid black;
    padding: 10px;
  }

</style>


<template>
  <div
    ref="editable"
    class="py-1"
    contenteditable
    v-on="listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return { ...this.$listeners, input: this.onInput }
    }
  },
  mounted () {
    this.$refs.editable.textContent = this.value
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.textContent)
    }
  }
}
</script>

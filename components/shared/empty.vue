<template>
  <div class="text-center text-black-50">
    <div>
      <svg
        enable-background="new 0 0 24 24"
        :height="height"
        viewBox="0 0 24 24"
        :width="width"
        xmlns="http://www.w3.org/2000/svg"
        fill="gray"
      >
        <path
          d="m21.5 22h-19c-1.378 0-2.5-1.121-2.5-2.5v-7c0-.07.015-.141.044-.205l3.969-8.82c.404-.896 1.299-1.475 2.28-1.475h11.414c.981 0 1.876.579 2.28 1.475l3.969 8.82c.029.064.044.135.044.205v7c0 1.379-1.122 2.5-2.5 2.5zm-20.5-9.393v6.893c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-6.893l-3.925-8.723c-.242-.536-.779-.884-1.368-.884h-11.414c-.589 0-1.126.348-1.368.885z"
        />
        <path
          d="m16.807 17h-9.614c-.622 0-1.186-.391-1.404-.973l-1.014-2.703c-.072-.194-.26-.324-.468-.324h-3.557c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.557c.622 0 1.186.391 1.405.973l1.013 2.703c.073.194.261.324.468.324h9.613c.208 0 .396-.13.468-.324l1.013-2.703c.22-.582.784-.973 1.406-.973h3.807c.276 0 .5.224.5.5s-.224.5-.5.5h-3.807c-.208 0-.396.13-.468.324l-1.013 2.703c-.219.582-.784.973-1.405.973z"
        />
      </svg>
    </div>
    <div class="mt-2">
      <strong>{{ title }}</strong>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'Empty',
  props: {
    width: {
      type: String,
      default: '50'
    },
    height: {
      type: String,
      default: '50'
    },
    title: {
      type: String,
      default: 'Opps...'
    },
    description: {
      type: String,
      default: 'Danh sách đang trống'
    }
  }
}
</script>

<style scoped>

</style>

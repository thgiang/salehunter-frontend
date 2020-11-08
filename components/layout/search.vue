<template>
    <div class="search">
        <input class="search-input" placeholder="Tìm theo số điện thoại" />
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
    .search-input {
        width: 100%;
        border-radius: 30px;
        padding: 0 15px;
        color: #000;
        background-color: var(--background-gray);
        border: 0;
        height: calc(var(--header-height) - 15px);
        line-height: calc(var(--header-height) - 15px)
    }
    .search-input:focus {
        border: 0;
        outline: 0
    }
</style>

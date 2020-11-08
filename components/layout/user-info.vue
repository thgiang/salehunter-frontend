<template>
  <div class="user-info pr-3">
    <div class="user-info__name">
      <img
        src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/99157762_3049046531881409_242934006075621376_o.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_ohc=uxnTEsqZ6M8AX_4nA_W&_nc_ht=scontent.fhan2-1.fna&tp=27&oh=0e79969ad24c4016594aec77a37ceeb7&oe=5FCD72D1"
      >
      <strong>Bố Gấu</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped lang="scss">
  .user-info {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height: 100%;
    .user-info__name {
      align-items: center;
      img {
        border: 1px solid var(--border-gray);
        border-radius: 50%;
        height: 28px;
      }
    }

  }
</style>

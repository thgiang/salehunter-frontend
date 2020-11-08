<template>
  <div>
    <div class="basic-information text-center py-3">
      <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/121145435_2692479717635717_1162425011590618119_n.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=GMDiKOByW2YAX-AvuwN&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=d7e12cdeef028e87b853ff52e20b8b07&oe=5FCCAE3D" />
      <h6 class="p-0 m-0 mt-2"><strong>Nguyễn Trung</strong></h6>
      <small class="text-gray">Hoạt động trên Messenger</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelAction'
}
</script>

<style scoped lang="scss">
.basic-information {
  text-align: center;
  border-bottom: 1px solid var(--border-gray);
  img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
}
</style>

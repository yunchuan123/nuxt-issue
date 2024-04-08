<template>
    <div class="box-img">
      <img class="img-profile1" src="/assets/img.png" alt="">
      <img class="img-profile2" src="/assets/img.png" alt="">
    </div>
</template>

<style scoped>
.box-img {
  position: relative;
  width: 100%;
}

.img-profile1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  box-shadow: 10px 10px 0px 0px rgba(177,209,245,0.62)
}

.img-profile2 {
  position: absolute;
  top: 14rem;
  width: 80%;
  z-index: 10;
  box-shadow: 10px 10px 0px 0px rgba(177,209,245,0.62)
}
</style>

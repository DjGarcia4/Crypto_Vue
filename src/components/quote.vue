<template>
  <div class="d-flex justify-center align-center w-100">
    <div
      class="pa-5 elevation-14 rounded-xl mt-15 position-relative bg-white"
      height="300"
    >
      <!-- <h1 class="text-center text-green-darken-1">Quoting</h1> -->
      <div class="img-container">
        <img
          :src="'https://cryptocompare.com/' + quotation.IMAGEURL"
          alt=""
          width="130"
        />
      </div>
      <div class="text-h7 text-md-h6 pt-16">
        <p class="text-green-darken-1 pt-3">
          The price is:
          <span class="text-blue-grey-lighten-2 font-weight-bold">{{
            quotation.PRICE
          }}</span>
        </p>
        <p class="text-green-darken-1">
          Highest price of the day:
          <span class="text-blue-grey-lighten-2 font-weight-bold">{{
            quotation.HIGHDAY
          }}</span>
        </p>
        <p class="text-green-darken-1">
          Lowest price of the day:
          <span class="text-blue-grey-lighten-2 font-weight-bold">{{
            quotation.LOWDAY
          }}</span>
        </p>
        <p class="text-green-darken-1">
          Variation in the last 24 hours:
          <span class="text-blue-grey-lighten-2 font-weight-bold">{{
            quotation.CHANGE24HOUR
          }}</span>
        </p>
        <p class="text-green-darken-1">
          Last update:
          <span class="text-blue-grey-lighten-2 font-weight-bold">{{
            quotation.LASTUPDATE
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quotation: {
    required: true,
  },
});
</script>

<style scoped>
.img-container {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<template>
  <v-card class="pa-5 elevation-14 rounded-xl w-100">
    <form @submit.prevent="handleSubmit">
      <div>
        <label
          for="currency"
          class="font-weight-bold text-h5 text-blue-grey-lighten-2"
          >Currency</label
        >
        <select
          @input="$emit('update:currency', $event.target.value)"
          id="currency"
          class="input-container w-100 rounded-lg pa-3"
        >
          <option value="" disabled selected>Select a currency</option>
          <option v-for="currency in currencies" :value="currency.code">
            {{ currency.text }}
          </option>
        </select>
      </div>
      <div class="mt-3">
        <label
          for="cryptocurrency"
          class="font-weight-bold text-h5 text-blue-grey-lighten-2"
          >Cryptocurrency</label
        >
        <select
          @input="$emit('update:cryptocurrency', $event.target.value)"
          id="cryptocurrency"
          class="input-container w-100 rounded-lg pa-3"
        >
          <option value="" disabled selected>Select a Cryptocurrency</option>
          <option
            v-for="cryptocurrency in cryptocurrencies"
            :value="cryptocurrency.CoinInfo.Name"
          >
            {{ cryptocurrency.CoinInfo.FullName }}
          </option>
        </select>
      </div>
      <v-btn
        type="submit"
        block
        class="bg-green-darken-1 rounded-lg mt-5 font-weight-black"
        >Quote Price</v-btn
      >
    </form>
  </v-card>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
const $toast = useToast();
const emit = defineEmits([
  "update:currency",
  "update:cryptocurrency",
  "quoteCrypto",
]);
const props = defineProps({
  currencies: {
    required: true,
  },
  cryptocurrencies: {
    required: true,
  },
  currency: {
    required: true,
  },
  cryptocurrency: {
    required: true,
  },
});

const handleSubmit = () => {
  if (props.currency && props.cryptocurrency) {
    emit("quoteCrypto");
  } else {
    $toast.error(
      `Please select a ${
        !props.currency ? "currency" : "cryptocurrency"
      } to proceed!`,
      {
        position: "top",
      }
    );
  }
};
</script>

<style scoped>
.form-container {
  border-radius: 40px;

  box-shadow: 27px 27px 55px #97c8ce, -27px -27px 55px #cdffff;
}

.title-container {
  position: absolute;
  top: 0;
}

.input-container {
  background-color: #eeeeee;
}
</style>

<template>
  <v-container>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutLeft"
    >
      <v-card
        class="rounded-xl bg-green-darken-1 mb-5 pa-2 elevation-14 pa-md-5"
      >
        <v-row>
          <v-col cols="3" class="pa-0">
            <div
              class="w-100 rounded-lg d-flex justify-center h-100 align-center pa-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/iawrhwdo.json"
                trigger="loop"
                colors="primary:#fff,secondary:#fff"
                style="width: 70px; height: 70px"
              >
              </lord-icon>
            </div>
          </v-col>
          <v-col cols="9" class="pa-0">
            <div
              class="d-flex justify-center justify-md-start align-center h-100"
            >
              <h1 class="text-h6 text-md-h3 font-weight-black text-white">
                Cryptocurrency Quote
              </h1>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </Transition>

    <v-row>
      <v-col cols="12" md="6">
        <CriptoForm
          :currencies="currencies"
          :cryptocurrencies="cryptocurrencies"
          v-model:currency="quote.currency"
          v-model:cryptocurrency="quote.cryptocurrency"
          @quoteCrypto="quoteCrypto"
        />
      </v-col>
      <v-col cols="12" md="6">
        <Transition
          name="custom-classes"
          enter-active-class="animate__animated animate__backInRight"
          leave-active-class="animate__animated animate__backOutRight"
        >
          <Quote :quotation="quotation" v-if="showQuote" />
        </Transition>
        <Transition
          name="custom-classes"
          enter-active-class="animate__animated animate__backInLeft"
          leave-active-class="animate__animated animate__backOutLeft"
        >
          <div
            v-if="Object.keys(quotation).length === 0"
            class="w-100 d-flex justify-center align-center h-100"
          >
            <p class="text-center text-h5 font-weight-bold text-grey-darken-2">
              Nothing has been quoted yet.
            </p>
          </div>
        </Transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from "vue";
import CriptoForm from "./components/criptoForm.vue";
import Quote from "./components/quote.vue";
import useCripto from "./composables/useCripto";

const { currencies, cryptocurrencies, showQuote, quotation, getQuote } =
  useCripto();

const quote = reactive({
  currency: "",
  cryptocurrency: "",
});

const quoteCrypto = () => {
  getQuote(quote);
};
</script>

<style scoped>
.animate__animated {
  --animate-duration: 0.8s;
}
</style>

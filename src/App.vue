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

    <div class="d-md-flex">
      <CriptoForm
        :currencies="currencies"
        :cryptocurrencies="cryptocurrencies"
        v-model:currency="quoting.currency"
        v-model:cryptocurrency="quoting.cryptocurrency"
        @quotingCrypto="quotingCrypto"
      />
      <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__backInRight"
        leave-active-class="animate__animated animate__backOutDown"
      >
        <Quoting v-if="showQuoting" />
      </Transition>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useToast } from "vue-toast-notification";
import CriptoForm from "./components/criptoForm.vue";
import Quoting from "./components/quoting.vue";
const currencies = ref([
  { code: "USD", text: "United States Dollar" },
  { code: "MXN", text: "Mexican Peso" },
  { code: "EUR", text: "Euro" },
  { code: "GBP", text: "British Pound Sterling" },
  { code: "HNL", text: "Honduran Lempira" },
]);
const $toast = useToast();
const cryptocurrencies = ref([]);
const quoting = reactive({
  currency: "",
  cryptocurrency: "",
});
const showQuoting = ref(false);

const quotingCrypto = () => {
  showQuoting.value = !showQuoting.value;
  $toast.success("Si se pudo! ", {
    position: "top",
  });
};

onMounted(() => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  fetch(url)
    .then((response) => response.json())
    .then(({ Data }) => {
      cryptocurrencies.value = Data;
    });
});
</script>

<style scoped></style>

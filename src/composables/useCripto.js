import { ref, onMounted } from "vue";

export default function useCripto(quote) {
  const cryptocurrencies = ref([]);
  const currencies = ref([
    { code: "USD", text: "United States Dollar" },
    { code: "MXN", text: "Mexican Peso" },
    { code: "EUR", text: "Euro" },
    { code: "GBP", text: "British Pound Sterling" },
  ]);
  const showQuote = ref(false);
  const quotation = ref({});

  const getQuote = async (quote) => {
    showQuote.value = false;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${quote.cryptocurrency}&tsyms=${quote.currency}`;
    const response = await fetch(url);
    const data = await response.json();
    quotation.value = data.DISPLAY[quote.cryptocurrency][quote.currency];

    setTimeout(() => {
      showQuote.value = true;
    }, 100);
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
  return {
    currencies,
    cryptocurrencies,
    showQuote,
    quotation,
    getQuote,
  };
}

import { ref } from 'vue';

const getCountries = () => {
  const countries = ref([]);
  const error = ref(null);

  // Create fetch function
  const load = async () => {
    try {
      let response = await fetch('https://restcountries.com/v2/all');
      if (!response.ok) {
        throw Error('An Error Occured');
      }
      countries.value = await response.json();
      // countries.value = countries.value.slice(0, 8);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { countries, error, load };
};

export default getCountries;

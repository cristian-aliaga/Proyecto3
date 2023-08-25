export const currencyConverter2 = async (url2) => {
    const response = await fetch(url2);
    const result = await response.json();
    return result;
  }
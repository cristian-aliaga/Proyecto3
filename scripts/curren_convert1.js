// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '124963d618mshf19b886d9df3465p1804fbjsnfcbe55077d16',
//     'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
//   }
// };

export const currencyConverter1 = async (url) => {
  // const response = await fetch(url, options);
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
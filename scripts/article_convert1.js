const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': '124963d618mshf19b886d9df3465p1804fbjsnfcbe55077d16',
      'X-RapidAPI-Key': '9a7ea340cemshe72257ea827c5dbp1c88bajsnfc786bb5cd6f',
      'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
    }
  };
  
  export const articleConverter1 = async (url) => {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }
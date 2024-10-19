const hotword = {
  '神马': ['2019', '表示震惊'],
  '阿米诺斯': ['2024', '骂人']
};

function searchByChar(char) {
  const results = [];
  for (const key in hotword) {
    if (key.includes(char)) {
        results.push({ key, value: hotword[key] });
    }
}
   return results.length > 0? results : null;
}

function search() {
    const input = document.getElementById('searchInput').value;
    const results = searchByChar(input);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (results === null) {
       resultsDiv.innerHTML = '没有找到结果。';
    } else {
      results.forEach(item => {
      const resultItem = document.createElement('p');
      resultItem.textContent = `${item.key}: ${item.value.join(', ')}`;
      resultsDiv.appendChild(resultItem);
      });
     }
}



function createElement (data) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  const article = new XMLHttpRequest();
  article.onreadystatechange = () => {
    if (article.readyState === XMLHttpRequest.DONE) {
      callback(article.responseText);
    }
  };

  article.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  article.send();
}

queryWikipedia(createElement);


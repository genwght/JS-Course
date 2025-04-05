function loadJSON(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
      const data = JSON.parse(request.response);
      callback(data);
    }
  });
}

loadJSON('data/data1.json', (data) => {
  console.log('Data 1:', data);
});

loadJSON('data/data2.json', (data2) => {
  console.log('Data 2:', data2);
});

Promise.all([
   fetch('data/data1.json').then(res => res.json()),
   fetch('data/data2.json').then(res => res.json())
 ])
 
 .then((data) => {
  let combined = [];
  data.forEach((item) => {
    combined = [...combined, ...item.children];
  });

   console.log('Обʼєднаний JSON:', combined);
 })

 .catch(error => {
   console.error('Помилка при отриманні даних:', error);
 });
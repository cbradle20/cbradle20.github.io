// You may wish to find an effective randomizer function on MDN.

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
      if(document.querySelector('.flex-inner')){
        document.querySelector('.flex-inner').remove();
      }
      const ol = document.createElement('ol');
      ol.className = 'flex-inner';
      $('form').prepend(ol);

      const arr = range(10)
      const li = document.createElement('li');
      li.className = 'flex-inner li'
      
      //const descendList = arr.sort((b, a) => sortByKey(b, a, 'code'));





    })
    .catch((err) => console.log(err));
});
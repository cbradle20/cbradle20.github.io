import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  return {
    animationEnabled: true,
    colorSet: 'miscAdobe',
    title: {
      text: 'Places To Eat Out In Future'
    },
    axisX: {
      interval: 1,
      labelFontSize: 12
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Restaurants By Category',
      labelFontSize: 12,
      scaleBreaks: {
        customBreaks: [{
          startValue: 40,
          endValue: 50,
          color: 'orange'
        },
        {
          startValue: 85,
          endValue: 100,
          color: 'orange'
        },
        {
          startValue: 140,
          endValue: 175,
          color: 'orange'
        }]
      }
    },
    data: [{
      type: 'bar',
      name: 'restaurants',
      axisYType: 'secondary',
      dataPoints: datapointsFromRestaurantsList
    }]
  };
}

function runThisWithResultsFromServer(jsonFromServer) {
  // This should become a list of restaurants by category
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer));
  CanvasJS.addColorSet('miscAdobe',
    [// colorSet Array

      '#4F61F7',
      '#5DDDFC',
      '#60E69F',
      '#94FC5D',
      '#F2E75A'
    ]);

  const options = makeYourOptionsObject(dataPoints);

  const chart = new CanvasJS.Chart('chartContainer', options);
  chart.render();
  $(window).on('resize', () => {
    chart.render();
  });
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});


const dbSettings = {
	filename: './tmp/database.db',
	driver: sqlite3.Database
	};

  console.log('dbSettings', dbSettings)

  data.forEach((entry) => {
		const restaurant_name = entry.name;
		const category = entry.category;

		await db.exec(`INSERT INTO food (name, category, inspection_date, inspection_results, city, state, zip, owner, type) VALUES ("${name}", "${category}"), "${inspection_date}", "${inspection_results}, "${city}", "${state}", "${zip}", "${owner}", "${type}"`);
		}
  )
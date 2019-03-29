class Model {
  static getData() {
    View.createUserCityInfoField();
    let userCity = document.querySelector('.user-city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCity.toLowerCase()}&appid=f49baef6b4984f869cda007be0df0833`;
    const kelvinDegree = 273.15;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let nameOfCity = document.querySelector('.name-of-city');
        let cityTemp = document.querySelector('.city-temp');
        let typeOfWeather = document.querySelector('.type-of-weather');
        let windSpeed = document.querySelector('.wind-speed');
        let clouds = document.querySelector('.clouds');

        nameOfCity.innerHTML = `${data.name}`;
        cityTemp.innerHTML = `Temperature: ${Math.round(
          parseInt(data.main.temp) - kelvinDegree
        )} C°`;
        typeOfWeather.innerHTML = `Weather: ${data.weather[0].main}`;
        windSpeed.innerHTML = `Wind speed: ${parseInt(data.wind.speed)} meter/sec`;
        clouds.innerHTML = `Clouds: ${parseInt(data.clouds.all)}%`;
      });
  }
}

class View {
  static createSearchCityField() {
    let app = document.querySelector('.app');

    let searchBlock = document.createElement('div');
    searchBlock.setAttribute('class', 'search-block');

    let userCityInput = document.createElement('input');
    userCityInput.setAttribute('class', 'user-city form-control');
    userCityInput.setAttribute('type', 'search');
    userCityInput.setAttribute('placeholder', 'Type your city');

    let submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submit-button btn btn-secondary');

    let searchIcon = document.createElement('i');
    searchIcon.setAttribute('class', 'fa fa-search');

    app.appendChild(searchBlock);
    searchBlock.appendChild(userCityInput);
    searchBlock.appendChild(submitButton);
    submitButton.appendChild(searchIcon);
  }

  static createUserCityInfoField() {
    this.clearUserCityInfoField();

    let app = document.querySelector('.app');

    let infoBlock = document.createElement('div');
    infoBlock.setAttribute('class', 'info-block');

    let nameOfCity = document.createElement('h1');
    nameOfCity.setAttribute('class', 'name-of-city');

    let cityTemp = document.createElement('p');
    cityTemp.setAttribute('class', 'city-temp');

    let typeOfWeather = document.createElement('p');
    typeOfWeather.setAttribute('class', 'type-of-weather');

    let windSpeed = document.createElement('p');
    windSpeed.setAttribute('class', 'wind-speed');

    let clouds = document.createElement('p');
    clouds.setAttribute('class', 'clouds');

    app.appendChild(infoBlock);
    infoBlock.appendChild(nameOfCity);
    infoBlock.appendChild(cityTemp);
    infoBlock.appendChild(typeOfWeather);
    infoBlock.appendChild(windSpeed);
    infoBlock.appendChild(clouds);
  }

  static clearUserCityInfoField() {
    let app = document.querySelector('.app');
    let infoBlock = document.querySelector('.info-block');

    if (infoBlock) {
      app.removeChild(infoBlock);
    }
  }
}

class Controller {
  static viewData() {
    View.createSearchCityField();
    let button = document.querySelector('.submit-button');
    button.addEventListener('click', Model.getData);
  }
}

Controller.viewData();

class Model {
  static getData() {
    View.createUserCityInfoField();
    let userCity = document.querySelector('.user-city').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCity.toLowerCase()}&appid=f49baef6b4984f869cda007be0df0833`;
    const kelvinDegree = 273.15;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let userCityTemp = document.querySelector('.city-temp');
        userCityTemp.innerHTML = `Temperature: ${Math.round(parseInt(data.main.temp) - kelvinDegree)} C°`;
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
    let app = document.querySelector('.app');

    let infoBlock = document.createElement('div');
    infoBlock.setAttribute('class', 'info-block');

    let cityTemp = document.createElement('p');
    cityTemp.setAttribute('class', 'city-temp');

    app.appendChild(infoBlock);
    infoBlock.appendChild(cityTemp);
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

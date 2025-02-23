// temperature changes number, color and landscape behavior
const state = {
    temperature : 73,
    color : "orange",
    landscape : "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    sky : "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
}; 

const colorAppear = () => {
    const colorClass = document.querySelector("#tempValue")
    colorClass.className = state.color
}

const landScape = () => {
    const landScape = document.querySelector("#landscape")
    landScape.textContent = state.landscape
}

const skyDisplay = () => { 
    const skyDisplay = document.querySelector("#sky")
    skyDisplay.textContent = state.sky
}

const tempRange = () => {
    if (state.temperature >= 80){
        state.color = "red"
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (state.temperature < 80 && state.temperature >= 70) {
        state.color = "orange"
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (state.temperature < 70 && state.temperature >= 60) {
        state.color = "yellow"
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (state.temperature < 60 && state.temperature >= 50) {
        state.color = "green"
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else if (state.temperature < 50) {
        state.color = "teal"
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } 
    colorAppear();
    landScape();
}

const tempIncrease = () => {
    state.temperature += 1

    const tempValue = document.querySelector("#tempValue")
    tempValue.textContent = `${state.temperature}`;

    tempRange()
};

const tempDecrease = () => {
    state.temperature -= 1

    const tempValue = document.querySelector("#tempValue")
    tempValue.textContent = `${state.temperature}`;
    
    tempRange()
};

const skySelect = () => {
    const selectSky = document.querySelector("#skySelect")

    if (selectSky.options[selectSky.selectedIndex].text === "Sunny") {
        state.sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (selectSky.options[selectSky.selectedIndex].text === "Cloudy") {
        state.sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (selectSky.options[selectSky.selectedIndex].text === "Rainy") {
        state.sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (selectSky.options[selectSky.selectedIndex].text === "Snowy") {
        state.sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
    skyDisplay()
}

const cityNaming = (event) => {
    const cityHeader = document.querySelector("#headerCityName")
    cityHeader.textContent = event.target.value
}

const resetCity = () => {
    const cityHeader = document.querySelector("#headerCityName")
    cityHeader.textContent = "San Francisco"

    const nameCity = document.querySelector("#cityNameInput")
    nameCity.value = "San Francisco"
}

const registerTempHandler = () => {
    const increaseButton = document.querySelector("#increaseTempControl");
    increaseButton.addEventListener("click", tempIncrease);

    const decreaseButton = document.querySelector("#decreaseTempControl");
    decreaseButton.addEventListener("click", tempDecrease);
    
    const selectSky = document.querySelector("#skySelect");
    selectSky.addEventListener("change", skySelect);

    const nameCity = document.querySelector("#cityNameInput");
    nameCity.addEventListener("change", cityNaming);

    const reset = document.querySelector("#cityNameReset");
    reset.addEventListener("click", resetCity)
}

document.addEventListener("DOMContentLoaded", registerTempHandler);
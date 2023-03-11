var map = L.map('map', {
    dragging: !L.Browser.mobile,
    tap: !L.Browser.mobile
}).setView({
    lat: 49.39505,
    lon: 8.6759873
}, 12);
// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
L.marker({lat: 49.40824, lon: 8.6714711}).bindPopup('Calvary Chapel').addTo(map);
L.marker({lat: 49.4085374, lon: 8.6808019}).bindPopup('Hosanna Gemeinde').addTo(map);
L.marker({lat: 49.3648173, lon: 8.678083}).bindPopup('Freie Evangelische Gemeinde').addTo(map);

// select map element
const mapEl = document.querySelector("#map");

// Binds event listeners for the map and calls the function
mapEl.addEventListener("touchstart", onTwoFingerDrag);
mapEl.addEventListener("touchend", onTwoFingerDrag);

// add swiping class while swiping
function onTwoFingerDrag (e) {
    if (e.type === 'touchstart' && e.touches.length === 1 && L.Browser.mobile) {
        e.currentTarget.classList.add('swiping')
    } else {
        e.currentTarget.classList.remove('swiping')
    }
}

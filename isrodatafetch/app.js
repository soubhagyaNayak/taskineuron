const BASE_URL = 'https://isro.vercel.app';

const spacecraftsLink = document.getElementById('spacecrafts-link');
const launchersLink = document.getElementById('launchers-link');
const customerSatellitesLink = document.getElementById('customer-satellites-link');
const centresLink = document.getElementById('centres-link');
const resultsDiv = document.getElementById('results');

spacecraftsLink.addEventListener('click', () => {
    
    fetch(`${BASE_URL}/api/spacecrafts`)
        .then(response => response.json())
        .then(data => {
            const spacecrafts = data.spacecrafts;
            resultsDiv.innerHTML = '';
            spacecrafts.forEach(spacecraft => {
                const spacecraftDiv = document.createElement('div');
                spacecraftDiv.innerHTML = `<h2>${spacecraft.name}</h2><p>${spacecraft.id}</p>`;
                resultsDiv.appendChild(spacecraftDiv);
            });
        });
});

launchersLink.addEventListener('click', () => {

    fetch(`${BASE_URL}/api/launchers`)
        .then(response => response.json())
        .then(data => {
            const launchers = data.launchers;
            resultsDiv.innerHTML = '';
            launchers.forEach(launcher => {
                const launcherDiv = document.createElement('div');
                launcherDiv.innerHTML = `<h2>${launcher.id}</h2>`;
                resultsDiv.appendChild(launcherDiv);
            });
        });
});

customerSatellitesLink.addEventListener('click', () => {
    fetch(`${BASE_URL}/api/customer_satellites`)
        .then(response => response.json())
        .then(data => {
            const customerSatellites = data.customer_satellites;
            resultsDiv.innerHTML = '';
            customerSatellites.forEach(customerSatellite => {
                const customerSatelliteDiv = document.createElement('div');
                customerSatelliteDiv.innerHTML = `<h2>${customerSatellite.id}</h2><p>${customerSatellite.launch_date}<br/>${customerSatellite.mass}<br/> ${customerSatellite.country}<br/>${customerSatellite.launcher}</p>`;
                resultsDiv.appendChild(customerSatelliteDiv);
            });
        });
});

centresLink.addEventListener('click', () => {
    fetch(`${BASE_URL}/api/centres`)
        .then(response => response.json())
        .then(data => {
            const centres = data.centres;
            resultsDiv.innerHTML = '';
            centres.forEach(centre => {
                const centreDiv = document.createElement('div');
                centreDiv.innerHTML = `<h2>${centre.name}</h2><p>${centre.Place}<br/>${centre.State}<br/>${centre.id}</p>`;
                resultsDiv.appendChild(centreDiv);
            });
        });
});

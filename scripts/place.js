window.addEventListener('resize', function() {
    const img = document.querySelector('img');
    const width = window.innerWidth;
  
    if (width >= 700) {
      img.alt = "A scenic view of a foggy lake and mountains in Glencoe, Scotland.";
    } else {
      img.alt = "A woman playing bagpipes in a grassy field.";
    }
  });


  const temperature = parseFloat(document.querySelector('#temp').innerText);
  const windSpeed = parseFloat(document.querySelector('#wind').innerText);

  function calculateWindchill(tempC, windSpeed) {
    if (tempC <= 10 && windSpeed >= 4.8) {
        let windchill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * tempC * Math.pow(windSpeed, 0.16);
        return windchill.toFixed(1); 
    } else {
        let windchill = `N/A`;
        return windchill;

    }
}

  const windchill = calculateWindchill(temperature, windSpeed)
  document.getElementById("windchill").innerText = `${windchill}`;
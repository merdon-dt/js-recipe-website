import React from 'react'

const PrintCities = () => {
    const cities = { 
  London: 8900000, 
  Paris: 2140000, 
  Delhi: 30291000 
};

const city = () => {
    let display = [];
    for ( let d in cities){
        display.push(<p>{d}:{cities[d]}</p>)
    }
    return display;
}


  return (
    <div>
        <h3>PRINT CITIES NAME</h3>

        <p>{city()}</p>
      
    </div>
  )
}

export default PrintCities

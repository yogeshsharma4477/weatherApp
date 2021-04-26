import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import LocationCity from '@material-ui/icons/LocationCity'

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');


    useEffect(() => {
        const getdata = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d24222af2cc7eac6acbdafa3bfc1ed5b`
            const resp = await fetch(url);
            const data = await resp.json();
            setCity(data.main);
        }
        getdata();
    }, [search])
    const textcolor = {
        color: "white"
    }


    return (
        <section className="top-banner">
            <div className="container">
                <div className='main-container' >
                    <Container maxWidth="sm">
                        <Typography component="div" style={{
                            height: '400px', width: "300px", margin: "auto", marginTop: "100px"
                        }}>
                            <form>
                                <LocationCity style={{ color: "white" }} />
                                <input type="text" placeholder="Search for a city" autoFocus onChange={(event) => setSearch(event.target.value)} />
                            </form>
                            <div>
                                {!city ? (<p style={textcolor}>No Data Found</p>) : (

                                    <div>
                                        <section className="ajax-section cities">
                                            <div className="container">
                                                <ul className="cities">
                                                    <h1 style={textcolor}>{search}</h1>
                                                    <h3 style={textcolor}>{city.temp}°C</h3>
                                                    <h4 style={textcolor}>Min : {city.temp_min} °C | Max: {city.temp_max} °C</h4>
                                                </ul>
                                            </div>
                                        </section>
                                    </div>
                                )
                                }
                            </div>
                        </Typography>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Weather;
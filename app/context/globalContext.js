// "use Client";
// import axios from "axios";
// import React, { useContext, createContext, useState, useEffect } from "react";
// import defaultStates from "../utils/defaultStates";

// import { debounce } from "lodash";

// const GlobalContext = createContext();
// const GlobalContextUpdate = createContext();

// export const GlobalContextProvider = ({ children }) => {
//   const [forecast, setForecast] = useState({});
//   const [geoCodedList, setGeoCodedList] = useState(defaultStates);
//   const [inputValue, setInputValue] = useState("");

//   const [activeCityCoords, setActiveCityCoords] = useState([
//     19.0760, 72.8777,
//   ]);

//   const [airQuality, setAirQuality] = useState({});
//   const [fiveDayForecast, setFiveDayForecast] = useState({});
//   const [uvIndex, seUvIndex] = useState({});

//   const fetchForecast = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);

//       setForecast(res.data);
//     } catch (error) {
//       console.log("Error fetching forecast data: ", error.message);
//     }
//   };

//   // Air Quality
//   const fetchAirQuality = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`);
//       setAirQuality(res.data);
//     } catch (error) {
//       console.log("Error fetching air quality data: ", error.message);
//     }
//   };

//   // five day forecast
//   const fetchFiveDayForecast = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);

//       setFiveDayForecast(res.data);
//     } catch (error) {
//       console.log("Error fetching five day forecast data: ", error.message);
//     }
//   };

//   //geocoded list
//   const fetchGeoCodedList = async (search) => {
//     try {
//       const res = await axios.get(`/api/geocoded?search=${search}`);

//       setGeoCodedList(res.data);
//     } catch (error) {
//       console.log("Error fetching geocoded list: ", error.message);
//     }
//   };

//   //fetch uv data
//   const fetchUvIndex = async (lat, lon) => {
//     try {
//       const res = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`);

//       seUvIndex(res.data);
//     } catch (error) {
//       console.error("Error fetching the forecast:", error);
//     }
//   };

//   // handle input
//   const handleInput = (e) => {
//     setInputValue(e.target.value);

//     if (e.target.value === "") {
//       setGeoCodedList(defaultStates);
//     }
//   };

//   // debounce function
//   useEffect(() => {
//     const debouncedFetch = debounce((search) => {
//       fetchGeoCodedList(search);
//     }, 500);

//     if (inputValue) {
//       debouncedFetch(inputValue);
//     }

//     // cleanup
//     return () => debouncedFetch.cancel();
//   }, [inputValue]);

//   useEffect(() => {
//     fetchForecast(activeCityCoords[0], activeCityCoords[1]);
//     fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
//     fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
//     fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
//   }, [activeCityCoords]);

//   return (
//     <GlobalContext.Provider
//       value={{
//         forecast,
//         airQuality,
//         fiveDayForecast,
//         uvIndex,
//         geoCodedList,
//         inputValue,
//         handleInput,
//         setActiveCityCoords,
//       }}
//     >
//       <GlobalContextUpdate.Provider
//         value={{
//           setActiveCityCoords,
//         }}
//       >
//         {children}
//       </GlobalContextUpdate.Provider>
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);
// export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate); //default code (updated and now it fetches dynamic location)

// "use Client";
// import axios from "axios";
// import React, { useContext, createContext, useState, useEffect } from "react";
// import defaultStates from "../utils/defaultStates";

// import { debounce } from "lodash";

// const GlobalContext = createContext();
// const GlobalContextUpdate = createContext();

// export const GlobalContextProvider = ({ children }) => {
//   const [forecast, setForecast] = useState({});
//   const [geoCodedList, setGeoCodedList] = useState(defaultStates);
//   const [inputValue, setInputValue] = useState("");

//   const [activeCityCoords, setActiveCityCoords] = useState([19.0760, 72.8777]); // Default to Mumbai just for ref

//   const [airQuality, setAirQuality] = useState({});
//   const [fiveDayForecast, setFiveDayForecast] = useState({});
//   const [uvIndex, seUvIndex] = useState({});

//   const fetchForecast = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
//       setForecast(res.data);
//     } catch (error) {
//       console.log("Error fetching forecast data: ", error.message);
//     }
//   };

//   // Air Quality
//   const fetchAirQuality = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`);
//       setAirQuality(res.data);
//     } catch (error) {
//       console.log("Error fetching air quality data: ", error.message);
//     }
//   };

//   // Five day forecast
//   const fetchFiveDayForecast = async (lat, lon) => {
//     try {
//       const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);
//       setFiveDayForecast(res.data);
//     } catch (error) {
//       console.log("Error fetching five day forecast data: ", error.message);
//     }
//   };

//   // Geocoded list
//   const fetchGeoCodedList = async (search) => {
//     try {
//       const res = await axios.get(`/api/geocoded?search=${search}`);
//       setGeoCodedList(res.data);
//     } catch (error) {
//       console.log("Error fetching geocoded list: ", error.message);
//     }
//   };

//   // Fetch UV data
//   const fetchUvIndex = async (lat, lon) => {
//     try {
//       const res = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`);
//       seUvIndex(res.data);
//     } catch (error) {
//       console.error("Error fetching the forecast:", error);
//     }
//   };

//   // Handle input
//   const handleInput = (e) => {
//     setInputValue(e.target.value);

//     if (e.target.value === "") {
//       setGeoCodedList(defaultStates);
//     }
//   };

//   // Debounce function
//   useEffect(() => {
//     const debouncedFetch = debounce((search) => {
//       fetchGeoCodedList(search);
//     }, 500);

//     if (inputValue) {
//       debouncedFetch(inputValue);
//     }

//     // Cleanup
//     return () => debouncedFetch.cancel();
//   }, [inputValue]);

//   // Fetch data when activeCityCoords changes
//   useEffect(() => {
//     fetchForecast(activeCityCoords[0], activeCityCoords[1]);
//     fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
//     fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
//     fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
//   }, [activeCityCoords]);

//   // Fetch user's location dynamically
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setActiveCityCoords([latitude, longitude]);
//         },
//         (error) => {
//           console.error("Error getting location: ", error.message);
//         },
//         { enableHighAccuracy: true, timeout: 5000 }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, []); // Run once on component mount

//   return (
//     <GlobalContext.Provider
//       value={{
//         forecast,
//         airQuality,
//         fiveDayForecast,
//         uvIndex,
//         geoCodedList,
//         inputValue,
//         handleInput,
//         setActiveCityCoords,
//       }}
//     >
//       <GlobalContextUpdate.Provider
//         value={{
//           setActiveCityCoords,
//         }}
//       >
//         {children}
//       </GlobalContextUpdate.Provider>
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);
// export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);

"use Client";
import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import defaultStates from "../utils/defaultStates";

import { debounce } from "lodash";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [geoCodedList, setGeoCodedList] = useState(defaultStates);
  const [inputValue, setInputValue] = useState("");
  const [activeCityCoords, setActiveCityCoords] = useState([19.0760, 72.8777]); // Default to Mumbai
  const [airQuality, setAirQuality] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [uvIndex, seUvIndex] = useState({});

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`);
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  const fetchAirQuality = async (lat, lon) => {
    try {
      const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`);
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching air quality data: ", error.message);
    }
  };

  const fetchFiveDayForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);
      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching five day forecast data: ", error.message);
    }
  };

  const fetchGeoCodedList = async (search) => {
    try {
      const res = await axios.get(`/api/geocoded?search=${search}`);
      setGeoCodedList(res.data);
    } catch (error) {
      console.log("Error fetching geocoded list: ", error.message);
    }
  };

  const fetchUvIndex = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`);
      seUvIndex(res.data);
    } catch (error) {
      console.error("Error fetching the forecast:", error);
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setGeoCodedList(defaultStates);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce((search) => {
      fetchGeoCodedList(search);
    }, 500);

    if (inputValue) {
      debouncedFetch(inputValue);
    }

    return () => debouncedFetch.cancel();
  }, [inputValue]);

  // Fetch data when activeCityCoords changes
  useEffect(() => {
    fetchForecast(activeCityCoords[0], activeCityCoords[1]);
    fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
    fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
    fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
  }, [activeCityCoords]);

  // Handle location permission and fetch user's location
  useEffect(() => {
    const handleLocation = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            // Permission already granted, fetch location
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setActiveCityCoords([latitude, longitude]);
              },
              (error) => {
                console.error("Error getting location: ", error.message);
              },
              { enableHighAccuracy: true, timeout: 5000 }
            );
          } else if (result.state === "prompt") {
            // Ask for permission
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setActiveCityCoords([latitude, longitude]);
              },
              (error) => {
                console.error("Error getting location: ", error.message);
              },
              { enableHighAccuracy: true, timeout: 5000 }
            );
          } else {
            console.error("Geolocation permission denied.");
          }
        });
      } else {
        // Fallback if navigator.permissions is not supported
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setActiveCityCoords([latitude, longitude]);
          },
          (error) => {
            console.error("Error getting location: ", error.message);
          },
          { enableHighAccuracy: true, timeout: 5000 }
        );
      }
    };

    handleLocation();
  }, []); // Run once on mount

  return (
    <GlobalContext.Provider
      value={{
        forecast,
        airQuality,
        fiveDayForecast,
        uvIndex,
        geoCodedList,
        inputValue,
        handleInput,
        setActiveCityCoords,
      }}
    >
      <GlobalContextUpdate.Provider
        value={{
          setActiveCityCoords,
        }}
      >
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);

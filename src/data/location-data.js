const data = [
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Cape Town",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Toronto",
    latitude: 43.6511,
    longitude: -79.347,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Hanoi",
    latitude: 21.0285,
    longitude: 105.8542,
  },
];

function getLocations() {
  return data;
}

async function getLocationByName(location) {
  if (!location || location.length < 3) return null;

  const defaultLocation = {
    location: "Unknown",
    latitude: 0,
    longitude: 0,
  };

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        location
      )}`
    );
    const geoData = await geoRes.json();

    if (!Array.isArray(geoData.results) || geoData.results.length === 0) {
      return defaultLocation;
    }
    const { latitude, longitude, name } = geoData.results[0];

    return {
      location: name,
      latitude,
      longitude,
    };
  } catch (err) {
    console.error("Error fetching location:", err);
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };

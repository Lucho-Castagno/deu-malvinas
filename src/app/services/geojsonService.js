export const fetchGeoJsonData = async (path) => {
  try {
    const response = await fetch(`/api/proxy/${path}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GeoJSON data:', error);
    return null;
  }
};
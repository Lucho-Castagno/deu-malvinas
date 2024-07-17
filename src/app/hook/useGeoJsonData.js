import { useEffect, useState } from 'react';
import { fetchGeoJsonData } from '../services/geojsonService';

export function useGeoJsonData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paths = [
      'fallecidosEA.geojson',
      'fallecidosFFA.geojson',
      'fallecidosArmada.geojson',
      'fallecidosPNA.geojson',
      'fallecidosGNA.geojson',
    ];

    const fetchData = async () => {
      const promises = paths.map(path => fetchGeoJsonData(path));
      const results = await Promise.all(promises);
      const allData = results.flatMap(result => result ? result.features : []);
      setData(allData);
    };

    fetchData();
  }, []);

  return data;
}
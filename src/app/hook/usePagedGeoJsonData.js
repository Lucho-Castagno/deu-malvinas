"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchGeoJsonData } from '../services/geojsonService';

export function usePagedGeoJsonData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const loadMore = async () => {
    const paths = [
      'fallecidosEA.geojson',
      'fallecidosFFA.geojson',
      'fallecidosArmada.geojson',
      'fallecidosPNA.geojson',
      'fallecidosGNA.geojson',
    ];

    const promises = paths.map(path => fetchGeoJsonData(path));
    const results = await Promise.all(promises);
    const allData = results.flatMap(result => result ? result.features : []);
    setData(prevData => [...prevData, ...allData]);
  };

  useEffect(() => {
    loadMore();
  }, [page]);

  const lastDataElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return { data, lastDataElementRef };
}
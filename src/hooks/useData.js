import { useState, createContext, useContext } from 'react';
import Mojarras from 'data/Mojarras.js';
import Cachama from 'data/Cachama.js';

const DataContext = createContext({});

export function ProviderData({children}) {
  const data = useProviderData();

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export const useData = () => {
  return useContext(DataContext);
};

function useProviderData() {
  const [cachama, setCachama] = useState();
  const [data, setData] = useState();

  const calculateData = (fishes,weeks, temperature, fishType) => {
    let datos = [];
    
    if (fishType === '1') {
      datos = Mojarras;
    } else if (fishType === '2') {
      datos = Cachama;
    }
    let dataFiltered = datos[weeks - 1];
    
    let TemperaturaData = 25 - temperature;
    let message = '';
    if (TemperaturaData < 0) {
      message = `Disminuir la temperatura ${Math.abs(TemperaturaData)}°C`;
    } else if (TemperaturaData > 0) {
      message = `Aumentar la temperatura ${Math.abs(TemperaturaData)}°C`;
    }else {
      message = 'Temperatura óptima';
    }

    

    let info = {
      'fase': dataFiltered.faseCultivo,
      'waterVolume': fishes / 4,
      'weight': (dataFiltered.peso[0] + dataFiltered.peso[1]) / 2,
      'dailyFood': dataFiltered.alimentoDiario,
      'dailyRations': dataFiltered.racionesDiarias,
      'FoodXRation': dataFiltered.alimentoDiario / dataFiltered.racionesDiarias,
      'temperature': message,
    };
    setData(info);
    return info;
  }
  
  return {
    data,
    setData,
    calculateData,
  }
}
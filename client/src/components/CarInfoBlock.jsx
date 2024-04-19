import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function CarInfoBlock() {
  const token = sessionStorage.getItem('token');
  const { id } = useParams();
  const [car, setCar] = useState('');
  const [photos, setPhotos] = useState([]);
  const [stages, setStages] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get('/api/car/info/' + id, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(({ data }) => {
        setCar(data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get('api/image/' + id, { headers: { Authorization: `Token ${token}` } })
      .then(({ data }) => {
        setPhotos(data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get('api/stage/', { headers: { Authorization: `Token ${token}` } })
      .then(({ data }) => {
        setStages(data);
      });
  }, [id]);

  return (
    <div className="mt-8 bg-gray-100 p-8 text-center">
      <p className="font-bold">Car number: {car.number}</p>
      <p>Car model: {car.model}</p>
      <p>Vin code: {car.vin_code}</p>
      <p>Mileage: {car.mileage} miles</p>
      {/* <p>Current stage: {stages.length > 0 && stages.find(stage => stage.id == car.stage).name}</p> */}
    </div>
  );
}

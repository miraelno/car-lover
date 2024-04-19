import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MainPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    axios
      .get('/api/car/list', { headers: { Authorization: `Token ${token}` } })
      .then(({ data }) => {
        setCars(data);
      });
  }, []);

  const {subpage} = useParams()

  return (
    <div className="m-10 flex gap-3 ">
      {cars.length > 0 &&
        cars.map((car) => {
          return (
            <Link to={`/car/${car.id}`}>
              <div className="bg-gray-200 p-4 rounded-2xl">
                <p className="font-bold">Car number: {car.number}</p>
                <p>Car model: {car.model}</p>
                <p>Vin code: {car.vin_code}</p>
                <p>Mileage: {car.mileage} miles</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

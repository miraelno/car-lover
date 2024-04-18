import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from 'tw-elements-react';
import CarImages from '../components/CarImages';
import CarInfoBlock from '../components/CarInfoBlock';
import CarFiles from '../components/CarFiles';
import CarSchedule from '../components/CarSchedule';
// import CarImages from 

export default function CarInfo() {
  const token = sessionStorage.getItem('token');
  const { id } = useParams();
  const [car, setCar] = useState('');
  const [photos, setPhotos] = useState([]);
  const [stages, setStages] = useState([]);

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

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
    <div className="mb-3 mt-3">
      <TETabs justify>
        <TETabsItem
          onClick={() => handleJustifyClick('tab1')}
          active={justifyActive === 'tab1'}
        >
          Information
        </TETabsItem>
        <TETabsItem
          onClick={() => handleJustifyClick('tab2')}
          active={justifyActive === 'tab2'}
        >
          Images
        </TETabsItem>
        <TETabsItem
          onClick={() => handleJustifyClick('tab3')}
          active={justifyActive === 'tab3'}
        >
          Documents
        </TETabsItem>
        <TETabsItem
          onClick={() => handleJustifyClick('tab4')}
          active={justifyActive === 'tab4'}
        >
          Schedule
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={justifyActive === 'tab1'}><CarInfoBlock/></TETabsPane>
        <TETabsPane show={justifyActive === 'tab2'}><CarImages/></TETabsPane>
        <TETabsPane show={justifyActive === 'tab3'}><CarFiles/></TETabsPane>
        <TETabsPane show={justifyActive === 'tab4'}><CarSchedule/></TETabsPane>
      </TETabsContent>
    </div>
  );
  // <div>
  //   <div className="mt-8 bg-gray-100 p-8 text-center">
  //     <p className="font-bold">Car number: {car.number}</p>
  //     <p>Car model: {car.model}</p>
  //     <p>Vin code: {car.vin_code}</p>
  //     <p>Mileage: {car.mileage} miles</p>
  //     {/* <p>Current stage: {stages.find(stage => stage.id == car.stage).name}</p> */}
  //   </div>
  //   <div className="mt-8 bg-gray-100 p-8">
  //     <h3 className="text-center font-bold pb-4">Photos</h3>
  //     <div className="">
  //       {photos.length > 0 && stages.map((category) => (
  //         <div>
  //           <h3 className="text-center font-bold p-6">{category.name}</h3>
  //           <div className="grid gap-4 grid-cols-4">
  //             { photos.length > 0 && photos
  //               .filter((photo) => photo.stage === category.id)
  //               .map((filteredPhoto) => (
  //                 <div>
  //                   <img
  //                     src={`http://localhost:8000${filteredPhoto.file}`}
  //                     className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  //                     alt=""
  //                   />
  //                 </div>
  //               ))}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
}

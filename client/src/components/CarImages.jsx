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

export default function CarImages() {
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
  <div>
    <div className="mt-8 bg-gray-100 p-8">
      <div className="">
        {photos.length > 0 && stages.map((category) => (
          <div>
            <h3 className="text-center font-bold p-6">{category.name}</h3>
            <div className="grid gap-4 grid-cols-4">
              { photos.length > 0 && photos
                .filter((photo) => photo.stage === category.id)
                .map((filteredPhoto) => (
                  <div>
                    <img
                      src={`http://localhost:8000${filteredPhoto.file}`}
                      className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

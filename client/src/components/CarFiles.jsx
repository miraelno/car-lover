import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CarFiles() {
  const token = sessionStorage.getItem('token');
  const { id } = useParams();
  const [car, setCar] = useState('');
  const [files, setFiles] = useState([]);
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
      .get('api/document/' + id, { headers: { Authorization: `Token ${token}` } })
      .then(({ data }) => {
        setFiles(data);
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
      <div className="file-list">
        {files.length > 0 &&
          files.map((file) => (
            <div key={file.id} className='p-3'>
              <a href={`http://localhost:8000${file.file}`} download={`${file.name}`} >{file.name}</a>
            </div>
          ))}
      </div>
    </div>
)}

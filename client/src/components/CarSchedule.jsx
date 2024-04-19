import React from 'react';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function CarSchedule() {
  const token = sessionStorage.getItem('token');
  const { id } = useParams();
  const [car, setCar] = useState('');
  const [schedules, setSchedules] = useState([]);
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
      .get('api/schedule/?car=' + id, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(({ data }) => {
        setSchedules(data);
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
    <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t m-4">
      {schedules.length > 0 &&
        schedules.map((schedule_stage) => (
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                {schedule_stage.start_date}
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">
                {stages.length > 0 && stages.find(stage => stage.id === schedule_stage.stage).name}
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </li>
        ))}
    </ol>
  );
}

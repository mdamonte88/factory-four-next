'use client';

import { useState, useEffect } from 'react';
import './styles/main.scss'
import styles from './styles/page.module.scss'
import StatusComponent from './components/StatusContainer'
import StatusType from './types/status';
import apiNames from './constants/apiConstants';
import getStatues from './services/apiService'

export default function Home() {
  const [statuses, setStatuses] = useState<StatusType[]>([]);

  const updateStatuses = async () => {
    const statusPromises = apiNames.map(async (apiName) => {
      return getStatues(apiName);
    });
  
    try {
      const results = await Promise.all(statusPromises);
      
      setStatuses(results);
    } catch (error) {
      console.error('Error fetching statuses:', error);
    }
  };

  useEffect(() => {
    updateStatuses();
    const timeToUpdate = Number(process.env.NEXT_PUBLIC_REACT_APP_TIME_UPDATE) || 10000;
    const intervalId = setInterval(updateStatuses, timeToUpdate);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <main className={styles.main}>
      {statuses.map((status) => (
        <StatusComponent
          key={status.apiName}
          apiName={status.apiName}
          success={status.success}
          message={status.message}
          hostname={status.hostname}
          time={status.time}
        />
      ))}
    </main>
  )
}

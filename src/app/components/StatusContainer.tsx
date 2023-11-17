import React from 'react';
import StatusType from '../types/status';
import styles from '../styles/statusContainer.module.scss';

const StatusComponent: React.FC<StatusType> = ({ apiName, success, message, hostname, time }) => {
  const apiNameUpper = apiName.toUpperCase();
  const [title, description] = message.split(':');

  return (
    <div className={styles['status-container']}>
      <div>
        <h2>{apiNameUpper}</h2>
        {success && (
          <>
            <p className={styles.success}>{title}</p>
            <p className='small'>{hostname}</p>
            <p className='small'>{time}</p>
          </>
        )}

        {!success && (
          <>
            <p className="error">Error</p>
            <p className='large red'>OUTAGE</p>
            <p className='small red'>{title}</p>
            <p className='small red'>{description}</p>
          </>
        )}
      </div>
    </div>
  );
};
  
  export default StatusComponent;
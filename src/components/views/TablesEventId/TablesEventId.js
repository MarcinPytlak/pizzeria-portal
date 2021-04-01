import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './TablesEventId.module.scss';

const TablesEventId = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Table Event {id} view</h2>
    </div>
  );};

export default TablesEventId;
import React from 'react';
import styles from '@/styles/Heromain.module.css';

const Hero = ({ data }) => {

  console.log(data)
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(/${data.background})` }}
    >
      <h1>{data.title}</h1>
      <p>{data.paragraph}</p>
    </div>
  );
};

export default Hero;

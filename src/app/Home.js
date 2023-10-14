import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.css';
import busines from '../../src/app/assets/busines.jpeg';

const Home = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setValue(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='my-comp'>
      {value &&
        value.map((data) => (
          <div className='card' key={data.id}>
            <div className='container'>
              <div className='text'>
                <h4>
                  <b>{data.title}</b>
                </h4>
                <p>{data.body}</p>
                <p>monday 12 des 2020 14:448mtn</p>
              </div>
              <img src={busines} alt='Avatar' className='img-pro' />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;

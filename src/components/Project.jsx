import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ title, imageUrl, url }) => {
  const placeholderImage = '/images/placeholder.jpg';
  
  return (
    <Link to={url} className='M_Project'>
      <img className='A_Project_Image' src={imageUrl || placeholderImage} alt={title} />
      <p className='A_Project_Title'>{title}</p>
    </Link>
  );
};

export default Project; 
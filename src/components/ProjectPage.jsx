import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);
  const placeholderImage = '/images/placeholder.jpg';

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <nav className='O_Nav'>
        <Link to="/" className='A_Nav_Title'>Matvey Vasilyev</Link>
        <div className='W_NavLanguages'>
      <p className='A_NavLanguages_Language'>En</p>
      <p className='A_NavLanguages_Language'>Ru</p>
    </div>
  </nav>

    <div className="O_Main">
      <div className="C_ProjectPageImages">       
      <div className="W_ProjectPageInfo">
        <p className="A_ProjectPageInfo_Title">About project</p>
        <p className="A_ProjectPageInfo_Description">{project.description}</p>
      </div> 
        {project.images && project.images.length > 0 && 
          project.images.map(image => (
              <img 
                src={image.src || placeholderImage} 
                alt={image.alt} 
                className="A_ProjectPageImage" 
              />
          ))
        }
      </div>
      
      <footer className='O_Footer'>
        <p className='A_Footer_Text'>© 2025 Matvey Vasilyev</p>
        <p className='A_Footer_Text'>
          Message me via: <span>
            <a href='mailto:matvey.vasilyev@gmail.com' className='A_Footer_Text_Link'>email,</a> 
            <a href='https://t.me/matvey_vasilyev' className='A_Footer_Text_Link'>telegram</a>
          </span>
        </p>
      </footer>
    </div>
    </>
  );
};

export default ProjectPage; 
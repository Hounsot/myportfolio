import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Project from './components/Project'
import ProjectPage from './components/ProjectPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)
  
  // Sample projects data
  const projects = [
    { 
      id: 1, 
      title: 'Art, design & coding community career web-platform', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project1/cover.jpg`, 
      url: 'https://example.com/project1',
      description: 'This is a detailed description of project one, explaining what it is about, what technologies were used, and what problems it solves.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image1.jpg`,
          alt: 'Project 1 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image2.jpg`,
          alt: 'Project 1 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image3.jpg`,
          alt: 'Project 1 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image4.jpg`,
          alt: 'Project 1 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image5.jpg`,
          alt: 'Project 1 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image6.jpg`,
          alt: 'Project 1 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image7.jpg`,
          alt: 'Project 1 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image8.jpg`,
          alt: 'Project 1 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image9.jpg`,
          alt: 'Project 1 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image10.jpg`,
          alt: 'Project 1 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image11.jpg`,
          alt: 'Project 1 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image12.jpg`,
          alt: 'Project 1 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image13.jpg`,
          alt: 'Project 1 image 13',
          caption: 'Thirteenth image caption'
        },
        {
          id: 14,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image14.jpg`,
          alt: 'Project 1 image 14',
          caption: 'Fourteenth image caption'
        },
        {
          id: 15,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image15.jpg`,
          alt: 'Project 1 image 15',
          caption: 'Fifteenth image caption'
        },
        {
          id: 16,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image16.jpg`,
          alt: 'Project 1 image 16',
          caption: 'Sixteenth image caption'
        },
        {
          id: 17,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image17.jpg`,
          alt: 'Project 1 image 17',
          caption: 'Seventeenth image caption'
        },
        {
          id: 18,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image18.jpg`,
          alt: 'Project 1 image 18',
          caption: 'Eighteenth image caption'
        },
        {
          id: 19,
          src: `${import.meta.env.BASE_URL}images/projects/project1/image19.jpg`,
          alt: 'Project 1 image 19',
          caption: 'Nineteenth image caption'
        }
      ]
    },
    // Removed "Samolet Digital Banners Automatization" project
    /*
    { 
      id: 2, 
      title: 'Samolet Digital Banners Automatization', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project2/cover.jpg`, 
      url: 'https://example.com/project2',
      description: 'This is a detailed description of project two, explaining what it is about, what technologies were used, and what problems it solves.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project2/image1.jpg`,
          alt: 'Project 2 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project2/image2.jpg`,
          alt: 'Project 2 image 2',
          caption: 'Second image caption'
        }
      ]
    },
    */
    { 
      id: 3, 
      title: 'Kursiv', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project3/cover.jpg`, 
      url: 'https://example.com/project3',
      description: 'Kursiv is a platform that allows you to create and manage your own courses. It is a platform that allows you to create and manage your own courses. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      images: [
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_01.jpg`,
          alt: 'Project 3 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_02.jpg`,
          alt: 'Project 3 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_03.jpg`,
          alt: 'Project 3 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_04.jpg`,
          alt: 'Project 3 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_05.jpg`,
          alt: 'Project 3 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_06.jpg`,
          alt: 'Project 3 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_07.jpg`,
          alt: 'Project 3 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_08.jpg`,
          alt: 'Project 3 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_09.jpg`,
          alt: 'Project 3 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_10.jpg`,
          alt: 'Project 3 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_11.jpg`,
          alt: 'Project 3 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_12.jpg`,
          alt: 'Project 3 image 13',
          caption: 'Thirteenth image caption'
        },
        {
          id: 14,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_13.jpg`,
          alt: 'Project 3 image 14',
          caption: 'Fourteenth image caption'
        },
        {
          id: 15,
          src: `${import.meta.env.BASE_URL}images/projects/project3/Kursiv_14.jpg`,
          alt: 'Project 3 image 15',
          caption: 'Fifteenth image caption'
        }
      ]
    },
    { 
      id: 4, 
      title: 'Neo-Dada Manifesto', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project4/cover.jpg`, 
      url: 'https://example.com/project4',
      description: 'In the case of Dadaism (very protest, bright, crazy), I thought it was funny to make this text so dark compared to the rest of the visual, that the only thing we can get from this text is the ringing word «Dada». «Freedom: Dada Dada Dada, a roaring of tense colors, and interlacing of opposites and of all contradictions, grotesques, inconsistencies: LIFE»',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image1.gif`,
          alt: 'Project 4 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image2.gif`,
          alt: 'Project 4 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image3.gif`,
          alt: 'Project 4 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image4.gif`,
          alt: 'Project 4 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image5.gif`,
          alt: 'Project 4 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image6.gif`,
          alt: 'Project 4 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image7.gif`,
          alt: 'Project 4 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image8.gif`,
          alt: 'Project 4 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image9.gif`,
          alt: 'Project 4 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project4/image10.gif`,
          alt: 'Project 4 image 10',
          caption: 'Tenth image caption'
        }
      ]
    },
    { 
      id: 5, 
      title: 'Art, design & coding product research', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project5/cover.jpg`, 
      url: 'https://example.com/project5',
      description: 'This is a detailed description of project five, explaining what it is about, what technologies were used, and what problems it solves.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image1.jpg`,
          alt: 'Project 5 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image2.jpg`,
          alt: 'Project 5 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image3.jpg`,
          alt: 'Project 5 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image4.jpg`,
          alt: 'Project 5 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image5.jpg`,
          alt: 'Project 5 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image6.jpg`,
          alt: 'Project 5 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image7.jpg`,
          alt: 'Project 5 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image8.jpg`,
          alt: 'Project 5 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image9.jpg`,
          alt: 'Project 5 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image10.jpg`,
          alt: 'Project 5 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image11.jpg`,
          alt: 'Project 5 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image12.jpg`,
          alt: 'Project 5 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image13.jpg`,
          alt: 'Project 5 image 13',
          caption: 'Thirteenth image caption'
        },
        {
          id: 14,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image14.jpg`,
          alt: 'Project 5 image 14',
          caption: 'Fourteenth image caption'
        },
        {
          id: 15,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image15.jpg`,
          alt: 'Project 5 image 15',
          caption: 'Fifteenth image caption'
        },
        {
          id: 16,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image16.jpg`,
          alt: 'Project 5 image 16',
          caption: 'Sixteenth image caption'
        },
        {
          id: 17,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image17.jpg`,
          alt: 'Project 5 image 17',
          caption: 'Seventeenth image caption'
        },
        {
          id: 18,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image18.jpg`,
          alt: 'Project 5 image 18',
          caption: 'Eighteenth image caption'
        },
        {
          id: 19,
          src: `${import.meta.env.BASE_URL}images/projects/project5/image19.jpg`,
          alt: 'Project 5 image 19',
          caption: 'Nineteenth image caption'
        }
      ]
    },
    { 
      id: 6, 
      title: 'Mail.ru', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project6/cover.jpg`, 
      url: 'https://example.com/project6',
      description: 'Redesign concept for Mail.ru, a Russian internet company. The project was participation in the close competition for the redesign of the Mail.ru website organized by the company and later published on the company\'s website.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image1.jpg`,
          alt: 'Project 6 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image2.gif`,
          alt: 'Project 6 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image3.jpg`,
          alt: 'Project 6 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image4.jpg`,
          alt: 'Project 6 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image5.jpg`,
          alt: 'Project 6 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image6.jpg`,
          alt: 'Project 6 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image7.jpg`,
          alt: 'Project 6 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image8.jpg`,
          alt: 'Project 6 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image9.jpg`,
          alt: 'Project 6 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project6/image10.jpg`,
          alt: 'Project 6 image 10',
          caption: 'Tenth image caption'
        },        
        
      ]
    },
    { 
      id: 7, 
      title: '"PIK" leading homebuilder and construction company', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project8/cover.jpg`, 
      url: 'https://example.com/project8',
      description: 'I worked as a senior designer for "PIK" leading homebuilder and construction company in Moscow, Russia. I was responsible for the design of the company\'s website and the development of the company\'s brand identity.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project8/cover.jpg`,
          alt: 'Project 8 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_01.jpg`,
          alt: 'Project 8 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_02.jpg`,
          alt: 'Project 8 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_03.jpg`,
          alt: 'Project 8 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_04.jpg`,
          alt: 'Project 8 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_05.jpg`,
          alt: 'Project 8 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_06.jpg`,
          alt: 'Project 8 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_07.jpg`,
          alt: 'Project 8 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_08.jpg`,
          alt: 'Project 8 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_09.jpg`,
          alt: 'Project 8 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_10.jpg`,
          alt: 'Project 8 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_11.jpg`,
          alt: 'Project 8 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project8/Pik_12.jpg`,
          alt: 'Project 8 image 13',
          caption: 'Thirteenth image caption'
        }
      ]
    },
    { 
      id: 8, 
      title: 'ADC Hub', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project11/cover.jpg`, 
      url: 'https://example.com/project11',
      description: 'Digital platform for the ADC Hub, a community of digital creators and enthusiasts. Networking platform design and development.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project11/cover.jpg`,
          alt: 'Project 11 image 0',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_01.jpg`,
          alt: 'Project 11 image 1',
          caption: 'First image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_02.jpg`,
          alt: 'Project 11 image 2',
          caption: 'Second image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_03.jpg`,
          alt: 'Project 11 image 3',
          caption: 'Third image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_04.jpg`,
          alt: 'Project 11 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_05.jpg`,
          alt: 'Project 11 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_06.jpg`,
          alt: 'Project 11 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_07.jpg`,
          alt: 'Project 11 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_08.jpg`,
          alt: 'Project 11 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_09.jpg`,
          alt: 'Project 11 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_10.jpg`,
          alt: 'Project 11 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_11.jpg`,
          alt: 'Project 11 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_12.jpg`,
          alt: 'Project 11 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 14,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_13.jpg`,
          alt: 'Project 11 image 13',
          caption: 'Thirteenth image caption'
        },
        {
          id: 15,
          src: `${import.meta.env.BASE_URL}images/projects/project11/ADCHub_14.jpg`,
          alt: 'Project 11 image 14',
          caption: 'Fourteenth image caption'
        }
      ]
    },
    { 
      id: 9, 
      title: 'Bioform', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project7/cover.jpg`, 
      url: 'https://example.com/project7',
      description: '"Bioform" is a combination of organic forms and technology. Spherical structures resembling living organisms pulsate with red light. Black cables, like veins, transmit life energy to the synthetic ecosystem',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image1.jpg`,
          alt: 'Project 7 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image2.jpg`,
          alt: 'Project 7 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image3.jpg`,
          alt: 'Project 7 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image4.jpg`,
          alt: 'Project 7 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image5.jpg`,
          alt: 'Project 7 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project7/image6.jpg`,
          alt: 'Project 7 image 6',
          caption: 'Sixth image caption'
        },
        
      ]
    },
    // Removed "BozheMoy" posters project
    /*
    { 
      id: 10, 
      title: '"BozheMoy" posters', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project9/cover.jpg`, 
      url: 'https://example.com/project9',
      description: 'This is a detailed description of project nine, explaining what it is about, what technologies were used, and what problems it solves.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project9/image1.jpg`,
          alt: 'Project 9 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project9/image2.jpg`,
          alt: 'Project 9 image 2',
          caption: 'Second image caption'
        }
      ]
    },
    */
    { 
      id: 11, 
      title: 'Hansel gothic font', 
      coverImage: `${import.meta.env.BASE_URL}images/projects/project10/cover.jpg`, 
      url: 'https://example.com/project10',
      description: 'This is a detailed description of project ten, explaining what it is about, what technologies were used, and what problems it solves.',
      images: [
        {
          id: 1,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image1.jpg`,
          alt: 'Project 10 image 1',
          caption: 'First image caption'
        },
        {
          id: 2,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image2.jpg`,
          alt: 'Project 10 image 2',
          caption: 'Second image caption'
        },
        {
          id: 3,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image3.jpg`,
          alt: 'Project 10 image 3',
          caption: 'Third image caption'
        },
        {
          id: 4,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image4.jpg`,
          alt: 'Project 10 image 4',
          caption: 'Fourth image caption'
        },
        {
          id: 5,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image5.gif`,
          alt: 'Project 10 image 5',
          caption: 'Fifth image caption'
        },
        {
          id: 6,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image6.jpg`,
          alt: 'Project 10 image 6',
          caption: 'Sixth image caption'
        },
        {
          id: 7,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image7.gif`,
          alt: 'Project 10 image 7',
          caption: 'Seventh image caption'
        },
        {
          id: 8,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image8.gif`,
          alt: 'Project 10 image 8',
          caption: 'Eighth image caption'
        },
        {
          id: 9,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image9.jpg`,
          alt: 'Project 10 image 9',
          caption: 'Ninth image caption'
        },
        {
          id: 10,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image10.jpg`,
          alt: 'Project 10 image 10',
          caption: 'Tenth image caption'
        },
        {
          id: 11,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image11.jpg`,
          alt: 'Project 10 image 11',
          caption: 'Eleventh image caption'
        },
        {
          id: 12,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image12.jpg`,
          alt: 'Project 10 image 12',
          caption: 'Twelfth image caption'
        },
        {
          id: 13,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image13.jpg`,
          alt: 'Project 10 image 13',
          caption: 'Thirteenth image caption'
        },
        {
          id: 14,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image14.jpg`,
          alt: 'Project 10 image 14',
          caption: 'Fourteenth image caption'
        },
        {
          id: 15,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image15.jpg`,
          alt: 'Project 10 image 15',
          caption: 'Fifteenth image caption'
        },
        {
          id: 16,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image16.jpg`,
          alt: 'Project 10 image 16',
          caption: 'Sixteenth image caption'
        },
        {
          id: 17,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image17.jpg`,
          alt: 'Project 10 image 17',
          caption: 'Seventeenth image caption'
        },
        {
          id: 18,
          src: `${import.meta.env.BASE_URL}images/projects/project10/image18.jpg`,
          alt: 'Project 10 image 18',
          caption: 'Eighteenth image caption'
        }
      ]
    }
  ]

  // The main layout component
  const MainLayout = () => (
    <>
      <nav className='O_Nav'>
        <p className='A_Nav_Title'>Matvey Vasilyev</p>
        <div className='W_NavLanguages'>
          <p className='A_NavLanguages_Language'>En</p>
          <p className='A_NavLanguages_Language'>Ru</p>
        </div>
      </nav>
      <div className='O_Main'>
        <h1 className='A_Main_Title'>I specialize in web design, UI, and brand identity. I can hire, train, inspire people and build teams. A deep understanding of the product development cycle and brand identity allows me to be a perfect partner for any CPO, CTO and CMO.</h1>
        <div className="C_Projects">
          {projects.map(project => (
            <Project 
              key={project.id}
              title={project.title}
              imageUrl={project.coverImage}
              url={`/project/${project.id}`}
            />
          ))}
        </div>
      </div>
      <footer className='O_Footer'>
        <p className='A_Footer_Text'>© 2025 Matvey Vasilyev</p>
        <p className='A_Footer_Text'>Message me via: <span><a href='mailto:matvey.vasilyev@gmail.com' className='A_Footer_Text_Link'>email</a>, <a href='https://t.me/matvey_vasilyev' className='A_Footer_Text_Link'>telegram</a></span></p>
      </footer>
    </>
  )

  return (
    <Router basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
      </Routes>
    </Router>
  )
}

export default App

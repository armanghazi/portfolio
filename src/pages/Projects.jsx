import React from 'react';
import { FaCode, FaDatabase, FaMapMarkedAlt, FaGraduationCap, FaBook, FaTrophy, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

// Import images
import portfolioImg from '../assets/img/portfolio.png';
import weatherMapImg from '../assets/img/weather-map.png';
import espaniolImg from '../assets/img/espaniol.png';
import usaImg from '../assets/img/usa.png';
import foodImg from '../assets/img/food.png';
import forecastImg from '../assets/img/forecast.png';
import hundirImg from '../assets/img/hundir.png';
import universityImg from '../assets/img/university.png';
import airImg from '../assets/img/air.png';
import desertImg from '../assets/img/desert.png';
import ekhilurImg from '../assets/img/ekhilur.svg';

const Projects = () => {
  const frontendProjects = [
    {
      title: "Personal Portfolio Website (Initial Version)",
      description: "My first portfolio website, built using only HTML and CSS during a front-end web development course. This initial project served as the foundation for my current, more developed portfolio.",
      image: portfolioImg,
      links: [
        { text: "LinkedIn Post", icon: "linkedin", url: "https://www.linkedin.com/feed/update/urn:li:activity:7297306010694684672/" },
        { text: "Website (Initial)", icon: "globe", url: "https://armanghazi.github.io/portfolio_first/index.html" }
      ]
    },
    {
      title: "Find Your Favorite Movies (Spanish)",
      description: "A user-friendly web application built with JavaScript, HTML, and CSS that allows you to easily search for movies using the TMDb API. Discover films with advanced filters for release date, genre, rating, and Spanish film certification. Enjoy the entire experience in Spanish.",
      image: espaniolImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Busqueda-de-peliculas-favoritas" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Busqueda-de-peliculas-favoritas/" }
      ]
    },
    {
      title: "Find Your Favorite Movies (English)",
      description: "Explore and search for movies effortlessly with this web application (JavaScript, HTML, CSS) powered by the TMDb API. Refine your search using filters for release date, genre, rating, and US film certification.",
      image: usaImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Search-for-Favorite-Movies" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Search-for-Favorite-Movies/index.html" }
      ]
    },
    {
      title: "Weather Map of Bizkaia (OpenWeatherMap & Leaflet.js)",
      description: "A web application visualizing real-time weather data for Bizkaia. Built with the OpenWeatherMap API for weather information and Leaflet.js for interactive map display.",
      image: weatherMapImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Simple-Weather-Map" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Simple-Weather-Map/index.html" }
      ]
    },
    {
      title: "Food Seeker: Explore Nutritional Information (Buscador de Alimentos)",
      description: "Discover and filter food products with this React.js web application, utilizing the OpenFoodFacts API. Enjoy a visually adaptable experience with dynamic themes powered by CSS variables and a responsive design using CSS Grid and Flexbox. Features include viewing nutritional and environmental details and saving favorite items.",
      image: foodImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Buscador-deAlimentos" },
        { text: "Website", icon: "globe", url: "https://buscador-de-alimentos.vercel.app/" }
      ]
    },
    {
      title: "Basque Country Weather: A Front-End Bootcamp Finale (El Tiempo en Euskadi)",
      description: "Developed as the final project for a front-end development bootcamp, this weather forecast application for the Basque Country and some important cities leverages JavaScript, React, and Vite. The result is a fast, modern, and user-friendly interface designed for optimal weather information access.",
      image: forecastImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/tiempo-euskadi.git" },
        { text: "Website", icon: "globe", url: "https://tiempo-euskadi.vercel.app/" }
      ]
    }
  ];

  const dataScienceProjects = [
    {
      title: "Battleship Game in Python (Hundir la flota)",
      description: "Developed a classic Battleship game using Python, demonstrating fundamental programming concepts and game logic implementation.",
      image: hundirImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Hundir_la_flota/tree/master" }
      ]
    },
    {
      title: "Analyzing Global University Trends with Python EDA",
      description: "Conducted Exploratory Data Analysis (EDA) on the CWUR dataset using Python to identify and analyze multi-year patterns and key insights in global university rankings.",
      image: universityImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/University-Rankings-Analysis" }
      ]
    },
    {
      title: "Machine Learning for Iranian Air Pollution Analysis",
      description: "Utilized machine learning algorithms to develop predictive models for analyzing and forecasting air pollution trends in Iran.",
      image: airImg,
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/arman-ghaziaskari_machinelearning-calidaddelaire-datascience-activity-7286430093579579392-JAQF/" },
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/air_pollution_iran" }
      ]
    },
    {
      title: "Dessert Prediction using Machine Learning (Postre)",
      description: "Applied various machine learning techniques to build a model capable of predicting dessert types based on provided input features.",
      image: desertImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Postre" },
        { text: "Website", icon: "globe", url: "https://postre2.streamlit.app/" }
      ]
    },
    {
      title: "Ekhilur Custom Statistics Platform (Web Scraping Challenge)",
      description: "A bootcamp challenge involving the development of a website with a web scraping implementation to provide Ekhilur users with personalized transaction statistics extracted directly from their accounts.",
      image: ekhilurImg,
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/julietareynosob_bbkbootcamps-talentodigital-ciberseguridad-activity-7294662135396098048-DPrd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA27lesBTPzbSHAxYtjZloFCoHLyDdPrtAU" }
      ]
    }
  ];

  const gisExperience = [
    
      {
        period: "Freelance GIS & Remote Sensing Specialist (2021–Present)",
        description: [
          "Applied advanced GIS and remote sensing techniques for spatial analysis and environmental monitoring.",
          "Delivered custom geospatial solutions to support sustainable development and land use management projects."
        ]
      },
      {
        period: "GIS Expert & Manager, General Governor's Office of Isfahan Province – National Divisions Group (2014–2021)",
        description: [
          "Led the development of crisis response and land management maps to support provincial decision-making.",
          "Managed and analyzed geospatial datasets to inform regional planning and territorial development.",
          "Coordinated GIS workflows and mentored junior staff on geospatial technologies and methodologies."
        ]
      },
      {
        period: "GIS Expert, Isfahan Provincial Planning & Management Organization – Population Census, Statistics, and Land Use Planning (2004–2014)",
        description: [
          "Designed and updated census cartography and land use maps in collaboration with national planning authorities.",
          "Conducted spatial data integration and analysis to support urban and regional planning strategies.",
          "Provided technical GIS support across departments to improve data-driven decision-making."
        ]
      },
      {
        period: "Part-time Contributor, S4 (Spatial Structures in the Social Sciences), Department of Sociology, Brown University, USA (Feb–Aug 2013)",
        description: [
          "Digitized and georeferenced historical census maps (1890–1930) of major US cities to enable spatio-temporal social science research."
        ]
      },
      {
        period: "GIS Consultant, Spadana Geo Science & Technology Company (2004–2021)",
        description: [
          "Advised on urban GIS planning and implementation projects for municipalities and private sector clients.",
          "Contributed to smart city initiatives and geospatial database design for infrastructure planning."
        ]
      }
    ];
    
    const teachingExperience = [
      {
        institution: "Municipalities Isfahan's University of Applied Sciences (2009 - 2021)",
        description: "Taught undergraduate students in urban planning the fundamentals of urban databases and relevant computer applications.", // Added a brief description
        courses: ["Urban Databases", "Computer Applications in Urban Planning"]
      },
      {
        institution: "Red Crescent University of Applied Sciences - Isfahan branch (2014 - 2021)",
        description: "Instructed students on the principles of natural disaster management and the crucial role of Disaster Information Management (DIM).", // Added a brief description
        courses: ["Management of Natural Disasters", "Disaster Information Management (DIM)"]
      },
      {
        institution: "Meteorology and Atmospheric Sciences, University of Applied Science (2010 - 2013)",
        description: "Provided specialized instruction in Satellite Meteorology to students in atmospheric sciences.", // Added a brief description
        courses: ["Satellite Meteorology"]
      },
      {
        institution: "DaneshPajoohan Institute of Higher Education (2010 - 2012)",
        description: "Guided students in GIS principles, digital mapping techniques using AutoCAD, and supervised BSc theses in related fields.", // Added a brief description
        courses: ["GIS", "Digital Mapping & AutoCAD (DIM)", "BSc Thesis Supervision"]
      },
      {
        institution: "Various Organizations",
        description: "Conducted introductory and advanced GIS and Remote Sensing training for professionals and educators across different organizations.", // Added a broader description
        courses: [
          "Elementary GIS Course for Technical Experts (Isfahan Province Governorship & Municipality)",
          "GIS and ArcGIS Software Training for Municipal Personnel and Affiliated Organizations",
          "GIS and Remote Sensing (RS) Workshops for Geography Educators"
        ]
      }
    ];

  const publications = {
    english: [
      {
        title: "Parking Site Selection Management Using Fuzzy Logic and Multicriteria Decision Making",
        authors: "Farzanmanesh F, Ghaziaskari Naeini A, Makmom Abdullah A.",
        journal: "EnviromentAsia, Vol.3 (Special issue), 2010, pp.109-116",
        link: "https://www.researchgate.net/publication/283871418_Parking_site_selection_management_using_Fuzzy_logic_and_Multi_Criteria_Decision_Making"
      }
    ],
    persian: [
      {
        title: "Evaluation of different methods in construction management of public parking in the commercial center of the Isfahan city by using GIS",
        authors: "Ghanbari, S., Ghaziaskari Naeini, A.",
        journal: "Journal of Geography and Environmental Planning, University of Isfahan, Vol.22, No.44, 2011, pp.183-198"
      },
      {
        title: "Spatial analysis of urban green space with Geographic Information System",
        authors: "Zare, R., Ghaziaskari Naeini, A.",
        journal: "1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011"
      },
      {
        title: "Using multi-criteria decision-making models and fuzzy logic for locating urban public Service",
        authors: "Ghaziaskari Naeini, A., varshosaz, M.",
        journal: "1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011"
      },
      {
        title: "Using multi-criteria decision-making models and fuzzy logic in the management of site selection of public services in urban",
        authors: "Ghaziaskari Naeini, A., varshosaz, M",
        journal: "16th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 9-10 May, 2009"
      },
      {
        title: "Appropriate method for site selection of public parking lots by using GIS",
        authors: "Ghaziaskari Naeini, A., Varshosaz, M.",
        journal: "11th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 5-7 May 2004"
      }
    ]
  };

  const honors = [
    {
      honor: "First Place in the Master's Entrance Exam",
      details: "Ranked 1st among 800 applicants."
    },
    {
      honor: "Top Rank (1st Place) in B.Sc. Program",
      details: "Department of Natural Resources, Rangeland and Watershed Management, Isfahan University of Technology. Ranked 1st among 75 students."
    }
  ];

  return (
    <section className="projects-section">
      <h1 className="section-title">
        <FaCode />
        Projects
      </h1>

      <article>
        <h2 className="category-title">
          <FaCode />
          Front-end and Related Projects
        </h2>
        <div className="projects-grid">
          {frontendProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className={`fab fa-${link.icon}`}></i>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article>
        <h2 className="category-title">
          <FaDatabase />
          Data Science and Related Projects
        </h2>
        <div className="projects-grid">
          {dataScienceProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className={`fab fa-${link.icon}`}></i>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="experience-section">
        <h2 className="category-title">
          <FaMapMarkedAlt />
          GIS and Remote Sensing Projects
        </h2>
        <div className="experience-list">
          {gisExperience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.period}</h3>
              <ul>
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="teaching-section">
        <h2 className="category-title">
          <FaGraduationCap />
          Teaching
        </h2>
        <div className="teaching-list">
          {teachingExperience.map((exp, index) => (
            <div key={index} className="teaching-item">
              <h3>{exp.institution}</h3>
              <p>{exp.description}</p>
              <ul>
                {exp.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="publications-section">
        <h2 className="category-title">
          <FaBook />
          Publications
        </h2>
        <div className="publications-list">
          <div className="publications-item">
            <h3>English</h3>
            <ul>
              {publications.english.map((pub, index) => (
                <li key={index}>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                  , {pub.authors} <em>{pub.journal}</em>
                </li>
              ))}
            </ul>
          </div>
          <div className="publications-item">
            <h3>Persian</h3>
            <ul>
              {publications.persian.map((pub, index) => (
                <li key={index}>
                  {pub.title}, {pub.authors} <em>{pub.journal}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="honors-section">
        <h2 className="category-title">
          <FaTrophy />
          Honors and Awards
        </h2>
        <ul className="honors-list">
          {honors.map((honor, index) => (
            <li key={index} className="honors-item">
              <h3>{honor.honor}</h3>
              <p>{honor.details}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Projects; 
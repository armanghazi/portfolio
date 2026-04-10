import React from 'react';
import { FaCode, FaDatabase, FaMapMarkedAlt, FaBook, FaTrophy, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
import countryImg from '../assets/img/country.png';

const GISGalleryImage = ({ name }) => {
  const extensions = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
  const [extIndex, setExtIndex] = React.useState(0);
  const [imageSize, setImageSize] = React.useState(null);
  const baseUrl = import.meta.env.BASE_URL || '/';

  if (extIndex >= extensions.length) {
    return <div className="gis-gallery-missing">Image not found</div>;
  }

  const imageSrc = `${baseUrl}img/${encodeURIComponent(name)}.${extensions[extIndex]}`;

  return (
    <div className="gis-gallery-media">
      <img
        src={imageSrc}
        alt={name}
        className="gis-gallery-image"
        loading="lazy"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          setImageSize(`${naturalWidth} × ${naturalHeight}`);
        }}
        onError={() => {
          setImageSize(null);
          setExtIndex((current) => current + 1);
        }}
      />
      {imageSize && <span className="gis-image-size-badge">{imageSize}</span>}
      <div className="gis-hover-preview" aria-hidden="true">
        <img src={imageSrc} alt="" className="gis-gallery-image-full" />
        {imageSize && <p className="gis-preview-size">{imageSize}</p>}
      </div>
    </div>
  );
};

const Projects = () => {
  const GIS = [
    "general maps for statistical yearbooks and territorial planning",
    "census rural",
    "census urban",
    "The map of industry and mining",
    "Tourist map",
    "Territory suitable and unsuitable for tourism",
    "Land suitable and unsuitable for agriculture",
    "Territory suitable and unsuitable for industry and mining",
    "Territory suitable and unsuitable for the population"
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

  const frontendProjects = [
       {
      title: "Endless Countries Questions",
      description: "An interactive geography quiz application that tests your knowledge about countries around the world. Challenge yourself with endless questions about capitals, populations, regions, languages, and currencies!",
      image: countryImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Endless_Countries_Questions.git"},
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Endless_Countries_Questions/" }
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
      title: "Personal Portfolio Website (Initial Version)",
      description: "My first portfolio website, built using only HTML and CSS during a front-end web development course. This initial project served as the foundation for my current, more developed portfolio.",
      image: portfolioImg,
      links: [
        { text: "LinkedIn Post", icon: "linkedin", url: "https://www.linkedin.com/feed/update/urn:li:activity:7297306010694684672/" },
        { text: "Website (Initial)", icon: "globe", url: "https://armanghazi.github.io/portfolio_first/index.html" }
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
      <div id="google_translate_element"></div>

      <h1 className="section-title">
        
        Projects
      </h1>

      <article>
        <h2 className="category-title">
          <FaMapMarkedAlt />
          GIS Gallery
        </h2>
        <div className="gis-gallery-grid">
          {GIS.map((name) => (
            <figure key={name} className="gis-gallery-card">
              <GISGalleryImage name={name} />
              <figcaption className="gis-gallery-caption">{name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="gis-gallery-actions">
          <a
            href={`${import.meta.env.BASE_URL || '/'}pdfs/mymaps.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="gis-gallery-button"
          >
            Open My Maps PDF
          </a>
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
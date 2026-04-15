import React from 'react';
import { FaCode, FaDatabase, FaMapMarkedAlt, FaBook, FaTrophy } from 'react-icons/fa';
import './Projects.css';

// Import images
import portfolioImg from '../assets/img/portfolio.png';
import weatherMapImg from '../assets/img/weather-map.png';
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
    "General Maps for Statistical Yearbooks & Territorial Planning",
    "Rural Census Blocks Mapping",
    "Urban Census Blocks Mapping",
    "Industrial & Mining Distribution Map",
    "Tourism Map & Points of Interest",
    "Tourism Suitability Analysis (Suitable  Unsuitable Areas)",
    "Agricultural Suitability Analysis (Suitable  Unsuitable Areas)",
    "Industrial & Mining Suitability Analysis (Suitable  Unsuitable Areas)",
    "Population Suitability & Settlement Potential Analysis (Suitable  Unsuitable Areas)",
  ];

  const dataScienceProjects = [
    {
      title: "Python Fundamentals Project, Battleship Game (Hundir la flota)",
      description: "Developed a classic Battleship game as my first Python project, applying core programming concepts such as loops, conditionals, functions, and basic game logic.",
      image: hundirImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Hundir_la_flota/tree/master" }
      ]
    },
    {
      title: "Exploratory Data Analysis of Global University Rankings (CWUR Dataset)",
      description: "Performed an in‑depth EDA on the CWUR dataset, analyzing multi‑year trends among the top 1000 universities worldwide and uncovering key patterns in academic performance indicators.",
      image: universityImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/University-Rankings-Analysis" }
      ]
    },
    {
      title: "Air Pollution Analysis & Prediction in Iran Using Machine Learning and Deep Learning.",
      description: "Built predictive models using regression, classification, and deep learning techniques to analyze air pollution indicators, identify key contributing factors, and forecast pollution trends.",
      image: airImg,
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/arman-ghaziaskari_machinelearning-calidaddelaire-datascience-activity-7286430093579579392-JAQF/" },
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/air_pollution_iran" }
      ]
    },
    {
      title: "Dessert Classification Model Using Machine Learning Techniques",
      description: "Developed a machine learning model to predict dessert categories based on multiple input features, experimenting with various algorithms and evaluating model performance.",
      image: desertImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Postre" },
        { text: "Website", icon: "globe", url: "https://postre2.streamlit.app/" }
      ]
    },
    {
      title: "Ekhilur Custom Statistics Platform, Web Scraping & Predictive Analytics Challenge",
      description: "Collaborated with web security and development teams to complete the final challenge: performing large‑scale web scraping, data cleaning, exploratory analysis, and building predictive models to generate actionable business insights.",
      image: ekhilurImg,
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/julietareynosob_bbkbootcamps-talentodigital-ciberseguridad-activity-7294662135396098048-DPrd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA27lesBTPzbSHAxYtjZloFCoHLyDdPrtAU" }
      ]
    }
  ];

  const frontendProjects = [
       {
      title: "Endless Countries Questions, Interactive Geography Quiz",
      description: "Built an interactive geography quiz using a REST Countries API, generating endless randomized questions about capitals, populations, regions, languages, and currencies. After every 15 questions, the app displays correct/incorrect statistics and continues the game seamlessly.",
      image: countryImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Endless_Countries_Questions.git"},
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Endless_Countries_Questions/" }
      ]
    },
        {
      title: "Basque Country Weather App (React, Vite, OpenWeatherMap)",
      description: "Developed as the final project of a front‑end bootcamp, this weather application provides real‑time conditions for major cities in the Basque Country and selected global cities. Features include wind speed, humidity, visibility, air pollution levels, sunrise/sunset times, and a 15‑day forecast.",
      image: forecastImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/tiempo-euskadi.git" },
        { text: "Website", icon: "globe", url: "https://tiempo-euskadi.vercel.app/" }
      ]
    },
        {
      title: "Food Seeker Nutritional & Environmental Data Explorer (OpenFoodFacts API)",
      description: "Created a React.js application that allows users to search and filter supermarket food products using the OpenFoodFacts API. Includes nutritional and environmental impact details, dynamic themes via CSS variables, and a fully responsive layout using CSS Grid and Flexbox.",
      image: foodImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Buscador-deAlimentos" },
        { text: "Website", icon: "globe", url: "https://buscador-de-alimentos.vercel.app/" }
      ]
    },
    {
      title: "Movie Finder (Spanish), TMDb API Search & Filters",
      description: "Developed a Spanish‑language movie search application using the TMDb API, featuring advanced filters for release date, genre, rating, and Spanish film certification. Includes posters, summaries, and a fully localized interface." ,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Busqueda-de-peliculas-favoritas" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Busqueda-de-peliculas-favoritas/" }
      ]
    },
    {
      title: "Movie Finder (English), TMDb API Search & Filters",
      description: "Built an English‑language movie search tool powered by the TMDb API, offering filters for release date, genre, rating, and US film certification, along with posters and movie summaries.",
      image: usaImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Search-for-Favorite-Movies" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Search-for-Favorite-Movies/index.html" }
      ]
    },
    {
      title: "Bizkaia Weather Map, Real‑Time Weather Visualization",
      description: "Developed a simple interactive map using Leaflet.js and the OpenWeatherMap API to display real‑time weather conditions across Bizkaia.",
      image: weatherMapImg,
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Simple-Weather-Map" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Simple-Weather-Map/index.html" }
      ]
    },
        {
      title: "Personal Portfolio Website, First Version (HTML & CSS)",
      description: "My first portfolio website, built entirely with HTML and CSS during a front‑end development course. This project laid the foundation for my current, more advanced portfolio.",
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
        <details className="section-accordion">
          <summary className="category-title">
            <FaMapMarkedAlt />
            GIS Gallery
          </summary>
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
              Selected GIS & Spatial Analysis Works
            </a>
          </div>
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaDatabase />
            Data Science and Related Projects
          </summary>
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
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaCode />
            Front-end and Related Projects
          </summary>
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
        </details>
      </article>

      <article className="publications-section">
        <details className="section-accordion">
          <summary className="category-title">
            <FaBook />
            Publications
          </summary>
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
        </details>
      </article>

      <article className="honors-section">
        <details className="section-accordion">
          <summary className="category-title">
            <FaTrophy />
            Honors and Awards
          </summary>
          <ul className="honors-list">
            {honors.map((honor, index) => (
              <li key={index} className="honors-item">
                <h3>{honor.honor}</h3>
                <p>{honor.details}</p>
              </li>
            ))}
          </ul>
        </details>
      </article>
    </section>
  );
};

export default Projects; 
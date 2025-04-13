import React from 'react';
import { FaCode, FaDatabase, FaMapMarkedAlt, FaGraduationCap, FaBook, FaTrophy } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const frontendProjects = [
    {
      title: "Personal Portfolio Website",
      description: "A project showcasing my HTML and CSS skills, created during a front-end web development course.",
      image: "/img/portfolio.png",
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/feed/update/urn:li:activity:7297306010694684672/" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/portfolio_first/index.html" }
      ]
    },
    {
      title: "Search for Favorite Movies (Spanish version)",
      description: "This project is a web application built using JavaScript, HTML, and CSS that enables users to search for movies using The Movie Database (TMDb) API. It includes advanced filtering options by release date, genre, rating, and certification, with support for searches based on the Spanish classification system. The entire web application is in Spanish.",
      image: "/img/espaniol.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Busqueda-de-peliculas-favoritas" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Busqueda-de-peliculas-favoritas/" }
      ]
    },
    {
      title: "Search for Favorite Movies (English version)",
      description: "This web application, built using JavaScript, HTML, and CSS, enables users to search for movies using the TMDb API. It provides filters for release date, genre, rating, and certification, including searches tailored to the US classification system.",
      image: "/img/usa.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Search-for-Favorite-Movies" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Search-for-Favorite-Movies/index.html" }
      ]
    },
    {
      title: "Simple Weather Map",
      description: "A simple web-based application that displays weather information for different locations in Bizkaia using OpenWeatherMap API and Leaflet.js for mapping.",
      image: "/img/weather.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Simple-Weather-Map" },
        { text: "Website", icon: "globe", url: "https://armanghazi.github.io/Simple-Weather-Map/index.html" }
      ]
    },
    {
      title: "Food Seeker (Buscador de Alimentos in spanish)",
      description: "A web application developed in React.js for searching and filtering food products using the OpenFoodFacts API. It implements dynamic themes with CSS variables and utilizes CSS Grid and Flexbox for a responsive design. It allows users to view the nutritional and environmental information of products and save them as favorites.",
      image: "/img/food.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/Buscador-deAlimentos" },
        { text: "Website", icon: "globe", url: "https://buscador-de-alimentos.vercel.app/" }
      ]
    },
    {
      title: "Weather in the Basque Country (El Tiempo en Euskadi in spanish)",
      description: "This weather forecast app was developed using JavaScript, React, and the powerful Vite build tool. These technologies allow us to offer a fast, modern, and efficient interface, specifically designed to provide the best user experience.",
      image: "/img/forecast.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/armanghazi/tiempo-euskadi.git" },
        { text: "Website", icon: "globe", url: "https://tiempo-euskadi.vercel.app/" }
      ]
    }
  ];

  const dataScienceProjects = [
    {
      title: "Sink the Fleet (Python Game Project)",
      description: "A python-based implementation of the classic Battleship game (Hundir la flota in Spanish).",
      image: "/img/hundir.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Hundir_la_flota/tree/master" }
      ]
    },
    {
      title: "EDA of University Rankings Analysis",
      description: "Performing Exploratory Data Analysis (EDA) on the CWUR (Center for World University Rankings) dataset to analyze multi-year trends in global university rankings.",
      image: "/img/university.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/University-Rankings-Analysis" }
      ]
    },
    {
      title: "Machine Learning for Air Pollution in Iran",
      description: "Developed predictive models for air pollution trends in Iran using machine learning.",
      image: "/img/air.png",
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/arman-ghaziaskari_machinelearning-calidaddelaire-datascience-activity-7286430093579579392-JAQF/" },
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/air_pollution_iran" }
      ]
    },
    {
      title: "Prediction of Dessert",
      description: "Applied machine learning techniques to predict dessert based on input features (Postre in Spanish).",
      image: "/img/desert.png",
      links: [
        { text: "GitHub", icon: "github", url: "https://github.com/ghaziaskari/Postre" },
        { text: "Website", icon: "globe", url: "https://postre2.streamlit.app/" }
      ]
    },
    {
      title: "Bootcamp challenge",
      description: "Custom Statistics Platform for Ekhilur Users: This project involved developing a website that enabled Ekhilur users to access customized statistics about their transactions. To achieve this, we implemented a web scraping technique that extracted information directly from users' accounts.",
      image: "/img/ekhilur.svg",
      links: [
        { text: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/posts/julietareynosob_bbkbootcamps-talentodigital-ciberseguridad-activity-7294662135396098048-DPrd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA27lesBTPzbSHAxYtjZloFCoHLyDdPrtAU" }
      ]
    }
  ];

  const gisExperience = [
    {
      period: "As a Freelancer (2021- now)",
      description: ["Utilized GIS and remote sensing tools for detailed spatial analyses and environmental monitoring."]
    },
    {
      period: "As a GIS Expert and Manager, General Governor Office of Isfahan Province, National Divisions Group (2014-2021)",
      description: [
        "Prepared maps for crisis management and land management.",
        "Conducted spatial data analysis to support regional planning initiatives."
      ]
    },
    {
      period: "As a GIS Expert, Isfahan Provincial Planning and Management Organization, Population Census and Statistics Department and Land Use Planning Group (2004-2014)",
      description: [
        "Prepared and updated census maps and land use planning maps.",
        "Provided GIS support for urban and regional planning projects."
      ]
    },
    {
      period: "Part-time Contributor, S4 (Spatial Structures in the Social Sciences), Department of Sociology, Brown University, Providence, RI, USA (02-2013-08-2013)",
      description: ["Digitized vintage census maps from 1890 to 1930 in major US cities."]
    },
    {
      period: "As a Consultant in Spadana Geo Science and Technology Company (2004-2021)",
      description: ["Urban GIS Planning and Implementation Consultant."]
    }
  ];

  const teachingExperience = [
    {
      institution: "Municipalities Isfahan's University of Applied Sciences (2009-2021)",
      courses: ["Urban Databases", "Computer applications in urban planning"]
    },
    {
      institution: "Red Crescent University of Applied Sciences - Isfahan branch (2014-2021)",
      courses: ["Management of natural disasters", "Disaster Information Management (DIS)"]
    },
    {
      institution: "Meteorology and Atmospheric Sciences, University of Applied Science (2010-2013)",
      courses: ["Satellite meteorology"]
    },
    {
      institution: "DaneshPajoohan Institute of Higher Education (2010-2012)",
      courses: ["GIS", "Digital mapping&AutoCAD (DIS)", "BSc thesis"]
    },
    {
      institution: "Others Organizations",
      courses: [
        "Elementary course of GIS to technical experts of Isfahan province governorship in Isfahan municipality",
        "GIS courses and ARCGIS software to municipalities personal and related organizations",
        "GIS lessons and Remote Sensing(RS) in public session of geography group for educational teachers"
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
    "First Place in the Master's Entrance Exam among 800 applicants",
    "Top Rank (1st Place) in the Department of Natural Resources, B.Sc. in Rangeland and Watershed Management, among 75 students, Isfahan University of Technology."
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
              <img src={project.image} alt={project.title} className="project-image" />
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
              <img src={project.image} alt={project.title} className="project-image" />
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
            <li key={index} className="honors-item">{honor}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Projects; 
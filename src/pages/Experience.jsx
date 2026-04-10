import React from 'react';
import { FaMapMarkedAlt, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const gisExperience = [
    {
      period: "Freelancer, GIS Consultant (2022–Present)",
      description: [
        "Conducted spatial and environmental analysis using GIS, remote sensing, and Python‑based tools.",
        "Built interactive dashboards (Power BI, Streamlit) to visualize geospatial and statistical insights.",
        "Automated data workflows and implemented ETL processes to support analysis and reporting.",
        "Applied data science techniques in academic, personal, and practical geospatial projects.",
        "Collaborated with clients to develop and deliver geospatial solutions tailored to project needs."
      ]
    },
    {
      period: "GIS Expert & Manager, General Governor's Office of Isfahan Province – National Divisions Group (2014–2021)",
      description: [
        "Led spatial data management and development of crisis‑response and territorial planning solutions for provincial authorities.",
        "Designed, updated, and managed the official geospatial database of administrative divisions (counties, districts, rural areas, cities, villages).",
        "Produced accurate administrative boundary maps using satellite imagery, topographic maps, and cadastral data; conducted temporal analysis of boundary changes.",
        "Performed spatial and demographic analysis to propose creation/modification of administrative units; prepared official maps and documentation for decision‑making bodies.",
        "Coordinated with Ministry of Interior, National Cartographic Center, and Statistical Center to harmonize administrative codes and datasets.",
        "Managed large geospatial datasets for regional planning, land management, and strategic decision‑making.",
        "Prepared technical proposals (methodologies, timelines, data specs); reviewed RFPs/RFQs; coordinated multidisciplinary teams for competitive geospatial proposals.",
        "Led GIS workflows, mentored junior staff, and introduced modern geospatial methodologies/technologies post-2018."
      ]
    },
    {
      period: "GIS Expert at Spadana GeoSite, working on‑site at the Isfahan Provincial Planning & Management Organization (2004–2014)",
      description: [
        "Designed and updated census cartography and land‑use maps in coordination with provincial and national planning authorities.",
        "Delineated and digitized rural/urban census blocks; updated cartography using satellite imagery and field surveys; integrated with national statistical databases.",
        "Conducted spatial analysis, territorial diagnostics, and land‑use modeling for sustainable development planning.",
        "Developed thematic maps and suitability analysis for tourism (zoning, circuits), agriculture, industry, mining, water resources, and infrastructure.",
        "Produced geospatial datasets and maps for regional planning, land management, and strategic decision‑making.",
        "Prepared technical proposals (methodologies, timelines, data specs); reviewed RFPs/RFQs; coordinated multidisciplinary teams for competitive geospatial proposals."
      ]
    },
        {
      period: "GIS Consultant and Project Manager at Spadana Geo Science & Technology Company (2004–2018)",
      description: [
        "Managed and contributed to GIS projects for municipalities, regional authorities, and private sector organizations.",
        "Led and managed GIS implementation projects for municipalities, overseeing full project lifecycles from planning to delivery.",
        "Advised municipalities and private sector clients on urban GIS planning, system design, and operational deployment.",
        "Coordinated multidisciplinary teams, ensuring alignment between technical requirements, timelines, and stakeholder expectations.",
        "Directed the development of geospatial databases and smart‑city solutions to support infrastructure and urban planning initiatives.",
        "Supervised technical teams and ensured the successful execution of GIS workflows, quality standards, and project deliverables.",
        "Prepared technical proposals (methodologies, timelines, data specs); reviewed RFPs/RFQs; coordinated multidisciplinary teams for competitive geospatial proposals."
      ]
    },
    {
      period: "GIS Contributor, S4 (Spatial Structures in the Social Sciences), Department of Sociology, Brown University, USA (Feb–Aug 2013)",
      description: [
        "Digitized and georeferenced historical census maps (1890–1930) of major US cities to enable spatio-temporal social science research."
      ]
    },

    {
      period: "GIS Consultant, Zistban Company, Isfahan Science and Technology Town (2002–2004)",
      description: [
        "Provided consultancy on GIS-related matters for various regional projects.",
        "Collaborated with the Isfahan Regional Water Authority on spatial planning and hydrological mapping projects."
      ]
    },
    {
      period: "GIS Project Collaborator, Isfahan University of Technology (2002–2003)",
      description: [
        "Assisted in the initiation of the Isfahan Province GIS project.",
        "Contributed to the zero-phase feasibility studies under the supervision of the Isfahan Provincial Management and Planning Organization."
      ]
    }
  ];

  const teachingExperience = [
    {
      institution: "Municipalities Isfahan's University of Applied Sciences (2009 - 2021)",
      description: "Taught undergraduate students in urban planning the fundamentals of urban databases and relevant computer applications.",
      courses: ["Urban Databases", "Computer Applications in Urban Planning"]
    },
    {
      institution: "Red Crescent University of Applied Sciences - Isfahan branch (2014 - 2021)",
      description: "Instructed students on the principles of natural disaster management and the crucial role of Disaster Information Management (DIM).",
      courses: ["Management of Natural Disasters", "Disaster Information Management (DIM)"]
    },
    {
      institution: "Meteorology and Atmospheric Sciences, University of Applied Science (2010 - 2013)",
      description: "Provided specialized instruction in Satellite Meteorology to students in atmospheric sciences.",
      courses: ["Satellite Meteorology"]
    },
    {
      institution: "DaneshPajoohan Institute of Higher Education (2010 - 2012)",
      description: "Guided students in GIS principles, digital mapping techniques using AutoCAD, and supervised BSc theses in related fields.",
      courses: ["GIS", "Digital Mapping & AutoCAD (DIM)", "BSc Thesis Supervision"]
    },
    {
      institution: "Various Organizations",
      description: "Conducted introductory and advanced GIS and Remote Sensing training for professionals and educators across different organizations.",
      courses: [
        "Elementary GIS Course for Technical Experts (Isfahan Province Governorship & Municipality)",
        "GIS and ArcGIS Software Training for Municipal Personnel and Affiliated Organizations",
        "GIS and Remote Sensing (RS) Workshops for Geography Educators"
      ]
    }
  ];

  return (
    <section className="experience-page-section">
      <h1 className="section-title">Experience</h1>

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
    </section>
  );
};

export default Experience;
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Studies.css';

// Import university images
import shahidBeheshtiImg from '../assets/img/shahid-beheshti.jpg';
import isfahanTechImg from '../assets/img/isfahan-tech.jpg';

const Studies = () => {
  const education = [
    {
      degree: "Master's Degree in Geographic Information Systems and Remote Sensing",
      year: "2004",
      university: "Shahid Beheshti University, Tehran, Iran",
      image: shahidBeheshtiImg
    },
    {
      degree: "Bachelor of Engineering in Rangeland and Watershed Management",
      year: "2000",
      university: "Isfahan University of Technology, Iran",
      image: isfahanTechImg
    }
  ];

  const training = [
    {
      title: "Big Data Specialist",
      period: "Jan 2026 - Mar 2026",
      provider: "Lanbide, Alfa formación",
      details: "230 hours"
    },
    {
      title: "Introduction to comprehensive BIM project management",
      period: "Feb 2026 - Mar 2026",
      provider: "SEPE, Metodo Consultores",
      details: "50 hours"
    },
    {
      title: "Geographic information systems applied to agricultural management with free software",
      period: "Dec 2025 - Feb 2026",
      provider: "SEPE, Metodo Consultores",
      details: "150 hours"
    },
    {
      title: "Artificial Intelligence Specialist",
      period: "Jun 2025 - Oct 2025",
      provider: "Lanbide, EDE Fundazioa",
      details: "230 hours"
    },
    {
      title: "Web Development Bootcamp (Front-End)",
      period: "Feb 2025 - Apr 2025",
      provider: "The Bridge Digital Talent(BBK Bootcamps)",
      details: "200 hours"
    },
    {
      title: "Data Science Bootcamp",
      period: "Sep 2024 - Feb 2025",
      provider: "The Bridge Digital Talent(BBK Bootcamps)",
      details: "480 hours"
    },
    {
      title: "Microcomputer Systems Assembly and Maintenance (Level 1)",
      period: "May 2024 - Jul 2024",
      provider: "Lanbide, IFAP (Basauri)",
      details: "370 hours"
    },
    {
      title: "Business Intelligence: Data Modeling and Visualization with Excel and Power BI",
      period: "2023",
      provider: "Lanbide, IPARTEK SERVICIOS INFORMÁTICOS, SOC.COOP",
      details: "60 hours"
    },
    {
      title: "Machine Learning and Predictive Analysis for Business 4.0",
      period: "2023",
      provider: "Lanbide, C2B-Campus to Business",
      details: "30 hours"
    },
    {
      title: "Web scraping, website data extraction",
      period: "2023",
      provider: "Lanbide, C2B-Campus to Business",
      details: "20 hours"
    }
  ];

  return (
    <section className="studies-section">
      <h1 className="section-title">
        <FaGraduationCap />
        Education
      </h1>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-image-container">
              <img 
                src={edu.image} 
                alt={edu.university} 
                className="education-image"
                loading="lazy"
              />
            </div>
            <div className="education-content">
              <h2 className="education-degree">{edu.degree}</h2>
              <p className="education-year">{edu.year}</p>
              <p className="education-university">{edu.university}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="training-section">
        <h2 className="category-title">Additional Training</h2>
        <div className="studies-grid">
          {training.map((study, index) => (
            <article key={index} className="study-card training-card"> {/* Added specific class */}
              <div className="study-content">
                <h3 className="study-title">{study.title}</h3>
                <p className="study-subtitle">{study.period}</p>
                <p className="study-description">{study.provider}</p>
                {study.details && <p className="study-details">{study.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
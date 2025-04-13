import './Studies.css';

const Studies = () => {
  const education = [
    {
      title: "Master's Degree in Geographic Information Systems and Remote Sensing",
      period: "2004",
      description: "Shahid Beheshti University, Tehran, Iran",
      image: "./img/SBU.jpg"
    },
    {
      title: "Bachelor of Engineering in Rangeland and Watershed Management",
      period: "2000",
      description: "Isfahan University of Technology, Iran",
      image: "./img/IUT.jpg"
    }
  ];

  const training = [
    {
      title: "Student of Bootcamp of Web Developing (Front-End)",
      period: "Feb 2025 - April 2025",
      description: "The Bridge Digital Talent, 200 hours"
    },
    {
      title: "Bootcamp of Data Science",
      period: "Sep 2024 - Feb 2025",
      description: "The Bridge Digital Talent, 480 hours"
    },
    {
      title: "Auxiliary Operations for Assembly and Maintenance of Microcomputer Systems (Level 1)",
      period: "May 2024 - July 2024",
      description: "Lanbide, IFAP(Basauri), 370 hours in total (80 hours of internship remaining)"
    },
    {
      title: "Business Intelligence: Data Modeling and Visualization with Excel and Power BI",
      period: "2023",
      description: "Lanbide, IPARTEK SERVICIOS INFORMÁTICOS, SOC.COOP, 60 hours"
    },
    {
      title: "Machine Learning and Predictive Analysis for Business 4.0",
      period: "2023",
      description: "Lanbide, C2B-Campus to Business, 30 hours"
    },
    {
      title: "Web scraping, website data extraction",
      period: "2023",
      description: "Lanbide, C2B-Campus to Business, 20 hours"
    }
  ];

  return (
    <section className="studies-section">
      <div className="education-section">
        <h1 className="section-title">Education</h1>
        <div className="studies-grid">
          {education.map((study, index) => (
            <article key={index} className="study-card">
              <div className="university-image">
                <img src={study.image} alt={study.title} />
              </div>
              <h2 className="study-title">{study.title}</h2>
              <p className="study-period">{study.period}</p>
              <p className="study-description">{study.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="training-section">
        <h1 className="section-title">Additional Training</h1>
        <div className="studies-grid">
          {training.map((study, index) => (
            <article key={index} className="study-card">
              <h2 className="study-title">{study.title}</h2>
              <p className="study-period">{study.period}</p>
              <p className="study-description">{study.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies; 
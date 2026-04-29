import './Home.css';

const Home = () => {
  return (
    <section className="about-section">

      {/* Introduction + Image + CV Buttons */}
      <article className="user-info">
        <div className="user-image">
          <img src="./img/arman.jpg" alt="Arman Ghaziaskari Naeini" />

          <div className="cv-buttons-vertical">
            <a
              href="./pdfs/english.pdf"
              className="cv-button-vertical"
              target="_blank"
              rel="noopener noreferrer"
            >
              English CV
            </a>
            <a
              href="./pdfs/spanish.pdf"
              className="cv-button-vertical"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spanish CV
            </a>
          </div>
        </div>

        <div className="user-text">
          <h1>GIS & Smart Cities Project Manager </h1>
          <h2>20+ Years Delivering Geospatial & Data-Driven Solutions</h2>

          <p>
          I am a GIS & Data Specialist with over 20 years of experience delivering geospatial solutions for urban planning, territorial analysis, and decision-making.
          </p>
          <p>
          Throughout my career, I have led and coordinated GIS projects end-to-end for public sector organizations, working closely with multidisciplinary teams and stakeholders.
          </p>

          <p>
          My expertise includes spatial analysis, geospatial data infrastructures, and data standardization, ensuring consistency and scalability across complex systems.
          </p>

          <p>
          I combine spatial thinking with Python-based data workflows, ETL automation, and interactive dashboards to deliver efficient, data-driven solutions.
          </p>

          <p>
          Currently expanding my expertise in Big Data and cloud technologies, with a strong focus on Smart Cities and project management.
          </p>

          {/* VALUE SECTION */}
          <div className="value-points">
            <p>✔ 20+ years GIS & Project Experience </p>
            <p>✔ End-to-End Project Management</p>
            <p>✔ Data Standardization & Governance</p>
            <p>✔ Smart City & Urban Planning Solutions</p>
            <p>✔ Python, ETL & Data Workflows</p>
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>

        </div>
      </article>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills Overview</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>GIS & Geospatial</h3>
            <ul>
              <li>ArcGIS, QGIS, GEE</li>
              <li>Spatial Analysis & Remote Sensing</li>
              <li>Geospatial Data Modeling</li>
              <li>GeoPandas</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Project Management</h3>
            <ul>
              <li>Project Planning & Delivery</li>
              <li>Stakeholder Management</li>
              <li>Team Coordination</li>
              <li>Requirements Analysis</li>
              <li>Data Standardization</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Data & Programming</h3>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>ETL Automation</li>
              <li>Power BI</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools & Technologies</h3>
            <ul>
            <li>Git, Docker</li>
            <li>Notion / Jira (familiarity)</li>
          
            </ul>
          </div>

          <div className="skill-card">
            <h3>Additional Knowledge</h3>
            <ul>
            <li>Big Data (Spark, Kafka, Hadoop – basic)</li>
            <li>avaScript, Streamlit</li>
          
            </ul>
          </div>

        </div>
      </section>

    </section>
  );
};

export default Home;
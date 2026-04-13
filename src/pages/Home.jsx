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
              English Curriculum
            </a>
            <a
              href="./pdfs/spanish.pdf"
              className="cv-button-vertical"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spanish Curriculum
            </a>
          </div>
        </div>

        <div className="user-text">
          <h1>GIS & Data Science Specialist</h1>
          <h2>Transforming spatial data into actionable insights</h2>

          <p>
            I am a GIS and Data Science specialist with over 20 years of experience in geospatial analysis and remote sensing.
          </p>

          <p>
            I combine spatial thinking with data science to extract meaningful patterns from complex datasets and support real-world decision-making.
          </p>

          <p>
            My expertise includes spatial analysis, predictive modeling, ETL pipeline design, and building interactive applications using Streamlit and JavaScript.
          </p>

          <p>
            I also have experience in technical proposal development (RFP/RFQ) and collaborating within multidisciplinary teams.
          </p>

          <p>
            I focus on creating practical, data-driven solutions that transform data into clear and actionable insights.
          </p>
        </div>
      </article>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills Overview</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>GIS & Geospatial</h3>
            <ul>
              <li>ArcGIS, QGIS</li>
              <li>Remote Sensing</li>
              <li>Spatial Analysis</li>
              <li>Google Earth Engine</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Data Science & Python</h3>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>ETL Automation</li>
              <li>Power BI</li>
              <li>GeoPandas</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Development & Tools</h3>
            <ul>
              <li>Streamlit, JavaScript</li>
              <li>Git, Docker</li>
              <li>SQL, NoSQL</li>
            </ul>
          </div>

        </div>
      </section>

    </section>
  );
};

export default Home;

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
          <h1>GIS & Data Science Specialist</h1>
          <h2>20+ Years Transforming Spatial Data into Smart Decisions</h2>

          <p>
            I am a GIS and Data Science specialist with 20+ years of experience in geospatial analysis and remote sensing.
          </p>

          <p>
            I combine spatial thinking with Python-based data workflows to extract meaningful patterns and support real-world decision-making.
          </p>

          <p>
            My expertise includes spatial analysis, ETL pipelines, and building interactive data applications.
          </p>

          <p>
            Currently expanding expertise in Big Data and cloud technologies, supported by strong experience in project coordination, technical documentation, and cross-functional collaboration.
          </p>

          {/* VALUE SECTION */}
          <div className="value-points">
            <p>✔ 20+ years GIS experience</p>
            <p>✔ Python & Data Science workflows</p>
            <p>✔ ETL & Automation</p>
            <p>✔ Decision-support systems</p>
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
              <li>Remote Sensing</li>
              <li>Spatial Analysis</li>
              <li>GeoPandas</li>
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
            <h3>Development & Big Data</h3>
            <ul>
              <li>JavaScript, Streamlit</li>
              <li>Spark, Kafka, Hadoop</li>
              <li>Git, Docker</li>
            </ul>
          </div>

        </div>
      </section>

    </section>
  );
};

export default Home;
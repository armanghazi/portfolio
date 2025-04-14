import './Home.css';

const Home = () => {
  return (
    <section className="about-section">
      <article className="user-info">
        <div className="user-image">
          <img src="./img/arman.jpg" alt="Arman Ghaziaskari Naeini" />
        </div>
        <div className="user-text">
        <h1>About Me</h1>
          <p>
          Hello! I'm a passionate technologist with a unique blend of skills in Data Science, Geographic Information Systems (GIS), and Web Development. I thrive on analyzing data to uncover meaningful patterns and insights, which I then transform into practical and innovative solutions.          </p>
          <p>
          My journey into data analysis began with GIS and Remote Sensing, where I developed a strong foundation in interpreting and visualizing spatial data. This experience was further enriched through my deep dive into Data Science, equipping me with advanced tools and techniques for sophisticated analysis and predictive modeling. By combining these analytical skills with Web Development—particularly using JavaScript—I bring data-driven applications to life on the web.          </p>
          <p>
          What truly excites me is building interactive web applications that harness the power of data science to explore and present geographic information. I'm driven to create engaging tools that help organizations gain deeper insights, make informed decisions, and solve real-world challenges effectively.            </p>
          <div className="cv-buttons">
            <a href="./pdfs/english.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              English Curriculum
            </a>
            <a href="./pdfs/spanish.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              Spanish Curriculum
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home; 
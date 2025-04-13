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
            I am a passionate professional with expertise in Geographic Information Systems (GIS),
            Data Science, and Web Development. With a strong academic background and practical
            experience, I have developed a diverse skill set that allows me to tackle complex
            problems and create innovative solutions.
          </p>
          <p>
            My journey in technology began with my studies in GIS and Remote Sensing, which
            provided me with a solid foundation in spatial data analysis and visualization.
            This background, combined with my recent training in Data Science and Web Development,
            enables me to bridge the gap between traditional GIS and modern web technologies.
          </p>
          <p>
            I am particularly interested in developing web applications that integrate spatial
            data analysis and visualization, making complex geographic information accessible
            and interactive for users. My goal is to create tools that help organizations
            make data-driven decisions and solve real-world problems.
          </p>
          <div className="cv-buttons">
            <a href="/img/english.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              English Curriculum
            </a>
            <a href="/img/spanish.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              Spanish Curriculum
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home; 
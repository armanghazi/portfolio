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
          Hello! I'm a passionate technologist with a compelling blend of skills in Data Science,Geographic Information Systems (GIS), and Web Development. I thrive on the process of analyzing data to discover valuable patterns and insights, which I then translate into practical and innovative solutions.
          </p>
          <p>
          My initial foray into data analysis began with GIS and Remote Sensing, where I learned to interpret and visualize spatial data. This foundational understanding has been significantly enhanced by my deep dive into Data Science, providing me with the tools and techniques to perform sophisticated analysis and build predictive models. My ability to combine these analytical skills with Web Development allows me to bring data-driven applications to life on the web.
          </p>
          <p>
          What truly excites me is building interactive web applications that harness the power of data science to explore and present geographic information. I'm driven to create engaging tools that enable organizations to gain deeper understanding from their data,make evidence-based decisions, and solve real-world challenges effectively.
            </p>
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
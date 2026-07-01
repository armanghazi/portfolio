import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import usePageMeta from '../hooks/usePageMeta';
import geoAiBilbao from '../assets/img/geoai_bilbao.svg';
import './Home.css';

const base = import.meta.env.BASE_URL;

const Home = () => {
  const { t } = useTranslation('home');
  usePageMeta('home');

  const skillCards = [
    { key: 'skill_gis' },
    { key: 'skill_pm' },
    { key: 'skill_data' },
    { key: 'skill_tools' },
  ];

  return (
    <section className="about-section">

      {/* Introduction + Image + CV Buttons */}
      <article className="user-info">
        <div className="user-image">
          <img src={`${base}img/arman.webp`} alt="Arman Ghaziaskari Naeini" loading="eager" width="280" height="320" />

          <div className="cv-buttons-vertical">
            <a
              href={`${base}pdfs/English_Arman Ghaziaskari naeini_june.pdf`}
              className="cv-button-vertical"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cv_en')}
            </a>
            <a
              href={`${base}pdfs/espanol_Arman Ghaziaskari naeini_junio.pdf`}
              className="cv-button-vertical"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cv_es')}
            </a>
          </div>
        </div>

        <div className="user-text">
          <h1>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>

          <p>{t('bio_1')}</p>
          <p>{t('bio_2')}</p>
          <p>{t('bio_3')}</p>
          <p>{t('bio_4')}</p>
          <p>{t('bio_5')}</p>

          {/* VALUE SECTION */}
          <div className="value-points">
            <p>{t('value_1')}</p>
            <p>{t('value_2')}</p>
            <p>{t('value_3')}</p>
            <p>{t('value_4')}</p>
            <p>{t('value_5')}</p>
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <Link to="/projects" className="primary-btn">{t('cta_projects')}</Link>
            <Link to="/contact" className="secondary-btn">{t('cta_contact')}</Link>
          </div>
        </div>
      </article>

      {/* Featured Project Section */}
      <section className="featured-section">
        <h2>{t('featured_title')}</h2>
        <div className="featured-card">
          <div className="featured-image">
            <img src={geoAiBilbao} alt={t('featured_project_title')} />
          </div>
          <div className="featured-content">
            <h3>{t('featured_project_title')}</h3>
            <p>{t('featured_project_desc')}</p>
            <div className="featured-cta">
              <a
                href="https://geoai-dashboard.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                {t('featured_cta_demo')}
              </a>
              <Link to="/projects" className="secondary-btn">
                {t('featured_cta_details')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>{t('skills_title')}</h2>

        <div className="skills-container">
          {skillCards.map(({ key }) => {
            const card = t(key, { returnObjects: true });
            return (
              <div key={key} className="skill-card">
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

    </section>
  );
};

export default Home;

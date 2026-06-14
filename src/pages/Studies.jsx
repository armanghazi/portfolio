import { FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Studies.css';

import shahidBeheshtiImg from '../assets/img/shahid-beheshti.jpg';
import isfahanTechImg from '../assets/img/isfahan-tech.jpg';

const EDUCATION_META = [
  { year: '2004', image: shahidBeheshtiImg },
  { year: '2000', image: isfahanTechImg },
];

const Studies = () => {
  const { t } = useTranslation('studies');

  const education = t('education', { returnObjects: true }).map((item, i) => ({
    ...item,
    year: EDUCATION_META[i].year,
    image: EDUCATION_META[i].image,
  }));

  const training = t('training', { returnObjects: true });

  return (
    <section className="studies-section">
      <h1 className="section-title">
        <FaGraduationCap />
        {t('title')}
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
        <h2 className="category-title">{t('training_title')}</h2>
        <div className="studies-grid">
          {training.map((study, index) => (
            <article key={index} className="study-card training-card">
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

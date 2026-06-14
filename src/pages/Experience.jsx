import { FaMapMarkedAlt, FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation('experience');

  const gisExperience  = t('gis',      { returnObjects: true });
  const teachingExperience = t('teaching', { returnObjects: true });

  return (
    <section className="experience-page-section">
      <h1 className="section-title">{t('title')}</h1>

      <article className="experience-section">
        <h2 className="category-title">
          <FaMapMarkedAlt />
          {t('gis_section_title')}
        </h2>
        <div className="experience-list">
          {gisExperience.map((exp, index) => (
            <div key={index} className="experience-item">
              <details className="accordion-item">
                <summary>{exp.period}</summary>
                <ul>
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </article>

      <article className="teaching-section">
        <h2 className="category-title">
          <FaGraduationCap />
          {t('teaching_section_title')}
        </h2>
        <div className="teaching-list">
          {teachingExperience.map((exp, index) => (
            <div key={index} className="teaching-item">
              <details className="accordion-item">
                <summary>{exp.institution}</summary>
                <p>{exp.description}</p>
                <ul>
                  {exp.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Experience;

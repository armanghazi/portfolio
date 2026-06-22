import React from 'react';
import { FaCode, FaDatabase, FaMapMarkedAlt, FaBook, FaTrophy, FaRobot, FaCity } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Projects.css';

// Image imports
import portfolioImg        from '../assets/img/portfolio.png';
import weatherMapImg       from '../assets/img/weather-map.png';
import usaImg              from '../assets/img/usa.png';
import foodImg             from '../assets/img/food.png';
import forecastImg         from '../assets/img/forecast.png';
import hundirImg           from '../assets/img/hundir.png';
import universityImg       from '../assets/img/university.png';
import airImg              from '../assets/img/air.png';
import desertImg           from '../assets/img/desert.png';
import ekhilurImg          from '../assets/img/ekhilur.svg';
import countryImg          from '../assets/img/country.png';
import armanDsLibraryBanner from '../assets/img/arman_ds_library_banner.svg';
import n8nFlowchart        from '../assets/img/n8n_flowchart.png';

const baseUrl = import.meta.env.BASE_URL || '/';
const publicAssetUrl = (path) => `${baseUrl}${path.split('/').map(encodeURIComponent).join('/')}`;

const SOLID_ICONS = new Set(['file-pdf', 'file-alt', 'chart-line', 'map-marked-alt', 'external-link-alt']);
const getLinkIconClass = (link) => {
  if (link.iconClass) return link.iconClass;
  const icon = link.icon || 'link';
  return SOLID_ICONS.has(icon) ? `fas fa-${icon}` : `fab fa-${icon}`;
};

// ── Non-translatable data (URLs, icons, images) ─────────────────────────────

const GEOAI_URLS = [
  {
    image: publicAssetUrl('img/bilbao.jpg'),
    links: [
      { icon: 'linkedin',   url: 'https://www.linkedin.com/feed/update/urn:li:activity:7474883706089046017/' },
      { icon: 'github',     url: 'https://github.com/armanghazi/AI-Based-Smart-City-Air-Quality-Monitoring-and-Forecasting-System-for-Greater-Bilbao' },
      { icon: 'chart-line', url: 'https://geoai-dashboard.streamlit.app/' },
    ],
  },
];

const AI_URLS = [
  {
    image: n8nFlowchart,
    links: [
      { icon: 'github',   url: 'https://github.com/armanghazi/Idealista_Multi_User_Monitoring_Bot' },
      { icon: 'telegram', url: 'https://t.me/Idealista_alquiler_bot' },
      { icon: 'file-pdf', url: publicAssetUrl('pdfs/Idealista con n8n_es.pdf') },
      { icon: 'file-pdf', url: publicAssetUrl('pdfs/Idealista con n8n_en.pdf') },
    ],
  },
];

const DS_URLS = [
  { image: hundirImg,       links: [{ icon: 'github',   url: 'https://github.com/ghaziaskari/Hundir_la_flota/tree/master' }] },
  { image: armanDsLibraryBanner, links: [{ icon: 'github', url: 'https://github.com/armanghazi/ArmanDS' }] },
  { image: universityImg,   links: [{ icon: 'github',   url: 'https://github.com/ghaziaskari/University-Rankings-Analysis' }] },
  { image: airImg,          links: [
    { icon: 'linkedin', url: 'https://www.linkedin.com/posts/arman-ghaziaskari_machinelearning-calidaddelaire-datascience-activity-7286430093579579392-JAQF/' },
    { icon: 'github',   url: 'https://github.com/ghaziaskari/air_pollution_iran' },
  ]},
  { image: desertImg,       links: [
    { icon: 'github',  url: 'https://github.com/ghaziaskari/Postre' },
    { icon: 'globe',   url: 'https://postre2.streamlit.app/' },
    { icon: 'huggingface', url: 'https://huggingface.co/spaces/ghaziaskari/Dessert' },
  ]},
  { image: ekhilurImg,      links: [
    { icon: 'linkedin', url: 'https://www.linkedin.com/posts/julietareynosob_bbkbootcamps-talentodigital-ciberseguridad-activity-7294662135396098048-DPrd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA27lesBTPzbSHAxYtjZloFCoHLyDdPrtAU' },
  ]},
];

const FRONTEND_URLS = [
  { image: countryImg,    links: [
    { icon: 'github', url: 'https://github.com/armanghazi/Endless_Countries_Questions.git' },
    { icon: 'globe',  url: 'https://armanghazi.github.io/Endless_Countries_Questions/' },
  ]},
  { image: forecastImg,   links: [
    { icon: 'github', url: 'https://github.com/armanghazi/tiempo-euskadi.git' },
    { icon: 'globe',  url: 'https://tiempo-euskadi.vercel.app/' },
  ]},
  { image: foodImg,       links: [
    { icon: 'github', url: 'https://github.com/armanghazi/Buscador-deAlimentos' },
    { icon: 'globe',  url: 'https://buscador-de-alimentos.vercel.app/' },
  ]},
  { image: null,          links: [
    { icon: 'github', url: 'https://github.com/armanghazi/Busqueda-de-peliculas-favoritas' },
    { icon: 'globe',  url: 'https://armanghazi.github.io/Busqueda-de-peliculas-favoritas/' },
  ]},
  { image: usaImg,        links: [
    { icon: 'github', url: 'https://github.com/armanghazi/Search-for-Favorite-Movies' },
    { icon: 'globe',  url: 'https://armanghazi.github.io/Search-for-Favorite-Movies/index.html' },
  ]},
  { image: weatherMapImg, links: [
    { icon: 'github', url: 'https://github.com/armanghazi/Simple-Weather-Map' },
    { icon: 'globe',  url: 'https://armanghazi.github.io/Simple-Weather-Map/index.html' },
  ]},
  { image: portfolioImg,  links: [
    { icon: 'linkedin', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7297306010694684672/' },
    { icon: 'globe',    url: 'https://armanghazi.github.io/portfolio_first/index.html' },
  ]},
];

// File names for GIS gallery (order must match locale gis_gallery array)
const GIS_FILES = [
  'General Maps for Statistical Yearbooks & Territorial Planning.png',
  'Rural Census Blocks Mapping.png',
  'Urban Census Blocks Mapping.png',
  'Industrial & Mining Distribution Map.png',
  'Tourism Map & Points of Interest.png',
  'Tourism Suitability Analysis (Suitable  Unsuitable Areas).png',
  'Agricultural Suitability Analysis (Suitable  Unsuitable Areas).png',
  'Industrial & Mining Suitability Analysis (Suitable  Unsuitable Areas).png',
  'Population Suitability & Settlement Potential Analysis (Suitable  Unsuitable Areas).png',
];

// Hardcoded publication content (bibliographic data — not translated)
const publications = {
  english: [
    {
      title: 'Parking Site Selection Management Using Fuzzy Logic and Multicriteria Decision Making',
      authors: 'Farzanmanesh F, Ghaziaskari Naeini A, Makmom Abdullah A.',
      journal: 'EnviromentAsia, Vol.3 (Special issue), 2010, pp.109-116',
      link: 'https://www.researchgate.net/publication/283871418_Parking_site_selection_management_using_Fuzzy_logic_and_Multi_Criteria_Decision_Making',
    },
  ],
  persian: [
    {
      title: 'Evaluation of different methods in construction management of public parking in the commercial center of the Isfahan city by using GIS',
      authors: 'Ghanbari, S., Ghaziaskari Naeini, A.',
      journal: 'Journal of Geography and Environmental Planning, University of Isfahan, Vol.22, No.44, 2011, pp.183-198',
    },
    {
      title: 'Spatial analysis of urban green space with Geographic Information System',
      authors: 'Zare, R., Ghaziaskari Naeini, A.',
      journal: '1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011',
    },
    {
      title: 'Using multi-criteria decision-making models and fuzzy logic for locating urban public Service',
      authors: 'Ghaziaskari Naeini, A., varshosaz, M.',
      journal: '1st National Conference of Sustainable Development and Urban Development, Isfahan-Iran, November, 2011',
    },
    {
      title: 'Using multi-criteria decision-making models and fuzzy logic in the management of site selection of public services in urban',
      authors: 'Ghaziaskari Naeini, A., varshosaz, M',
      journal: '16th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 9-10 May, 2009',
    },
    {
      title: 'Appropriate method for site selection of public parking lots by using GIS',
      authors: 'Ghaziaskari Naeini, A., Varshosaz, M.',
      journal: '11th Geomatics Conference, Tehran, National Cartographic Centre (NCC) of Iran, 5-7 May 2004',
    },
  ],
};

// ── Sub-components ───────────────────────────────────────────────────────────

const GISGalleryImage = ({ file, alt, imageNotFound }) => {
  const [imageSize, setImageSize] = React.useState(null);
  const [hasError, setHasError] = React.useState(false);
  const imageSrc = publicAssetUrl(`img/${file}`);

  if (hasError) {
    return <div className="gis-gallery-missing">{imageNotFound}</div>;
  }

  return (
    <div className="gis-gallery-media">
      <img
        src={imageSrc}
        alt={alt}
        className="gis-gallery-image"
        loading="lazy"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          setImageSize(`${naturalWidth} × ${naturalHeight}`);
        }}
        onError={() => setHasError(true)}
      />
      {imageSize && <span className="gis-image-size-badge">{imageSize}</span>}
      <div className="gis-hover-preview" aria-hidden="true">
        <img src={imageSrc} alt="" className="gis-gallery-image-full" />
        {imageSize && <p className="gis-preview-size">{imageSize}</p>}
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects }) => (
  <div className="projects-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        {project.image && (
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
          </div>
        )}
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className={getLinkIconClass(link)} aria-hidden="true"></i>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ── Helper: merge translated text with hardcoded URL data ────────────────────
function mergeProjects(translatedItems, urlData) {
  return translatedItems.map((item, i) => ({
    title: item.title,
    description: item.description,
    image: urlData[i].image,
    links: item.links.map((text, j) => ({
      text,
      ...urlData[i].links[j],
    })),
  }));
}

// ── Main component ───────────────────────────────────────────────────────────

const Projects = () => {
  const { t } = useTranslation('projects');

  const geoAiSmartCityProjects = mergeProjects(t('geoai',    { returnObjects: true }), GEOAI_URLS);
  const aiAutomationProjects   = mergeProjects(t('ai',       { returnObjects: true }), AI_URLS);
  const dataScienceProjects    = mergeProjects(t('ds',       { returnObjects: true }), DS_URLS);
  const frontendProjects       = mergeProjects(t('frontend', { returnObjects: true }), FRONTEND_URLS);

  const gisGalleryTitles = t('gis_gallery', { returnObjects: true });
  const GIS = GIS_FILES.map((file, i) => ({ file, title: gisGalleryTitles[i] }));

  const honors = t('honors', { returnObjects: true });
  const imageNotFound = t('image_not_found');

  return (
    <section className="projects-section">
      <h1 className="section-title">
        {t('title')}
      </h1>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaCity />
            {t('geoai_title')}
          </summary>
          <ProjectGrid projects={geoAiSmartCityProjects} />
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaMapMarkedAlt />
            {t('gis_gallery_title')}
          </summary>
          <div className="gis-gallery-grid">
            {GIS.map(({ title, file }) => (
              <figure key={file} className="gis-gallery-card">
                <GISGalleryImage file={file} alt={title} imageNotFound={imageNotFound} />
                <figcaption className="gis-gallery-caption">{title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="gis-gallery-actions">
            <a
              href={publicAssetUrl('pdfs/mymaps.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="gis-gallery-button"
            >
              {t('gis_works_en')}
            </a>
            <a
              href={publicAssetUrl('pdfs/mismapas.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="gis-gallery-button"
            >
              {t('gis_works_es')}
            </a>
          </div>
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaRobot />
            {t('ai_title')}
          </summary>
          <ProjectGrid projects={aiAutomationProjects} />
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaDatabase />
            {t('ds_title')}
          </summary>
          <ProjectGrid projects={dataScienceProjects} />
        </details>
      </article>

      <article>
        <details className="section-accordion">
          <summary className="category-title">
            <FaCode />
            {t('frontend_title')}
          </summary>
          <ProjectGrid projects={frontendProjects} />
        </details>
      </article>

      <article className="publications-section">
        <details className="section-accordion">
          <summary className="category-title">
            <FaBook />
            {t('publications_title')}
          </summary>
          <div className="publications-list">
            <div className="publications-item">
              <h3>{t('publications_en_label')}</h3>
              <ul>
                {publications.english.map((pub, index) => (
                  <li key={index}>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                    , {pub.authors} <em>{pub.journal}</em>
                  </li>
                ))}
              </ul>
            </div>
            <div className="publications-item">
              <h3>{t('publications_fa_label')}</h3>
              <ul>
                {publications.persian.map((pub, index) => (
                  <li key={index}>
                    {pub.title}, {pub.authors} <em>{pub.journal}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </article>

      <article className="honors-section">
        <details className="section-accordion">
          <summary className="category-title">
            <FaTrophy />
            {t('honors_title')}
          </summary>
          <ul className="honors-list">
            {honors.map((honor, index) => (
              <li key={index} className="honors-item">
                <h3>{honor.honor}</h3>
                <p>{honor.details}</p>
              </li>
            ))}
          </ul>
        </details>
      </article>
    </section>
  );
};

export default Projects;

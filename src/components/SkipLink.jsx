import { useTranslation } from 'react-i18next';

const SkipLink = () => {
  const { t } = useTranslation('common');
  return (
    <a href="#main-content" className="skip-link">
      {t('skip_to_content')}
    </a>
  );
};

export default SkipLink;

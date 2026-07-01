import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const usePageMeta = (namespace) => {
  const { t } = useTranslation(namespace);

  useEffect(() => {
    document.title = t('page_title');
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('page_desc'));
  }, [t]);
};

export default usePageMeta;

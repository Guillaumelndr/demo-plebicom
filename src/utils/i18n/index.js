import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { initReactI18next } from 'react-i18next'

import resources from './resources'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    saveMissing: true,
    fallbackLng: ['en'],
    supportedLngs: ['en', 'fr'],
    defaultNS: 'translation',
    fallbackNS: 'translation',
    ns: ['translation', 'navigation', 'word'],
    debug: false,
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupQuerystring: 'locale'
    },
    appendNamespaceToMissingKey: true
  })

export default i18n

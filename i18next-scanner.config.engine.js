module.exports = {
  input: [
    'src/**/*.{js,jsx}',
    '!src/utils/i18n/**',
    '!src/assets/**'
  ],
  options: {
    removeUnusedKeys: true,
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.jsx']
    },
    trans: false,
    lngs: ['en', 'fr'],
    ns: [
      'translation',
      'navigation',
      'word'
    ],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: '',
    resource: {
      loadPath: 'src/settings/translations/{{lng}}/{{ns}}.json',
      savePath: 'src/settings/translations/{{lng}}/{{ns}}.json',
      jsonIndent: 4,
      lineEnding: '\n'
    },
    nsSeparator: ':',
    keySeparator: '.'
  }
}

const defaultPresets = {
  list: [
      {
        label: 'email',
        fields: {
          utmSource: [
            {
              value: 'email-eMS',
              label: 'Emarsys'
            },
            {
              value: 'email-MT',
              label: 'Metak'
            },
            {
              value: 'email-fbs',
              label: 'Fbs'
            },
            {
              value: 'email-metak',
              label: 'email-metak'
            },
            {
              value: 'email-gr360',
              label: 'GetResponse'
            }
          ],
          place: ['header', 'body', 'footer']
        }
      },
      {
        label: 'push',
        fields: {
          utmSource: [
            {
              value: 'push-MT',
              label: 'Metak'
            },
            {
              value: 'webpush-SP',
              label: 'SP'
            },
            {
              value: 'webpush-OSignal',
              label: 'Signal'
            }
          ],
          place: ['pfbscom', 'esfbscom', 'tafbscom', 'ptfbscom', 'fbsae', 'vnfbscom', 'kofbscom', 'fbsmycom', 'fbscn', 'fbscombd', 'fbscoth', 'idnfbscom', 'fbscom', 'laofbscom', 'fbscommm', 'fbsxpk', 'fbsforex', 'myjpfbscom', 'myesfbscom', 'mytafbscom', 'myptfbscom', 'myfbsae', 'myvnfbscom']
        }
      }
  ],
  common: {
    fields: {
      utmCampaign: ['ru', 'id', 'th', 'ja', 'bn', 'pt', 'es', 'cn', 'vi', 'ms', 'en', 'ko', 'ar', 'lo', 'ta', 'ur', 'my', 'tr'],
      utmContent: ['payments', 'information', 'statement', 'promo', 'help', 'news', 'vip', 'partners', 'seminar'],
      date: '',
      content: ''
    }
  },
  activePreset: 'push'
};

export default defaultPresets;

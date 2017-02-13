const defaultPresets = {
  list: [
      {
        label: 'email',
        fields: [
          {
            title: 'utmSource',
            type: 'select',
            values: [
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
            ]
          },
          {
            title: 'place',
            type: 'text',
            values: [
              {
                value: 'header',
                label: 'Header'
              },
              {
                value: 'body',
                label: 'Body'
              },
              {
                value: 'footer',
                label: 'Footer'
              }
            ]
          }
        ]
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
  activePreset: 'email'
};

export default defaultPresets;

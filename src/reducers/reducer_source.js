export default function () {
  return {
    type: {
      email: {
        fields: {
          utmSource: ['email-eMS', 'email-MT', 'email-fbs', 'email-metak', 'email-gr360'],
          place: ['header', 'body', 'footer']
        }
      },
      push: {
        fields: {
          utmSource: ['push-MT', 'webpush-SP', 'webpush-OSignal'],
          place: ['pfbscom', 'esfbscom', 'tafbscom', 'ptfbscom', 'fbsae', 'vnfbscom', 'kofbscom', 'fbsmycom', 'fbscn', 'fbscombd', 'fbscoth', 'idnfbscom', 'fbscom', 'laofbscom', 'fbscommm', 'fbsxpk', 'fbsforex', 'myjpfbscom', 'myesfbscom', 'mytafbscom', 'myptfbscom', 'myfbsae', 'myvnfbscom']
        }
      }
    },
    common: {
      fields: {
        utmCampaign: ['ru', 'id', 'th', 'ja', 'bn', 'pt', 'es', 'cn', 'vi', 'ms', 'en', 'ko', 'ar', 'lo', 'ta', 'ur', 'my'],
        utmContent: ['payments', 'information', 'statement', 'promo', 'help', 'news', 'vip', 'partners', 'seminar'],
        date: '',
        content: ''
      }
    }
  };
}

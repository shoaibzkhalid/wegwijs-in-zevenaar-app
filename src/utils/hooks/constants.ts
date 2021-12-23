import { HomeOption } from 'models/generalTypes'
import { IMAGES } from 'theme'

export const API_URL = 'https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/'

export const homeOptions: HomeOption[] = [
  {
    id: '1',
    title: 'NIEUWS',
    icon: IMAGES.icon1,
    activeIcon: IMAGES.icon1_hover,
    screenName: 'NewsList',
    subject: null,
  },

  {
    id: '3',
    title: 'ACTIVITEITEN & IDEEËN',
    icon: IMAGES.icon3,
    activeIcon: IMAGES.icon3_hover,
    url: 'Activity',
    subject: null,
    screenName: null,
  },
  {
    id: '4',
    title: 'FINANCIËN',
    icon: IMAGES.icon4,
    activeIcon: IMAGES.icon4_hover,
    screenName: 'SubjectList',
    subject: {
      id: '1',
      title: 'Financiën',
      description: 'Informatie over financiële zaken',
      post: {},
    },
  },
  {
    id: '5',
    title: 'GEZOND LEVEN',
    icon: IMAGES.icon5,
    activeIcon: IMAGES.icon5_hover,
    screenName: 'SubjectList',

    subject: {
      id: '4',
      title: 'Gezond leven',
      description:
        'Informatie over verschillende onderwerpen die bij kunnen dragen op een gezond leven en persoonlijke gezondheid.',
      post: {},
    },
  },
  {
    id: '6',
    title: 'WELZIJN & ONDERSTEUNING',
    icon: IMAGES.icon6,
    activeIcon: IMAGES.icon6_hover,
    screenName: 'SubjectList',

    subject: {
      id: '5',
      title: 'Welzijn & Ondersteuning',
      description: 'Informatie op het terrein van welzijn en persoonlijke ondersteuning',
      post: {},
    },
  },
  {
    id: '7',
    title: 'ONTMOETEN',
    icon: IMAGES.icon7,
    activeIcon: IMAGES.icon7_hover,
    screenName: 'SubjectList',
    subject: {
      id: '6',
      title: 'Ontmoeten',
      description:
        'Informatie over items die in het kader van welzijn te maken hebben met elkaar ontmoeten.\n',
      post: {},
    },
  },
  {
    id: '8',
    title: 'OPGROEIEN & OPVOEDEN',
    icon: IMAGES.icon8,
    activeIcon: IMAGES.icon8_hover,
    screenName: 'SubjectList',
    subject: {
      id: '2',
      title: 'Opgroeien & Opvoeden',
      description: 'Informatie dat kan helpen bij het opvoeden en groeiontwikkeling van kinderen',
      post: {},
    },
  },
  {
    id: '9',
    title: 'HULP IN HUIS',
    icon: IMAGES.icon9,
    activeIcon: IMAGES.icon9_hover,
    screenName: 'SubjectList',
    subject: {
      id: '8',
      title: 'Hulp in huis',
      description: 'Informatie om zo lang als mogelijk zelfstandig thuis te kunnen wonen',
      post: {},
    },
  },
  {
    id: '2',
    title: 'GIDS',
    icon: IMAGES.icon2,
    activeIcon: IMAGES.icon2_hover,
    subject: null,
    screenName: null,
  },
]

export interface ServiceItem {
  id: string
  title: string
  description?: string
  iconKey: string
}

export interface ServiceCategory {
  id: string
  tagline: string
  title: string
  subtitle: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'installation',
    tagline: 'Greitai, patikimai, be vargo!',
    title: 'Elektros Instaliacija',
    subtitle: 'Nuo kabelių tiesimo iki ESO prijungimo',
    services: [
      { id: 'eso-rights', title: 'ESO rangovo teisės', description: 'Suteikta teisė vykdyti darbus ESO tinkle', iconKey: 'eso-rights' },
      { id: 'eso-document', title: 'ESO akto parengimas', description: 'Rangovo akto parengimas ir pridavimas', iconKey: 'eso-document' },
      { id: 'cable', title: 'Kabelių tiesimas', description: 'Elektros kabelių tiesimas ir montavimas', iconKey: 'cable' },
      { id: 'grounding', title: 'Įžeminimas ir žaibosauga', description: 'Įžeminimo ir žaibosaugos įrengimas', iconKey: 'grounding' },
      { id: 'apartment', title: 'Daugiabučių modernizavimas', description: 'Elektros instaliacijos atnaujinimas', iconKey: 'apartment' },
      { id: 'industrial', title: 'Pramoninių pastatų instaliacijos', description: 'Administracinių ir pramoninių pastatų darbai', iconKey: 'industrial' },
    ],
  },
  {
    id: 'rental',
    tagline: 'Technikos sprendimai jūsų projektui!',
    title: 'Technikos Nuoma',
    subtitle: 'Statybinė technika su operatoriumi',
    services: [
      { id: 'crane', title: 'Statybinės technikos nuoma', iconKey: 'crane' },
      { id: 'excavator', title: 'Mini ekskavatoriaus nuoma', description: 'Nuoma su operatoriumi', iconKey: 'excavator' },
      { id: 'trench', title: 'Tranšėjų kasimas', description: 'Kabeliams, vandentiekiui', iconKey: 'trench' },
      { id: 'drill', title: 'Skylių gręžimas', description: 'Tvorai, pamatui iki 2m', iconKey: 'drill' },
    ],
  },
  {
    id: 'maintenance',
    tagline: 'Elektra be galvos skausmo!',
    title: 'Elektros Tinklo Priežiūra ir Dokumentacija',
    subtitle: 'Užtikriname saugumą ir atitiktį standartams',
    services: [
      { id: 'documentation', title: 'Dokumentacijos rengimas', description: 'Techninės dokumentacijos paruošimas', iconKey: 'documentation' },
      { id: 'maintenance', title: 'Įrenginių eksploatacija', description: 'Elektros įrenginių priežiūra', iconKey: 'maintenance' },
      { id: 'responsibility', title: 'Atsakomybė už elektros ūkį', description: 'Vartotojo elektros ūkio valdymas', iconKey: 'responsibility' },
    ],
  },
  {
    id: 'testing',
    tagline: 'Su mumis - paprasta!',
    title: 'Elektros Įrenginių Testavimas',
    subtitle: 'Identifikuojame problemas ir užtikriname kokybę',
    services: [
      { id: 'testing', title: 'Bandymai ir matavimai', description: 'Elektros įrenginių testavimas', iconKey: 'testing' },
      { id: 'insulation', title: 'Izoliacijos matavimas', description: 'Kabelių izoliacijos ir kontaktų varžos', iconKey: 'insulation' },
      { id: 'resistance', title: 'Įžeminimo varžos matavimas', description: 'Žaibosaugos ir įžeminimo matavimai', iconKey: 'resistance' },
    ],
  },
]

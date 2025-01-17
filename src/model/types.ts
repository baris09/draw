import countries from 'data/countries.json'
import clubs from 'data/clubs.json'

export type Country = keyof typeof countries

export type UefaCountry = keyof typeof clubs

export type Confederation = 'UEFA' | 'AFC' | 'CAF' | 'CONMEBOL' | 'CONCACAF' | 'OFC'

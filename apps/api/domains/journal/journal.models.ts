export interface Poop {
  size: 'none' | 'small' | 'medium' | 'large'
  consistency: 'runny' | 'soft' | 'medium' | 'hard'
  site_location: null // TBD
  date_time_iso: string // ISO string
}

export interface Journal {
  poops: Poop[]
  owner: null // TBD
}


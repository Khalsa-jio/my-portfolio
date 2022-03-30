// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Website = {
  websiteId: number
  author: string
  age: number
  email: string
  phone: string
  position_1?: string
  position_2?: string
  Address?: {
    Country: string
    City: string
    Street?: string
  }
  about: string
  languages: {
    name: string
    level: number
  }[]
  coding: {
    name: string
    level: number
  }[]
  knowledge: {
    name: string
  }[]
  social: {
    linkedIn: string
    github: string
  }
  menu: {
    name: string
    link: string
  }[]
  history: {
    title: string
    data: string
    extra: boolean
  }[]
  services: {
    title: string
    content: string
  }[]
  projects: {
    title: string
    content: string
    image: string
    link: string
  }[]
}

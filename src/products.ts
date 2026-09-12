export type Category = 'Scrapbook' | 'Valentine' | 'Social Media' | 'Graduation' | 'Girlfriend Day'

export type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: Category[]
  image: string
  badge?: string
  description: string
  lynkUrl: string
}

const lynkProfile = 'https://lynk.id/ravpunzeel'

export const products: Product[] = [
  {
    id: 'valentines-scrapbook',
    name: "Valentine’s Scrapbook",
    price: 20000,
    originalPrice: 30000,
    category: ['Scrapbook', 'Valentine'],
    image: '/images/valentines-scrapbook.png',
    badge: 'Best seller',
    description: 'Template scrapbook A5 bernuansa maroon yang siap digunakan dan diedit di Canva Free maupun Pro.',
    lynkUrl: 'https://lynk.id/ravpunzeel/e5zj103jx00x/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
  {
    id: 'pink-valentines-scrapbook',
    name: "Pink Valentine’s Scrapbook",
    price: 20000,
    originalPrice: 30000,
    category: ['Scrapbook', 'Valentine'],
    image: '/images/pink-valentines-scrapbook.png',
    badge: 'Sale',
    description: 'Koleksi scrapbook Valentine serba pink dengan 16 halaman yang mudah dipersonalisasi di Canva.',
    lynkUrl: 'https://lynk.id/ravpunzeel/x5p6140vmzjk/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
  {
    id: 'simple-scrapbook',
    name: 'Simple Scrapbook',
    price: 12000,
    category: ['Scrapbook', 'Valentine'],
    image: '/images/simple-scrapbook.png',
    description: 'Template scrapbook sederhana dengan kolase romantis merah, cream, dan gaya vintage.',
    lynkUrl: 'https://lynk.id/ravpunzeel/xepl712mn70r/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
  {
    id: 'instagram-banner',
    name: 'Banner Siding Tema Instagram',
    price: 12500,
    originalPrice: 25000,
    category: ['Social Media'],
    image: '/images/instagram-banner.png',
    badge: 'Sale',
    description: 'Template banner kreatif bertema tampilan Instagram, siap langsung digunakan dan diedit.',
    lynkUrl: 'https://lynk.id/ravpunzeel/229mj0vpo7wk/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
  {
    id: 'gmaps-banner',
    name: 'Template Banner Siding Tema GMAPS',
    price: 12500,
    category: ['Graduation'],
    image: '/images/gmaps-banner.png',
    description: 'Template banner wisuda bergaya Google Maps dengan pin lokasi dan profil lulusan.',
    lynkUrl: 'https://lynk.id/ravpunzeel/05m7oqznxr4q/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
  {
    id: 'girlfriend-day',
    name: 'Digital Scrapbook Girlfriend Day Edition',
    price: 22500,
    category: ['Scrapbook', 'Girlfriend Day'],
    image: '/images/girlfriend-day.png',
    badge: 'New',
    description: 'Digital scrapbook Girlfriend Day bernuansa dusty pink, cream, dan maroon dengan 12 halaman.',
    lynkUrl: 'https://lynk.id/ravpunzeel/2rjlz0gyo495/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9',
  },
]

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)

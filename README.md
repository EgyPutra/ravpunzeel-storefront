# Ravpunzeel Storefront

Etalase brand untuk produk digital Ravpunzeel. Website menampilkan katalog dan mengarahkan checkout ke Lynk.id.

## Menjalankan project

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
```

## Mengganti link produk Lynk

Buka `src/products.ts`, lalu ubah nilai `lynkUrl` pada setiap produk menjadi URL halaman produk Lynk yang tepat.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Pilih framework **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

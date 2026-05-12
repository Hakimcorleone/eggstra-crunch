# Eggstra Crunch Website

Static one-page sales website untuk Eggstra Crunch — Maruku Salted Egg.

## Struktur folder

```txt
eggstra-crunch-portfolio/
  index.html
  css/
    style.css
  js/
    main.js
  assets/
    images/
    icons/
      favicon.svg
  README.md
```

## Cara buka website

Double click `index.html` dan buka di browser.

## Cara upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua file dan folder dalam projek ini.
3. Pergi ke `Settings` > `Pages`.
4. Pilih branch `main` dan folder `/root`.
5. Save dan tunggu link GitHub Pages keluar.

## Cara edit nombor WhatsApp

Dalam `index.html`, cari nombor:

- `60186959795` untuk Hakim
- `601116330149` untuk Namirah

Dalam `js/main.js`, nombor seller diambil daripada pilihan dropdown dalam borang.

## Cara edit harga

Dalam `index.html`, cari teks `RM24` dan tukar ikut harga baru.

Dalam `js/main.js`, cari baris:

```js
const total = quantity * 24;
```

Tukar `24` kepada harga baru.

## Cara edit testimoni

Buka `js/main.js`, cari array `testimonials`, kemudian tukar nama dan ayat review.

## Cara masukkan logo/poster/gambar sebenar

1. Masukkan gambar ke folder `assets/images/`.
2. Dalam `index.html`, tukar bahagian visual placeholder di `.packet-visual` kepada tag image, contoh:

```html
<img src="assets/images/poster.jpg" alt="Poster Eggstra Crunch Maruku Salted Egg" />
```

3. Kalau nak Open Graph image untuk share WhatsApp/Facebook, letak gambar bernama `og-placeholder.jpg` dalam `assets/images/`, atau tukar path dalam meta tag:

```html
<meta property="og:image" content="assets/images/og-placeholder.jpg" />
```

## Nota design

- Guna HTML, CSS, JavaScript vanilla sahaja.
- Tiada Bootstrap, Tailwind, React, jQuery, atau build tools.
- Responsive untuk mobile.
- Ada dark mode, scroll animation, testimonial slider, FAQ, sticky navbar, floating WhatsApp, dan borang auto WhatsApp.

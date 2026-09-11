# 👨‍💻 Portfolio — Azriel Aurizal Ednisia (React + TypeScript)

Versi **full TypeScript**: seluruh struktur & konten halaman dirender lewat komponen React (`.tsx`), bukan ditulis langsung sebagai HTML statis. `index.html` di root hanyalah shell kosong (`<div id="root">`) yang diisi oleh JavaScript hasil kompilasi.

---

## ✨ Fitur (sama seperti versi sebelumnya, ditulis ulang jadi komponen)

- 🌗 Dark / Light mode (`useTheme` hook)
- 🌐 Dwibahasa ID/EN dengan efek fade saat berganti bahasa (`LanguageContext` + `I18nText`)
- 🧩 Skills dalam 3 kategori (Languages, Databases, Tools)
- 🎠 Carousel horizontal untuk Project & Sertifikat (`useCarousel` hook, digeser lewat drag/swipe/keyboard)
- 🖼️ Lightbox sertifikat (`CertModal`)
- 📱 Navigasi mobile (hamburger menu)
- ✨ Scroll reveal animation (`useReveal` hook, IntersectionObserver)
- 🎯 Scroll-spy nav-link aktif (`useScrollSpy` hook)
- ♿ Aksesibel — skip link, fokus terlihat, aria-label sesuai bahasa aktif

---

## 🗂️ Struktur Folder

```
portfolio-azriel-react-ts/
├── index.html              # Shell HTML minimal (hanya <div id="root">)
├── public/
│   ├── azriel.png
│   └── sertifikat1.png
├── src/
│   ├── main.tsx             # Entry point, mount React ke #root
│   ├── App.tsx              # Merakit semua section
│   ├── index.css            # Seluruh styling (dipindah apa adanya dari versi lama)
│   ├── types.ts             # Tipe bersama (Theme, LangCode, Project, dll)
│   ├── vite-env.d.ts
│   ├── i18n/
│   │   ├── translations.ts  # Kamus teks ID/EN
│   │   ├── LanguageContext.tsx
│   │   └── I18nText.tsx     # Komponen teks terjemahan (pengganti data-i18n)
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useReveal.ts
│   │   ├── useCarousel.ts
│   │   └── useScrollSpy.ts
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Certificates.tsx
│       ├── CertModal.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vercel.json
├── LICENSE
└── README.md
```

---

## 🚀 Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173).

### Build untuk produksi

```bash
npm run build      # tsc -b && vite build → hasil di folder dist/
npm run preview    # coba hasil build secara lokal
```

---

## ☁️ Deploy ke Vercel

Project ini sudah 100% static (hasil build Vite), jadi Vercel tinggal menyajikan folder `dist/`. Konfigurasi ada di `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

Cara deploy:
1. Push project ini ke GitHub.
2. Di [vercel.com](https://vercel.com) → **Add New → Project** → pilih repo ini.
3. Vercel otomatis mendeteksi framework **Vite** dan membaca `vercel.json` — klik **Deploy**.

Atau lewat CLI:
```bash
npm install -g vercel
vercel --prod
```

---

## 🛠️ Teknologi

| Bagian     | Teknologi                          |
|------------|-------------------------------------|
| UI         | React 18 + TypeScript (.tsx)        |
| Build tool | Vite 5                              |
| Styling    | CSS3 (custom properties, animasi)   |
| Deploy     | Vercel (static hosting)             |
| Font       | Inter (Google Fonts)                |

---

## 📬 Kontak

- ✉️ Email: azrielaurizal27@gmail.com
- 📸 Instagram: [@azrieledn](https://instagram.com/azrieledn)
- 💻 GitHub: [azriel-ae](https://github.com/azriel-ae)
- 💬 WhatsApp: [Chat via WhatsApp](https://wa.me/6281227596045)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi yang tercantum di [LICENSE](./LICENSE).

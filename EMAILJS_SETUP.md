# EmailJS Setup Guide - Contact Form Configuration

## Kenapa EmailJS?
EmailJS bekerja langsung dari browser (client-side) sehingga lebih reliable untuk mobile dan tidak perlu backend API. Cocok untuk portfolio yang di-deploy di Vercel, Netlify, dll.

## Langkah Setup (5 menit)

### 1. Buat Akun EmailJS
1. Pergi ke [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klik **Sign Up** (gratis untuk 200 emails/bulan)
3. Verify email Anda

### 2. Add Email Service
1. Login ke [Dashboard EmailJS](https://dashboard.emailjs.com/)
2. Klik **Email Services** di sidebar
3. Klik **Add New Service**
4. Pilih **Gmail**
5. Klik **Connect Account** dan login dengan Gmail Anda (wharisuseno2007@gmail.com)
6. Setelah connected, copy **Service ID** (contoh: `service_abc123`)

### 3. Create Email Template
1. Klik **Email Templates** di sidebar
2. Klik **Create New Template**
3. Edit template dengan format berikut:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. **PENTING:** Set `to_email` di template settings ke: `wharisuseno2007@gmail.com`
5. Save template dan copy **Template ID** (contoh: `template_xyz456`)

### 4. Get Public Key
1. Klik **Account** di sidebar
2. Scroll ke bagian **API Keys**
3. Copy **Public Key** (contoh: `Xk9pQr2sT3uV4wX5`)

### 5. Update .env.local File
Buka file `.env.local` dan ganti nilai berikut dengan data EmailJS Anda:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123        # Ganti dengan Service ID Anda
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz456      # Ganti dengan Template ID Anda
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Xk9pQr2sT3uV4wX5      # Ganti dengan Public Key Anda
```

### 6. Update Environment Variables di Hosting

**Jika deploy di Vercel:**
1. Pergi ke [Vercel Dashboard](https://vercel.com/dashboard)
2. Pilih project `senz-portfolio`
3. Settings → Environment Variables
4. Tambahkan 3 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_abc123`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_xyz456`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `Xk9pQr2sT3uV4wX5`
5. Redeploy project

**Jika deploy di Netlify:**
1. Pergi ke [Netlify Dashboard](https://app.netlify.com/)
2. Pilih site `senz-portfolio`
3. Site settings → Environment variables
4. Tambahkan 3 variables yang sama seperti di atas
5. Trigger new deploy

### 7. Test Contact Form
1. Restart development server: `npm run dev`
2. Buka http://localhost:3000
3. Test contact form - seharusnya berhasil!
4. Test di mobile setelah deploy

## Troubleshooting

### Form masih gagal di mobile?
- Pastikan sudah redeploy setelah menambahkan environment variables
- Cek browser console untuk error messages
- Pastikan EmailJS quota belum habis (200 emails/month di free plan)

### Email tidak masuk?
- Cek spam folder di wharisuseno2007@gmail.com
- Pastikan template settings sudah benar
- Test manual di EmailJS dashboard

### Masih pakai Nodemailer?
Tidak masalah! Code saya sudah buat fallback:
- Jika EmailJS configured → akan pakai EmailJS
- Jika EmailJS tidak configured → akan pakai Nodemailer API

Tapi untuk mobile/production, **EmailJS lebih reliable!**

## Catatan Penting
- ✅ EmailJS **gratis** untuk 200 emails/bulan
- ✅ Bekerja di **mobile & desktop**
- ✅ Tidak perlu backend API
- ✅ Mudah di-setup di hosting (Vercel/Netlify)
- ✅ Lebih secure karena credentials di EmailJS dashboard

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/

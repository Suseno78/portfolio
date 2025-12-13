# Senz Portfolio Website

A modern, Gen-Z style single-page portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## 🎨 Design Overview

- **Style**: Modern, clean, slightly playful with Neobrutalism/Glassmorphism elements
- **Color Palette**: Soft pastel colors (mint, purple, peach) - NOT white backgrounds
- **Features**: Dark mode support, multi-language (EN/ID/JP/ES), smooth animations
- **Fully Responsive**: Mobile-first design

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS + Nodemailer

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Configure your email service (see Email Setup section below)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

### Option 1: EmailJS (Frontend Only - Easiest)

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with these parameters:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `message` - Message content
   - `to_email` - Recipient email (wharisuseno2007@gmail.com)
4. Update `components/Contact.tsx` with your credentials:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Option 2: Nodemailer (Backend - More Reliable)

1. For Gmail, enable 2-Factor Authentication
2. Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Add to `.env.local`:
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```
4. Update Contact form to use API route instead:
   ```typescript
   const response = await fetch('/api/send-email', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

## 🖼️ Adding Your Portrait Images

Replace placeholder images in the `public` folder:
- `portrait-1.jpg` (400x400px recommended)
- `portrait-2.jpg`
- `portrait-3.jpg`
- `portrait-4.jpg`
- `portrait-5.jpg`

## 🎨 Adding Project Screenshots

Add project images to `public` folder and update filenames in `lib/data.ts`:
- `project-ai-chatbot.jpg`
- `project-book-catalog.jpg`
- `project-lifehub.jpg`
- `project-cms.jpg`
- `project-automation.jpg`
- `project-design-system.jpg`

## 🌐 Translation

All translations are in `lib/translations.ts`. Currently supports:
- English (en)
- Indonesian (id)
- Japanese (jp)
- Spanish (es)

To add more languages, extend the `translations` object.

## 🎯 Sections

1. **Hero** - Main introduction with portrait gallery
2. **About** - Bio and tech skills
3. **Projects** - Project cards with modal details
4. **Skills** - Experience categorized by type
5. **Contact** - Functional contact form
6. **Socials** - Social media links
7. **Footer** - Credits

## 🎨 Color Palette

Light mode uses soft, aesthetic colors:
- Primary (Mint): `#F0FDF9` to `#14B89A`
- Accent (Purple): `#FAF5FF` to `#9333EA`
- Peach: `#FFF7ED` to `#F97316`

Dark mode automatically adjusts for optimal contrast.

## 🔧 Customization

### Update Personal Info

1. **Name & Bio**: Edit `lib/translations.ts`
2. **Skills**: Edit `components/About.tsx` and `components/Skills.tsx`
3. **Projects**: Edit `lib/data.ts`
4. **Social Links**: Edit `components/Socials.tsx`
5. **Email**: Already set to `wharisuseno2007@gmail.com`

### Change Colors

Edit `tailwind.config.js` to customize color schemes.

## 📱 Social Media Links

Update in `components/Socials.tsx`:
- Instagram: Replace `yourusername`
- WhatsApp: Replace `yourphonenumber`
- Email: Already configured

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- etc.

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🎯 Features Checklist

- ✅ Single-page application
- ✅ Smooth scroll navigation
- ✅ Dark mode toggle
- ✅ Multi-language support (EN/ID/JP/ES)
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Working contact form (2 implementations)
- ✅ Project modal system
- ✅ Soft pastel color scheme
- ✅ Modern UI/UX

## 📄 License

Personal portfolio project for Wahyu Hari Suseno (Senz).

## 🙏 Credits

Designed & Built by Senz

---

**Note**: Make sure to add your own images and configure email service before deploying!

# 📋 DEPLOYMENT GUIDE

## Quick Summary

This portfolio website is fully functional and ready to deploy. Follow this guide to get it live.

## ✅ Pre-Deployment Checklist

### 1. Update Personal Information

- [ ] Add your portrait images to `/public` folder (portrait-1.jpg through portrait-5.jpg)
- [ ] Add project screenshots to `/public` folder
- [ ] Update social media links in `components/Socials.tsx`
- [ ] Review and customize bio/content in `lib/translations.ts`
- [ ] Verify email address is correct (currently: wharisuseno2007@gmail.com)

### 2. Configure Email Service

Choose ONE of these options:

#### Option A: EmailJS (Easiest - No Backend Required)

1. Sign up at https://www.emailjs.com/
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   ```
   {{from_name}}
   {{from_email}}
   {{message}}
   ```
4. Update `components/Contact.tsx` lines 30-32 with your credentials
5. Test the contact form locally

#### Option B: Nodemailer (More Reliable - Requires Environment Variables)

1. Generate Gmail App Password:
   - Enable 2FA on your Google account
   - Go to: https://myaccount.google.com/apppasswords
   - Create app password for "Mail"
2. Create `.env.local` file:
   ```
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_16_character_app_password
   ```
3. Update `components/Contact.tsx` to use the API route (see code below)

**Modified Contact.tsx for Nodemailer:**
```typescript
// Replace the handleSubmit function in Contact.tsx with:
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Failed to send');

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  } catch (error) {
    console.error('Email error:', error);
    setStatus('error');
    setTimeout(() => setStatus('idle'), 5000);
  }
};
```

## 🚀 Deployment Platforms

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Free tier includes everything you need
- Best performance for Next.js apps

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Add Environment Variables (if using Nodemailer)**
   - Go to Project Settings → Environment Variables
   - Add:
     - `EMAIL_USER`: your_gmail@gmail.com
     - `EMAIL_PASS`: your_app_password
   - Redeploy

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

**Your site will be live at:** `https://your-project.vercel.app`

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Environment Variables**
   - Site Settings → Environment Variables
   - Add EMAIL_USER and EMAIL_PASS

### Option 3: Self-Hosted (VPS/Cloud)

**Requirements:**
- Node.js 18+
- PM2 or similar process manager

**Steps:**

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "senz-portfolio" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
# EmailJS (if using Option A)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Nodemailer (if using Option B)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**Important:** Never commit `.env.local` to Git!

## 🖼️ Image Assets

### Portrait Images (Hero Section)
Place these in `/public`:
- `portrait-1.jpg` - 400x400px
- `portrait-2.jpg` - 400x400px
- `portrait-3.jpg` - 800x800px (featured, larger)
- `portrait-4.jpg` - 400x400px
- `portrait-5.jpg` - 400x400px

### Project Screenshots
Place these in `/public`:
- `project-ai-chatbot.jpg` - 1200x675px (16:9)
- `project-book-catalog.jpg` - 1200x675px
- `project-lifehub.jpg` - 1200x675px
- `project-cms.jpg` - 1200x675px
- `project-automation.jpg` - 1200x675px
- `project-design-system.jpg` - 1200x675px

## 🧪 Testing Before Deployment

1. **Local Testing**
   ```bash
   npm run dev
   ```
   - Test all sections
   - Check responsive design (mobile, tablet, desktop)
   - Test dark mode toggle
   - Test language switcher
   - **Test contact form!**

2. **Production Build Test**
   ```bash
   npm run build
   npm start
   ```
   - Verify everything works in production mode

3. **Browser Testing**
   - Chrome/Edge
   - Firefox
   - Safari (if possible)
   - Mobile browsers

## 📱 SEO & Performance

The site is already optimized with:
- ✅ Server-side rendering (Next.js)
- ✅ Optimized images (use next/image if adding custom images)
- ✅ Fast animations (Framer Motion)
- ✅ Responsive design
- ✅ Semantic HTML
- ✅ Meta tags configured

**Optional Improvements:**
- Add favicon to `/public/favicon.ico`
- Add Open Graph images for social sharing
- Configure `app/layout.tsx` metadata

## 🔧 Troubleshooting

### Contact Form Not Working

1. Check browser console for errors
2. Verify email credentials are correct
3. For Gmail:
   - Make sure 2FA is enabled
   - Use App Password, not regular password
   - Check "Less secure app access" is ON
4. Test with EmailJS first (easier to debug)

### Images Not Loading

- Verify images are in `/public` folder
- Check file names match exactly (case-sensitive)
- Use .jpg, .png, or .webp formats

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Vercel: Redeploy after adding variables
- Local: Restart dev server after changing `.env.local`
- Frontend variables MUST start with `NEXT_PUBLIC_`

## 📊 Post-Deployment

### Analytics (Optional)

Add Google Analytics to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Monitoring

- Vercel: Built-in analytics available
- Set up uptime monitoring (UptimeRobot, etc.)
- Configure error tracking (Sentry, etc.)

## 🎉 Launch Checklist

- [ ] All images uploaded
- [ ] Email service configured and tested
- [ ] Social media links updated
- [ ] Content reviewed in all languages
- [ ] Tested on mobile devices
- [ ] Dark mode works correctly
- [ ] Custom domain configured (if applicable)
- [ ] Analytics configured (if desired)
- [ ] README updated with live URL
- [ ] Shared with friends! 🚀

## 🆘 Support

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| "Cannot find module" errors | Run `npm install` |
| Email not sending | Check console logs, verify credentials |
| Images broken | Verify file paths and names |
| Dark mode not saving | Clear localStorage and test again |
| Slow performance | Use next/image for images, check bundle size |

---

## 🎊 You're Ready!

Your portfolio is professional, modern, and ready to impress. Good luck with your deployment!

**Recommended:** Start with Vercel - it's the easiest and works perfectly with Next.js.

**Final URL Format:**
- Vercel: `https://senz-portfolio.vercel.app`
- Custom: `https://yourdomain.com`

🚀 **Deploy now and share your awesome portfolio!**

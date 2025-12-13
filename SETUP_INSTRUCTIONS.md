# 🚀 QUICK SETUP INSTRUCTIONS

## ⚡ Quick Start (5 Minutes)

Since PowerShell script execution might be restricted on your system, follow these steps:

### Step 1: Install Dependencies

Open PowerShell in the `senz-portfolio` folder and run:

```powershell
# Option A: Enable scripts temporarily (if you have admin rights)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install

# Option B: Use full path to npm (if Option A doesn't work)
& "C:\Program Files\nodejs\npm.cmd" install
```

**Or simply:**
```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

### Step 2: Start Development Server

```powershell
npm run dev
```

If that doesn't work:
```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

### Step 3: Open in Browser

Visit: http://localhost:3000

---

## 📋 What To Do Before Deploying

### 1. Add Your Images

Place these files in the `public` folder:

**Portraits (for Hero section):**
- `portrait-1.jpg`
- `portrait-2.jpg`
- `portrait-3.jpg` (this will be larger, featured)
- `portrait-4.jpg`
- `portrait-5.jpg`

**Project Screenshots:**
- `project-ai-chatbot.jpg`
- `project-book-catalog.jpg`
- `project-lifehub.jpg`
- `project-cms.jpg`
- `project-automation.jpg`
- `project-design-system.jpg`

### 2. Configure Email Service

**Easiest Option: EmailJS**

1. Go to https://www.emailjs.com/ and sign up
2. Create a new service (Gmail, Outlook, etc.)
3. Create a template with these variables:
   ```
   {{from_name}}
   {{from_email}}
   {{message}}
   ```
4. Copy your Service ID, Template ID, and Public Key
5. Open `components/Contact.tsx`
6. Replace lines 30-32:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### 3. Update Social Media Links

Open `components/Socials.tsx` and update:
- Line 16: Instagram URL
- Line 21: WhatsApp number

### 4. Test Everything

- ✅ Dark mode toggle works
- ✅ Language switcher works (EN/ID/JP/ES)
- ✅ Contact form sends email
- ✅ All sections scroll smoothly
- ✅ Looks good on mobile

---

## 🌐 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Senz Portfolio"
git branch -M main
```

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy

1. Go to https://vercel.com/
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

---

## 🎨 Customization Guide

### Change Your Info

**Name & Bio:**
- Edit `lib/translations.ts`
- Update all language versions

**Skills:**
- Edit `components/About.tsx` (lines 12-20)
- Edit `components/Skills.tsx` (lines 12-37)

**Projects:**
- Edit `lib/data.ts`
- Update titles, descriptions, and tools

**Colors:**
- Edit `tailwind.config.js`
- Modify primary, accent, or peach colors

---

## 🔧 Troubleshooting

### "npm is not recognized"

**Solution 1:** Use full path
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
```

**Solution 2:** Add Node to PATH
- Search "Environment Variables" in Windows
- Add `C:\Program Files\nodejs` to PATH
- Restart PowerShell

### Contact Form Not Working

**Check:**
1. Console for error messages
2. EmailJS credentials are correct
3. Email template is configured
4. Internet connection is active

**Test:**
- Fill out form
- Click send
- Check browser console (F12)
- Check EmailJS dashboard for logs

### Images Not Showing

**Check:**
1. Files are in `public` folder
2. File names match exactly (case-sensitive)
3. Files are .jpg, .png, or .webp

### Port 3000 Already in Use

Change port:
```powershell
$env:PORT=3001; npm run dev
```

---

## 📱 Mobile Testing

Test on:
- Small phone (320px width)
- Regular phone (375px width)
- Tablet (768px width)
- Desktop (1024px+ width)

Use Chrome DevTools (F12 → Toggle Device Toolbar)

---

## ✅ Pre-Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Dev server runs (`npm run dev`)
- [ ] All images added to `/public`
- [ ] Email service configured (EmailJS or Nodemailer)
- [ ] Social media links updated
- [ ] Tested on mobile view
- [ ] Dark mode works
- [ ] Contact form sends email
- [ ] All languages display correctly
- [ ] No console errors

---

## 🎉 You're Ready!

Once everything above is complete:

1. **Test locally** - Make sure everything works
2. **Push to GitHub** - Version control
3. **Deploy to Vercel** - Go live!
4. **Share your portfolio** - Show it off! 🚀

---

## 📞 Quick Reference

**Local URL:** http://localhost:3000

**Project Structure:**
```
senz-portfolio/
├── app/              # Pages and API routes
├── components/       # React components
├── lib/              # Data and translations
├── public/           # Static files (images)
└── ...config files
```

**Key Files to Edit:**
- `lib/translations.ts` - All text content
- `lib/data.ts` - Project information
- `components/Contact.tsx` - Email configuration
- `components/Socials.tsx` - Social links

**Commands:**
- `npm install` - Install dependencies
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm start` - Run production build

---

## 💡 Tips

1. **Start Simple**: Get it running locally first
2. **Test Email**: EmailJS is easier to start with
3. **Use Vercel**: Easiest deployment
4. **Mobile First**: Check mobile view always
5. **Dark Mode**: Test both themes

---

**Need Help?** Check:
- `README.md` - Full documentation
- `DEPLOYMENT_GUIDE.md` - Detailed deployment
- `PROJECT_SUMMARY.md` - Complete overview

**Happy coding! 🎨✨**

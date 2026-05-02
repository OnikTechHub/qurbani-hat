# 🐄 QurbaniHat – Livestock Booking Platform

**QurbaniHat** is a modern online livestock marketplace where users can browse, view details, and book cows or goats for the upcoming Qurbani. It is a fully responsive Single Page Application (SPA) designed for a smooth and user-friendly experience.

---

## 🔗 Live Links & Resources

- 🌐 Live Site: https://qurbani-hat-seven.vercel.app  
- 💻 GitHub Repository: https://github.com/OnikTechHub/qurbani-hat

---

## 🚀 Key Features

- 🔐 **Modern Authentication**  
  Secure email/password login and Google social login using Better-Auth.

- 🐄 **Dynamic Animal Display**  
  Users can sort livestock based on price (Sort by Price).

- 🔒 **Private Routing**  
  Animal details and profile pages are protected and only accessible after login.

- 👤 **Profile Update (Challenge Feature)**  
  Users can update their name and profile picture (via URL) directly.

- 📅 **Booking System**  
  Each animal has a dedicated booking form. Upon successful submission, a toast notification is displayed.

- 📱 **Fully Responsive Design**  
  Optimized for mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router), React.js  
- **Styling:** Tailwind CSS, DaisyUI  
- **Authentication:** Better-Auth  
- **Database:** MongoDB  
- **Animation:** Animate.css  
- **Notifications:** React Toast  

---

## 📦 Main npm Packages

- better-auth  
- mongodb  
- react-hot-toast  
- Animate-css
- react-icons  

---

## ⚙️ Environment Variables

To run this project locally, create a `.env.local` file and add the following:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
GITHUB_CLIENT_ID=your_github_id
GITHUB_CLIENT_SECRET=your_github_secret
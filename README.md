# Yash Patil - Portfolio Website

A modern, responsive, and dynamic personal portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content** - Projects, skills, and experience loaded from JavaScript arrays
- **Smooth Animations** - Engaging scroll animations and transitions
- **Interactive UI** - Typing effect, smooth navigation, and hover effects
- **Modern Design** - Clean, professional UI with gradient accents
- **Easy to Customize** - Well-structured code with clear placeholders

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with all styling
├── script.js           # JavaScript for dynamic content and interactions
├── README.md           # This file
│
└── (Add these files yourself)
    ├── profile-placeholder.jpg    # Your profile image
    └── resume.pdf                 # Your resume file
```

## 🛠️ Setup Instructions

### 1. Download the Files

Save the following files in a folder on your computer:
- `index.html`
- `style.css`
- `script.js`

### 2. Add Your Profile Image

**IMPORTANT:** Upload your profile photo to the same folder and name it:
- `profile-placeholder.jpg`

OR update line 44 in `index.html`:
```html
<!-- Change this line -->
<img src="profile-placeholder.jpg" alt="Yash Patil" class="profile-image" id="profileImage">

<!-- To your actual image filename -->
<img src="your-photo.jpg" alt="Yash Patil" class="profile-image" id="profileImage">
```

**Note:** If you don't add an image, a placeholder with your initials "YP" will appear.

### 3. Add Your Resume

**IMPORTANT:** Save your resume as `resume.pdf` in the same folder.

OR update line 50 in `index.html`:
```html
<!-- Change this line -->
<a href="resume.pdf" download class="btn btn-primary">

<!-- To your actual resume filename -->
<a href="Yash_Patil_Resume.pdf" download class="btn btn-primary">
```

### 4. Update Social Links

In `index.html`, update your actual profile URLs (lines 53-56):

```html
<a href="mailto:yashpatil1395@gmail.com" target="_blank">...</a>
<a href="https://www.linkedin.com/in/your-profile" target="_blank">...</a>
<a href="https://github.com/your-username" target="_blank">...</a>
```

Also update in the Contact section (lines 230-243).

### 5. Run the Website

Simply **double-click `index.html`** to open it in your browser!

## 🎨 Customization Guide

### Change Colors

Edit the CSS variables in `style.css` (lines 8-17):

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #7c3aed;    /* Purple accent */
    --accent-color: #f59e0b;       /* Orange/yellow accent */
    /* ... modify as needed */
}
```

### Add More Projects

Edit the `projectsData` array in `script.js` (starting at line 26):

```javascript
const projectsData = [
    {
        title: "Your Project Name",
        description: "Project description here...",
        techStack: ["Tech1", "Tech2", "Tech3"],
        github: "GitHub",
        highlights: [
            "Key achievement 1",
            "Key achievement 2"
        ]
    },
    // Add more projects...
];
```

### Add More Skills

Edit the `skillsData` array in `script.js` (starting at line 2):

```javascript
const skillsData = [
    {
        category: "Category Name",
        icon: "fas fa-code",  // Font Awesome icon
        skills: ["Skill1", "Skill2", "Skill3"]
    },
    // Add more categories...
];
```

### Update Experience

Edit the `experienceData` array in `script.js` (starting at line 78):

```javascript
const experienceData = [
    {
        role: "Your Role",
        company: "Company Name",
        duration: "Start – End Date",
        type: "Full-time/Internship/Virtual",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ]
    },
    // Add more experiences...
];
```

## 🌐 Hosting Options

### Option 1: GitHub Pages (Recommended - FREE)

1. Create a GitHub account
2. Create a new repository named `your-username.github.io`
3. Upload all files to this repository
4. Your site will be live at `https://your-username.github.io`

### Option 2: Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant hosting with a custom URL

### Option 3: Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy in seconds

## 📱 Browser Compatibility

Works perfectly on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Troubleshooting

**Profile image not showing?**
- Check the filename matches exactly (case-sensitive)
- Make sure the image is in the same folder as `index.html`

**Resume download not working?**
- Verify `resume.pdf` exists in the same folder
- Check the filename in the HTML matches your actual file

**Styling looks broken?**
- Make sure all three files are in the same folder
- Check that `style.css` and `script.js` filenames are correct

## 📧 Contact

If you need help customizing this portfolio:
- Email: yashpatil1395@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 📄 License

Feel free to use this template for your own portfolio! No attribution required.

---

**Made with ❤️ for showcasing your amazing work!**

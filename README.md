# Contact Form

A modern, interactive contact form with real-time validation, smooth animations, and professional styling. Built with vanilla HTML, CSS, and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 🎯 Live Demo

[View Live Demo](https://zubair-471.github.io/Contact-Form/)

## ✨ Features

- **Real-time Validation**: Instant feedback on form inputs
- **Smooth Animations**: CSS transitions and micro-interactions
- **Responsive Design**: Works perfectly on all devices
- **Professional UI**: Modern design with gradient backgrounds
- **Accessibility**: Proper form labels and ARIA support
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Clear error messages and validation
- **Success Feedback**: Confirmation messages after submission

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zubair-471/Contact-Form.git
   cd Contact-Form
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

3. **Test the functionality**
   - Fill out the form fields
   - Test validation by leaving fields empty
   - Submit the form to see success message
   - Test on mobile devices

## 🎨 Features in Detail

### Form Validation
- **Required Fields**: Name, email, subject, and message are mandatory
- **Email Validation**: Proper email format checking
- **Real-time Feedback**: Instant validation as user types
- **Visual Indicators**: Red borders and error messages for invalid fields

### User Experience
- **Smooth Transitions**: CSS animations for all interactions
- **Loading Spinner**: Visual feedback during form submission
- **Success/Error Alerts**: Clear feedback messages
- **Form Reset**: Clean form after successful submission

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Layout**: Adapts to different screen sizes
- **Touch-Friendly**: Large buttons and input fields
- **Readable Typography**: Clear, accessible text

## 📁 Project Structure

```
Contact-Form/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #10b981;
    --error-color: #ef4444;
}
```

### Adding New Fields
Add to the form in `index.html`:
```html
<div class="field">
    <label for="new-field">Field Label *</label>
    <input type="text" id="new-field" name="new-field" placeholder="Placeholder text">
    <span class="error" id="new-field-error"></span>
</div>
```

### Custom Validation
Add validation logic in `script.js`:
```javascript
function validateNewField(value) {
    if (!value.trim()) {
        return 'This field is required';
    }
    return '';
}
```

## 🎯 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari, Chrome Mobile

## 🚀 Form Submission

The form currently shows a success message. To integrate with a backend:

1. **Replace the form action** in `index.html`:
   ```html
   <form id="contactForm" action="/api/contact" method="POST">
   ```

2. **Update the JavaScript** in `script.js` to handle actual submission:
   ```javascript
   // Replace the success simulation with actual fetch
   fetch('/api/contact', {
       method: 'POST',
       body: formData
   })
   ```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author & Contact

* **M. Zubair Tariq**
* 📧 [ZubairTariq.dev@gmail.com](mailto:ZubairTariq.dev@gmail.com)
* 💼 [LinkedIn](https://www.linkedin.com/in/muhammad-zubair-tariq-70209b364)
* 🎯 [Fiverr – ZubairWebWorks](https://www.fiverr.com/ZubairWebWorks)

---

**Made by M. Zubair Tariq**

⭐ **Star this repo if you found it useful!**

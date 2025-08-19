class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.btnText = document.querySelector('.btn-text');
        this.spinner = document.querySelector('.spinner');
        this.successAlert = document.getElementById('successAlert');
        this.errorAlert = document.getElementById('errorAlert');
        
        this.fields = {
            name: {
                element: document.getElementById('name'),
                error: document.getElementById('nameError'),
                validate: (value) => value.trim().length >= 2,
                message: 'Please enter your name (at least 2 characters)'
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
                message: 'Please enter a valid email address'
            },
            subject: {
                element: document.getElementById('subject'),
                error: document.getElementById('subjectError'),
                validate: (value) => value.trim().length >= 3,
                message: 'Please enter a subject (at least 3 characters)'
            },
            message: {
                element: document.getElementById('message'),
                error: document.getElementById('messageError'),
                validate: (value) => value.trim().length >= 10,
                message: 'Please enter your message (at least 10 characters)'
            }
        };

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            
            field.element.addEventListener('blur', () => {
                this.validateField(fieldName);
            });
            
            field.element.addEventListener('input', () => {
                this.clearError(fieldName);
            });
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const value = field.element.value;
        const isValid = field.validate(value);
        const fieldElement = field.element.parentElement;

        if (!isValid && value.trim() !== '') {
            this.showError(fieldName, field.message);
            fieldElement.classList.add('error');
            fieldElement.classList.remove('success');
            return false;
        } else if (isValid) {
            this.clearError(fieldName);
            fieldElement.classList.remove('error');
            fieldElement.classList.add('success');
            return true;
        } else {
            this.clearError(fieldName);
            fieldElement.classList.remove('error', 'success');
            return false;
        }
    }

    showError(fieldName, message) {
        const field = this.fields[fieldName];
        field.error.textContent = message;
        field.error.style.display = 'block';
    }

    clearError(fieldName) {
        const field = this.fields[fieldName];
        field.error.style.display = 'none';
        field.element.parentElement.classList.remove('error', 'success');
    }

    validateForm() {
        let isValid = true;
        
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            const value = field.element.value;
            const fieldValid = field.validate(value);
            const fieldElement = field.element.parentElement;

            if (!fieldValid) {
                this.showError(fieldName, field.message);
                fieldElement.classList.add('error');
                fieldElement.classList.remove('success');
                isValid = false;
            } else {
                this.clearError(fieldName);
                fieldElement.classList.remove('error');
                fieldElement.classList.add('success');
            }
        });

        return isValid;
    }

    setLoading(loading) {
        this.submitBtn.disabled = loading;
        this.btnText.style.display = loading ? 'none' : 'inline';
        this.spinner.style.display = loading ? 'inline-block' : 'none';
    }

    showAlert(type) {
        this.successAlert.style.display = type === 'success' ? 'block' : 'none';
        this.errorAlert.style.display = type === 'error' ? 'block' : 'none';
    }

    resetForm() {
        this.form.reset();
        Object.keys(this.fields).forEach(fieldName => {
            this.clearError(fieldName);
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            this.showAlert('error');
            return;
        }

        this.setLoading(true);
        this.showAlert('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            this.showAlert('success');
            this.resetForm();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                this.showAlert('');
            }, 3000);
            
        } catch (error) {
            console.error('Error:', error);
            this.showAlert('error');
        } finally {
            this.setLoading(false);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});

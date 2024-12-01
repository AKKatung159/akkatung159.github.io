<template>
  <div class="contact-form">
    <form action="https://formspree.io/f/xzzbklaj" method="POST" class="form">
      <div class="form-header">
        <div class="form-icon">✉️</div>
        <div class="form-title">
          <h3>Send a Message</h3>
          <p>I'll get back to you as soon as possible!</p>
        </div>
      </div>

      <template v-if="statusClass === 'success'">
        <div class="success-message">
          <div class="success-icon">✨</div>
          <p>{{ status }}</p>
        </div>
      </template>

      <!-- Name Field -->
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="name">Name</label>
        <div class="input-wrapper">
          <span class="input-icon">👤</span>
          <input 
            type="text" 
            id="name" 
            name="name" 
            v-model="form.name" 
            required 
            placeholder="Your name"
            @blur="validateField('name')"
          >
        </div>
        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
      </div>

      <!-- Email Field -->
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">Email</label>
        <div class="input-wrapper">
          <span class="input-icon">📧</span>
          <input 
            type="email" 
            id="email" 
            name="email" 
            v-model="form.email" 
            required 
            placeholder="Your email address"
            @blur="validateField('email')"
          >
        </div>
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <!-- Message Field -->
      <div class="form-group" :class="{ 'has-error': errors.message }">
        <label for="message">Message</label>
        <div class="input-wrapper">
          <span class="input-icon">💭</span>
          <textarea 
            id="message" 
            name="message" 
            v-model="form.message" 
            required 
            placeholder="Your message"
            @blur="validateField('message')"
          ></textarea>
        </div>
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        :class="['submit-button', { 'loading': isSubmitting }]"
        :disabled="isSubmitting"
      >
        <span class="button-text">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
        <span class="button-icon">{{ isSubmitting ? '✨' : '📤' }}</span>
      </button>

      <!-- Status Message -->
      <p v-if="status && statusClass !== 'success'" :class="['status-message', statusClass]" v-text="status"></p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const status = ref('')
const statusClass = ref('')
const isSubmitting = ref(false)

const validateField = (field) => {
  errors[field] = ''
  
  if (!form.value[field]) {
    errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    return false
  }
  
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.email = 'Please enter a valid email address'
    return false
  }
  
  return true
}

const validateForm = () => {
  let isValid = true
  
  ['name', 'email', 'message'].forEach(field => {
    if (!validateField(field)) {
      isValid = false
    }
  })
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  status.value = ''
  
  try {
    // Only validate form before submitting
    if (validateForm()) {
      status.value = 'Thank you! Your message has been sent successfully.'
      statusClass.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      status.value = 'Oops! Something went wrong. Please try again.'
      statusClass.value = 'error'
    }
  } catch (error) {
    status.value = 'Error sending message. Please try again later.'
    statusClass.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

.form-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.form-title {
  flex: 1;
}

.form-title h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
}

.form-title p {
  margin: 0.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.success-message {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #d4edda;
  border-radius: 8px;
  color: #155724;
  animation: fadeIn 0.3s ease;
}

.success-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

input, textarea {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border-radius: 8px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: all 0.3s ease;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 3px rgba(var(--vp-c-brand-rgb), 0.1);
}

.has-error input,
.has-error textarea {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:not(:disabled):hover {
  background-color: var(--vp-c-brand-dark);
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-icon {
  font-size: 1.1rem;
}

.loading {
  position: relative;
}

.loading .button-text {
  visibility: hidden;
}

.loading::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
  border-radius: 50%;
  border-right-color: transparent;
  animation: spin 0.75s linear infinite;
}

.status-message {
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 500;
  animation: fadeIn 0.3s ease;
}

.success {
  background-color: #d4edda;
  color: #155724;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .contact-form {
    padding: 1.5rem;
    margin: 1rem 0;
  }

  .form-header {
    margin-bottom: 1.5rem;
  }

  .form-icon {
    font-size: 1.75rem;
  }

  .form-title h3 {
    font-size: 1.25rem;
  }
}
</style>
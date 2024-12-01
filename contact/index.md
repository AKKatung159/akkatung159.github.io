# Let's Connect!

<div class="contact-header">
  <div class="contact-intro">
    <h2>Get in Touch</h2>
    <p>I'm always open to discussing new projects, opportunities, or just having a friendly chat about technology!</p>
  </div>
</div>

## Quick Connect

<div class="quick-links">
  <a href="mailto:ekkrit.k@gmail.com" class="contact-link email">
    <div class="icon">📧</div>
    <div class="details">
      <h3>Email</h3>
      <p>ekkrit.k@gmail.com</p>
    </div>
  </a>
  
  <a href="https://www.linkedin.com/in/ekkrit-kanchanasiri" target="_blank" class="contact-link linkedin">
    <div class="icon">💼</div>
    <div class="details">
      <h3>LinkedIn</h3>
      <p>Connect Professionally</p>
    </div>
  </a>

  <a href="https://github.com/AKKatung159" target="_blank" class="contact-link github">
    <div class="icon">💻</div>
    <div class="details">
      <h3>GitHub</h3>
      <p>Check Out My Code</p>
    </div>
  </a>

  <a href="https://www.facebook.com/ak.katung/" target="_blank" class="contact-link facebook">
    <div class="icon">👥</div>
    <div class="details">
      <h3>Facebook</h3>
      <p>Let's Be Friends</p>
    </div>
  </a>

  <a href="https://www.instagram.com/ak_katung" target="_blank" class="contact-link instagram">
    <div class="icon">📸</div>
    <div class="details">
      <h3>Instagram</h3>
      <p>Follow My Journey</p>
    </div>
  </a>

  <a href="https://www.openlink.co/akkatung" target="_blank" class="contact-link openlink">
    <div class="icon">🔗</div>
    <div class="details">
      <h3>Openlink</h3>
      <p>All My Links</p>
    </div>
  </a>
</div>

## Send Me a Message

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<ContactForm />

<style scoped>
.contact-header {
  text-align: center;
  margin: 2rem 0 3rem;
  padding: 2rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-intro h2 {
  margin-top: 0;
  color: var(--vp-c-text-1);
  font-size: 2rem;
}

.contact-intro p {
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 1rem auto;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.contact-link {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

.icon {
  font-size: 1.75rem;
  margin-right: 1rem;
  min-width: 40px;
  text-align: center;
}

.details {
  flex: 1;
}

.details h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
}

.details p {
  margin: 0.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .contact-header {
    padding: 1.5rem;
    margin: 1rem 0 2rem;
  }

  .contact-intro h2 {
    font-size: 1.75rem;
  }

  .quick-links {
    grid-template-columns: 1fr;
  }

  .contact-link {
    padding: 1rem;
  }
}
</style>
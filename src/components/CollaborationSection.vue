<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  website: '',
})

const contactForm = ref(null)
const status = ref('idle')
const feedback = ref('')

const sendMessage = async (event) => {
  event?.preventDefault()
  event?.stopPropagation()

  if (status.value === 'sending') return
  if (contactForm.value && !contactForm.value.reportValidity()) return

  status.value = 'sending'
  feedback.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const contentType = response.headers.get('content-type') || ''
    const result = contentType.includes('application/json')
      ? await response.json()
      : {}

    if (!response.ok) {
      throw new Error(result.error || 'The message could not be sent.')
    }
    if (!result.ok) {
      throw new Error('The email service returned an invalid response.')
    }

    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.message = ''
    form.website = ''
    status.value = 'success'
    feedback.value = 'Your message has been sent successfully.'
  } catch (error) {
    status.value = 'error'
    feedback.value = error.message || 'The message could not be sent.'
  }
}
</script>

<template>
  <section id="contact" class="section collab">
    <div class="photo-bg" aria-hidden="true"></div>
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="container collab-grid">
      <div class="left">
        <p class="eyebrow on-ink" v-reveal>Collaboration</p>
        <h2 class="section-title on-ink" v-reveal="80">
          Let’s work together.
        </h2>
        <p class="lead light" v-reveal="160">
          Get in touch so we can start working together. If you have any proposals or
          collaboration projects within the mission of SPAIGI, please contact us — or donate
          now and become a partner.
        </p>
      </div>

      <form
        ref="contactForm"
        class="contact-form"
        @submit.prevent.stop="sendMessage"
        v-reveal="120"
      >
        <label class="honeypot" aria-hidden="true">
          <span>Website</span>
          <input
            v-model="form.website"
            type="text"
            name="website"
            tabindex="-1"
            autocomplete="off"
          />
        </label>

        <div class="field-row">
          <label>
            <span>First name</span>
            <input
              v-model.trim="form.firstName"
              type="text"
              name="firstName"
              autocomplete="given-name"
              placeholder="First name"
              required
            />
          </label>
          <label>
            <span>Last name</span>
            <input
              v-model.trim="form.lastName"
              type="text"
              name="lastName"
              autocomplete="family-name"
              placeholder="Last name"
              required
            />
          </label>
        </div>

        <label>
          <span>Email address</span>
          <input
            v-model.trim="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="name@example.com"
            required
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            v-model.trim="form.message"
            name="message"
            rows="5"
            placeholder="Tell us about your proposal or project"
            required
          ></textarea>
        </label>

        <button
          type="button"
          class="btn btn-primary"
          :disabled="status === 'sending'"
          @click.prevent.stop="sendMessage"
        >
          {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
          <span v-if="status !== 'sending'" class="arrow">→</span>
        </button>

        <p
          v-if="feedback"
          class="form-feedback"
          :class="{ success: status === 'success', error: status === 'error' }"
          role="status"
        >
          {{ feedback }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.collab {
  position: relative;
  background: var(--paper-2);
  color: var(--text);
  overflow: hidden;
  isolation: isolate;
}
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(30, 42, 120, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 42, 120, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(100% 100% at 100% 0%, #000 20%, transparent 75%);
  z-index: -1;
}
.photo-bg {
  position: absolute;
  top: -160px;
  right: -120px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.22), transparent 65%);
  filter: blur(40px);
  z-index: -2;
}
.collab-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}
.section-title.on-ink {
  color: var(--text-strong);
}
.lead.light {
  color: var(--text-muted);
}
.contact-form {
  position: relative;
  display: grid;
  gap: 18px;
  padding: 30px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}
.honeypot {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.contact-form label {
  display: grid;
  gap: 7px;
}
.contact-form label > span {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-strong);
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--paper-2);
  color: var(--text-strong);
  font: inherit;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}
.contact-form textarea {
  min-height: 130px;
  resize: vertical;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #a2a8ba;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--gold);
  background: #fff;
  box-shadow: 0 0 0 3px var(--gold-bg);
}
.contact-form .btn {
  justify-self: start;
}
.contact-form .btn:disabled {
  cursor: wait;
  opacity: 0.72;
  transform: none;
}
.form-feedback {
  margin: -4px 0 0;
  font-size: 0.88rem;
  font-weight: 600;
}
.form-feedback.success {
  color: #18794e;
}
.form-feedback.error {
  color: #c43d4b;
}
@media (max-width: 860px) {
  .collab-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
@media (max-width: 460px) {
  .field-row {
    grid-template-columns: 1fr;
  }
  .contact-form {
    padding: 22px;
  }
}
</style>

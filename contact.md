---
layout: contact
title: "Get in Touch"
permalink: /contact/
---

<section class="contact-section">
  <div class="contact-info">
    <h2>Contact Me</h2>
    <ul class="contact-list">
      <li>
        <i class="fas fa-envelope"></i>
        <a href="mailto:hmarhoefer@gmail.com">hmarhoefer@gmail.com</a>
      </li>
      <li>
        <i class="fab fa-github"></i>
        <a href="https://github.com/ds-oliver" target="_blank" rel="noopener noreferrer">@ds-oliver</a>
      </li>
      <li>
        <i class="fab fa-linkedin"></i>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </li>
    </ul>
  </div>

  <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" placeholder="Your Email" required>
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
    </div>

    <input type="hidden" name="_subject" value="New contact from portfolio">
    <button type="submit" class="btn submit-btn">Send Message</button>
  </form>
</section>
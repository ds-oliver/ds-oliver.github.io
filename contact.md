---
layout: contact
title: "Get in Touch"
permalink: /contact/
---

<section class="contact-section">
  <div class="contact-info">
    <h2>Direct Channels</h2>
    <ul class="contact-list">
      <li>
        <i class="fas fa-envelope"></i>
        <a href="mailto:hmarhoefer@gmail.com">hmarhoefer@gmail.com</a>
      </li>
      <li>
        <i class="fab fa-github"></i>
        <a href="https://github.com/ds-oliver" target="_blank">@ds-oliver</a>
      </li>
      <li>
        <i class="fab fa-linkedin"></i>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a>
      </li>
    </ul>
  </div>

  <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" required>
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>

    <input type="hidden" name="_subject" value="New contact from portfolio">
    <button type="submit" class="btn submit-btn">Send Message</button>
  </form>
</section>
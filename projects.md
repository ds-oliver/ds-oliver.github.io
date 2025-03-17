---
layout: projects
title: "Projects"
permalink: /projects/
featured_sort: date # date | alphabetical | custom
---

## Featured Projects

<div class="project-grid">
  {% for project in site.projects %}
    <article class="project-card">
      <div class="project-image">
        <img src="{{ project.image | default: '/assets/images/project-default.jpg' }}" alt="{{ project.title }}" loading="lazy">
      </div>
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <div class="project-meta">
          {% if project.tags %}
            <div class="project-tags">
              {% for tag in project.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <span class="project-date">{{ project.date | date: "%b %Y" }}</span>
        </div>
        <p>{{ project.excerpt }}</p>
        <div class="project-links">
          {% if project.github %}
            <a href="{{ project.github }}" class="btn github" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> Code
            </a>
          {% endif %}
          {% if project.demo %}
            <a href="{{ project.demo }}" class="btn demo" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
          {% endif %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>
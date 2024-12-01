<template>
  <div :class="['project-card', small ? 'project-card-small' : '']">
    <div class="project-image">
      <ImageSlideshow :images="imageArray" />
    </div>
    <div class="project-content">
      <h3>{{ emoji }} {{ title }}</h3>
      <p>{{ description }}</p>

      <div v-if="techStack" class="tech-stack">
        <strong>Tech Stack:</strong>
        <ul>
          <li v-for="tech in techStack" :key="tech">{{ tech }}</li>
        </ul>
      </div>

      <div v-if="features" class="features">
        <strong>Key Features:</strong>
        <ul>
          <li v-for="feature in features" :key="feature">{{ feature }}</li>
        </ul>
      </div>

      <div class="project-links">
        <a v-if="demoLink" :href="demoLink" class="button">View Details</a>
        <a v-if="githubLink" :href="githubLink" class="button">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ImageSlideshow from './ImageSlideshow.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: [String, Array],
    required: true
  },
  emoji: {
    type: String,
    default: ''
  },
  techStack: {
    type: Array,
    default: () => []
  },
  features: {
    type: Array,
    default: () => []
  },
  demoLink: {
    type: String,
    default: ''
  },
  githubLink: {
    type: String,
    default: ''
  },
  small: {
    type: Boolean,
    default: false
  }
})

const imageArray = computed(() => {
  if (Array.isArray(props.imageSrc)) {
    return props.imageSrc
  }
  return [props.imageSrc]
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  margin: 0;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.project-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  aspect-ratio: 16/9;
}

.project-content {
  flex: 1;
  min-width: 0;
}

h3 {
  color: var(--vp-c-brand);
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.4;
}

p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.tech-stack, .features {
  margin: 1rem 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0.5rem 0;
}

li {
  margin: 0.25rem 0;
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;
  font-size: 0.95rem;
}

li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  text-align: center;
  min-width: 120px;
}

.button:hover {
  background-color: var(--vp-c-brand-dark);
  text-decoration: none;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .project-card {
    padding: 2rem;
  }

  .project-card:not(.project-card-small) {
    flex-direction: row;
  }

  .project-card:not(.project-card-small) .project-image {
    flex: 1;
    max-width: 50%;
  }

  .project-card:not(.project-card-small) .project-content {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 1rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  .project-links {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
</style>

# Projects Portfolio 🚀

Here's a showcase of my key projects, demonstrating my expertise in full-stack development and software engineering.

## Professional Projects

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'Appsynth Internal Engagement App',
    emoji: '🏢',
    description: 'A comprehensive internal product system with user engagement, points system, and admin management.',
    imageSrc: ['/assets/pointhub/1.webp'],
    techStack: [
      'Frontend: Next.js, Tailwind CSS',
      'Backend: Go (Clean Architecture)',
      'Authentication: Gmail Domain',
      'Integrations: OneSignal, Mailgun'
    ],
    features: [
      'User-facing responsive web app',
      'Admin CMS for event management',
      'Points and rewards system',
      'User-to-user kudos feature',
      'Email notifications'
    ]
  },
  {
    title: 'Jobs.ocsc Mobile App',
    emoji: '📱',
    description: 'A job search mobile application for the Office of the Civil Service Commission.',
    imageSrc: ['/assets/jobs/1.webp', '/assets/jobs/2.webp', '/assets/jobs/3.webp', '/assets/jobs/4.webp'],
    techStack: [
      'Framework: React Native (TypeScript)',
      'Authentication: JWT, ThaiD Login',
      'API Integration: RESTful'
    ],
    features: [
      'Personal information management',
      'Job matching system',
      'Press release updates',
      'Pin/Unpin functionality',
      'Thai language support'
    ]
  }
]

const academicProjects = [
  {
    title: 'FlashBack - Flashcard Platform',
    emoji: '📚',
    description: 'An interactive flashcard web application for efficient learning.',
    imageSrc: [
      '/assets/flashback/1.webp',
      '/assets/flashback/2.webp',
      '/assets/flashback/3.webp',
      '/assets/flashback/4.webp'
    ],
    techStack: [
      'Frontend: Next.js',
      'Backend: NestJS',
      'Database: MongoDB',
      'TypeScript'
    ],
    features: [
      'User authentication',
      'Flashcard creation and management',
      'Study progress tracking',
      'Interactive learning interface'
    ],
    githubLink: 'https://github.com/pattanunNP/FlashCardBackend'
  },
  {
    title: 'Algorithm Arena Gym',
    emoji: '🏋️‍♂️',
    description: 'A comprehensive gym management system with member tracking and scheduling.',
    imageSrc: ['/assets/algorithm-arena-gym/1.webp', '/assets/algorithm-arena-gym/2.webp', '/assets/algorithm-arena-gym/3.webp', '/assets/algorithm-arena-gym/4.webp', '/assets/algorithm-arena-gym/5.webp', '/assets/algorithm-arena-gym/6.webp'],
    techStack: [
      'Frontend: Next.js, Tailwind CSS',
      'Backend: NestJS',
      'Database: MySQL',
      'Authentication: JWT'
    ],
    features: [
      'Member management',
      'Class scheduling',
      'Equipment tracking',
      'Payment processing'
    ],
    githubLink: 'https://github.com/algorithm-arena-gym/algorithm-arena-gym-back-end'
  },
  {
    title: 'Rubpeunkawmai Event Platform',
    emoji: '🎫',
    description: 'A large-scale event management system for university freshmen, serving 40,000+ users.',
    imageSrc: ['/assets/rpkm/1.webp'],
    techStack: [
      'Backend Development',
      'User Authentication',
      'Database Management',
      'E-ticketing System'
    ],
    features: [
      'User registration',
      'House selection system',
      'E-ticket generation',
      'Check-in management'
    ],
    githubLink: 'https://github.com/isd-sgcu/rpkm66-backend'
  }
]
</script>

<div class="projects-container">
  <div class="featured-projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </div>

  <h2>Academic Projects</h2>
  
  <div class="featured-projects">
    <ProjectCard
      v-for="project in academicProjects"
      :key="project.title"
      v-bind="project"
    />
  </div>
</div>

<style scoped>
.projects-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

h2 {
  margin-top: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand);
  font-size: 1.8rem;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 0 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
}
</style>

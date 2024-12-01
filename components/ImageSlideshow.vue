<template>
  <div class="slideshow-container" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="slide"
      >
        <img 
          :src="image"
          :alt="`Slide ${index + 1}`"
          loading="lazy"
        >
      </div>
    </div>
    
    <button 
      v-if="images.length > 1"
      class="nav-button prev" 
      @click="prevSlide" 
      aria-label="Previous slide"
    >
      ←
    </button>
    <button 
      v-if="images.length > 1"
      class="nav-button next" 
      @click="nextSlide" 
      aria-label="Next slide"
    >
      →
    </button>
    
    <div v-if="images.length > 1" class="dots">
      <button 
        v-for="(_, index) in images" 
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  autoplayInterval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayTimer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.images.length > 1) {
    autoplayTimer = setInterval(nextSlide, props.autoplayInterval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  aspect-ratio: 16/9;
}

.slides {
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  padding: 1rem;
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 2;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .nav-button {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .prev {
    left: 0.5rem;
  }

  .next {
    right: 0.5rem;
  }

  .dots {
    bottom: 0.5rem;
  }

  .dot {
    width: 6px;
    height: 6px;
  }
}

@media (hover: none) {
  .nav-button {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>

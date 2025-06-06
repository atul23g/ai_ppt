import { Slide } from '@/lib/types'
import { Project } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SlideState {
  slides: Slide[]
  project: Project | null
  setProject: (project: Project) => void
  setSlides: (slides: Slide[]) => void
}

export const useSlideStore = create(
  persist<SlideState>(
    (set) => ({
      project: null,
      slides: [],
      setSlides: (slides: Slide[]) => set({ slides }),
      setProject: (project: Project) => set({ project }),
    }),
    {
      name: 'slides-storage',
    }
  )
)
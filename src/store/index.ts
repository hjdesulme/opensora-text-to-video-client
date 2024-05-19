import { fetchVideo } from '@/pages/api/generateVideo';
import create from 'zustand';

interface Job {
  id: number;
  name: string;
  status: string;
}

interface StoreState {
  videoUrl: string;
  jobs: Job[];
  generateVideo: (prompt: string) => void;
  addJob: (job: Job) => void;
  updateJobStatus: (id: number, status: string) => void;
}

const placeholderVideos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
];

export const useStore = create<StoreState>((set) => ({
  videoUrl: '',
  jobs: [],
  generateVideo: async (prompt: string) => {
    try {
      const buffer = await fetchVideo(prompt);
      const url = URL.createObjectURL(new Blob([buffer], { type: 'video/mp4' }));
      console.log(url)
      console.log(buffer)
      set({ videoUrl: url });
    } catch (error) {
      console.error('Failed to generate video', error);
      // Fallback to placeholder video if there's an error
      const randomVideoUrl = placeholderVideos[Math.floor(Math.random() * placeholderVideos.length)];
      set({ videoUrl: randomVideoUrl });
    }
  },
  addJob: (job: Job) => set((state) => ({ jobs: [...state.jobs, job] })),
  updateJobStatus: (id: number, status: string) => set((state) => ({
    jobs: state.jobs.map(job => job.id === id ? { ...job, status } : job)
  })),
}));

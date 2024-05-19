  import type { NextApiRequest, NextApiResponse } from 'next';

  import axios from 'axios';

  export async function fetchVideo(prompt: string) {
    try {
      const response = await axios.get('http://127.0.0.1:5000/video', {
        params: { prompt },
        responseType: 'arraybuffer',

      });
      
      console.log(response)
      return response.data;
    } catch (error) {
      throw new Error('Failed to generate video');
    }
  }


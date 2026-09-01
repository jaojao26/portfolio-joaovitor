import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { videos } from '../src/videosData.js';

const outputDir = path.resolve('public/thumbnails');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting thumbnail generation for ${videos.length} videos...`);
console.log(`Using ffmpeg binary: ${ffmpegPath}`);

function generateThumbnail(video) {
  const isMp4 = video.videoUrl && video.videoUrl.endsWith('.mp4');
  if (!isMp4) {
    console.log(`[SKIP] Non-MP4 video: ${video.id}`);
    return Promise.resolve(false);
  }

  const timestamp = video.thumbnailTime !== undefined ? video.thumbnailTime : 1.5;
  const outputFile = path.join(outputDir, `${video.id}.webp`);

  const args = [
    '-ss', String(timestamp),
    '-i', video.videoUrl,
    '-vframes', '1',
    '-vf', "scale='min(640,iw)':-1",
    '-q:v', '80',
    '-y',
    outputFile
  ];

  return new Promise((resolve) => {
    execFile(ffmpegPath, args, { timeout: 45000 }, (error) => {
      if (error) {
        console.error(`❌ Error generating thumbnail for ${video.id} (${video.videoUrl}):`, error.message);
        resolve(false);
      } else {
        console.log(`✅ Generated: public/thumbnails/${video.id}.webp (t=${timestamp}s)`);
        resolve(true);
      }
    });
  });
}

async function main() {
  let successCount = 0;
  for (const video of videos) {
    const success = await generateThumbnail(video);
    if (success) successCount++;
  }
  console.log(`\n🎉 Process finished! ${successCount} thumbnails generated in ${outputDir}`);
}

main();

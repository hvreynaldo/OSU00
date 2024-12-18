import { FC, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { cn } from '../../utils/classNames';

interface ArtworkMediaProps {
  type: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  title: string;
}

const ArtworkMedia: FC<ArtworkMediaProps> = ({ type, imageUrl, videoUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (type === 'video' && videoUrl) {
    return <VideoPlayer url={videoUrl} title={title} />;
  }

  return (
    <div className="relative w-full h-full bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#FF6600]/20 border-t-[#FF6600] rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imageUrl}
        alt={title}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  );
};

export default ArtworkMedia;
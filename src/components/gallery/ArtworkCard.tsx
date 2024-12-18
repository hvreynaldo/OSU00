import { FC, useState } from 'react';
import { ArtworkItem } from '../../utils/types';
import { formatDate } from '../../utils/date';
import ArtworkMedia from './ArtworkMedia';
import ImageViewer from './ImageViewer';

interface ArtworkCardProps {
  artwork: ArtworkItem;
}

const ArtworkCard: FC<ArtworkCardProps> = ({ artwork }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        onClick={() => artwork.type === 'image' && setIsViewerOpen(true)}
      >
        <div className="aspect-w-16 aspect-h-9">
          <ArtworkMedia
            type={artwork.type}
            imageUrl={artwork.imageUrl}
            videoUrl={artwork.videoUrl}
            title={artwork.title}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
            {artwork.title}
          </h3>
          <p className="text-sm text-[#FF6600] mb-2">
            {artwork.aiModel}
          </p>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {artwork.description}
          </p>
          <time className="text-sm text-gray-500">
            Created on {formatDate(artwork.createdAt)}
          </time>
        </div>
      </div>

      {isViewerOpen && artwork.type === 'image' && (
        <ImageViewer
          src={artwork.imageUrl}
          alt={artwork.title}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
};

export default ArtworkCard;
import * as React from 'react';
import { getPhotos, Photo } from '../common/api';
import { PhotoCard } from './PhotoCard';

export const App: React.FC<{}> = () => {
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  return (
    <div style={{ width: '800px', margin: '80px auto' }}>
      <h1>Workbox Cache Application</h1>
      <div style={{ marginBottom: '16px' }}>
        <button
          onClick={async () => {
            const photos = await getPhotos(1).catch(e => {
              console.error('get photos error!', e);
              return [];
            });
            setPhotos(photos);
          }}
        >
          get photos
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {photos.map((p, i) => {
          return <PhotoCard photo={p} key={i} />;
        })}
      </div>
    </div>
  );
};

import * as React from 'react';
import { Photo } from '../common/api';

type PhotoProps = {
  photo: Photo;
};

export const PhotoCard: React.FC<PhotoProps> = props => (
  <>
    <img src={props.photo.thumbnailUrl} />
  </>
);

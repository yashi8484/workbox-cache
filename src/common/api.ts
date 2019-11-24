import ky from 'ky';

const END_POINT = 'https://jsonplaceholder.typicode.com';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhotos = async (albumId: number) => {
  return await ky
    .get(`${END_POINT}/photos`, {
      searchParams: {
        albumId: albumId,
      },
    })
    .json<Photo[]>();
};

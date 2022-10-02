import { storage } from '.';
import { getDownloadURL, ref } from 'firebase/storage';
const COLLECTION_NAME = "resources";

export const getImgUrl = async (path: string) => {
  const imgRef = ref(storage, `${COLLECTION_NAME}/${path}`);
  const url = await getDownloadURL(imgRef);
  return url;
};

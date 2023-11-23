import React from "react";
import FlansDisplay from "./components/FlansDisplay";
import useGetPhotosByQuery from "./hooks/useUnsplash";
import Image from "next/image";
import axios from "axios";

const query = "flans";

interface Photo {
  id: number;
  title: string;
  url: string;
}

const FlansPage = () => {
  const { data } = useGetPhotosByQuery({ query });
  const photos = data?.results || data;
  return (
    <div>
      {photos?.map((item: Photo) => (
        <ImageContainer key={item.id}>
          <StyledImage
            src={item.urls.small}
            alt="Unsplash image"
            width={300}
            height={300}
          />
        </ImageContainer>
      ))}
    </div>
  );
};

export default FlansPage;

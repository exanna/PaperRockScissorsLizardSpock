import React from 'react';
import styled from 'styled-components';


const Image = styled.img `
   height: ${(props) => props.size};
   padding: 0 8px;
`;


const Img = ({src, alt, size}) => {

   return (
      <Image src={src} alt={alt} size={size} />
   );
}

export default Img;


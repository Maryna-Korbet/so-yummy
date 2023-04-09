import styled from 'styled-components';

export const FavoritePageThumb = styled.div`
  position: relative;
  max-width: 1240px;
  top: -144px;
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 41px; // 205 - between fav and footer, 164 - relative position */
`;

export const RecipeList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const FavoritePageTitle = styled.h2`
  margin-bottom: 100px;
  margin-top: 0px;
  font-weight: 600;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #001833;
`;
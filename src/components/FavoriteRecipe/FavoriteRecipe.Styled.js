import styled from 'styled-components';

export const FavRecipeItem = styled.li`
  position: relative;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeImage = styled.img`
  width: 318px;
  height: 324px;
  margin-right: 40px;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.24px;
  margin-top: 0px;
  margin-bottom: 50px;

  color: #3e4462;
`;

export const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #23262a;
  margin-right: 164px;
`;

export const RecipePrepTime = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.24px;
  margin: 0;
  color: #3e4462;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  background-color: #ebf3d4;
  border: none;
  border-radius: 4px;

  svg {
    fill: #333;
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SeeRecipeBtn = styled.button`
  position: absolute;
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 160px;
  height: 54px;
  background-color: #22252a;
  border: none;
  border-radius: 4px;
  color: #fafafa;
  svg {
    fill: #333;
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const FavRecipeTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
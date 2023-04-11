import * as React from 'react';
import {
  MainBlock,
  TitleBlock,
  Title,
  FeaturesList,
  Feature,
  FooterMain,
  FooterMainBlock,
  FooterNav,
  FooterNavList,
  FooterStyle,
  Link,
  Logo,
  LogoStyle,
} from './Footer.styled';
// import { getValidColor } from 'utils/getValidColor';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { FollowUs } from '../FollowUs/FollowUs';

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterMain>
        <FooterMainBlock>
          <MainBlock>
            <TitleBlock>
              <LogoStyle>
                <Logo />
              </LogoStyle>
              <Title>So Yummy</Title>
            </TitleBlock>
            <FeaturesList>
              <Feature>Database of recipes that can be replenished </Feature>
              <Feature>
                Flexible search for desired and unwanted ingredients
              </Feature>
              <Feature>Ability to add your own recipes with photos</Feature>
              <Feature>Convenient and easy to use</Feature>
            </FeaturesList>
          </MainBlock>
          <FooterNav>
            <FooterNavList>
              <Link to="/search">Ingredients</Link>
              <Link to="/add">Add recipes</Link>
              <Link to="/my">My recipes</Link>
              <Link to="/favorite">Favorite</Link>
              <Link to="/shopping-list">Shopping list</Link>
            </FooterNavList>
          </FooterNav>
        </FooterMainBlock>
        <SubscribeForm />
      </FooterMain>
      <FollowUs />
    </FooterStyle>
  );
};

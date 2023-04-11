// import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { getMode } from '../redux/theme/themeSelector';
import { theme as lightMode, darkTheme as darkMode } from '../utils/theme';
import { GlobalStyle } from './App.styled';

import { SharedLayout } from './SharedLayout';
import { WelcomePage } from 'pages/WelcomePage/WellcomePage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { LoginPage } from 'pages/LoginPage';

import { MainPage } from 'pages/MainPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import { MyRecipesPage } from 'pages/MyRecipesPage/MyRecipesPage';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';


// import { ShoppingPage } from 'pages/ShoppingPage';

import { ShoppingListPage } from 'pages/ShoppingListPage';

import { SearchPage } from 'pages/SearchPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RecipePage } from 'pages/RecipePage';

import { PublicRoute } from 'services/routes/PublicRoute';
import { PrivateRoute } from 'services/routes/PrivateRoute';

import { getCurrentUser } from '../redux/auth/auth-operations';
// import { ShoppingListPage } from 'pages/ShoppingListPage';

export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/welcome"
          element={<PublicRoute component={WelcomePage} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={SignUpPage} />}
        />
        <Route path="/signin" element={<PublicRoute component={LoginPage} />} />
        <Route
          path="/"
          element={
            <PrivateRoute component={SharedLayout} redirectTo="/welcome" />
          }
        >
          <Route path="/main" element={<MainPage />} /> 
          <Route
            path="/categories/:categoryName?"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          {/* /* <Route path="/add" element={<AddRecipePage />} /> */}
          <Route path="/recipe/:recipeId" element={<RecipePage />} /> */
          <Route path="/search" element={<SearchPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};

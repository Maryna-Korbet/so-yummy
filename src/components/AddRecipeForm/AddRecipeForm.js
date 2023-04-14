import * as React from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { addRecipeAPI } from '../../services/API/Recipes';
import Select from 'react-select';
import { store } from '../../redux/store';
// import { getCategories } from '../../redux/selectors';

import { FollowUs } from 'components/FollowUs/FollowUs';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { stylesSelect } from './selectStyles';
import { timeOptionsList } from '../../utils/timeOptionsList';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
// import { getFilteredIngredients } from 'services/API/Recipes';

import {
  AddRecepiSection,
  InputsWrapper,
  InputsWithSelectWrapper,
  SelectComp,
  RecipeForm,
  PopularSection,
  MainWrapper,
  RecepieSection,
  AddBtn,
  TitleFollowUs,
  RecepieSectionTitle,
} from 'components/AddRecipeForm/AddRecipeForm.styled';
import icons from '../../images/sprite.svg';

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeAbout, setRecipeAbout] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [preparation, setPreparation] = useState('');
  const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);
  const [formFail, setFormFail] = useState({
    image: null,
  });

  const image = formFail.image;
  const handleIngredientsChange = ingredients => {
    setIngredientsForRecipe(ingredients);
  };

  const handleImageChange = event => {
    const [file] = event.target.files;

    // getFilteredIngredients('toma').then(data => {
    //   setSearchedIngredients(data.data);
    // });

    if (file) {
      setFormFail(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setRecipeTitle('');
    setRecipeAbout('');
    setCategory('');
    setCookingTime('');
    setPreparation('');
    setIngredientsForRecipe('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.target.elements[0].files[0];

    const formData = new FormData();
    formData.append('img', files);
    formData.append('title', recipeTitle);
    formData.append('about', recipeAbout);
    formData.append('category', category.label);
    formData.append('time', cookingTime.label);
    formData.set('ingredients', JSON.stringify(ingredientsForRecipe));
    formData.append('instructions', preparation);
    formData.append('description', recipeAbout);

    addRecipeAPI(formData);
    resetForm();
  };

  const theme = store.theme;
  const optionsCategories = [
    { label: 'beef', value: 'beef' },
    { label: 'dessert', value: 'dessert' },
    { label: 'breakfast', value: 'breakfast' },
    { label: 'chicken', value: 'chicken' },
    { label: 'miscellaneous', value: 'miscellaneous' },
    { label: 'pasta', value: 'pasta' },
    { label: 'goat', value: 'goat' },
    { label: 'pork', value: 'pork' },
    { label: 'seafood', value: 'seafood' },
    { label: 'starter', value: 'starter' },
    { label: 'side', value: 'side' },
    { label: 'vegan', value: 'vegan' },
    { label: 'vegetarian', value: 'vegetarian' },
  ];

  return (
    <MainWrapper>
      <RecipeForm onSubmit={handleSubmit}>
        <AddRecepiSection>
          <div>
            <label htmlFor="file" id="labelFile">
              {image !== null && (
                <img src={formFail} alt="" width="279" height="268" />
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ height: '268px' }}
              />
              {image === null && (
                <svg width="50" height="50">
                  <use href={icons + '#icon-img'} alt="ico"></use>
                </svg>
              )}
            </label>
          </div>
          <InputsWrapper localTheme={theme}>
            <input
              // required
              name="title"
              type="text"
              label="RecipeTitle"
              value={recipeTitle}
              onChange={e => setRecipeTitle(e.target.value)}
              placeholder="Enter item title"
            ></input>
            <input
              style={{ paddingTop: '40px' }}
              name="about"
              type="text"
              label="RecipeAbout"
              value={recipeAbout}
              onChange={e => setRecipeAbout(e.target.value)}
              placeholder="Enter about recipe"
            ></input>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p style={{ padding: '40px 0 18px 0' }}>Category</p>
                <Select
                  styles={stylesSelect(theme)}
                  id="category"
                  name="category"
                  options={optionsCategories}
                  value={category}
                  onChange={setCategory}
                ></Select>
              </SelectComp>
            </InputsWithSelectWrapper>
            <InputsWithSelectWrapper>
              <SelectComp localTheme={theme}>
                <p style={{ padding: '40px 0 18px 0' }}>Cooking time</p>
                <Select
                  styles={stylesSelect(theme)}
                  id="cookingTime"
                  name="cookingTime"
                  options={timeOptionsList()}
                  value={cookingTime}
                  defaultValue={cookingTime}
                  onChange={setCookingTime}
                ></Select>
              </SelectComp>
            </InputsWithSelectWrapper>
          </InputsWrapper>
        </AddRecepiSection>

        <RecipeIngredientsList
          ingredients={ingredientsForRecipe}
          onIngredientsChange={handleIngredientsChange}
        />

        <RecepieSection>
          <RecepieSectionTitle>Recipe Preparation</RecepieSectionTitle>
          <textarea
            name="recipe"
            placeholder="Enter recipe"
            onChange={e => setPreparation(e.target.value)}
          ></textarea>
        </RecepieSection>
        <AddBtn type="submit">Add</AddBtn>
      </RecipeForm>

      <PopularSection>
        <TitleFollowUs>Follow us</TitleFollowUs>
        <FollowUs></FollowUs>
        <PopularRecipe />
      </PopularSection>
    </MainWrapper>
  );
};
export default AddRecipeForm;

// import * as React from 'react';
// import { useState } from 'react';
// // import { useSelector } from 'react-redux';
// import { addRecipeAPI } from '../../services/API/Recipes';
// import Select from 'react-select';
// import { store } from '../../redux/store';
// // import { getCategories } from '../../redux/selectors';

// import { getFilteredIngredients } from 'services/API/Recipes';
// import { FollowUs } from 'components/FollowUs/FollowUs';
// import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
// import { stylesSelect } from './selectStyles';
// import { timeOptionsList } from '../../utils/timeOptionsList';
// import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';

// // import { getFilteredIngredients } from 'services/API/Recipes';

// import {
//   AddRecepiSection,
//   InputsWrapper,
//   InputsWithSelectWrapper,
//   SelectComp,
//   RecipeForm,
//   PopularSection,
//   MainWrapper,
//   RecepieSection,
//   AddBtn,
//   TitleFollowUs,
//   RecepieSectionTitle,
// } from 'components/AddRecipeForm/AddRecipeForm.styled';
// import icons from '../../images/sprite.svg';

// const AddRecipeForm = () => {
//   const [recipeTitle, setRecipeTitle] = useState('');
//   const [recipeAbout, setRecipeAbout] = useState('');
//   const [category, setCategory] = useState('');
//   const [cookingTime, setCookingTime] = useState('');
//   const [preparation, setPreparation] = useState('');
//   const [allIngredientsAPI, setAllIngredientsAPI] = useState([]);
//   const [options, setOptions] = useState([]);

//   const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);
//   const [formFail, setFormFail] = useState({
//     image: null,
//   });

//   const image = formFail.image;

//   const handleIngredientsChange = ingredients => {
//     console.log(ingredients);
//     // setIngredients(allIngredientsAPI.find(item => item.ttl === title));

//     setIngredientsForRecipe(ingredients);
//   };

//   const onSearchChange = async text => {
//     console.log(text);
//     try {
//       if (text === '') {
//         return;
//       }

//       await getFilteredIngredients(text).then(data => {
//         setAllIngredientsAPI(data.data);

//         const opt = allIngredientsAPI.map(item => {
//           return { value: item.ttl, label: item.ttl };
//         });
//         console.log(opt);
//         setOptions(opt);
//       });
//     } catch (error) {}
//   };

//   const handleImageChange = event => {
//     const [file] = event.target.files;

//     if (file) {
//       setFormFail(URL.createObjectURL(file));
//     }
//   };

//   const resetForm = () => {
//     setRecipeTitle('');
//     setRecipeAbout('');
//     setCategory('');
//     setCookingTime('');
//     setPreparation('');
//     setIngredientsForRecipe('');
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     e.stopPropagation();

//     const files = e.target.elements[0].files[0];

//     const formData = new FormData();
//     formData.append('img', files);
//     formData.append('title', recipeTitle);
//     formData.append('about', recipeAbout);
//     formData.append('category', category.label);
//     formData.append('time', cookingTime.label);
//     formData.set('ingredients', JSON.stringify(ingredientsForRecipe));
//     formData.append('instructions', preparation);
//     formData.append('description', recipeAbout);

//     addRecipeAPI(formData);
//     resetForm();
//   };

//   const theme = store.theme;
//   const optionsCategories = [
//     { label: 'beef', value: 'beef' },
//     { label: 'dessert', value: 'dessert' },
//     { label: 'breakfast', value: 'breakfast' },
//     { label: 'chicken', value: 'chicken' },
//     { label: 'miscellaneous', value: 'miscellaneous' },
//     { label: 'pasta', value: 'pasta' },
//     { label: 'goat', value: 'goat' },
//     { label: 'pork', value: 'pork' },
//     { label: 'seafood', value: 'seafood' },
//     { label: 'starter', value: 'starter' },
//     { label: 'side', value: 'side' },
//     { label: 'vegan', value: 'vegan' },
//     { label: 'vegetarian', value: 'vegetarian' },
//   ];

//   return (
//     <MainWrapper>
//       <RecipeForm onSubmit={handleSubmit}>
//         <AddRecepiSection>
//           <div>
//             <label htmlFor="file" id="labelFile">
//               {image !== null && (
//                 <img src={formFail} alt="" width="279" height="268" />
//               )}
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 style={{ height: '268px' }}
//               />
//               {image === null && (
//                 <svg width="50" height="50">
//                   <use href={icons + '#icon-img'} alt="ico"></use>
//                 </svg>
//               )}
//             </label>
//           </div>
//           <InputsWrapper localTheme={theme}>
//             <input
//               // required
//               name="title"
//               type="text"
//               label="RecipeTitle"
//               value={recipeTitle}
//               onChange={e => setRecipeTitle(e.target.value)}
//               placeholder="Enter item title"
//             ></input>
//             <input
//               style={{ paddingTop: '40px' }}
//               name="about"
//               type="text"
//               label="RecipeAbout"
//               value={recipeAbout}
//               onChange={e => setRecipeAbout(e.target.value)}
//               placeholder="Enter about recipe"
//             ></input>
//             <InputsWithSelectWrapper>
//               <SelectComp localTheme={theme}>
//                 <p style={{ padding: '40px 0 18px 0' }}>Category</p>
//                 <Select
//                   styles={stylesSelect(theme)}
//                   id="category"
//                   name="category"
//                   options={optionsCategories}
//                   value={category}
//                   onChange={setCategory}
//                 ></Select>
//               </SelectComp>
//             </InputsWithSelectWrapper>
//             <InputsWithSelectWrapper>
//               <SelectComp localTheme={theme}>
//                 <p style={{ padding: '40px 0 18px 0' }}>Cooking time</p>
//                 <Select
//                   styles={stylesSelect(theme)}
//                   id="cookingTime"
//                   name="cookingTime"
//                   options={timeOptionsList()}
//                   value={cookingTime}
//                   defaultValue={cookingTime}
//                   onChange={setCookingTime}
//                 ></Select>
//               </SelectComp>
//             </InputsWithSelectWrapper>
//           </InputsWrapper>
//         </AddRecepiSection>

//         <RecipeIngredientsList
//           onIngredientsChange={handleIngredientsChange}
//           titleOptions={options}
//           onSearchChange={onSearchChange}
//         />

//         <RecepieSection>
//           <RecepieSectionTitle>Recipe Preparation</RecepieSectionTitle>
//           <textarea
//             name="recipe"
//             placeholder="Enter recipe"
//             onChange={e => setPreparation(e.target.value)}
//           ></textarea>
//         </RecepieSection>
//         <AddBtn type="submit">Add</AddBtn>
//       </RecipeForm>

//       <PopularSection>
//         <TitleFollowUs>Follow us</TitleFollowUs>
//         <FollowUs></FollowUs>
//         <PopularRecipe />
//       </PopularSection>
//     </MainWrapper>
//   );
// };
// export default AddRecipeForm;

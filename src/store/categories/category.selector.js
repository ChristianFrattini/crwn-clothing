import { createSelector } from "reselect";

const selectCategoryReducer=(state)=>state.categories

export const selectCategories=createSelector(
    [selectCategoryReducer],
    (categoriesReducer)=> categoriesReducer.categories
)

export const selectCategoriesMap = createSelector([selectCategories],  //as long as the categories array doesnt change then do not rerender
    (categories)=>categories.reduce((acc, category)=>{
        const {title, items}=category;
        acc[title.toLowerCase()]=items
        return acc
      },{})
    )
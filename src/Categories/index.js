import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import  { Skills } from '../Skills';
import { GET_CATEGORIES_QUERY  } from './queries';

export const SkillsByCategory = () => {
    const [categoryId, setCategoryId] = useState(null);
    const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    function handleCategorySelection(e) {
      setCategoryId(e.target.value);
    }

  return(
    <div>
      <h1>Select a category</h1>
      {data.categories.map(function (category) {
        return <button key={category.id} value={category.id} onClick={handleCategorySelection}>
          {category.title}
        </button>;
      })}
      {categoryId && <Skills categoryId={categoryId}/>}
    </div>
  );
}
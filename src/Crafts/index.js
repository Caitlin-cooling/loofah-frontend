import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CRAFTS_QUERY  } from './queries';
import  { Skills } from '../Skills';

export const SkillsByCraft = () => {
  const [craftIds, setCraftIds] = useState([]);
    const { loading, error, data } = useQuery(GET_CRAFTS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    function handleCraftsSelection(e) {
      e.persist();
      setCraftIds(oldArray => [...oldArray, e.target.value]);
    }

  return(
    <div>
      <h1>Select a craft</h1>
      {data.crafts.map(function (craft) {
        return <div key={craft.id}>
          <input type="checkbox" id={craft.id} name={craft.title} value={craft.id} onChange={handleCraftsSelection}/>
          <label htmlFor={craft.title}>{craft.title}</label><br />
        </div>;
      })}
      {craftIds.length && <Skills queryDetails={{
        variables: { filter: { craftIds } }
      }}/>}
    </div>
  );
};

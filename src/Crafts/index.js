import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CRAFTS_QUERY  } from './queries';
import { Craft } from  './Craft';

export const Crafts = () => {
  const [craftId, setCraftId] = useState(null);
    const { loading, error, data } = useQuery(GET_CRAFTS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    function handleCraftSelection(e) {
      setCraftId(e.target.value);
    }

  return(
    <div>
      <h1>Select a craft</h1>
      {data.crafts.map(function (craft) {
        return <button key={craft.id} value={craft.id} onClick={handleCraftSelection}>
          {craft.title}
        </button>;
      })}
      {craftId && <Craft id={craftId}/>}
    </div>
  );
};

import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import  { Skills } from '../Skills';
import { GET_GRADES_QUERY} from './queries';

export const SkillsByGrade = () => {
    const [gradeId, setGradeId] = useState(null);
    const { loading, error, data } = useQuery(GET_GRADES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    function handleGradeSelection(e) {
      setGradeId(e.target.value);
    }

  return(
    <div>
      <h1>Select a grade</h1>
      {data.grades.map(function (grade) {
        return <button key={grade.id} value={grade.id} onClick={handleGradeSelection}>
          {grade.title}
        </button>;
      })}
      {gradeId && <Skills queryDetails={
        {
          variables: { filter: { gradeId } }
        }
      }/>}
    </div>
  );
};

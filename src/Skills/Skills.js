import React, { useState } from 'react';
import Skill from '../Skill/Skill';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_SKILLS =  gql`
    {
      continents {
        name
      }
    }
  `;


const Skills = () => {
  // const [skillsState] = useState({
  //   skills: [
  //     {title: 'JavaScript', description: 'Learn it'},
  //     {title: 'Java', description: 'Keep learning it'}
  //   ]
  // });

  const { loading, error, data } = useQuery(GET_SKILLS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.continents.map(({ continent, name }) => (
    <div key={continent}>
      <p>
        {continent}: {name}
      </p>
    </div>
  ));

  // return (
  //     <div>
  //       <h1>Available Skills</h1>
  //       <Skill
  //         title={skillsState.skills[0].title}
  //         description={skillsState.skills[0].description}/>
  //       <Skill
  //         title={skillsState.skills[1].title}
  //         description={skillsState.skills[1].description}/>
  //     </div>
  // );
};

export default Skills;
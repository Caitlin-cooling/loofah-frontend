import React, { useState } from 'react';
import Skill from '../Skill/Skill';

const Skills = () => {
  const [skillsState, setskillsState] = useState({
    skills: [
      {title: "JavaScript", description: "Learn it"},
      {title: "Java", description: "Keep learning it"}
    ]
  });

  return (
    <div>
      <Skill
        title={skillsState.skills[0].title}
        description={skillsState.skills[0].description}/>
      <Skill
        title={skillsState.skills[1].title}
        description={skillsState.skills[1].description}/>
    </div>
  )
}

export default Skills;
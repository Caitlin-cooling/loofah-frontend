import { gql } from "@apollo/client";


function gradeFilter(searchFilter) {
  return [
   {"grade" : {"eq" : searchFilter.grade}}
   ];
 }


 function craftFilter(searchFilter) {
   if (searchFilter && searchFilter.crafts) {
     return  searchFilter.crafts.map(craft => {
       return {"crafts": {"contains": craft}};
     });
   }
   else return;
 }


 export function generateSkillFilter(searchFilter) {
   return {
     "filter" :
     {
       "or": craftFilter(searchFilter),
       "and": gradeFilter(searchFilter)
     }
   };
 }

export const GET_SKILLS_QUERY = gql`
query ListSkills ($filter: ModelSkillFilterInput)
    { 
        listSkills(filter: $filter) {
            items {
                id
                examples
                headline
                crafts
                grade
                category
            }
        }
    }
`;
// const inital = 0;
// const changeTheNumber = (state = inital, action) =>
// {
//     switch (action.type)
//      {
//         case "INCREMENT": return state+1;
//         case "DECREMENT":return state-1 ;
//          default:state;
//     }
// }

// export default changeTheNumber;

const inital = 0;
function changeTheNumber(state = inital, action)
{
    switch (action.type)
    {
         case "INCREMENT": return state+1;
         case "DECREMENT":return state-1 ;
          default:return state;
     }
}
export default changeTheNumber;
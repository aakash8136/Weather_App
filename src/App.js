import React from 'react';
import './App.css';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard'

/////////Buildeing content with jsx///////////
// function App() {
//   // const submit = 'Click me!';
//      const submit = { text:'Click me!'}
//      const label = ' Enter name:'
//      const style = {backgroundColor:'blue',color:'white'}
//   return (
//    <div>
//      <label className="label" htmlFor="name">
//     {label}
//      </label>
//      <input id="name" type="text" />
//      <button style={style}>{submit.text}</button>
//      </div>
//   );
// }

//////////////communication with prpos////////////
// function App() {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetails
//           author="Sam"
//           timeAgo="Today At 4.45PM"
//           info="Nice post"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetails
//           author="Alex"
//           timeAgo="Today At 6.05PM"
//           info="I like the subject"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>    <ApprovalCard>
//         <CommentDetails
//           author="Jane"
//           timeAgo="Today At 12.35PM"
//           info=" I like writing"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>


//     </div>
//   )
// }

// ///////////classbased component//////////
// // function App () {
// //   window.navigator.geolocation.getCurrentPosition(
// //     (position) => console.log(position),
// //     (err) => console.log(err)
// //   )
// //   return (
// //     <div>HI there</div>
// //   )
// // }
// export default App;

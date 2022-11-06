import Browse_subjects from './pages/Browse_subjects';
import Resources from './components/Resources';
import Browse_Subjects from './components/Browse_Subjects';
import Feed from './components/Feed'
import My_Subjects from './components/My_Subjects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/1.jpeg'
import './assets/2.jpeg'
import './assets/3.jpeg'
import './assets/4.png'
import './assets/5.png'
import './assets/6.jpeg'
import Navbar from './components/Navbar';

function App() {

//   const sliderClick= (slider) =>{
//     alert();
//   }

//   const slides = [{
//     image: '../assets/1.jpeg',
//     title: 'Linear Algebra',
//     description: 'Learn about matrices and linear functions in 3D space!',
//     clickEvent: sliderClick
// },
// {
//     image: '../assets/2.jpeg',
//     title: 'Calculus',
//     description: 'Learn about proofs, integrals, and limits!',
//     clickEvent: sliderClick
// },
// {
//     image: '../assets/3.jpeg',
//     title: 'Computer Science',
//     description: 'Learn different languages such as Python, Java, and more!',
//     clickEvent: sliderClick
// },
// {
//     image: '../assets/4.png',
//     title: 'Biology',
//     description: 'Learn about the human body and different organisms!',
//     clickEvent: sliderClick
// },
// {
//     image: '../assets/5.png',
//     title: 'Chemistry',
//     description: 'Learn about the earth and its elements!',
//     clickEvent: sliderClick
// },
// {
//     image: '../assets/6.jpeg',
//     title: 'Physics',
//     description: 'Learn about general relative and space-time relativity!',
//     clickEvent: sliderClick
// }
// ];

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/My_Subjects" element={<My_Subjects/>}/>
          <Route path="/Browse_Subjects" ele={<Browse_Subjects/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;

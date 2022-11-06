import logo from './logo.svg';
import Browse_subjects from './pages/Browse_subjects';
import Resources from './components/Resources';
import Browse_Subjects from './pages/Browse_subjects';
import My_feed from './pages/My_feed';
import Feed from './components/Feed'
import { Menu } from "@mui/icons-material";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu />
      <Feed/>
      {/* <My_feed /> */}
      {/* <Browse_Subjects /> */}
      {/* <Route path = "/My_feed" component={My_feed} />
      <Route path = "/Browse_subjects" components = {Browse_subjects}/>
      <Route path = "/Resources" components = {Resources}/> */}

      {/* <Resources /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

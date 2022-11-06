import Browse_subjects from './pages/Browse_subjects';
import Resources from './components/Resources';
import Browse_Subjects from './components/Browse_Subjects';
import My_feed from './pages/My_feed';
import Feed from './components/Feed'
import { Menu } from "@mui/icons-material";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <Feed/>
    </div>
  );
}

export default App;

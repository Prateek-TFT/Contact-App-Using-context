import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddContact } from "./Component/AddContact/AddContact";
import { DisplayPage } from "./Component/DisplayContact/DisplayPage";
import { Editcontact } from "./Component/EditContact/Editcontact";
import { Header } from "./Component/UI/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Add-contact" element={<AddContact />} />
        <Route path="/displayPage" element={<DisplayPage />} />
        <Route path="/editcontact" element={<Editcontact />} />
        <Route path="/" element={<AddContact />} />
        <Route path="*" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;

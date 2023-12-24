import {UpperContent} from "./upperContent.js";
import {MiddleContent} from "./middleContent.js";
import { FooterContent } from "./footerContent.js";



import './App.css';

function App() {
  return (
    <div className="App">
    <UpperContent />
    <MiddleContent />
    <FooterContent />
 
    </div>
  );
}

export default App;
export const paddingLR = 10;

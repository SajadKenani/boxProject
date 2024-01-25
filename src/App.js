import {UpperContent} from "./upperContent.js";
import {MiddleContent} from "./middleContent.js";
import { FooterContent } from "./footerContent.js";

import { ScrollProvider } from './ScrollContext';


import './App.css';

function App() {
  return (
    <ScrollProvider>
    <div className="App">
    <UpperContent />
    <MiddleContent />
    <FooterContent />
 
    </div>
    </ScrollProvider>
  );
}

export default App;
export const paddingLR = 10;
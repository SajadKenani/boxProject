import { createContext, useContext } from 'react';


const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
  const scrollToSection = (num) => {
  if (num === 0){
    const element = document.getElementById("mainSection");
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }}

   if (num === 1){
        const element = document.getElementById("ourProjects");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}

    if (num === 2){
        const element = document.getElementById("aboutUsSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }}

    if (num === 3){
        const element = document.getElementById("ContactUsSection");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}

        if (num === 4){
            const element = document.getElementById("GoalsSection");
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
    
   
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
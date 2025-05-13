import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({children }) => {
  
  const [moveLeft, setMoveLeft] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const handleOnClick = (e) => {
    setMoveLeft(true);

    setTimeout(() => {
      setShowThirdSection(true);
    }, 700);
  };

  return (
    <FormContext.Provider
      value={{
        moveLeft,
        setMoveLeft,
        showThirdSection,
        setShowThirdSection,
        handleOnClick,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
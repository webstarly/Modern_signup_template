import React from "react";
import { FormProvider } from "../context/FormContext";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";

const Index = () => {
  return (
      <FormProvider >  
        <div className="h-screen bg-white mx-auto flex justify-center items-center">
          <div className="relative w-[700px] h-[500px] bg-slate-100 rounded-xl shadow-2xl overflow-hidden">
            <FirstSection/>
            <SecondSection/>
          </div>
        </div>
      </FormProvider>
  );
};

export default Index;
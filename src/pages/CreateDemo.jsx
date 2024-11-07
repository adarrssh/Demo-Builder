import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CreateDemo = () => {
  return (
    <main className="w-screen h-screen flex flex-col bg-slate-600">

      <Header />

      {/* iframe contenet  */}
      <section className="w-full  bg-slate-300 flex-1 flex items-center justify-center ">
        <h1 className="text-center">Main Content</h1>
      </section>

      <Footer />
    </main>
  );
};

export default CreateDemo;

import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/Login/loginContext";

import Home from "../Pages/Home/home";
import Partners from "../Pages/Partners/partners";
import Cars from "../Pages/Cars/car";
import Services from "../Pages/Services/service";
import Rezervs from "../Pages/Reserves/reserve";
import Drivers from "../Pages/Drivers/driver";
import Workers from "../Pages/workers/workers";
import Masters from "../Pages/Masters/master.main";

const Wrapper = ({ Component }) => {
  const { userId } = useContext(AuthContext);
  const { lang } = useParams();

  useEffect(() => {
    // localStorage'da dil yoksa ekle
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "az");
    }
  }, []);

  if (!["az", "en", "ru", "tr"].includes(lang)) {
    // URL'deki dil geçersizse otomatik 'az'
    return <Navigate to="/az" replace />;
  }

  // localStorage dilini güncel tut
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return <Component key={lang} lang={lang} userId={userId} />;
};

const RouteList = () => {
  const { userId } = useContext(AuthContext);
  const lang = localStorage.getItem("lang") || "az";

  return (
    <Routes>
      {/* Ana yönlendirme */}
      <Route
        path="/"
        element={
          userId
            ? <Navigate to={`/${lang}/${userId}`} replace />
            : <Navigate to={`/${lang}/login`} replace />
        }
      />

      {/* Sayfalar */}
      <Route path="/:lang/:userId" element={<Wrapper Component={Home} />} />
      <Route path="/:lang/:userId/partners" element={<Wrapper Component={Partners} />} />
      <Route path="/:lang/:userId/cars" element={<Wrapper Component={Cars} />} />
      <Route path="/:lang/:userId/services" element={<Wrapper Component={Services} />} />
      <Route path="/:lang/:userId/rezervs" element={<Wrapper Component={Rezervs} />} />
      <Route path="/:lang/:userId/drivers" element={<Wrapper Component={Drivers} />} />
      <Route path="/:lang/:userId/workers" element={<Wrapper Component={Workers} />} />
      <Route path="/:lang/:userId/masters" element={<Wrapper Component={Masters} />} />

      {/* Geçersiz URL yönlendirmesi */}
      <Route path="*" element={<Navigate to={`/${lang}/${userId || "login"}`} replace />} />
    </Routes>
  );
};

export default RouteList;

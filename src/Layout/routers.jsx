import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";


import { AuthContext } from "@contexts/Login/loginContext";

import Home from "@pages/Home/home";
import Partners from "@pages/Partners/partners";
import Cars from "@pages/Cars/car";
import Services from "@pages/Services/service";
import Rezervs from "@pages/Reserves/reserve";
import Workers from "@pages/workers/workers";
import Masters from "@pages/Masters/master.main";
import AvtoService from "@pages/AvtoService/avtoservice.main";
import OilChangeList from "@pages/OilChange/oilChange.main";
import RepairMain from "@pages/Repair/repair.main";

const Wrapper = ({ Component }) => {

  const { userId } = useContext(AuthContext);
  const { lang } = useParams();

  useEffect(() => {
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
      <Route path="/:lang/:userId/workers" element={<Wrapper Component={Workers} />} />
      <Route path="/:lang/:userId/masters" element={<Wrapper Component={Masters} />} />
      <Route path="/:lang/:userId/avtoservis" element={<Wrapper Component={AvtoService} />} />
      <Route path="/:lang/:userId/oilchange" element={<Wrapper Component={OilChangeList} />} />
      <Route path="/:lang/:userId/repair" element={<Wrapper Component={RepairMain} />} />

      {/* Geçersiz URL yönlendirmesi */}
      <Route path="*" element={<Navigate to={`/${lang}/${userId || "login"}`} replace />} />
    </Routes>
  );
};

export default RouteList;

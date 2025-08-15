import React, { useContext } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/Login/loginContext";

import Home from "../Pages/Home/home";
import Partners from "../Pages/Partners/partners";
import Cars from "../Pages/Cars/car";
import Services from "../Pages/Services/service";
import Rezervs from "../Pages/Reserves/reserve";
import Drivers from "../Pages/Drivers/driver";
import Workers from "../Pages/workers/workers";

const Wrapper = ({ Component }) => {
  const { userId } = useContext(AuthContext);
  const { lang } = useParams();

  if (!["az", "en", "ru", "tr"].includes(lang)) {
    return <Navigate to="/az" replace />;
  }


  return <Component key={lang} lang={lang} userId={userId} />;
};

const RouteList = () => {
  const { userId } = useContext(AuthContext);
  const lang = localStorage.getItem("lang") || "az";

  return (
    <Routes>
      {/* Eğer sadece "/" adresine gidilirse, giriş yapmışsa Home sayfasına yönlendir */}
      <Route path="/" element={userId ? <Navigate to={`/${lang}/${userId}`} replace /> : <Navigate to={`/${lang}/login`} replace />} />

      {/* Ana Sayfa */}
      <Route path="/:lang/:userId" element={<Wrapper Component={Home} />} />

      {/* Partners Sayfası */}
      <Route path="/:lang/:userId/partners" element={<Wrapper Component={Partners} />} />
      
      <Route path="/:lang/:userId/cars" element={<Wrapper Component={Cars} />} />

      <Route path="/:lang/:userId/services" element={<Wrapper Component={Services} />} />

      <Route path="/:lang/:userId/rezervs" element={<Wrapper Component={Rezervs} />} />

      <Route path="/:lang/:userId/drivers" element={<Wrapper Component={Drivers} />} />

      <Route path="/:lang/:userId/workers" element={<Wrapper Component={Workers} />} />

      {/* Geçersiz URL'ler mevcut dile yönlendirilecek */}
      <Route path="*" element={<Navigate to={`/${lang}/${userId || "login"}`} replace />} />
    </Routes>
  );
};

export default RouteList;

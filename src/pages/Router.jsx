import { Route, Routes, Navigate } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return (
    <div className="bg-slate-300 h-dvh">
    <Routes>
      {pageRoutes}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
    </div>
  );
};

export default Router;

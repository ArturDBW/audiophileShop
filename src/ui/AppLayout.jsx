import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { ModalCart } from "../components/ModalCart";

export const AppLayout = () => {
  const [openModalCart, setOpenModalCart] = useState(false);

  return (
    <div>
      <Header
        openModalCart={openModalCart}
        setOpenModalCart={setOpenModalCart}
      />
      {openModalCart && (
        <ModalCart
          openModalCart={openModalCart}
          setOpenModalCart={setOpenModalCart}
        />
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

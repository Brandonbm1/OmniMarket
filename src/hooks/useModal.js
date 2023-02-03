import { useEffect, useState } from "react";

export const useModal = (identifier) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    isModalOpen ? showModal() : closeModal();
  }, [isModalOpen]);

  const background = document.querySelector(".cart");

  const showModal = () => {
    background?.classList.add("disable");
  };
  const closeModal = () => {
    background?.classList.remove("disable");
  };
  const handleModal = (option) => {
    setIsModalOpen(option);
  };
  return { isModalOpen, handleModal };
};

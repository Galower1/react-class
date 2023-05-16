import { useState } from "react";

export function useModal() {
  const [toggleModal, setToggleModal] = useState(false);

  const changeModalStatus = () => setToggleModal((prev) => !prev);
  return { toggleModal, changeModalStatus };
}

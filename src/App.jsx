import ArtistForm from "./components/ArtistForm";
import GroupFormModal from "./components/GroupFormModal";
import Todos from "./components/Todos";
import { useModal } from "./hooks/useModal";

function App() {
  const { toggleModal, changeModalStatus } = useModal();

  return (
    <>
      <button onClick={changeModalStatus}>Toggle Modal</button>
      <GroupFormModal open={toggleModal} onClose={changeModalStatus} />
      <ArtistForm />
      <Todos />
    </>
  );
}

export default App;

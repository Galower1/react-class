export default function Reflect({ open, onClose, title, artist }) {
  return (
    <div
      style={{
        display: `${open ? "block" : "none"}`,
      }}
    >
      <h1>{title}</h1>
      {artist ? <p>This is an artist</p> : <p>This is a band</p>}
      <button onClick={onClose}>Close modal</button>
    </div>
  );
}

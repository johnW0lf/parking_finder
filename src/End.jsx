import { useNavigate } from "react-router-dom";
export default function End() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ marginTop: "40vh", fontSize: "48px", marginBottom: "30px" }}
      >
        You Reached a deadEnd
      </div>
      <button onClick={() => navigate(`/`)}>Start Again</button>
    </>
  );
}

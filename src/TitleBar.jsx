import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
export default function Titlebar() {
  const navigate = useNavigate();
  return (
    <div
      className="logo_container"
      style={{ position: "relative" }}
      onClick={() => navigate("/")}
    >
      <img src={logo} className="logo" height={90} />
    </div>
  );
}

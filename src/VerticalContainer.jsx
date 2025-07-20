export default function VerticalContainer({ price, landmark, onClick }) {
  return (
    <div className="vertical_container" onClick={onClick}>
      <div className="price_container">
        <div
          style={{
            fontSize: "32px",
          }}
        >
          ₹{price}
        </div>
        <div> /30minutes</div>
      </div>
      <div
        className="landmark_container"
        style={{
          fontSize: "12px",
        }}
      >
        {landmark}
      </div>
    </div>
  );
}

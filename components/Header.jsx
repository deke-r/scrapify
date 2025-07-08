
const Header = ({h2}) => {
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <div className="d-flex align-items-center text-muted">
        <div className="border-top border-2 border-success flex-grow-1 me-3" style={{ width: '60px' }}></div>
      
        <h2 className="m-0 fw-bold text-success">{h2}</h2>
        <div className="border-top border-2 border-success flex-grow-1 ms-3" style={{ width: '60px' }}></div>
      </div>
    </div>
  );
};

export default Header;

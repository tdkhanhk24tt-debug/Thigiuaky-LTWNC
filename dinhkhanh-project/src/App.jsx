import "./App.css";
import banner from "./assets/banner.png";
import logo from "./assets/logo.png";
import anhCafe1 from "./assets/anh-cafe-1.png";
import anhCafe2 from "./assets/anh-cafe-2.png";
import anhCafe3 from "./assets/anh-cafe-3.png";
import caPheCheBien from "./assets/ca-phe-che-bien.jpg";
import cafeHienNay from "./assets/cafe-hien-nay.jpg";
import button from "./assets/button.png";
export default function App() {
  return (
    <div>
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="overlay">
          <div className="header">
            <img src={logo} alt="logo" className="logo" />

            <nav className="nav">
              <span>Trang chủ</span>
              <span>Giới thiệu</span>
              <span>Thực đơn</span>
              <span>Tin tức</span>
              <span>Liên hệ</span>
              <span>Đặt bàn</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid">
        <img src={anhCafe1}/>
      <div className="grid-right">
        <img src={anhCafe2}/>
        <img src={anhCafe3}/>
      </div>
      </div>

      <div className="menu-section">
  <div className="menu-overlay">

    <h1 className="title">Menu</h1>

    <div className="menu-list">
      <div className="menu1">
        <p>Cà phê sữa .............................. 25k</p>
        <p>Cà phê muối ............................. 25k</p>
        <p>Cà phê dừa .............................. 25k</p>
        <p>Cà phê Sữa Sài Gòn ................ 25k</p>
        <p>Cà phê đen ............................... 20k</p>
      </div>

      <div className="menu1">
        <p>Cà phê Espresso ..................... 35k</p>
        <p>Cà phê Mocha .......................... 35k</p>
        <p>Cà phê Capuchino ................... 35k</p>
        <p>Cà phê Latte ............................. 35k</p>
        <p>Cà phê IceCream Latte ............ 40k</p>
      </div>
    </div>

    <button className="btn" style={{ backgroundImage: `url(${button})` }}>
      <p>Xem thêm Menu</p>
    </button>

  </div>
</div>
      <div className="news">
        <div className="card1">
          <img src={caPheCheBien} alt="" />
          <h3>Chế biến cà phê</h3>
          <p>Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kì loại bột, phụ gia nào.</p>
        </div>

        <div className="card2">
          <img src={cafeHienNay} alt="" />
          <h3>Cà phê phổ biến</h3>
          <p>Điểm danh 20 loại cà phê phổ biến được ưa chuộng tại Việt Nam </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-brand">
          <img src={logo} alt="" className="footer-logo-img"/>
          <h2>Trần Đình Khánh Coffee</h2>
        </div>
  <div className="footer-container">
    <div className="footer-col">
      <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
      <p>
        Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất.
        Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn.
      </p>
      <div className="social">
        <button>facebook</button>
        <button>instagram</button>
        <button>tiktok</button>
        <button>twitter</button>
        <button>youtube</button>
      </div>
    </div>
    <div className="footer-col">
      <h4>LIÊN HỆ</h4>
      <p>Xã Ngọk Bay, Quảng Ngãi</p>
      <p>holine: 0344 559 541</p>
      <p>Email:tdkhanh.k24tt@kontum.udn.vn</p>
      <p>facebook: fb.com/tdkhanh</p>
    </div>
    <div className="footer-col">
      <h4>CHÍNH SÁCH</h4>
      <p>Trang chủ</p>
      <p>Giới thiệu</p>
      <p>Thực đơn</p>
      <p>Tin tức</p>
      <p>Liên hệ</p>
      <p>Đặt bàn</p>
    </div>
    <div className="footer-col">
      <h4>FANPAGE</h4>
      <div className="fanpage-box">
        <p><b>Meta</b></p>
        <p>106 người theo dõi</p>
        <button className="follow-btn">Theo dõi</button>
      </div>
      <button className="book-btn">
        ĐẶT BÀN
      </button>
    </div>
  </div>
</div>
    </div>
  );
}
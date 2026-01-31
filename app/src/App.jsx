import { useEffect, useRef, useState } from 'react'
import {
  Activity,
  Heart,
  Zap,
  Menu,
  X,
  ChevronDown,
  Users,
  Shield,
  Clock,
  Gamepad2,
  Smartphone,
  Mic,
  Facebook,
  Instagram,
  Music2,
  Mail,
  Phone,
  Handshake,
  User
} from 'lucide-react'
import './App.css'

/* ═══════════════════════════════════════════════════════
   AURORA BACKGROUND COMPONENT
   ═══════════════════════════════════════════════════════ */
function AuroraBackground() {
  return (
    <div className="aurora-background">
      <div className="aurora-blob aurora-blob--green"></div>
      <div className="aurora-blob aurora-blob--purple"></div>
      <div className="aurora-blob aurora-blob--mixed"></div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   NAVIGATION COMPONENT
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Trang Chủ', href: '#' },
    { label: 'Thực Trạng', href: '#thuc-trang' },
    { label: 'Giải Pháp', href: '#giai-phap' },
    { label: 'Đổi Mới', href: '#doi-moi' },
    { label: 'Lộ Trình', href: '#lo-trinh' },
    { label: 'Liên Hệ', href: '#lien-he' },
  ]

  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <Zap className="navbar__logo-icon" size={24} />
          Before It Strikes
        </a>
        <ul className="navbar__links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="navbar__link">{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#dang-ky" className="navbar__cta">Tham Gia Ngay</a>
          </li>
        </ul>
        <button
          className="navbar__menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu__close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="mobile-menu__link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#dang-ky"
          className="btn btn-primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          Tham Gia Ngay
        </a>
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION COMPONENT
   ═══════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero section">
      <span className="hero__badge">🩺 Sáng Kiến Phòng Ngừa Đột Quỵ</span>
      <h1 className="hero__title">
        BEFORE
        <span className="hero__title-accent">IT STRIKES</span>
      </h1>
      <p className="hero__subtitle">
        Sáng Kiến Phòng Ngừa Đột Quỵ Dẫn Dắt Bởi Chuyên Gia
      </p>
      <p className="hero__tagline">
        "Đừng đợi biến cố ập đến. Hãy hành động trước khi quá muộn."
      </p>
      <div className="hero__cta-group">
        <a href="#doi-moi" className="btn btn-primary">
          <Zap size={20} />
          Khám Phá Đổi Mới
        </a>
        <a href="#lo-trinh" className="btn btn-ghost">
          <Clock size={20} />
          Xem Lộ Trình
        </a>
      </div>
      <div className="hero__scroll-indicator">
        <ChevronDown size={32} />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════════════════ */
function useScrollReveal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return sectionRef
}

/* ═══════════════════════════════════════════════════════
   STATS SECTION COMPONENT (Thực Trạng)
   ═══════════════════════════════════════════════════════ */
function Stats() {
  const sectionRef = useScrollReveal()

  return (
    <section id="thuc-trang" className="stats section" ref={sectionRef}>
      <h2 className="section__title">Thực Trạng Đột Quỵ</h2>
      <p className="section__subtitle">
        Hiểu rõ mối nguy là bước đầu tiên để phòng ngừa
      </p>
      <div className="stats__container">
        <div className="stat-card stat-card--danger">
          <div className="stat-card__icon">
            <Heart size={40} color="#EF4444" />
          </div>
          <div className="stat-card__number">#1</div>
          <div className="stat-card__label">
            Đột quỵ là nguyên nhân gây tử vong hàng đầu tại Việt Nam
          </div>
        </div>
        <div className="stat-card stat-card--success">
          <div className="stat-card__icon">
            <Activity size={40} color="#D4FF00" />
          </div>
          <div className="stat-card__number">80%</div>
          <div className="stat-card__label">
            Có thể phòng ngừa bằng thay đổi lối sống
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   THREE PILLARS SECTION COMPONENT (Trụ Cột)
   ═══════════════════════════════════════════════════════ */
function Pillars() {
  const sectionRef = useScrollReveal()

  const pillars = [
    {
      icon: <Users size={32} />,
      title: 'Chuyên Gia Dẫn Dắt',
      description: 'Tương tác trực tiếp với bác sĩ thần kinh hàng đầu. Nhận tư vấn cá nhân hóa và giải đáp mọi thắc mắc về sức khỏe não bộ.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Phòng Ngừa Chủ Động',
      description: 'Dinh dưỡng và vận động là liều thuốc tiên. Xây dựng lối sống lành mạnh để giảm thiểu nguy cơ đột quỵ từ gốc.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Sẵn Sàng Cấp Cứu (F.A.S.T)',
      description: 'Thực hành quy tắc F.A.S.T để xử lý giờ vàng: Face - Arm - Speech - Time. Mỗi giây đều quý giá!'
    }
  ]

  return (
    <section id="giai-phap" className="section" ref={sectionRef}>
      <h2 className="section__title">Ba Trụ Cột Của Chúng Tôi</h2>
      <p className="section__subtitle">
        Tiếp cận toàn diện để phòng ngừa và ứng phó với đột quỵ
      </p>
      <div className="pillars__grid">
        {pillars.map((pillar, index) => (
          <div className="pillar-card" key={index}>
            <div className="pillar-card__icon">{pillar.icon}</div>
            <h3 className="pillar-card__title">{pillar.title}</h3>
            <p className="pillar-card__description">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   INNOVATION HUB SECTION COMPONENT (Đổi Mới)
   ═══════════════════════════════════════════════════════ */
function Innovation() {
  const sectionRef = useScrollReveal()

  const innovations = [
    {
      badge: 'Gamification',
      icon: <Gamepad2 size={28} />,
      title: 'Giải Đấu Ma Sói',
      description: 'Mô phỏng rủi ro đột quỵ qua game tâm lý hấp dẫn. Học cách nhận diện "kẻ thù" ẩn núp trong cơ thể qua trò chơi Ma Sói phiên bản y tế độc đáo.'
    },
    {
      badge: 'Công Nghệ',
      icon: <Smartphone size={28} />,
      title: 'Công Nghệ Tầm Soát',
      description: 'Thiết bị đo lường nguy cơ đột quỵ nhanh chóng ngay tại sự kiện. Nhận kết quả tức thì và tư vấn cá nhân hóa từ chuyên gia.'
    },
    {
      badge: 'Chuyên Gia',
      icon: <Mic size={28} />,
      title: 'Talkshow Genetica',
      description: 'Giải mã gen cùng chuyên gia di truyền học hàng đầu. Khám phá yếu tố di truyền và xây dựng chiến lược phòng ngừa phù hợp với bạn.'
    }
  ]

  return (
    <section id="doi-moi" className="section innovation" ref={sectionRef}>
      <h2 className="section__title">Trung Tâm Đổi Mới</h2>
      <p className="section__subtitle">
        Tiên phong trong cách tiếp cận phòng ngừa đột quỵ qua công nghệ và gamification
      </p>
      <div className="innovation__grid">
        {innovations.map((item, index) => (
          <div className="innovation-card" key={index}>
            <span className="innovation-card__badge">{item.badge}</span>
            <div className="innovation-card__icon">{item.icon}</div>
            <h3 className="innovation-card__title">{item.title}</h3>
            <p className="innovation-card__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   ROADMAP / TIMELINE SECTION COMPONENT (Lộ Trình)
   ═══════════════════════════════════════════════════════ */
function Roadmap() {
  const sectionRef = useScrollReveal()

  const events = [
    {
      date: '28/02/2026',
      title: 'Offline Booth - Trải Nghiệm & Tầm Soát',
      description: 'Tham gia booth trải nghiệm với tầm soát nguy cơ đột quỵ miễn phí, trò chơi Ma Sói phiên bản y tế, và gặp gỡ chuyên gia tư vấn sức khỏe.',
      status: 'Sắp Diễn Ra',
      variant: 'primary'
    },
    {
      date: '05/03/2026',
      title: 'Talkshow & Giải Đấu Ma Sói (Sự Kiện Chính)',
      description: 'Sự kiện chính với Talkshow Genetica giải mã gen, Giải đấu Ma Sói lớn nhất, và nhiều hoạt động hấp dẫn. Đừng bỏ lỡ!',
      status: 'Sự Kiện Chính',
      variant: 'secondary'
    }
  ]

  return (
    <section id="lo-trinh" className="section" ref={sectionRef}>
      <h2 className="section__title">Lộ Trình Sự Kiện</h2>
      <p className="section__subtitle">
        Đánh dấu lịch cho những sự kiện quan trọng sắp tới
      </p>
      <div className="roadmap__timeline">
        {events.map((event, index) => (
          <div className={`timeline-item timeline-item--${event.variant}`} key={index}>
            <div className="timeline-item__dot"></div>
            <div className="timeline-item__date">{event.date}</div>
            <div className="timeline-item__content">
              <h3 className="timeline-item__title">{event.title}</h3>
              <p className="timeline-item__description">{event.description}</p>
              <span className="timeline-item__status">{event.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   REGISTRATION FORM SECTION (Đăng Ký)
   ═══════════════════════════════════════════════════════ */
function Registration() {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.')
  }

  return (
    <section id="dang-ky" className="section registration" ref={sectionRef}>
      <h2 className="section__title">Đăng Ký Tham Gia</h2>
      <p className="section__subtitle">
        Workshop & Talkshow - Sự kiện không thể bỏ lỡ
      </p>
      <div className="registration__container">
        <div className="registration__date-banner">
          <div className="registration__calendar">
            <div className="registration__calendar-month">THÁNG 03</div>
            <div className="registration__calendar-day">05</div>
            <div className="registration__calendar-year">2026</div>
          </div>
          <div className="registration__date-info">
            <div className="registration__date-label">Thứ Năm</div>
            <div className="registration__date-title">Ngày Diễn Ra Sự Kiện</div>
            <div className="registration__date-note">🔥 Đăng ký sớm để nhận ưu đãi đặc biệt!</div>
          </div>
        </div>
        <form className="registration__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group__label" htmlFor="name">Họ và Tên</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-group__input"
              placeholder="Nhập họ và tên của bạn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-group__label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-group__input"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-group__label" htmlFor="phone">Số Điện Thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-group__input"
              placeholder="0901 234 567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-group__label" htmlFor="role">Bạn là?</label>
            <select
              id="role"
              name="role"
              className="form-group__select"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Chọn vai trò --</option>
              <option value="student">Sinh viên</option>
              <option value="worker">Người đi làm</option>
            </select>
          </div>
          <button type="submit" className="registration__submit">
            <Zap size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
            Gửi Đăng Ký
          </button>
        </form>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PARTNERS SECTION (Đối Tác Đồng Hành)
   ═══════════════════════════════════════════════════════ */
function Partners() {
  const sectionRef = useScrollReveal()

  const partners = [
    { name: 'Genetics', logo: '/sponsors/Genetics.png' },
    { name: 'Skillcetera', logo: '/sponsors/Skillcetera_Logo_Den.png' },
    // Add more partners here as needed
  ]

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

  return (
    <section id="doi-tac" className="section partners" ref={sectionRef}>
      <h2 className="section__title">Đối Tác Đồng Hành</h2>
      <p className="section__subtitle">
        Cảm ơn các đối tác đã tin tưởng và đồng hành cùng chúng tôi
      </p>
      <div className="partners__marquee">
        <div className="partners__track">
          {duplicatedPartners.map((partner, index) => (
            <div className="partner-logo" key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CONTACT SECTION (Liên Hệ Hợp Tác)
   ═══════════════════════════════════════════════════════ */
function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section id="lien-he" className="section contact" ref={sectionRef}>
      <h2 className="section__title">Hợp Tác & Tài Trợ</h2>
      <p className="section__subtitle">
        Liên hệ với chúng tôi để trở thành đối tác đồng hành
      </p>
      <div className="contact__box">
        <div className="contact__box-header">
          <Handshake size={40} className="contact__box-icon" />
          <div>
            <h3 className="contact__box-title">Thông Tin Liên Hệ</h3>
            <p className="contact__box-subtitle">Chúng tôi luôn sẵn sàng lắng nghe</p>
          </div>
        </div>

        <div className="contact__box-content">
          <div className="contact__row">
            <User size={22} className="contact__row-icon" />
            <div className="contact__row-info">
              <span className="contact__row-label">Người Liên Hệ</span>
              <span className="contact__row-value">Nguyễn Văn A</span>
            </div>
          </div>

          <div className="contact__row">
            <Mail size={22} className="contact__row-icon" />
            <div className="contact__row-info">
              <span className="contact__row-label">Email</span>
              <a href="mailto:contact@beforeitstrikes.vn" className="contact__row-value contact__row-value--link">
                contact@beforeitstrikes.vn
              </a>
            </div>
          </div>

          <div className="contact__row">
            <Phone size={22} className="contact__row-icon" />
            <div className="contact__row-info">
              <span className="contact__row-label">Số Điện Thoại</span>
              <a href="tel:0901234567" className="contact__row-value contact__row-value--link">
                0901 234 567
              </a>
            </div>
          </div>
        </div>

        <p className="contact__box-note">
          Chúng tôi luôn chào đón các doanh nghiệp và tổ chức muốn đồng hành cùng sứ mệnh
          nâng cao nhận thức về phòng ngừa đột quỵ trong cộng đồng.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FOOTER COMPONENT
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__logo">
            <Zap className="footer__logo-icon" size={24} />
            Before It Strikes
          </div>
          <p className="footer__tagline">
            Sáng kiến phòng ngừa đột quỵ dẫn dắt bởi chuyên gia
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="TikTok">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        <div className="footer__info">
          <h4 className="footer__info-title">Đơn Vị Tổ Chức</h4>
          <p className="footer__info-text">Câu lạc bộ Sinh viên FPT University</p>
          <p className="footer__info-text">Trường Đại học FPT</p>
        </div>

        <div className="footer__info">
          <h4 className="footer__info-title">Địa Chỉ</h4>
          <p className="footer__info-text">Lô E2a-7, Đường D1, Khu Công nghệ cao</p>
          <p className="footer__info-text">P. Long Thạnh Mỹ, TP. Thủ Đức</p>
          <p className="footer__info-text">Thành phố Hồ Chí Minh</p>
        </div>

        <div className="footer__info">
          <h4 className="footer__info-title">Liên Kết</h4>
          <a href="#" className="footer__link">Chính Sách Bảo Mật</a>
          <a href="#" className="footer__link">Điều Khoản Sử Dụng</a>
          <a href="#lien-he" className="footer__link">Liên Hệ Hợp Tác</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Before It Strikes. Dự án vì sức khỏe cộng đồng.
        </p>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════════════════════════ */
function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Innovation />
        <Roadmap />
        <Registration />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

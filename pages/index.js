
export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Produk Keluaran Muslim • Kualiti Premium</div>
            <h1>
              Eggstra <span className="gold">Crunch</span>
            </h1>
            <p className="subtitle">
              Maruku Salted Egg yang rangup, premium dan memang ketagih.
              Sesuai untuk minum petang, hadiah & corporate gifting.
            </p>

            <div className="price-box">
              <p>Satu balang 250g</p>
              <div className="price">RM24</div>
              <p>Beli 4 balang = Free Shipping</p>
            </div>

            <div className="btns">
              <a className="btn primary" href="https://wa.me/601116330149" target="_blank">
                WhatsApp Namirah
              </a>

              <a className="btn secondary" href="https://wa.me/60186959795" target="_blank">
                WhatsApp Hakim
              </a>
            </div>
          </div>

          <div>
            <img src="/poster1.jpeg" alt="Eggstra Crunch"/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Kenapa Orang Suka Eggstra Crunch?</h2>

          <div className="features">
            <div className="card">
              <h3>Rangup & Ketagih</h3>
              <p>Texture crunchy premium dengan rasa salted egg yang padu.</p>
            </div>

            <div className="card">
              <h3>Premium Quality</h3>
              <p>Dibuat dengan bahan berkualiti dan packaging eksklusif.</p>
            </div>

            <div className="card">
              <h3>Sesuai Semua Situasi</h3>
              <p>Minum petang, family gathering, hadiah & corporate event.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Gallery Produk</h2>

          <div className="gallery">
            <img src="/poster2.jpeg" alt="gallery"/>
            <img src="/poster3.jpeg" alt="gallery"/>
            <img src="/poster4.jpeg" alt="gallery"/>
            <img src="/poster1.jpeg" alt="gallery"/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Apa Customer Cakap</h2>

          <div className="testimonials">
            <div className="testimonial">
              <p>"Serius sedap. Sekali makan memang susah nak stop."</p>
              <strong>— Aina, KL</strong>
            </div>

            <div className="testimonial">
              <p>"Packaging nampak premium. Sesuai buat hadiah."</p>
              <strong>— Faris, Shah Alam</strong>
            </div>

            <div className="testimonial">
              <p>"Salted egg dia ngam. Tak muak langsung."</p>
              <strong>— Nabilah, Johor</strong>
            </div>

            <div className="testimonial">
              <p>"Office aku repeat order sebab semua staff suka."</p>
              <strong>— Syafiq, Penang</strong>
            </div>

            <div className="testimonial">
              <p>"Worth every ringgit. Beli 4 terus jimat shipping."</p>
              <strong>— Mira, Selangor</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="corporate">
            <h2 style={{fontSize:'42px', marginBottom:'20px'}}>
              Corporate & Bulk Order
            </h2>

            <p style={{fontSize:'20px', marginBottom:'30px'}}>
              Sesuai untuk event, doorgift, pantry office, hampers & hadiah pelanggan.
            </p>

            <a className="btn secondary" href="https://wa.me/601116330149" target="_blank">
              Tanya Harga Corporate
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3>Eggstra Crunch</h3>
          <p>Maruku Salted Egg Premium</p>
          <br/>
          <p>WhatsApp:</p>
          <p>Namirah — 011-16330149</p>
          <p>Hakim — 018-6959795</p>
        </div>
      </footer>
    </>
  )
}

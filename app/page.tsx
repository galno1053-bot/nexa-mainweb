import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <Image src="/logo.svg" alt="Nexa logo" width={30} height={30} />
          <div className="brand-text">
            <span className="brand-name">Nexa</span>
            <span className="brand-tag">Crypto Lending IDR</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#features">Fitur</a>
          <a href="#flow">Alur</a>
          <a href="#faq">FAQ</a>
          <a href="#docs">Docs</a>
        </nav>
        <button className="primary" type="button">
          Launch App
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Nexa Lending</p>
            <h1>Pinjam IDR dengan jaminan crypto yang aman.</h1>
            <p className="lead">
              Ringkas, transparan, dan profesional. Saat ini mendukung ETH dan
              USDC di Base.
            </p>
            <div className="actions">
              <button className="primary" type="button">
                Mulai Sekarang
              </button>
              <button className="ghost" type="button">
                Lihat Docs
              </button>
            </div>
            <div className="chips">
              <span className="chip">ETH</span>
              <span className="chip">USDC</span>
              <span className="chip">Base</span>
              <span className="chip outline">IDR</span>
            </div>
          </div>

          <div className="bridge">
            <div className="bridge-side">
              <span className="label">CRYPTO</span>
              <span className="value">ETH · USDC</span>
            </div>

            <div className="bridge-center" aria-label="Bridge animation">
              <svg viewBox="0 0 480 120" className="bridge-svg" role="img">
                <path
                  d="M20 96 C120 10, 360 10, 460 96"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle r="4" fill="#2e6bff">
                  <animateMotion
                    dur="3.2s"
                    repeatCount="indefinite"
                    path="M20 96 C120 10, 360 10, 460 96"
                  />
                </circle>
              </svg>
              <span className="bridge-note">Connecting</span>
            </div>

            <div className="bridge-side right">
              <span className="label">FIAT</span>
              <span className="value">IDR / Rupiah</span>
            </div>
          </div>
        </section>

        <section className="trust">
          <p>Trusted by builders &amp; partners</p>
          <div className="trust-logos">
            <span>Uniswap</span>
            <span>Indodax</span>
            <span>CertiK</span>
            <span>Nusa</span>
            <span>Base</span>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-head">
            <p className="section-kicker">Features</p>
            <h2>Key features yang penting dan jelas.</h2>
          </div>
          <div className="feature-grid">
            <article>
              <h3>Agunan Aman</h3>
              <p>Crypto tetap terkunci sampai pinjaman lunas.</p>
            </article>
            <article>
              <h3>Pencairan Cepat</h3>
              <p>Pinjaman IDR cair ke rekening lokal.</p>
            </article>
            <article>
              <h3>Biaya Transparan</h3>
              <p>Rasio jelas dan simulasi sebelum transaksi.</p>
            </article>
            <article>
              <h3>Akses Global</h3>
              <p>Siap dipakai siapa pun dengan wallet crypto.</p>
            </article>
          </div>
        </section>

        <section id="flow" className="split">
          <div className="split-text">
            <p className="section-kicker">Flow</p>
            <h2>Alur ringkas untuk sampai ke rupiah.</h2>
            <p className="lead">
              Deposit agunan, pilih jumlah pinjaman, dana cair. Semua dilakukan
              dengan kontrol penuh dan dokumentasi yang jelas.
            </p>
            <button className="ghost" type="button">
              Lihat Detail
            </button>
          </div>
          <div className="split-card">
            <div className="step">
              <span>01</span>
              <div>
                <h4>Kunci Agunan</h4>
                <p>Deposit ETH/USDC ke kontrak.</p>
              </div>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h4>Pinjam IDR</h4>
                <p>Pilih jumlah, dana cair ke rekening.</p>
              </div>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h4>Lunasi</h4>
                <p>Bayar pinjaman, agunan kembali.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="section-head">
            <p className="section-kicker">FAQ</p>
            <h2>Frequently asked questions.</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Apa itu Nexa Lending?</summary>
              <p>Platform untuk pinjam IDR dengan jaminan crypto.</p>
            </details>
            <details>
              <summary>Aset apa yang didukung?</summary>
              <p>ETH dan USDC di jaringan Base.</p>
            </details>
            <details>
              <summary>Bagaimana dana IDR dicairkan?</summary>
              <p>Ditransfer ke rekening bank lokal setelah konfirmasi.</p>
            </details>
            <details>
              <summary>Apakah biaya transparan?</summary>
              <p>Semua biaya dan rasio ditampilkan sebelum transaksi.</p>
            </details>
          </div>
        </section>

        <section id="docs" className="cta-band">
          <div>
            <h2>Siap untuk versi web app yang lengkap.</h2>
            <p className="lead">
              Struktur ini sudah rapi untuk pengembangan dashboard lending.
            </p>
          </div>
          <button className="primary" type="button">
            Masuk App
          </button>
        </section>
      </main>

      <footer className="footer">
        <span>Nexa Lending</span>
        <span>Crypto collateral for real IDR.</span>
      </footer>
    </div>
  );
}
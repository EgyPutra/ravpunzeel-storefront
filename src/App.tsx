import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Heart,
  Menu,
  Search,
  Send,
  Sparkles,
  X,
} from 'lucide-react'
import { formatPrice, products, type Product } from './products'

const categories = ['Semua Produk', 'Scrapbook', 'Valentine', 'Sosial Media', 'Wisuda', 'Girlfriend Day']

const faqs = [
  {
    question: 'Apakah template dapat digunakan di Canva Free?',
    answer: 'Bisa. Semua template dapat digunakan di Canva Free maupun Canva Pro, lalu disesuaikan dengan ceritamu.',
  },
  {
    question: 'Bagaimana cara menerima file setelah membeli?',
    answer: 'Pilih template, selesaikan pembayaran di Lynk.id, lalu ikuti petunjuk untuk menerima aksesnya.',
  },
  {
    question: 'Bisakah ukuran template diubah?',
    answer: 'Bisa. Kamu dapat menyesuaikan ukuran dan isi desain langsung di Canva.',
  },
  {
    question: 'Bolehkah template dijual kembali?',
    answer: 'Template hanya untuk penggunaan pribadi dan tidak untuk dijual kembali.',
  },
]

function App() {
  const [category, setCategory] = useState('Semua Produk')
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<Product | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const visibleProducts = useMemo(() => {
    const query = search.toLowerCase().trim()
    return products.filter((product) => {
      const categoryValue = category === 'Sosial Media' ? 'Social Media' : category === 'Wisuda' ? 'Graduation' : category
      const matchesCategory = category === 'Semua Produk' || product.category.includes(categoryValue as never)
      const searchableText = [product.name, product.description, ...product.category].join(' ').toLowerCase()
      const matchesSearch = !query || searchableText.includes(query)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>✦</span> Akses Canva instan <span>✦</span> Template mudah diedit <span>✦</span> Bayar aman lewat Lynk
      </div>

      <header className="navbar">
        <div className="nav-inner">
          <button className="icon-button menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <button className="brand" onClick={() => scrollTo('home')}>RAVPUNZEEL</button>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            <button onClick={() => scrollTo('home')}>Beranda</button>
            <button onClick={() => scrollTo('shop')}>Koleksi</button>
            <button onClick={() => scrollTo('about')}>Tentang</button>
            <button onClick={() => scrollTo('faq')}>FAQ</button>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => { setSearchOpen((open) => !open); scrollTo('shop') }} aria-label="Cari produk" aria-expanded={searchOpen} title="Cari produk"><Search size={19} /></button>
            <a className="lynk-mini" href="https://lynk.id/ravpunzeel" target="_blank" rel="noreferrer">Visit Lynk <ExternalLink size={14} /></a>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-menu">
            {['home', 'shop', 'about', 'faq'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>{item[0].toUpperCase() + item.slice(1)}</button>
            ))}
          </nav>
        )}
        {searchOpen && (
          <div className="search-row">
            <Search size={18} />
            <input type="search" autoFocus value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Cari produk" placeholder="Cari template favoritmu..." />
            {search && <button onClick={() => setSearch('')} aria-label="Hapus pencarian"><X size={17} /></button>}
          </div>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><Sparkles size={15} /> Digital Scrapbook & Creative Templates</div>
            <h1>Create Beautiful Memories <em>Your Way</em></h1>
            <p>Template cantik untuk mengabadikan momen dan merangkai cerita. Edit sesukamu di Canva Free maupun Pro.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo('shop')}>Lihat Koleksi <Heart size={16} fill="currentColor" /></button>
              <button className="button secondary" onClick={() => scrollTo('about')}>Tentang Ravpunzeel</button>
            </div>
            <div className="trust-row">
              <span><Check size={14} /> Akses instan</span>
              <span><Check size={14} /> Mudah diedit</span>
              <span><Check size={14} /> Bayar aman</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Preview koleksi Ravpunzeel">
            <div className="tape tape-one" />
            <div className="tape tape-two" />
            <figure className="polaroid polaroid-one">
              <img src="/images/valentines-scrapbook.png" alt="Preview Valentine's Scrapbook" />
              <figcaption>Memory 01</figcaption>
            </figure>
            <figure className="polaroid polaroid-two">
              <img src="/images/pink-valentines-scrapbook.png" alt="Preview Pink Valentine's Scrapbook" />
              <figcaption>Forever Yours</figcaption>
            </figure>
            <div className="floating-label"><Heart size={15} fill="currentColor" /> Canva Drag & Drop</div>
          </div>
        </section>

        <section className="creator-card" aria-label="Profil kreator">
          <div className="creator-avatar"><img src="/images/instagram-profile.webp" alt="Profil @ravpunzeel" /><span>✓</span></div>
          <div className="creator-main">
            <div><h2>@ravpunzeel ✨</h2><p>Template digital & scrapbook pilihan</p></div>
            <blockquote>“Pilih, edit, dan ceritakan kisahmu.” 💕</blockquote>
          </div>
          <div className="socials">
            <a href="https://t.me/seulgiestwins" target="_blank" rel="noreferrer"><Send size={17} /> Telegram</a>
          </div>
        </section>

        <section className="catalog section" id="shop">
          <div className="section-heading">
            <div><span className="kicker">Pilih yang kamu suka</span><h2>Koleksi Favorit</h2><p>Desain manis untuk momen yang berarti.</p></div>
            <a href="https://lynk.id/ravpunzeel" target="_blank" rel="noreferrer">Lihat semua <ArrowRight size={16} /></a>
          </div>

          <div className="filters" aria-label="Filter kategori">
            {categories.map((item) => (
              <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card" key={product.id} style={{ animationDelay: `${index * 60}ms` }}>
                <a className="product-image" href={product.lynkUrl} target="_blank" rel="noreferrer" aria-label={`Beli ${product.name} melalui Lynk`}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <span className="heart-badge"><Heart size={16} /></span>
                </a>
                <div className="product-info">
                  <span className="product-type">Template digital</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price-row">
                    <strong>{formatPrice(product.price)}</strong>
                    {product.originalPrice && <del>{formatPrice(product.originalPrice)}</del>}
                  </div>
                  <div className="card-actions">
                    <button className="view-button" onClick={() => setSelected(product)}>Lihat detail</button>
                    <a className="buy-button" href={product.lynkUrl} target="_blank" rel="noreferrer">Beli sekarang <ExternalLink size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && <div className="empty-state">Belum ada template yang cocok dengan pencarianmu.</div>}
        </section>

        <section className="about section" id="about">
          <div className="about-copy">
            <span className="kicker">Tentang Ravpunzeel</span>
            <h2>Template untuk momen favoritmu</h2>
            <p>Ravpunzeel hadir dengan template scrapbook dan media sosial yang cantik, mudah diedit, dan siap menemani setiap momenmu.</p>
          </div>
          <div className="benefit-grid">
            <article><span>✨</span><h3>Desain manis</h3><p>Dibuat dengan detail untuk kisahmu.</p></article>
            <article><span>🎨</span><h3>Mudah diedit</h3><p>Bisa dipakai di Canva Free maupun Pro.</p></article>
            <article><span>🏷️</span><h3>Harga bersahabat</h3><p>Koleksi mulai dari Rp12.000.</p></article>
            <article><span>⚡</span><h3>Akses cepat</h3><p>Bayar dan terima akses lewat Lynk.</p></article>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading centered"><div><span className="kicker">Sebelum memilih</span><h2>Pertanyaan umum</h2><p>Jawaban singkat untuk membantumu memilih.</p></div></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className={openFaq === index ? 'open' : ''} key={faq.question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  {faq.question}<ChevronDown size={18} />
                </button>
                {openFaq === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="cta">
          <span>💌</span>
          <h2>Siap membuat kenangan?</h2>
          <p>Pilih desain yang paling dekat dengan ceritamu.</p>
          <a className="button light" href="https://lynk.id/ravpunzeel" target="_blank" rel="noreferrer">Lihat Semua Desain <Sparkles size={15} /></a>
        </section>
      </main>

      <footer>
        <button className="brand" onClick={() => scrollTo('home')}>RAVPUNZEEL</button>
        <p>Scrapbook digital dan template kreatif, dibuat dengan hati 💗</p>
        <nav><button onClick={() => scrollTo('home')}>Beranda</button><button onClick={() => scrollTo('shop')}>Koleksi</button><button onClick={() => scrollTo('about')}>Tentang</button><button onClick={() => scrollTo('faq')}>FAQ</button><a href="https://t.me/seulgiestwins" target="_blank" rel="noreferrer">Kontak</a></nav>
        <small>© 2026 Ravpunzeel. All rights reserved.</small>
      </footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <article className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Tutup detail"><X size={20} /></button>
            <div className="modal-image"><img src={selected.image} alt={selected.name} /></div>
            <div className="modal-content">
              <span className="product-type">Template digital</span>
              <h2 id="modal-title">{selected.name}</h2>
              <div className="price-row modal-price"><strong>{formatPrice(selected.price)}</strong>{selected.originalPrice && <del>{formatPrice(selected.originalPrice)}</del>}</div>
              <p>{selected.description}</p>
              <ul>
                <li><Check size={16} /> Siap dipakai dan diedit</li>
                <li><Check size={16} /> Cocok untuk Canva Free & Pro</li>
                <li><Check size={16} /> Produk digital, tanpa barang fisik</li>
                <li><Check size={16} /> Untuk penggunaan pribadi</li>
              </ul>
              <a className="button primary modal-buy" href={selected.lynkUrl} target="_blank" rel="noreferrer">Beli lewat Lynk <ExternalLink size={16} /></a>
              <small>Kamu akan diarahkan ke Lynk.id untuk menyelesaikan pembayaran.</small>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

export default App

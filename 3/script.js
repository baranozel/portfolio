// WhatsApp
const WHATSAPP_NUMARASI = "905533851181";
const MESAJ = "Merhaba İrem Hanım, web siteniz üzerinden randevu almak istiyorum.";


const GORSELLER = {
  hero:     "img/hero.png",      // Ana sayfa görseli (dikey, 4:5)
  hakkimda: "img/irm.jpg",      // İrem Erdurmaz'ın fotoğrafı (kare'ye yakın)
  bilgi1:   "images/fizyoterapi.jpg", // Fizyoterapi nedir?
  bilgi2:   "images/egzersiz.jpg",    // Ne zaman başvurulur?
  bilgi3:   "images/surec.jpg"        // Süreç nasıl ilerler?
};


const SOSYAL = {
  instagram: "https://www.instagram.com/rederemeze/",
  facebook:  "",
  linkedin:  "",
  youtube:   "",
  tiktok:    ""
};


const ILETISIM = {
  "Telefon": "1234567890",
  "Hizmet bölgesi": "Eskişehir (evinize gelerek)",
  "Çalışma saatleri": "Hafta içi [09:00 – 18:00]",
  "E-posta": "iremerdurmaz@gmail.com"
};

// Google Maps
const HARITA = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98139.24318809855!2d30.462412858302102!3d39.76544582367349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3e08220c0e5f%3A0xbc89395938049a08!2sEski%C5%9Fehir!5e0!3m2!1str!2str!4v1791289286881!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;


const CALISMA_ALANLARI = [
  { baslik: "Ortopedi", gorsel: "img/ortopedi.jpg", maddeler: ["Kırık sonrası tedavi", "Kas ve tendon yaralanmaları", "Bel, boyun ve sırt ağrıları", "Eklem hareket kısıtlılığı"] },
  { baslik: "Ameliyat Sonrası Rehabilitasyon", gorsel: "img/ameliyatsonrasi.jpg", maddeler: ["Protez ameliyatı sonrası", "Kırık ameliyatı sonrası", "Omurga ameliyatı sonrası", "Kas ve tendon ameliyatı sonrası"] },
  { baslik: "Nöroloji", gorsel: "img/noroloji.jpg", maddeler: ["İnme sonrası rehabilitasyon", "Denge ve yürüme problemleri", "Sinir sıkışmaları", "Nörolojik hastalıklarda destek"] },
  { baslik: "Pediatri", gorsel: "img/pediatri.jpg", maddeler: ["Gelişimsel gecikme", "Serebral palsi", "Çocuklarda duruş problemleri", "Aile eğitimi ve ev programı"] },
  { baslik: "Geriatri", gorsel: "img/geriatri.jpg", maddeler: ["Denge ve düşme önleme", "Kas güçsüzlüğü", "Yürüme güçlüğü", "Günlük yaşam aktivitelerini koruma"] },
  { baslik: "Sporcu Yaralanmaları", gorsel: "img/sporcu.jpg", maddeler: ["Sakatlık sonrası güvenli dönüş", "Kas ve bağ yaralanmaları", "Yaralanma önleme egzersizleri", "Performans odaklı program"] }
];


const svg = (d, s = 22, fill = "none") =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${fill === "none" ? "currentColor" : "none"}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const IKON = {
  whatsapp: svg('<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm4.500 12.600c-.2.500-1.200 1-1.600 1-.4.100-.9.100-3-.7-2.500-1-4.100-3.600-4.200-3.800-.1-.2-1-1.300-1-2.500s.6-1.700.8-2c.2-.2.500-.3.700-.3h.5c.2 0 .4 0 .5.500l.7 1.800c.1.200.1.300 0 .5l-.4.500c-.1.100-.3.300-.1.500.2.300.7 1.200 1.600 1.900 1.100.9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.2.400-.2.600-.1l1.700.8c.3.100.5.200.5.300.1.200.1.700-.2 1.300z"/>', 32, "currentColor"),
  instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r=".6"/>', 20),
  facebook: svg('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z"/>', 20),
  linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5m0 2c0-2 4-2.500 4 0v3"/>', 20),
  youtube: svg('<rect x="2.500" y="5" width="19" height="14" rx="4"/><path d="M10 9.500v5l4.500-2.500z"/>', 20),
  tiktok: svg('<path d="M14 3v11a3.500 3.500 0 1 1-3.500-3.500M14 3c.3 2.500 2 4 4.500 4.200"/>', 20)
};
const ALAN_IKONLARI = [
  '<path d="M6 4v16M18 4v16M6 12h12"/>',
  '<circle cx="14" cy="5" r="2"/><path d="M5 20l5-8 3 3 4-6"/>',
  '<path d="M12 3v18M8 6c0 3 8 3 8 6s-8 3-8 6"/>',
  '<circle cx="12" cy="5" r="2"/><path d="M12 8v6M9 21l3-7 3 7M8 11h8"/>',
  '<circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9 9l6 6"/>',
  '<path d="M12 3v18M5 12h14"/>',
  '<path d="M12 21s-7-4.500-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.500-7 10-7 10z"/>',
  '<path d="M4 12h3l2-5 4 10 2-5h5"/>'
];
const CIZIM = '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice"><circle cx="300" cy="120" r="150" fill="#8aa592" opacity=".18"/><circle cx="90" cy="420" r="120" fill="#8aa592" opacity=".14"/><g fill="none" stroke="#4f6f5b" stroke-width="5" stroke-linecap="round" opacity=".7"><circle cx="205" cy="150" r="30"/><path d="M205 185v110M205 215l-60 40M205 215l60-35M205 295l-45 90M205 295l50 90"/></g></svg>';

// WhatsApp
const waUrl = "https://wa.me/" + WHATSAPP_NUMARASI + "?text=" + encodeURIComponent(MESAJ);
document.querySelectorAll(".wa-link").forEach(a => a.href = waUrl);

// İkon
document.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = IKON[el.dataset.icon]);

// Görseller
function gorselYukle(el, src) {
  el.innerHTML = CIZIM;
  if (!src) return;
  const img = new Image();
  img.alt = el.dataset.alt || "";
  img.onload = () => { el.innerHTML = ""; el.appendChild(img); };
  img.src = src;
}
const waMesaj = (t) => "https://wa.me/" + WHATSAPP_NUMARASI + "?text=" + encodeURIComponent(t);
document.querySelectorAll("[data-img]").forEach(el => gorselYukle(el, GORSELLER[el.dataset.img]));

// Sosyal
document.querySelectorAll("[data-social]").forEach(box => {
  box.innerHTML = Object.entries(SOSYAL).filter(([, u]) => u)
    .map(([ad, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${ad}">${IKON[ad]}</a>`).join("");
});

// Çalışma alanı
document.getElementById("sg").innerHTML = CALISMA_ALANLARI.map(a =>
  `<article class="card area"><div class="photo area-photo" data-alt="${a.baslik}"></div><div class="area-body"><h3>${a.baslik}</h3><ul>${a.maddeler.map(m => `<li>${m}</li>`).join("")}</ul><a class="more" target="_blank" rel="noopener" href="${waMesaj("Merhaba İrem Hanım, " + a.baslik + " hakkında bilgi almak istiyorum.")}">Bilgi al</a></div></article>`).join("");
document.querySelectorAll("#sg .area-photo").forEach((el, i) => gorselYukle(el, CALISMA_ALANLARI[i].gorsel));

// Danışma formu
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  if (!f.reportValidity()) return;
  const v = n => f.elements[n].value.trim();
  const mesaj = `Merhaba İrem Hanım, web siteniz üzerinden danışma formu gönderiyorum.
Ad Soyad: ${v("ad")}
Telefon: ${v("tel")}
Mahalle: ${v("mahalle")}
Mesaj: ${v("mesaj")}`;
  window.open(waMesaj(mesaj), "_blank", "noopener");
});

// İletişim
document.getElementById("rows").innerHTML = Object.entries(ILETISIM).filter(([, v]) => v)
  .map(([k, v]) => `<div><b>${k}</b>${v}</div>`).join("");

// Harita
if (HARITA.trim()) document.getElementById("map").innerHTML = HARITA;

document.getElementById("yr").textContent = new Date().getFullYear();


(function () {
  const hedefler = ".trust .tg, .about .photo, .about .wrap > div:last-child, .svc h2, .svc .sub, .sg, #ana + * h2, .ig, .steps h2, .steps .sub, .stg, .band, .cons-box, #iletisim h2, .cg > div, footer .wrap";
  const ogeler = document.querySelectorAll(hedefler);
  if (!("IntersectionObserver" in window)) return;
  const gozlemci = new IntersectionObserver((kayitlar) => {
    kayitlar.forEach(k => { if (k.isIntersecting) { k.target.classList.add("in"); gozlemci.unobserve(k.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  ogeler.forEach(el => { el.classList.add("rv"); gozlemci.observe(el); });

  document.querySelectorAll("section:not(.svc):not(.steps) > .wrap > h2, section:not(.svc):not(.steps) > .wrap > .sub").forEach(el => {
    if (!el.classList.contains("rv")) { el.classList.add("rv"); gozlemci.observe(el); }
  });
})();

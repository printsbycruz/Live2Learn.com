:root{
  --navy:#0d1b2a;
  --ink:#111111;
  --paper:#ffffff;
  --soft:#f5f3ef;
  --line:#dedede;
  --max:1440px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);background:var(--paper);line-height:1.5}
img{display:block;max-width:100%;height:auto}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
.skip-link{position:absolute;left:-9999px}
.skip-link:focus{left:16px;top:16px;background:#fff;padding:10px;z-index:999}
.page-width{width:min(100% - 32px,var(--max));margin:0 auto}
.announcement{background:var(--navy);color:#fff;text-align:center;padding:9px 16px;font-size:12px;letter-spacing:.12em;text-transform:uppercase}
.site-header{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.96);border-bottom:1px solid var(--line);backdrop-filter:blur(10px)}
.header-inner{min-height:76px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px}
.header-logo{font-weight:900;letter-spacing:-.05em;font-size:30px;text-align:center}
.header-nav{display:flex;gap:26px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.header-actions{display:flex;justify-content:flex-end;gap:18px;font-size:13px}
.mobile-toggle{display:none;background:none;border:0;font-size:24px}
.hero{min-height:76vh;display:grid;align-items:center;background:#181818;color:#fff;background-size:cover;background-position:center;position:relative}
.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.66),rgba(0,0,0,.12))}
.hero-content{position:relative;z-index:1;max-width:620px;padding:90px 0}
.hero-kicker,.section-kicker{font-size:12px;text-transform:uppercase;letter-spacing:.18em;margin-bottom:14px}
.hero h1{font-size:clamp(54px,8vw,112px);line-height:.88;margin:0 0 24px;letter-spacing:-.06em;text-transform:uppercase}
.hero p{font-size:clamp(18px,2vw,27px);max-width:520px}
.button{display:inline-flex;align-items:center;justify-content:center;background:#111;color:#fff;border:1px solid #111;padding:14px 26px;text-transform:uppercase;letter-spacing:.1em;font-size:12px;cursor:pointer}
.button--light{background:#fff;color:#111;border-color:#fff}
.button--outline{background:transparent;color:#111}
.section{padding:90px 0}
.section--soft{background:var(--soft)}
.section-title{text-align:center;margin-bottom:44px}
.section-title h2{font-size:clamp(34px,5vw,64px);line-height:1;margin:0;text-transform:uppercase;letter-spacing:-.045em}
.product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.product-card-image{aspect-ratio:1/1.08;background:#eee;overflow:hidden}
.product-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.product-card:hover img{transform:scale(1.025)}
.product-card-info{text-align:center;padding:16px 8px}
.product-card-title{font-weight:700}
.product-card-price{margin-top:4px;font-size:14px}
.story{min-height:560px;display:grid;align-items:center;color:#fff;background:#111;background-size:cover;background-position:center;position:relative;text-align:center}
.story:before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.62)}
.story-content{position:relative;z-index:1;width:min(720px,90%);margin:auto}
.story h2{font-size:clamp(42px,7vw,86px);line-height:.95;text-transform:uppercase;letter-spacing:-.05em;margin:0 0 24px}
.story p{font-size:18px}
.features{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;text-align:center}
.feature-icon{font-size:28px}
.feature-title{text-transform:uppercase;font-weight:800;font-size:13px;letter-spacing:.08em;margin-top:12px}
.feature-text{font-size:13px;color:#555}
.newsletter{text-align:center;max-width:720px;margin:auto}
.newsletter h2{font-size:clamp(38px,6vw,72px);line-height:.95;text-transform:uppercase;margin:0 0 16px;letter-spacing:-.05em}
.newsletter-form{display:flex;max-width:520px;margin:30px auto 0}
.newsletter-form input{flex:1;border:1px solid #aaa;padding:14px 16px;min-width:0}
.footer{background:#111;color:#fff;padding:64px 0 30px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px}
.footer-logo{font-size:36px;font-weight:900;letter-spacing:-.05em}
.footer h3{font-size:12px;text-transform:uppercase;letter-spacing:.12em}
.footer ul{list-style:none;margin:0;padding:0}
.footer li{margin:8px 0;color:#ccc}
.footer-bottom{border-top:1px solid #333;margin-top:45px;padding-top:20px;font-size:12px;color:#aaa}
.product-page{display:grid;grid-template-columns:1.2fr .8fr;gap:60px;padding:60px 0 100px}
.product-gallery-main{background:#f1f1f1}
.product-gallery-main img{width:100%;aspect-ratio:1/1;object-fit:cover}
.product-thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px}
.product-thumbs img{aspect-ratio:1/1;object-fit:cover;background:#eee}
.product-details{position:sticky;top:120px;align-self:start}
.product-details h1{font-size:clamp(40px,5vw,68px);line-height:.95;text-transform:uppercase;letter-spacing:-.05em;margin:0 0 14px}
.price{font-size:20px;margin-bottom:24px}
.product-description{color:#444;margin-bottom:28px}
.product-form label{display:block;text-transform:uppercase;font-size:11px;letter-spacing:.1em;margin:16px 0 8px}
.product-form select,.product-form input[type=number]{width:100%;padding:13px;border:1px solid #aaa;background:#fff}
.product-form .button{width:100%;margin-top:18px}
.accordion{border-top:1px solid #ccc;margin-top:28px}
.accordion details{border-bottom:1px solid #ccc;padding:16px 0}
.accordion summary{cursor:pointer;text-transform:uppercase;font-size:12px;letter-spacing:.08em;font-weight:700}
.empty-state{text-align:center;padding:100px 20px}
.cart-page{padding:70px 0}
.cart-item{display:grid;grid-template-columns:120px 1fr auto;gap:20px;align-items:center;border-bottom:1px solid #ddd;padding:20px 0}
.cart-item img{width:120px;height:120px;object-fit:cover;background:#eee}
.cart-summary{text-align:right;margin-top:30px}
.rte{max-width:760px;margin:auto;padding:70px 0}
.rte h1{text-transform:uppercase;font-size:48px;letter-spacing:-.04em}
@media(max-width:900px){
  .header-inner{grid-template-columns:auto 1fr auto}
  .header-nav{display:none;position:absolute;top:76px;left:0;right:0;background:#fff;padding:24px;flex-direction:column;border-bottom:1px solid #ddd}
  .header-nav.is-open{display:flex}
  .mobile-toggle{display:block}
  .header-logo{font-size:24px}
  .product-grid{grid-template-columns:repeat(2,1fr)}
  .features{grid-template-columns:repeat(2,1fr)}
  .product-page{grid-template-columns:1fr}
  .product-details{position:static}
}
@media(max-width:600px){
  .section{padding:62px 0}
  .hero{min-height:70vh}
  .hero-content{padding:70px 0}
  .product-grid{grid-template-columns:1fr 1fr;gap:10px}
  .footer-grid{grid-template-columns:1fr}
  .newsletter-form{flex-direction:column;gap:10px}
  .features{grid-template-columns:1fr 1fr;gap:18px}
}

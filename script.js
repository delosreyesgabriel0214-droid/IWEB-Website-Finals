//Helper functions
const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));
const money = v => `₱${Number(v).toFixed(2)}`;

//Categories in new order
const categories = [
  { key:'shirts', label:'Shirts' },
  { key:'hoodies', label:'Hoodies' },
  { key:'pants', label:'Pants' },
  { key:'shorts', label:'Shorts' }
];

//PRODUCTS (
const products = [
  // Shirts
  { id:'shirt-1', category:'shirts', title:'Empower Boxy Crop Tee', price:249, short:'★★★★★ (13)', long:'A bold crop tee featuring a chained Doberman graphic and a provocative statement challenging modern views on women empowerment.', image:'images/Shirts/Empower Boxy Crop Tee.jpg', sizes:['S','M','L','XL'] },
  { id:'shirt-2', category:'shirts', title:'Faith Target Jersey', price:249, short:'★★★★★ (22)', long:'Have faith in something greater. The Faith Target Jersey, which has the words "Faith makes all things possible" on the back and a striking facial graphic locked in a red target, blends powerful design with deeper meaning. designed for people who move purposefully and have faith in the process.', image:'images/Shirts/Faith Target Jersey.jpg', sizes:['S','M','L','XL'] },
  { id:'shirt-3', category:'shirts', title:'Mindful Boxy Tee Black', price:249, short:'★★★★★ (11)', long:'An oversized tee with a striking newspaper mask graphic and a strong reminder to act responsibly, as kids are always watching.', image:'images/Shirts/Mindful Boxy Tee Black.jpg', sizes:['S','M','L'] },
  { id:'shirt-4', category:'shirts', title:'Rebel Vanguard Boxy Crop Tee', price:249, short:'★★★★★ (16)', long:"Wear the Rebel Vanguard t-shirt to embrace the spirit of rebellion. With its dynamic 'Spades' font and strong soldier motif, this olive green shirt effortlessly combines urban flare with combat-inspired design. Crafted from premium fabric, it's perfect for those with a rebellious and daring spirit who wish to stand out wherever they go.", image:'images/Shirts/Rebel Vanguard Boxy Crop Tee.jpg', sizes:['M','L','XL'] },

  //Hoodies
  { id:'hoodie-1', category:'hoodies', title:'Cross Blaze Boxy Crop Hoodie', price:499, short:'★★★★★ (33)', long:'A bold black hoodie with a cropped, boxy fit, highlighted by orange cross graphics and “King of Rock” artwork on the back. A statement piece blending street and vintage rock styles.', image:'images/Hoodie/Cross Blaze Boxy Crop Hoodie.jpg', sizes:['M','L','XL'] },
  { id:'hoodie-2', category:'hoodies', title:'Midnight Merge Boxy Hoodie', price:499, short:'★★★★★ (25)', long:'A heavyweight black hoodie with “SPADES” lettering on the front and a flaming 8-ball graphic on the back. Features a relaxed, boxy silhouette for a bold urban look.', image:'images/Hoodie/Midnight Merge Boxy Hoodie.jpg', sizes:['S','M','L','XL'] },
  { id:'hoodie-3', category:'hoodies', title:'UTILITY JACKET', price:499, short:'★★★★★ (22)', long:'A sleek, minimalistic black zip-up jacket featuring large front utility pockets and the “SPADES” logo on the chest. Designed for both comfort and streetwear appeal.', image:'images/Hoodie/UTILITY JACKET.jpg', sizes:['M','L','XL'] },
  { id:'hoodie-4', category:'hoodies', title:'Utility Boxy Jacket full zip', price:499, short:'★★★★★ (16)', long:'A full-zip black hoodie with clean panel detailing and “Spades” branding on the chest and sleeve. Combines sporty functionality with a modern streetwear edge.', image:'images/Hoodie/Utility Boxy Jacket full zip.jpg', sizes:['S','M','L','XL'] },

  //Pants
  { id:'pants-1', category:'pants', title:'House Edge Sweat Pants Gray', price:449, short:'★★★★★ (19)', long:'Relaxed-fit gray sweatpants with bold printed graphics and “Gamblers 100% Made” lettering. Sporty contrast side panels and a drawstring waist add to its casual appeal.', image:'images/Pants/House Edge Sweat Pants Gray.jpg', sizes:['28','30','32','34'] },
  { id:'pants-2', category:'pants', title:'Midnight Merge Pants', price:449, short:'★★★★★ (13)', long:'Sleek black pants with oversized white “Spades” logo detailing along the leg. Designed with a loose, comfortable silhouette and clean stitch lines for a refined street look.', image:'images/Pants/Midnight Merge Pants.jpg', sizes:['S','M','L','XL'] },
  { id:'pants-3', category:'pants', title:'Pocket Utility Pants', price:449, short:'★★★★★ (27)', long:'Minimalistic black cargo pants with large utility pockets and contrast stitching. A versatile staple for everyday wear, combining practicality with urban edge.', image:'images/Pants/Pocket Utility Pants.jpg', sizes:['S','M','L','XL'] },
  { id:'pants-4', category:'pants', title:'Woodland Camo Pants', price:449, short:'★★★★★ (23)', long:'Eye-catching wide-leg pants featuring a bold camouflage pattern, reinforced seam details, and multiple utility pockets. Perfect for a rugged yet stylish streetwear look.', image:'images/Pants/Woodland Camo Pants.jpg', sizes:['M','L','XL'] },

  //Shorts
  { id:'shorts-1', category:'shorts', title:'Bandit Zone Outlaw Mesh Shorts', price:299, short:'★★★★★ (36)', long:'Stand out with the Bandit Zone Outlaw Mesh Shorts, featuring a bold black-and-white bandana design with spade, heart, club, and diamond icons. Made with breathable mesh fabric, these shorts blend street style with all-day comfort.', image:'images/Shorts/Bandit Zone Outlaw Mesh Shorts.jpg', sizes:['S','M','L','XL'] },
  { id:'shorts-2', category:'shorts', title:'Concrete Canvas Mesh Short', price:299, short:'★★★★★ (27)', long:'The Concrete Canvas Mesh Shorts showcase a clean, modern look with bold “Spades” typography layered across a gray and black panel design. Perfect for casual wear or workouts, they offer a stylish edge with lightweight comfort.', image:'images/Shorts/Concrete Canvas Mesh Short.jpg', sizes:['S','M','L','XL'] },
  { id:'shorts-3', category:'shorts', title:'Off The Grid Black Mesh Shorts', price:299, short:'★★★★★ (24)', long:'The Off The Grid Black Mesh Shorts feature sleek white stripe detailing and “SPADES” branding for a sporty, high-contrast look. Ideal for streetwear enthusiasts, these shorts combine athletic vibes with urban attitude.', image:'images/Shorts/Off The Grid Black Mesh Shorts.jpg', sizes:['M','L','XL'] },
  { id:'shorts-4', category:'shorts', title:'Royal Stamp Champion Mesh Shorts', price:299, short:'★★★★★ (9)', long:'Elevate your casual style with the Royal Stamp Champion Mesh Shorts, designed with an overlapping monogram “S” and spade pattern. Their dark tone and refined print give a luxury streetwear appeal while keeping you cool and comfortable.', image:'images/Shorts/Royal Stamp Champion Mesh Shorts.jpg', sizes:['S','M','L'] },
];

//Cart
let cart = JSON.parse(localStorage.getItem('downtown_cart')||'[]');
const saveCart=()=>localStorage.setItem('downtown_cart',JSON.stringify(cart));
const getCartCount=()=>cart.reduce((s,i)=>s+i.qty,0);
const renderCartCount=()=>$('#cart-count').textContent=getCartCount();
const addToCart=(id,qty=1,size=null)=>{
  const ex=cart.find(c=>c.id===id&&c.size===size);
  if(ex) ex.qty+=qty; else cart.push({id,qty,size});
  saveCart(); renderCartCount();
  alert('Added to cart!');
};
const removeItem=i=>{cart.splice(i,1);saveCart();renderCartModal();}
const updateQty=(i,q)=>{if(q<=0)return removeItem(i);cart[i].qty=q;saveCart();renderCartModal();}

//Render
const app=$('#app');
function renderHome(){
  app.innerHTML='';
  categories.forEach(cat=>{
    const sec=document.createElement('section');
    sec.className='category';
    sec.id=`category-${cat.key}`;
    sec.innerHTML=`<div class="cat-title"><h3>${cat.label}</h3></div><div class="grid" id="grid-${cat.key}"></div>`;
    app.appendChild(sec);
    const grid=$(`#grid-${cat.key}`);
    products.filter(p=>p.category===cat.key).forEach(p=>{
      const card=document.createElement('article');
      card.className='card';
      card.innerHTML=`
        <a href="#product-${p.id}" class="thumb-link"><div class="thumb"><img src="${p.image}" alt="${p.title}"></div></a>
        <div class="meta"><h4>${p.title}</h4><div class="price">${money(p.price)}</div><div class="desc">${p.short}</div>
        <div class="actions"><button class="btn add-small" data-id="${p.id}">Add</button><a href="#product-${p.id}" class="small">View</a></div></div>`;
      grid.appendChild(card);
    });
  });
  $$('.add-small').forEach(b=>b.onclick=e=>addToCart(e.currentTarget.dataset.id,1,null));
}

function renderProduct(id){
  const p=products.find(x=>x.id===id);
  if(!p){app.innerHTML='<p>Product not found.</p>';return;}
  app.innerHTML=`
    <div class="product-view">
      <div class="product-image"><img src="${p.image}" alt="${p.title}"></div>
      <div class="product-details">
        <h1>${p.title}</h1>
        <div style="font-size:22px;color:var(--accent-red);font-weight:800">${money(p.price)}</div>
        <p>${p.long}</p>
        <div><div class="small">Sizes</div><div class="sizes" id="sizes">${p.sizes.map(s=>`<button class="size-btn" data-size="${s}">${s}</button>`).join('')}</div></div>
        <div class="qty"><div class="small">Quantity</div><input id="qty-input" value="1" style="width:60px;text-align:center;border:1px solid #ddd;border-radius:6px;padding:6px"></div>
        <button class="btn primary" id="add-to-cart">Add to cart</button>
      </div>
    </div>`;
  let selected=null;
  $$('#sizes .size-btn').forEach(b=>b.onclick=e=>{
    $$('#sizes .size-btn').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    selected=e.currentTarget.dataset.size;
  });
  $('#add-to-cart').onclick=()=>addToCart(p.id,Number($('#qty-input').value)||1,selected);
}

//About Downtown Gallery
function renderAbout(){
  app.innerHTML=`
  <section class="about">
    <h1>About Downtown Gallery</h1>
    <img src="images/logo.jpg" alt="About Downtown Gallery">
    <p>Welcome to Downtown Gallery — your online destination for curated thrifted fashion, vintage gems, and one of a kind pieces that celebrate individuality, sustainability, and timeless style. Born from a love of hunting for hidden treasures and a desire to give fashion a second life, Downtown Gallery exists to make secondhand shopping feel like stepping into a curated art space — where every piece has a past and every detail tells a story.</p>
    <p>We believe great style shouldn't cost the earth or break the bank, which is why we handpick each item for its quality, character, and unique aesthetic. From retro denim and bold 90s prints to minimalist staples and unexpected statement pieces, our collection reflects the eclectic, creative spirit of the city streets that inspire us.</p>
    <p>At the heart of Downtown Gallery is a commitment to conscious consumerism and slowing down the cycle of fast fashion because clothing should be worn, loved, and reimagined, not discarded. Whether you're a seasoned thrifter, a vintage enthusiast, or someone simply looking to shop more sustainably, we're here to help you express yourself with confidence and intention. Thanks for being here — we can't wait for you to find your new favorite piece.</p>

    <hr style="margin:40px 0;border:none;border-top:1px solid #eee">

    <div class="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions, inquiries, or collaborations, feel free to reach out to us:</p>
      <ul style="list-style:none;padding:0;line-height:1.8;font-size:15px">
        <li><strong>Email us:</strong> <a href="mailto:downtowngalleryph@gmail.com">downtowngalleryph@gmail.com</a></li>
        <li><strong>Contact number:</strong> 0912 345 6789</li>
        <li><strong>Facebook page:</strong> <a href="https://www.facebook.com/DowntownGallery" target="_blank">facebook.com/DowntownGallery</a></li>
      </ul>
    </div>
  </section>`;
}


//Cart Modal
function openCart(){ $('#cart-modal').classList.remove('hidden'); renderCartModal(); }
function closeCart(){ $('#cart-modal').classList.add('hidden'); }
function renderCartModal(){
  const wrap=$('#cart-items');
  wrap.innerHTML='';
  if(cart.length===0){wrap.innerHTML='<p class="small">Your cart is empty.</p>';$('#cart-total').textContent=money(0);return;}
  let total=0;
  cart.forEach((it,i)=>{
    const p=products.find(x=>x.id===it.id);
    const sub=p.price*it.qty; total+=sub;
    const div=document.createElement('div');
    div.style.display='flex';div.style.justifyContent='space-between';div.style.margin='10px 0';
    div.innerHTML=`
      <div style="display:flex;gap:10px;align-items:center">
        <img src="${p.image}" width="60" height="60" style="border-radius:6px;object-fit:cover">
        <div><div>${p.title}</div><div class="small">${it.size?`Size: ${it.size}`:''}</div></div>
      </div>
      <div style="text-align:right">
        <div>${money(p.price)}</div>
        <div style="margin-top:6px;display:flex;gap:6px;align-items:center;justify-content:flex-end">
          <button class="btn small" onclick="updateQty(${i},${it.qty-1})">-</button>
          <span>${it.qty}</span>
          <button class="btn small" onclick="updateQty(${i},${it.qty+1})">+</button>
          <button class="btn small" onclick="removeItem(${i})">✕</button>
        </div>
      </div>`;
    wrap.appendChild(div);
  });
  $('#cart-total').textContent=money(total);
}

//Router
function router(){
  const hash=location.hash.slice(1);
  if(!hash) return renderHome();
  if(hash.startsWith('product-')) return renderProduct(hash.replace('product-',''));
  if(hash==='about') return renderAbout();
  renderHome();
}

//Events
$('#open-cart').onclick=openCart;
$('#close-cart').onclick=closeCart;
$('#clear-cart').onclick=()=>{cart=[];saveCart();renderCartModal();};
$('#checkout-btn').onclick=()=>alert('Checkout not implemented.');
window.onhashchange=router;
$('#year').textContent=new Date().getFullYear();

router();
renderCartCount();

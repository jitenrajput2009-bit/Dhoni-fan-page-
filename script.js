*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:linear-gradient(135deg,#000,#0b1d35,#001d3d);
color:#fff;
}

.header{
position:fixed;
top:0;
left:0;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:rgba(0,0,0,.75);
backdrop-filter:blur(12px);
border-bottom:2px solid gold;
z-index:1000;
}

.logo{
font-size:28px;
font-weight:700;
color:gold;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
font-weight:600;
transition:.3s;
}

nav a:hover{
color:gold;
}

.hero{
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:100px 20px 40px;
}

.hero-img{
width:280px;
height:280px;
border-radius:50%;
object-fit:cover;
border:6px solid gold;
box-shadow:0 0 40px gold;
transition:.5s;
}

.hero-img:hover{
transform:scale(1.08);
}

.hero h1{
font-size:50px;
margin-top:25px;
color:gold;
}

.hero p{
margin-top:15px;
font-size:22px;
color:#ddd;
}

.btn{
display:inline-block;
margin-top:30px;
padding:15px 35px;
background:gold;
color:black;
text-decoration:none;
border-radius:50px;
font-weight:700;
transition:.3s;
}

.btn:hover{
transform:scale(1.08);
box-shadow:0 0 20px gold;
}

.about,
.gallery,
.stats,
.trophies{
width:90%;
max-width:1200px;
margin:60px auto;
padding:30px;
background:rgba(255,255,255,.08);
backdrop-filter:blur(15px);
border-radius:20px;
border:1px solid rgba(255,215,0,.3);
}

h2{
text-align:center;
color:gold;
margin-bottom:25px;
}

.gallery-grid,
.stats-box,
.trophy-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.gallery-grid img{
width:100%;
height:260px;
object-fit:cover;
border-radius:20px;
border:3px solid gold;
transition:.4s;
}

.gallery-grid img:hover{
transform:scale(1.05);
box-shadow:0 0 25px gold;
}

.stat,
.card{
background:#0f223d;
padding:25px;
text-align:center;
border-radius:15px;
border:2px solid gold;
transition:.4s;
}

.stat:hover,
.card:hover{
transform:translateY(-10px);
box-shadow:0 0 20px gold;
}

.stat h3{
font-size:40px;
color:gold;
}

footer{
margin-top:50px;
padding:25px;
text-align:center;
background:#000;
border-top:2px solid gold;
}

footer h2{
color:gold;
}

@media(max-width:768px){

.header{
flex-direction:column;
padding:15px;
}

nav{
margin-top:15px;
}

nav a{
margin:8px;
display:inline-block;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:18px;
}

.hero-img{
width:200px;
height:200px;
}

                }

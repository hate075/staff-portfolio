*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:system-ui;
}

body{
background:#0b0f17;
color:#e5e7eb;
}

/* LAYOUT PRINCIPALE */
.layout{
display:grid;
grid-template-columns:280px 1fr;
gap:20px;
max-width:1100px;
margin:auto;
padding:20px;
}

/* SIDEBAR */
.sidebar{
position:sticky;
top:20px;
height:fit-content;
}

.profile, .box, .card{
background:rgba(255,255,255,0.04);
border:1px solid rgba(255,255,255,0.08);
border-radius:14px;
padding:16px;
margin-bottom:16px;
backdrop-filter:blur(12px);
}

.profile h1{
font-size:22px;
}

.status{
color:#4ade80;
font-size:12px;
}

/* BOX */
.box span{
display:inline-block;
background:#6366f1;
padding:4px 8px;
border-radius:999px;
font-size:12px;
margin:4px 2px;
}

/* STATS */
.stats{
display:flex;
justify-content:space-between;
text-align:center;
}

/* MAIN */
.hero{
padding:20px;
background:rgba(255,255,255,0.03);
border-radius:14px;
margin-bottom:16px;
}

.card{
transition:0.2s;
}

.card:hover{
transform:translateY(-4px);
}

/* LISTA */
ul{
list-style:none;
}

li{
padding:8px 0;
border-left:2px solid #6366f1;
padding-left:10px;
margin:6px 0;
}

/* GALLERY */
.gallery{
display:flex;
gap:10px;
}

.gallery img{
width:120px;
border-radius:10px;
transition:0.2s;
cursor:pointer;
}

.gallery img:hover{
transform:scale(1.05);
}

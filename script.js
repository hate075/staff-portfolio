body{
margin:0;
font-family:system-ui,-apple-system,Segoe UI;
background:#0b0f19;
color:#e5e7eb;
overflow-x:hidden;
}

canvas{
position:fixed;
top:0;
left:0;
z-index:-1;
opacity:0.4;
}

.container{
display:flex;
gap:24px;
padding:24px;
max-width:1100px;
margin:auto;
}

/* SIDEBAR */
.sidebar{
width:280px;
position:sticky;
top:20px;
}

.profile{
padding:18px;
border-radius:14px;
background:rgba(255,255,255,0.04);
border:1px solid rgba(255,255,255,0.08);
}

.muted{opacity:0.6}

.status{
margin-top:10px;
font-size:13px;
color:#34d399;
}

.dot{
display:inline-block;
width:8px;
height:8px;
border-radius:50%;
background:#34d399;
margin-right:6px;
animation:pulse 1.5s infinite;
}

@keyframes pulse{
50%{opacity:0.3}
}

.block{
margin-top:16px;
padding:14px;
border-radius:14px;
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
}

.tag{
display:inline-block;
margin:4px 0;
padding:4px 10px;
border-radius:999px;
background:#6366f1;
font-size:12px;
}

.ghost{
opacity:0.4;
}

.stats{
display:flex;
justify-content:space-between;
text-align:center;
margin-top:10px;
}

/* MAIN */
.main{
flex:1;
display:flex;
flex-direction:column;
gap:18px;
}

.hero{
padding:18px;
border-radius:14px;
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
}

.card{
padding:18px;
border-radius:14px;
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.06);
transition:0.2s;
}

.card:hover{
transform:translateY(-3px);
}

.timeline div{
padding:8px 0;
border-left:2px solid #6366f1;
padding-left:10px;
margin:6px 0;
}

.danger{
color:#f87171;
}

.gallery{
display:flex;
gap:10px;
}

.gallery img{
width:140px;
border-radius:10px;
cursor:pointer;
transition:0.2s;
}

.gallery img:hover{
transform:scale(1.05);
}

/* LIGHTBOX */
#lightbox{
display:none;
position:fixed;
inset:0;
background:rgba(0,0,0,0.85);
justify-content:center;
align-items:center;
}

#lightbox img{
max-width:80%;
border-radius:12px;
}

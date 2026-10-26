const toggle=document.querySelector('.menu-btn');const menu=document.getElementById('menu');toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
document.getElementById('contact-form')?.addEventListener('submit',event=>{event.preventDefault();const fd=new FormData(event.currentTarget);const subject='Consulta por un sitio web para despacho jurídico - Nexo Legal demo';const body=`Nombre: ${fd.get('nombre')}\nCorreo: ${fd.get('correo')}\nInterés: ${fd.get('interes')}\n\nMensaje:\n${fd.get('mensaje')}`;window.location.href=`mailto:contacto@dorenio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});

// Interactive WhatsApp demo, intentionally not connected to a third-party phone number.
const whatsappToggle=document.querySelector('.whatsapp-float');
const whatsappPanel=document.querySelector('#whatsapp-panel');
if(whatsappToggle&&whatsappPanel){
  whatsappToggle.addEventListener('click',()=>{const opening=whatsappPanel.hidden;whatsappPanel.hidden=!opening;whatsappToggle.setAttribute('aria-expanded',String(opening));});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape'&&!whatsappPanel.hidden){whatsappPanel.hidden=true;whatsappToggle.setAttribute('aria-expanded','false');whatsappToggle.focus();}});
  document.addEventListener('click',(event)=>{if(!event.target.closest('.whatsapp-demo')){whatsappPanel.hidden=true;whatsappToggle.setAttribute('aria-expanded','false');}});
}

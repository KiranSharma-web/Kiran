const portfolioData={contact:{email:'your.email@example.com',linkedin:'LinkedIn profile coming soon',linkedinUrl:null,phone:'+91 XXXXX XXXXX'},resume:{path:null}};
const contactEmailLink=document.querySelector('[data-contact-email-link]');
contactEmailLink.href=`mailto:${portfolioData.contact.email}`;
document.querySelector('[data-contact-email]').textContent=portfolioData.contact.email;
document.querySelector('[data-contact-linkedin]').textContent=portfolioData.contact.linkedin;
document.querySelector('[data-contact-phone]').textContent=portfolioData.contact.phone;
const resumeButton=document.querySelector('[data-resume-button]');
if(portfolioData.resume.path){resumeButton.disabled=false;resumeButton.textContent='Download Resume';resumeButton.addEventListener('click',()=>{window.location.href=new URL(portfolioData.resume.path,document.baseURI).href})}
const stages=[{title:'Source candidates.',body:'Identify and source relevant candidates for open roles.',chips:['Candidate sourcing','Open roles'],icon:'◎',foot:'CANDIDATE SOURCING'},{title:'Screen profiles.',body:'Review resumes and candidate profiles against role requirements.',chips:['Resume screening','Profile review'],icon:'◌',foot:'PROFILE SCREENING'},{title:'Shortlist candidates.',body:'Shortlist suitable candidates for the next stage.',chips:['Candidate shortlisting','Role requirements'],icon:'⌕',foot:'CANDIDATE SHORTLISTING'},{title:'Coordinate interviews.',body:'Schedule interviews and coordinate between candidates and hiring managers.',chips:['Interview scheduling','Hiring manager coordination'],icon:'↗',foot:'INTERVIEW COORDINATION'},{title:'Support onboarding.',body:'Support employee onboarding activities and prepare joining documentation.',chips:['Employee onboarding','Joining documentation'],icon:'✳',foot:'ONBOARDING SUPPORT'},{title:'Support HR operations.',body:'Maintain HR records and reports, support employee queries and engagement activities, and assist payroll and statutory compliance processes while handling confidential documentation.',chips:['HR records & reporting','Employee support','Compliance support'],icon:'◎',foot:'PEOPLE & HR OPERATIONS'}];
const topbar=document.querySelector('.topbar'),nav=document.querySelector('#nav'),menu=document.querySelector('.menu-toggle');
function updateHeader(){topbar.classList.toggle('scrolled',window.scrollY>18);let best='home';document.querySelectorAll('main section[id]').forEach(s=>{if(s.getBoundingClientRect().top<150)best=s.id});nav.querySelectorAll('a[href^="#"]').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+best))}window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}));
document.querySelectorAll('.stage').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.stage.active')?.classList.remove('active');btn.classList.add('active');document.querySelectorAll('.stage').forEach(b=>{b.setAttribute('aria-selected',String(b===btn));b.tabIndex=b===btn?0:-1});let s=stages[Number(btn.dataset.stage)],panel=document.querySelector('.stage-panel');panel.setAttribute('aria-labelledby',btn.id);panel.style.animation='none';void panel.offsetWidth;panel.style.animation='';panel.querySelector('.panel-index span').textContent=String(Number(btn.dataset.stage)+1).padStart(2,'0');panel.querySelector('.panel-icon').textContent=s.icon;panel.querySelector('h3').textContent=s.title;panel.querySelector('p').textContent=s.body;panel.querySelector('.panel-chips').innerHTML=s.chips.map(c=>`<span>${c}</span>`).join('');panel.querySelector('.panel-bottom span').textContent=s.foot}));
document.querySelectorAll('.stage').forEach((tab,index,all)=>tab.addEventListener('keydown',event=>{let next=index;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%all.length;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index-1+all.length)%all.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=all.length-1;else return;event.preventDefault();all[next].focus();all[next].click()}));
document.querySelectorAll('.skill-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.skill-tab.active')?.classList.remove('active');btn.classList.add('active');document.querySelectorAll('.skill-tab').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));document.querySelectorAll('.skill-chip').forEach(chip=>chip.classList.toggle('hidden',btn.dataset.skill!=='all'&&chip.dataset.category!==btn.dataset.skill))}));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');btn.classList.add('active');document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));document.querySelectorAll('.project-card').forEach(card=>{let show=btn.dataset.filter==='all'||card.dataset.category===btn.dataset.filter;card.classList.toggle('filtered-out',!show);if(show){card.style.animation='none';void card.offsetWidth;card.style.animation=''}})}));
const modal=document.querySelector('.modal'),modalTitle=document.querySelector('#modal-title'),modalContent=document.querySelector('.modal-content');let modalTrigger=null;const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');modalTrigger?.focus();modalTrigger=null};document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>{modalTrigger=card;modalTitle.textContent=card.dataset.title;modalContent.textContent=card.dataset.detail;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.querySelector('.modal-close').focus()}));document.querySelector('.modal-close').addEventListener('click',closeModal);document.querySelector('.modal-done').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');reveal.unobserve(e.target)}}),{threshold:.14});document.querySelectorAll('.timeline-item').forEach(el=>reveal.observe(el));document.querySelector('#year').textContent=new Date().getFullYear();

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
    menu.focus();
  }
  if (event.key === 'Tab' && modal.classList.contains('open')) {
    const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href]')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelectorAll('.skill-tab').forEach(button => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
});
document.querySelectorAll('.filter').forEach(button => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
});
document.querySelectorAll('.education-list article').forEach(item => reveal.observe(item));

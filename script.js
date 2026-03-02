// ── Set current year ──────────────────────────────────────────
const y = new Date().getFullYear();
document.getElementById('year').textContent = y;
document.getElementById('footerYear').textContent = y;

// ── Custom cursor ─────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  ring.style.left   = e.clientX + 'px';
  ring.style.top    = e.clientY + 'px';
  cursor.style.transform = 'translate(-50%,-50%)';
  ring.style.transform   = 'translate(-50%,-50%)';
});

// ── Card hover — play/pause video preview ─────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('.card-video');
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
  });
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// ── Filter bar ────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const cards      = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(card => {
      const match = f === 'all' || card.dataset.category === f;
      card.style.display = match ? '' : 'none';
    });
    const visible = [...cards].filter(c => c.style.display !== 'none').length;
    document.getElementById('countProjects').textContent = visible;
  });
});

// ── Project data ──────────────────────────────────────────────
// video: filename of the clip (null = image only in modal)
const projects = {
  1: {
    tag:   'Motion',
    title: 'AGT — Ansci Got Talent Logo Reveal',
    img:   'thumbnail/proj1.png',
    video: 'AGT.mp4',
    desc:  'Dramatic logo reveal with golden particle bursts, volumetric lighting, and a bold 3D chrome emblem for AGT.',
    extra: 'Created entirely in Cinema 4D and Element 3D for the 3D elements, then composited in After Effects with particle systems and color grading.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D',],
  },
  2: {
    tag:   'Motion',
    title: 'Kurt & Minorka Wedding Film',
    img:   'thumbnail/proj2.png',
    video: 'LOGO INTRO 4.mp4',
    desc:  'Elegant wedding title animation with soft floral watercolor elements, delicate bokeh particles, and a romantic K&M monogram for Kurt & Minorka\'s wedding on 28.12.2024.',
    extra: 'Designed with a muted lavender and ivory palette to match the couple\'s wedding theme with subtle shimmer particles.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D'],
  },
  3: {
    tag:   'Teaser',
    title: 'Dance sport teaser',
    img:   'thumbnail/proj3.png',
    video: 'DANCE SPORT.mp4',
    desc:  'A short teaser for dance sport competition at Aurora National Science High School.',
    extra: 'Used after effects in making this teaser.',
    stack: ['After Effects', 'Cinema 4D',],
  },
  4: {
    tag:   'Teaser',
    title: 'Bara-Bara Beats — Music Show Title',
    img:   'thumbnail/proj4.png',
    video: 'GRADE 11 DANCE.mp4',
    desc:  'Comic style themed teaser made for a group competitor in AGT at Aurora National Science High School',
    extra: 'The aesthetic was inspired by old Filipino comedy film style. Scratched textures and chromatic aberration give it a raw, authentic feel.',
    stack: ['After Effects', 'Cinema 4D'],
  },
  5: {
    tag:   'Event',
    title: 'ANSHS 42nd Founding Anniversary',
    img:   'thumbnail/proj5.png',
    video: 'SCHOOL PROJECT.mp4',
    desc:  'Official commemorative title sequence for the 42nd Founding Anniversary of Aurora National Science High School, featuring gold 3D typography and institutional seals.',
    extra: 'The dark crimson background and gold metallic text reflect the school\'s official colors and institutional pride. Produced as the main opening title for the event.',
    stack: ['After Effects', 'Cinema 4D',],
  },
  6: {
    tag:   '3D',
    title: 'Layag Pilipinas — TV broadcasting',
    img:   'thumbnail/proj6.png',
    video: 'TRANSITION 1.mp4',
    desc:  'Short clip TV broadcasting studio focusing transitions and 3D motion graphics.',
    extra: '3D models created in Blender; animated and composited in After Effects.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D', 'Blender',],
  },
  7: {
    tag:   'Event',
    title: 'The Nucleus — 30 Years of Excellence',
    img:   'thumbnail/proj7.png',
    video: 'LOGO INTRO.mp4',
    desc:  'Clean editorial documentary title sequence celebrating 30 consecutive championship years of The Nucleus, the school\'s premier academic organization.',
    extra: 'Minimalist design with precise typographic hierarchy.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D'],
  },
  8: {
    tag:   'Event',
    title: 'ANSHS 13th Grand Alumni Homecoming',
    img:   'thumbnail/proj8.png',
    video: 'ALUMNI LOGO - Trim.mp4',
    desc:  '3D chrome school seal reveal with cinematic lens flares, star particle effects, and metallic text animation for the 13th Grand Alumni Homecoming of Aurora National Science High School.',
    extra: 'The chrome plating effect was achieved through Cinema 4D\'s reflective material system. Multiple light sources create the dynamic sheen as the seal rotates into frame.',
    stack: ['After Effects', 'Element 3D', 'Cinema 4D'],
  },
  9: {
    tag:   '3D',
    title: 'I Love Balanga — 3D Virtual Set',
    img:   'thumbnail/proj9.png',
    video: 'STUDIO 2.mp4',
    desc:  '3D animation transitioning from news studio to Balanga, Bataan',
    extra: '3D models created in Blender; animated and composited in After Effects.',
    stack: ['Cinema 4D', '3ds Max', 'V-Ray', '3D Modeling'],
  },
  10: {
    tag:   '3D',
    title: 'Baler — 3D Virtual Broadcast Set',
    img:   'thumbnail/proj10.png',
    video: 'STUDIO 1.mp4',
    desc:  '3D animation transitioning from news studio to Baler, Aurora',
    extra: '3D models created in Blender; animated and composited in After Effects.',
    stack: ['Cinema 4D', '3ds Max', 'V-Ray', '3D Environments'],
  },
  11: {
    tag:   'Motion',
    title: 'Gold Monogram Wedding Title',
    img:   'thumbnail/proj11.png',
    video: 'LOGO INTRO 3.mp4',
    desc:  'Luxurious gold geometric monogram wedding animation over a sparkling confetti backdrop, with elegant hand-lettered script initials and delicate botanical branch accents.',
    extra: 'The hexagonal gold frame slowly draws on screen while confetti particles fall, creating a magical and intimate atmosphere. Designed for a 2024 wedding title card.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D'],
  },
  12: {
    tag:   'Event',
    title: '14th Central Luzon Jamboree',
    img:   'thumbnail/proj12.png',
    video: 'LOGO INTRO 2.mp4',
    desc:  'Title card for the ANSHS Boy Scouts of the Philippines delegation competing at the 14th Central Luzon Jamboree.',
    extra: 'The gold-rimmed BSP medallion was rendered in 3D and composited against a dark cinematic background. Gold lettering at the bottom anchors the formal, ceremonial tone of the event.',
    stack: ['After Effects', 'Cinema 4D', 'Element 3D'],
  },
};

// ── Modal ─────────────────────────────────────────────────────
const backdrop      = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalVideo    = document.getElementById('modalVideo');
const modalVideoWrap= document.getElementById('modalVideoWrap');
const modalThumb    = document.getElementById('modalThumb');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const p = projects[card.dataset.project];
    if (!p) return;

    document.getElementById('modalTag').textContent   = p.tag;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent  = p.desc;
    document.getElementById('modalExtra').textContent = p.extra;

    if (p.video) {
      // Show video player
      modalVideo.src = p.video;
      modalVideo.load();
      modalVideo.play().catch(() => {});
      modalVideoWrap.style.display = 'block';
      modalThumb.style.display = 'none';
      document.getElementById('modalWatchLink').style.display = 'inline-block';
    } else {
      // Show thumbnail image
      modalThumb.src = p.img;
      modalThumb.alt = p.title;
      modalThumb.style.display = 'block';
      modalVideoWrap.style.display = 'none';
      document.getElementById('modalWatchLink').style.display = 'none';
    }

    const stackEl = document.getElementById('modalStack');
    stackEl.innerHTML = p.stack.map(s => `<span class="stack-pill">${s}</span>`).join('');

    backdrop.classList.add('open');
  });
});

// Close modal
function closeModal() {
  backdrop.classList.remove('open');
  // Pause + clear video when modal closes
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.src = '';
  }
}

backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
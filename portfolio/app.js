const language = document.documentElement.lang;
const english = language === 'en';
const dialog = document.querySelector('dialog');
const gallery = document.querySelector('#gallery');
const images = {
  smart: [['smart', 'Systemdesign for Smart Waste', 'Smart Waste system design']],
  tolk: [['tolk', 'Skærmflow for bruger og tolk', 'Screen flows for users and interpreters']],
  vr: [['vr', 'Design af VR-løsningen', 'VR design'], ['vr-system', 'Projektets systemdesign', 'System design']],
  pressure: [['pressure', 'Design af blodtryksmåleren', 'Blood pressure monitor design']],
  ecg: [['ecg', 'EKG-målerens delelementer', 'ECG recorder components']],
  pulse: [['pulse', 'Projektposter om pulsmåleren', 'Heart rate monitor project poster']]
};
function makeImage([file, danish, englishCaption]) {
  const image = document.createElement('img');
  image.src = 'media/' + file + '.webp';
  image.alt = english ? englishCaption : danish;
  image.loading = 'lazy';
  return image;
}
function openProject(project) {
  const [title, category, , , , detail, tags] = project[language];
  for (const [id, value] of Object.entries({ title, category, detail, tags })) {
    document.getElementById(id).textContent = value;
  }
  gallery.replaceChildren();
  for (const picture of images[project.id] || []) {
    const img = makeImage(picture);
    const link = document.createElement('a');
    link.href = img.src;
    link.target = '_blank';
    link.rel = 'noopener';
    link.append(img);
    gallery.append(link);
  }
  const demo = document.querySelector('#demo');
  demo.hidden = !project.video;
  if (project.video) demo.href = project.video;
  else demo.removeAttribute('href');
  const repo = document.querySelector('#repo');
  if (project.github) {
    const link = document.createElement('a');
    link.textContent = english ? 'Open GitHub repository ↗' : 'Åbn repository på GitHub ↗';
    link.href = project.github;
    repo.replaceChildren(link);
  } else {
    repo.textContent = english ? 'GitHub link coming soon' : 'GitHub-link kommer senere';
  }
  dialog.showModal();
}
for (const [index, project] of projects.entries()) {
  const [name, category, art, caption, summary] = project[language];
  const card = document.createElement('button');
  card.className = 'card';
  card.innerHTML = '<div class="art a'+index%4+'" aria-hidden="true"><strong>'+art+'</strong><label>'+caption+'</label></div><section><small>'+category+'</small><h3>'+name+' <span>↗</span></h3><p>'+summary+'</p></section>';
  card.addEventListener('click', () => openProject(project));
  document.querySelector('#cards').append(card);
}
dialog.setAttribute('aria-labelledby', 'title');
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const b = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom)) dialog.close();
});
document.querySelector('.language').addEventListener('click', event => {
  event.currentTarget.hash = location.hash;
});

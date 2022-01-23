
document.getElementById('columnMain').onclick = evt => {
  const storyContainer = evt.path.find(x => x.className.indexOf('hp-story') > -1)
  const linkPath = storyContainer.getElementsByTagName('a')[1].getAttribute('href');
  window.location = linkPath;
}


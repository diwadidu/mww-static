
Array.from(document.getElementsByClassName('topic')).forEach(topicBlock => {
  topicBlock.onclick = evt => {
    if (window.innerWidth < 601) {
      const sectionContainer = evt.path.find(x => x.className.indexOf('topic') > -1)
      const sectionPathSegment = sectionContainer.getAttribute('data-section');

      window.location = `/plan-a-trip/${sectionPathSegment}`;
    }
  }
});

Array.from(document.getElementsByTagName('a')).forEach( anchor => {
  anchor.onclick = evt => {
    // if (window.innerWidth < 601)  evt.preventDefault();
  }
});

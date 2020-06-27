chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'page_updated') {
      onPageChange();
  }
});

function onPageChange() {
  const watchNextElements = document.querySelectorAll('div[class*="ytd-watch-next-"]');

  watchNextElements.forEach(el => {
    el.parentElement.removeChild(el);
  });
  
  const grid = document.getElementsByTagName('ytd-rich-grid-renderer');
  for (let el of grid) {
    el.parentElement.removeChild(el);
  }
  
  for (let el of document.querySelectorAll('ytd-shelf-renderer[class*="ytd-item-section-renderer"]')) {
    el.parentElement.removeChild(el);
  }

  const comments = document.getElementById('comments');
  comments.parentElement.removeChild(comments);
  
}

onPageChange();

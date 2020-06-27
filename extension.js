const intervalId = window.setInterval(() => {
  const watchNextElements = document.querySelectorAll('div[class*="ytd-watch-next-"]');
  if (watchNextElements.length > 0) {
    window.clearInterval(intervalId);
    watchNextElements.forEach(el => {
      el.parentElement.removeChild(el);
    });
  }
}, 50);

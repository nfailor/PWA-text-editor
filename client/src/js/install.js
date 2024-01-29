const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  // Store the event for later use
  window.deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  // Hide the install button
  butInstall.style.display = 'none';
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  deferredPrompt = null;
  console.log('App installed!', event);
});
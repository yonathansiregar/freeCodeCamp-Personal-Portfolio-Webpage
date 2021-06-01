document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
   if (event.keyCode == 123) return false;
   if (e.ctrlKey && e.shiftKey) return false;
   if (event.ctrlKey && event.keyCode == 85) return false;
});
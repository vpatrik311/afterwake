document.querySelectorAll('.sidebar button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`"${btn.innerText}" -> ESKÜ NEMSOKÁRA MŰKÖDIK!!!`);
  });
});

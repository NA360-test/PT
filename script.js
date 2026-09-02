// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Lead form — placeholder handling.
// Right now this just shows a confirmation message locally.
// Once the Supabase backend is set up, replace the code inside
// the submit handler with a call that saves the lead to your
// "leads" table instead of just showing a message.
const form = document.getElementById("leadForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value.trim();

  // TODO: replace this block with a Supabase insert once backend is ready.
  // Example (for later):
  // await supabase.from('leads').insert({ name, phone, stage })

  note.textContent = `Thanks${name ? ", " + name : ""} — we'll reach out on WhatsApp shortly.`;
  form.reset();
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Lead form
const form = document.getElementById("leadForm");
const note = document.getElementById("formNote");
const submitBtn = document.getElementById("submitBtn");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const stage = form.stage.value;

    if (!supabaseClient) {
      note.textContent = "Backend not connected yet — see README to set up Supabase.";
      note.style.color = "var(--magenta)";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const { error } = await supabaseClient.from("leads").insert({
      name: name,
      phone: phone,
      stage: stage,
    });

    submitBtn.disabled = false;
    submitBtn.textContent = "Request a Call";

    if (error) {
      note.style.color = "var(--magenta)";
      note.textContent = "Something went wrong — please try again or WhatsApp us directly.";
      console.error(error);
      return;
    }

    note.style.color = "var(--green)";
    note.textContent = `Thanks${name ? ", " + name : ""} — we'll reach out on WhatsApp shortly.`;
    form.reset();
  });
}

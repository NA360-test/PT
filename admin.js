const loginBox = document.getElementById("loginBox");
const leadsView = document.getElementById("leadsView");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const leadsBody = document.getElementById("leadsBody");
const emptyState = document.getElementById("emptyState");
const leadsTable = document.getElementById("leadsTable");

function showLoggedOut() {
  loginBox.style.display = "block";
  leadsView.style.display = "none";
  logoutBtn.style.display = "none";
}

function showLoggedIn() {
  loginBox.style.display = "none";
  leadsView.style.display = "block";
  logoutBtn.style.display = "inline-block";
}

async function loadLeads() {
  const { data, error } = await supabaseClient
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  leadsBody.innerHTML = "";

  if (!data || data.length === 0) {
    leadsTable.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  leadsTable.style.display = "table";
  emptyState.style.display = "none";

  data.forEach((lead) => {
    const tr = document.createElement("tr");
    const date = new Date(lead.created_at).toLocaleString();
    tr.innerHTML = `
      <td>${date}</td>
      <td>${escapeHtml(lead.name || "")}</td>
      <td>${escapeHtml(lead.phone || "")}</td>
      <td>${escapeHtml(lead.stage || "")}</td>
    `;
    leadsBody.appendChild(tr);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

async function checkSession() {
  if (!supabaseClient) {
    loginError.textContent = "Backend not connected yet — see README to set up Supabase.";
    return;
  }
  const { data } = await supabaseClient.auth.getSession();
  if (data.session) {
    showLoggedIn();
    loadLeads();
  } else {
    showLoggedOut();
  }
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";

  if (!supabaseClient) {
    loginError.textContent = "Backend not connected yet — see README to set up Supabase.";
    return;
  }

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    loginError.textContent = "Invalid email or password.";
    return;
  }

  showLoggedIn();
  loadLeads();
});

logoutBtn.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  showLoggedOut();
});

// Wait for supabase-config.js (deferred) to be ready
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(checkSession, 50);
});

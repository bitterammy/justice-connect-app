export default function PrivacyPage() {
  return (
    <div className="container section">
      <div style={{ maxWidth: 760 }}>
        <h1 className="section-title">Privacy Policy</h1>
        <div className="gold-rule" />
        <div className="prose mt-3">
          <p>Justice Connect respects your privacy. This policy explains what we collect and why.</p>
          <h3>Information we collect</h3>
          <ul>
            <li><b>Account information:</b> when you sign in with Google, we store your name, email address, and profile photo so you can save favorites, write reviews, and book appointments.</li>
            <li><b>Attorney listings:</b> information submitted through “List Your Firm” is published publicly in the directory, as intended.</li>
            <li><b>Reviews and appointments:</b> content you submit is stored and shown as described on the site.</li>
          </ul>
          <h3>How we use it</h3>
          <p>We use your information to operate the directory — nothing more. We do not sell your personal data.</p>
          <h3>Cookies</h3>
          <p>We use essential cookies for sign-in sessions. No advertising trackers.</p>
          <h3>Your rights</h3>
          <p>You may request deletion of your account and data at any time via the contact page.</p>
          <h3>Contact</h3>
          <p>Questions about privacy: use our contact page and we will respond.</p>
        </div>
      </div>
    </div>
  );
}

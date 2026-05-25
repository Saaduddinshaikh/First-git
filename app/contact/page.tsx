export default function ContactPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', color: '#111' }}>
      <h1>Contact Us</h1>
      <p>If you have questions, feedback, or need assistance, please reach out.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Address: 123 Main Street, Suite 100, City, Country</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Hours</h2>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Send a Message</h2>
        <p>For quick replies, email us directly or use the contact form on our homepage.</p>
      </section>
    </main>
  );
}

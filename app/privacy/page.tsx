export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 21, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            At Scribble2Text, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and email address when you create an account</li>
            <li>Billing information when you subscribe to a paid plan</li>
            <li>Information you provide in support requests</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Images you upload for conversion</li>
            <li>Converted text output</li>
            <li>Usage statistics and preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and maintain our service</li>
            <li>To process your payments</li>
            <li>To send you important updates and notifications</li>
            <li>To improve our service and develop new features</li>
            <li>To respond to your support requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information, including encryption and secure storage practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Receive a copy of your information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            Email: privacy@scribble2text.com<br />
            Address: 123 Innovation Drive, Tech City, TC 12345
          </p>
        </section>
      </div>
    </div>
  );
}
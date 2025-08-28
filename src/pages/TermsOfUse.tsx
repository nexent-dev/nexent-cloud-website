import React from 'react'
import './TermsOfUse.css'

const TermsOfUse: React.FC = () => {
  return (
    <div className="terms-of-use">
      <div className="container">
        <div className="terms-header">
          <h1>Terms of Use</h1>
          <p className="last-updated">Last updated: August 27, 2025</p>
        </div>

        <div className="terms-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Nexent Cloud services, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2>2. Service Description</h2>
            <p>
              Nexent Cloud provides cloud computing services including but not limited to virtual machines, 
              storage solutions, networking services, and application hosting. We reserve the right to modify, 
              suspend, or discontinue any aspect of the service at any time.
            </p>
          </section>

          <section>
            <h2>3. Account Registration</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years old or have parental consent</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use our services for:</p>
            <ul>
              <li>Illegal activities or content that violates laws</li>
              <li>Distributing malware, viruses, or harmful code</li>
              <li>Unauthorized access to other systems or networks</li>
              <li>Spamming or unsolicited communications</li>
              <li>Cryptocurrency mining without explicit permission</li>
              <li>Activities that may harm our infrastructure or other users</li>
            </ul>
          </section>

          <section>
            <h2>5. Payment and Billing</h2>
            <p>
              Services are billed according to our published pricing. You agree to pay all charges incurred by 
              your account. We reserve the right to suspend services for non-payment. Refunds are provided 
              according to our refund policy.
            </p>
          </section>

          <section>
            <h2>6. Data and Content</h2>
            <p>
              You retain ownership of your data and content. You grant us the right to store, process, and 
              transmit your data as necessary to provide our services. You are responsible for backing up 
              your data and ensuring you have appropriate rights to any content you upload.
            </p>
          </section>

          <section>
            <h2>7. Service Availability</h2>
            <p>
              While we strive for high availability, we do not guarantee uninterrupted service. We may perform 
              maintenance that temporarily affects service availability. Our Service Level Agreement (SLA) 
              details our uptime commitments and remedies.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              Nexent Cloud shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
              losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>
              Either party may terminate this agreement at any time. Upon termination, your right to use the 
              service ceases immediately. We will provide reasonable notice for termination except in cases 
              of violation of these terms.
            </p>
          </section>

          <section>
            <h2>10. Intellectual Property</h2>
            <p>
              Our services and underlying technology are protected by intellectual property laws. You may not 
              copy, modify, distribute, or reverse engineer our services without explicit written permission.
            </p>
          </section>

          <section>
            <h2>11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes 
              arising under these terms shall be subject to the exclusive jurisdiction of the appropriate courts.
            </p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of material changes 
              through our service or via email. Your continued use of the service after such modifications 
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Use, please contact us at:
            </p>
            <div className="terms-of-use-contact-info">
              <p>Email: legal@nexent.dev</p>
              <p>Address: Nexent Technologies, Inc.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse

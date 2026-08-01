import { siteConfig } from "@/data/site";
import type { LegalSection } from "@/types";

export const legalLastUpdated = "August 1, 2026";

export const privacyPolicySections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      `${siteConfig.name} ("we", "us") respects your privacy. This policy explains what information we collect through this website and how we use it.`,
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We only collect information you voluntarily submit through our contact form, which may include:",
    ],
    list: [
      "Name and email address",
      "Company name (optional)",
      "Project type and budget range",
      "The message you send us",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "Information submitted through our contact form is used solely to respond to your inquiry and discuss a potential project. We do not sell, rent, or share your information with third parties for marketing purposes.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    paragraphs: [
      "This website does not currently use tracking cookies or third-party analytics services.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain contact form submissions only as long as necessary to respond to your inquiry, unless you engage us for a project, in which case standard business record-keeping applies.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We take reasonable measures to protect the information you share with us. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      `Depending on your location, you may have rights to access, correct, or request deletion of the personal data we hold about you. To make such a request, contact us at ${siteConfig.email}.`,
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "Our website may link to third-party sites. We are not responsible for the privacy practices or content of those sites.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. The date of the most recent update is shown at the top of this page.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [`Questions about this policy can be sent to ${siteConfig.email}.`],
  },
];

export const termsOfServiceSections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      `These Terms of Service govern your use of the ${siteConfig.name} website and outline the general terms under which we provide software development services.`,
    ],
  },
  {
    heading: "Use of This Website",
    paragraphs: [
      "This website is provided for informational purposes. By using it, you agree not to misuse the site, attempt unauthorized access, or interfere with its normal operation.",
    ],
  },
  {
    heading: "Service Engagements",
    paragraphs: [
      "Any software development services are governed by a separate written proposal or agreement specific to your project, which outlines scope, timeline, and pricing. These website terms do not by themselves constitute a service contract.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      `Content on this website — including text, design, and branding — is owned by ${siteConfig.name} unless otherwise noted. Source code and deliverables produced under a signed project agreement are owned by the client as described in that agreement.`,
    ],
  },
  {
    heading: "No Warranties",
    paragraphs: [
      "This website and its content are provided \"as is\" without warranties of any kind, express or implied.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      `To the fullest extent permitted by law, ${siteConfig.name} is not liable for any indirect, incidental, or consequential damages arising from your use of this website.`,
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [`Questions about these terms can be sent to ${siteConfig.email}.`],
  },
];

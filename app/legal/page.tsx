import type { Metadata } from "next";
import { FileText, Download, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Documents & Service Agreements | Applied Technology Group",
  description:
    "ATG service agreements, data processing agreements, and supplemental legal documents available for download.",
  openGraph: {
    title: "Legal Documents | ATG",
    description: "ATG service agreements and legal documents.",
    url: "https://atgfw.com/legal",
    type: "website",
  },
  alternates: { canonical: "https://atgfw.com/legal" },
};

const BASE_URL = "https://atgfw.com/wp-content/uploads/";

const serviceAgreements = [
  {
    name: "Master Services Agreement",
    file: "Master-Services-Agreement.pdf",
  },
  {
    name: "Service Attachment — Managed Services",
    file: "Service-Attachment-Managed-Services.pdf",
  },
  {
    name: "Service Attachment — Co-Managed Services",
    file: "Service-Attachment-Co-Managed-Services.pdf",
  },
  {
    name: "Service Attachment — Managed Penetration Testing",
    file: "Service-Attachment-Managed-Penetration-Testing.pdf",
  },
  {
    name: "Service Attachment — Managed Compliance Services",
    file: "Service-Attachment-Managed-Compliance-Services.pdf",
  },
  {
    name: "Service Attachment — AI Services",
    file: "Service-Attachment-AI-Services.pdf",
  },
  {
    name: "Service Attachment — Managed Video Surveillance",
    file: "Service-Attachment-Managed-Video-Surveillance.pdf",
  },
  {
    name: "Service Attachment — Managed Access Control",
    file: "Service-Attachment-Managed-Access-Control.pdf",
  },
  {
    name: "Service Attachment — Monitored Alarm Services",
    file: "Service-Attachment-Monitored-Alarm-Services.pdf",
  },
];

const supplementalDocuments = [
  {
    name: "Data Processing Agreement",
    file: "Data-Processing-Agreement.pdf",
  },
  {
    name: "Schedule of Third-Party Services",
    file: "Schedule-of-Third-Party-Services.pdf",
  },
  {
    name: "ATG Schedule of Services (Service Comparison)",
    file: "ATG-Schedule-of-Services.pdf",
  },
];

function DocumentList({ documents }: { documents: { name: string; file: string }[] }) {
  return (
    <ul className="divide-y divide-border">
      {documents.map((doc) => (
        <li key={doc.name} className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-accent-blue" />
            </div>
            <span className="text-text-primary text-sm font-medium">{doc.name}</span>
          </div>
          <a
            href={`${BASE_URL}${doc.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-accent-blue text-sm font-semibold hover:underline"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0A2463" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sora font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
            Legal Documents & Service Agreements
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            All ATG service agreements and legal documents are available below. If you have
            questions about any document, please{" "}
            <a href="tel:18338324033" className="text-white font-semibold hover:text-accent-blue transition-colors">
              contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Service Agreements */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-5 border-b border-border">
              <h2 className="font-sora font-bold text-primary-blue text-xl">
                Service Agreements
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Core agreements and service attachments for ATG managed services.
              </p>
            </div>
            <div className="px-6">
              <DocumentList documents={serviceAgreements} />
            </div>
          </div>

          {/* Supplemental Documents */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-5 border-b border-border">
              <h2 className="font-sora font-bold text-primary-blue text-xl">
                Supplemental Documents
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Data processing, third-party schedules, and service comparisons.
              </p>
            </div>
            <div className="px-6">
              <DocumentList documents={supplementalDocuments} />
            </div>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg h-fit">
              <Phone className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <p className="font-semibold text-text-primary mb-1">Questions About These Documents?</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our team is happy to walk you through any agreement. Call us at{" "}
                <a href="tel:18338324033" className="text-accent-blue font-semibold hover:underline">
                  1-833-832-4033
                </a>{" "}
                Monday – Friday, 8:00am – 5:00pm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

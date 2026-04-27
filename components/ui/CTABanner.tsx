const BOOKING_URL =
  "https://outlook.office365.com/owa/calendar/SalesTeam1@atgfw.com/bookings/";

interface CTABannerProps {
  headline?: string;
  body?: string;
  buttonLabel?: string;
}

export default function CTABanner({
  headline = "Not Sure Where to Start?",
  body = "Schedule a free network assessment and let our engineers show you exactly where your technology stands — and how to improve it.",
  buttonLabel = "Book Your Free Assessment",
}: CTABannerProps) {
  return (
    <section className="bg-accent-blue py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-white">
          {headline}
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed">{body}</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-accent-blue font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors mt-2"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

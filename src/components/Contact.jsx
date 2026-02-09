export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-10 pb-20 px-6 max-w-4xl mx-auto"
    >
      <fieldset
        className="relative border border-gray-300 rounded-xl px-6 sm:px-10 py-10"
      >
       {/* Legend */}
<legend className="px-3 text-center">
  <span className="inline-block px-4 py-1 
                   text-xl sm:text-2xl font-bold text-blue-600
                   border border-gray-300 rounded-full
                   bg-white">
    Contact
  </span>
</legend>


        {/* Content */}
        <div className="flex justify-center">
          <div className="max-w-xl text-center">
            <p className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Get in Touch
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Have a question, an idea, or just want to talk about data, AI, or
              technology? 
              I genuinely enjoy meaningful conversations and
              exploring new ideas-feel free to reach out anytime.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQpHnFrwb56ypCu2s8liVC_QVegQLaReTCUq-qYiwXNj5DlQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                           px-7 py-3 rounded-full
                           text-sm sm:text-base font-medium
                           bg-black text-white
                           hover:bg-white hover:text-black hover: border border-black
                           transition shadow-md"
              >
                Reach Out →
              </a>
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
}

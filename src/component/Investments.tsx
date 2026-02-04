import Image from "next/image";

const sections = [
  {
    title: "Kiosk",
    fee: "₹3,00,000 + GST",
    investment: "Starts At ₹18 Lakhs",
    payback: "18 To 24 Months",
    image: "/investments1.jpg",
  },
  {
    title: "Express",
    fee: "₹5,00,000 + GST",
    investment: "Starts At ₹22 Lakhs",
    payback: "18 To 24 Months",
    image: "/investments2.jpg",
  },
  {
    title: "Cafe",
    fee: "₹7,00,000 + GST",
    investment: "Starts At ₹30 Lakhs",
    payback: "18 To 24 Months",
    image: "/investments3.jpg",
  },
];

const Investments = () => {
  return (
    <div className="bg-gray-50 py-12 space-y-16">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Investments & Returns
        </h2>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6"
        >
          {/* Content */}
          <div className={`${index % 2 === 1 ? "md:order-2" : ""} flex justify-center`}>
            <div className="bg-green-800 text-white rounded-xl p-6 space-y-4 max-w-md w-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold">
                {section.title}
              </h3>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Franchise Fee - {section.fee}
              </div>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Investment - {section.investment}
              </div>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Payback - {section.payback}
              </div>

              <button className="w-full border border-white py-3 rounded-full font-medium hover:bg-white hover:text-green-800 transition">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Download Button LAST */}
      <div className="text-center">
        <a
          href="/brochure.pdf"
          download
          className="inline-block bg-green-800 text-white px-10 py-4 rounded-full font-medium hover:bg-green-700 transition"
        >
          Download Brochure
        </a>
      </div>

    </div>
  );
};

export default Investments;

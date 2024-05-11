import ContactUI from "../pages/contact-UI/page";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
export function FindUs() {
  return (
      <div className="container px-4 md:px-3 py-6 md:py-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="rounded-xl overflow-hidden aspect-video">
            <ContactUI />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Us</h1>
              <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400">iConSenSe Lab </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  3201 S Dearborn St
                  <br />
                  Chicago, IL 60616
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Contact</h3>
                <div className="flex items-center space-x-2"> {/* Container for icons and text */}
                    <FaPhone className="text-gray-500 dark:text-gray-400" /> {/* Phone icon */}
                    <p className="text-gray-500 dark:text-gray-400"> 
                        <a className="hover:underline" href="tel:+13125673808">+1 (312) 567-3808</a>
                    </p>
                </div>
                <div className="flex items-center space-x-2"> {/* Container for icons and text */}
                    <FaEnvelope className="text-gray-500 dark:text-gray-400" /> {/* Email icon */}
                    <p className="text-gray-500 dark:text-gray-400"> 
                        <a className="hover:underline" href="mailto:imutissi@iit.edu">imutissi@iit.edu</a>
                    </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

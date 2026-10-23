import { SITE } from "@/lib/about-data";


export const PHONE = "9779869991666";

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi PixelPy Tech, I'd like to discuss a project."
)}`;

export const CONTACT = {
  email: SITE.email,
  responseTime: "within 24 hours on business days",
};

export const STEPS = [
  { title: "You send details", desc: "Tell us what you are building, your timeline and a rough budget." },
  { title: "We reply", desc: `A real person replies ${CONTACT.responseTime}.` },
  { title: "Discovery call", desc: "A short call to clarify scope, goals and users." },
  { title: "Scope & estimate", desc: "You get a clear scope, timeline and price, with no obligation." },
];

export const CONTACT_FAQS = [
  {
    q: "How quickly will PixelPy Tech reply?",
    a: `We reply to every project enquiry ${CONTACT.responseTime}.`,
  },
  {
    q: "What should I include in my message?",
    a: "Tell us what you want to build (website, web app or mobile app), who it is for, your ideal timeline and a rough budget. Links to similar products help too.",
  },
  {
    q: "Is the first consultation free?",
    a: "Yes. The first discovery call and the scope and estimate are free and come with no obligation.", // TODO: confirm
  },
  {
    q: "Can I contact you on WhatsApp?",
    a: "Yes. Use the WhatsApp button on this page to message us directly.",
  },
];
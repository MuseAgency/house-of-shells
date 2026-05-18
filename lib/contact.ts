// Central contact info — edit here, updates everywhere.

export const CONTACT = {
  email: "hello@houseofshells.nl",
  // Phone number for display (Dutch format)
  phone: "+31 6 17 18 79 97",
  // WhatsApp link uses international format without spaces or symbols
  whatsapp: {
    number: "31617187997",
    // Default prefilled message when clicking the WhatsApp button
    defaultMessage: "Hi House of Shells! I'd love to ask you about ",
  },
  instagram: "https://instagram.com/houseofshells.nl",
  tiktok: "https://tiktok.com/@houseofshells.nl",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${CONTACT.whatsapp.number}`;
  const text = message ?? CONTACT.whatsapp.defaultMessage;
  return `${base}?text=${encodeURIComponent(text)}`;
};

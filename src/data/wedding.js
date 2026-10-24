// All invitation content lives here. Edit this file to change names, dates, events or venue.

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

// `first` is the hosts' child (shown first on the card), `second` is the partner.
export const couple = {
  first: {
    name: "Pooja",
    lineage: ["Grand D/o Late Smt. Aasha Devi & Late Sh. Mukhdev Prasad Yadav"],
  },
  second: {
    name: "Shubham",
    lineage: ["S/o Smt. Rajni & Sh. Arvind Bhatnagar", "R/o Sector-32, Faridabad (Hr.)"],
  },
  hashtag: "#PoojaWedsShubham",
};

export const hosts = {
  names: "Smt. Rukmani & Sh. Guljari Lal Yadav",
  childRelation: "daughter",
  familyTitle: "The Yadav Family",
  invitationFrom: "Sh. Guljari Lal Yadav",
  address: ["H.No. 121/A, Gali No. 2, Shiv Colony", "Palla No. 1, Faridabad (121003)"],
  phones: ["9990180580", "8799765770", "8860007142"],
};

export const shlokas = [
  ["वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः।", "निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा॥"],
  ["विघ्नहरण मंगल करण, श्री गणपति महाराज।", "प्रथम निमन्त्रण आपको, पूरण कीजै काज॥"],
];

export const weddingDate = {
  label: "Friday, 27th November 2026",
  short: "27th Nov 2026",
  scratchReveal: "27th Nov 2026",
  // Countdown target (IST)
  countdownTarget: "2026-11-27T00:00:00+05:30",
};

export const venue = {
  label: "All Functions",
  name: "Girraj Sharma Farm House",
  address: "Ashoka Enclave, Faridabad - 121003",
  mapQuery: "Girraj Sharma Farm House, Ashoka Enclave, Faridabad",
};

export const locations = [venue];

const at = (place) => `${place.name}, ${place.address}`;

export const eventDays = [
  {
    day: "Thursday, 26th November 2026",
    events: [
      { title: "Haldi", desc: "A golden beginning to a beautiful journey", time: "7:00 PM", image: img("web/haldi.jpg"), venue: at(venue) },
      { title: "Mehendi", desc: "Henna, laughter and colours of love", time: "7:30 PM", image: img("web/mehendi.jpg"), venue: at(venue) },
      { title: "Sangeet", desc: "A night of music, dance and cherished memories", time: "8:00 PM", image: img("web/sanget.jpg"), venue: at(venue) },
    ],
  },
  {
    day: "Friday, 27th November 2026",
    events: [
      { title: "Reception of Barat", desc: "Welcoming the baraat with love and joy", time: "7:00 PM", image: img("web/varmal.jpg"), venue: at(venue) },
      { title: "Dinner", desc: "An evening of good food and great company", time: "8:00 PM", image: img("web/recept.jpg"), venue: at(venue) },
      { title: "Doli", desc: "A tearful, loving farewell to our daughter", time: "Taaron Ki Chhaon Mein", image: img("web/phere.jpg"), venue: at(venue) },
    ],
  },
];

export const rsvp = ["Sh. Raj Kishor Yadav", "Sh. Kailash Yadav", "Sh. Ajay Yadav", "Sh. Pankaj Yadav"];

export const compliments = ["Amit Yadav, Sumit Yadav", "Karan Yadav, Ashish Yadav", "Preetam Yadav"];

export const awaitingEyes = "Trisha & Pratham";

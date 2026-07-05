export const ROOM_POLICY = {
  validity: "Tariff valid from 01 April 2023 onwards. Rates exclusive of applicable taxes.",
  notes: [
    "Additional GST applicable as per government norms.",
    "Children below 5 years: stay free.",
    "Children 5–14 years: ₹1,500 + taxes for an extra bed.",
    "Guests above 14 years: ₹1,800 + taxes for an extra bed.",
  ],
};

export const ROOMS = [
  {
    slug: "executive-room",
    name: "Executive Room",
    count: 25,
    priceSingle: 5000,
    priceDouble: 5500,
    shortDescription:
      "Spacious rooms blending contemporary design with premium comfort, plush bedding and high-speed Wi-Fi.",
    longDescription:
      "Our spacious Executive Rooms blend contemporary design with premium comfort. Each room features plush bedding, high-speed Wi-Fi, air conditioning, LCD television, mini refrigerator, tea/coffee maker, and an elegant en-suite bathroom with running hot and cold water.",
    images: ["/images/rooms/ROOM2.jpg", "/images/rooms/NDS_5403.jpg"],
    amenities: [
      "King/Twin Beds",
      "Air Conditioning",
      "LCD TV",
      "Free Wi-Fi",
      "Mini Fridge",
      "Tea/Coffee Maker",
      "Hot & Cold Water",
      "Room Service",
    ],
  },
  {
    slug: "superior-room",
    name: "Superior Room",
    count: 6,
    priceSingle: 5000,
    priceDouble: 6000,
    shortDescription:
      "An elevated experience with refined interiors, extra space and premium amenities throughout.",
    longDescription:
      "The Superior Room offers an elevated experience with refined interiors, extra space, and premium amenities — designed for guests who want a little more room to unwind, without compromising on any of the comforts of home.",
    images: ["/images/rooms/newroom.jpeg", "/images/rooms/NDS_5407.jpg"],
    amenities: [
      "Queen/Double Beds",
      "Air Conditioning",
      "LCD TV",
      "Free Wi-Fi",
      "Mini Fridge",
      "Tea/Coffee Maker",
      "Hot & Cold Water",
      "24-Hour Room Service",
    ],
  },
  {
    slug: "queen-suite",
    name: "Queen Suite",
    count: 6,
    priceSingle: 5500,
    priceDouble: 6500,
    shortDescription:
      "A generously appointed suite with a separate living area, premium décor and panoramic views.",
    longDescription:
      "Experience unparalleled luxury in our Queen Suite — a generously appointed space featuring a separate living area, premium décor, and panoramic views of the city skyline, designed for guests who expect nothing less than the extraordinary.",
    images: ["/images/rooms/ROOM3.jpg", "/images/rooms/NDS_5408.jpg"],
    amenities: [
      "Queen Suite Bed",
      "Separate Living Area",
      "Air Conditioning",
      "LCD TV",
      "Free Wi-Fi",
      "Mini Bar",
      "Tea/Coffee Maker",
      "Premium Bath Amenities",
    ],
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    count: 1,
    priceSingle: 6999,
    priceDouble: 7499,
    shortDescription:
      "The crown jewel of The ParkQueen Hotel — an expansive suite with a private lounge and butler service.",
    longDescription:
      "The crown jewel of The ParkQueen Hotel — our Presidential Suite is the epitome of luxury. Featuring an expansive bedroom, a private lounge, exclusive butler service, and a suite of bespoke amenities reserved for our most distinguished guests.",
    images: ["/images/rooms/ROOM4.jpg", "/images/rooms/ROOM5.jpg"],
    amenities: [
      "Presidential King Bed",
      "Private Lounge",
      "Butler Service",
      "Air Conditioning",
      "Smart TV",
      "Free Wi-Fi",
      "Mini Bar",
      "Premium Bath Suite",
    ],
  },
];

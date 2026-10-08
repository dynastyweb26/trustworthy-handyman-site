// Real Google Business Profile reviews, quoted verbatim. Names are shortened
// to first name + last initial. Update GOOGLE_REVIEW_COUNT when it changes.

export interface Review {
  id: string;
  name: string;
  text: string;
}

export const GOOGLE_REVIEW_COUNT = 24;
export const GOOGLE_RATING = "5.0";

export const reviews: Record<string, Review> = {
  rochelle: {
    id: "rochelle",
    name: "Rochelle R.",
    text: "Thank you so much for getting my front door repaired. Would 100% recommend Cyrille for your home improvement needs and will be using him again for my future needs.",
  },
  louis: {
    id: "louis",
    name: "Louis T.",
    text: "Cyril provide a magnificent service. He is on time and on budget.",
  },
  jennifer: {
    id: "jennifer",
    name: "Jennifer C.",
    text: "Great experience! Fast service and reliable!",
  },
  jiji: {
    id: "jiji",
    name: "Jiji M.",
    text: "Had a wonderful experience with Cyril. Knowledgeable, honest and dependable",
  },
  alveraz: {
    id: "alveraz",
    name: "Alveraz C.",
    text: "Very professional & excellent job 👍 would recommend him to anyone!",
  },
  elvis: {
    id: "elvis",
    name: "Elvis M.",
    text: "Very Affordable and Works Super fast. Definitely Recommend",
  },
  lemnyuy: {
    id: "lemnyuy",
    name: "Lemnyuy N.",
    text: "Did an exceptional job installing my patio shades. Very happy with the job.",
  },
  siddhartha: {
    id: "siddhartha",
    name: "Siddhartha D.",
    text: "Cyrille has done an exceptional job and brought our design to life 100% and at a great price and kept us informed of the progress all along. Will definitely call him for all my other projects.",
  },
  chopmoh: {
    id: "chopmoh",
    name: "Chopmoh N.",
    text: "Cyril Made a beautiful media Wall for my brand new house. Highly recommend for people building new houses. Great price",
  },
};

export const garageReviews = [reviews.rochelle, reviews.louis, reviews.jennifer, reviews.jiji, reviews.alveraz, reviews.elvis];
export const blindsReviews = [reviews.lemnyuy, reviews.siddhartha, reviews.jiji];
export const homeReviews = [reviews.rochelle, reviews.chopmoh, reviews.lemnyuy, reviews.siddhartha, reviews.louis, reviews.jennifer];

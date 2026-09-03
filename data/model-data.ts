import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Kartik Kunday",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Kartik is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "6.5 years" ,
    dateOfBirth: "19 Jan 2020",
    height: "4 ft",
    weight: "22 kg",
    Bust: "20",
    skinTone: "fair",
    hairColor: "Black",
    eyeColor: "Black",
    ShoeSize: "12",
    Hips: "24",
    Waist: "28",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Amit Kunday",
    motherName: "Miss. Karishma Kunday",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "kartikkunday2020",

  ecommerce: [
  /**{
    name: "Flipkart",
    url: "https://www.flipkart.com/",
    description: "Shop featured products and collections.",
  },*/
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Kartik Kundayfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "Kartik Kundayfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "Kartik Kundaystudio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "Kartik Kundayoutdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "Kartik Kundaycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "Kartik Kundaylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "Kartik Kundaycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "Kartik Kundayeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "Kartik Kundayhero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "Kartik Kundayprofile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "Kartik Kundaycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "Kartik Kundaylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.JPG",
      alt: "Kartik Kundaycampaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.JPG",
      alt: "Kartik Kundayeditorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.JPG",
      alt: "Kartik Kundaycommercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.JPG",
      alt: "Kartik Kundaylifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-22.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.JPG",
      alt: "Kartik Kundayfashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.JPG",
      alt: "Kartik Kundayfashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.JPG",
      alt: "Kartik Kundayfashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.JPG",
      alt: "Kartik Kundaystudio portrait",
      category: "Studio",
    },
    
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  {
    title: "Kartik KundayModel Shoot",
    category: "LIVE ADVERTISEMENT RECORDING FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/KARTIK KUNDAY (1).mp4",
    type: "mp4",
  },
  {
    title: "Kartik KundayModel Shoot",
    category: "RAW Video FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/KARTIK KUNDAY.mp4",
    type: "mp4",
  },
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}

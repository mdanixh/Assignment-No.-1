import { guestlist } from "./guestlist.ts";
//Guest List
//Make a list of atleast three persons to whom do you want to invite to the dinner
const guestlist: string[] = ["Imran Khan", "Nawaz Sharif", "IMF"];
for (let i = 0; i < guestlist.length; i++) {
  console.log(`Dear ${guestlist[i]}, you are cordially invited to dinner in order to resolve conflicts. Please join us for a remarkable resolution of the country's financial condition`);  
}

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Cars and vehicles",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("seedign categories");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `videos relates to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
  } catch (error) {
    console.log("Error seeding categories", error);
    process.exit();
  }
}

main();

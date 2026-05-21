import { db } from "../lib/db";

async function main() {
  await db.expense.createMany({
    data: [
      { title: "Lunch with team", amount: 47.5, date: new Date("2026-05-08") },
      { title: "AWS hosting", amount: 120.0, date: new Date("2026-05-01") },
      { title: "Office supplies", amount: 23.99, date: new Date("2026-04-28") },
    ],
  });

  console.log("Seeded 3 expenses.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());

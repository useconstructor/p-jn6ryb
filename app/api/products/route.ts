import { db } from "@/lib/db";

const products = [
  ["Ethiopia Aricha", "Yirgacheffe, Ethiopia", "Blueberry · Jasmine · Bergamot", "Light", "Pour over", 22],
  ["Guatemala El Injerto", "Huehuetenango, Guatemala", "Cacao · Red apple · Brown sugar", "Medium", "French press", 21],
  ["Kenya Gichathaini", "Nyeri, Kenya", "Blackcurrant · Grapefruit · Honey", "Light", "Pour over", 24],
  ["Costa Rica La Pastora", "Tarrazú, Costa Rica", "Orange · Caramel · Almond", "Medium", "Espresso", 20],
  ["Rwanda Kinini", "Rulindo, Rwanda", "Apricot · Tea · Wildflower", "Light", "Aeropress", 23],
  ["Ember House Blend", "East Africa · Central America", "Dark chocolate · Cherry · Toffee", "Medium dark", "Espresso", 19]
];

async function prepare() {
  await db.execute(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL, origin TEXT NOT NULL, notes TEXT NOT NULL, roast TEXT NOT NULL, brew TEXT NOT NULL, price REAL NOT NULL, available INTEGER DEFAULT 1, created_at TEXT DEFAULT (datetime('now')))`);
  for (const product of products) await db.execute({ sql: "INSERT OR IGNORE INTO products (name, origin, notes, roast, brew, price) VALUES (?,?,?,?,?,?)", args: product });
}

export async function GET() {
  await prepare();
  const { rows } = await db.execute("SELECT * FROM products WHERE available = 1 ORDER BY id");
  return Response.json(rows);
}

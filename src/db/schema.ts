import { date, integer, numeric, pgTable, text } from "drizzle-orm/pg-core";

export const kartRecord = pgTable("kart_record", {
    id: text("id").primaryKey(),
    date: date("day").notNull(),
    venue: text("venue").notNull(),
    resourceId: text("resource_id").notNull(),
    scoregroupId: text("scoregroup_id").notNull(),

    kartNumber: integer("kart_number").notNull(),
    timeMs: numeric("time_ms", { precision: 6, scale: 3 }).notNull(),
    position: integer("position").notNull(),
});

import { date, integer, numeric, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const venue = pgTable("venue", {
    clientKey: text("clientKey").primaryKey(),
    name: text("name").notNull(),
    baseAddress: integer("baseAddress").notNull(),
});

export const kartRecord = pgTable("kart_record", {
    id: uuid("id").primaryKey().defaultRandom(),
    date: date("day").notNull(),
    venue: text("venue")
        .notNull()
        .references(() => venue.clientKey, { onDelete: "cascade" }),
    resourceId: text("resource_id").notNull(),
    scoregroupId: text("scoregroup_id").notNull(),

    kartNumber: integer("kart_number").notNull(),
    timeMs: numeric("time_ms", { precision: 6, scale: 3 }).notNull(),
    position: integer("position").notNull(),
});

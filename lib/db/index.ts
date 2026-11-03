import { getCloudflareContext } from "@opennextjs/cloudflare"
import { drizzle, DrizzleD1Database } from "drizzle-orm/d1"
import * as schema from "./schema"

let _db: DrizzleD1Database<typeof schema>

export const getDb = () => {
    if (!_db) {
        _db = drizzle(getCloudflareContext().env.DB, { schema })
    }
    return _db
}

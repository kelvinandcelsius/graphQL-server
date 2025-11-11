import { count } from "console"
import { climbingRoutes } from "./data.js"

export const resolvers = {
    Query: {
        climbingRoutes: () => climbingRoutes,
        getRoutes: (_: unknown, { category }: { category?: string }) => {
            const filteredRoutes = category ? climbingRoutes.filter(r => r.category === category) : climbingRoutes
            return {
                climbingRoutes: filteredRoutes,
                count: filteredRoutes.length
            }
        }
    }
}
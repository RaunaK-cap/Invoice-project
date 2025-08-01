import { PrismaClient } from '../generated/prisma'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

console.log("database connnected ..")

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
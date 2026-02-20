-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('WALKING', 'BOARDING', 'DAYCARE', 'SITTING');

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sitterId" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_sitterId_fkey" FOREIGN KEY ("sitterId") REFERENCES "sitterProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

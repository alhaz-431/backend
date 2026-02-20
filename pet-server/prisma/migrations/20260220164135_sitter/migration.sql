-- CreateTable
CREATE TABLE "sitterProfile" (
    "id" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "hourlyRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sitterId" TEXT NOT NULL,

    CONSTRAINT "sitterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sitterProfile_sitterId_key" ON "sitterProfile"("sitterId");

-- AddForeignKey
ALTER TABLE "sitterProfile" ADD CONSTRAINT "sitterProfile_sitterId_fkey" FOREIGN KEY ("sitterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

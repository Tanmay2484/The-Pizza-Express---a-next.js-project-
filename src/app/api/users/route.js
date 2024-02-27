import { isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    if (await isAdmin()) {
      const users = await User.find();
      return Response.json(users);
    } else {
      return Response.json([]);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  } finally {
    // Close the Mongoose connection after the operation
    await mongoose.connection.close();
  }
}

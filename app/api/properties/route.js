import connectedDB from "@/config/database";
import Property from "@/models/Property";
// GET /API/PROPERTIES
export const GET = async (request) => {
  try {
    await connectedDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something wents wrong", {
      status: 500,
    });
  }
};

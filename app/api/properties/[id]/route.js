import connectedDB from "@/config/database";
import Property from "@/models/Property";
// GET /API/PROPERTIES/:id
export const GET = async (request, { params }) => {
  try {
    await connectedDB();
    const property = await Property.findById(params.id);
    if (!property) return new Response("Property not found", { status: 404 });
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something wents wrong", {
      status: 500,
    });
  }
};

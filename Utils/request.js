const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
// fetch all property
async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
// fetch single Property
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
export { fetchProperties, fetchProperty };

export async function getAllCategories() {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
        throw new Error("BASE_URL is missing in environment variables");
    }

    const response = await fetch(`${baseUrl}/categories`, {
        method: "GET",
    });

    return response.json();
}
export async function getCategory(categoryID: string) {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
        throw new Error("BASE_URL is missing in environment variables");
    }

    const response = await fetch(`${baseUrl}/categories/${categoryID}`, {
        method: "GET",
    });

    return response.json();
}

export  async function getAllUser(){
    const response = await fetch("${process.env.NEXT_PUBLIC_BASE_URL}/users",{
    method:"GET",

    })
    const data = await response.json();
    return data
}


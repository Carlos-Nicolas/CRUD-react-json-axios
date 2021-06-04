import axios from "axios";
const baseUrl = "http://localhost:3001/users";

export async function moficateIsActivate(user) {
  /* recive user para mandar en la data*/
  try {
    const response = await axios({
      url: `${baseUrl}/${id}`,
      method: "PUT",
      data: {
        id: id,
        firstName: firtsName,
        lastName: lastName,
        email: email,
        image:
          "https://www.bunko.pet/__export/1611708686389/sites/debate/img/2021/01/26/9_datos_interesantes_sobre_los_perros_pug_que_tal_vez_no_sabxas.jpeg_1404015752.jpeg",
        isActive: isActive!==isActive,

        /*mandar todo el objeto !== cambiar solo isActivate*/ isActive: true,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

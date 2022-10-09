import { prismaClient } from "../../database/client.js"

export class CreateEstadoController {

    async handle(request, response) {

        const { nome, sigla } = request.body;

        const estado = await prismaClient.estado.create({
            data: {
                nome,
                sigla
            }
        });

        return response.json(estado);
    }
}
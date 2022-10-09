import { prismaClient } from "../../database/client.js";

export class GetEstadoByIdController {

    async handle(request, response) {

        const { id } = request.params;

        const estado = await prismaClient.estado.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(estado);
    }
}
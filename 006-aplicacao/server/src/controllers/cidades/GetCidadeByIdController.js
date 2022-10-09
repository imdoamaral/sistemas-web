import { prismaClient } from '../../database/client.js';

export class GetCidadeByIdController {

    async handle(request, response) {

        const { id } = request.params;

        const cidade = await prismaClient.cidade.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(cidade);
    }
}
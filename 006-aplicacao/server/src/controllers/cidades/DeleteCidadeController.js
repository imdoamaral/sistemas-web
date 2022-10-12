import { prismaClient } from '../../database/client.js';

export class DeleteCidadeController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const cidade = await prismaClient.cidade.delete({
                where: {
                    id: id
                }
            });

            return response.json(cidade);

        } catch (error) {
            console.log('[DeleteCidadeController] Cidade id does not exist.');

            return response.status(400).json({
                message: 'Cidade id does not exist.'
            });
        }
    }
}
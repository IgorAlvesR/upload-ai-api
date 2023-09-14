import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from 'zod'
import { streamToResponse, OpenAIStream } from 'ai'
import { openai } from "../lib/openai";

export async function generateAICompletionRoute(app: FastifyInstance) {
  app.post("/ai/completion", async (req, reply) => {       
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      prompt: z.string(),
      temperature: z.number().min(0).max(1).default(0.5)
    })

    const { videoId, temperature, prompt } = bodySchema.parse(req.body)

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id: videoId
      }
    })

    if(!video.transcription) {
      return reply.status(400).send({error: 'Video transcription was not generated yet.'})
    }

    const promptMessage = prompt.replace('{transcription}', video.transcription)

    const response = await openai.chat.completions.create({
      stream: true,
      model: 'gpt-3.5-turbo-16k',
      temperature,
      messages: [
        { role: 'user', content: promptMessage }
      ]
    })

    const stream = OpenAIStream(response)

    streamToResponse(stream, reply.raw, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }
    })
  })
}
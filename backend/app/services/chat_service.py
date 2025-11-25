from ..services.openai_client import OpenAIClient


class ChatService:
    def __init__(self, client: OpenAIClient | None = None):
        self.client = client or OpenAIClient()

    async def reply(self, prompt: str):
        chunks = []
        async for part in self.client.stream_completion(prompt):
            chunks.append(part)
        return "".join(chunks)

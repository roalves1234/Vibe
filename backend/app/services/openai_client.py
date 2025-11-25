from typing import AsyncIterator


class OpenAIClient:
    """Placeholder client that will stream messages from OpenAI."""

    async def stream_completion(self, prompt: str) -> AsyncIterator[str]:
        yield f"Echo: {prompt}"

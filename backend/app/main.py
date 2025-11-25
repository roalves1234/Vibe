from fastapi import FastAPI

from .config import get_settings
from .routers import auth, chat, tree, export

settings = get_settings()
app = FastAPI(title=settings.app_name, debug=settings.debug)


@app.get("/health")
async def health_check():
    return {"status": "ok"}


app.include_router(auth.router)
app.include_router(chat.router)
app.include_router(tree.router)
app.include_router(export.router)

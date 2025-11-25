from fastapi import APIRouter, Depends

router = APIRouter(prefix="/auth", tags=["auth"])


@router.get("/ping")
async def auth_ping():
    return {"status": "ok"}

from fastapi import APIRouter

router = APIRouter(prefix="/export", tags=["export"])


@router.get("/conversation/{conversation_id}")
async def export_conversation(conversation_id: str):
    return {"conversation_id": conversation_id, "format": "json", "nodes": []}

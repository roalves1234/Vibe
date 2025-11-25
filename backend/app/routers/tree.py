from fastapi import APIRouter

router = APIRouter(prefix="/tree", tags=["tree"])


@router.get("/structure/{conversation_id}")
async def get_tree(conversation_id: str):
    return {"conversation_id": conversation_id, "nodes": []}

import uuid
from datetime import datetime
from pydantic import BaseModel

from ..models.node import NodeRole


class NodeBase(BaseModel):
    parent_id: uuid.UUID | None = None
    role: NodeRole
    content: str


class NodeCreate(NodeBase):
    conversation_id: uuid.UUID


class NodeRead(NodeBase):
    id: uuid.UUID
    conversation_id: uuid.UUID
    created_at: datetime

    class Config:
        orm_mode = True

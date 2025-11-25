import uuid
from dataclasses import dataclass
from typing import Iterable

from ..schemas.node import NodeRead


@dataclass
class TreeSnapshot:
    conversation_id: uuid.UUID
    nodes: Iterable[NodeRead]


def empty_tree(conversation_id: uuid.UUID) -> TreeSnapshot:
    return TreeSnapshot(conversation_id=conversation_id, nodes=[])

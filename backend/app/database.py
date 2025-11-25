from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from .config import get_settings


class Base(DeclarativeBase):
    pass


def _get_engine():
    settings = get_settings()
    return create_async_engine(settings.database_url, echo=settings.debug, future=True)


def get_sessionmaker() -> async_sessionmaker[AsyncSession]:
    return async_sessionmaker(bind=_get_engine(), expire_on_commit=False)


async def get_db_session():
    async_session = get_sessionmaker()
    async with async_session() as session:
        yield session

from functools import lru_cache
from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    app_name: str = "TreeChat AI"
    debug: bool = Field(default=False)
    database_url: str = Field(
        default="postgresql+asyncpg://treechat:treechat@db:5432/treechat"
    )
    secret_key: str = Field(default="changeme")
    access_token_expire_minutes: int = Field(default=60 * 24)

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()

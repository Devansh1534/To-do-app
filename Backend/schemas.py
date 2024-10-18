from pydantic import BaseModel
from datetime import datetime

class TaskBase(BaseModel):
    title: str
    description: str
    status: str = "todo"

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    status: str

class Task(TaskBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Expense(BaseModel):
    amount: float
    category: str
    date: datetime
    description: Optional[str] = None

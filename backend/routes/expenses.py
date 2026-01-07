from fastapi import APIRouter
from fastapi import HTTPException
from db import db
from models import Expense
from bson import ObjectId

router = APIRouter()

# Convert MongoDB object to JSON-friendly
def serialize(item):
    item["_id"] = str(item["_id"])
    return item


@router.post("/expenses")
def add_expense(expense: Expense):
    result = db.expenses.insert_one(expense.dict())
    return {"id": str(result.inserted_id)}


@router.get("/expenses")
def get_expenses():
    data = list(db.expenses.find())
    return [serialize(item) for item in data]


@router.delete("/expenses/{expense_id}")
def delete_expense(expense_id: str):
    result = db.expenses.delete_one({"_id": ObjectId(expense_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Expense not found")
    return {"message": "deleted"}


@router.put("/expenses/{expense_id}")
def update_expense(expense_id: str, expense: Expense):
    update_data = expense.dict()
    result = db.expenses.update_one({"_id": ObjectId(expense_id)}, {"$set": update_data})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Expense not updated")
    return {"message": "updated"}

# Coding Exercise

This exercise is a coding exercise to practice on various field, including State Management (React), data design (Prisma), backend logic (tRPC) and UI Design (tailwindcss)

# Description

We will create a system for user to log expenses and give the user a total sum of the expenses.

# The User Story

1. User is able to key in an amount and a description to form an expense.
2. User is able to view the total sum of the expenses logged.

# The Steps

1. In `index.tsx`, create a form to allow user to enter an expense.
2. Style the form so that it is visible.
3. At `prisma/schema.prisma`, setup an Expense model.
4. In `server/router/expense.ts`, create a trpc router to allow user to create an expense.
5. In `index.tsx`, create a list to show all the expenses.
6. Style the list so that it is more presentable.
7. In `index.tsx`, create a total sum of the expenses.
8. Style the total sum so that it is more presentable.

# How to run

1. `npm install`
2. Duplicate `.env-example` and rename to `.env`
3. `npm run dev`

---

To include unit test in further release

# Coding Exercise

This exercise is a coding exercise to practice on various field, including State Management (React), data design (Prisma), backend logic (tRPC) and UI Design (tailwindcss)

# Description

We will create a system for user to log expenses and give the user a total sum of the expenses.

# The User Story

1. User is required to enter the name to start.
2. User is able to key in an amount and a description to form an expense.
3. User is able to view the total sum of the expenses logged.

# The Steps

1. At `prisma/schema.prisma`, setup a User model.
2. In `server/router/user.ts`, create a trpc router to allow user to create a user.
3. At `index.tsx`, create a form to allow user to enter user's name.
4. Style the form so that it is visible.
5. At `prisma/schema.prisma`, setup an Expense model.
6. In `server/router/expense.ts`, create a trpc router to allow user to create an expense.
7. In `index.tsx`, create a form to allow user to enter an expense.
8. Style the form so that it is visible.
9. In `index.tsx`, create a list to show all the expenses.
10. Style the list so that it is more presentable.
11. In `index.tsx`, create a total sum of the expenses.
12. Style the total sum so that it is more presentable.

---

To include unit test in further release

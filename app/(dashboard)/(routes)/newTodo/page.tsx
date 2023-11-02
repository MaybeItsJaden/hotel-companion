import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

async function createTodo(data: FormData) {
  "use server"

  const guestName = data.get("guestName")?.valueOf()
  const roomNumber = data.get("roomNumber")?.valueOf()
  const description = data.get("description")?.valueOf()
  if (typeof description !== "string" || description.length === 0) {
    throw new Error("Invalid description")
  }

  await prisma.todo.create({
    data: {
      guestName: guestName as string,
      roomNumber: roomNumber as string,
      description: description as string,
    },
  })
  redirect("/guestRequestsToDos")
}

export default function NewTodo() {
  return (
    <>
      <header className="mb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">New To-Do</h1>
      </header>
      
      <form action={createTodo} className="flex flex-col md:flex-row p-12 gap-6">
        <Input
          type="text"
          name="guestName"
          placeholder="Guest Name"
          className="flex-initial w-64"
        />
        <Input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          className="flex-initial w-32"
        />
        <Input
          name="description"
          placeholder="Description"
          className="flex-auto w-64"
        />

        <div className="flex gap-1 justify-end mt-6 sm:mt-0">
          <Button asChild variant="destructive">  
            <Link href="..">
              Cancel
            </Link>
          </Button>  
          <Button type="submit">
            Create
          </Button>
        </div>
      </form>
    </>
  )
}
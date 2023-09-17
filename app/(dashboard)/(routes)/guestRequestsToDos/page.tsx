import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

// This is a placeholder, replace it with your actual data fetched from Prisma and MongoDB
// You would typically use a function like `getServerSideProps` or `getStaticProps` 
// to fetch data from your MongoDB database through Prisma.
const todos = [
  {
    createdAt: "10:00 AM",
    guestName: "Doe, J",
    roomNumber: "101",
    title: "Room Service",
    description: "Needs extra towels",
    completed: false,
  },
  // Add more todos here
];

type CardProps = React.ComponentProps<typeof Card>;

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardContent className="grid gap-4">
        {/* This map function will iterate over the data fetched from your database. */}
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              {/* Display the time the todo was created. This will be fetched from your database. */}
              <p className="text-sm font-medium leading-none">{todo.createdAt}</p>
              {/* Display the guest's name. This will be fetched from your database. */}
              <p className="text-sm">{todo.guestName}</p>
              {/* Display the room number. This will be fetched from your database. */}
              <p className="text-sm">{todo.roomNumber}</p>
              {/* Display the todo description. This will be fetched from your database. */}
              <p className="text-sm text-muted-foreground">{todo.description}</p>
            </div>
            {/* This switch indicates whether the todo is completed or not. 
                 You would typically update this in your database when it changes. */}
            <Switch checked={todo.completed} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {/* This button could be used to mark selected todos as completed in your database. */}
          <Check className="mr-2 h-4 w-4" /> Complete Selected
        </Button>
      </CardFooter>
    </Card>
  );
}

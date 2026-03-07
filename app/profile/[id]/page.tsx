import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SignOutButton } from "@/components/sign-out-button";

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const mockGoals = [
    {
      id: 1,
      title: "Run a Marathon",
      status: "approved",
      description: "Completed NYC Marathon 2023",
      attachmentUrl: "/file.svg",
    },
    {
      id: 2,
      title: "Learn Next.js",
      status: "pending",
      description: "Built this GOALS app",
    },
    {
      id: 3,
      title: "Jump in parachute",
      status: "approved",
      description: "Built this GOALS app",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="container mx-auto py-8 relative"
        style={{ paddingInlineStart: 0, paddingInlineEnd: 0 }}
      >
        {/* Header Section */}
        <Card className="mt-3">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/assets/welcome_image.png" />
              <AvatarFallback>
                {param.id.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex justify-between">
                <CardTitle className="text-2xl">@{param.id}</CardTitle>
              </div>
              <CardDescription>User Bio</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Register Goal Button (Conditional) */}
      {true /* Replace with auth check */ && (
        <Button className="mb-6 py-10 w-full text-2xl" asChild>
          {/*<a href={`/${param.id}/register-goal`}>Register New Goal</a>*/}
          <a href="">Register New Goal</a>
        </Button>
      )}

      <SignOutButton />

      {/* Goals Navigation */}
      <Tabs defaultValue="goals" className="w-full">
        {/* Goals Tab */}
        <TabsContent value="goals">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockGoals.map((goal) => (
              <Card key={goal.id} className="flex flex-col h-full">
                {/* Imagen rectangular que ocupa la parte superior */}
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src="/assets/welcome_image.png"
                    alt={goal.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* Contenido de la Card */}
                <div className="p-4 flex-grow">
                  <CardHeader className="p-0">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{goal.title}</CardTitle>
                      <Badge
                        variant={
                          goal.status === "approved" ? "default" : "secondary"
                        }
                      >
                        {goal.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-muted-foreground text-sm">
                      {goal.description}
                    </p>
                  </CardContent>
                </div>
                {/* Footer de la Card (opcional) */}
                <div className="p-4 pt-0">
                  <Button variant="outline" className="w-full mt-2">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activity Tab (Placeholder) */}
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No recent activity.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

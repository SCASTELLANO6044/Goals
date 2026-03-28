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
import { signOut } from "@/lib/actions";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { QueryData } from "@supabase/supabase-js";

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient(cookies());
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  console.log(user);
  const name = user?.user_metadata?.full_name ?? "Anonymous";
  const avatar_url = user?.user_metadata?.avatar_url ?? "";
  const email = user?.email ?? "";
  const param = await params;
  const goalsByUserQuery = supabase
    .from("goals")
    .select(`
    *,
    nm_users_goals!inner (
      users_id
    )
  `)
    .eq("nm_users_goals.users_id", user?.id);
  type GoalsByUser = QueryData<typeof goalsByUserQuery>;

  const { data: goals, error } = await goalsByUserQuery;
  if (error) throw error;

  const goalsWithImages = await Promise.all(
    goals?.map(async (goal) => {
      if (!goal.path) {
        return { ...goal, image_url: null };
      }

      const { data, error } = await supabase.storage
        .from("images")
        .createSignedUrl(goal.path, 60 * 60);

      if (error) {
        console.error(error);
        return { ...goal, image_url: null };
      }

      return {
        ...goal,
        image_url: data.signedUrl,
      };
    }) || []
  );

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
              <AvatarImage src={avatar_url} />
              <AvatarFallback>
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex justify-between">
                <CardTitle className="text-2xl">{name}</CardTitle>
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
          <a href={`/profile/${email}/register-goal`}>Register New Goal</a>
        </Button>
      )}

      {/* Provisional Sign-out Button (Conditional) */}
      <form action={signOut}>
        <button className='btn' type='submit'>
          Sign Out
        </button>
      </form>

      {/* Goals Navigation */}
      <Tabs defaultValue="goals" className="w-full">
        {/* Goals Tab */}
        <TabsContent value="goals">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {goalsWithImages?.map((goal) => (
              <Card key={goal.id} className="flex flex-col h-full">
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={goal.image_url || "/assets/Goals-logo.png"}
                    loading="eager"
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
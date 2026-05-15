import { SettingsProfile1 } from "@/components/settings-profile1";
import { createClientForServer } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = createClientForServer();
  const { data } = await (await supabase).auth.getUser();
  const user = data.user;

  const defaultValues = {
    name: user?.user_metadata?.full_name ?? "Random",
    email: user?.email ?? "random@email.com",
    username:
      user?.user_metadata?.username ??
      user?.email?.split("@")[0] ??
      "random",
    avatar:
      user?.user_metadata?.avatar_url ??
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar8.jpg",
    bio:
      user?.user_metadata?.bio ??
      "Product designer with 8+ years of experience crafting intuitive digital experiences. Currently focused on design systems and accessibility.",
  };

  return <SettingsProfile1 className="mx-auto" defaultValues={defaultValues} />;
}
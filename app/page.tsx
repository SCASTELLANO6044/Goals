import { Hero47 } from "@/components/hero47";
import { createClientForServer } from "@/lib/supabase/server";
import { redirect } from 'next/navigation';


export default async function Home() {
  const supabase = createClientForServer();
  const session = await (await supabase).auth.getUser();

  if (!session.data.user) {
    return (
      <div>
        <Hero47 />
      </div>
    );
  }

  const {
    data: {
      user: { user_metadata, app_metadata },
    },
  } = session

  const { email } = user_metadata

  const userName = email ? `${email}` : 'User Name Not Set'

  redirect('/profile/' + userName);
}
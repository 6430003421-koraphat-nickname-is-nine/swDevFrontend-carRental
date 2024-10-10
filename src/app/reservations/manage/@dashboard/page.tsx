import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  let createAt = new Date(profile.data.createAt);
  const pdata = profile.data;

  return (
    <main className="bg-slate-100 m-5 p-5">
      <div>Your Dashvboard</div>
      <div className="text-2xl">{pdata.name}</div>
      <table className="table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{pdata.email}</td>
          </tr>
          <tr>
            <td>Tel</td>
            <td>{pdata.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td>{createAt.toString()}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

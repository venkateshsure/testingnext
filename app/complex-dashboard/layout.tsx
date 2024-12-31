export const metadata = {
    title:"Complex Dashboard"
}

export default function ComplexDashboardLayout({
    children,
    revenue,
    notifications,
    users,
    register,
  }: {
    children: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
    register: React.ReactNode;
  }) {
    const loggedIn = true
    return (
      loggedIn ? <div>
        <main>
          <div>{children}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
          <div>{users}</div>
        </main>
      </div>:register
    );
  }
  
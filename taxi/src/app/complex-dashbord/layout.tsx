export default function DashboardLayout({
  children,
  users,
  revenue,
  notificftions,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notificftions: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div> {/* Content from page.tsx */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notificftions} </div>
      </div>
    </div>
  );
}

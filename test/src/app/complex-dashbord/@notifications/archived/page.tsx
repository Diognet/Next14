import Card from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href="/complex-dashbord">Default</Link>
      </div>
    </Card>
  );
}

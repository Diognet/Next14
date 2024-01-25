import Card from '@/components/card';
import Link from 'next/link';

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashbord/archived">Archived</Link>
      </div>
    </Card>
  );
}

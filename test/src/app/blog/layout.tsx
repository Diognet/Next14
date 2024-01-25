export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Страница контактов</h2>
      <div
        style={{
          backgroundColor: 'Orange',
          padding: '1rem',
        }}
      >
        <p>Screen</p>
      </div>
    </>
  );
}

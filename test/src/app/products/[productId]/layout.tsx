function getRanomInt(count: number) {
  return Math.floor(Math.random() * count);
}




export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const random = getRanomInt(2);

  if (random === 1) {
    throw new Error("Error Loading product");
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
      {/*Карусель продуктов*/}


   

  </>
  );
}

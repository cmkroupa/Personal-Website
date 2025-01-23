type HomeProps = {
  id?: string; // id is optional
};

export default function Home({ id }: HomeProps) {
  return (
    <div
      id={id}
      style={{
        minHeight: "25vh",
      }}
      className="spacer"
    ></div>
  );
}
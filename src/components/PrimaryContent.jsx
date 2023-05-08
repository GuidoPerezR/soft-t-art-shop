import flower from "../images/flower.png";

function PrimaryContent() {
  return (
    <main className="bg-pink flex h-5/6 py-20 px-96">
      <div>
        <img src={flower} alt="" className="mx-12" />
      </div>
      <div>
        <p>Artesanias 100% hechas a mano</p>
        <p>Texto</p>
      </div>
    </main>
  );
}

export default PrimaryContent;

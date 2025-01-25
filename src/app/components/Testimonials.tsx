import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="testemunhos py-24 bg-white">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="testemunhos_wrapper flex justify-around gap-6">
        <article className="testemunho bg-gray-100 rounded-lg shadow-md p-6">
          <Image
            src="/images/western-man-4975942-4159828-1-2x.png"
            alt="Imagem de perfil do cliente"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-4"
            priority
          />
          <div className="testemunho_content">
            <h3 className="testemunho_nome text-lg font-semibold text-gray-800">
              Andrew Rathore
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </article>

        <article className="testemunho bg-gray-100 rounded-lg shadow-md p-6">
          <Image
            src="/images/western-man-4975942-4159828-2-2x.png"
            alt="Imagem de perfil do cliente"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-4"
            priority
          />
          <div className="testemunho_content">
            <h3 className="testemunho_nome text-lg font-semibold text-gray-800">
              Vera Duncan
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </article>

        <article className="testemunho bg-gray-100 rounded-lg shadow-md p-6">
          <Image
            src="/images/western-man-4975942-4159828-3-2x.png"
            alt="Imagem de perfil do cliente"
            width={96}
            height={96}
            className="rounded-full mx-auto mb-4"
            priority
          />
          <div className="testemunho_content">
            <h3 className="testemunho_nome text-lg font-semibold text-gray-800">
              Andrew Rathore
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

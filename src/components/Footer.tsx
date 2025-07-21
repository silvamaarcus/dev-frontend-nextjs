import { FacebookFill, InstagramFill, XFill } from "akar-icons";

export const FooterComponent = () => {
  return (
    <footer className="bg-foreground mt-12 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Sobre a NextStore</h3>
            <p className="text-sm text-gray-400">
              Sua loja online definitiva para os melhores produtos. Construído
              com paixão usando Next.js, TypeScript e a FakeStore API para fins
              de demonstração.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Nosso Endereço</h3>
            <p className="text-sm text-gray-400">Rua Fictícia, 123</p>
            <p className="text-sm text-gray-400">Bairro Inovação</p>
            <p className="text-sm text-gray-400">
              Cidade Next, Estado JS, 12345-678
            </p>
            <p className="mt-2 text-sm text-gray-400">Brasil</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Conecte-se Conosco</h3>
            <p className="mb-2 text-sm text-gray-400">
              Email: contato@nextstore.com
            </p>
            <p className="mb-4 text-sm text-gray-400">
              Telefone: (XX) XXXX-XXXX
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/nextstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <FacebookFill strokeWidth={2} size={24} />
              </a>
              <a
                href="https://x.com/nextstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <XFill strokeWidth={2} size={24} />
              </a>
              <a
                href="https://instagram.com/nextstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <InstagramFill strokeWidth={2} size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NextStore. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
